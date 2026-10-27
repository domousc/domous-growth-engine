// Gera as artes de cada post e notícia no build: post de feed (1080x1350),
// story (1080x1920, com margem de segurança do Instagram) e imagem de
// compartilhamento do link (1200x630). Desenha sem navegador (satori + resvg),
// então roda igual na máquina local e no build do Cloudflare.
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const ROXO = "#8B00FF";
const LILAS = "#B79CF7";

const fonte = (raiz, pacote, arquivo) => fs.readFileSync(path.join(raiz, "node_modules", "@fontsource", pacote, "files", arquivo));

// Elemento no formato que o satori entende (sem JSX).
const h = (type, style, ...children) => ({ type, props: { style: { display: "flex", ...style }, children: children.flat().filter(Boolean) } });
const img = (src, style) => ({ type: "img", props: { src, style } });

const dataBR = (iso) => iso.split("-").reverse().join("/");
const rotulo = { guia: "GUIA", estudo: "ESTUDO", analise: "RAIO-X", case: "CASE", opiniao: "OPINIÃO", noticia: "DOMOUS NEWS" };

// Primeira frase (ou o começo) da resposta, pra arte não virar parede de texto.
function resumo(texto, max) {
  const frase = texto.split(/(?<=[.!?])\s/)[0];
  const base = frase.length <= max ? frase : texto;
  if (base.length <= max) return base;
  return base.slice(0, base.lastIndexOf(" ", max)).replace(/[,;:]$/, "") + "…";
}

// Tamanho da manchete pelo comprimento, pra caber sem cortar.
const tamanhoTitulo = (t, grande, medio, pequeno) => (t.length <= 55 ? grande : t.length <= 85 ? medio : pequeno);

function arte(p, formato, logo) {
  const noticia = p.tipo === "noticia";
  const secao = noticia ? "domous.com.br/news" : "domous.com.br/blog";
  const story = formato === "story";
  const og = formato === "og";
  const W = og ? 1200 : 1080;
  const H = og ? 630 : story ? 1920 : 1350;
  const pad = og ? 64 : 88;
  const titulo = p.h1;
  const inner = W - 2 * pad;
  const barra = og ? 8 : 10;
  // Story: topo e base livres pros elementos do Instagram.
  const padTopo = story ? 250 : pad;
  const padBase = story ? 300 : pad;
  const recuo = og ? 24 : 32;
  const fs1 = og ? tamanhoTitulo(titulo, 60, 50, 42) : story ? tamanhoTitulo(titulo, 92, 80, 68) : tamanhoTitulo(titulo, 80, 68, 58);

  return h(
    "div",
    {
      // O satori soma o padding ao tamanho: largura e altura aqui são só a área interna.
      width: inner,
      height: H - padTopo - padBase,
      flexDirection: "column",
      justifyContent: "space-between",
      padding: `${padTopo}px ${pad}px ${padBase}px`,
      backgroundColor: "#0F0F14",
      backgroundImage: `radial-gradient(circle at 85% 0%, rgba(139,0,255,0.45) 0%, rgba(139,0,255,0) 55%), radial-gradient(circle at 0% 100%, rgba(91,18,184,0.35) 0%, rgba(91,18,184,0) 50%)`,
      color: "#F2F2F5",
      fontFamily: "Inter",
    },
    // Topo: logo e selo do tipo
    h(
      "div",
      { width: inner, justifyContent: "space-between", alignItems: "center" },
      img(logo, { height: og ? 34 : 42 }),
      h(
        "div",
        { padding: og ? "8px 18px" : "10px 22px", borderRadius: 999, backgroundColor: "rgba(139,0,255,0.22)", border: `2px solid ${ROXO}`, color: LILAS, fontSize: og ? 20 : 24, fontWeight: 600, letterSpacing: 2 },
        rotulo[p.tipo] ?? "DOMOUS",
      ),
    ),
    // Miolo: data, manchete e resumo
    h(
      "div",
      { width: inner, flexDirection: "column", gap: og ? 18 : 32 },
      h("div", { color: "#9A9AA6", fontSize: og ? 22 : 28, fontWeight: 500 }, dataBR(p.publicado)),
      h(
        "div",
        { width: inner, borderLeft: `${barra}px solid ${ROXO}`, paddingLeft: recuo },
        h("div", { width: inner - barra - recuo, flexWrap: "wrap", fontFamily: "Poppins", fontWeight: 700, fontSize: fs1, lineHeight: 1.12, letterSpacing: -1 }, titulo),
      ),
      og ? null : h("div", { width: inner, flexWrap: "wrap", fontSize: story ? 38 : 34, lineHeight: 1.4, color: "#C9C9D1", fontWeight: 400 }, resumo(p.resposta, story ? 230 : 190)),
    ),
    // Rodapé: onde ler e de quem é
    h(
      "div",
      { width: inner, justifyContent: "space-between", alignItems: "center", borderTopWidth: 2, borderTopStyle: "solid", borderTopColor: "#2A2A33", paddingTop: og ? 20 : 32, fontSize: og ? 22 : 28 },
      h("div", { color: "#F2F2F5", fontWeight: 600 }, og ? secao : `Leia completo em ${secao}`),
      h("div", { color: LILAS, fontWeight: 600 }, "@domousc"),
    ),
  );
}

export async function gerarArtes(posts, { raiz, dist, logoPath }) {
  const fontes = [
    { name: "Poppins", data: fonte(raiz, "poppins", "poppins-latin-700-normal.woff"), weight: 700, style: "normal" },
    { name: "Inter", data: fonte(raiz, "inter", "inter-latin-400-normal.woff"), weight: 400, style: "normal" },
    { name: "Inter", data: fonte(raiz, "inter", "inter-latin-500-normal.woff"), weight: 500, style: "normal" },
    { name: "Inter", data: fonte(raiz, "inter", "inter-latin-600-normal.woff"), weight: 600, style: "normal" },
  ];
  const logo = `data:image/png;base64,${fs.readFileSync(logoPath).toString("base64")}`;
  const pasta = path.join(dist, "img", "posts");
  fs.mkdirSync(pasta, { recursive: true });

  const formatos = { post: [1080, 1350], story: [1080, 1920], og: [1200, 630] };
  let total = 0;
  for (const p of posts) {
    for (const [formato, [width, height]] of Object.entries(formatos)) {
      const svg = await satori(arte(p, formato, logo), { width, height, fonts: fontes });
      const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();
      fs.writeFileSync(path.join(pasta, `${p.slug}-${formato}.png`), png);
      total++;
    }
  }
  return total;
}
