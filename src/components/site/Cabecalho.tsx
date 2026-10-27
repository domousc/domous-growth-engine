import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoBranco from "@/assets/logo-domous-white.png";
import BotaoWhatsApp from "./BotaoWhatsApp";

const menu = [
  { label: "Serviços", href: "/servicos/" },
  { label: "Segmentos", href: "/segmentos/" },
  { label: "Resultados", href: "/cases/" },
  { label: "Blog", href: "/blog/" },
  { label: "Quanto custa", href: "/quanto-custa/" },
  { label: "Sobre", href: "/sobre/" },
];

const Cabecalho = () => {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    aoRolar();
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        rolou || aberto ? "bg-[hsl(var(--dark-bg))]/95 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center" aria-label="Domous, página inicial">
            <img src={logoBranco} alt="Domous Business Performance" className="h-8 md:h-9" width={188} height={36} />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/85 hover:text-white transition-smooth">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BotaoWhatsApp origem="topo" label="Falar com a Domous" className="hidden md:inline-flex h-11 text-sm" />
            <button
              onClick={() => setAberto(!aberto)}
              className="lg:hidden p-2 text-white"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
            >
              {aberto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {aberto && (
          <nav className="lg:hidden pb-6 flex flex-col gap-1 animate-fade-in" aria-label="Menu móvel">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="py-3 text-base font-medium text-white/90 border-b border-white/10">
                {item.label}
              </a>
            ))}
            <BotaoWhatsApp origem="menu-movel" label="Falar com a Domous" className="mt-4" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Cabecalho;
