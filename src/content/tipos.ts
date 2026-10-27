// Tipos do blog. Cada post é um arquivo em src/content/posts/<slug>.ts que
// exporta `default` um Post. A rotina diária cria um arquivo novo por dia.
import type { Pergunta, Secao } from "@/data/servicos";

export type TipoPost = "guia" | "estudo" | "analise" | "case" | "opiniao" | "noticia";
export type NivelPost = "joao-pessoa" | "paraiba" | "brasil";

export type Post = {
  slug: string;
  tipo: TipoPost;
  nivel: NivelPost;
  palavraChave: string;
  titulo: string;
  h1: string;
  descricao: string;
  resposta: string;
  secoes: Secao[];
  faq: Pergunta[];
  servicos: string[];
  publicado: string;
  atualizado: string;
  fontes?: { nome: string; url: string }[];
};

export const rotuloTipo: Record<TipoPost, string> = {
  guia: "Guia",
  estudo: "Estudo",
  analise: "Raio-X",
  case: "Case",
  opiniao: "Opinião",
  noticia: "Domous News",
};

// Notícia mora em /news/ (Domous News); o resto em /blog/.
export const ehNoticia = (p: Pick<Post, "tipo">) => p.tipo === "noticia";
export const caminhoPost = (p: Pick<Post, "tipo" | "slug">) => (ehNoticia(p) ? `/news/${p.slug}/` : `/blog/${p.slug}/`);
