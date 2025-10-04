import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTAMicrocopy from "./CTAMicrocopy";
import LeadForm from "./LeadForm";
import DiagnosticoExpress from "./DiagnosticoExpress";
import SimuladorCACROAS from "./SimuladorCACROAS";
import AnimatedCounter from "./AnimatedCounter";
import IndustriaSelector, { Industria } from "./IndustriaSelector";
import { HeroVariant } from "@/hooks/useUTMParams";
import heroImage from "@/assets/hero-3d-sphere.jpg";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  variant: HeroVariant;
  selectedIndustria?: Industria;
  onSelectIndustria?: (industria: Industria) => void;
}

const HeroSection = ({ variant, selectedIndustria = "todas", onSelectIndustria }: HeroSectionProps) => {
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

  // Mapeamento de sub-prova por indústria
  const industriaProva: Record<Industria, string> = {
    todas: "+10 mi em vendas • +50 empresas • +12k acompanhando",
    moda: "Ex.: loja com +18% AOV em 60 dias (Tray + CRM + Ads).",
    saude: "Ex.: 40 agendamentos nos 30 primeiros dias (Whats + Funis).",
    servicos: "Ex.: CPA −32% com oferta e CRM revisados.",
    alimentacao: "Ex.: ticket médio +22% com upsell e mídia local.",
    arquitetura: "Ex.: leads qualificados +55% com pré-brief no Whats.",
  };

  const content = {
    "trafego-pago": {
      keyword: "Agência de Tráfego Pago",
      h1: "que começa pelo funil, não pelo botão.",
      sub: "Se o lead tá caro, o problema não é o botão. É a estratégia, a oferta e o funil. A gente arruma isso — e só então escala mídia.",
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

            {/* Industry Selector */}
            {onSelectIndustria && (
              <div className="pt-2">
                <p className="text-sm font-medium mb-3">Escolha sua indústria:</p>
                <IndustriaSelector 
                  selectedIndustria={selectedIndustria}
                  onSelectIndustria={onSelectIndustria}
                />
              </div>
            )}

            {/* Proof Line - Dynamic by Industry */}
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <p className="text-sm font-semibold text-primary">
                {industriaProva[selectedIndustria]}
              </p>
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
              <a
                href="tel:+5583981195186"
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: 'call_click', location: 'hero' });
                }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary/5 text-lg h-14 px-8 w-full"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Ligar agora
                </Button>
              </a>
            </div>

            {/* Microcopy abaixo dos CTAs */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>✅ Diagnóstico em 5 min</span>
              <span>✅ Resposta em minutos</span>
              <span>✅ Fidelidade transparente</span>
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
            
            {/* Widget Tabs */}
            <Tabs defaultValue="dxp" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="dxp">Diagnóstico Express</TabsTrigger>
                <TabsTrigger value="sim">Simulador CAC/ROAS</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dxp">
                <DiagnosticoExpress />
              </TabsContent>
              
              <TabsContent value="sim">
                <SimuladorCACROAS />
              </TabsContent>
            </Tabs>
            
            {/* Form Principal */}
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Ou preencha o formulário completo</h3>
              <LeadForm variant={variant} selectedIndustria={selectedIndustria} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
