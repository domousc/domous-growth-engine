import { useUTMParams } from "@/hooks/useUTMParams";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import DiferencialSection from "@/components/DiferencialSection";
import SistemaDomousSection from "@/components/SistemaDomousSection";
import FunilSection from "@/components/FunilSection";
import ServicosSection from "@/components/ServicosSection";
import CasesSection from "@/components/CasesSection";
import DecisaoSection from "@/components/DecisaoSection";
import Primeiros30DiasSection from "@/components/Primeiros30DiasSection";
import ComparativoSection from "@/components/ComparativoSection";
import ChecklistSection from "@/components/ChecklistSection";
import FAQSection from "@/components/FAQSection";
import GarantiaSection from "@/components/GarantiaSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import GTMScript from "@/components/GTMScript";
import SimuladorCACROAS from "@/components/SimuladorCACROAS";
import VideoComoTrabalhamos from "@/components/VideoComoTrabalhamos";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import CookieBanner from "@/components/CookieBanner";
import DarkModeToggle from "@/components/DarkModeToggle";
import MobileBottomBar from "@/components/MobileBottomBar";
import CalculadoraVazamento from "@/components/CalculadoraVazamento";
import ObjectionArena from "@/components/ObjectionArena";
import CommandPalette from "@/components/CommandPalette";
import StickyROIRadar from "@/components/StickyROIRadar";
import WhatsAppSimulator from "@/components/WhatsAppSimulator";
import CTAValidation from "@/components/CTAValidation";
import timelineOnboarding from "@/assets/timeline-onboarding.webp";
import { useState, useEffect } from "react";
import type { Industria } from "@/components/IndustriaSelector";
import { useCTAData } from "@/hooks/useCTAData";

const Index = () => {
  const { variant } = useUTMParams();
  const [selectedIndustria, setSelectedIndustria] = useState<Industria>("todas");
  const [geotext, setGeotext] = useState("");
  const { setUTMs, updatePageInfo } = useCTAData();

  useEffect(() => {
    // Initialize UTMs from URL
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source') || 'direct';
    const campaign = urlParams.get('utm_campaign') || 'none';
    const term = urlParams.get('utm_term') || 'none';
    setUTMs(source, campaign, term);
    
    // Update page info
    updatePageInfo();
  }, [setUTMs, updatePageInfo]);

  useEffect(() => {
    // Geolocation detection (simplified - can use IP API for production)
    const checkGeolocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.region_code === "PB") {
          setGeotext("Atendemos João Pessoa e todo o Brasil");
        }
      } catch (error) {
        console.log("Geolocation check failed");
      }
    };
    
    checkGeolocation();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SchemaMarkup />
      <GTMScript />
      <ReadingProgressBar />
      <StickyROIRadar />
      <CommandPalette />
      <CTAValidation />
      <Header />
      <WhatsAppButton />
      <MobileBottomBar />
      <DarkModeToggle />
      <CookieBanner />
      
      <main>
        <HeroSection 
          variant={variant}
          selectedIndustria={selectedIndustria}
          onSelectIndustria={setSelectedIndustria}
        />
        <ClientsSection />
        {geotext && (
          <div className="py-4 bg-primary/5 text-center">
            <p className="text-sm font-medium text-primary">📍 {geotext}</p>
          </div>
        )}
        <DiferencialSection />
        <SistemaDomousSection />
        
        {/* Vídeo "Como trabalhamos" - Dark Section */}
        <section id="como-trabalhamos" className="section-dark py-28 md:py-32 lg:py-40 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Processo Completo</span>
                </div>
                
                <h2 className="mb-6 text-dark-foreground">Como trabalhamos</h2>
                <p className="text-xl text-dark-muted">
                  Veja em 90 segundos nosso processo completo do diagnóstico aos resultados
                </p>
              </div>
              
              {/* Timeline responsiva com design melhorado */}
              <div className="mb-12">
                <div className="relative">
                  {/* Linha conectora gradiente */}
                  <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary opacity-30" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {[
                      { semana: "WEEK 1", titulo: "Kickoff", desc: "Análise completa e definição de estratégia", emoji: "🚀" },
                      { semana: "WEEK 2", titulo: "Execução", desc: "Primeiros criativos e campanhas no ar", emoji: "⚡" },
                      { semana: "WEEK 4", titulo: "Otimização", desc: "Ajustes baseados em dados reais", emoji: "📊" },
                      { semana: "WEEK 8", titulo: "Escala", desc: "Aumento de budget e expansão", emoji: "📈" },
                      { semana: "WEEK 12", titulo: "Consolidação", desc: "Resultados consistentes", emoji: "🎯" },
                      { semana: "DIA 90", titulo: "Máquina", desc: "Sistema rodando sozinho", emoji: "🏆" }
                    ].map((marco, idx) => (
                      <div key={idx} className="relative group">
                        <div className="flex flex-col items-center text-center">
                          {/* Círculo com gradiente e efeito hover */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-3 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">{marco.emoji}</span>
                          </div>
                          
                          {/* Badge de semana */}
                          <div className="inline-block px-2 py-1 bg-primary/20 rounded-md mb-2">
                            <p className="text-xs font-bold text-primary">{marco.semana}</p>
                          </div>
                          
                          {/* Conteúdo */}
                          <p className="text-sm font-semibold text-dark-foreground mb-1">{marco.titulo}</p>
                          <p className="text-xs text-dark-muted leading-tight">{marco.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <VideoComoTrabalhamos />
            </div>
          </div>
        </section>
        
        {/* Calculadora de Vazamento */}
        <CalculadoraVazamento />
        
        <FunilSection />
        
        {/* Simulador CAC/ROAS */}
        <section className="py-28 md:py-32 lg:py-40 relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(hsl(280 85% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(280 85% 55% / 0.1) 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">Simule seus resultados</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ maxWidth: '65ch' }}>
                  Calcule estimativas de CAC, ROAS e próximas ações baseadas no seu cenário
                </p>
              </div>
              <SimuladorCACROAS />
            </div>
          </div>
        </section>
        <ServicosSection />
        
        {/* CRM com WhatsApp Simulator */}
        <section id="crm" className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">CRM com IA + WhatsApp</h2>
                <p className="text-xl text-muted-foreground">
                  Veja como a IA responde seus clientes 24/7 e aumenta conversão
                </p>
              </div>
              <WhatsAppSimulator />
            </div>
          </div>
        </section>
        
        <CasesSection 
          selectedIndustria={selectedIndustria}
          onSelectIndustria={setSelectedIndustria}
        />
        <DecisaoSection />
        <Primeiros30DiasSection />
        <ComparativoSection />
        <ChecklistSection />
        
        {/* Objection Arena */}
        <ObjectionArena />
        
        <FAQSection />
        <GarantiaSection />
        <CTAFinalSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
