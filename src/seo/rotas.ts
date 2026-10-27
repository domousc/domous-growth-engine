// Título, descrição e dados estruturados (schema.org) de cada endereço do site.
// O script de pré-renderização (scripts/prerender.mjs) usa esta lista pra gerar
// o HTML de cada página e o sitemap. Página nova = entrada nova aqui.
import { site } from "@/data/site";
import { categorias, servicos, type Pagina } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";
import { autor, guia, home, indices, quantoCusta, resultadosPagina, sobre } from "@/data/paginas";
import { posts } from "@/content/posts";
import { caminhoPost, ehNoticia } from "@/content/tipos";

export type Rota = {
  path: string;
  titulo: string;
  descricao: string;
  jsonLd: Record<string, unknown>[];
  noindex?: boolean;
  imagem?: string;
};

const ORG_ID = `${site.url}/#organizacao`;
const KAIRO_ID = `${site.url}/sobre/kairo-lucas/#pessoa`;
const url = (path: string) => site.url + path;

const organizacao = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Domous",
  alternateName: ["Domous Business Performance", "Domous - Agência Marketing e Tráfego Pago"],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços da Domous",
    itemListElement: categorias.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat,
      itemListElement: servicos
        .filter((s) => s.categoria === cat)
        .map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.nome, url: `${site.url}/servicos/${s.slug}/` } })),
    })),
  },
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
    "Domous Dash",
  ],
  sameAs: [site.instagram, site.linkedin, site.siteKairo, site.entidadeGoogle, site.perfilGoogle],
  hasMap: site.perfilGoogle,
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
  url: `${site.url}/sobre/kairo-lucas/`,
  jobTitle: "Fundador e CEO",
  description: "Fundador e CEO da Domous, agência de tráfego pago e growth de João Pessoa.",
  knowsAbout: ["Tráfego pago", "Meta Ads", "Google Ads", "E-commerce", "Funil de vendas", "Processo comercial", "Automação com inteligência artificial"],
  nationality: { "@type": "Country", name: "Brasil" },
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

// Blog e cada post (BlogPosting + FAQ + trilha).
rotas.push(
  {
    path: "/blog/",
    titulo: "Blog da Domous | Marketing, tráfego pago e vendas pra empresários",
    descricao:
      "Guias, estudos com dado de João Pessoa, Raio-X do marketing de empresas da Paraíba e opinião sobre tráfego pago, vendas pelo WhatsApp e IA.",
    jsonLd: [
      organizacao,
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog da Domous",
        url: url("/blog/"),
        inLanguage: "pt-BR",
        publisher: { "@id": ORG_ID },
        blogPost: posts.filter((p) => !ehNoticia(p)).map((p) => ({ "@type": "BlogPosting", headline: p.h1, url: url(caminhoPost(p)), datePublished: p.publicado })),
      },
      trilhaLd([["Início", "/"], ["Blog", "/blog/"]]),
    ],
  },
  {
    path: "/news/",
    titulo: "Domous News | Notícias de marketing, vendas, negócios e IA",
    descricao:
      "Todo dia, a notícia de marketing, vendas, negócios ou IA que mais mexe com a receita das empresas, com a leitura da Domous: por que importa e o que fazer.",
    jsonLd: [
      organizacao,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Domous News",
        url: url("/news/"),
        inLanguage: "pt-BR",
        publisher: { "@id": ORG_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: posts.filter(ehNoticia).map((p, i) => ({ "@type": "ListItem", position: i + 1, url: url(caminhoPost(p)), name: p.h1 })),
        },
      },
      trilhaLd([["Início", "/"], ["Domous News", "/news/"]]),
    ],
  },
  ...posts.map((p) => {
    const path = caminhoPost(p);
    const secao: [string, string] = ehNoticia(p) ? ["Domous News", "/news/"] : ["Blog", "/blog/"];
    return {
      path,
      titulo: p.titulo,
      descricao: p.descricao,
      imagem: `${site.url}/img/posts/${p.slug}-og.png`,
      jsonLd: [
        organizacao,
        {
          "@context": "https://schema.org",
          "@type": ehNoticia(p) ? "NewsArticle" : "BlogPosting",
          headline: p.h1,
          description: p.descricao,
          keywords: p.palavraChave,
          articleSection: p.tipo,
          inLanguage: "pt-BR",
          author: { "@id": KAIRO_ID },
          publisher: { "@id": ORG_ID },
          datePublished: p.publicado,
          dateModified: p.atualizado,
          mainEntityOfPage: url(path),
          image: [`${site.url}/img/posts/${p.slug}-og.png`, `${site.url}/img/posts/${p.slug}-post.png`],
          about: p.servicos.map((s) => ({ "@id": `${url(`/servicos/${s}/`)}#servico` })),
          ...(p.fontes?.length ? { citation: p.fontes.map((f) => f.url) } : {}),
        },
        trilhaLd([["Início", "/"], secao, [p.h1, path]]),
        ...(p.faq.length ? [faqLd(p.faq)] : []),
      ],
    };
  }),
);

// Página de autor.
rotas.push({
  path: "/sobre/kairo-lucas/",
  titulo: autor.titulo,
  descricao: autor.descricao,
  jsonLd: [
    organizacao,
    kairoLd,
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: url("/sobre/kairo-lucas/"),
      mainEntity: { "@id": KAIRO_ID },
    },
    trilhaLd([["Início", "/"], ["Sobre", "/sobre/"], ["Kairo Lucas", "/sobre/kairo-lucas/"]]),
  ],
});

// Landing pages de anúncio: fora do Google (noindex) e fora do sitemap.
rotas.push(
  {
    path: "/lp/construtoras/",
    titulo: "Marketing que mostra quanto vende | Domous para construtoras",
    descricao: "Anúncio, atendimento do lead e custo por venda por empreendimento, num painel que você abre quando quiser.",
    jsonLd: [],
    noindex: true,
  },
  {
    path: "/lp/distribuidores/",
    titulo: "Quanto o teu digital vende? | Domous para distribuidores",
    descricao: "Campanhas separadas pra consumidor final e profissional, vendedor com processo no WhatsApp e pedido ligado à campanha.",
    jsonLd: [],
    noindex: true,
  },
);

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
