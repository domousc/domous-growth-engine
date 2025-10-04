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

const Index = () => {
  const { variant } = useUTMParams();

  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <GTMScript />
      <Header />
      <WhatsAppButton />
      
      <main>
        <HeroSection variant={variant} />
        <ClientsSection />
        <DiferencialSection />
        <SistemaDomousSection />
        <FunilSection />
        <ServicosSection />
        <CasesSection />
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
