import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import CTAMicrocopy from "./CTAMicrocopy";
import LeadForm from "./LeadForm";
import DiagnosticoExpress from "./DiagnosticoExpress";
import AnimatedCounter from "./AnimatedCounter";
import { HeroVariant } from "@/hooks/useUTMParams";
import heroImage from "@/assets/hero-3d-sphere.jpg";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  variant: HeroVariant;
}

const HeroSection = ({ variant }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

            {/* Proof Line with Animated Counters */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span><AnimatedCounter end={10} prefix="+" suffix=" milhões em vendas" /></span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span><AnimatedCounter end={50} prefix="+" suffix=" empresas" /></span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span><AnimatedCounter end={12} prefix="+" suffix="k acompanhando" /></span>
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

          {/* Right: Image + Forms */}
          <div className="space-y-6 animate-fade-in">
            <div 
              ref={imageRef}
              className="relative"
              style={{ 
                transform: `translateY(${scrollY * 0.02}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src={heroImage} 
                alt="Domous 3D Visual" 
                className="w-full h-auto rounded-3xl shadow-domous"
                loading="eager"
              />
            </div>
            
            {/* Diagnóstico Express */}
            <DiagnosticoExpress />
            
            {/* Form Principal */}
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Ou preencha o formulário completo</h3>
              <LeadForm variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
