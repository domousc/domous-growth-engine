import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoBranco from "@/assets/logo-domous-white.png";
import BotaoWhatsApp from "./BotaoWhatsApp";

const menu = [
  { label: "Serviços", href: "/servicos/" },
  { label: "Segmentos", href: "/segmentos/" },
  { label: "Resultados", href: "/cases/" },
  { label: "Blog", href: "/blog/" },
  { label: "News", href: "/news/" },
  { label: "Quanto custa", href: "/quanto-custa/" },
  { label: "Sobre", href: "/sobre/" },
];

// `solido`: fundo escuro desde o topo, pra páginas de fundo claro (ex.: Domous News).
const Cabecalho = ({ solido = false }: { solido?: boolean }) => {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    aoRolar();
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:pt-4">
      <div className={`fx-pilula ${rolou || aberto || solido ? "rolou" : ""} mx-auto max-w-6xl ${aberto ? "rounded-3xl" : "rounded-full"} pl-5 pr-2 md:pl-6`}>
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="/" className="flex items-center" aria-label="Domous, página inicial">
            <img src={logoBranco} alt="Domous Business Performance" className="h-7 md:h-8" width={167} height={32} />
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Principal">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="fx-menu-link text-sm font-medium text-dark-foreground/75">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BotaoWhatsApp origem="cabecalho" label="Conversar" className="hidden md:inline-flex h-10 md:h-11 px-5 text-sm" />
            <Button variant="ghost" size="icon"
              onClick={() => setAberto(!aberto)}
              className="lg:hidden rounded-full text-dark-foreground hover:bg-white/10 hover:text-dark-foreground"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
            >
              {aberto ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {aberto && (
          <nav className="lg:hidden pb-5 pr-3 flex flex-col animate-fade-in" aria-label="Menu móvel">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="py-3 text-base font-medium text-dark-foreground/90 border-b border-white/[0.07]">
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full h-11"><a href="/raio-x-domous/">Conhecer o Raio-X</a></Button>
            <BotaoWhatsApp origem="menu-movel" label="Falar com a Domous" variante="contorno" className="mt-3 text-dark-foreground" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Cabecalho;
