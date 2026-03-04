import { useUTMParams } from "@/hooks/useUTMParams";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import LeadForm from "@/components/LeadForm";
import ClientsSection from "@/components/ClientsSection";
import DiferencialSection from "@/components/DiferencialSection";
import SistemaDomousSection from "@/components/SistemaDomousSection";
import MetodologiaDomousSection from "@/components/MetodologiaDomousSection";
import FunilSection from "@/components/FunilSection";
import ServicosSection from "@/components/ServicosSection";
import KairoLucasSection from "@/components/KairoLucasSection";
import TimeDomousSection from "@/components/TimeDomousSection";
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
import DiagnosticoSection from "@/components/DiagnosticoSection";
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
        <MetodologiaDomousSection />
        
        {/* Como trabalhamos */}
        <section id="como-trabalhamos" className="section-dark py-28 md:py-32 lg:py-40 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Processo Completo</span>
                </div>
                
                <h2 className="mb-6 text-dark-foreground">Como trabalhamos</h2>
                <p className="text-xl text-dark-muted">
                  Do onboarding até sua máquina de vendas funcionando no automático
                </p>
              </div>
              
              {/* Timeline unificada */}
              <div className="mb-12">
                <div className="relative">
                  {/* Linha conectora gradiente */}
                  <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-3">
                    {[
                      { 
                        label: "FASE 1", 
                        titulo: "Onboarding", 
                        duracao: "Semana 1",
                        desc: "Kickoff, análise completa e alinhamento",
                        emoji: "🚀"
                      },
                      { 
                        label: "FASE 2", 
                        titulo: "Setup Técnico", 
                        duracao: "Semana 2",
                        desc: "Tracking, pixels e integrações",
                        emoji: "⚙️"
                      },
                      { 
                        label: "FASE 3", 
                        titulo: "Estratégia", 
                        duracao: "Semana 3",
                        desc: "Campanhas, criativos e conteúdo",
                        emoji: "🎯"
                      },
                      { 
                        label: "FASE 4", 
                        titulo: "Lançamento", 
                        duracao: "Semana 4",
                        desc: "Campanhas no ar e primeiros testes",
                        emoji: "🚀"
                      },
                      { 
                        label: "FASE 5", 
                        titulo: "Performance", 
                        duracao: "Semana 5-8",
                        desc: "Otimização e escalada de resultados",
                        emoji: "⚡"
                      },
                      { 
                        label: "WEEK 12", 
                        titulo: "Consolidação", 
                        duracao: "Semana 9-12",
                        desc: "Resultados consistentes e previsíveis",
                        emoji: "🎯"
                      },
                      { 
                        label: "DIA 90", 
                        titulo: "Máquina", 
                        duracao: "Em diante",
                        desc: "Sistema rodando no automático",
                        emoji: "🏆"
                      }
                    ].map((etapa, idx) => (
                      <div key={idx} className="relative group">
                        <div className="flex flex-col items-center text-center">
                          {/* Círculo com gradiente e efeito hover */}
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-3 relative z-10 shadow-domous group-hover:scale-110 transition-smooth">
                            <span className="text-2xl">{etapa.emoji}</span>
                          </div>
                          
                          {/* Badge */}
                          <div className="inline-block px-2.5 py-1 bg-primary/20 rounded-full mb-2">
                            <p className="text-xs font-bold text-primary">{etapa.label}</p>
                          </div>
                          
                          {/* Conteúdo */}
                          <h3 className="text-sm font-bold text-dark-foreground mb-1 leading-tight">{etapa.titulo}</h3>
                          <p className="text-xs text-primary/80 mb-1.5 font-medium">{etapa.duracao}</p>
                          <p className="text-xs text-dark-muted leading-relaxed">{etapa.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
        <FunilSection />
        
        {/* Simulador CAC/ROAS removido - agora na seção de diagnóstico */}
        <ServicosSection />
        <KairoLucasSection />
        <TimeDomousSection />
        
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
        <DiagnosticoSection />
        <Primeiros30DiasSection />
        <ComparativoSection />
        <ChecklistSection />
        
        {/* Objection Arena */}
        <ObjectionArena />
        
        <FAQSection />
        <GarantiaSection />
        
        {/* Formulário de contato */}
        <section id="formulario" className="section-dark py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="mb-4 text-dark-foreground">Fale com um especialista</h2>
                <p className="text-lg text-dark-muted">Preencha e receba seu diagnóstico gratuito pelo WhatsApp</p>
              </div>
              <div className="card-dark rounded-2xl shadow-dark p-6 md:p-8 border">
                <LeadForm variant={variant} selectedIndustria={selectedIndustria} />
              </div>
            </div>
          </div>
        </section>
        
        <CTAFinalSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
