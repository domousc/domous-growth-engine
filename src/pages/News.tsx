import "@fontsource/lora/700.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/site/Layout";
import { CartaoEditorial, MiniaturaEditorial, AcompanharEditorial } from "@/components/site/Editorial";
import { posts } from "@/content/posts";
import { selecionarEditorial } from "@/content/editorial";
import { caminhoPost, dataBR, minutosLeitura, rotuloEditoria, type Editoria } from "@/content/tipos";
const noticias=selecionarEditorial(posts,true,Number.MAX_SAFE_INTEGER);
const artigos=selecionarEditorial(posts,false,3);
const NewsIndice=()=>{
 const [editoria,setEditoria]=useState<Editoria|"todas">("todas");
 const editorias=(Object.keys(rotuloEditoria) as Editoria[]).filter(e=>noticias.some(p=>p.editoria===e));
 const lista=editoria==="todas"?noticias:noticias.filter(p=>p.editoria===editoria);
 const [manchete,...resto]=lista;
 return <Layout origem="news" cabecalhoSolido>
  <section className="pt-28 md:pt-32"><div className="section-shell"><div className="flex flex-wrap justify-between items-end gap-5 border-b-2 border-foreground pb-7"><div><h1 className="editorial-title uppercase">Domous <span className="text-primary">News</span></h1><p className="text-muted-foreground mt-3">O que mudou, por que importa e o que fazer agora.</p></div>{noticias[0]&&<p className="text-xs text-muted-foreground">Última publicação: <time dateTime={noticias[0].publicado}>{dataBR(noticias[0].publicado)}</time> · João Pessoa, PB</p>}</div>
   <nav aria-label="Editorias" className="py-4 border-b border-border flex flex-wrap gap-2">{(["todas",...editorias] as const).map(e=><Button key={e} size="sm" variant={editoria===e?"default":"outline"} aria-pressed={editoria===e} onClick={()=>setEditoria(e)}>{e==="todas"?"Últimas":rotuloEditoria[e]}</Button>)}</nav>
  </div></section>
  <section className="section-pad"><div className="section-shell grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14"><div>
   {manchete?<article className="pb-8 border-b border-border"><a href={caminhoPost(manchete)} className="group"><MiniaturaEditorial p={manchete} className="mb-6 max-h-80" /><p className="eyebrow text-primary mb-3">{manchete.editoria?rotuloEditoria[manchete.editoria]:"Notícia"}</p><h2 className="news-headline text-3xl md:text-4xl leading-tight group-hover:text-primary mb-4">{manchete.h1}</h2></a><p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{manchete.descricao}</p><div className="flex flex-wrap justify-between gap-4 text-xs text-muted-foreground"><span>{dataBR(manchete.publicado)} · {minutosLeitura(manchete)} min de leitura</span><a href={caminhoPost(manchete)} className="text-primary font-semibold">Ler notícia →</a></div></article>:<p className="py-8 text-muted-foreground">Ainda não há notícias nesta editoria. Veja as últimas publicações.</p>}
   {resto.length>0&&<section className="pt-8"><h2 className="eyebrow mb-6">Mais notícias</h2><div className="grid sm:grid-cols-2 gap-8">{resto.map(p=><CartaoEditorial key={p.slug} p={p} />)}</div></section>}
  </div><aside className="space-y-10"><AcompanharEditorial compacto /><section><h2 className="eyebrow border-b-2 border-foreground pb-3 mb-5">Aprofunde no Blog</h2><div className="space-y-6">{artigos.map(p=><a key={p.slug} href={caminhoPost(p)} className="block text-sm font-semibold leading-relaxed hover:text-primary">{p.h1}</a>)}</div><a href="/blog/" className="inline-block text-sm font-semibold text-primary mt-6">Explorar o Blog →</a></section></aside></div></section>
 </Layout>;
};
export default NewsIndice;
