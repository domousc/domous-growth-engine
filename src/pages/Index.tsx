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
import { useState, useEffect } from "react";
import type { Industria } from "@/components/IndustriaSelector";

const Index = () => {
  const { variant } = useUTMParams();
  const [selectedIndustria, setSelectedIndustria] = useState<Industria>("todas");
  const [geotext, setGeotext] = useState("");

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
      <Header />
      <WhatsAppButton />
      <DarkModeToggle />
      <CookieBanner />
      
      <main>
        <HeroSection variant={variant} />
        <ClientsSection />
        {geotext && (
          <div className="py-4 bg-primary/5 text-center">
            <p className="text-sm font-medium text-primary">📍 {geotext}</p>
          </div>
        )}
        <DiferencialSection />
        <SistemaDomousSection />
        
        {/* Vídeo "Como trabalhamos" */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">Como trabalhamos</h2>
                <p className="text-xl text-muted-foreground">
                  Veja em 90 segundos nosso processo completo do diagnóstico aos resultados
                </p>
              </div>
              <VideoComoTrabalhamos />
            </div>
          </div>
        </section>
        
        <FunilSection />
        
        {/* Simulador CAC/ROAS */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-6">Simule seus resultados</h2>
                <p className="text-xl text-muted-foreground">
                  Calcule estimativas de CAC, ROAS e próximas ações baseadas no seu cenário
                </p>
              </div>
              <SimuladorCACROAS />
            </div>
          </div>
        </section>
        <ServicosSection />
        <CasesSection 
          selectedIndustria={selectedIndustria}
          onSelectIndustria={setSelectedIndustria}
        />
        <DecisaoSection />
        <Primeiros30DiasSection />
        <ComparativoSection />
        <ChecklistSection />
        <FAQSection />
        <GarantiaSection />
        <CTAFinalSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
