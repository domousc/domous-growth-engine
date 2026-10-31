import type { Post } from "../tipos";

const post: Post = {
  slug: "meta-suspende-novos-termos-comerciais-investigacao-reino-unido",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "meta suspende novos termos comerciais",
  titulo: "Meta suspende novos termos comerciais e vira alvo de investigação no Reino Unido: o que muda pra quem anuncia | Domous News",
  h1: "Meta suspende novos termos comerciais e vira alvo de investigação no Reino Unido: o que muda pra quem anuncia",
  descricao:
    "A Meta adiou sem data os novos termos comerciais, que valeriam em 20/11, e o regulador britânico abriu investigação sobre eles. Os termos atuais seguem valendo. O que o anunciante faz agora.",
  resposta:
    "Em 28 de outubro de 2026, a Meta adiou por tempo indeterminado os novos termos comerciais para empresas e anunciantes, que estavam marcados para 20 de novembro, e disse que os termos atuais continuam valendo até o fim de uma consulta com o mercado. Dois dias depois, em 30 de outubro, a autoridade de concorrência do Reino Unido (CMA) abriu uma investigação formal sobre esses termos. Pra quem anuncia no Brasil, a data de 20 de novembro deixa de ser prazo, mas a revisão das configurações de IA dos anúncios continua valendo a pena.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "Na quarta-feira, 28 de outubro, a Meta informou que vai ouvir entidades do setor antes de mudar suas regras comerciais e que essa consulta pode passar de 20 de novembro, caso em que a entrada em vigor será adiada outra vez. Segundo a Reuters, a empresa afirmou que os termos atuais seguem valendo até lá. A agência descreveu a decisão como um adiamento sem data definida, depois de reclamações de veículos de imprensa e de anunciantes digitais a autoridades antitruste da União Europeia e do Reino Unido.",
        "Na sexta-feira, 30 de outubro, a CMA, autoridade de concorrência britânica, abriu investigação com base na lei de concorrência do país. Segundo a Reuters e o PPC Land, o órgão quer saber se os termos permitem à Meta coletar conteúdo dos sites de empresas e veículos que usam seus serviços e usar esse material em produtos próprios, inclusive recursos de IA, sem que essas empresas possam escolher se e como o conteúdo é usado.",
      ],
    },
    {
      titulo: "O que a investigação analisa e o que a Meta diz",
      paragrafos: [
        "A primeira etapa é definir se a Meta tem posição dominante em algum mercado do Reino Unido. Só depois a CMA avalia se os termos configuram abuso dessa posição. De acordo com o PPC Land, a fase inicial de coleta de informações vai de outubro de 2026 a janeiro de 2027, com datas sujeitas a mudança. A CMA também pediu informações sobre o Meta One, assinatura nova da Meta voltada a empresas, num tema separado da investigação.",
        "A Meta disse à Reuters que não há motivo para a investigação e que já se comprometeu a não mudar os termos sem consultar veículos e outros interessados. A empresa também afirma que o rastreamento previsto nos termos vale só pros produtos de anúncios e de negócios e que o dono do site pode continuar usando o robots.txt pra indicar o que pode ser acessado.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "A investigação é britânica, mas os termos são globais e valem pra qualquer empresa que anuncia no Facebook e no Instagram, inclusive no Brasil. O resultado da consulta e da pressão dos reguladores vai definir o texto que chega aqui. Enquanto isso, duas questões continuam na mesa: o que a Meta pode fazer com o conteúdo do site da empresa e quem responde pelo que a IA da plataforma altera nos anúncios. A segunda não depende dos termos novos: as melhorias automáticas de criativo já estão ligadas em muitas contas.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Tirar o dia 20 de novembro do cronograma como prazo fechado e acompanhar o anúncio da Meta sobre a nova data",
        "Seguir com a revisão das melhorias automáticas de criativo (Advantage+ creative) em cada anúncio ativo, deixando ligado só o que foi testado",
        "Conferir as variações geradas pela plataforma antes de escalar verba, com atenção redobrada em setor regulado (saúde, imobiliário, financeiro)",
        "Revisar o robots.txt do site e decidir, com quem cuida dele, o que fica liberado pra rastreadores",
        "Quando a versão final dos termos sair, ler com o jurídico antes de aceitar, principalmente se a empresa for grande ou regulada",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "Adiamento dá tempo, e a gente prefere usar esse tempo pra arrumar a casa. A configuração de IA dos anúncios e o que o site libera são decisões da empresa, com ou sem termo novo. Nas contas que operamos, melhoria automática de criativo entra por teste, com aprovação humana antes de escalar, e o relatório que importa continua sendo custo por cliente e receita atribuída.",
      ],
    },
  ],
  faq: [
    {
      p: "Os novos termos comerciais da Meta ainda entram em vigor em 20 de novembro?",
      r: "Não há data confirmada. Em 28 de outubro, a Meta disse que a consulta com o mercado pode passar de 20 de novembro e que, nesse caso, a entrada em vigor será adiada. Até lá, valem os termos atuais.",
    },
    {
      p: "A investigação no Reino Unido muda alguma coisa pra anunciante brasileiro?",
      r: "Diretamente, não há efeito no Brasil. Os termos são globais, então a pressão de reguladores europeus e britânicos pode influenciar o texto final que vai valer aqui.",
    },
  ],
  servicos: ["meta-ads", "trafego-pago"],
  publicado: "2026-10-31",
  atualizado: "2026-10-31",
  fontes: [
    { nome: "Reuters (via Euronext), 30/10/2026: UK's CMA opens investigation into Meta's terms for publishers and advertisers", url: "https://live.euronext.com/en/financial-news/uks-cma-opens-investigation-metas-terms-publishers-and-advertisers" },
    { nome: "Reuters (via The Spokesman-Review), 28/10/2026: Meta delays indefinitely its rollout of new commercial terms after publishers' concerns", url: "https://www.spokesman.com/stories/2026/oct/28/meta-delays-indefinitely-its-rollout-of-new-commer/" },
    { nome: "PPC Land, 31/10/2026: Meta faces UK probe over planned terms to use publishers' content for AI", url: "https://ppc.land/meta-faces-uk-probe-over-planned-terms-to-use-publishers-content-for-ai/" },
  ],
};

export default post;
