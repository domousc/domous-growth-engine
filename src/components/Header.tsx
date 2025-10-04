import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoDomous from "@/assets/logo-domous-black.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Cases", href: "#cases" },
    { label: "Funil", href: "#funil" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como decidimos", href: "#decisao" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  const handleCTAClick = () => {
    const event = new CustomEvent('cta_sticky_click', { detail: { location: 'header' } });
    window.dispatchEvent(event);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={logoDomous} alt="DOMOUS Business Performance" className="h-8 md:h-10" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+5583981195186"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'call_click', location: 'header' });
              }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-smooth font-medium"
            >
              <span className="text-sm">📞 Ligar agora</span>
            </a>
            
            <Button
              onClick={handleCTAClick}
              className="hidden md:flex gradient-domous text-white hover:opacity-90 transition-smooth shadow-domous"
              size="lg"
            >
              Falar com um Estrategista
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  handleCTAClick();
                  setIsMobileMenuOpen(false);
                }}
                className="gradient-domous text-white hover:opacity-90 transition-smooth shadow-domous mt-2"
              >
                Falar com um Estrategista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
