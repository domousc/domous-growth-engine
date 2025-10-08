import { CheckCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";

const MetodologiaDomousSection = () => {
  const bullets = [
    "Oferta que vende: ângulos, provas e garantias que aumentam ticket e conversão.",
    "Funil ponta a ponta: topo, meio, fundo e pós-venda operando como um sistema.",
    "CRM que fecha: playbooks, SLAs e automações de retomada para não perder dinheiro na mesa.",
    "Decisão por dados: sprints quinzenais com hipóteses, corte do que não performa e escala do que imprime ROI."
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-bold text-primary">Metodologia Domous</span>
            </div>
            
            <h2 className="mb-4">Funil Primeiro. Ads Depois.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Na Domous, a régua é caixa: vendas, margem e CAC controlado. "Conversa iniciada" não é etapa de funil, é ruído.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card mb-8">
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-foreground mb-6">
              ROI nasce de sistema, não de sorte. Se é crescimento que você quer, começa aqui.
            </p>
            
            <CTAButton 
              type="whatsapp"
              label="Quero esse sistema no meu negócio"
              size="lg"
              className="text-lg h-14 px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaDomousSection;
