// Página de serviço ou de segmento: mesmo molde, muda a lista e a trilha.
// Ordem pensada pra decisão: resposta direta, se é pra mim, o que entra, como
// funciona, prova, painel, objeções, quem cuida e o caminho pro WhatsApp.
import { useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { Etapas, GradeCartoes, MetricasFerramentas, ParaQuem, Perguntas, Resultados, Secoes, Topo } from "@/components/site/Blocos";
import PainelExemplo from "@/components/site/PainelExemplo";
import QuemCuida from "@/components/site/QuemCuida";
import MonteMensagem from "@/components/site/MonteMensagem";
import { servicos, type Pagina } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import { guias } from "@/data/guias";
import NotFound from "./NotFound";

const tipos = {
  servicos: { lista: servicos, nome: "Serviços", outros: "Serviços relacionados" },
  segmentos: { lista: segmentos, nome: "Segmentos", outros: "Outros segmentos que a Domous atende" },
};

// Setor que já vem marcado no montador de mensagem, conforme a página.
const setorDaPagina: Record<string, string> = {
  "construtoras-e-incorporadoras": "construtora",
  "corretores-de-imoveis": "imobiliaria",
  "book-de-empreendimento": "construtora",
  "distribuidores-e-atacado": "distribuidor",
  "material-de-construcao": "distribuidor",
  "lojas-de-moveis": "loja",
  "varejo-e-ecommerce": "loja",
  "criacao-de-loja-virtual": "loja",
  ecommerce: "loja",
  "clinicas-de-estetica": "clinica",
};

// Guias ligados a cada página: serviços pelo campo `servicos` do guia; segmentos por tema.
const guiasDoSegmento: Record<string, string[]> = {
  "construtoras-e-incorporadoras": ["como-vender-lancamento-imobiliario-com-trafego-pago", "como-calcular-cac-roas-e-ltv", "conversas-meta-ads-x-whatsapp"],
  "corretores-de-imoveis": ["como-vender-lancamento-imobiliario-com-trafego-pago", "conversas-meta-ads-x-whatsapp"],
  "distribuidores-e-atacado": ["marketing-para-distribuidora", "api-de-conversoes-do-meta", "como-calcular-cac-roas-e-ltv"],
  "material-de-construcao": ["marketing-para-distribuidora", "como-aparecer-no-google-maps"],
  "lojas-de-moveis": ["criativo-e-a-nova-segmentacao-meta-ads", "meta-ads-ou-google-ads", "como-anunciar-em-joao-pessoa"],
  "clinicas-de-estetica": ["como-aparecer-no-google-maps", "agente-de-ia-no-whatsapp", "como-anunciar-em-joao-pessoa"],
  "varejo-e-ecommerce": ["performance-max-o-que-e", "meta-ads-ou-google-ads", "como-calcular-cac-roas-e-ltv"],
};

const guiasDe = (tipo: string, slug: string) =>
  tipo === "servicos"
    ? guias.filter((g) => g.servicos.includes(slug)).slice(0, 3)
    : (guiasDoSegmento[slug] ?? []).map((s) => guias.find((g) => g.slug === s)).filter((g): g is (typeof guias)[number] => !!g);

const relacionadosDe = (pagina: Pagina, lista: Pagina[]) => {
  const escolhidos = pagina.relacionados?.map((s) => lista.find((p) => p.slug === s)).filter((p): p is Pagina => !!p);
  return escolhidos?.length ? escolhidos : lista.filter((p) => p.slug !== pagina.slug);
};

const PaginaDetalhe = ({ tipo }: { tipo: keyof typeof tipos }) => {
  const { slug } = useParams();
  const { lista, nome, outros } = tipos[tipo];
  const pagina = lista.find((p) => p.slug === slug);
  if (!pagina) return <NotFound />;
  const painel = tipo === "segmentos" || pagina.mostrarPainel;

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
      <ParaQuem paraQuem={pagina.paraQuem} sinais={pagina.sinais} />
      <Secoes secoes={pagina.secoes} />
      <Etapas etapas={pagina.etapas} />
      <MetricasFerramentas metricas={pagina.metricas} ferramentas={pagina.ferramentas} />
      <Resultados ids={pagina.resultados} titulo="Resultados em operações parecidas" />
      {painel && <PainelExemplo titulo={tipo === "segmentos" ? "O painel que a tua empresa recebe" : "O painel que tu recebe"} />}
      <Perguntas faq={pagina.faq} />
      {guiasDe(tipo, pagina.slug).length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl mb-8">Guias pra aprofundar</h2>
            <GradeCartoes itens={guiasDe(tipo, pagina.slug).map((g) => ({ titulo: g.h1, texto: g.descricao, href: `/guias/${g.slug}/` }))} />
          </div>
        </section>
      )}
      <QuemCuida />
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-8">{outros}</h2>
          <GradeCartoes
            itens={relacionadosDe(pagina, lista).map((p) => ({ titulo: p.nome, texto: p.descricao, href: `/${tipo}/${p.slug}/` }))}
          />
        </div>
      </section>
      <MonteMensagem origem={`${tipo}-${pagina.slug}-final`} setorInicial={setorDaPagina[pagina.slug]} />
    </Layout>
  );
};

export default PaginaDetalhe;
