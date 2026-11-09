import { ArrowRight, ChevronDown, Target, ChartNoAxesCombined, Workflow } from "lucide-react";
import Layout from "@/components/site/Layout";
import BotaoWhatsApp from "@/components/site/BotaoWhatsApp";
import Clientes from "@/components/site/Clientes";
import PainelExemplo from "@/components/site/PainelExemplo";
import ContaRapida from "@/components/site/ContaRapida";
import IaAutomacao from "@/components/site/IaAutomacao";
import QuemCuida from "@/components/site/QuemCuida";
import MonteMensagem from "@/components/site/MonteMensagem";
import ConteudoHome from "@/components/site/Editorial";
import { Perguntas, Resultados } from "@/components/site/Blocos";
import ServicosPorCategoria from "@/components/site/ServicosPorCategoria";
import { home } from "@/data/paginas";
import { site } from "@/data/site";

const frentes = [
  { numero: "01", titulo: "Oferta e funil", texto: "Estratégia, mensagem e caminho comercial antes de ampliar o investimento.", Icone: Target },
  { numero: "02", titulo: "Aquisição", texto: "Campanhas no Meta e no Google conectadas ao público que compra.", Icone: ChartNoAxesCombined },
  { numero: "03", titulo: "Conversão e dados", texto: "WhatsApp, CRM e automação para acompanhar o contato até a venda.", Icone: Workflow },
];
const Index = () => {
  return <Layout origem="home">
    <section className="section-dark relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-14">
      <div className="section-shell relative">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-16 items-center">
          <div className="relative z-10 hero-entrada">
            <p className="eyebrow text-brand-label mb-5">Marketing e vendas para empresas</p>
            <h1 className="text-4xl md:text-6xl leading-[1.08] mb-6 max-w-2xl">Domous<span className="text-primary">.</span><br />Marketing conectado <span className="gradient-domous-text">à venda.</span></h1>
            <p className="text-lg font-semibold text-dark-foreground mb-3">Funil Primeiro. Ads Depois.</p>
            <p className="text-base md:text-lg text-dark-muted max-w-lg leading-relaxed mb-7">Conectamos oferta, anúncios, atendimento e dados para sua empresa enxergar o caminho do investimento à venda.</p>
            <div className="flex flex-wrap items-center gap-5"><BotaoWhatsApp origem="home-hero" label="Conversar com a Domous" /><a href="/raio-x-domous/" className="text-sm inline-flex gap-2 items-center text-dark-foreground hover:text-brand-label">Conhecer o Raio-X <ArrowRight size={16} /></a></div>
            <p className="text-xs text-dark-muted mt-4">Raio-X: diagnóstico pago, abatido da primeira mensalidade ao seguir com a Domous.</p>
          </div>
          <dl className="hero-entrada hero-numeros relative grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5 lg:pl-6">
            <div className="card-brilho card-dark rounded-2xl border p-5 md:p-7"><dt className="text-xs md:text-sm text-dark-muted">Empresas atendidas</dt><dd className="text-[1.6rem] sm:text-3xl md:text-5xl font-semibold mt-2 md:mt-3 tabular-nums">{site.empresasAtendidas}</dd></div>
            <div className="card-brilho card-dark rounded-2xl border p-5 md:p-7"><dt className="text-xs md:text-sm text-dark-muted">Vendas geradas para clientes</dt><dd className="text-[1.6rem] sm:text-3xl md:text-5xl font-semibold mt-2 md:mt-3 tabular-nums whitespace-nowrap"><span className="gradient-domous-text">+R$ 50 mi</span></dd></div>
          </dl>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-dark-border mt-10 pt-6 text-sm"><span className="text-dark-muted">Para o seu negócio</span>{[{t:"Construção e imóveis",h:"construtoras-e-incorporadoras"},{t:"Distribuição e atacado",h:"distribuidores-e-atacado"},{t:"Lojas e varejo",h:"lojas-de-moveis"},{t:"Clínicas",h:"clinicas-de-estetica"}].map(c=><a key={c.h} href={`/segmentos/${c.h}/`} className="text-dark-foreground hover:text-brand-label">{c.t} ↗</a>)}<a href="/segmentos/" className="text-brand-label">Todos os segmentos</a></div>
      </div>
    </section>
    <Clientes />
    <section className="section-pad" id="servicos"><div className="section-shell">
      <div className="grid md:grid-cols-[1fr_1fr] gap-8 mb-10"><div><p className="eyebrow text-primary mb-3">Metodologia Domous</p><h2 className="text-3xl md:text-4xl max-w-lg">Do plano ao anúncio.<br />Do atendimento à venda.</h2></div><p className="text-muted-foreground leading-relaxed max-w-lg md:pt-7">Tráfego sozinho não resolve. Primeiro, estruturamos oferta e funil. Depois, conectamos campanhas, atendimento e medição. O plano define quais serviços fazem sentido para a sua empresa.</p></div>
      <div className="grid md:grid-cols-3 gap-8 mb-10">{frentes.map(({numero,titulo,texto,Icone})=><div key={numero} className="card-brilho rounded-2xl border border-border bg-card p-6 shadow-card"><div className="flex justify-between items-center mb-4"><span className="text-sm text-muted-foreground">{numero}</span><Icone className="text-primary w-6 h-6" /></div><h3 className="text-2xl mb-3">{titulo}</h3><p className="text-sm text-muted-foreground leading-relaxed">{texto}</p></div>)}</div>
      <ServicosPorCategoria />
      <details className="tool-details border-t border-border mt-8 pt-5"><summary className="font-semibold flex justify-between items-center">O que mais pesa no seu marketing?<ChevronDown className="expand-icon w-5 h-5 text-primary" /></summary><ul className="grid md:grid-cols-2 gap-6 pt-6">{home.dores.map(d=><li key={d.frase}><h3 className="text-lg mb-2">“{d.frase}”</h3><p className="text-sm text-muted-foreground">{d.resposta}</p></li>)}</ul></details>
    </div></section>
    <Resultados ids={["ecommerce-de-brinquedos", "loja-de-moveis", "imoveis-6-vendas"]} />
    <div className="section-dark pb-16 md:pb-20 -mt-6 md:-mt-10 text-center"><a href="/cases/" className="inline-flex items-center gap-2 rounded-full border border-dark-border px-6 h-11 text-sm font-semibold text-dark-foreground hover:border-primary hover:bg-primary/10 transition-smooth">Ver todos os resultados <ArrowRight size={16} /></a></div>
    <section className="section-pad" id="como-funciona"><div className="section-shell"><p className="eyebrow text-primary mb-3">O próximo passo</p><h2 className="text-3xl md:text-4xl mb-4">Clareza antes do contrato.</h2><p className="text-muted-foreground mb-10">Você conhece o plano antes de contratar a operação.</p><ol className="passos-linha grid lg:grid-cols-4 gap-8">{home.passos.map((p,i)=><li key={p.titulo}><span className="text-primary font-semibold text-sm">0{i+1}</span><h3 className="text-xl mt-3 mb-3">{p.titulo}</h3><p className="text-sm leading-relaxed text-muted-foreground">{p.texto}</p></li>)}</ol><p className="text-sm text-muted-foreground mt-8 border-t border-border pt-5">O Raio-X é pago. Se a empresa seguir com a Domous, o valor é abatido da primeira mensalidade. <a href="/raio-x-domous/" className="text-primary font-semibold">Conhecer o diagnóstico →</a></p></div></section>
    <section className="section-dark section-pad"><div className="section-shell"><p className="eyebrow text-brand-label mb-3">Operação conectada</p><h2 className="text-3xl md:text-4xl max-w-2xl mb-5">Mais visibilidade. Menos trabalho repetitivo.</h2><p className="text-dark-muted max-w-2xl mb-8">O Domous Dash mostra investimento, conversas e vendas. IA e automação conectam o anúncio ao atendimento — e o atendimento aos dados.</p><div className="grid md:grid-cols-3 gap-8 mb-8">{["Anúncio → conversa real","WhatsApp → CRM → venda","Venda → decisão de investimento"].map(t=><p key={t} className="border-t border-dark-border pt-4 text-sm font-semibold">{t}</p>)}</div>{[{titulo:"Explorar o Domous Dash",conteudo:<PainelExemplo />},{titulo:"IA e automações na operação",conteudo:<IaAutomacao />},{titulo:"Calcular meu custo por venda",conteudo:<ContaRapida origem="home-conta" />}].map(t=><details className="tool-details border-t border-dark-border py-5" key={t.titulo}><summary className="flex justify-between items-center gap-4 font-semibold">{t.titulo}<ChevronDown className="expand-icon w-5 h-5 text-brand-label shrink-0" /></summary><div className="mt-5">{t.conteudo}</div></details>)}</div></section>
    <QuemCuida />
    <ConteudoHome />
    <Perguntas faq={home.faq} titulo="Antes de conversar, tire suas dúvidas." />
    <MonteMensagem origem="home-final" />
  </Layout>;
};
export default Index;
