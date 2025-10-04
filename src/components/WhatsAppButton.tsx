import { MessageCircle } from "lucide-react";
import { useCTAData } from "@/hooks/useCTAData";

const WhatsAppButton = () => {
  const { getWhatsAppURL, industry } = useCTAData();

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'click_whatsapp',
      cta_label: 'WhatsApp Floating Button',
      industry: industry
    });
    
    window.open(getWhatsAppURL(), "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full gradient-domous text-white shadow-domous hover:scale-110 transition-smooth flex items-center justify-center animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
};

export default WhatsAppButton;
