// Home organizada pela jornada do comprador: se reconhecer (topo e dores), escolher
// o caminho do setor, ver prova (marcas, resultados, painel), tirar as objeções
// (como funciona, quem cuida, perguntas) e chegar no WhatsApp com contexto.
import { ChevronRight } from "lucide-react";
import kairo from "@/assets/kairo-hero.jpg";
import Layout from "@/components/site/Layout";
import BotaoWhatsApp from "@/components/site/BotaoWhatsApp";
import Clientes from "@/components/site/Clientes";
import PainelExemplo from "@/components/site/PainelExemplo";
import ContaRapida from "@/components/site/ContaRapida";
import IaAutomacao from "@/components/site/IaAutomacao";
import QuemCuida from "@/components/site/QuemCuida";
import MonteMensagem from "@/components/site/MonteMensagem";
import { Perguntas, Resultados } from "@/components/site/Blocos";
import ServicosPorCategoria from "@/components/site/ServicosPorCategoria";
import { home } from "@/data/paginas";
import { site } from "@/data/site";

const caminhos = [
  { titulo: "Construtora ou incorporadora", texto: "Lançamento, estoque e corretor, com custo por venda medido até a assinatura.", href: "/segmentos/construtoras-e-incorporadoras/" },
  { titulo: "Distribuidor ou atacado", texto: "Consumidor final e profissional em campanhas separadas, vendedor com processo.", href: "/segmentos/distribuidores-e-atacado/" },
  { titulo: "Loja de ticket alto", texto: "Móveis e varejo: criativo por produto, WhatsApp que leva até o pedido.", href: "/segmentos/lojas-de-moveis/" },
  { titulo: "Clínica ou consultório", texto: "Agenda cheia e paciente que comparece, dentro das regras do conselho.", href: "/segmentos/clinicas-de-estetica/" },
];

const Index = () => (
  <Layout origem="home">
    <section className="section-dark purple-glow pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-sm font-semibold text-accent mb-6">
              Agência de tráfego pago e growth · João Pessoa, PB
            </p>
            <h1 className="mb-6 text-white text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1]">
              Tua empresa cresceu. Agora o marketing precisa <span className="gradient-domous-text">mostrar quanto vende.</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-muted leading-relaxed mb-8 max-w-2xl">{home.resposta}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <BotaoWhatsApp origem="home-hero" label="Falar com a Domous" />
              <a
                href="#conversa"
                className="inline-flex items-center justify-center rounded-full px-6 h-12 font-semibold border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                Montar minha mensagem
              </a>
            </div>
            <ul className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { valor: site.empresasAtendidas, rotulo: "empresas atendidas" },
                { valor: "+R$ 50 mi", rotulo: "em vendas geradas pros clientes" },
                { valor: "JP", rotulo: "sede em João Pessoa, PB" },
              ].map((n) => (
                <li key={n.rotulo} className="border-l-2 border-primary pl-4">
                  <strong className="block text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums whitespace-nowrap">{n.valor}</strong>
                  <span className="block text-xs md:text-sm text-dark-muted mt-1">{n.rotulo}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <img
              src={kairo}
              alt="Kairo Lucas, fundador e CEO da Domous"
              width={960}
              height={1440}
              className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[4/5] shadow-dark border border-white/10"
            />
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold text-white/90 mb-4">Qual é o teu negócio?</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {caminhos.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="group card-dark flex h-full flex-col rounded-2xl border p-5 hover:border-primary/60 transition-smooth">
                  <span className="font-bold text-white mb-1.5 flex items-center justify-between gap-2">
                    {c.titulo}
                    <ChevronRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                  <span className="text-sm text-dark-muted leading-relaxed">{c.texto}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="/segmentos/" className="inline-block mt-4 text-sm text-dark-muted hover:text-white">Ver todos os segmentos →</a>
        </div>
      </div>
    </section>

    <Clientes />

    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4 text-white max-w-3xl">Se alguma dessas frases já saiu da tua boca, a gente precisa conversar</h2>
        <p className="text-lg text-dark-muted mb-10 max-w-2xl">
          Tráfego sozinho não resolve. Antes e depois do anúncio vêm a oferta, o atendimento no WhatsApp e a medição da venda.
        </p>
        <ul className="grid gap-5 md:grid-cols-2">
          {home.dores.map((d) => (
            <li key={d.frase} className="card-dark rounded-2xl border border-l-4 border-l-primary p-6">
              <p className="text-xl font-bold text-white mb-3">“{d.frase}”</p>
              <p className="text-dark-muted leading-relaxed">{d.resposta}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Resultados ids={["imoveis-6-vendas", "loja-de-moveis", "clinica-de-estetica", "loja-de-moda", "consultorio-odontologico", "restaurante"]} />

    <PainelExemplo />

    <IaAutomacao />

    <ContaRapida origem="home-conta" />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4">Como funciona</h2>
        <p className="text-lg text-muted-foreground mb-10">Sem contrato antes de você ver o plano.</p>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {home.passos.map((p, i) => (
            <li key={p.titulo} className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full gradient-domous text-white font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold mb-2">{p.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <QuemCuida />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4">O que a Domous faz</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Tráfego pago é o centro. Em volta dele, tudo que decide se o clique vira venda.
        </p>
        <ServicosPorCategoria />
      </div>
    </section>

    <Perguntas faq={home.faq} titulo="Perguntas que todo empresário faz antes de fechar" />

    <MonteMensagem origem="home-final" />
  </Layout>
);

export default Index;
