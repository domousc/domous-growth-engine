import type { Post } from "../tipos";

const post: Post = {
  slug: "google-analytics-orcamento-por-plataforma-de-anuncio",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "orçamento de mídia google analytics",
  titulo: "Google Analytics passa a comparar o orçamento de mídia por plataforma de anúncio: o que muda pra quem divide verba entre Google e Meta | Domous News",
  h1: "Google Analytics passa a comparar o orçamento de mídia por plataforma de anúncio: o que muda pra quem divide verba entre Google e Meta",
  descricao:
    "O planejamento de orçamento cross-channel do Google Analytics agora separa os resultados por plataforma de anúncio. Quem pode usar, o que a ferramenta exige e como ler as projeções.",
  resposta:
    "Em 19 de novembro de 2026, o Google Analytics anunciou que o planejamento de orçamento cross-channel passou a aceitar a dimensão de plataforma de origem, o que permite comparar plataformas de anúncio lado a lado nas projeções e nos cenários de verba. A ferramenta segue em beta, não está liberada pra todas as propriedades e não mexe no orçamento das contas. Pra empresa que divide verba entre Google, Meta e TikTok, é um jeito gratuito de simular onde o próximo real rende mais, desde que os dados de custo e conversão estejam bem configurados.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "A página oficial do Google Analytics no LinkedIn publicou em 19 de novembro que os planos de orçamento cross-channel agora trabalham com a dimensão de plataforma de origem (source platform). Segundo o anúncio, o anunciante pode acompanhar o ritmo de gasto, comparar plataformas individualmente e simular cenários futuros com curvas de resposta baseadas na atribuição baseada em dados. O PPC Land repercutiu a novidade em 20 de novembro e observou que a página de novidades do Analytics ainda não tinha registro da mudança.",
        "A página de ajuda do Google já descreve as novas dimensões de agrupamento e de plataforma de origem, criadas pra padronizar os relatórios entre o Google e outras plataformas. Uma combinação de plataforma com tipo de campanha aparece como recurso em alfa.",
      ],
    },
    {
      titulo: "Como funcionam os dois tipos de plano",
      paragrafos: [
        "A ferramenta fica na seção Publicidade do Analytics, só na versão de computador, e tem dois formatos. As projeções acompanham se as campanhas estão no ritmo de uma meta de verba, conversões ou receita e apontam os canais acima e abaixo do esperado. Os cenários estimam o retorno em diferentes níveis de investimento e sugerem uma divisão de verba pro plano seguinte.",
        "Segundo a ajuda do Google, o modelo baseado em atribuição por dados está em beta pra Analytics e Analytics 360, e o modelo baseado no Meridian está em alfa, só pra alguns clientes do Analytics 360. Os planos servem pra planejar: não alteram orçamento nem gasto nas contas conectadas. Os resultados são estimativas, e o cenário considera uma conversão por vez.",
      ],
    },
    {
      titulo: "O que a ferramenta exige",
      paragrafos: [
        "O Google lista como pré-requisitos a seção Publicidade configurada, o Google Ads vinculado, as conversões definidas, a atribuição baseada em dados e os dados de campanha vindos de integrações ou de importação, inclusive os offline. Segundo o PPC Land, o modelo pede pelo menos um ano de dados de campanha de pelo menos dois canais, com fontes do Google e de fora dele. O Google avisa que o recurso pode não estar disponível pra todas as propriedades e orienta procurar o suporte pra confirmar.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "Cada plataforma de anúncio mede o próprio resultado com as próprias regras, e a soma das conversões reportadas costuma passar do que a empresa vendeu. Uma visão por plataforma, dentro de uma ferramenta que recebe o custo de todas, ajuda a discutir a divisão da verba com o mesmo critério pra todo mundo. Pra quem planeja o primeiro trimestre de 2027 agora, a simulação de cenários chega num momento útil.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Abrir a seção Publicidade do Analytics no computador e conferir se a propriedade já tem acesso aos planos de orçamento",
        "Garantir que o custo de Meta, TikTok e das outras plataformas está entrando no Analytics, com UTMs padronizadas em todos os anúncios",
        "Revisar quais conversões estão configuradas e se elas representam venda ou lead qualificado, porque o plano trabalha com uma conversão por vez",
        "Rodar um cenário com a verba atual e comparar a sugestão com o custo por cliente medido no CRM antes de mudar qualquer orçamento",
        "Registrar o histórico de custo desde já, se a empresa ainda não tem um ano de dados importados",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A gente gosta de qualquer ferramenta que coloque Google e Meta na mesma régua, e essa ajuda a enxergar a divisão de verba com menos viés de cada plataforma. Ainda assim, o Analytics é do Google e mede clique e sessão no site. Em empresa que vende pelo WhatsApp, a venda acontece fora dali. Por isso usamos a projeção como ponto de partida e decidimos a verba pelo custo por cliente e pela receita atribuída no CRM.",
      ],
    },
  ],
  faq: [
    {
      p: "O planejamento de orçamento do Google Analytics é gratuito?",
      r: "Sim, faz parte do Google Analytics, inclusive da versão padrão, segundo a ajuda do Google. O modelo baseado no Meridian, em alfa, está restrito a alguns clientes do Analytics 360.",
    },
    {
      p: "A ferramenta muda o orçamento das minhas campanhas sozinha?",
      r: "Não. Segundo o Google, os planos servem só pra planejamento e não alteram orçamento nem gasto nas contas conectadas.",
    },
    {
      p: "Dá pra comparar Meta Ads e Google Ads no mesmo plano?",
      r: "Sim, desde que o custo e as campanhas da Meta estejam entrando no Analytics por integração ou importação. A nova dimensão de plataforma de origem é o que permite ver cada plataforma separada.",
    },
  ],
  servicos: ["mensuracao-e-painel", "google-ads", "meta-ads"],
  publicado: "2026-11-20",
  atualizado: "2026-11-20",
  fontes: [
    { nome: "Google Analytics no LinkedIn, 19/11/2026: planejamento de orçamento cross-channel com dimensões de plataforma de origem", url: "https://www.linkedin.com/posts/you-asked-for-deeper-ad-spend-visibility-share-7529204639775379457-Kd9J/" },
    { nome: "PPC Land, 20/11/2026: Ad platforms get their own line in Google Analytics budget plans", url: "https://ppc.land/ad-platforms-get-their-own-line-in-google-analytics-budget-plans/" },
    { nome: "Ajuda do Google Analytics: sobre o planejamento de orçamento cross-channel", url: "https://support.google.com/analytics/answer/14896117" },
  ],
};

export default post;
