import { site } from "@/data/site";
import kairo from "@/assets/time/kairo.webp";
import thais from "@/assets/time/thais.webp";
import samara from "@/assets/time/samara.webp";
import matheus from "@/assets/time/matheus.webp";
import icaro from "@/assets/time/icaro.webp";
import frank from "@/assets/time/frank.webp";
import gustavo from "@/assets/time/gustavo.webp";
import luciano from "@/assets/time/luciano.webp";
import samuel from "@/assets/time/samuel.webp";

// Seção "Time": quem faz a operação. Fotos originais com o mesmo enquadramento (720x900).
const time = [
  { nome: "Kairo Lucas", cargo: "Fundador e CEO", texto: "Conduz a estratégia: tráfego no Meta e no Google, funil, processo comercial e IA.", foto: kairo, href: "/sobre/kairo-lucas/" },
  { nome: "Gustavo Mattos", cargo: "Estrategista e sócio", texto: "Define com o Kairo a estratégia de crescimento de cada conta.", foto: gustavo },
  { nome: "Samuel", cargo: "Head de Operações (CDM)", texto: "Acompanha o dia a dia das entregas e garante que cada cliente receba o que foi combinado.", foto: samuel },
  { nome: "Thaís", cargo: "Diretora de marketing", texto: "Planeja o que vai ser comunicado, quando e com qual oferta.", foto: thais },
  { nome: "Luciano", cargo: "Gestor de tráfego", texto: "Sobe, otimiza e acompanha as campanhas pagas em todas as plataformas.", foto: luciano },
  { nome: "Ícaro", cargo: "Social media", texto: "Toca o orgânico: pauta, publicação, comunidade e collabs.", foto: icaro },
  { nome: "Samara", cargo: "Editora de vídeo", texto: "Edita os vídeos de anúncio, Reels e TikTok.", foto: samara },
  { nome: "Matheus", cargo: "Designer gráfico", texto: "Cria as peças visuais de rede, anúncio e loja.", foto: matheus },
  { nome: "Frank", cargo: "Designer gráfico", texto: "Faz artes de post, carrossel, banner e criativo estático.", foto: frank },
];

const QuemCuida = () => (
  <section className="section-pad" id="time">
    <div className="section-shell">
      <p className="eyebrow mb-3">Time</p>
      <h2 className="text-3xl md:text-4xl max-w-2xl mb-4">Quem faz a operação.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        Estratégia, anúncio, conteúdo, vídeo e design no mesmo time, falando entre si.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {time.map((p) => {
          const Cartao = p.href ? "a" : "div";
          return (
            <li key={p.nome}>
              <Cartao {...(p.href ? { href: p.href } : {})} className="time-cartao card-brilho bg-card group block h-full rounded-3xl border border-border overflow-hidden">
                <div className="time-foto relative aspect-[4/5] overflow-hidden">
                  <img src={p.foto} alt={`${p.nome}, ${p.cargo} da Domous`} width={720} height={900} loading="lazy" decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl leading-tight">{p.nome}</h3>
                  <p className="text-sm font-semibold text-primary mt-1">{p.cargo}</p>
                  <p className="hidden md:block text-sm text-muted-foreground leading-relaxed mt-3">{p.texto}</p>
                </div>
              </Cartao>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold mt-8">
        <a href="/sobre/" className="text-primary hover:underline">Conheça a Domous</a>
        <a href={site.instagramKairo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@kairolucas no Instagram</a>
      </div>
    </div>
  </section>
);

export default QuemCuida;
