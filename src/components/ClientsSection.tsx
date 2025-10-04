import clients1 from "@/assets/clients-1.png";
import clients2 from "@/assets/clients-2.png";
import logoDomousCRM from "@/assets/logo-domous-crm.png";
import logoTray from "@/assets/logo-tray.svg";
import logoBling from "@/assets/logo-bling.svg";
import { SiGoogle, SiMeta } from "react-icons/si";

const ClientsSection = () => {
  const partners = [
    { name: "Domous CRM", image: logoDomousCRM, height: "h-10" },
    { name: "Tray E-commerce", image: logoTray, height: "h-8", invert: true },
    { name: "Google Ads", Icon: SiGoogle },
    { name: "Meta Ads", Icon: SiMeta },
    { name: "Bling ERP", image: logoBling, height: "h-7" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Empresas que confiam na Domous para escalar vendas</h2>
        </div>

        {/* Client Logos - Reduzido */}
        <div className="space-y-6 mb-16">
          <div className="flex justify-center">
            <img 
              src={clients1} 
              alt="Clientes Domous - Parte 1" 
              className="w-full max-w-2xl h-auto opacity-60 hover:opacity-90 transition-smooth"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src={clients2} 
              alt="Clientes Domous - Parte 2" 
              className="w-full max-w-2xl h-auto opacity-60 hover:opacity-90 transition-smooth"
              loading="lazy"
            />
          </div>
        </div>

        {/* Partners/Integrations */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-muted-foreground">Parceiros e Integrações</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center hover:opacity-100 transition-smooth opacity-70"
            >
              {partner.image ? (
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className={`${partner.height || 'h-8'} w-auto ${partner.invert ? 'invert' : ''}`}
                />
              ) : partner.Icon ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <partner.Icon className="w-6 h-6" />
                  <span className="font-medium">{partner.name}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Legal Note */}
        <p className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto">
          * Resultados variam por nicho, oferta e execução. Os cases apresentados refletem resultados reais de clientes específicos.
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
