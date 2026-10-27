// Páginas avulsas: quanto custa, resultados, sobre e o guia.
import time from "@/assets/time-domous.jpg";
import kairo from "@/assets/kairo-hero.jpg";
import Layout from "@/components/site/Layout";
import Clientes from "@/components/site/Clientes";
import { Perguntas, Resultados, Secoes, Topo } from "@/components/site/Blocos";
import ContaRapida from "@/components/site/ContaRapida";
import MonteMensagem from "@/components/site/MonteMensagem";
import PainelExemplo from "@/components/site/PainelExemplo";
import { guia, quantoCusta, resultadosPagina, sobre } from "@/data/paginas";
import { site } from "@/data/site";

export const QuantoCusta = () => (
  <Layout origem="quanto-custa">
    <Topo
      trilha={[{ nome: "Início", href: "/" }, { nome: "Quanto custa", href: "/quanto-custa/" }]}
      h1={quantoCusta.h1}
      resposta={quantoCusta.resposta}
      origem="quanto-custa"
      waTexto="Oi! Quero entender quanto custa trabalhar com a Domous."
    />
    <Secoes secoes={quantoCusta.secoes} />
    <Perguntas faq={quantoCusta.faq} />
    <ContaRapida origem="quanto-custa-conta" />
    <MonteMensagem origem="quanto-custa-final" titulo="Quer o valor pro teu caso? Monta tua mensagem" />
  </Layout>
);


export const Cases = () => (
  <Layout origem="cases">
    <Topo
      trilha={[{ nome: "Início", href: "/" }, { nome: "Resultados", href: "/cases/" }]}
      h1={resultadosPagina.h1}
      resposta={resultadosPagina.resposta}
      origem="cases"
    />
    <Resultados titulo="Números por segmento" />
    <Clientes titulo="Algumas empresas que já passaram pela Domous" />
    <PainelExemplo />
    <MonteMensagem origem="cases-final" titulo="Quer um resultado desses no teu negócio?" />
  </Layout>
);

export const Sobre = () => (
  <Layout origem="sobre">
    <Topo
      trilha={[{ nome: "Início", href: "/" }, { nome: "Sobre", href: "/sobre/" }]}
      h1={sobre.h1}
      resposta={sobre.resposta}
      origem="sobre"
    />
    <Secoes secoes={sobre.secoes} />
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8 grid gap-6 md:grid-cols-2 max-w-5xl">
        <figure>
          <img src={kairo} alt="Kairo Lucas, fundador e CEO da Domous" width={1279} height={1920} loading="lazy" className="w-full rounded-3xl object-cover aspect-[4/5]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Kairo Lucas, fundador e CEO. <a className="text-primary font-semibold" href={site.instagramKairo}>@kairolucas</a>
          </figcaption>
        </figure>
        <figure>
          <img src={time} alt="Time da Domous trabalhando numa gravação" width={844} height={1500} loading="lazy" className="w-full rounded-3xl object-cover aspect-[4/5]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">Time da Domous em gravação de conteúdo.</figcaption>
        </figure>
      </div>
    </section>
    <Clientes />
    <MonteMensagem origem="sobre-final" />
  </Layout>
);

export const Guia = () => (
  <Layout origem="guia">
    <Topo
      trilha={[
        { nome: "Início", href: "/" },
        { nome: "Como escolher uma agência de tráfego pago", href: "/como-escolher-agencia-de-trafego-pago/" },
      ]}
      h1={guia.h1}
      resposta={guia.resposta}
      origem="guia"
    />
    <Secoes secoes={guia.secoes} />
    <MonteMensagem origem="guia-final" titulo="Quer fazer essas perguntas pra Domous?" />
  </Layout>
);
