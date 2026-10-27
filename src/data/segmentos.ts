// Páginas de segmento do ICP. Mesmo formato das páginas de serviço.
import type { Pagina } from './servicos';

export const segmentos: Pagina[] = [
  {
    slug: 'lojas-de-moveis',
    nome: 'Lojas de móveis',
    titulo: 'Marketing e tráfego pago para lojas de móveis | Domous, João Pessoa',
    h1: 'Marketing e tráfego pago para lojas de móveis',
    descricao:
      'Como a Domous faz anúncio pra loja de móveis: criativo por ambiente, região de alta renda, WhatsApp com roteiro de venda e medição até o pedido fechado.',
    resposta:
      'A Domous faz tráfego pago pra lojas de móveis anunciando por ambiente e por produto (sala, quarto, mesa, estofado, guarda-roupa), direcionando pra bairros e CEPs com o perfil de quem compra e organizando o atendimento no WhatsApp pra levar o cliente até a loja ou até o pedido. Numa loja de móveis atendida pela Domous, o faturamento subiu R$ 300 mil por mês em 3 meses.',
    waTexto: 'Oi! Tenho uma loja de móveis e quero vender mais.',
    secoes: [
      {
        titulo: 'Como o cliente de móveis compra',
        paragrafos: [
          'Móvel é compra pensada, de ticket alto, quase sempre discutida em casal. O cliente vê o anúncio, salva, pergunta preço e medida no WhatsApp e, muitas vezes, só fecha depois de ver a peça na loja. Campanha que mede só mensagem recebida perde essa história toda.',
        ],
      },
      {
        titulo: 'O que a gente faz numa loja de móveis',
        paragrafos: [],
        itens: [
          'Criativos por ambiente e por linha de produto, com preço ou condição quando ajuda a filtrar',
          'Segmentação por região e por CEP de alta renda pros produtos de ticket maior',
          'Google Ads pra quem já está procurando ("loja de móveis em João Pessoa", "guarda-roupa planejado")',
          'Roteiro de atendimento no WhatsApp: medida, prazo de entrega, montagem, pagamento e convite pra loja',
          'Medição de venda por campanha, inclusive a que fecha no balcão depois da conversa',
        ],
      },
    ],
    resultados: ['loja-de-moveis'],
    faq: [
      {
        p: 'Anúncio de loja de móveis funciona melhor no Instagram ou no Google?',
        r: 'Os dois têm papel diferente. O Instagram mostra o produto pra quem ainda não estava procurando e funciona muito bem com foto de ambiente. O Google pega quem já está pesquisando um móvel específico. A divisão de verba sai do custo por venda de cada canal.',
      },
      {
        p: 'Dá pra medir a venda que fecha na loja física?',
        r: 'Dá, com processo: registrar de onde veio cada cliente no atendimento e cruzar com as campanhas. Sem isso, a loja enxerga só mensagem e não sabe qual anúncio vendeu.',
      },
    ],
  },
  {
    slug: 'clinicas-de-estetica',
    nome: 'Clínicas de estética',
    titulo: 'Tráfego pago para clínicas de estética e consultórios em João Pessoa | Domous',
    h1: 'Tráfego pago para clínicas de estética e consultórios',
    descricao:
      'Anúncios pra clínicas de estética, dermatologia e odontologia dentro das regras de publicidade dos conselhos, com agenda pelo WhatsApp e controle de comparecimento.',
    resposta:
      'A Domous faz tráfego pago pra clínicas de estética, dermatologia e consultórios odontológicos com foco em agenda cheia e paciente que comparece, sempre dentro das regras de publicidade do CFM e do CFO, sem promessa de resultado. Numa clínica de estética atendida pela Domous, o faturamento subiu 130% em 3 meses; num consultório odontológico, o agendamento saiu a R$ 18 com 87% de comparecimento.',
    waTexto: 'Oi! Tenho uma clínica e quero encher a agenda.',
    secoes: [
      {
        titulo: 'Publicidade de saúde tem regra',
        paragrafos: [
          'Médicos e dentistas seguem as normas de publicidade dos conselhos de classe. Isso muda o que pode aparecer no anúncio e na legenda: nada de promessa de resultado, cuidado com antes e depois e com o jeito de falar de procedimento. A gente escreve copy e roteiro já dentro dessas regras, porque anúncio reprovado ou denunciado custa mais caro do que anúncio fraco.',
        ],
      },
      {
        titulo: 'O que a gente faz numa clínica',
        paragrafos: [],
        itens: [
          'Campanhas por procedimento e por público, com a região de atendimento definida',
          'Conteúdo e criativo educativo, com o profissional como autoridade',
          'Script de agendamento no WhatsApp e confirmação antes da consulta',
          'Acompanhamento de custo por agendamento, comparecimento e faturamento',
          'Perfil da Empresa no Google com avaliações de pacientes',
        ],
      },
    ],
    resultados: ['clinica-de-estetica', 'consultorio-odontologico'],
    faq: [
      {
        p: 'Clínica pode anunciar no Instagram?',
        r: 'Pode, seguindo as regras de publicidade do conselho de classe do profissional (CFM pra médicos, CFO pra dentistas). O anúncio não pode prometer resultado e precisa de cuidado com imagens de procedimento.',
      },
      {
        p: 'Como diminuir falta de paciente agendado pelo anúncio?',
        r: 'Confirmação no WhatsApp antes da consulta, lembrete no dia e agendamento feito com data próxima. No consultório odontológico dos resultados acima, o comparecimento ficou em 87%.',
      },
    ],
  },
  {
    slug: 'corretores-de-imoveis',
    nome: 'Corretores e imobiliárias',
    titulo: 'Anúncios para corretores de imóveis e imobiliárias em João Pessoa | Domous',
    h1: 'Anúncios para corretores de imóveis e imobiliárias',
    descricao:
      'Tráfego pago pra corretor e imobiliária: lead qualificado por região e renda, book do empreendimento e atendimento no WhatsApp. Domous, João Pessoa.',
    resposta:
      'A Domous faz anúncio pra corretores de imóveis, imobiliárias e lançamentos com foco em lead qualificado: segmentação por região e renda, criativo por empreendimento e um atendimento no WhatsApp que separa curioso de comprador. Um corretor de João Pessoa atendido pela Domous fechou uma venda com R$ 350 de verba de mídia.',
    waTexto: 'Oi! Sou corretor e quero anunciar meus imóveis.',
    secoes: [
      {
        titulo: 'O problema do lead imobiliário',
        paragrafos: [
          'Anúncio de imóvel traz muito contato barato e pouco comprador. A conta só fecha quando a campanha filtra por renda e momento de compra e quando o corretor responde rápido, com as perguntas certas pra qualificar.',
        ],
      },
      {
        titulo: 'O que a gente faz',
        paragrafos: [],
        itens: [
          'Campanhas por empreendimento ou por perfil de imóvel',
          'Segmentação por região e por CEP de alta renda',
          'Book do empreendimento: estrutura, curadoria das imagens que o cliente já tem, textos e diagramação',
          'Roteiro de qualificação no WhatsApp: renda, entrada, prazo e região',
          'Landing page do imóvel quando o projeto pede',
        ],
      },
    ],
    resultados: ['corretor-de-imoveis'],
    faq: [
      {
        p: 'Quanto um corretor precisa investir em anúncio?',
        r: 'Depende do valor do imóvel e de quantos contatos o corretor consegue atender bem. Um corretor de João Pessoa atendido pela Domous fechou venda com R$ 350 de verba, o que mostra que verba pequena funciona quando a segmentação e o atendimento estão certos.',
      },
      {
        p: 'A Domous faz as fotos e renders do empreendimento?',
        r: 'Não. A Domous monta o book em cima das fotos, renders e plantas que o cliente já tem. Fotografia e render ficam com estúdio parceiro.',
      },
    ],
  },
  {
    slug: 'material-de-construcao',
    nome: 'Material de construção',
    titulo: 'Marketing para lojas de material de construção | Domous, João Pessoa',
    h1: 'Marketing e tráfego pago para lojas de material de construção',
    descricao:
      'Anúncio local, Google Maps e orçamento pelo WhatsApp pra lojas de material de construção, falando com quem está em obra e com o profissional que compra todo mês.',
    resposta:
      'A Domous faz marketing pra lojas de material de construção falando com dois públicos: quem está construindo ou reformando e o profissional (pedreiro, mestre de obras, arquiteto) que compra com frequência. A estratégia junta anúncio na região da loja, presença forte no Google Maps e um fluxo de orçamento no WhatsApp que responde rápido, porque quem está em obra compra de quem responde primeiro.',
    waTexto: 'Oi! Tenho uma loja de material de construção e quero vender mais.',
    secoes: [
      {
        titulo: 'Como a gente trabalha',
        paragrafos: [
          'Loja de construção vende muito por proximidade e por relação. O anúncio precisa alcançar quem está em obra perto da loja, e o atendimento precisa devolver orçamento rápido.',
        ],
        itens: [
          'Anúncios por raio e bairro, com ofertas e categorias que puxam visita',
          'Google Ads e Perfil da Empresa no Google pra quem busca "material de construção perto de mim"',
          'Fluxo de orçamento no WhatsApp, com agente de IA quando o volume é alto',
          'Relacionamento com o profissional que compra todo mês',
          'Loja virtual ou catálogo online pra quem quer vender fora do balcão',
        ],
      },
    ],
    resultados: [],
    faq: [
      {
        p: 'Loja de material de construção precisa de site?',
        r: 'Precisa principalmente do Perfil da Empresa no Google bem feito e de um WhatsApp que responde rápido. Loja virtual entra quando a loja quer vender fora da região ou tem linha de produto que se vende sozinha online.',
      },
    ],
  },
  {
    slug: 'varejo-e-ecommerce',
    nome: 'Varejo e e-commerce',
    titulo: 'Tráfego pago para varejo e e-commerce em João Pessoa | Domous',
    h1: 'Tráfego pago para varejo e e-commerce',
    descricao:
      'Google Shopping, Performance Max, catálogo no Meta e conversão do site pra lojas que vendem online ou querem começar a vender. Domous, João Pessoa.',
    resposta:
      'A Domous faz tráfego pago pra varejo e e-commerce com Google Shopping, Performance Max e anúncios de catálogo no Meta, olhando junto a taxa de conversão do site, o frete e o ticket médio. Numa loja de moda atendida pela Domous, a conversão do site foi de 2,1% pra 3,4% e o ticket médio de R$ 187 pra R$ 221.',
    waTexto: 'Oi! Tenho um e-commerce e quero vender mais.',
    secoes: [
      {
        titulo: 'O que a gente faz',
        paragrafos: [
          'Em e-commerce, metade do resultado está fora do anúncio: preço, frete, prazo, página de produto e checkout. Por isso a gestão de tráfego vem junto com a leitura do site.',
        ],
        itens: [
          'Google Shopping e Performance Max com Merchant Center',
          'Anúncios de catálogo e criativos por coleção no Meta',
          'Kits e combos pra subir ticket médio',
          'Análise de conversão com GA4 e gravação de sessão',
          'Integração com marketplaces, criação de loja na Tray ou na Shopify',
        ],
      },
    ],
    resultados: ['loja-de-moda'],
    faq: [
      {
        p: 'Qual a diferença entre Google Shopping e Performance Max?',
        r: 'Shopping mostra o produto com foto e preço na pesquisa do Google. Performance Max é uma campanha automática que usa o mesmo catálogo e distribui o anúncio em Pesquisa, YouTube, Gmail, Display e Maps. Pra e-commerce, as duas dependem de um catálogo bem cadastrado no Merchant Center.',
      },
    ],
  },
];
