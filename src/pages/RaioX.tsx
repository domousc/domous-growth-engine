// Oferta de entrada: Raio-X Domous (/raio-x-domous/). Sem valor e sem prazo no site.
import { Check, ScanSearch } from "lucide-react";
import Layout from "@/components/site/Layout";
import BotaoWhatsApp from "@/components/site/BotaoWhatsApp";
import Clientes from "@/components/site/Clientes";
import QuemCuida from "@/components/site/QuemCuida";
import MonteMensagem from "@/components/site/MonteMensagem";
import { Etapas, Perguntas, Resultados, Trilha } from "@/components/site/Blocos";
import { raioX } from "@/data/paginas";

const RaioX = () => (
  <Layout origem="raio-x">
    <section className="section-dark purple-glow pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <Trilha itens={[{ nome: "Início", href: "/" }, { nome: "Raio-X Domous", href: "/raio-x-domous/" }]} />
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-sm font-semibold text-accent mb-6">
            <ScanSearch className="w-4 h-4" aria-hidden /> O primeiro passo com a Domous
          </p>
          <h1 className="mb-6 text-white">{raioX.h1}</h1>
          <p className="text-lg md:text-xl text-dark-muted leading-relaxed mb-8">{raioX.resposta}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BotaoWhatsApp origem="raio-x-topo" texto={raioX.waTexto} label="Quero um Raio-X Domous" />
            <a href="#frentes" className="inline-flex items-center justify-center rounded-full px-6 h-12 font-semibold border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-smooth">
              O que a gente analisa
            </a>
          </div>
        </div>
        <div className="card-dark rounded-3xl border p-6 md:p-8">
          <p className="text-sm font-semibold text-accent mb-4">O que você recebe</p>
          <ul className="space-y-3">
            {raioX.entregas.map((e) => (
              <li key={e} className="flex gap-3 text-white/90 leading-relaxed">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section id="frentes" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-4">As cinco frentes do Raio-X</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Do anúncio até a venda, porque o problema quase nunca está só na campanha.
        </p>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {raioX.frentes.map((f, i) => (
            <li key={f.titulo} className="bg-card rounded-2xl border border-border border-t-4 border-t-primary p-6 shadow-card">
              <span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-bold mt-2 mb-2">{f.titulo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Etapas etapas={raioX.passos} titulo="Como funciona" />
    <Resultados ids={["imoveis-6-vendas", "loja-de-moveis", "clinica-de-estetica"]} titulo="O que vem depois de um bom plano" />
    <Clientes />
    <Perguntas faq={raioX.faq} />
    <QuemCuida />
    <section className="section-dark purple-glow py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-2xl">
        <h2 className="mb-5 text-white">Quer o Raio-X da tua empresa?</h2>
        <p className="text-lg text-dark-muted mb-8">Chama no WhatsApp. A gente entende o momento da empresa e combina o Raio-X.</p>
        <BotaoWhatsApp origem="raio-x-final" texto={raioX.waTexto} label="Quero um Raio-X Domous" />
      </div>
    </section>
    <MonteMensagem origem="raio-x-mensagem" />
  </Layout>
);

export default RaioX;
