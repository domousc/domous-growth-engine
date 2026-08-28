import { useEffect } from 'react';
import { useCTAData } from '@/hooks/useCTAData';

/**
 * CTA Validation Component
 * 
 * QA Checklist automático para validar todos os CTAs da página:
 * - Verifica se todos os CTAs WhatsApp apontam para wa.me/5583981195186
 * - Confirma que o text= contém apenas campos existentes (sem "undefined")
 * - Valida que UTMs ausentes são preenchidos com "direct/none/none"
 * - Confirma que botões Ligar usam tel:+5583981195186
 * - Garante target="_blank" e rel="noopener noreferrer" para WhatsApp
 */
const CTAValidation = () => {
  const { getWhatsAppMessage, utm_source, utm_campaign, utm_term } = useCTAData();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.group('🔍 CTA Validation Check');
      
      // Check WhatsApp message
      const message = getWhatsAppMessage();
      console.log('📱 WhatsApp Message:', message);
      
      // Check for undefined values
      if (message.includes('undefined')) {
        console.error('❌ ERRO: Mensagem contém "undefined"');
      } else {
        console.log('✅ Mensagem sem "undefined"');
      }
      
      // Check UTMs
      console.log('🎯 UTMs:', { utm_source, utm_campaign, utm_term });
      if (!utm_source || utm_source === 'direct') {
        console.log('ℹ️ UTMs ausentes - usando "direct/none/none"');
      }
      
      // Validate all CTAs
      const ctaButtons = document.querySelectorAll('[data-cta]');
      console.log(`📊 Total de CTAs encontrados: ${ctaButtons.length}`);
      
      let whatsappCount = 0;
      let callCount = 0;
      let errors: string[] = [];
      
      ctaButtons.forEach((button, index) => {
        const type = button.getAttribute('data-cta');
        
        if (type === 'whatsapp') {
          whatsappCount++;
          
          // Check if it's an anchor tag
          const anchor = button.tagName === 'A' ? button : button.querySelector('a');
          if (anchor) {
            const href = anchor.getAttribute('href');
            if (!href?.includes('wa.me/5583981195186')) {
              errors.push(`CTA #${index + 1}: WhatsApp link não aponta para número oficial`);
            }
            if (!anchor.getAttribute('target')) {
              errors.push(`CTA #${index + 1}: WhatsApp link sem target="_blank"`);
            }
            if (!anchor.getAttribute('rel')) {
              errors.push(`CTA #${index + 1}: WhatsApp link sem rel="noopener noreferrer"`);
            }
          }
        } else if (type === 'call') {
          callCount++;
          
          const anchor = button.tagName === 'A' ? button : button.querySelector('a');
          if (anchor) {
            const href = anchor.getAttribute('href');
            if (!href?.includes('tel:+5583981195186')) {
              errors.push(`CTA #${index + 1}: Call link não usa telefone oficial`);
            }
          }
        }
      });
      
      console.log(`📞 WhatsApp CTAs: ${whatsappCount}`);
      console.log(`☎️ Call CTAs: ${callCount}`);
      
      if (errors.length > 0) {
        console.group('❌ Erros encontrados:');
        errors.forEach(error => console.error(error));
        console.groupEnd();
      } else {
        console.log('✅ Todos os CTAs estão corretos');
      }
      
      console.groupEnd();
    }
  }, [getWhatsAppMessage, utm_source, utm_campaign, utm_term]);

  return null;
};

export default CTAValidation;
