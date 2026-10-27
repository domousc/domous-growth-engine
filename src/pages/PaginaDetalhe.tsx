// Página de serviço ou de segmento: mesmo molde, muda a lista e a trilha.
import { useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { GradeCartoes, Perguntas, Resultados, Secoes, Topo } from "@/components/site/Blocos";
import PainelExemplo from "@/components/site/PainelExemplo";
import QuemCuida from "@/components/site/QuemCuida";
import MonteMensagem from "@/components/site/MonteMensagem";
import { servicos } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import NotFound from "./NotFound";

const tipos = {
  servicos: { lista: servicos, nome: "Serviços", outros: "Outros serviços da Domous" },
  segmentos: { lista: segmentos, nome: "Segmentos", outros: "Outros segmentos que a Domous atende" },
};

// Setor que já vem marcado no montador de mensagem, conforme a página.
const setorDaPagina: Record<string, string> = {
  "construtoras-e-incorporadoras": "construtora",
  "corretores-de-imoveis": "imobiliaria",
  "distribuidores-e-atacado": "distribuidor",
  "material-de-construcao": "distribuidor",
  "lojas-de-moveis": "loja",
  "varejo-e-ecommerce": "loja",
  "clinicas-de-estetica": "clinica",
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
      {tipo === "segmentos" && <PainelExemplo titulo="O painel que a tua empresa recebe" />}
      <Perguntas faq={pagina.faq} />
      {tipo === "segmentos" && <QuemCuida />}
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
      <MonteMensagem origem={`${tipo}-${pagina.slug}-final`} setorInicial={setorDaPagina[pagina.slug]} />
    </Layout>
  );
};

export default PaginaDetalhe;
