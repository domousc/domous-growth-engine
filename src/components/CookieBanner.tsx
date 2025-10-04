import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("domous_cookies_accepted");
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("domous_cookies_accepted", "true");
    setShowBanner(false);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_granted' });
  };

  const handleReject = () => {
    localStorage.setItem("domous_cookies_accepted", "false");
    setShowBanner(false);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_denied' });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t-2 border-primary/20 shadow-domous animate-slide-in">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. 
              Ao continuar navegando, você concorda com nossa{" "}
              <a href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="border-border"
            >
              Rejeitar
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="gradient-domous text-white hover:opacity-90"
            >
              Aceitar
            </Button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-2 right-2 md:relative md:top-auto md:right-auto p-1 hover:bg-secondary rounded-full transition-smooth"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
