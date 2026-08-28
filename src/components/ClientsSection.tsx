import logoEletropolo from "@/assets/logo-eletropolo.png";
import logoRutra from "@/assets/logo-rutra.png";
import logoVerona from "@/assets/logo-verona.png";
import logoNordife from "@/assets/logo-nordife.png";
import logoBethaniaLuna from "@/assets/logo-bethania-luna.png";
import logoInstitutoK from "@/assets/logo-instituto-k.png";
import logoOdontogalerie from "@/assets/logo-odontogalerie.png";
import logoNattaneLucena from "@/assets/logo-nattane-lucena.png";
import logoArteMusical from "@/assets/logo-arte-musical.png";
import logoCasatudo from "@/assets/logo-casatudo.png";
import logoBlcMotors from "@/assets/logo-blc-motors.png";
import logoItem3 from "@/assets/logo-item3.png";
import logoNataliaFernandes from "@/assets/logo-natalia-fernandes.png";
import logoManaPoke from "@/assets/logo-mana-poke.png";
import logoBotoHarmony from "@/assets/logo-boto-harmony.png";
import logoRenoveCasa from "@/assets/logo-renove-casa.png";
import logoKallas from "@/assets/logo-kallas.png";
import logoDomousCRM from "@/assets/logo-domous-crm.png";
import logoTray from "@/assets/logo-tray.svg";
import logoBling from "@/assets/logo-bling.svg";
import { SiGoogle, SiMeta } from "react-icons/si";

const ClientsSection = () => {
  const clients = [
    { name: "Eletropolo", image: logoEletropolo },
    { name: "Rutra", image: logoRutra },
    { name: "Verona", image: logoVerona },
    { name: "Nordife", image: logoNordife },
    { name: "Clínica Bethânia Luna", image: logoBethaniaLuna },
    { name: "Instituto K", image: logoInstitutoK },
    { name: "Odontogalerie", image: logoOdontogalerie },
    { name: "Nattane Lucena", image: logoNattaneLucena },
    { name: "Arte Musical", image: logoArteMusical },
    { name: "Casatudo", image: logoCasatudo },
    { name: "BLC Motors", image: logoBlcMotors },
    { name: "Item 3", image: logoItem3 },
    { name: "Dra. Natália Fernandes", image: logoNataliaFernandes },
    { name: "Mana Poke", image: logoManaPoke },
    { name: "botoHarmony", image: logoBotoHarmony },
    { name: "Renove Casa", image: logoRenoveCasa },
    { name: "Kallas Mídia OOH", image: logoKallas },
  ];


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
          <h2 className="mb-4">Empresas que atendemos</h2>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-24 px-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-smooth"
              >
                <span
                  role="img"
                  aria-label={client.name}
                  title={client.name}
                  className="block w-full h-10 bg-foreground opacity-70 hover:opacity-100 transition-smooth"
                  style={{
                    maskImage: `url(${client.image})`,
                    WebkitMaskImage: `url(${client.image})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>
            ))}
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
