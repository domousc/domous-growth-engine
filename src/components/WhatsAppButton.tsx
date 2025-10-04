import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Quero diagnóstico Domous");
    const phoneNumber = "5583999999999"; // Placeholder - substituir pelo número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    
    const event = new CustomEvent('click_whatsapp');
    window.dispatchEvent(event);
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
