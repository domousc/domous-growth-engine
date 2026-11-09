// Worker do Cloudflare: redireciona www pro domínio principal, recebe os leads
// da página /comecar e entrega os arquivos estáticos gerados pelo build (pasta dist).
import { PERGUNTAS } from "../src/data/comecar.ts";
import paginaMapa from "./mapa.html";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === "www.domous.com.br") {
      url.hostname = "domous.com.br";
      return Response.redirect(url.toString(), 301);
    }
    // Os guias mudaram pra /blog/ em 27/10/2026.
    if (url.pathname === "/guias" || url.pathname.startsWith("/guias/")) {
      url.pathname = url.pathname.replace(/^\/guias(\/feed\.xml)?/, (m, feed) => (feed ? "/blog/feed.xml" : "/blog"));
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/lead") return receberLead(request, env, ctx);
    if (url.pathname === "/api/comecar/evento") return receberEvento(request, env);
    if (url.pathname === "/api/comecar/mapa") return dadosDoMapa(request, env, url);
    // Mapa do formulário: página fora do site (não está no build nem no sitemap).
    // A página abre pra qualquer um, mas os dados só saem com a senha.
    if (url.pathname === "/comecar/mapa" || url.pathname === "/comecar/mapa/") {
      return new Response(paginaMapa, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" } });
    }
    return env.ASSETS.fetch(request);
  },
};

