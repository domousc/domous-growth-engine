import { useState } from "react";
import { useParams } from "react-router-dom";
import { Clock, ExternalLink, Search, ArrowRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import { GradeCartoes, Perguntas, Secoes, Topo } from "@/components/site/Blocos";
import MonteMensagem from "@/components/site/MonteMensagem";
import BaixarArtes from "@/components/site/BaixarArtes";
import { CartaoEditorial, MiniaturaEditorial, AcompanharEditorial } from "@/components/site/Editorial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posts, postPorSlug } from "@/content/posts";
import { buscarArtigos, relacionados, secaoId, selecionarEditorial } from "@/content/editorial";
import { caminhoPost, dataBR, ehNoticia, minutosLeitura, rotuloTipo, type TipoPost } from "@/content/tipos";
import { guia as guiaAgencia } from "@/data/paginas";
import { servicoPorSlug, type Pagina } from "@/data/servicos";
import NotFound from "./NotFound";
const artigos = posts.filter(p=>!ehNoticia(p));
export const BlogIndice = () => {
  const [filtro,setFiltro] = useState<TipoPost | "todos">("todos");
  const [termo,setTermo] = useState("");
  const tipos = (Object.keys(rotuloTipo) as TipoPost[]).filter(t=>artigos.some(p=>p.tipo===t));
  const lista = buscarArtigos(posts,termo,filtro);
  const destaque = filtro === "todos" && !termo.trim() ? lista[0] : undefined;
  const grade = destaque ? lista.slice(1) : lista;
  const noticias = selecionarEditorial(posts,true,2);
  const guiaVisivel = (filtro === "todos" || filtro === "guia") && (!termo.trim() || `${guiaAgencia.h1} ${guiaAgencia.descricao}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(termo.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()));
  return <Layout origem="blog" cabecalhoSolido>
    <section className="pt-28 pb-10 md:pt-32 md:pb-12 border-b border-border"><div className="section-shell"><p className="eyebrow text-primary mb-3">Ideias para quem decide</p><h1 className="editorial-title mb-4">Blog Domous<span className="text-primary">.</span></h1><p className="text-muted-foreground text-lg max-w-2xl">Guias e análises para decisões de marketing e vendas.</p></div></section>
    <section className="section-pad"><div className="section-shell">
      <div className="flex flex-wrap justify-between gap-5 items-center mb-9"><div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">{(["todos",...tipos] as const).map(t=><Button key={t} size="sm" variant={filtro===t ? "default" : "outline"} aria-pressed={filtro===t} onClick={()=>setFiltro(t)}>{t==="todos"?"Todos":rotuloTipo[t]}</Button>)}</div><div className="relative w-full sm:w-72"><Search size={17} className="absolute left-3 top-3 text-muted-foreground" aria-hidden /><Input aria-label="Buscar artigos" type="search" value={termo} onChange={e=>setTermo(e.target.value)} placeholder="Buscar por assunto" className="pl-10" /></div></div>
      {destaque && <article className="grid md:grid-cols-2 gap-7 md:gap-12 pb-10 mb-10 border-b border-border"><a href={caminhoPost(destaque)} aria-label={destaque.h1}><MiniaturaEditorial p={destaque} /></a><div className="self-center"><p className="eyebrow text-primary mb-3">Em destaque · {rotuloTipo[destaque.tipo]}</p><a href={caminhoPost(destaque)}><h2 className="text-2xl md:text-3xl mb-4 hover:text-primary">{destaque.h1}</h2></a><p className="text-muted-foreground leading-relaxed mb-5">{destaque.descricao}</p><p className="text-xs text-muted-foreground mb-5">{dataBR(destaque.publicado)} · {minutosLeitura(destaque)} min de leitura</p><a href={caminhoPost(destaque)} className="inline-flex gap-2 text-sm font-semibold text-primary">Ler artigo <ArrowRight size={16} /></a></div></article>}
      <p role="status" className="text-sm text-muted-foreground mb-6">{lista.length + (guiaVisivel ? 1 : 0)} conteúdos{termo ? ` para “${termo}”` : ""}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">{grade.map(p=><CartaoEditorial key={p.slug} p={p} />)}{guiaVisivel && <article className="border-b border-border pb-6"><p className="eyebrow text-primary mb-3">Guia</p><h3 className="text-xl mb-3"><a href="/como-escolher-agencia-de-trafego-pago/">{guiaAgencia.h1}</a></h3><p className="text-sm text-muted-foreground mb-5">{guiaAgencia.descricao}</p><a href="/como-escolher-agencia-de-trafego-pago/" className="text-primary text-sm font-semibold">Ler artigo →</a></article>}</div>
      {!lista.length && !guiaVisivel && <div className="py-12"><h2 className="text-xl mb-3">Nenhum artigo encontrado.</h2><Button variant="outline" onClick={()=>{setTermo("");setFiltro("todos");}}>Limpar busca</Button></div>}
    </div></section>
    {noticias.length>0 && <section className="section-pad bg-secondary/40"><div className="section-shell"><div className="flex flex-wrap justify-between gap-4 mb-8"><h2 className="text-3xl">Domous News</h2><a href="/news/" className="text-sm font-semibold text-primary">Ver todas as notícias →</a></div><div className="grid md:grid-cols-2 gap-8">{noticias.map(p=><CartaoEditorial key={p.slug} p={p} />)}</div></div></section>}
    <AcompanharEditorial />
  </Layout>;
};
export const PostPagina = () => {
  const {slug}=useParams(); const p=slug?postPorSlug(slug):undefined;
  if(!p) return <NotFound />;
  const secao=ehNoticia(p)?{nome:"Domous News",href:"/news/"}:{nome:"Blog",href:"/blog/"};
  const servicos=p.servicos.map(servicoPorSlug).filter((s):s is Pagina=>!!s);
  const outros=relacionados(posts,p);
  return <Layout origem={`blog-${p.slug}`}>
    <Topo editorial trilha={[{nome:"Início",href:"/"},secao]} h1={p.h1} resposta={p.resposta} origem={`blog-${p.slug}`}>
      <p className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-dark-muted"><span className="text-brand-label font-semibold">{rotuloTipo[p.tipo]}</span><span>Por <a href="/sobre/kairo-lucas/" className="text-dark-foreground hover:underline">Kairo Lucas</a></span><span className="inline-flex items-center gap-1"><Clock size={14} />{minutosLeitura(p)} min</span><span>Publicado em <time dateTime={p.publicado}>{dataBR(p.publicado)}</time></span>{p.atualizado!==p.publicado && <span>Atualizado em <time dateTime={p.atualizado}>{dataBR(p.atualizado)}</time></span>}</p>
    </Topo>
    {p.secoes.length>=4 && <nav aria-label="Neste artigo" className="section-shell pt-8"><details className="tool-details border-b border-border pb-5"><summary className="text-sm font-semibold text-primary">Neste artigo ↓</summary><ol className="grid md:grid-cols-2 gap-3 pt-5 text-sm">{p.secoes.map((s,i)=><li key={s.titulo}><a href={`#${secaoId(i)}`} className="hover:text-primary">{i+1}. {s.titulo}</a></li>)}</ol></details></nav>}
    <div className="article-body"><Secoes secoes={p.secoes} indice /></div>
    {!!p.fontes?.length && <section className="section-shell pb-10"><div className="max-w-3xl"><h2 className="text-xl mb-4">Fontes</h2><ul className="space-y-3 text-sm">{p.fontes.map(f=><li key={f.url}><a href={f.url} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 text-primary break-words">{f.nome}<ExternalLink size={14} className="shrink-0" /></a></li>)}</ul></div></section>}
    <Perguntas faq={p.faq} />
    <BaixarArtes p={p} />
    {outros.length>0 && <section className="section-pad"><div className="section-shell"><h2 className="text-3xl mb-8">Continue a leitura.</h2><div className="grid md:grid-cols-3 gap-8">{outros.map(o=><CartaoEditorial key={o.slug} p={o} />)}</div></div></section>}
    <AcompanharEditorial />
    {servicos.length>0 && <section className="section-pad"><div className="section-shell"><h2 className="text-3xl mb-4">Quer aplicar isso à sua empresa?</h2><p className="text-muted-foreground mb-8">Conheça os serviços relacionados a este conteúdo.</p><GradeCartoes itens={servicos.map(s=>({titulo:s.nome,texto:s.descricao,href:`/servicos/${s.slug}/`}))} /></div></section>}
    <MonteMensagem origem={`blog-${p.slug}-final`} />
  </Layout>;
};
