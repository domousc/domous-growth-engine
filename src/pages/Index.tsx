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
    <div className="min-h-screen">
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
        <section id="como-trabalhamos" className="section-dark py-28 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-dark-foreground">Como trabalhamos</h2>
                <p className="text-xl text-dark-muted">
                  Veja em 90 segundos nosso processo completo do diagnóstico aos resultados
                </p>
              </div>
              <div className="relative mb-8">
                <img 
                  src={timelineOnboarding} 
                  alt="Timeline do onboarding com marcos por semana" 
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
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
