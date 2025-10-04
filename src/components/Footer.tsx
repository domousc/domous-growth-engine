import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logoDomous from "@/assets/logo-domous-white.png";

const Footer = () => {
  const menuLinks = [
    { label: "Tráfego Pago", href: "#servicos" },
    { label: "Loja Tray", href: "#servicos" },
    { label: "CRM/IA", href: "#servicos" },
    { label: "Social & Vídeo", href: "#servicos" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Info */}
          <div className="lg:col-span-2">
            <img src={logoDomous} alt="DOMOUS" className="h-10 mb-6 invert" />
            <p className="text-background/80 mb-6 max-w-md">
              Assessoria estratégica de marketing que começa pelo funil, não pelo botão. 
              Transformamos negócios em máquinas de vendas.
            </p>
            
            {/* Contato */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>João Pessoa, PB</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+5583981195186" 
                  className="hover:text-primary transition-smooth"
                  onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: 'call_click' });
                  }}
                >
                  83 98119-5186
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@domous.br</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Seg - Sex: 9h às 18h</span>
              </div>
            </div>
          </div>

          {/* Menu Rápido */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/termos" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacidade" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
            
            <div className="mt-6 text-xs text-background/60">
              <p>CNPJ: 00.000.000/0001-00</p>
              <p className="mt-2">
                * Oferta de 1º mês por R$ 97 válida apenas para CRM com IA. 
                Sujeito a análise de compatibilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} DOMOUS Business Performance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
