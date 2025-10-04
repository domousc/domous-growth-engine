import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Zap, MessageCircle } from "lucide-react";

const StickyROIRadar = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const hints: Record<string, { icon: any; message: string }> = {
    hero: {
      icon: Target,
      message: "Diagnóstico em 5 min pode desbloquear +30% de ROI"
    },
    cases: {
      icon: TrendingUp,
      message: "Cases reais: CAC –28%, ROAS 8.2x em 60 dias"
    },
    funil: {
      icon: Zap,
      message: "70% do vazamento está no meio do funil"
    },
    servicos: {
      icon: MessageCircle,
      message: "CRM/IA aumenta conversão em até 40%"
    },
    leak: {
      icon: TrendingUp,
      message: "Corrigir 1 etapa pode dobrar sua receita"
    },
    faq: {
      icon: Target,
      message: "Fidelidade transparente garante implantação e resultado"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "cases", "funil", "servicos", "leak", "faq"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            if (currentSection !== section) {
              setCurrentSection(section);
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ 
                event: 'roi_hint_view',
                roi_section: section
              });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const currentHint = hints[currentSection] || hints.hero;
  const Icon = currentHint.icon;

  return (
    <div className="fixed right-8 top-32 z-40 hidden xl:block">
      <Card className="w-72 p-4 border-2 border-primary/20 shadow-domous bg-card/95 backdrop-blur-sm animate-fade-in">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-primary mb-1">💡 ROI Radar</p>
            <p className="text-sm text-foreground">{currentHint.message}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StickyROIRadar;
