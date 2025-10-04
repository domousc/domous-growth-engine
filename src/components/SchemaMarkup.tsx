import { useEffect } from "react";

const SchemaMarkup = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DOMOUS Business Performance",
      "url": "https://domous.br",
      "logo": "https://domous.br/logo-domous.png",
      "description": "Assessoria estratégica de marketing que começa pelo funil, não pelo botão. Tráfego Pago, Loja Tray, CRM com IA.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "João Pessoa",
        "addressRegion": "PB",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-83-9999-9999",
        "contactType": "Customer Service",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://www.instagram.com/domous.br",
        "https://www.linkedin.com/company/domous"
      ]
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DOMOUS Business Performance",
      "image": "https://domous.br/logo-domous.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "João Pessoa",
        "addressRegion": "PB",
        "postalCode": "58000-000",
        "addressCountry": "BR"
      },
      "telephone": "+55-83-9999-9999",
      "url": "https://domous.br",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Marketing Digital e Performance",
      "provider": {
        "@type": "Organization",
        "name": "DOMOUS Business Performance"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços DOMOUS",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tráfego Pago"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Implantação de Loja Virtual (Tray)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM com IA + WhatsApp"
            }
          }
        ]
      }
    };

    // Inject schemas
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
};

export default SchemaMarkup;
