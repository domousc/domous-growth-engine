import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileBottomBar = () => {
  const handleWhatsApp = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    const message = encodeURIComponent(`Quero contratar a Domous utm:${utmSource}/${utmCampaign}/${utmTerm}`);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'click_whatsapp', location: 'bottom_bar' });
    window.open(`https://wa.me/5583981195186?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border shadow-lg">
      <div className="p-2">
        <Button
          onClick={handleWhatsApp}
          className="gradient-domous text-white hover:opacity-90 w-full h-10 text-sm"
        >
          <MessageCircle className="mr-1.5 w-4 h-4" />
          Contratar Agora
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
