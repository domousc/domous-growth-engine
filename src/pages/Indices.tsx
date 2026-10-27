// Páginas /servicos/ e /segmentos/: lista com link pra cada página.
import Layout from "@/components/site/Layout";
import { CtaFinal, GradeCartoes, Topo } from "@/components/site/Blocos";
import { servicos } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import { indices } from "@/data/paginas";

const Indice = ({ tipo }: { tipo: keyof typeof indices }) => {
  const i = indices[tipo];
  const lista = tipo === "servicos" ? servicos : segmentos;
  const nome = tipo === "servicos" ? "Serviços" : "Segmentos";
  return (
    <Layout origem={tipo}>
      <Topo
        trilha={[{ nome: "Início", href: "/" }, { nome, href: `/${tipo}/` }]}
        h1={i.h1}
        resposta={i.resposta}
        origem={tipo}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GradeCartoes itens={lista.map((p) => ({ titulo: p.nome, texto: p.descricao, href: `/${tipo}/${p.slug}/` }))} />
        </div>
      </section>
      <CtaFinal origem={`${tipo}-final`} />
    </Layout>
  );
};

export default Indice;
