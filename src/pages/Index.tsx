import kairo from "@/assets/kairo-hero.jpg";
import Layout from "@/components/site/Layout";
import BotaoWhatsApp from "@/components/site/BotaoWhatsApp";
import Clientes from "@/components/site/Clientes";
import { CtaFinal, GradeCartoes, Perguntas, Resultados } from "@/components/site/Blocos";
import { home } from "@/data/paginas";
import { servicos } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import { site } from "@/data/site";

const primeiraFrase = (texto: string) => texto.split(". ")[0] + ".";

const Index = () => (
  <Layout origem="home">
    <section className="section-dark purple-glow pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-sm font-semibold text-accent mb-6">
              Domous · Business Performance · João Pessoa, PB
            </p>
            <h1 className="mb-6 text-white">
              Agência de tráfego pago <span className="gradient-domous-text">em João Pessoa</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-muted leading-relaxed mb-8 max-w-2xl">{home.resposta}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <BotaoWhatsApp origem="home-hero" />
              <a
                href="/cases/"
                className="inline-flex items-center justify-center rounded-full px-6 h-12 font-semibold border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-smooth"
              >
                Ver resultados
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
              width={1279}
              height={1920}
              className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[4/5] shadow-dark border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>

    <Clientes />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4">O que a Domous faz</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Tráfego pago é o centro. Em volta dele, tudo que decide se o clique vira venda.
        </p>
        <GradeCartoes itens={servicos.map((s) => ({ titulo: s.nome, texto: primeiraFrase(s.resposta), href: `/servicos/${s.slug}/` }))} />
      </div>
    </section>

    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4 text-white">Pra quem a gente trabalha</h2>
        <p className="text-lg text-dark-muted mb-10 max-w-2xl">
          Empresas com produto validado que vendem pelo WhatsApp e querem crescer com previsibilidade.
        </p>
        <GradeCartoes escuro itens={segmentos.map((s) => ({ titulo: s.nome, texto: s.descricao, href: `/segmentos/${s.slug}/` }))} />
      </div>
    </section>

    <Resultados />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4">Como funciona</h2>
        <p className="text-lg text-muted-foreground mb-10">Três passos, sem contrato antes de você ver o plano.</p>
        <ol className="grid gap-6 md:grid-cols-3">
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

    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="mb-5 text-white">Tráfego sozinho não resolve</h2>
          <p className="text-lg text-dark-muted leading-relaxed mb-4">
            Antes do anúncio vêm a oferta, a página, a jornada do cliente, o atendimento no WhatsApp e a operação. Quando um desses
            trava, mais verba só deixa o problema mais caro.
          </p>
          <p className="text-lg text-dark-muted leading-relaxed mb-6">
            Por isso a Domous mede custo por cliente e receita de cada campanha, e assume junto a landing page, a oferta e o script de
            vendas quando são eles que seguram o resultado.
          </p>
          <a href="/sobre/" className="font-semibold text-accent hover:text-white">Conheça a Domous →</a>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {["Oferta", "Página", "Atendimento no WhatsApp", "Anúncio", "Medição até a venda", "Operação"].map((etapa) => (
            <li key={etapa} className="card-dark rounded-2xl border p-5 text-white font-semibold">{etapa}</li>
          ))}
        </ul>
      </div>
    </section>

    <Perguntas faq={home.faq} />

    <CtaFinal origem="home-final" />
  </Layout>
);

export default Index;
