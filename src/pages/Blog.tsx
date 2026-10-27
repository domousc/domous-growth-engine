// Blog da Domous: lista (/blog/) e página de cada post (/blog/:slug/).
// Os posts vêm de src/content/posts/*.ts (um arquivo por post).
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BookOpen, Clock, ExternalLink } from "lucide-react";
import Layout from "@/components/site/Layout";
import { GradeCartoes, Perguntas, Secoes, Topo } from "@/components/site/Blocos";
import MonteMensagem from "@/components/site/MonteMensagem";
import BaixarArtes from "@/components/site/BaixarArtes";
import { posts, postPorSlug } from "@/content/posts";
import { caminhoPost, dataBR, ehNoticia, minutosLeitura, rotuloTipo, type Post, type TipoPost } from "@/content/tipos";
import { guia as guiaAgencia } from "@/data/paginas";
import { servicoPorSlug, type Pagina } from "@/data/servicos";
import NotFound from "./NotFound";

const cartao = (p: Post) => ({ titulo: `${rotuloTipo[p.tipo]} · ${p.h1}`, texto: p.descricao, href: caminhoPost(p) });
const artigos = posts.filter((p) => !ehNoticia(p));
const noticias = posts.filter(ehNoticia);

export const BlogIndice = () => {
  const [filtro, setFiltro] = useState<TipoPost | "todos">("todos");
  const tipos = (Object.keys(rotuloTipo) as TipoPost[]).filter((t) => artigos.some((p) => p.tipo === t));
  const lista = filtro === "todos" ? artigos : artigos.filter((p) => p.tipo === filtro);
  const itens = lista.map(cartao);
  if (filtro === "todos" || filtro === "guia") itens.push({ titulo: `Guia · ${guiaAgencia.h1}`, texto: guiaAgencia.descricao, href: "/como-escolher-agencia-de-trafego-pago/" });

  return (
    <Layout origem="blog">
      <Topo
        trilha={[{ nome: "Início", href: "/" }, { nome: "Blog", href: "/blog/" }]}
        h1="Blog da Domous: marketing, tráfego pago e vendas pra empresários"
        resposta="Guias com resposta direta, estudos com dado de João Pessoa, Raio-X do marketing de empresas da Paraíba e a opinião do Kairo Lucas sobre o que faz uma empresa vender mais. Escrito por quem opera tráfego pago, atendimento e medição todo dia."
        origem="blog"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por tipo">
            {(["todos", ...tipos] as const).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={filtro === t}
                onClick={() => setFiltro(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-smooth ${filtro === t ? "gradient-domous text-white border-transparent" : "border-border hover:border-primary/50"}`}
              >
                {t === "todos" ? "Todos" : rotuloTipo[t]}
              </button>
            ))}
          </div>
          <GradeCartoes itens={itens} />
        </div>
      </section>
      {noticias.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl mb-8">Domous News</h2>
            <GradeCartoes itens={noticias.slice(0, 3).map(cartao)} />
            <a href="/news/" className="inline-block mt-6 font-semibold text-primary hover:underline">Ver todas as notícias →</a>
          </div>
        </section>
      )}
      <MonteMensagem origem="blog-final" />
    </Layout>
  );
};

export const PostPagina = () => {
  const { slug } = useParams();
  const p = slug ? postPorSlug(slug) : undefined;
  if (!p) return <NotFound />;
  const secao = ehNoticia(p) ? { nome: "Domous News", href: "/news/" } : { nome: "Blog", href: "/blog/" };
  const servicos = p.servicos.map(servicoPorSlug).filter((s): s is Pagina => !!s);
  const outros = posts.filter((x) => x.slug !== p.slug && (x.tipo === p.tipo || x.servicos.some((s) => p.servicos.includes(s)))).slice(0, 3);

  return (
    <Layout origem={`blog-${p.slug}`}>
      <Topo
        trilha={[
          { nome: "Início", href: "/" },
          secao,
          { nome: p.h1, href: caminhoPost(p) },
        ]}
        h1={p.h1}
        resposta={p.resposta}
        origem={`blog-${p.slug}`}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-muted">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-accent">{rotuloTipo[p.tipo]}</span>
          <span className="inline-flex items-center gap-1.5"><BookOpen className="w-4 h-4" aria-hidden /> Por <a href="/sobre/kairo-lucas/" className="text-white hover:underline">Kairo Lucas</a>, Domous</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden /> {minutosLeitura(p)} min de leitura</span>
          <span>Atualizado em <time dateTime={p.atualizado}>{dataBR(p.atualizado)}</time></span>
        </p>
      </Topo>
      <Secoes secoes={p.secoes} />
      {p.fontes?.length ? (
        <section className="pb-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <h2 className="text-xl md:text-2xl mb-4">Fontes</h2>
            <ul className="space-y-2 text-sm">
              {p.fontes.map((f) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                    {f.nome} <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <Perguntas faq={p.faq} />
      <BaixarArtes p={p} />
      {servicos.length > 0 && (
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl mb-8">Como a Domous ajuda nisso</h2>
            <GradeCartoes itens={servicos.map((s) => ({ titulo: s.nome, texto: s.descricao, href: `/servicos/${s.slug}/` }))} />
          </div>
        </section>
      )}
      {outros.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl mb-8">Leia também</h2>
            <GradeCartoes itens={outros.map(cartao)} />
          </div>
        </section>
      )}
      <MonteMensagem origem={`blog-${p.slug}-final`} />
    </Layout>
  );
};
