import type { Post } from "../tipos";

const post: Post = {
  slug: "google-microsoft-openai-sinal-unico-treino-de-ia-robots-txt",
  tipo: "noticia",
  editoria: "ia",
  nivel: "brasil",
  palavraChave: "bloquear treino de ia robots.txt",
  titulo: "Google, Microsoft e OpenAI vão aceitar um sinal único contra treino de IA: o que muda pro site da tua empresa | Domous News",
  h1: "Google, Microsoft e OpenAI vão aceitar um sinal único contra treino de IA: o que muda pro site da tua empresa",
  descricao:
    "Google, Microsoft, OpenAI e Anthropic vão respeitar uma linha única no robots.txt pra bloquear treino de IA. Datas, o que o sinal cobre e o que decidir no site.",
  resposta:
    "Em 30 de outubro de 2026, Google, Microsoft e OpenAI anunciaram que vão respeitar uma mesma instrução no robots.txt, o __usage_ai-training, pra que um site diga se aceita ou não ter o conteúdo usado no treino de modelos de IA. A Anthropic também aderiu. A Microsoft começa em 1º de fevereiro de 2027, o Google prevê o início de 2027 e a OpenAI fala nos próximos meses. A decisão mexe com a presença da marca nas respostas de IA, então vale ser tomada pelo marketing junto com quem cuida do site.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "Em 30 de outubro, o Google (no blog do Search Central), a Microsoft (no blog do Bing) e a OpenAI publicaram que vão reconhecer um sinal compartilhado no robots.txt, o arquivo que diz aos robôs o que eles podem acessar num site. A Anthropic, dona do Claude, registrou o apoio numa lista de discussão do IETF, a entidade que padroniza protocolos da internet. Segundo o Engadget e o PPC Land, a proposta foi escrita por Kevin Kelley, da Anthropic, e ainda é um rascunho individual, sem aprovação formal do IETF.",
        "Na prática, em vez de bloquear robô por robô (GPTBot, Google-Extended, ClaudeBot e outros), o site passa a ter uma linha só. O exemplo do rascunho bloqueia o treino no site inteiro e libera uma pasta específica:",
      ],
      itens: [
        "User-Agent: __usage_ai-training",
        "Disallow: /",
        "Allow: /press-kit/",
      ],
    },
    {
      titulo: "Quando passa a valer em cada empresa",
      paragrafos: [
        "Microsoft: a partir de 1º de fevereiro de 2027, à medida que o Bing rastrear as páginas de novo. Ela também criou um controle por página pro uso do conteúdo em respostas geradas, como as do Copilot. As tags antigas NoArchive e NoCache deixam de valer como preferência de IA depois de 1º de março de 2027, e o Bing Webmaster Tools abre uma configuração de transição em 15 de dezembro de 2026. Segundo a empresa, nada disso muda a presença no resultado tradicional do Bing.",
        "Google: suporte previsto pro início de 2027. Se o site usar o sinal único e não citar o Google-Extended, o Google vai tratar como se o Google-Extended estivesse bloqueado. Segundo o PPC Land, isso tira o conteúdo do treino do Gemini e também das respostas do app Gemini que consultam a web. O Google afirma que a decisão não afeta a presença na Busca, e os resumos de IA da Busca (AI Overviews e Modo IA) seguem com controle separado no Search Console.",
        "OpenAI: promete implementar nos próximos meses, sem data. Até lá, os controles atuais, como o bloqueio do GPTBot, continuam valendo.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "O que ChatGPT, Gemini e Copilot dizem sobre a tua marca vem, em boa parte, do que eles leram na web. Bloquear o treino protege conteúdo que a empresa não quer ver reaproveitado, mas também pode reduzir a chance de a marca aparecer nessas respostas, principalmente no Gemini, onde o bloqueio pelo sinal único vale também pra consulta em tempo real.",
        "Dois cuidados: o sinal é uma preferência que as empresas se comprometeram a respeitar, sem impedir tecnicamente o acesso, e não apaga o que já foi coletado. Uma regra genérica do tipo User-Agent: * não conta como preferência sobre treino.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Abrir o robots.txt do site (dominio.com.br/robots.txt) e anotar o que já está bloqueado pra robôs de IA hoje",
        "Separar o conteúdo que deve aparecer em respostas de IA (serviços, produtos, perguntas frequentes, blog) do que é sensível (tabela de preço interna, área do cliente, material pago)",
        "Decidir com o marketing e o jurídico a política da empresa e registrar por escrito antes de mexer no arquivo",
        "Se usa NoArchive ou NoCache, rever as páginas antes de 1º de março de 2027 e conferir o Bing Webmaster Tools a partir de 15 de dezembro",
        "Testar de tempos em tempos o que ChatGPT, Gemini e Copilot respondem quando alguém pergunta pelo teu segmento e pela tua cidade",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A gente trabalha pra que as empresas sejam encontradas e citadas quando o comprador pergunta a uma IA, então nossa recomendação padrão pra site comercial é deixar aberto o que vende e fechar só o que é sensível. A linha única simplifica a gestão, mas a decisão de bloquear tem custo de visibilidade e merece a mesma conversa que se faz antes de tirar uma página do Google. Quem chega pela IA ainda precisa encontrar oferta clara, página rápida e atendimento ágil no WhatsApp.",
      ],
    },
  ],
  faq: [
    {
      p: "O que é o __usage_ai-training no robots.txt?",
      r: "É uma instrução única, proposta num rascunho do IETF, pra o site dizer se aceita que o conteúdo seja usado no treino de modelos de IA. Google, Microsoft, OpenAI e Anthropic anunciaram em 30 de outubro de 2026 que vão respeitá-la.",
    },
    {
      p: "Bloquear o treino de IA tira meu site do Google?",
      r: "Segundo o Google, a presença na Busca não é afetada. O bloqueio pelo sinal único é tratado como bloqueio do Google-Extended, que cobre o Gemini. Os resumos de IA da Busca têm controle separado no Search Console.",
    },
    {
      p: "A partir de quando o sinal funciona?",
      r: "Na Microsoft, a partir de 1º de fevereiro de 2027. No Google, no início de 2027. A OpenAI fala nos próximos meses, sem data, e a Anthropic informou que já começou a implementar.",
    },
  ],
  servicos: ["landing-page-e-cro", "consultoria-de-marketing-e-vendas", "conteudo-e-audiovisual"],
  publicado: "2026-11-01",
  atualizado: "2026-11-01",
  fontes: [
    { nome: "Blog do Bing (Microsoft), 30/10/2026: Your content, your choice: clearer preferences for training and grounding", url: "https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/" },
    { nome: "Google Search Central, 30/10/2026: Supporting a shared AI training control for websites", url: "https://developers.google.com/search/blog/2026/10/ai-training-control" },
    { nome: "OpenAI, 30/10/2026: anúncio sobre preferências de treino de IA para sites", url: "https://openai.com/index/helping-websites-express-ai-training-preferences/" },
    { nome: "Engadget, 31/10/2026: Google joins OpenAI and Anthropic in promising new scraping controls", url: "https://www.engadget.com/2303225/google-openai-anthropic-ai-crawling-controls/" },
    { nome: "PPC Land, 31/10/2026: Google, Microsoft, OpenAI and Anthropic back one AI training opt-out", url: "https://ppc.land/google-microsoft-openai-and-anthropic-back-one-ai-training-opt-out/" },
    { nome: "Search Engine Roundtable: Google vai apoiar o controle compartilhado de treino de IA", url: "https://www.seroundtable.com/google-ai-training-control-42430.html" },
  ],
};

export default post;
