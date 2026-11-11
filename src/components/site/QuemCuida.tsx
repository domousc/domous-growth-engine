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

// Grade compacta: 5 por linha no computador, 3 no celular. Nome e cargo sobre a foto
// no computador e embaixo dela no celular.
const QuemCuida = () => (
  <section className="section-pad" id="time">
    <div className="section-shell">
      <div className="md:flex md:items-end md:justify-between gap-10 mb-8 md:mb-10">
        <div>
          <p className="eyebrow mb-3">Time</p>
          <h2 className="text-3xl md:text-4xl">Quem faz a operação.</h2>
        </div>
        <p className="text-muted-foreground max-w-md leading-relaxed mt-4 md:mt-0">
          Estratégia, anúncio, conteúdo, vídeo e design no mesmo time, falando entre si.
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-3 gap-y-5 md:gap-4">
        {time.map((p) => {
          const Cartao = p.href ? "a" : "div";
          return (
            <li key={p.nome} className="w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-4rem)/5)]">
              <Cartao {...(p.href ? { href: p.href } : {})} title={p.texto} className="time-cartao group block">
                <div className="time-quadro relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl">
                  <img src={p.foto} alt={`${p.nome}, ${p.cargo} da Domous`} width={720} height={900} loading="lazy" decoding="async"
                    className="time-img absolute inset-0 h-full w-full object-cover object-top" />
                  <div className="hidden md:block absolute inset-x-0 bottom-0 p-4 pt-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                    <p className="text-white font-semibold text-base leading-tight">{p.nome}</p>
                    <p className="text-white/70 text-xs leading-snug mt-0.5">{p.cargo}</p>
                  </div>
                </div>
                <div className="md:hidden mt-2 px-0.5">
                  <p className="font-semibold text-[13px] leading-tight text-foreground">{p.nome}</p>
                  <p className="text-[11px] leading-snug text-muted-foreground mt-0.5">{p.cargo}</p>
                </div>
              </Cartao>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold mt-8">
        <a href="/sobre/" className="text-primary hover:underline">Conheça a Domous</a>
        <a href={site.instagramKairo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@kairolucas no Instagram</a>
      </div>
    </div>
  </section>
);

export default QuemCuida;
