import type { Post } from "../tipos";

const post: Post = {
  slug: "whatsapp-preco-maximo-mensagem-de-marketing",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "preço máximo mensagem de marketing whatsapp",
  titulo: "WhatsApp testa preço máximo por mensagem de marketing no Brasil: o que muda pra quem dispara campanha | Domous News",
  h1: "WhatsApp testa preço máximo por mensagem de marketing no Brasil: o que muda pra quem dispara campanha",
  descricao:
    "Meta e parceiros testam no Brasil o Max Price, em que a empresa define quanto aceita pagar por mensagem de marketing no WhatsApp. Hoje é opcional; em 2027 vira regra.",
  resposta:
    "A Meta e alguns provedores oficiais do WhatsApp no Brasil começaram a testar o Max Price, recurso em que a empresa define o valor máximo que aceita pagar por cada mensagem de marketing entregue, segundo o Mobile Time de 29 de outubro de 2026. A documentação da Meta diz que o recurso está em beta aberto desde outubro e passa a ser obrigatório nos países elegíveis no segundo trimestre de 2027. Pra quem usa o WhatsApp como canal de campanha, o preço da mensagem deixa de ser fixo e passa a funcionar como lance.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "O Mobile Time informou em 29 de outubro que a Meta e alguns BSPs (os provedores oficiais da API do WhatsApp) testam no Brasil uma forma nova de cobrança pras mensagens de marketing, chamada Max Price. A empresa informa um teto por mensagem, que pode ficar acima, igual ou abaixo da tabela, e a Meta só entrega a mensagem se o preço calculado pra ela couber nesse limite. A Sinch é uma das plataformas que já adaptaram o sistema pra operar no modelo.",
        "Na página pra desenvolvedores, a Meta descreve o calendário: beta restrito a partir de 15 de maio de 2026, beta aberto desde outubro, quando qualquer parceiro pode ativar o recurso pra todos os clientes, e disponibilidade geral prevista pro segundo trimestre de 2027. Nessa última fase, segundo o texto, o Max Price passa a ser exigido nos países elegíveis.",
      ],
    },
    {
      titulo: "Como funciona a cobrança",
      paragrafos: [
        "Hoje a mensagem de marketing tem preço fixo por país. No Brasil, desde 1º de outubro, ela custa R$ 0,3217 por entrega, a categoria mais cara; utilidade e autenticação saem por R$ 0,035. Com o Max Price, a Meta cobra o teto definido ou menos. O lance é configurado no modelo de mensagem, com ajustes por país de destino e por mensagem no momento do envio, e convive com o orçamento diário ou total da campanha.",
        "A Meta aponta três usos: manter o teto igual à tabela e pagar menos com entrega parecida, colocar o teto abaixo da tabela pra alcançar mais gente com custo menor, ou subir o teto pra ganhar entrega em datas de pico. A própria documentação avisa que o recurso está em fase inicial e que o desempenho pode variar enquanto os sistemas aprendem. Pra usar, a empresa precisa estar na Marketing Messages API, e um administrador do portfólio assina o contrato do beta, ou o parceiro faz isso pela conta que gerencia.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "A mensagem de marketing no WhatsApp passa a se comportar como mídia: preço variável, lance e otimização da Meta, com a mesma lógica que o anunciante já conhece no Meta Ads. Pra empresa que dispara campanha pra base com frequência, o custo por mensagem vira uma decisão de verba. Lance baixo pode economizar e também derrubar a entrega justamente na Black Friday ou no fim de ano, quando todo mundo quer falar com o cliente ao mesmo tempo. A Meta não divulgou dados de desempenho nem de adoção, então ainda não dá pra saber o efeito no custo médio.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Levantar quanto a empresa gastou com mensagens de marketing no WhatsApp nos últimos três meses e quanta receita essas campanhas trouxeram",
        "Perguntar ao provedor da API se ele já oferece o Max Price e como ele mostra entregas e custo por campanha",
        "Separar a base por engajamento: quem compra ou responde recebe um teto maior, e quem está parado entra em campanhas de teto baixo",
        "Testar o recurso em uma campanha fora de data de pico, comparando com o preço de tabela antes de mudar a Black Friday",
        "Rever o uso de mensagem de marketing onde utilidade resolve, como confirmação de pedido e lembrete de pagamento, que custam bem menos",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A gente já trata disparo de WhatsApp como mídia paga, e o Max Price confirma esse caminho. A conta que importa continua sendo custo por cliente e receita atribuída por campanha; quem já mede isso consegue definir o lance com critério. Quem dispara pra base inteira sem medir resposta vai sentir o aumento primeiro, então o momento de organizar a base e o relatório é antes de o recurso virar regra.",
      ],
    },
  ],
  faq: [
    {
      p: "O que é o Max Price do WhatsApp?",
      r: "É um recurso da Marketing Messages API em que a empresa define o valor máximo que aceita pagar por mensagem de marketing entregue. A Meta cobra esse valor ou menos e só entrega a mensagem se o preço couber no limite.",
    },
    {
      p: "O Max Price já é obrigatório?",
      r: "Não. Desde outubro de 2026 está em beta aberto e é opcional. Segundo a Meta, passa a ser exigido nos países elegíveis quando chegar à disponibilidade geral, prevista pro segundo trimestre de 2027.",
    },
    {
      p: "Quanto custa hoje uma mensagem de marketing no WhatsApp no Brasil?",
      r: "R$ 0,3217 por mensagem entregue, pela tabela que vale desde 1º de outubro de 2026, segundo o Mobile Time. Mensagens de utilidade e autenticação custam R$ 0,035.",
    },
  ],
  servicos: ["crm-ia-whatsapp", "automacao-e-integracoes", "mensuracao-e-painel"],
  publicado: "2026-10-31",
  atualizado: "2026-10-31",
  fontes: [
    { nome: "Mobile Time, 29/10/2026: WhatsApp e BSPs testam preço dinâmico para mensagens de marketing", url: "https://www.mobiletime.com.br/noticias/29/10/2026/preco-maximo-whatsapp/" },
    { nome: "Meta for Developers: Set a max price for marketing messages (BETA)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/pricing/" },
    { nome: "Meta for Developers: Enroll in the max price feature", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/pricing/enroll-max-price" },
  ],
};

export default post;
