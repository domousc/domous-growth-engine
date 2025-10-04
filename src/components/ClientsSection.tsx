import clients1 from "@/assets/clients-1.png";
import clients2 from "@/assets/clients-2.png";
import { SiGoogle, SiMeta, SiShopify, SiAmazon } from "react-icons/si";

const ClientsSection = () => {
  const partners = [
    { name: "Tray", icon: "🛒" },
    { name: "Google Ads", Icon: SiGoogle },
    { name: "Meta", Icon: SiMeta },
    { name: "Bling", icon: "📊" },
    { name: "Amazon", Icon: SiAmazon },
    { name: "Shopify", Icon: SiShopify },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Empresas que confiam na Domous para escalar vendas</h2>
        </div>

        {/* Client Logos */}
        <div className="space-y-8 mb-16">
          <div className="flex justify-center">
            <img 
              src={clients1} 
              alt="Clientes Domous - Parte 1" 
              className="w-full max-w-5xl h-auto opacity-70 hover:opacity-100 transition-smooth"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src={clients2} 
              alt="Clientes Domous - Parte 2" 
              className="w-full max-w-5xl h-auto opacity-70 hover:opacity-100 transition-smooth"
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
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              {partner.Icon ? (
                <partner.Icon className="w-6 h-6" />
              ) : (
                <span className="text-2xl">{partner.icon}</span>
              )}
              <span className="font-medium">{partner.name}</span>
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
