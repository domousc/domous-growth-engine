import type { Post } from "../tipos";

const post: Post = {
  slug: "whatsapp-business-api",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "whatsapp business api",
  titulo: "WhatsApp Business API: o que é, como a Meta cobra e quando migrar do app | Domous",
  h1: "WhatsApp Business API: o que é, como a Meta cobra e quando migrar do app",
  descricao:
    "WhatsApp Business API explicada: diferença pro app Business, como a Meta cobra por mensagem, quando migrar e como usar o app e a API no mesmo número.",
  resposta:
    "A WhatsApp Business API é a versão oficial do WhatsApp feita pra empresa ligar o número a sistemas: CRM, agente de IA, vários atendentes e disparo de mensagens aprovadas. A Meta cobra por mensagem entregue, com preço que muda pela categoria da mensagem e pelo país de quem recebe. Vale migrar quando o celular virou gargalo, e hoje dá pra usar o app e a API no mesmo número.",
  secoes: [
    {
      titulo: "O que é a WhatsApp Business API?",
      paragrafos: [
        "A Meta chama o conjunto de WhatsApp Business Platform. Na prática, é uma porta de entrada pra outros sistemas conversarem com o teu número de WhatsApp. Em vez de alguém responder tudo no celular, as mensagens chegam numa plataforma de atendimento, num CRM ou num agente de IA.",
        "Pra usar, a empresa conecta o número pela Cloud API da Meta, quase sempre por meio de um provedor parceiro ou de uma ferramenta de atendimento que já faz essa ligação.",
      ],
    },
    {
      titulo: "Qual a diferença entre o app WhatsApp Business e a API?",
      paragrafos: [
        "O app WhatsApp Business é gratuito e roda no celular, com até quatro aparelhos ligados à mesma conta, segundo a documentação da Meta. Resolve bem pra quem atende pouca gente por dia e tem uma ou duas pessoas no comercial.",
        "A API roda na nuvem. Ela permite:",
      ],
      itens: [
        "Vários atendentes no mesmo número, cada um com a sua fila",
        "Ligação com CRM, pra cada conversa virar um lead com origem, etapa e dono",
        "Agente de IA que responde, qualifica e passa pro vendedor",
        "Mensagens de modelo aprovadas pela Meta, pra lembrete, confirmação, recuperação de orçamento e campanha pra quem autorizou receber",
        "Dados da conversa voltando pro anúncio, pra campanha aprender com quem comprou",
      ],
    },
    {
      titulo: "Como a Meta cobra pela API do WhatsApp?",
      paragrafos: [
        "Desde 1º de julho de 2025, a Meta cobra por mensagem entregue. Mensagem que o cliente manda pra empresa não é cobrada. O preço depende de duas coisas: a categoria da mensagem e o país do número de quem recebe.",
        "As categorias são marketing, utilidade (confirmação de pedido, lembrete, aviso de entrega), autenticação (código de acesso) e serviço (a resposta livre dentro da janela de 24 horas depois que o cliente escreveu). Modelos de marketing, utilidade e autenticação podem ser enviados a qualquer hora. Mensagem livre, sem modelo, só dentro da janela de atendimento.",
        "Teve mudança em 1º de outubro de 2026: a Meta voltou a cobrar mensagem de serviço acima de 1.000 por mês por número e passou a cobrar a mensagem de utilidade enviada dentro da janela de 24 horas. Os valores mudam com frequência, então a gente não coloca preço aqui. Consulte a tabela oficial da Meta pro Brasil antes de fazer a conta, e some a mensalidade da ferramenta que você usar.",
      ],
    },
    {
      titulo: "E quem vem de anúncio de clique pro WhatsApp?",
      paragrafos: [
        "Aqui mora uma vantagem pra quem anuncia. Quando a pessoa chega pelo anúncio de clique pro WhatsApp e a empresa responde, abre uma janela gratuita que pode durar até 7 dias, segundo a página de preços da Meta. Nessa janela, as mensagens de marketing, utilidade, autenticação e serviço saem sem custo.",
        "Isso muda o jeito de pensar o atendimento. O lead do anúncio pode receber retomada, lembrete de visita e proposta dentro desse prazo sem pagar por mensagem. Uma loja de móveis de João Pessoa, por exemplo, pode mandar o catálogo do ambiente, confirmar a visita ao showroom e lembrar no dia, tudo na mesma janela.",
      ],
    },
    {
      titulo: "Quando vale migrar do app pra API?",
      paragrafos: [
        "Os sinais que a gente vê com mais frequência em empresa que vende pelo WhatsApp:",
      ],
      itens: [
        "Lead esperando horas porque o celular está com uma pessoa só",
        "Mais gente precisando atender o mesmo número do que o app comporta",
        "Ninguém sabe dizer quantas conversas vieram do anúncio e quantas viraram venda",
        "Vontade de colocar um agente de IA pra responder fora do horário comercial",
        "Lista de transmissão virando a principal forma de falar com a base",
      ],
    },
    {
      titulo: "Dá pra usar o app e a API no mesmo número?",
      paragrafos: [
        "Dá. A Meta chama isso de coexistência: o número que já está no app WhatsApp Business é conectado à Cloud API, e as conversas ficam espelhadas nos dois lados. O vendedor continua respondendo no celular, e o CRM ou o agente de IA recebe tudo.",
        "Alguns pontos da documentação da Meta pra saber antes: a conexão traz até 180 dias de histórico (grupos ficam de fora), as listas de transmissão viram só leitura, mensagem temporária e de visualização única deixam de funcionar nas conversas individuais, e os aparelhos ligados são desconectados e precisam ser ligados de novo. Mensagem enviada pelo app continua gratuita; a enviada pela API segue a tabela da Meta.",
      ],
    },
    {
      titulo: "Como começar sem travar o comercial",
      paragrafos: [
        "A ordem que a gente usa: primeiro definir o roteiro de atendimento e as etapas do funil, depois escolher a ferramenta, conectar o número e só então ligar automação e IA. Ferramenta boa em cima de atendimento sem processo só deixa o problema mais rápido.",
        "Antes de virar a chave, vale cadastrar um meio de pagamento na conta do WhatsApp, separar quem responde cada tipo de conversa e marcar a origem de cada lead. Assim, no primeiro mês já dá pra ver quanto custa cada cliente que veio do anúncio.",
      ],
    },
  ],
  faq: [
    {
      p: "A WhatsApp Business API é gratuita?",
      r: "Não totalmente. Receber mensagem do cliente é gratuito e há 1.000 mensagens de serviço gratuitas por mês por número, mas os modelos de marketing, utilidade e autenticação são cobrados por mensagem entregue, além da mensalidade da ferramenta usada.",
    },
    {
      p: "Posso mandar mensagem pela API pra qualquer número?",
      r: "Fora da janela de 24 horas, só com modelo aprovado pela Meta e pra quem autorizou receber mensagens da empresa, como pede a política do WhatsApp Business. Lista comprada fere a política e pode levar a restrição do número.",
    },
    {
      p: "Perco as conversas do app se eu conectar a API?",
      r: "Na coexistência, as conversas continuam no app e o histórico dos últimos 180 dias pode ser sincronizado com a plataforma, exceto grupos.",
    },
    {
      p: "Preciso de um provedor pra usar a API do WhatsApp?",
      r: "Na maioria dos casos sim, porque a conexão é feita por um parceiro da Meta ou por uma ferramenta de atendimento que já usa a Cloud API. Empresas com time de tecnologia também podem integrar direto.",
    },
  ],
  servicos: ["crm-ia-whatsapp", "automacao-e-integracoes", "consultoria-de-marketing-e-vendas"],
  publicado: "2026-10-31",
  atualizado: "2026-10-31",
  fontes: [
    { nome: "Meta for Developers: preços da WhatsApp Business Platform (cobrança por mensagem, categorias, mudanças de 1º/10/2026, janela gratuita do anúncio)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing" },
    { nome: "Meta for Developers: coexistência entre o app WhatsApp Business e a Cloud API", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users" },
    { nome: "Política do WhatsApp Business (autorização pra receber mensagens)", url: "https://business.whatsapp.com/policy" },
  ],
};

export default post;