const json = (dados, status = 200) =>
  new Response(JSON.stringify(dados), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const texto = (v, max) => String(v ?? "").trim().replace(/\s+/g, " ").slice(0, max);

async function hash(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

/* Lead da /comecar. Duas escritas, nesta ordem:
   1. backup na tabela `leads_site` do D1 (nunca perde lead, mesmo com o CRM fora);
   2. oportunidade no funil do Sistema Domous (Supabase), pela função
      `receber_lead_site`, que só aceita quem manda a chave SITE_LEAD_CHAVE.
   A resposta pro navegador não espera o passo 2: a pessoa segue pro WhatsApp. */
async function receberLead(request, env, ctx) {
  if (request.method !== "POST") return json({ ok: false }, 405);
  if (Number(request.headers.get("content-length") || 0) > 20000) return json({ ok: false }, 413);
  let d;
  try { d = await request.json(); } catch { return json({ ok: false, erro: "corpo inválido" }, 400); }

  // Campo isca preenchido = robô. Responde ok pra ele não tentar de novo.
  if (d.site) return json({ ok: true });

  const lead = {
    nome: texto(d.nome, 80),
    empresa: texto(d.empresa, 100),
    whatsapp: String(d.whatsapp ?? "").replace(/\D/g, "").slice(0, 13),
    papel: texto(d.papel, 60),
    segmento: texto(d.segmento, 80),
    faturamento: texto(d.faturamento, 60),
    classe: ["A", "B", "C"].includes(d.classe) ? d.classe : "C",
    temperatura: ["quente", "morno", "frio"].includes(d.temperatura) ? d.temperatura : "frio",
    resumo: Array.isArray(d.resumo) ? d.resumo.slice(0, 20).map((l) => texto(l, 300)) : [],
    utm: d.utm && typeof d.utm === "object"
      ? Object.fromEntries(Object.entries(d.utm).slice(0, 8).map(([k, v]) => [texto(k, 30), texto(v, 200)]))
      : {},
  };
  if (lead.nome.length < 2 || !lead.empresa || lead.whatsapp.length < 10) return json({ ok: false, erro: "dados incompletos" }, 400);

  const ipHash = await hash((request.headers.get("cf-connecting-ip") || "") + new Date().toISOString().slice(0, 10));
  const agora = new Date().toISOString();
  let id = null;

  if (env.DB) {
    // No máximo 5 envios por hora do mesmo IP.
    const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads_site WHERE ip_hash = ? AND criado_em > ?")
      .bind(ipHash, new Date(Date.now() - 3600e3).toISOString()).first();
    if (n >= 5) return json({ ok: false, erro: "muitos envios" }, 429);
    const r = await env.DB.prepare(
      `INSERT INTO leads_site (criado_em, nome, empresa, whatsapp, papel, segmento, faturamento, classe, temperatura, resumo, respostas, utm, ip_hash)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`)
      .bind(agora, lead.nome, lead.empresa, lead.whatsapp, lead.papel, lead.segmento, lead.faturamento, lead.classe, lead.temperatura,
        lead.resumo.join("\n"), JSON.stringify(d.respostas ?? {}).slice(0, 4000), JSON.stringify(lead.utm), ipHash)
      .first();
    id = r?.id ?? null;
  }

  ctx.waitUntil(enviarProCrm(lead, id, env));
  return json({ ok: true });
}

async function enviarProCrm(lead, id, env) {
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON || !env.SITE_LEAD_CHAVE) return;
  let status = "erro";
  let detalhe = "";
  try {
    const resp = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/receber_lead_site`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: env.SUPABASE_ANON, Authorization: `Bearer ${env.SUPABASE_ANON}` },
      body: JSON.stringify({ p: { ...lead, chave: env.SITE_LEAD_CHAVE } }),
    });
    detalhe = (await resp.text()).slice(0, 500);
    if (resp.ok) status = "ok";
  } catch (e) {
    detalhe = String(e).slice(0, 500);
  }
  if (env.DB && id) {
    await env.DB.prepare("UPDATE leads_site SET crm_status = ?, crm_resposta = ? WHERE id = ?").bind(status, detalhe, id).run();
  }
}

/* ── Mapa do formulário ──────────────────────────────────────────────────────
   Eventos anônimos (sem nome nem telefone) de cada tela vista e resposta dada,
   pra ver o caminho de cada lead e onde ele desiste. */
const TELAS_ESPECIAIS = ["contato", "implicacao", "fora", "fim"];
const TIPOS = ["ver", "responder", "contato", "fora", "fim"];

async function receberEvento(request, env) {
  if (request.method !== "POST" || !env.DB) return new Response(null, { status: 204 });
  if (Number(request.headers.get("content-length") || 0) > 4000) return new Response(null, { status: 413 });
  let lista;
  try { lista = JSON.parse(await request.text()); } catch { return new Response(null, { status: 400 }); }
  if (!Array.isArray(lista)) lista = [lista];
  const agora = new Date().toISOString();
  const validos = lista.slice(0, 10).filter((e) =>
    e && /^[a-z0-9]{8,40}$/i.test(e.sessao || "") && TIPOS.includes(e.tipo) &&
    (PERGUNTAS[e.tela] || TELAS_ESPECIAIS.includes(e.tela)));
  if (validos.length) {
    await env.DB.batch(validos.map((e) => env.DB.prepare(
      "INSERT INTO comecar_eventos (criado_em, sessao, tipo, tela, resposta, segmento, origem) VALUES (?, ?, ?, ?, ?, ?, ?)")
      .bind(agora, e.sessao, e.tipo, e.tela, texto(e.resposta, 40) || null, texto(e.segmento, 40) || null, texto(e.origem, 60) || null)));
  }
  return new Response(null, { status: 204 });
}

async function senhaConfere(request, env) {
  const senha = request.headers.get("x-chave") || "";
  if (!env.MAPA_HASH || !senha) return false;
  return (await hash(senha + "domous-mapa")) === env.MAPA_HASH;
}

async function dadosDoMapa(request, env, url) {
  if (!(await senhaConfere(request, env))) return json({ ok: false, erro: "senha" }, 401);
  if (!env.DB) return json({ ok: false, erro: "sem banco" }, 503);
  const dias = Math.min(Math.max(Number(url.searchParams.get("dias")) || 30, 1), 3650);
  const desde = new Date(Date.now() - dias * 864e5).toISOString();
  const seg = url.searchParams.get("segmento") || "";
  // Filtro de segmento vale pra sessão inteira (o segmento vem a partir da 1ª resposta).
  const filtroSessao = seg
    ? "AND sessao IN (SELECT sessao FROM comecar_eventos WHERE tela = 'segmento' AND tipo = 'responder' AND resposta = ?2)"
    : "";
  const b = (sql) => (seg ? env.DB.prepare(sql).bind(desde, seg) : env.DB.prepare(sql).bind(desde));
  const base = `FROM comecar_eventos WHERE criado_em > ?1 ${filtroSessao}`;
  const [vistas, respostas, ultimos, totais, porDia, origens] = await env.DB.batch([
    b(`SELECT tela, COUNT(DISTINCT sessao) AS n ${base} AND tipo = 'ver' GROUP BY tela`),
    b(`SELECT tela, resposta, COUNT(DISTINCT sessao) AS n ${base} AND tipo = 'responder' GROUP BY tela, resposta`),
    b(`SELECT e.tela, e.tipo, COUNT(*) AS n FROM comecar_eventos e JOIN (SELECT sessao, MAX(id) AS mid ${base} GROUP BY sessao) u ON e.id = u.mid GROUP BY e.tela, e.tipo`),
    b(`SELECT tipo, COUNT(DISTINCT sessao) AS n ${base} GROUP BY tipo`),
    b(`SELECT substr(criado_em, 1, 10) AS dia, COUNT(DISTINCT CASE WHEN tipo = 'ver' AND tela = 'segmento' THEN sessao END) AS iniciou, COUNT(DISTINCT CASE WHEN tipo = 'contato' THEN sessao END) AS contato, COUNT(DISTINCT CASE WHEN tipo = 'fim' THEN sessao END) AS fim ${base} GROUP BY dia ORDER BY dia`),
    b(`SELECT COALESCE(origem, 'direto') AS origem, COUNT(DISTINCT sessao) AS sessoes, COUNT(DISTINCT CASE WHEN tipo = 'fim' THEN sessao END) AS fim ${base} GROUP BY 1 ORDER BY 2 DESC LIMIT 12`),
  ]);
  // Mapa: cada pergunta com as opções e pra onde cada uma leva.
  const mapa = Object.values(PERGUNTAS).filter((p) => p.id !== "papel").map((p) => ({
    id: p.id, titulo: p.titulo, fase: p.fase,
    opcoes: p.opcoes.map((o) => ({ v: o.v, l: o.l, so: o.so, proxima: p.depois ? p.depois({ [p.id]: o.v }) : "fim" })),
  }));
  return json({
    ok: true, dias, segmento: seg, mapa,
    vistas: vistas.results, respostas: respostas.results, ultimos: ultimos.results,
    totais: totais.results, porDia: porDia.results, origens: origens.results,
  });
}
