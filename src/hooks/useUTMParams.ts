import { useState, useEffect } from "react";

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export type HeroVariant = "trafego-pago" | "loja-tray" | "crm-ia";

export const useUTMParams = (): { params: UTMParams; variant: HeroVariant } => {
  const [params, setParams] = useState<UTMParams>({});
  const [variant, setVariant] = useState<HeroVariant>("trafego-pago");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMParams = {
      utm_source: urlParams.get("utm_source") || undefined,
      utm_medium: urlParams.get("utm_medium") || undefined,
      utm_campaign: urlParams.get("utm_campaign") || undefined,
      utm_term: urlParams.get("utm_term") || undefined,
      utm_content: urlParams.get("utm_content") || undefined,
    };

    setParams(utmParams);

    // Determinar variante baseado em utm_term ou utm_campaign
    const term = utmParams.utm_term?.toLowerCase() || "";
    const campaign = utmParams.utm_campaign?.toLowerCase() || "";

    if (term.includes("loja") || term.includes("tray") || campaign.includes("tray")) {
      setVariant("loja-tray");
    } else if (term.includes("crm") || term.includes("whatsapp") || term.includes("ia")) {
      setVariant("crm-ia");
    } else {
      setVariant("trafego-pago");
    }
  }, []);

  return { params, variant };
};
