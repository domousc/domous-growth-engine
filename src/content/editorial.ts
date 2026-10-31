import type { Post, TipoPost } from "./tipos";
import { ehNoticia } from "./tipos";

const normalizar = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
export const recentes = (lista: Post[]) => [...lista].sort((a, b) => b.publicado.localeCompare(a.publicado) || a.slug.localeCompare(b.slug));
export const selecionarEditorial = (lista: Post[], noticia: boolean, limite: number) => recentes(lista.filter((p) => ehNoticia(p) === noticia)).slice(0, limite);
export const buscarArtigos = (lista: Post[], termo: string, tipo: TipoPost | "todos") => {
  const palavras = normalizar(termo).trim().split(/\s+/).filter(Boolean);
  return recentes(lista.filter((p) => !ehNoticia(p) && (tipo === "todos" || p.tipo === tipo) && palavras.every((w) => normalizar(`${p.h1} ${p.descricao} ${p.palavraChave} ${p.servicos.join(" ")}`).includes(w))));
};
export const relacionados = (lista: Post[], atual: Post, limite = 3) => recentes(lista.filter((p) => p.slug !== atual.slug && (p.tipo === atual.tipo || p.servicos.some((s) => atual.servicos.includes(s)))))
  .sort((a, b) => b.servicos.filter((s) => atual.servicos.includes(s)).length - a.servicos.filter((s) => atual.servicos.includes(s)).length).slice(0, limite);
export const secaoId = (indice: number) => `secao-${indice + 1}`;