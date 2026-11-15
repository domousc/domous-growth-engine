import type { Post } from "../tipos";

const post: Post = {
  slug: "crm-para-pequena-e-media-empresa",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "crm para pequena empresa",
  titulo: "CRM para pequena empresa: o que ter e como implantar sem travar o time | Domous",
  h1: "CRM para pequena empresa: o que ter e como implantar sem travar o time",
  descricao:
    "CRM para pequena empresa que vende pelo WhatsApp: o que o sistema precisa ter, como implantar sem travar o time e como ligar o CRM ao anúncio e à IA.",
  resposta:
    "Um bom CRM para pequena empresa que vende pelo WhatsApp precisa de quatro coisas: receber as conversas do WhatsApp no mesmo lugar, guardar a origem de cada contato, mostrar o funil em etapas e registrar a venda. A implantação funciona melhor em partes, começando pelo funil e pela origem e deixando automação e IA pra depois que o time já usa o básico todo dia.",
  secoes: [
    {
      titulo: "O que é um CRM e quando a pequena empresa precisa de um?",
      paragrafos: [
        "CRM vem do inglês Customer Relationship Management, gestão do relacionamento com o cliente. Na prática, é o lugar onde fica cada contato, a conversa com ele, a etapa em que está e o que aconteceu no fim: comprou, sumiu ou desistiu.",
        "Muita empresa começa no WhatsApp Business com etiquetas, e isso dá conta por um tempo. Os sinais de que chegou a hora de um CRM são bem conhecidos: mais de um vendedor no mesmo número, cliente que pergunta \"já te mandei isso\" porque ninguém lembra da conversa, orçamento que ninguém retomou e a pergunta \"de onde veio essa venda?\" sem resposta no fim do mês.",
      ],
    },
    {
      titulo: "O que um CRM precisa ter pra quem vende pelo WhatsApp?",
      paragrafos: [
        "O mercado tem dezenas de opções. Antes de olhar preço ou tela bonita, confira se o sistema faz o essencial pra uma operação que vive no WhatsApp:",
      ],
      itens: [
        "Integração com a API oficial do WhatsApp, com vários atendentes no mesmo número e o histórico de cada conversa salvo no contato",
        "Campo de origem preenchido sozinho: campanha, anúncio, Google, Instagram orgânico, indicação",
        "Funil em etapas que o vendedor arrasta (novo, qualificado, orçamento, visita, venda, perdido), com motivo de perda obrigatório",
        "Tarefas e lembretes de retomada, pra nenhum orçamento ficar esquecido",
        "Registro da venda com valor, que é o que permite calcular o custo por cliente",
        "Integração por API ou webhook, pra conversar com anúncio, ERP, agenda e planilha",
      ],
    },
    {
      titulo: "Como implantar o CRM sem travar o time?",
      paragrafos: [
        "A implantação que trava é a que tenta resolver tudo no primeiro dia: vinte campos obrigatórios, cinco funis e automação pra cada etapa. O vendedor volta pro WhatsApp do celular na primeira semana. A gente prefere fazer em partes:",
      ],
      itens: [
        "Semana 1: um funil só, com as etapas que o time já usa na cabeça, e o número de WhatsApp ligado ao CRM",
        "Semana 2: origem de cada contato e motivo de perda; quem não preencher, o gestor cobra na reunião",
        "Semana 3: tarefas de retomada e respostas prontas pras dúvidas que se repetem",
        "Depois: automações, painel e IA, quando o básico já roda todo dia",
      ],
    },
    {
      titulo: "Como ligar o CRM ao anúncio?",
      paragrafos: [
        "Aqui está o maior ganho pra quem investe em tráfego pago. Com a origem salva no CRM, dá pra contar quantas vendas cada campanha trouxe e quanto custou cada cliente, que é a métrica que decide onde colocar a verba.",
        "O caminho de volta também existe. Nas conversas que começam num anúncio de clique pro WhatsApp, a API oficial recebe um identificador do clique (o ctwa_clid). Segundo a documentação da Meta, a empresa pode guardar esse identificador e, quando a conversa vira venda, mandar o evento de volta pela API de Conversões. O Google Ads tem um recurso parecido, a importação de conversões offline. Assim as campanhas passam a aprender com quem comprou, além de quem só mandou mensagem.",
        "Um exemplo em João Pessoa: uma loja de móveis anuncia sofá no Instagram e cozinha planejada no Google. Sem CRM, as duas campanhas parecem iguais porque geram conversa. Com a origem e a venda registradas, o dono vê qual delas trouxe cliente pagando e ajusta a verba com dado na mão.",
      ],
    },
    {
      titulo: "E a IA no CRM, vale a pena?",
      paragrafos: [
        "Vale quando o básico já funciona. Um agente de IA no WhatsApp responde na hora, inclusive de madrugada, tira dúvida com base no que a empresa vende, faz as perguntas de qualificação e passa pro vendedor quem está pronto pra comprar, com tudo registrado no CRM.",
        "Colocar IA antes de ter funil e origem organizados só automatiza a bagunça. Por isso ela entra por último na ordem de implantação.",
      ],
    },
    {
      titulo: "Como saber se o CRM está funcionando?",
      paragrafos: [
        "Depois de um mês de uso, o CRM tem que responder rápido a quatro perguntas: quantos contatos chegaram por origem, quantos viraram orçamento, quantos viraram venda e por que os outros não compraram. Se o gestor consegue tirar esses números sem pedir planilha pra ninguém, a implantação deu certo. Se não consegue, o problema quase sempre está no preenchimento, e a solução é simplificar o funil antes de trocar de sistema.",
      ],
    },
  ],
  faq: [
    {
      p: "Qual o melhor CRM para pequena empresa?",
      r: "O que o time vai usar todo dia e que se integra à API oficial do WhatsApp. Teste com uma operação real por algumas semanas antes de fechar contrato longo.",
    },
    {
      p: "Dá pra usar o WhatsApp Business como CRM?",
      r: "No começo, sim: as etiquetas do app organizam origem e etapa. Quando entra mais de um vendedor ou a empresa precisa medir venda por campanha, o app fica curto e vale migrar pra um CRM ligado à API oficial.",
    },
    {
      p: "Planilha serve como CRM?",
      r: "Serve pra começar e entender o funil. O limite aparece quando a conversa fica no WhatsApp e o registro na planilha, porque alguém precisa copiar tudo na mão e a informação se perde.",
    },
  ],
  servicos: ["crm-ia-whatsapp", "automacao-e-integracoes", "mensuracao-e-painel"],
  publicado: "2026-11-15",
  atualizado: "2026-11-15",
  fontes: [
    { nome: "WhatsApp Business, recursos do app (etiquetas, respostas rápidas, catálogo)", url: "https://whatsappbusiness.com/products/business-app-features/" },
    { nome: "Meta for Developers: API de Conversões pra mensagens (ctwa_clid)", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/business-messaging" },
    { nome: "Ajuda do Google Ads: sobre a importação de conversões offline", url: "https://support.google.com/google-ads/answer/2998031" },
  ],
};

export default post;
