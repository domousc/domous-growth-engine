import CTAButton from "./CTAButton";

const KairoLucasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-bold text-primary">Founder</span>
            </div>
            
            <h2 className="mb-4">Sobre Kairo Lucas — Funil Primeiro. Ads Depois.</h2>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                Empreendedor desde os 17, Kairo saiu de casa cedo, vendeu nos EUA, quebrou e aprendeu a recomeçar. 
                No Brasil, mergulhou em e-commerce, passou pela Way, rompeu por gestão ineficiente e fundou a <strong>Domous</strong> para 
                fazer o óbvio que quase ninguém faz: <strong>vender</strong>.
              </p>
              
              <p className="text-foreground leading-relaxed mb-4">
                Hoje soma dezenas de cases, <strong>+50 empresas atendidas</strong> e <strong>milhões geridos em mídia</strong>. 
                A tese é simples: oferta antes de anúncio, CRM com SLAs, dados que guiam CAC, LTV e ROMI, e velocidade 
                de atendimento para não deixar dinheiro na mesa.
              </p>
              
              <p className="text-foreground leading-relaxed">
                <strong>Visão:</strong> transformar a Domous em ecossistema de crescimento (OS, CRM e IA) com previsibilidade de caixa.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton 
              type="whatsapp"
              label="Conheça a Metodologia Domous"
              size="lg"
              className="text-lg h-14 px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KairoLucasSection;
