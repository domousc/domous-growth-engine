// Como cada post vira carrossel de Instagram: capa, uma lâmina por seção (até 6)
// e lâmina final de chamada. Usado pelo gerador de imagens (scripts/artes.mjs, via
// entry-server) e pela página do post (botão de download), pra os dois baterem.
import type { Post } from "./tipos";

export type Lamina =
  | { tipo: "capa"; titulo: string; texto: string }
  | { tipo: "conteudo"; titulo: string; itens?: string[]; texto?: string }
  | { tipo: "final"; titulo: string; texto: string };

const corta = (t: string, max: number) => (t.length <= max ? t : t.slice(0, t.lastIndexOf(" ", max)).replace(/[,;:.]$/, "") + "…");

// Frases inteiras até caber; só corta no meio se a primeira frase já for maior que o limite.
const frasesAte = (t: string, max: number) => {
  // Fim de frase = pontuação seguida de espaço ou do fim (não quebra "6.500" nem "R$ 2.900").
  const frases = t.match(/[\s\S]+?[.!?](?=\s|$)\s*/g) ?? [t];
  let saida = "";
  for (const f of frases) {
    if ((saida + f).trim().length > max) break;
    saida += f;
  }
  return saida.trim() || corta(t, max);
};

// Item de lista: o trecho antes de ":" ou do primeiro ponto, se for curto; senão o começo.
const encurtaItem = (t: string) => {
  const antes = t.split(/:\s|\.\s/)[0];
  return antes.length >= 15 && antes.length <= 95 ? antes : corta(t, 110);
};

export function laminasCarrossel(p: Post): Lamina[] {
  const conteudo: Lamina[] = p.secoes
    .filter((s) => s.paragrafos.length || s.itens?.length)
    .slice(0, 6)
    .map((s) =>
      s.itens?.length
        ? { tipo: "conteudo", titulo: s.titulo, itens: s.itens.slice(0, 4).map(encurtaItem), texto: s.paragrafos[0] ? frasesAte(s.paragrafos[0], 150) : undefined }
        : { tipo: "conteudo", titulo: s.titulo, texto: frasesAte(s.paragrafos.join(" "), 340) },
    );
  const noticia = p.tipo === "noticia";
  return [
    { tipo: "capa", titulo: p.h1, texto: "Arrasta pro lado »" },
    ...conteudo,
    {
      tipo: "final",
      titulo: noticia ? "Leia a notícia completa no Domous News" : "Leia o conteúdo completo no blog da Domous",
      texto: noticia ? "domous.com.br/news" : "domous.com.br/blog",
    },
  ];
}
