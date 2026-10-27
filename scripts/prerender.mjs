// Pré-renderização: depois do build, gera um HTML completo pra cada página
// (texto, título, descrição e schema já no arquivo), pra Google e IAs lerem sem
// precisar rodar JavaScript. Também gera sitemap.xml e llms.txt.
//
// Ordem no `npm run build`: vite build (navegador) -> vite build --ssr (servidor) -> este script.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(raiz, "dist");
const distSsr = path.join(raiz, "dist-ssr");
const SITE = "https://domous.com.br";
const OG_IMAGEM = `${SITE}/og-domous.jpg`;

const { render, rotas, rota404, servicos, segmentos, home, quantoCusta, sobre, guia, resultados, guias } = await import(pathToFileURL(path.join(distSsr, "entry-server.js")).href);
const modelo = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

// Rastreio (rastreio.json). Só entra o script do ID preenchido. O clique em qualquer
// link de WhatsApp (data-cta="whatsapp") vira evento de lead no GA4 e no pixel.
const ids = JSON.parse(fs.readFileSync(path.join(raiz, "rastreio.json"), "utf-8"));
const rastreio = [
  ids.ga4 && `<script async src="https://www.googletagmanager.com/gtag/js?id=${ids.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${ids.ga4}");</script>`,
  ids.clarity && `<script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${ids.clarity}");</script>`,
  ids.metaPixel && `<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","${ids.metaPixel}");fbq("track","PageView");</script>`,
  (ids.ga4 || ids.metaPixel) &&
    `<script>document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('[data-cta="whatsapp"]');if(!a)return;var o=a.getAttribute("data-origem")||location.pathname;if(window.gtag)gtag("event","generate_lead",{method:"whatsapp",origem:o,page_path:location.pathname});if(window.fbq)fbq("track","Contact",{origem:o});},true);</script>`,
].filter(Boolean);

