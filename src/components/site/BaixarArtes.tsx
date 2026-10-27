// Artes prontas pra postar (geradas no build por scripts/artes.mjs) e legenda pra copiar.
import { useState } from "react";
import { Check, Copy, Download, GalleryHorizontal } from "lucide-react";
import { laminasCarrossel } from "@/content/carrossel";
import { caminhoPost, ehNoticia, type Post } from "@/content/tipos";
import { site } from "@/data/site";

const BaixarArtes = ({ p }: { p: Post }) => {
  const [copiou, setCopiou] = useState(false);
  const base = `/img/posts/${p.slug}`;
  const totalLaminas = laminasCarrossel(p).length;
  const legenda = [
    p.h1,
    "",
    p.resposta,
    "",
    `${ehNoticia(p) ? "Leia a notícia completa" : "Leia completo"}: ${site.url}${caminhoPost(p)}`,
    "",
    ehNoticia(p) ? "Domous News · @domousc" : "Blog da Domous · @domousc",
  ].join("\n");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(legenda);
      setCopiou(true);
      setTimeout(() => setCopiou(false), 2500);
    } catch {
      setCopiou(false);
    }
  };

  const botao = "inline-flex items-center justify-center gap-2 rounded-full px-5 h-11 text-sm font-semibold transition-smooth";

  return (
    <section className="py-12 md:py-16 bg-secondary/40" aria-labelledby="baixar-artes">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center max-w-6xl">
        <div>
          <h2 id="baixar-artes" className="text-2xl md:text-3xl mb-4">{ehNoticia(p) ? "Leve essa notícia pro teu perfil" : "Leve esse conteúdo pro teu perfil"}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Arte pronta pro feed, pro story e um carrossel de {totalLaminas} lâminas, no tamanho do Instagram e do LinkedIn. Baixa, cola a
            legenda e posta. Só mantém o crédito da Domous.
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <a href={`${base}-post.png`} download={`domous-${p.slug}-post.png`} className={`${botao} gradient-domous text-white shadow-domous hover:opacity-90`}>
              <Download className="w-4 h-4" aria-hidden /> Post (1080×1350)
            </a>
            <a href={`${base}-story.png`} download={`domous-${p.slug}-story.png`} className={`${botao} gradient-domous text-white shadow-domous hover:opacity-90`}>
              <Download className="w-4 h-4" aria-hidden /> Story (1080×1920)
            </a>
            <a href={`${base}-carrossel.zip`} download={`domous-${p.slug}-carrossel.zip`} className={`${botao} gradient-domous text-white shadow-domous hover:opacity-90`}>
              <GalleryHorizontal className="w-4 h-4" aria-hidden /> Carrossel ({totalLaminas} lâminas, .zip)
            </a>
            <button type="button" onClick={copiar} className={`${botao} border-2 border-primary/40 hover:bg-primary/10`}>
              {copiou ? <Check className="w-4 h-4 text-primary" aria-hidden /> : <Copy className="w-4 h-4" aria-hidden />}
              {copiou ? "Legenda copiada" : "Copiar legenda"}
            </button>
          </div>
          <details className="text-sm">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">Ver a legenda</summary>
            <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-card p-4 font-sans text-foreground/80">{legenda}</pre>
          </details>
        </div>
        <div className="flex gap-4 items-end justify-center">
          <img src={`${base}-post.png`} alt={`Arte de post: ${p.h1}`} width={1080} height={1350} loading="lazy" className="w-[52%] rounded-2xl shadow-card border border-border" />
          <img src={`${base}-story.png`} alt={`Arte de story: ${p.h1}`} width={1080} height={1920} loading="lazy" className="w-[38%] rounded-2xl shadow-card border border-border" />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl mt-10">
        <p className="text-sm font-semibold mb-3">Lâminas do carrossel</p>
        <ul className="flex gap-3 overflow-x-auto pb-3">
          {Array.from({ length: totalLaminas }, (_, i) => {
            const arquivo = `${base}-carrossel-${String(i + 1).padStart(2, "0")}.png`;
            return (
              <li key={arquivo} className="shrink-0 w-36 md:w-44">
                <a href={arquivo} download={`domous-${p.slug}-${String(i + 1).padStart(2, "0")}.png`} title={`Baixar lâmina ${i + 1}`}>
                  <img src={arquivo} alt={`Lâmina ${i + 1} do carrossel`} width={1080} height={1350} loading="lazy" className="w-full rounded-xl border border-border shadow-card hover:opacity-90 transition-smooth" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BaixarArtes;
