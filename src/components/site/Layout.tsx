import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { wa } from "@/data/site";

const Layout = ({ children, origem }: { children: ReactNode; origem: string }) => (
  <div className="min-h-screen overflow-x-hidden">
    <Cabecalho />
    <main>{children}</main>
    <Rodape />
    <a
      href={wa("Oi! Quero falar com a Domous sobre minha empresa.", `flutuante-${origem}`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Domous no WhatsApp"
      data-cta="whatsapp"
      data-origem={`flutuante-${origem}`}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full gradient-domous text-white shadow-domous flex items-center justify-center hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-6 h-6" aria-hidden />
    </a>
  </div>
);

export default Layout;
