import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Megaphone } from "lucide-react";

const DiferencialSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Assessoria estratégica, não agência genérica</h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Tráfego sem marketing é pagar por clique. A Domous cuida do marketing inteiro: 
              <span className="text-primary font-semibold"> posicionamento → Social Media → Audiovisual → LP/Loja (Tray) → CRM/WhatsApp com IA → Mídia de performance.</span>
            </p>
          </div>

          {/* Bordões */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-smooth">
              <Target className="w-12 h-12 text-primary mb-4" />
              <p className="text-2xl font-bold">
                Funil primeiro.<br />Ads depois.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 border-2 border-accent/20 hover:border-accent/40 transition-smooth">
              <Megaphone className="w-12 h-12 text-accent mb-4" />
              <p className="text-2xl font-bold">
                Quem não pensa no jogo,<br />vira peça.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 text-lg h-14 px-8"
            >
              Quero o Sistema Domous no meu negócio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferencialSection;
