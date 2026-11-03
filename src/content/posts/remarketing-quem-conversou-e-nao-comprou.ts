import type { Post } from "../tipos";

const post: Post = {
  slug: "remarketing-quem-conversou-e-nao-comprou",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "remarketing",
  titulo: "Remarketing: como vender pra quem já conversou e não comprou | Domous",
  h1: "Remarketing: como vender pra quem já conversou e não comprou",
  descricao:
    "Remarketing na prática: como montar públicos de quem visitou o site, interagiu ou chamou no WhatsApp e não comprou, com janelas, criativo e frequência.",
  resposta:
    "Remarketing é anunciar de novo pra quem já teve contato com a tua empresa e ainda não comprou: visitou o site, viu um vídeo, interagiu no Instagram ou conversou no WhatsApp. Funciona quando você separa esses públicos por etapa, fala com cada um sobre a dúvida que travou a compra e tira da lista quem já comprou. No Meta Ads isso se chama público personalizado; no Google Ads, segmentos dos seus dados.",
  secoes: [
    {
      titulo: "O que é remarketing e por que ele importa pra quem vende pelo WhatsApp?",
      paragrafos: [
        "Quem compra produto de ticket alto quase nunca fecha no primeiro contato. A pessoa pede preço, some, pesquisa a concorrência, conversa com a família e volta semanas depois. Ou não volta, porque esqueceu de você.",
        "O remarketing existe pra esse intervalo. Ele mantém a tua empresa na frente de quem já levantou a mão, com uma mensagem diferente da que trouxe a pessoa da primeira vez. Pra quem vende pelo WhatsApp, o público mais valioso costuma ser justamente quem conversou com o comercial e parou de responder.",
        "Você vai ver os termos remarketing e retargeting usados como sinônimos. Algumas pessoas reservam retargeting pro anúncio e remarketing pro contato direto (e-mail, WhatsApp). Aqui a gente trata dos dois juntos, porque na prática eles trabalham em dupla.",
      ],
    },
    {
      titulo: "Quais públicos de remarketing montar primeiro?",
      paragrafos: [
        "Comece pelos públicos que dizem mais sobre a intenção da pessoa. A ordem que a gente costuma seguir:",
      ],
      itens: [
        "Quem conversou no WhatsApp e não comprou: exporte os telefones do CRM e suba como lista de clientes no Meta Ads (público personalizado) e no Google Ads (Correspondência de clientes)",
        "Quem visitou páginas de produto, de preço ou de contato no site, com o Pixel da Meta e a tag do Google instalados",
        "Quem enviou mensagem pra página ou interagiu com o perfil no Instagram e no Facebook",
        "Quem assistiu boa parte dos teus vídeos, sinal de interesse mais forte que uma curtida",
        "Quem abriu o formulário de cadastro do anúncio e não enviou",
      ],
    },
    {
      titulo: "Passo 1: separar por etapa e excluir quem já comprou",
      paragrafos: [
        "O erro mais comum é jogar todo mundo num público só. Quem viu um vídeo e quem pediu orçamento estão em momentos diferentes e precisam de anúncios diferentes.",
        "Igualmente importante é a exclusão. Suba a lista de quem já comprou e exclua das campanhas de remarketing. Ninguém gosta de ver anúncio do sofá que acabou de pagar, e cada impressão nessa pessoa é verba que saiu de quem ainda está decidindo.",
        "Pra lista de clientes funcionar sem dor de cabeça, mantenha o CRM em dia: telefone com DDD, etapa do funil e motivo de perda anotado pelo vendedor. Esse motivo de perda vira o roteiro dos teus criativos. E toda lista precisa respeitar a LGPD e os termos de cada plataforma.",
      ],
    },
    {
      titulo: "Passo 2: escolher a janela de tempo certa",
      paragrafos: [
        "Janela é por quantos dias a pessoa fica no público depois do contato. As duas plataformas deixam você escolher. No Google Ads, a duração padrão é de 30 dias e o máximo é de 540 dias, segundo a central de ajuda do Google. No Meta Ads, o limite muda conforme a fonte do público, então confira no Gerenciador de Anúncios na hora de criar.",
        "A janela certa acompanha o teu ciclo de venda. Delivery e varejo de giro rápido pedem janela curta. Móveis planejados, clínica e imóvel pedem janela longa, porque a decisão leva mais tempo.",
        "Uma divisão que funciona bem é separar quente, morno e frio: quem teve contato nos últimos dias, nas últimas semanas e nos últimos meses. Cada faixa recebe um anúncio e uma verba diferentes, e você enxerga qual delas traz cliente mais barato.",
      ],
    },
    {
      titulo: "Passo 3: criativo que responde a dúvida que travou a compra",
      paragrafos: [
        "Repetir no remarketing o mesmo anúncio que trouxe a pessoa é desperdício. Ela já viu aquilo e não comprou. O remarketing precisa trazer a peça que faltou na decisão.",
        "Os ângulos que mais usamos:",
      ],
      itens: [
        "Depoimento de cliente num negócio parecido com o de quem está decidindo",
        "Resposta direta à objeção mais comum que o comercial ouve (prazo, forma de pagamento, garantia, instalação)",
        "Bastidor: obra andando, produto sendo montado, equipe atendendo",
        "Condição com prazo real, quando existir, sem inventar urgência",
        "Convite pra visita ao showroom, à clínica ou ao decorado, com a localização",
      ],
    },
    {
      titulo: "Passo 4: controlar frequência e somar o WhatsApp",
      paragrafos: [
        "Público de remarketing é pequeno, então o anúncio aparece muitas vezes pra mesma pessoa. Acompanhe a frequência no relatório e troque o criativo quando o custo por conversa começar a subir com a frequência. Ter três ou quatro ângulos rodando ao mesmo tempo ajuda a não cansar o público.",
        "O papel do anúncio é trazer a pessoa de volta pra conversa. Daí em diante, a venda depende do atendimento. Se o lead que retorna pelo remarketing espera horas por resposta, a verba volta a esfriar.",
        "No WhatsApp, a retomada direta também tem regra. Fora da janela de 24 horas, a empresa só pode mandar mensagem com modelo aprovado e pra quem autorizou receber, segundo a política do WhatsApp Business. Quando a pessoa chega por anúncio de clique pro WhatsApp e a empresa responde, abre uma janela gratuita que pode durar até 7 dias, segundo a página de preços da Meta. É um bom prazo pra mandar a proposta, confirmar visita e fazer a primeira retomada.",
      ],
    },
    {
      titulo: "Como medir se o remarketing está dando retorno?",
      paragrafos: [
        "A métrica que importa é custo por cliente vindo do remarketing, comparado com o custo por cliente das campanhas de público novo. Clique e alcance não respondem essa pergunta.",
        "Pra chegar nesse número, marque a origem de cada conversa no CRM e devolva as vendas pras plataformas pela API de Conversões da Meta e pela importação de conversões do Google. Assim, a campanha aprende com quem comprou de verdade e você enxerga quanto o remarketing traz de receita. Uma loja de móveis de João Pessoa, por exemplo, consegue ver quantas vendas no showroom vieram de quem tinha pedido orçamento pelo WhatsApp semanas antes.",
      ],
    },
  ],
  faq: [
    {
      p: "Qual a diferença entre remarketing e retargeting?",
      r: "Muita gente usa os dois como sinônimos. Quem separa costuma chamar de retargeting o anúncio pra quem já interagiu e de remarketing o contato direto por e-mail ou WhatsApp. O próprio Google hoje chama as listas de remarketing de segmentos dos seus dados.",
    },
    {
      p: "Dá pra fazer remarketing pra quem conversou no WhatsApp?",
      r: "Dá. O caminho mais comum é exportar os telefones das conversas do CRM e subir como lista de clientes no Meta Ads e no Google Ads, respeitando a LGPD e os termos das plataformas.",
    },
    {
      p: "Por quanto tempo uma pessoa fica no público de remarketing?",
      r: "Depende da janela que você escolher. No Google Ads o padrão é 30 dias e o máximo é 540 dias. No Meta Ads o limite varia conforme a fonte do público.",
    },
    {
      p: "Remarketing funciona com pouca verba?",
      r: "Funciona, porque o público é menor e já conhece a empresa. O cuidado é com a frequência: com verba e público pequenos, troque o criativo antes de a mesma pessoa cansar do anúncio.",
    },
  ],
  servicos: ["meta-ads", "google-ads", "mensuracao-e-painel"],
  publicado: "2026-11-03",
  atualizado: "2026-11-03",
  fontes: [
    { nome: "Ajuda do Google Ads: como os segmentos dos seus dados funcionam (duração padrão e máxima, novo nome do remarketing)", url: "https://support.google.com/google-ads/answer/2472738?hl=pt-BR" },
    { nome: "Ajuda do Google Ads: sobre a Correspondência de clientes", url: "https://support.google.com/google-ads/answer/6379332?hl=pt-BR" },
    { nome: "Meta for Developers: preços da WhatsApp Business Platform (janela gratuita do anúncio de clique pro WhatsApp)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing" },
    { nome: "Política do WhatsApp Business (autorização pra receber mensagens)", url: "https://business.whatsapp.com/policy" },
  ],
};

export default post;
