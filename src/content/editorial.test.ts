import { describe, expect, test } from "bun:test";
import { buscarArtigos, relacionados, selecionarEditorial } from "./editorial";
import type { Post } from "./tipos";

const post = (slug: string, tipo: Post["tipo"], publicado: string, servicos: string[] = []): Post => ({ slug, tipo, publicado, atualizado: publicado, servicos, nivel: "brasil", palavraChave: "marketing", titulo: slug, h1: slug, descricao: "Estratégia de marketing", resposta: "", secoes: [], faq: [] });
const lista = [post("Anúncios no WhatsApp", "guia", "2026-10-28", ["meta"]), post("CRM e vendas", "guia", "2026-10-27", ["meta", "crm"]), post("notícia", "noticia", "2026-10-29"), post("opinião", "opiniao", "2026-10-26")];
describe("Seleção editorial", () => {
  test("busca ignora acentos e não mistura notícias com artigos", () => {
    expect(buscarArtigos(lista, "anuncios whatsapp", "todos").map((p) => p.slug)).toEqual(["Anúncios no WhatsApp"]);
    expect(buscarArtigos(lista, "marketing", "opiniao").map((p) => p.slug)).toEqual(["opinião"]);
    expect(buscarArtigos(lista, "inexistente", "todos")).toHaveLength(0);
  });
  test("novas publicações entram primeiro na vitrine sem modificar a coleção", () => {
    const novo = post("novo", "guia", "2026-10-30");
    expect(selecionarEditorial([...lista, novo], false, 2).map((p) => p.slug)).toEqual(["novo", "Anúncios no WhatsApp"]);
    expect(selecionarEditorial(lista, true, 2).map((p) => p.slug)).toEqual(["notícia"]);
    expect(lista[0].slug).toBe("Anúncios no WhatsApp");
  });
  test("relacionados priorizam serviços em comum e excluem o próprio artigo", () => {
    expect(relacionados(lista, lista[0]).map((p) => p.slug)).toEqual(["CRM e vendas"]);
  });
});