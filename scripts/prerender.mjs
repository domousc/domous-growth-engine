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

const { render, rotas, rota404 } = await import(pathToFileURL(path.join(distSsr, "entry-server.js")).href);
const modelo = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

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
const avulsas = rotas.filter((r) => !/^\/(servicos|segmentos)\//.test(r.path) && r.path !== "/");
fs.writeFileSync(
  path.join(dist, "llms.txt"),
  [
    "# Domous",
    "",
    "> Agência de tráfego pago e consultoria de crescimento de João Pessoa, Paraíba (Brasil). Gestão de Meta Ads, Google Ads e TikTok Ads, consultoria de marketing e vendas, assessoria pra negócios locais, loja virtual na Tray e na Shopify, CRM com agente de IA no WhatsApp e conteúdo. Mais de 70 empresas atendidas e mais de R$ 50 milhões em vendas geradas pros clientes. Fundador e CEO: Kairo Lucas.",
    "",
    "Contato: WhatsApp +55 83 98119-5186 · domousc@gmail.com · Instagram @domousc · CNPJ 66.244.263/0001-54.",
    "Atende João Pessoa, Paraíba e outros estados do Brasil (presencial em João Pessoa, online no resto).",
    "",
    secao("Serviços", "/servicos/"),
    "",
    secao("Segmentos", "/segmentos/"),
    "",
    "## Mais",
    "",
    avulsas.map((r) => `- [${r.titulo.split(" | ")[0]}](${SITE}${r.path}): ${r.descricao}`).join("\n"),
    "",
  ].join("\n"),
);

fs.rmSync(distSsr, { recursive: true, force: true });
console.log(`Pré-renderizadas ${rotas.length} páginas + 404, sitemap.xml e llms.txt`);
