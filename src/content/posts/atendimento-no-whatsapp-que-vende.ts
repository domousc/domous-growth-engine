import type { Post } from "../tipos";

const post: Post = {
  slug: "atendimento-no-whatsapp-que-vende",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "atendimento no whatsapp vendas",
  titulo: "Atendimento no WhatsApp que vende: roteiro, qualificação e retomada | Domous",
  h1: "Atendimento no WhatsApp que vende: roteiro, qualificação e retomada",
  descricao:
    "Atendimento no WhatsApp pra vendas: como montar com tempo de resposta, roteiro de abertura, perguntas de qualificação, etiqueta de origem e retomada.",
  resposta:
    "Um atendimento no WhatsApp que gera vendas se apoia em cinco peças: responder rápido, abrir a conversa com um roteiro curto, qualificar com duas ou três perguntas, marcar cada conversa com etiqueta de origem e de etapa, e retomar quem parou de responder. Com isso no lugar, o vendedor gasta tempo com quem pode comprar e a empresa descobre quais anúncios trazem cliente.",
  secoes: [
    {
      titulo: "Por que o atendimento pesa tanto quanto o anúncio?",
      paragrafos: [
        "O anúncio faz a pessoa mandar a primeira mensagem. Daí pra frente, quem vende é a conversa. A gente vê isso toda semana: campanha com custo por lead dentro da meta e venda que não aparece, porque a mensagem ficou horas sem resposta ou o vendedor mandou o catálogo inteiro e esperou.",
        "Lead esfria rápido. Um estudo publicado na Harvard Business Review em 2011 já mostrava que a maioria das empresas demorava demais pra responder quem pediu contato pela internet. No WhatsApp a expectativa é ainda maior, porque o cliente está acostumado a falar ali com amigo e família.",
      ],
    },
    {
      titulo: "Passo 1: responder rápido, inclusive fora do horário",
      paragrafos: [
        "O primeiro número pra acompanhar é o tempo até a primeira resposta de cada conversa. Anote em quantos minutos o time responde no horário comercial, à noite e no fim de semana. É comum descobrir que boa parte dos leads chega justamente quando a loja está fechada.",
        "O app WhatsApp Business tem duas ferramentas gratuitas que ajudam nisso: a mensagem de saudação, enviada automaticamente pra quem fala com a empresa pela primeira vez, e a mensagem de ausência, que responde sozinha fora do horário de atendimento. Elas avisam o cliente que ele foi visto. Pra continuar a conversa na hora, mesmo de madrugada, aí entra um atendente de IA que qualifica e passa pro vendedor quem está pronto pra comprar.",
      ],
    },
    {
      titulo: "Passo 2: um roteiro de abertura curto",
      paragrafos: [
        "Roteiro dá ritmo ao time e evita que cada vendedor atenda de um jeito. A abertura que funciona é curta: cumprimenta pelo nome, se apresenta, mostra que entendeu o que a pessoa pediu e faz uma pergunta. Terminar com uma pergunta convida a pessoa a responder.",
        "Um exemplo pra uma loja de móveis em João Pessoa que recebe lead de anúncio de sofá: \"Oi, Ana! Aqui é o Pedro, da loja. Vi que você se interessou pelo sofá retrátil. Ele vai pra sala ou pro home? Me conta a medida da parede que eu já te mostro as opções que cabem.\"",
        "As respostas pras dúvidas que se repetem (forma de pagamento, entrega, prazo de montagem, bairros atendidos) ficam salvas nas respostas rápidas do WhatsApp Business, que o vendedor chama com um atalho. Assim a informação sai sempre igual e certa.",
      ],
    },
    {
      titulo: "Passo 3: duas ou três perguntas de qualificação",
      paragrafos: [
        "Qualificar é descobrir cedo se aquela pessoa pode comprar o que você vende, quando e de que jeito. Duas ou três perguntas resolvem, feitas ao longo da conversa e sem cara de formulário:",
      ],
      itens: [
        "O que a pessoa precisa e pra quando: \"é pra mudança deste mês ou ainda está planejando?\"",
        "Se o produto cabe na realidade dela: região de entrega, tamanho, modelo, faixa de valor que faz sentido",
        "Como pretende pagar: à vista, parcelado, financiamento, permuta (no imobiliário, essa pergunta muda tudo)",
      ],
    },
    {
      titulo: "Passo 4: etiqueta de origem e de etapa em cada conversa",
      paragrafos: [
        "O WhatsApp Business tem etiquetas pra organizar e filtrar conversas. A gente usa dois grupos. O primeiro marca a origem: anúncio do Meta, Google, Instagram orgânico, indicação. O segundo marca a etapa: novo, qualificado, orçamento enviado, visita agendada, venda, perdido.",
        "Com a origem marcada, dá pra saber quantas vendas cada canal trouxe no mês, que é o número que decide onde colocar a verba. Com a etapa marcada, ninguém fica esquecido no meio do funil.",
        "Quando o volume cresce, vale levar isso pra um CRM ligado à API oficial do WhatsApp. Nas conversas que começam num anúncio de clique pro WhatsApp, a API recebe um identificador do clique (o ctwa_clid). Segundo a documentação da Meta, a empresa pode guardar esse identificador e, quando a conversa vira venda, mandar o evento de volta pela API de Conversões, pra campanha aprender com quem comprou.",
      ],
    },
    {
      titulo: "Passo 5: retomar quem parou de responder",
      paragrafos: [
        "Muita venda se perde por falta de um segundo contato. Combine com o time uma rotina simples: quem sumiu depois do orçamento recebe uma retomada, e quem sumiu de novo recebe mais uma, com outro motivo pra responder. Cada retomada traz algo novo: uma foto do produto montado, um depoimento de cliente, a resposta a uma dúvida comum, uma condição que mudou.",
        "Antes de encerrar como perdido, pergunte o motivo. \"Achou mais barato\", \"desistiu por agora\" e \"o prazo não serve\" pedem respostas diferentes e, somados no fim do mês, mostram o que ajustar na oferta. Quem não comprou ainda pode virar público de remarketing nos anúncios.",
      ],
    },
    {
      titulo: "Como saber se o atendimento está vendendo?",
      paragrafos: [
        "Uma vez por semana, olhe quatro números por origem: conversas recebidas, tempo médio da primeira resposta, conversas que viraram orçamento e orçamentos que viraram venda. Uma planilha resolve no começo. Se o tempo de resposta cai e a passagem pra orçamento sobe, o atendimento está fazendo a parte dele, e aí faz sentido aumentar a verba dos anúncios.",
      ],
    },
  ],
  faq: [
    {
      p: "Posso vender pelo WhatsApp pessoal?",
      r: "Pode, mas o WhatsApp Business é gratuito e traz mensagem de saudação, mensagem de ausência, respostas rápidas, etiquetas e catálogo. Pra empresa que recebe lead de anúncio, essas ferramentas fazem falta no dia a dia.",
    },
    {
      p: "Qual o tempo ideal de resposta no WhatsApp?",
      r: "O mais curto que o time conseguir manter, inclusive à noite e no fim de semana. Meça o tempo da primeira resposta por período do dia pra ver onde os leads estão esperando.",
    },
    {
      p: "Como fazer o cliente voltar a responder no WhatsApp?",
      r: "Mande uma retomada com algo novo, como uma foto, um depoimento ou a resposta a uma dúvida, e termine com uma pergunta fácil. Mensagem de \"e aí, alguma novidade?\" costuma ficar sem resposta.",
    },
    {
      p: "Preciso de um chatbot no WhatsApp?",
      r: "Depende do volume e do horário em que os leads chegam. Se muita conversa fica sem resposta fora do expediente, um atendente de IA que qualifica e passa pro vendedor tende a ajudar.",
    },
  ],
  servicos: ["consultoria-de-marketing-e-vendas", "crm-ia-whatsapp", "mensuracao-e-painel"],
  publicado: "2026-11-14",
  atualizado: "2026-11-14",
  fontes: [
    { nome: "WhatsApp Business, recursos do app (saudação, ausência, respostas rápidas, etiquetas, catálogo)", url: "https://whatsappbusiness.com/products/business-app-features/" },
    { nome: "Meta for Developers: API de Conversões pra mensagens (ctwa_clid)", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/business-messaging" },
    { nome: "Harvard Business Review, mar/2011: The Short Life of Online Sales Leads", url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
  ],
};

export default post;
