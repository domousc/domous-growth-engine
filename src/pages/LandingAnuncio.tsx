// Landing pages curtas pra receber tráfego pago, uma por vertical (/lp/:slug/).
// Fora do Google (noindex, fora do sitemap) e sem menu: o visitante só tem o
// caminho do WhatsApp. A página completa que ranqueia é a de /segmentos/.
import { useParams } from "react-router-dom";
import logoBranco from "@/assets/logo-domous-white.png";
import BotaoWhatsApp from "@/components/site/BotaoWhatsApp";
import Clientes from "@/components/site/Clientes";
import PainelExemplo from "@/components/site/PainelExemplo";
import MonteMensagem from "@/components/site/MonteMensagem";
import { Perguntas, Resultados } from "@/components/site/Blocos";
import { home } from "@/data/paginas";
import NotFound from "./NotFound";

type Lp = {
  setor: string;
  selo: string;
  titulo: string;
  sub: string;
  waTexto: string;
  dores: { frase: string; resposta: string }[];
  resultados: string[];
};

const lps: Record<string, Lp> = {
  construtoras: {
    setor: "construtora",
    selo: "Pra construtoras e incorporadoras",
    titulo: "Quanto custou cada venda do teu último lançamento?",
    sub: "A Domous cuida do anúncio, do atendimento do lead pelo corretor e da medição até a assinatura, com custo por venda por empreendimento num painel que você abre quando quiser.",
    waTexto: "Oi! Sou de uma construtora e vi a página da Domous. Quero entender como vocês medem o que o marketing vende.",
    dores: [
      { frase: "O corretor diz que o lead é ruim.", resposta: "Origem e andamento de cada lead registrados: dá pra ver se o problema é a campanha ou o atendimento." },
      { frase: "Não sei quanto custa cada venda.", resposta: "Painel com custo por lead qualificado, por visita e por venda, separado por empreendimento." },
      { frase: "O lead de sábado só é respondido na segunda.", resposta: "Distribuição automática pro corretor e agente de IA atendendo 24 horas." },
    ],
    resultados: ["imoveis-6-vendas"],
  },
  distribuidores: {
    setor: "distribuidor",
    selo: "Pra distribuidores e atacado",
    titulo: "Teu digital vende. Falta saber quanto.",
    sub: "Campanhas separadas pro consumidor final e pro profissional que compra todo mês, vendedor no WhatsApp com processo e cada pedido ligado à campanha que trouxe.",
    waTexto: "Oi! Sou de um distribuidor e vi a página da Domous. Quero entender quanto o digital pode vender pra gente.",
    dores: [
      { frase: "A mesma campanha fala com PF e com PJ.", resposta: "Campanha, oferta e atendimento próprios pra cada público." },
      { frase: "O pedido fecha no WhatsApp e some do relatório.", resposta: "Origem da conversa registrada e cruzada com o pedido." },
      { frase: "Brigo por preço com home center.", resposta: "O vendedor que entende de obra vira o anúncio, com o WhatsApp dele no botão." },
    ],
    resultados: ["loja-de-moveis", "imoveis-6-vendas"],
  },
};

const LandingAnuncio = () => {
  const { slug } = useParams();
  const lp = slug ? lps[slug] : undefined;
  if (!lp) return <NotFound />;
  const objecoes = home.faq.filter((f) =>
    ["Já tive agência", "As contas de anúncio", "time de marketing", "prazo mínimo", "antes de ver o plano"].some((t) => f.p.includes(t)),
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="section-dark purple-glow pt-8 pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <img src={logoBranco} alt="Domous Business Performance" className="h-8 mb-14" width={168} height={32} />
          <div className="max-w-3xl">
            <p className="inline-flex px-4 py-2 rounded-full bg-primary/15 text-sm font-semibold text-accent mb-6">{lp.selo}</p>
            <h1 className="mb-6 text-white">{lp.titulo}</h1>
            <p className="text-lg md:text-xl text-dark-muted leading-relaxed mb-8">{lp.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BotaoWhatsApp origem={`lp-${slug}-topo`} texto={lp.waTexto} label="Falar com a Domous" />
              <BotaoWhatsApp origem={`lp-${slug}-raio-x`} texto="Oi! Quero um Raio-X Domous da minha empresa." label="Quero um Raio-X Domous" variante="contorno" className="text-white" />
            </div>
          </div>
          <ul className="grid gap-4 md:grid-cols-3 mt-14">
            {lp.dores.map((d) => (
              <li key={d.frase} className="card-dark rounded-2xl border border-l-4 border-l-primary p-5">
                <p className="font-bold text-white mb-2">“{d.frase}”</p>
                <p className="text-sm text-dark-muted leading-relaxed">{d.resposta}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Clientes />
      <Resultados ids={lp.resultados} />
      <PainelExemplo />
      <Perguntas faq={objecoes} titulo="Antes de falar com a gente" />
      <MonteMensagem origem={`lp-${slug}-final`} setorInicial={lp.setor} />
      <footer className="section-dark border-t border-white/10 py-8 text-center text-xs text-dark-muted">
        Domous Business Performance · João Pessoa, PB · <a href="/" className="hover:text-white">domous.com.br</a>
      </footer>
    </div>
  );
};

export default LandingAnuncio;