const attr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const texto = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
// JSON dentro de <script>: "<" escapado pra nenhum texto fechar a tag sem querer.
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function cabecalho(rota) {
  const url = SITE + rota.path;
  return [
    `<title>${texto(rota.titulo)}</title>`,
    `<meta name="description" content="${attr(rota.descricao)}" />`,
    rota.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="Domous" />`,
    `<meta property="og:title" content="${attr(rota.titulo)}" />`,
    `<meta property="og:description" content="${attr(rota.descricao)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGEM}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(rota.titulo)}" />`,
    `<meta name="twitter:description" content="${attr(rota.descricao)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGEM}" />`,
    ...rota.jsonLd.map((ld) => `<script type="application/ld+json">${json(ld)}</script>`),
    ...rastreio,
  ].join("\n    ");
}

function pagina(rota, urlRender) {
  const corpo = render(urlRender);
  // Substituição por função: o texto tem "R$", e "$" numa string de troca vira padrão especial.
  const html = modelo
    .replace(/<!-- seo:inicio[\s\S]*?<!-- seo:fim -->/, () => cabecalho(rota))
    .replace('<div id="root"></div>', () => `<div id="root">${corpo}</div>`);
  if (html === modelo || !html.includes(corpo)) throw new Error(`Modelo sem marcadores esperados (${rota.path})`);
  return html;
}

for (const rota of rotas) {
  const destino = path.join(dist, rota.path, "index.html");
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, pagina(rota, rota.path));
}
fs.writeFileSync(path.join(dist, "404.html"), pagina(rota404, "/pagina-que-nao-existe/"));

const hoje = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    rotas.map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${hoje}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`,
);

// llms.txt: resumo em texto puro pra assistentes de IA (formato proposto em llmstxt.org).
const secao = (titulo, prefixo) =>
  `## ${titulo}\n\n` +
  rotas
    .filter((r) => r.path.startsWith(prefixo) && r.path !== prefixo)
    .map((r) => `- [${r.titulo.split(" | ")[0]}](${SITE}${r.path}): ${r.descricao}`)
    .join("\n");
const avulsas = rotas.filter((r) => !/^\/(servicos|segmentos|guias)\//.test(r.path) && r.path !== "/");
fs.writeFileSync(
  path.join(dist, "llms.txt"),
  [
    "# Domous",
    "",
    "> Agência de tráfego pago e consultoria de crescimento de João Pessoa, Paraíba (Brasil). Gestão de Meta Ads, Google Ads e TikTok Ads, consultoria de marketing e vendas, assessoria pra negócios locais, loja virtual na Tray e na Shopify, CRM com agente de IA no WhatsApp e conteúdo. Mais de 70 empresas atendidas e mais de R$ 50 milhões em vendas geradas pros clientes. Fundador e CEO: Kairo Lucas.",
    "",
    "Contato: WhatsApp +55 83 98119-5186 · domousc@gmail.com · Instagram @domousc · CNPJ 66.244.263/0001-54.",
    "Atende João Pessoa, Paraíba e outros estados do Brasil (presencial em João Pessoa, online no resto).",
    `Texto completo do site em Markdown: ${SITE}/llms-full.txt`,
    "",
    secao("Serviços", "/servicos/"),
    "",
    secao("Segmentos", "/segmentos/"),
    "",
    secao("Guias", "/guias/"),
    "",
    "## Mais",
    "",
    avulsas.map((r) => `- [${r.titulo.split(" | ")[0]}](${SITE}${r.path}): ${r.descricao}`).join("\n"),
    "",
  ].join("\n"),
);

// llms-full.txt: o texto completo de cada página em Markdown, pra IA ler o site inteiro de uma vez.
const md = [];
const blocoPagina = (titulo, url, p) => {
  md.push(`# ${titulo}`, "", `URL: ${url}`, "", p.resposta, "");
  for (const [rotulo, lista] of [["Pra quem é", p.paraQuem], ["Sinais de que precisa", p.sinais], ["O que a gente mede", p.metricas], ["Ferramentas", p.ferramentas]]) {
    if (lista?.length) md.push(`## ${rotulo}`, "", ...lista.map((i) => `- ${i}`), "");
  }
  for (const s of p.secoes ?? []) md.push(`## ${s.titulo}`, "", ...s.paragrafos.flatMap((x) => [x, ""]), ...(s.itens ?? []).map((i) => `- ${i}`), "");
  if (p.etapas?.length) md.push("## Como funciona", "", ...p.etapas.map((e, i) => `${i + 1}. ${e.titulo}: ${e.texto}`), "");
  if (p.faq?.length) md.push("## Perguntas frequentes", "", ...p.faq.flatMap((f) => [`### ${f.p}`, "", f.r, ""]));
};
md.push("# Domous: agência de tráfego pago e growth em João Pessoa", "", home.resposta, "");
md.push("## Resultados (por segmento; clientes não são identificados)", "", ...resultados.map((r) => `- ${r.segmento}: ${r.titulo}`), "");
md.push("## Como funciona", "", ...home.passos.map((p, i) => `${i + 1}. ${p.titulo}: ${p.texto}`), "");
md.push("## Perguntas frequentes", "", ...home.faq.flatMap((f) => [`### ${f.p}`, "", f.r, ""]));
for (const p of servicos) blocoPagina(p.h1, `${SITE}/servicos/${p.slug}/`, p);
for (const p of segmentos) blocoPagina(p.h1, `${SITE}/segmentos/${p.slug}/`, p);
blocoPagina(quantoCusta.h1, `${SITE}/quanto-custa/`, quantoCusta);
blocoPagina(sobre.h1, `${SITE}/sobre/`, sobre);
blocoPagina(guia.h1, `${SITE}/como-escolher-agencia-de-trafego-pago/`, guia);
for (const g of guias) blocoPagina(g.h1, `${SITE}/guias/${g.slug}/`, g);
fs.writeFileSync(path.join(dist, "llms-full.txt"), md.join(String.fromCharCode(10)));

fs.rmSync(distSsr, { recursive: true, force: true });
console.log(`Pré-renderizadas ${rotas.length} páginas + 404, sitemap.xml, llms.txt e llms-full.txt`);
