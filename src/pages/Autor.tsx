// Página de autor do Kairo (/sobre/kairo-lucas/): dá rosto e credencial aos guias.
// Google e IAs pesam quem escreve (experiência e autoridade do autor).
import kairo from "@/assets/kairo-hero.webp";
import Layout from "@/components/site/Layout";
import { GradeCartoes, Secoes, Topo } from "@/components/site/Blocos";
import MonteMensagem from "@/components/site/MonteMensagem";
import { guias } from "@/data/guias";
import { autor } from "@/data/paginas";
import { site } from "@/data/site";

const Autor = () => (
  <Layout origem="autor">
    <Topo
      trilha={[
        { nome: "Início", href: "/" },
        { nome: "Sobre", href: "/sobre/" },
        { nome: "Kairo Lucas", href: "/sobre/kairo-lucas/" },
      ]}
      h1={autor.h1}
      resposta={autor.resposta}
      origem="autor"
    />
    <section className="pt-16 md:pt-24">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-[300px_1fr] gap-10 items-start max-w-5xl">
        <img src={kairo} alt="Kairo Lucas, fundador e CEO da Domous" width={960} height={1440} className="w-full max-w-xs rounded-3xl object-cover aspect-[4/5] shadow-card" />
        <ul className="space-y-3 text-lg">
          <li><strong>Cargo:</strong> fundador e CEO da Domous</li>
          <li><strong>Cidade:</strong> João Pessoa, Paraíba</li>
          <li><strong>Experiência:</strong> mais de 70 empresas atendidas pela Domous</li>
          <li>
            <strong>Onde acompanhar:</strong>{" "}
            <a href={site.instagramKairo} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">@kairolucas</a>{" "}
            · <a href={site.siteKairo} className="text-primary font-semibold hover:underline">kairolucas.com.br</a>
          </li>
        </ul>
      </div>
    </section>
    <Secoes secoes={autor.secoes} />
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl mb-8">Guias escritos por Kairo Lucas</h2>
        <GradeCartoes itens={guias.map((g) => ({ titulo: g.h1, texto: g.descricao, href: `/guias/${g.slug}/` }))} />
      </div>
    </section>
    <MonteMensagem origem="autor-final" />
  </Layout>
);

export default Autor;
