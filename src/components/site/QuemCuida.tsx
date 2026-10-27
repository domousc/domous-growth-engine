import kairo from "@/assets/kairo-hero.webp";
import { site } from "@/data/site";

const QuemCuida = () => (
  <section className="py-16 md:py-24 bg-secondary/40">
    <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-[320px_1fr] gap-10 items-center max-w-5xl">
      <img
        src={kairo}
        alt="Kairo Lucas, fundador e CEO da Domous"
        width={960}
        height={1440}
        loading="lazy"
        className="w-full max-w-xs mx-auto rounded-3xl object-cover aspect-[4/5] shadow-card"
      />
      <div>
        <p className="text-sm font-semibold text-primary mb-2">Quem cuida da tua conta</p>
        <h2 className="text-2xl md:text-3xl mb-5">Estratégia pensada por quem fundou a Domous</h2>
        <p className="text-lg text-foreground/80 leading-relaxed mb-4">
          Kairo Lucas é fundador e CEO da Domous e trabalha na operação: estratégia e gestão de tráfego no Meta e no Google,
          e-commerce, funil, processo comercial e automação com inteligência artificial. Samuel, Head de Operações, toca o dia a dia
          das entregas.
        </p>
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          Pra empresa que já fatura alto, isso significa conversar direto com quem decide a estratégia.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a href="/sobre/kairo-lucas/" className="text-primary hover:underline">Quem é Kairo Lucas</a>
          <a href="/sobre/" className="text-primary hover:underline">Conheça a Domous</a>
          <a href={site.instagramKairo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            @kairolucas no Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default QuemCuida;
