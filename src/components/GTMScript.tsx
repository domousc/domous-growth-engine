import { useEffect } from "react";

const GTMScript = () => {
  useEffect(() => {
    // GTM Container ID - Placeholder para o dev trocar
    const GTM_CONTAINER_ID = "GTM-XXXXXXX"; // TROCAR PELO ID REAL

    // Google Tag Manager Script
    if (GTM_CONTAINER_ID !== "GTM-XXXXXXX") {
      (function(w: any, d: Document, s: string, l: string, i: string) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s) as HTMLScriptElement;
        const dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode?.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', GTM_CONTAINER_ID);
    }

    // Event listeners for custom events
    const handleLeadSubmit = (e: any) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'lead_submit',
        lead_type: e.detail?.variant || 'unknown',
        form_location: e.detail?.location || 'unknown'
      });
    };

    const handleWhatsAppClick = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'click_whatsapp',
        button_type: 'floating'
      });
    };

    const handleCallClick = (e: any) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'call_click',
        cta_location: e.detail?.location || 'unknown'
      });
    };

    const handleCTASticky = (e: any) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cta_sticky_click',
        cta_location: e.detail?.location || 'header'
      });
    };

    // Scroll tracking
    let scroll50Sent = false;
    let scroll90Sent = false;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 50 && !scroll50Sent) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'scroll_50' });
        scroll50Sent = true;
      }
      
      if (scrollPercentage >= 90 && !scroll90Sent) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'scroll_90' });
        scroll90Sent = true;
      }
    };

    window.addEventListener('lead_submit', handleLeadSubmit);
    window.addEventListener('click_whatsapp', handleWhatsAppClick);
    window.addEventListener('call_click', handleCallClick);
    window.addEventListener('cta_sticky_click', handleCTASticky);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('lead_submit', handleLeadSubmit);
      window.removeEventListener('click_whatsapp', handleWhatsAppClick);
      window.removeEventListener('call_click', handleCallClick);
      window.removeEventListener('cta_sticky_click', handleCTASticky);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

// Extend window type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default GTMScript;
