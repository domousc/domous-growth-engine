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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        rolou || aberto || solido ? "bg-dark backdrop-blur-lg border-b border-dark-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center" aria-label="Domous, página inicial">
            <img src={logoBranco} alt="Domous Business Performance" className="h-8 md:h-9" width={188} height={36} />
          </a>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Principal">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-dark-foreground/85 hover:text-dark-foreground transition-smooth">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BotaoWhatsApp origem="cabecalho" label="Conversar" className="hidden md:inline-flex h-10 px-4 text-sm" />
            <Button variant="ghost" size="icon"
              onClick={() => setAberto(!aberto)}
              className="lg:hidden text-dark-foreground hover:bg-primary/15 hover:text-dark-foreground"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
            >
              {aberto ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {aberto && (
          <nav className="lg:hidden pb-6 flex flex-col gap-1 animate-fade-in" aria-label="Menu móvel">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="py-3 text-base font-medium text-dark-foreground/90 border-b border-dark-border">
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
