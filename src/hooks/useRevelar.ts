import { useEffect } from "react";

// Entrada suave dos blocos na rolagem e preenchimento da linha dos passos.
// Só esconde o que está abaixo da dobra no momento em que roda, então o topo
// nunca pisca e quem chega sem JavaScript (ou robô de busca) vê tudo normal.
// Usa data-atributos em vez de className pra não brigar com o React.
const BLOCOS = "main section :is(.section-shell, .container) > *";
const ITENS = "main section :is(.grid, .passos-linha) > *";

export function useRevelar(chave?: string) {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const itens = Array.from(document.querySelectorAll<HTMLElement>(ITENS));
    const paisDeItens = new Set(itens.map((el) => el.parentElement));
    // Um grid que já anima filho por filho não anima inteiro de novo.
    const blocos = Array.from(document.querySelectorAll<HTMLElement>(BLOCOS)).filter((el) => !paisDeItens.has(el));
    const dobra = window.innerHeight * 0.92;
    const alvos = new Set<HTMLElement>();

    for (const el of [...blocos, ...itens]) {
      if (el.closest("[data-rv]") && el.closest("[data-rv]") !== el) continue; // pai já anima
      if (el.getBoundingClientRect().top < dobra) continue;
      el.dataset.rv = "0";
      alvos.add(el);
    }
    // Escalona irmãos do mesmo grid: 70 ms entre um e outro, no máximo 350 ms.
    for (const el of itens) {
      if (!alvos.has(el) || !el.parentElement) continue;
      const i = Array.from(el.parentElement.children).indexOf(el);
      el.style.setProperty("--rv-atraso", `${Math.min(i, 5) * 70}ms`);
    }

    const linhas = Array.from(document.querySelectorAll<HTMLElement>(".passos-linha")).filter(
      (el) => el.getBoundingClientRect().top >= dobra,
    );
    linhas.forEach((el) => (el.dataset.linha = "0"));

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.rv) el.dataset.rv = "1";
          if (el.dataset.linha) el.dataset.linha = "1";
          obs.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    alvos.forEach((el) => obs.observe(el));
    linhas.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [chave]);
}
