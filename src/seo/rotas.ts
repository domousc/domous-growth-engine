// Título, descrição e dados estruturados (schema.org) de cada endereço do site.
// O script de pré-renderização (scripts/prerender.mjs) usa esta lista pra gerar
// o HTML de cada página e o sitemap. Página nova = entrada nova aqui.
import { site } from "@/data/site";
import { servicos, type Pagina } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import { guia, home, indices, quantoCusta, resultadosPagina, sobre } from "@/data/paginas";

export type Rota = {
  path: string;
  titulo: string;
  descricao: string;
  jsonLd: Record<string, unknown>[];
  noindex?: boolean;
};

const ORG_ID = `${site.url}/#organizacao`;
const KAIRO_ID = `${site.url}/sobre/#kairo-lucas`;
const url = (path: string) => site.url + path;

const organizacao = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Domous",
  alternateName: ["Domous Business Performance", "Domous Agência de Tráfego Pago"],
  slogan: "Business Performance",
  description: site.descricao,
  url: site.url,
  logo: `${site.url}/logo-domous.png`,
  image: `${site.url}/og-domous.jpg`,
  telephone: site.telefoneE164,
  email: site.email,
  taxID: site.cnpj,
  address: {
    "@type": "PostalAddress",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  areaServed: site.areaAtendida.map((nome) =>
    nome === "Brasil" ? { "@type": "Country", name: nome } : nome === "Paraíba" ? { "@type": "State", name: nome } : { "@type": "City", name: nome },
  ),
  founder: { "@id": KAIRO_ID },
  knowsAbout: [
    "Tráfego pago",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Performance Max",
    "E-commerce",
    "Tray",
    "Shopify",
    "CRM",
    "Inteligência artificial no WhatsApp",
    "Landing page",
    "Funil de vendas",
  ],
  sameAs: [site.instagram, site.siteKairo],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.telefoneE164,
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#site`,
  url: site.url,
  name: "Domous",
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

const kairoLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": KAIRO_ID,
  name: "Kairo Lucas",
  jobTitle: "Fundador e CEO",
  worksFor: { "@id": ORG_ID },
  image: `${site.url}/kairo-lucas.jpg`,
  homeLocation: { "@type": "City", name: "João Pessoa" },
  sameAs: [site.instagramKairo, site.siteKairo],
};

const faqLd = (faq: { p: string; r: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
});

const trilhaLd = (itens: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: itens.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(path) })),
});

const servicoLd = (p: Pagina, path: string, tipo: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url(path)}#servico`,
  name: p.h1,
  serviceType: tipo,
  description: p.resposta,
  url: url(path),
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "City", name: "João Pessoa" }, { "@type": "Country", name: "Brasil" }],
});

const comFaq = (faq: { p: string; r: string }[]) => (faq.length ? [faqLd(faq)] : []);

export const rotas: Rota[] = [
  {
    path: "/",
    titulo: home.titulo,
    descricao: home.descricao,
    jsonLd: [organizacao, websiteLd, kairoLd, faqLd(home.faq)],
  },
  ...(["servicos", "segmentos"] as const).map((tipo) => ({
    path: `/${tipo}/`,
    titulo: indices[tipo].titulo,
    descricao: indices[tipo].descricao,
    jsonLd: [organizacao, trilhaLd([["Início", "/"], [tipo === "servicos" ? "Serviços" : "Segmentos", `/${tipo}/`]])],
  })),
  ...servicos.map((p) => {
    const path = `/servicos/${p.slug}/`;
    return {
      path,
      titulo: p.titulo,
      descricao: p.descricao,
      jsonLd: [organizacao, servicoLd(p, path, p.nome), trilhaLd([["Início", "/"], ["Serviços", "/servicos/"], [p.nome, path]]), ...comFaq(p.faq)],
    };
  }),
  ...segmentos.map((p) => {
    const path = `/segmentos/${p.slug}/`;
    return {
      path,
      titulo: p.titulo,
      descricao: p.descricao,
      jsonLd: [
        organizacao,
        servicoLd(p, path, `Tráfego pago e marketing para ${p.nome.toLowerCase()}`),
        trilhaLd([["Início", "/"], ["Segmentos", "/segmentos/"], [p.nome, path]]),
        ...comFaq(p.faq),
      ],
    };
  }),
  {
    path: "/quanto-custa/",
    titulo: quantoCusta.titulo,
    descricao: quantoCusta.descricao,
    jsonLd: [organizacao, trilhaLd([["Início", "/"], ["Quanto custa", "/quanto-custa/"]]), faqLd(quantoCusta.faq)],
  },
  {
    path: "/cases/",
    titulo: resultadosPagina.titulo,
    descricao: resultadosPagina.descricao,
    jsonLd: [organizacao, trilhaLd([["Início", "/"], ["Resultados", "/cases/"]])],
  },
  {
    path: "/sobre/",
    titulo: sobre.titulo,
    descricao: sobre.descricao,
    jsonLd: [
      organizacao,
      kairoLd,
      { "@context": "https://schema.org", "@type": "AboutPage", url: url("/sobre/"), about: { "@id": ORG_ID } },
      trilhaLd([["Início", "/"], ["Sobre", "/sobre/"]]),
    ],
  },
  {
    path: "/como-escolher-agencia-de-trafego-pago/",
    titulo: guia.titulo,
    descricao: guia.descricao,
    jsonLd: [
      organizacao,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guia.h1,
        description: guia.descricao,
        inLanguage: "pt-BR",
        author: { "@id": KAIRO_ID },
        publisher: { "@id": ORG_ID },
        datePublished: "2026-10-26",
        dateModified: "2026-10-26",
        mainEntityOfPage: url("/como-escolher-agencia-de-trafego-pago/"),
      },
      trilhaLd([["Início", "/"], ["Como escolher uma agência de tráfego pago", "/como-escolher-agencia-de-trafego-pago/"]]),
    ],
  },
];

export const rota404: Rota = {
  path: "/404",
  titulo: "Página não encontrada | Domous",
  descricao: "Essa página não existe. Veja os serviços da Domous, agência de tráfego pago em João Pessoa.",
  jsonLd: [],
  noindex: true,
};

export const rotaPorPath = (path: string) => {
  const comBarra = path.endsWith("/") ? path : path + "/";
  return rotas.find((r) => r.path === comBarra) ?? rota404;
};
