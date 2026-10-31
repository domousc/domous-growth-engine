import { useState } from "react";
import { ArrowUpRight, ArrowRight, Rss, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import BotaoWhatsApp from "./BotaoWhatsApp";
import { posts } from "@/content/posts";
import { selecionarEditorial } from "@/content/editorial";
import { caminhoPost, dataBR, minutosLeitura, rotuloTipo, rotuloEditoria, type Post } from "@/content/tipos";

export const MiniaturaEditorial = ({ p, className = "" }: { p: Post; className?: string }) => {
  const [falhou, setFalhou] = useState(false);
  return <div className={`editorial-thumb relative aspect-[16/9] overflow-hidden rounded-2xl ${className}`}>
    {!falhou ? <img src={`/img/posts/${p.slug}-preview.webp`} width={800} height={420} alt="" loading="lazy" onError={() => setFalhou(true)} className="h-full w-full object-cover" /> : <div className="absolute inset-0 section-dark p-6 flex flex-col justify-between"><span className="eyebrow text-brand-label">{rotuloTipo[p.tipo]}</span><Newspaper className="w-10 h-10 text-primary" aria-hidden /><span className="text-sm text-dark-muted">Domous · Marketing e vendas</span></div>}
  </div>;
};

export const CartaoEditorial = ({ p, imagem = false }: { p: Post; imagem?: boolean }) => <article className="group border-b border-border pb-6 flex flex-col">
  <a href={caminhoPost(p)} className="block">
    {imagem && <MiniaturaEditorial p={p} className="mb-5" />}
    <p className="eyebrow text-primary mb-3">{p.editoria ? rotuloEditoria[p.editoria] : rotuloTipo[p.tipo]}</p>
    <h3 className="text-xl leading-snug group-hover:text-primary transition-smooth">{p.h1}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{p.descricao}</p>
  </a>
  <div className="flex flex-wrap justify-between gap-3 mt-5 text-xs text-muted-foreground"><span><time dateTime={p.publicado}>{dataBR(p.publicado)}</time> · {minutosLeitura(p)} min</span><a href={caminhoPost(p)} className="text-primary font-semibold inline-flex items-center gap-1">Ler {p.tipo === "noticia" ? "notícia" : "artigo"}<ArrowUpRight size={14} aria-hidden /></a></div>
</article>;

export const AcompanharEditorial = ({ compacto = false }: { compacto?: boolean }) => <section className={compacto ? "border-t border-border pt-6" : "section-dark section-pad"} aria-label="Acompanhar conteúdos">
  <div className={compacto ? "" : "section-shell flex flex-wrap items-center justify-between gap-8"}>
    <div><p className="eyebrow text-primary mb-3">Continue por perto</p><h2 className={`${compacto ? "text-xl" : "text-3xl"} mb-3`}>Decisões melhores começam com boa informação.</h2><p className={`${compacto ? "text-muted-foreground" : "text-dark-muted"} text-sm leading-relaxed max-w-xl mb-5`}>Guias do Blog e a leitura da Domous sobre notícias que importam para o seu negócio.</p></div>
    <div className="flex flex-col items-start gap-4"><BotaoWhatsApp origem="editorial-acompanhar" texto="Oi! Quero saber como acompanhar o Blog e a Domous News pelo WhatsApp." label="Acompanhar no WhatsApp" className="text-sm px-5" /><a href="/blog/feed.xml" className="inline-flex items-center gap-2 text-sm font-medium text-primary"><Rss size={16} aria-hidden /> Acompanhar por RSS</a><p className={`text-xs ${compacto ? "text-muted-foreground" : "text-dark-muted"}`}>O WhatsApp abre uma conversa com a Domous.</p></div>
  </div>
</section>;

const ConteudoHome = () => {
  const artigos = selecionarEditorial(posts, false, 3);
  const noticias = selecionarEditorial(posts, true, 2);
  return <section className="section-pad" id="conteudos"><div className="section-shell">
    <div className="flex flex-wrap justify-between items-end gap-5 mb-10"><div><p className="eyebrow text-primary mb-3">Conteúdo Domous</p><h2 className="text-3xl md:text-4xl max-w-xl">Marketing para quem precisa decidir.</h2></div><Button asChild variant="outline"><a href="/blog/">Explorar o Blog <ArrowRight size={16} /></a></Button></div>
    <div className="grid md:grid-cols-3 gap-8">{artigos.map((p) => <CartaoEditorial key={p.slug} p={p} />)}</div>
    {noticias.length > 0 && <div className="mt-12 border-t border-border pt-8 grid lg:grid-cols-[220px_1fr] gap-8"><div><p className="eyebrow text-primary mb-2">Domous News</p><h3 className="text-2xl mb-4">O que mudou. E o que fazer agora.</h3><a href="/news/" className="inline-flex gap-2 text-sm text-primary font-semibold">Ver notícias <ArrowUpRight size={16} /></a></div><div className="grid sm:grid-cols-2 gap-8">{noticias.map((p) => <CartaoEditorial p={p} key={p.slug} />)}</div></div>}
    <div className="mt-10"><AcompanharEditorial compacto /></div>
  </div></section>;
};
export default ConteudoHome;