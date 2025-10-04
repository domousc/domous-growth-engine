import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Award } from "lucide-react";
import CTAMicrocopy from "./CTAMicrocopy";
import CTAButton from "./CTAButton";

const CTAFinalSection = () => {
  const trustBadges = [
    { icon: Award, text: "Fidelidade transparente" },
    { icon: Award, text: "Parceiros Google/Meta/Tray" },
    { icon: Award, text: "João Pessoa e Brasil" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">
            Sua call é com o estrategista por trás dos maiores resultados da Domous
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Não perca tempo com atendentes genéricos. Fale direto com quem vai executar sua estratégia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton 
              type="whatsapp"
              size="lg"
              className="text-lg h-16 px-10"
            />
            
            <CTAButton 
              type="custom"
              label="Agendar uma call"
              variant="outline"
              size="lg"
              customHref="#"
              className="border-2 border-primary text-primary hover:bg-primary/5 text-lg h-16 px-10"
              showIcon={false}
            />
          </div>

          <CTAMicrocopy />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
