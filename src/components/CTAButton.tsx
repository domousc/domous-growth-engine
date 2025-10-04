import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useCTAData } from "@/hooks/useCTAData";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  type: 'whatsapp' | 'call' | 'custom';
  label?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
  customHref?: string;
  customMessage?: string;
  onClick?: () => void;
}

const CTAButton = ({ 
  type, 
  label, 
  variant = 'default', 
  size = 'default',
  className = '',
  showIcon = true,
  customHref,
  customMessage,
  onClick
}: CTAButtonProps) => {
  const { getWhatsAppURL, getWhatsAppMessage, industry } = useCTAData();
  
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    const buttonText = label || 'CTA';
    
    if (type === 'whatsapp') {
      e.preventDefault();
      
      // Track event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'click_whatsapp', 
        cta_label: buttonText,
        industry: industry 
      });
      
      // Build URL
      let url = getWhatsAppURL();
      if (customMessage) {
        url = `https://wa.me/5583981195186?text=${encodeURIComponent(customMessage)}`;
      }
      
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (type === 'call') {
      // Track event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'call_click', 
        cta_label: buttonText 
      });
      
      window.location.href = 'tel:+5583981195186';
    } else if (type === 'custom' && customHref) {
      if (customHref.startsWith('http')) {
        e.preventDefault();
        window.open(customHref, '_blank', 'noopener,noreferrer');
      }
    }
  };
  
  const getIcon = () => {
    if (!showIcon) return null;
    
    switch (type) {
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5" />;
      case 'call':
        return <Phone className="w-5 h-5" />;
      default:
        return <ArrowRight className="w-5 h-5" />;
    }
  };
  
  const getDefaultLabel = () => {
    switch (type) {
      case 'whatsapp':
        return 'Receber diagnóstico no WhatsApp';
      case 'call':
        return 'Ligar agora';
      default:
        return 'Saiba mais';
    }
  };
  
  const getHref = () => {
    switch (type) {
      case 'whatsapp':
        return '#';
      case 'call':
        return 'tel:+5583981195186';
      case 'custom':
        return customHref || '#';
      default:
        return '#';
    }
  };
  
  const buttonClasses = cn(
    type === 'whatsapp' && variant === 'default' && 'gradient-domous text-white hover:opacity-90 shadow-domous',
    type === 'call' && variant === 'outline' && 'border-2 border-primary/50 bg-primary/10 text-primary hover:bg-primary/20',
    className
  );
  
  const icon = getIcon();
  const displayLabel = label || getDefaultLabel();
  
  return (
    <Button
      variant={variant}
      size={size}
      className={buttonClasses}
      onClick={handleClick}
      asChild={type === 'call'}
      data-cta={type}
    >
      {type === 'call' ? (
        <a href={getHref()}>
          {icon && <span className="mr-2">{icon}</span>}
          {displayLabel}
        </a>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {displayLabel}
        </>
      )}
    </Button>
  );
};

export default CTAButton;
