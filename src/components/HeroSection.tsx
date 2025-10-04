import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import CTAMicrocopy from "./CTAMicrocopy";
import LeadForm from "./LeadForm";
import { HeroVariant } from "@/hooks/useUTMParams";
import heroImage from "@/assets/hero-3d-sphere.jpg";

interface HeroSectionProps {
  variant: HeroVariant;
}

const HeroSection = ({ variant }: HeroSectionProps) => {
  const content = {
    "trafego-pago": {
      keyword: "Agência de Tráfego Pago",
      h1: "que começa pelo funil, não pelo botão.",
      sub: "Ajustamos estratégia, oferta e funil para seu negócio vender — aí sim escalamos mídia.",
      badge: null,
    },
    "loja-tray": {
      keyword: "Implantação de Loja (Tray)",
      h1: "pronta para vender — do zero ao primeiro pedido.",
      sub: "Integrações, UX de conversão, frete e pagamentos. Lançamos com mídia e automações para vender no dia 1.",
      badge: null,
    },
    "crm-ia": {
      keyword: "CRM no WhatsApp com IA",
      h1: "para captar, atender e fechar no automático.",
      sub: "Funis conversacionais, disparos inteligentes e agente de IA 24/7. Pare de perder lead por falta de follow-up.",
      badge: "1º mês por R$ 97*",
    },
  };

  const { keyword, h1, sub, badge } = content[variant];

  const handleCTAClick = (type: string) => {
    const event = new CustomEvent(type === 'primary' ? 'lead_submit' : 'call_click', { 
      detail: { location: 'hero', variant } 
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            {badge && (
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                  ✨ {badge}
                </span>
              </div>
            )}
            
            <div className="space-y-4">
              <h1 className="leading-tight">
                <span className="gradient-domous-text">{keyword}</span>
                <br />
                <span className="text-foreground">{h1}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                {sub}
              </p>
            </div>

            {/* Proof Line */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span>+10 milhões em vendas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>+50 empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>+12k acompanhando</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
                onClick={() => handleCTAClick('primary')}
              >
                Receber diagnóstico no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/5 text-lg h-14 px-8"
                onClick={() => handleCTAClick('secondary')}
              >
                Agendar uma call
              </Button>
            </div>

            <CTAMicrocopy />
          </div>

          {/* Right: Form + Image */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Domous 3D Visual" 
                className="w-full h-auto rounded-3xl shadow-domous"
                loading="eager"
              />
            </div>
            
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Diagnóstico gratuito em 5 minutos</h3>
              <LeadForm variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
