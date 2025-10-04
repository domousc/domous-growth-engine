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
import heroPipelineDesktop from "@/assets/hero-pipeline-desktop.webp";
import heroPipelineMobile from "@/assets/hero-pipeline-mobile.webp";
import bgCurvesCorner from "@/assets/bg-curves-corner.webp";
import clientesGrid from "@/assets/clientes-grid.png";
import CTAButton from "./CTAButton";
import { useEffect, useRef, useState } from "react";
import { useCTAData } from "@/hooks/useCTAData";

interface HeroSectionProps {
  variant: HeroVariant;
  selectedIndustria?: Industria;
  onSelectIndustria?: (industria: Industria) => void;
}

const HeroSection = ({ variant, selectedIndustria = "todas", onSelectIndustria }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const { setIndustry, updatePageInfo } = useCTAData();

  // Update industry in global store
  useEffect(() => {
    setIndustry(selectedIndustria);
  }, [selectedIndustria, setIndustry]);

  // Update page info on mount
  useEffect(() => {
    updatePageInfo();
  }, [updatePageInfo]);

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

  return (
    <section id="hero" className="section-dark pt-32 pb-28 md:pb-32 lg:pb-40 relative overflow-hidden purple-glow">
      {/* Decorative corner curves - hidden on mobile */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none hidden md:block">
        <img src={bgCurvesCorner} alt="Linhas curvas decorativas em roxo" className="w-full h-full object-contain" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                <span className="text-dark-foreground">{h1}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-dark-muted max-w-2xl">
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
            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
              <p className="text-sm font-semibold text-primary">
                {industriaProva[selectedIndustria]}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton 
                type="whatsapp"
                size="lg"
                className="text-lg h-14 px-8"
              />
              
              <CTAButton 
                type="whatsapp"
                label="Contratar a Domous"
                variant="outline"
                size="lg"
                className="border-2 border-primary/50 bg-white text-foreground hover:bg-primary/10 text-lg h-14 px-8"
                showIcon={false}
              />
            </div>

            {/* Microcopy abaixo dos CTAs */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-muted">
              <span>✅ Diagnóstico em 5 min</span>
              <span>✅ Resposta em minutos</span>
              <span>✅ Fidelidade transparente</span>
            </div>

            <CTAMicrocopy />
            
            {/* Clientes Grid */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-dark-muted mb-4 text-center">Alguns de nossos clientes:</p>
              <img 
                src={clientesGrid} 
                alt="Logos de clientes Domous" 
                className="w-full max-w-md mx-auto opacity-70"
              />
            </div>
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
              <picture>
                <source media="(max-width: 768px)" srcSet={heroPipelineMobile} />
                <img 
                  src={heroPipelineDesktop} 
                  alt="Representação minimalista do funil: tráfego, landing page, Whats/CRM e venda" 
                  className="w-full h-auto rounded-3xl hidden md:block"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
              
              {/* Mobile image */}
              <img 
                src={heroPipelineMobile}
                alt="Representação minimalista do funil: tráfego, landing page, Whats/CRM e venda" 
                className="w-full h-auto rounded-3xl md:hidden"
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
            <div className="card-dark rounded-2xl shadow-dark p-6 md:p-8 border">
              <h3 className="text-2xl font-bold mb-6 text-dark-foreground">Ou preencha o formulário completo</h3>
              <LeadForm variant={variant} selectedIndustria={selectedIndustria} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
