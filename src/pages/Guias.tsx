// Central de guias (/guias/) e página de cada guia (/guias/:slug/).
import { useParams } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";
import Layout from "@/components/site/Layout";
import { GradeCartoes, Perguntas, Secoes, Topo } from "@/components/site/Blocos";
import MonteMensagem from "@/components/site/MonteMensagem";
import { guias, guiaPorSlug } from "@/data/guias";
import { guia as guiaAgencia } from "@/data/paginas";
import { servicoPorSlug, type Pagina } from "@/data/servicos";
import NotFound from "./NotFound";

const dataBR = (iso: string) => iso.split("-").reverse().join("/");

// Minutos de leitura a ~200 palavras por minuto.
const minutos = (textos: string[]) => Math.max(2, Math.round(textos.join(" ").split(/\s+/).length / 200));

const todosOsGuias = [
  ...guias.map((g) => ({ titulo: g.h1, texto: g.descricao, href: `/guias/${g.slug}/` })),
  { titulo: guiaAgencia.h1, texto: guiaAgencia.descricao, href: "/como-escolher-agencia-de-trafego-pago/" },
];

export const GuiasIndice = () => (
  <Layout origem="guias">
    <Topo
      trilha={[{ nome: "Início", href: "/" }, { nome: "Guias", href: "/guias/" }]}
      h1="Guias de marketing e vendas pra empresários"
      resposta="Respostas diretas pras perguntas que o empresário faz antes de investir em marketing: onde anunciar, como medir o retorno, como usar IA no atendimento e como vender mais pelo WhatsApp. Escritos pela Domous, agência de tráfego pago e growth de João Pessoa, a partir do que a gente vê na operação dos clientes."
      origem="guias"
    />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <GradeCartoes itens={todosOsGuias} />
      </div>
    </section>
    <MonteMensagem origem="guias-final" />
  </Layout>
);

export const GuiaPagina = () => {
  const { slug } = useParams();
  const g = slug ? guiaPorSlug(slug) : undefined;
  if (!g) return <NotFound />;
  const servicos = g.servicos.map(servicoPorSlug).filter((s): s is Pagina => !!s);
  const leitura = minutos([g.resposta, ...g.secoes.flatMap((s) => [...s.paragrafos, ...(s.itens ?? [])]), ...g.faq.map((f) => f.r)]);

  return (
    <Layout origem={`guia-${g.slug}`}>
      <Topo
        trilha={[
          { nome: "Início", href: "/" },
          { nome: "Guias", href: "/guias/" },
          { nome: g.h1, href: `/guias/${g.slug}/` },
        ]}
        h1={g.h1}
        resposta={g.resposta}
        origem={`guia-${g.slug}`}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-muted">
          <span className="inline-flex items-center gap-1.5"><BookOpen className="w-4 h-4" aria-hidden /> Por <a href="/sobre/kairo-lucas/" className="text-white hover:underline">Kairo Lucas</a>, Domous</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden /> {leitura} min de leitura</span>
          <span>Atualizado em <time dateTime={g.atualizado}>{dataBR(g.atualizado)}</time></span>
        </p>
      </Topo>
      <Secoes secoes={g.secoes} />
      <Perguntas faq={g.faq} />
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-8">Como a Domous ajuda nisso</h2>
          <GradeCartoes itens={servicos.map((s) => ({ titulo: s.nome, texto: s.descricao, href: `/servicos/${s.slug}/` }))} />
        </div>
      </section>
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-8">Outros guias</h2>
          <GradeCartoes itens={todosOsGuias.filter((x) => x.href !== `/guias/${g.slug}/`).slice(0, 3)} />
        </div>
      </section>
      <MonteMensagem origem={`guia-${g.slug}-final`} />
    </Layout>
  );
};
