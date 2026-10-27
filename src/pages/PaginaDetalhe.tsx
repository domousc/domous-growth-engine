// Página de serviço ou de segmento: mesmo molde, muda a lista e a trilha.
import { useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { CtaFinal, GradeCartoes, Perguntas, Resultados, Secoes, Topo } from "@/components/site/Blocos";
import { servicos } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import NotFound from "./NotFound";

const tipos = {
  servicos: { lista: servicos, nome: "Serviços", outros: "Outros serviços da Domous" },
  segmentos: { lista: segmentos, nome: "Segmentos", outros: "Outros segmentos que a Domous atende" },
};

const PaginaDetalhe = ({ tipo }: { tipo: keyof typeof tipos }) => {
  const { slug } = useParams();
  const { lista, nome, outros } = tipos[tipo];
  const pagina = lista.find((p) => p.slug === slug);
  if (!pagina) return <NotFound />;

  return (
    <Layout origem={`${tipo}-${pagina.slug}`}>
      <Topo
        trilha={[
          { nome: "Início", href: "/" },
          { nome, href: `/${tipo}/` },
          { nome: pagina.nome, href: `/${tipo}/${pagina.slug}/` },
        ]}
        h1={pagina.h1}
        resposta={pagina.resposta}
        origem={`${tipo}-${pagina.slug}`}
        waTexto={pagina.waTexto}
      />
      <Secoes secoes={pagina.secoes} />
      <Resultados ids={pagina.resultados} titulo="Resultados em operações parecidas" />
      <Perguntas faq={pagina.faq} />
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-8">{outros}</h2>
          <GradeCartoes
            itens={lista
              .filter((p) => p.slug !== pagina.slug)
              .map((p) => ({ titulo: p.nome, texto: p.descricao, href: `/${tipo}/${p.slug}/` }))}
          />
        </div>
      </section>
      <CtaFinal origem={`${tipo}-${pagina.slug}-final`} waTexto={pagina.waTexto} />
    </Layout>
  );
};

export default PaginaDetalhe;
