// Páginas de segmento do ICP. Mesmo formato das páginas de serviço.
// As duas primeiras falam com o ICP principal (empresas acima de R$ 1 milhão/mês).
// Regra: nenhum cliente é citado nem ligado a resultado. Case só por segmento.
import type { Pagina } from './servicos';

export const segmentos: Pagina[] = [
  {
    slug: 'construtoras-e-incorporadoras',
    nome: 'Construtoras e incorporadoras',
    titulo: 'Marketing para construtoras e incorporadoras em João Pessoa | Domous',
    h1: 'Marketing e vendas para construtoras e incorporadoras',
    descricao:
      'Tráfego pago, atendimento do lead e medição até a venda pra lançamento e estoque: custo por venda, lead que vira visita e corretor que responde rápido.',
    resposta:
      'A Domous trabalha com construtoras e incorporadoras acompanhando o lead do anúncio até a assinatura: campanha por empreendimento e por perfil de comprador, lead entregue rápido pro corretor certo e medição de quantos contatos viraram visita, proposta e venda. A pergunta que guia o trabalho é quanto custa cada venda, e não quanto custa cada lead.',
    waTexto: 'Oi! Sou de uma construtora e quero entender como a Domous mede o que o marketing vende.',
    secoes: [
      {
        titulo: 'Onde o marketing de construtora costuma perder dinheiro',
        paragrafos: [
          'Lead imobiliário barato é fácil de conseguir e quase sempre vem cheio de curioso. O corretor diz que o lead é ruim, o marketing diz que o corretor não atende, e ninguém consegue provar nada porque o caminho entre o cadastro e a assinatura não é registrado.',
          'No meio disso tem o comprador que mora fora da Paraíba, o investidor que decide pelo celular e o lead que chegou num sábado à noite e só foi respondido na segunda. Cada um desses é venda que a verba pagou e o processo deixou escapar.',
        ],
      },
      {
        titulo: 'O que a gente faz',
        paragrafos: [],
        itens: [
          'Campanhas por empreendimento, por fase (pré-lançamento, lançamento e estoque) e por perfil de comprador: quem vai morar, quem vai investir e quem compra de outro estado',
          'Segmentação por região e por CEP de alta renda quando o produto pede',
          'Book do empreendimento: estrutura, curadoria das imagens que a construtora já tem, textos de venda e diagramação',
          'Distribuição do lead e roteiro de qualificação no WhatsApp pro corretor: renda, entrada, prazo e interesse',
          'Registro da origem de cada venda e envio da venda de volta pro Meta e pro Google, pra plataforma buscar mais gente parecida com quem comprou',
          'Painel com custo por lead qualificado, por visita e por venda, separado por empreendimento',
        ],
      },
      {
        titulo: 'Os números que a gente acompanha com a construtora',
        paragrafos: [
          'Custo por lead qualificado, taxa de lead que vira visita, de visita que vira proposta e de proposta que vira venda, tempo de resposta do corretor e venda por canal (time próprio, imobiliária parceira e digital). Com isso dá pra saber onde a verba rende e onde o problema está no atendimento.',
        ],
      },
    ],
    resultados: ['imoveis-6-vendas'],
    faq: [
      {
        p: 'Agência de tráfego pago serve pra construtora de grande porte?',
        r: 'Serve quando ela trabalha junto com o processo de venda. Anúncio sozinho gera cadastro; o que gera venda é campanha certa pro perfil de comprador, lead entregue rápido pro corretor e medição até a assinatura. É assim que a Domous trabalha com construtora.',
      },
      {
        p: 'Como saber quantas vendas de um lançamento vieram do marketing?',
        r: 'Registrando a origem de cada lead e cruzando com as vendas. A Domous organiza esse registro com o time comercial e manda as vendas de volta pras plataformas de anúncio, o que também melhora a qualidade dos próximos leads.',
      },
      {
        p: 'Como lidar com o lead que o corretor diz que é ruim?',
        r: 'Com dado. Quando a origem e o andamento de cada lead ficam registrados, dá pra ver se o problema está na campanha (perfil errado) ou no atendimento (demora, falta de retorno). Os dois têm solução diferente.',
      },
      {
        p: 'Minha empresa já tem time de marketing. Como a Domous trabalha junto?',
        r: 'Com mais comunicação, não menos. O time interno participa de mais reuniões, tem acesso ao nosso sistema de gestão de tarefas, aos painéis, aos relatórios e às pautas das reuniões, e fica num grupo de WhatsApp com a Domous. Isso é padrão em todo cliente com time próprio.',
      },
      {
        p: 'A Domous faz fotografia e render do empreendimento?',
        r: 'Não. A Domous monta o book em cima das fotos, renders e plantas que a construtora já tem. Fotografia e render ficam com estúdio parceiro.',
      },
    ],
  },
  {
    slug: 'distribuidores-e-atacado',
    nome: 'Distribuidores e atacado',
    titulo: 'Marketing para distribuidores, atacado e varejo de material de construção | Domous',
    h1: 'Marketing e vendas para distribuidores e atacado',
    descricao:
      'Campanha separada pra consumidor final e pra profissional e empresa, vendedor no WhatsApp com processo e medição de quanto o digital vende de verdade.',
    resposta:
      'A Domous trabalha com distribuidores, atacadistas e varejo grande de material elétrico, hidráulico e de construção separando o que quase todo mundo mistura: o consumidor final que reforma a casa e o profissional ou a empresa que compra todo mês. Cada público ganha campanha, oferta e atendimento próprios no WhatsApp, e a medição mostra quanto do faturamento veio do digital.',
    waTexto: 'Oi! Sou de um distribuidor e quero entender quanto o digital pode vender pra gente.',
    secoes: [
      {
        titulo: 'Por que o marketing de distribuidor costuma render pouco',
        paragrafos: [
          'A mesma campanha fala com quem vai trocar um chuveiro e com o eletricista que compra toda semana. O vendedor responde por ordem de chegada, sem saber quem é cliente grande. A venda fecha no WhatsApp ou no balcão e desaparece do relatório. E a empresa com várias unidades aparece na internet como se fosse uma loja só, brigando por preço com home center e marketplace.',
        ],
      },
      {
        titulo: 'O que a gente faz',
        paragrafos: [],
        itens: [
          'Campanhas separadas pra consumidor final e pra profissional e empresa (eletricista, instalador, empreiteiro, construtora, condomínio)',
          'Google Ads pra quem procura produto, marca e categoria com intenção de compra na região',
          'O vendedor como anúncio: vídeo curto resolvendo problema de obra, com o WhatsApp dele no botão',
          'WhatsApp com distribuição entre vendedores, orçamento pela foto da lista e meta de tempo de resposta',
          'Processo comercial pro atacado: lista de empresas, cadência de contato, CRM e proposta',
          'Perfil da Empresa no Google por unidade e rotina de avaliações',
          'Medição de conversas reais e pedidos por campanha, cruzando com o que o ERP registra',
        ],
      },
      {
        titulo: 'Preço não precisa ser o centro',
        paragrafos: [
          'Quem compete só por preço perde pro celular do cliente. O que um distribuidor tem e o marketplace não tem é vendedor que entende de obra, entrega rápida na região e condição pro profissional. A comunicação passa a vender isso, e a oferta de preço entra como apoio.',
        ],
      },
    ],
    resultados: [],
    faq: [
      {
        p: 'Como saber quanto o anúncio vende se o pedido fecha no WhatsApp ou no balcão?',
        r: 'Registrando a origem da conversa e do pedido. A Domous usa a API oficial do WhatsApp e a API de Conversões pra contar conversa real (e não só a que a plataforma reporta) e cruza com os pedidos pra chegar no custo por cliente.',
      },
      {
        p: 'Vale anunciar pra profissional e empresa (PJ)?',
        r: 'Normalmente é o público que mais vale: compra com frequência, indica e tem ticket somado alto. Ele pede campanha, oferta e atendimento diferentes do consumidor final.',
      },
      {
        p: 'Minha empresa já tem time de marketing. Como a Domous trabalha junto?',
        r: 'Com mais comunicação, não menos. O time interno participa de mais reuniões, tem acesso ao nosso sistema de gestão de tarefas, aos painéis, aos relatórios e às pautas das reuniões, e fica num grupo de WhatsApp com a Domous. Isso é padrão em todo cliente com time próprio.',
      },
      {
        p: 'Distribuidor precisa de loja virtual?',
        r: 'Não necessariamente. Muitos vendem bem com catálogo e WhatsApp. A loja virtual entra quando o mix e a logística permitem vender fora da região ou quando o cliente quer comprar sem falar com vendedor.',
      },
    ],
  },
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
      'A Domous faz anúncio pra corretores de imóveis, imobiliárias e lançamentos com foco em lead qualificado: segmentação por região e renda, criativo por empreendimento e um atendimento no WhatsApp que separa curioso de comprador. Numa operação imobiliária atendida pela Domous, foram 6 imóveis vendidos em um mês com R$ 2.900 de verba; num corretor de João Pessoa, uma venda saiu com R$ 350.',
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
    resultados: ['imoveis-6-vendas', 'corretor-de-imoveis'],
    faq: [
      {
        p: 'Quanto um corretor precisa investir em anúncio?',
        r: 'Depende do valor do imóvel e de quantos contatos o corretor consegue atender bem. Numa operação imobiliária atendida pela Domous, R$ 2.900 de verba renderam 6 imóveis vendidos em um mês, o que mostra que a conta fecha quando a segmentação e o atendimento estão certos.',
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
