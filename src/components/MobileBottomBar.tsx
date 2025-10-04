import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileBottomBar = () => {
  const handleWhatsApp = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    const message = encodeURIComponent(`Quero diagnóstico Domous utm:${utmSource}/${utmCampaign}/${utmTerm}`);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'click_whatsapp', location: 'bottom_bar' });
    window.open(`https://wa.me/5583981195186?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'call_click', location: 'bottom_bar' });
    window.location.href = 'tel:+5583981195186';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border shadow-lg">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Button
          onClick={handleWhatsApp}
          className="gradient-domous text-white hover:opacity-90 h-12"
          size="lg"
        >
          <MessageCircle className="mr-2 w-5 h-5" />
          WhatsApp
        </Button>
        <Button
          onClick={handleCall}
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 h-12"
          size="lg"
        >
          <Phone className="mr-2 w-5 h-5" />
          Ligar
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
