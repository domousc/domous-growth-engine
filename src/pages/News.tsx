// Capa do Domous News (/news/), no formato de portal de notícias: cabeçalho do
// jornal, editorias, manchete, últimas na lateral e grade com miniatura.
// As miniaturas são as artes de compartilhamento geradas no build (scripts/artes.mjs).
import "@fontsource/lora/700.css";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Layout from "@/components/site/Layout";
import { posts } from "@/content/posts";
import { caminhoPost, dataBR, ehNoticia, minutosLeitura, rotuloEditoria, rotuloTipo, type Editoria, type Post } from "@/content/tipos";
import { wa } from "@/data/site";

const noticias = posts.filter(ehNoticia);
const artigos = posts.filter((p) => !ehNoticia(p)).slice(0, 4);
const serifa = { fontFamily: "'Lora', Georgia, serif" };

const Chapeu = ({ p }: { p: Post }) => (
  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
    {p.editoria ? rotuloEditoria[p.editoria] : rotuloTipo[p.tipo]}
  </span>
);

const Linha = ({ p }: { p: Post }) => (
  <span className="text-xs text-muted-foreground">
    <time dateTime={p.publicado}>{dataBR(p.publicado)}</time> · {minutosLeitura(p)} min de leitura
  </span>
);

const Miniatura = ({ p, className = "" }: { p: Post; className?: string }) => (
  <img src={`/img/posts/${p.slug}-og.png`} alt="" width={1200} height={630} loading="lazy" className={`w-full aspect-[1200/630] object-cover rounded-lg ${className}`} />
);

const NewsIndice = () => {
  const [editoria, setEditoria] = useState<Editoria | "todas">("todas");
  const lista = editoria === "todas" ? noticias : noticias.filter((n) => n.editoria === editoria);
  const [manchete, ...resto] = lista;
  const ultimas = noticias.slice(0, 6);
  const edicao = noticias[0]?.publicado;

  return (
    <Layout origem="news" cabecalhoSolido>
      <div className="bg-background pt-24 md:pt-28">
        {/* Cabeçalho do jornal */}
        <header className="container mx-auto px-4 lg:px-8 border-b-4 border-foreground pb-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>
                DOMOUS <span className="text-primary">NEWS</span>
              </p>
              <h1 className="mt-3 text-base md:text-lg font-medium text-muted-foreground tracking-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                Marketing, vendas, negócios e IA pra quem decide
              </h1>
            </div>
            {edicao && <p className="text-sm text-muted-foreground">Edição de {dataBR(edicao)} · João Pessoa, PB</p>}
          </div>
        </header>

        {/* Editorias */}
        <nav className="container mx-auto px-4 lg:px-8 border-b border-border" aria-label="Editorias">
          <ul className="flex gap-1 overflow-x-auto py-2 text-sm font-semibold">
            {(["todas", ...(Object.keys(rotuloEditoria) as Editoria[])] as const).map((e) => (
              <li key={e}>
                <button
                  type="button"
                  aria-pressed={editoria === e}
                  onClick={() => setEditoria(e)}
                  className={`whitespace-nowrap rounded-md px-3 py-2 transition-smooth ${editoria === e ? "bg-foreground text-background" : "hover:bg-secondary"}`}
                >
                  {e === "todas" ? "Últimas" : rotuloEditoria[e]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container mx-auto px-4 lg:px-8 py-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <main>
            {manchete ? (
              <article className="pb-10 border-b border-border">
                <a href={caminhoPost(manchete)} className="group grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
                  <Miniatura p={manchete} className="group-hover:opacity-90 transition-smooth" />
                  <div>
                    <Chapeu p={manchete} />
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-smooth" style={serifa}>
                      {manchete.h1}
                    </h2>
                    <p className="mt-4 text-foreground/80 leading-relaxed">{manchete.resposta}</p>
                    <p className="mt-4"><Linha p={manchete} /></p>
                  </div>
                </a>
              </article>
            ) : (
              <p className="py-10 text-muted-foreground">Ainda não há notícias nessa editoria. As próximas edições saem todo dia de manhã.</p>
            )}

            {resto.length > 0 && (
              <section className="pt-10">
                <h2 className="text-sm font-bold uppercase tracking-[0.12em] mb-6">Mais notícias</h2>
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {resto.map((n) => (
                    <li key={n.slug}>
                      <a href={caminhoPost(n)} className="group block">
                        <Miniatura p={n} />
                        <div className="mt-3"><Chapeu p={n} /></div>
                        <h3 className="mt-1 text-xl font-bold leading-snug group-hover:text-primary transition-smooth" style={serifa}>{n.h1}</h3>
                        <p className="mt-2"><Linha p={n} /></p>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          <aside className="space-y-10">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] border-b-2 border-foreground pb-2 mb-4">Últimas</h2>
              <ol className="divide-y divide-border">
                {ultimas.map((n) => (
                  <li key={n.slug} className="py-3">
                    <a href={caminhoPost(n)} className="group block">
                      <Chapeu p={n} />
                      <p className="mt-1 font-bold leading-snug group-hover:text-primary transition-smooth" style={serifa}>{n.h1}</p>
                      <p className="mt-1"><Linha p={n} /></p>
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-2xl section-dark p-6">
              <h2 className="text-lg font-bold text-white mb-2">Receba o Domous News no WhatsApp</h2>
              <p className="text-sm text-dark-muted mb-5">A notícia do dia que mexe com a receita da tua empresa, com o que fazer agora.</p>
              <a
                href={wa("Oi! Quero receber o Domous News no WhatsApp.", "news-assinar")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-origem="news-assinar"
                className="flex items-center justify-center gap-2 rounded-full h-11 text-sm font-semibold gradient-domous text-white"
              >
                <MessageCircle className="w-4 h-4" aria-hidden /> Quero receber
              </a>
            </section>

            {artigos.length > 0 && (
              <section>
                <h2 className="text-sm font-bold uppercase tracking-[0.12em] border-b-2 border-foreground pb-2 mb-4">Do blog</h2>
                <ul className="divide-y divide-border">
                  {artigos.map((a) => (
                    <li key={a.slug} className="py-3">
                      <a href={caminhoPost(a)} className="group block">
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{rotuloTipo[a.tipo]}</span>
                        <p className="mt-1 text-sm font-semibold leading-snug group-hover:text-primary transition-smooth">{a.h1}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="/blog/" className="inline-block mt-3 text-sm font-semibold text-primary hover:underline">Ver o blog →</a>
              </section>
            )}
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default NewsIndice;
