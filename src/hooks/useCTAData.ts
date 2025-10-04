import { create } from 'zustand';
import type { Industria } from '@/components/IndustriaSelector';

interface CTAData {
  // Industry
  industry: Industria;
  
  // Diagnóstico Express
  dxp_objetivo: string;
  dxp_ticket: string;
  dxp_crm: string;
  dxp_prioridade: string;
  
  // Calculadora de Vazamento
  leak_stage: string;
  
  // Simulador CAC/ROAS
  sim_estimate: string;
  
  // UTM Parameters
  utm_source: string;
  utm_campaign: string;
  utm_term: string;
  
  // Page info
  page_title: string;
  current_url: string;
}

interface CTAStore extends CTAData {
  setIndustry: (industry: Industria) => void;
  setDXP: (objetivo: string, ticket: string, crm: string, prioridade: string) => void;
  setLeak: (stage: string) => void;
  setSimulator: (estimate: string) => void;
  setUTMs: (source: string, campaign: string, term: string) => void;
  updatePageInfo: () => void;
  getWhatsAppMessage: () => string;
  getWhatsAppURL: () => string;
}

const getUTMsFromURL = () => {
  if (typeof window === 'undefined') return { source: 'direct', campaign: 'none', term: 'none' };
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || 'direct',
    campaign: urlParams.get('utm_campaign') || 'none',
    term: urlParams.get('utm_term') || 'none',
  };
};

const getPageInfo = () => {
  if (typeof window === 'undefined') return { title: '', url: '' };
  
  return {
    title: document.title || 'Domous',
    url: window.location.href,
  };
};

export const useCTAData = create<CTAStore>((set, get) => {
  const utms = getUTMsFromURL();
  const pageInfo = getPageInfo();
  
  return {
    // Initial state
    industry: 'todas',
    dxp_objetivo: '',
    dxp_ticket: '',
    dxp_crm: '',
    dxp_prioridade: '',
    leak_stage: '',
    sim_estimate: '',
    utm_source: utms.source,
    utm_campaign: utms.campaign,
    utm_term: utms.term,
    page_title: pageInfo.title,
    current_url: pageInfo.url,
    
    // Actions
    setIndustry: (industry) => set({ industry }),
    
    setDXP: (objetivo, ticket, crm, prioridade) => 
      set({ dxp_objetivo: objetivo, dxp_ticket: ticket, dxp_crm: crm, dxp_prioridade: prioridade }),
    
    setLeak: (stage) => set({ leak_stage: stage }),
    
    setSimulator: (estimate) => set({ sim_estimate: estimate }),
    
    setUTMs: (source, campaign, term) => 
      set({ utm_source: source, utm_campaign: campaign, utm_term: term }),
    
    updatePageInfo: () => {
      const info = getPageInfo();
      set({ page_title: info.title, current_url: info.url });
    },
    
    // Generate WhatsApp message with only available fields
    getWhatsAppMessage: () => {
      const state = get();
      const parts: string[] = ['Quero diagnóstico Domous'];
      
      if (state.industry && state.industry !== 'todas') {
        parts.push(`indústria:${state.industry}`);
      }
      
      if (state.dxp_objetivo) {
        parts.push(`objetivo:${state.dxp_objetivo}`);
      }
      
      if (state.dxp_ticket) {
        parts.push(`ticket:${state.dxp_ticket}`);
      }
      
      if (state.dxp_crm) {
        parts.push(`CRM:${state.dxp_crm}`);
      }
      
      if (state.dxp_prioridade) {
        parts.push(`prioridade:${state.dxp_prioridade}`);
      }
      
      if (state.leak_stage) {
        parts.push(`vazamento:${state.leak_stage}`);
      }
      
      if (state.sim_estimate) {
        parts.push(`estimativa:${state.sim_estimate}`);
      }
      
      parts.push(`origem:${state.utm_source}/${state.utm_campaign}/${state.utm_term}`);
      
      if (state.page_title) {
        parts.push(`página:${state.page_title}`);
      }
      
      if (state.current_url) {
        parts.push(`url:${state.current_url}`);
      }
      
      return parts.join(' | ');
    },
    
    getWhatsAppURL: () => {
      const message = get().getWhatsAppMessage();
      return `https://wa.me/5583981195186?text=${encodeURIComponent(message)}`;
    },
  };
});
