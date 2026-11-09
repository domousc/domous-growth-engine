import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { wa } from "@/data/site";
import { useRevelar } from "@/hooks/useRevelar";
import { useLuzNoCard } from "@/hooks/useLuzNoCard";

const Layout = ({ children, origem, cabecalhoSolido = false }: { children: ReactNode; origem: string; cabecalhoSolido?: boolean }) => {
  useRevelar(origem);
  useLuzNoCard();
  return (
  <div className="relative isolate min-h-screen overflow-x-hidden">
    <div className="fx-fundo" aria-hidden>
      <div className="fx-luz fx-luz-1" />
      <div className="fx-luz fx-luz-2" />
      <div className="fx-luz fx-luz-3" />
      <div className="fx-grade" />
      <div className="fx-grao" />
    </div>
    <Cabecalho solido={cabecalhoSolido} />
    <main>{children}</main>
    <Rodape />
    <a
      href={wa("Oi! Quero falar com a Domous sobre minha empresa.", `flutuante-${origem}`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Domous no WhatsApp"
      onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "click_whatsapp", origem: `flutuante-${origem}` }); }}
      data-cta="whatsapp"
      data-origem={`flutuante-${origem}`}
      className="fixed bottom-3 right-3 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full gradient-domous text-primary-foreground shadow-domous flex items-center justify-center hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-5 h-5" aria-hidden />
    </a>
  </div>
  );
};

export default Layout;
