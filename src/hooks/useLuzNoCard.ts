import { useEffect } from "react";

// Luz roxa que acompanha o mouse dentro dos cards de vidro (.bg-card, .card-dark).
// Um único ouvinte no documento: acha o card sob o mouse e passa a posição
// em --mx/--my, que o CSS usa no degradê de fundo. Sem mouse (celular), nada roda.
const CARDS = ".bg-card, .card-dark, .bg-dark-card";

export function useLuzNoCard() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover)").matches) return;
    let ultimo: HTMLElement | null = null;
    const mover = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(CARDS) ?? null;
      if (ultimo && ultimo !== card) { ultimo.style.removeProperty("--mx"); ultimo.style.removeProperty("--my"); }
      ultimo = card;
      if (!card) return;
      const b = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - b.left}px`);
      card.style.setProperty("--my", `${e.clientY - b.top}px`);
    };
    document.addEventListener("pointermove", mover, { passive: true });
    return () => document.removeEventListener("pointermove", mover);
  }, []);
}
