import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoDomousBlack from "@/assets/logo-domous-black.png";
import logoDomousWhite from "@/assets/logo-domous-white.png";
import CTAButton from "./CTAButton";

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
    { label: "Início", href: "#hero" },
    { label: "Sistema", href: "#sistema" },
    { label: "Como trabalhamos", href: "#como-trabalhamos" },
    { label: "Funil", href: "#funil" },
    { label: "Serviços", href: "#servicos" },
    { label: "Cases", href: "#cases" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleCTAClick = () => {
    const event = new CustomEvent('cta_sticky_click', { detail: { location: 'header' } });
    window.dispatchEvent(event);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-card" 
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img 
              src={isScrolled ? logoDomousBlack : logoDomousWhite} 
              alt="DOMOUS Business Performance" 
              className="h-8 md:h-10 transition-opacity"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-smooth ${
                  isScrolled 
                    ? 'text-foreground/80 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <CTAButton
              type="whatsapp"
              label="Fale com um estrategista"
              size="lg"
              className="hidden md:flex"
              showIcon={false}
              onClick={handleCTAClick}
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
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
              <CTAButton 
                type="whatsapp"
                label="Fale com um estrategista"
                className="mt-2"
                showIcon={false}
                onClick={() => {
                  handleCTAClick();
                  setIsMobileMenuOpen(false);
                }}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
