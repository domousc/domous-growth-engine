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

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quando vejo os primeiros sinais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre semanas 2–4, dependendo do seu ciclo de venda. Negócios com ticket baixo e ciclo curto podem ver resultados já na primeira semana."
          }
        },
        {
          "@type": "Question",
          "name": "Atendem só em João Pessoa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não! Atendemos Brasil inteiro de forma 100% remota. Nossa equipe já trabalhou com clientes em mais de 15 estados."
          }
        },
        {
          "@type": "Question",
          "name": "Fazem 'só tráfego'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não fazemos 'só tráfego'. Fazemos marketing que vende. Tráfego é uma tática dentro do Sistema Domous."
          }
        }
      ]
    };

    const script4 = document.createElement('script');
    script4.type = 'application/ld+json';
    script4.text = JSON.stringify(faqSchema);
    document.head.appendChild(script4);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
    };
  }, []);

  return null;
};

export default SchemaMarkup;
