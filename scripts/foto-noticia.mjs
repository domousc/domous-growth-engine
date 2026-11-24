// Foto de capa das notícias (Domous News) com licença livre, via Wikimedia Commons.
// Só aceita domínio público, CC0, CC BY e CC BY-SA, que permitem uso com crédito.
//
//   node scripts/foto-noticia.mjs buscar "banco central brasilia"
//     lista candidatas (título, licença, autor, tamanho, link pra ver)
//   node scripts/foto-noticia.mjs baixar <slug> "File:Nome do arquivo.jpg" ["alt da foto"]
//     salva public/img/news/<slug>.webp (1600px, 16:9) e imprime o campo `foto` pro post
//   OPENAI_API_KEY=... node scripts/foto-noticia.mjs gerar <slug> "<cena em inglês>" "alt"
//     só quando não há foto livre: imagem ilustrativa por IA, sem logo, texto ou pessoa real
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const API = "https://commons.wikimedia.org/w/api.php";
const UA = { "User-Agent": "news-photo-fetcher/1.0 (editorial use with attribution)" };
const LIVRE = /^(cc0|public domain|pd|cc by(-sa)? \d(\.\d)?( [a-z]{2})?|cc by(-sa)?)$/i;

const limpar = (html = "") => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));

// O Commons limita robô (429): espera e tenta de novo.
async function api(params) {
  for (let tentativa = 1; ; tentativa++) {
    const r = await fetch(`${API}?${new URLSearchParams({ format: "json", origin: "*", ...params })}`, { headers: UA });
    if (r.ok) return r.json();
    if (r.status !== 429 || tentativa === 6) throw new Error(`Commons respondeu ${r.status}`);
    await esperar((Number(r.headers.get("retry-after")) || 20 * tentativa) * 1000);
  }
}

const IMAGEINFO = { prop: "imageinfo", iiprop: "url|size|extmetadata|mime", iiurlwidth: "1600" };
const info = async (titulos) => paginas(await api({ action: "query", titles: titulos.join("|"), ...IMAGEINFO }));

function paginas(j) {
  return Object.values(j.query?.pages ?? {}).map((p) => {
    const ii = p.imageinfo?.[0];
    if (!ii) return null;
    const m = ii.extmetadata ?? {};
    return {
      titulo: p.title,
      licenca: limpar(m.LicenseShortName?.value),
      autor: limpar(m.Artist?.value) || limpar(m.Credit?.value) || "autor não informado",
      largura: ii.width,
      altura: ii.height,
      mime: ii.mime,
      thumb: ii.thumburl ?? ii.url,
      pagina: ii.descriptionurl,
    };
  }).filter(Boolean);
}

const livre = (f) => LIVRE.test(f.licenca) && /jpeg|png|webp/.test(f.mime) && f.largura >= 1200 && f.largura > f.altura;

async function buscar(termo) {
  // Uma chamada só (busca + dados da imagem), pra não estourar o limite do Commons.
  const j = await api({ action: "query", generator: "search", gsrsearch: `${termo} filetype:bitmap`, gsrnamespace: "6", gsrlimit: "30", ...IMAGEINFO });
  const lista = paginas(j);
  if (!lista.length) return console.log("Nada encontrado.");
  const boas = lista.filter(livre);
  if (!boas.length) return console.log("Nenhuma com licença livre, paisagem e 1200px ou mais. Tente outro termo.");
  for (const f of boas) console.log(`${f.titulo}
  ${f.licenca} · ${f.autor} · ${f.largura}x${f.altura}
  ${f.thumb}
`);
}

async function baixar(slug, titulo, alt) {
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error("slug inválido");
  const [f] = await info([titulo.startsWith("File:") ? titulo : `File:${titulo}`]);
  if (!f) throw new Error("Arquivo não encontrado no Commons");
  if (!livre(f)) throw new Error(`Não serve: ${f.licenca}, ${f.largura}x${f.altura}`);
  const r = await fetch(f.thumb, { headers: UA });
  if (!r.ok) throw new Error(`Download falhou (${r.status})`);
  const pasta = path.join(process.cwd(), "public", "img", "news");
  fs.mkdirSync(pasta, { recursive: true });
  await sharp(Buffer.from(await r.arrayBuffer())).resize(1600, 900, { fit: "cover", position: "attention" }).webp({ quality: 74 }).toFile(path.join(pasta, `${slug}.webp`));
  const credito = `Foto: ${f.autor} / Wikimedia Commons (${f.licenca})`;
  console.log(`Salvo em public/img/news/${slug}.webp\n\n  foto: ${JSON.stringify({ arquivo: `/img/news/${slug}.webp`, alt: alt ?? "[DESCREVER A FOTO]", credito, url: f.pagina })},`);
}

async function gerar(slug, cena, alt) {
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error("slug inválido");
  const chave = process.env.OPENAI_API_KEY;
  if (!chave) throw new Error("Falta OPENAI_API_KEY");
  const prompt = `${cena}. Realistic editorial news photograph, natural light, Brazil. No text, no letters, no logos, no brand names, no recognizable real people or celebrities.`;
  const r = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "chatgpt-image-latest", prompt, size: "1536x1024", quality: "medium", n: 1 }),
  });
  const j = await r.json();
  if (j.error) throw new Error(`OpenAI: ${j.error.message}`);
  const pasta = path.join(process.cwd(), "public", "img", "news");
  fs.mkdirSync(pasta, { recursive: true });
  await sharp(Buffer.from(j.data[0].b64_json, "base64")).resize(1600, 900, { fit: "cover" }).webp({ quality: 74 }).toFile(path.join(pasta, `${slug}.webp`));
  console.log(`Salvo em public/img/news/${slug}.webp

  foto: ${JSON.stringify({ arquivo: `/img/news/${slug}.webp`, alt: alt ?? "[DESCREVER A IMAGEM]", credito: "Imagem ilustrativa gerada por IA" })},`);
}

const [modo, ...args] = process.argv.slice(2);
if (modo === "buscar" && args[0]) await buscar(args.join(" "));
else if (modo === "baixar" && args[1]) await baixar(args[0], args[1], args[2]);
else if (modo === "gerar" && args[1]) await gerar(args[0], args[1], args[2]);
else console.log('Uso: node scripts/foto-noticia.mjs buscar "<termo>" | baixar <slug> "File:..." ["alt"]');
