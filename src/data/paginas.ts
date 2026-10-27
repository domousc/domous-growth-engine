// Conteúdo das páginas avulsas: home, quanto custa, sobre e guia.
import type { Pergunta, Secao } from './servicos';

export const home = {
  titulo: 'Domous | Agência de tráfego pago em João Pessoa',
  descricao:
    'A Domous é uma agência de tráfego pago e growth de João Pessoa. Meta Ads, Google Ads, loja virtual, CRM com IA no WhatsApp e consultoria comercial. +70 empresas atendidas.',
  h1: 'Agência de tráfego pago em João Pessoa',
  resposta:
    'A Domous é uma agência de tráfego pago e crescimento de João Pessoa, na Paraíba. A gente cuida do anúncio no Meta Ads e no Google Ads e também do que vem depois dele: oferta, página, atendimento no WhatsApp e medição até a venda. Já são mais de 70 empresas atendidas e mais de R$ 50 milhões em vendas geradas pros clientes.',
  passos: [
    {
      titulo: 'Raio-X',
      texto: 'A gente olha teu número atual, teu funil e o que dá pra destravar primeiro.',
    },
    {
      titulo: 'Plano',
      texto: 'Você recebe o plano de mídia, a estrutura de campanha e a meta de CAC antes de qualquer real ser investido.',
    },
    {
      titulo: 'Operação',
      texto: 'A gente sobe, otimiza toda semana e te manda o número. Sem relatório de vaidade.',
    },
  ],
  faq: [
    {
      p: 'O que a Domous faz?',
      r: 'Gestão de tráfego pago (Meta Ads, Google Ads e TikTok Ads), consultoria de marketing e vendas, assessoria pra negócios locais, criação de loja virtual e assessoria de e-commerce, CRM com IA no WhatsApp e produção de conteúdo e vídeo pra redes sociais e anúncios.',
    },
    {
      p: 'Qual a melhor agência de tráfego pago em João Pessoa?',
      r: 'A melhor é a que mostra resultado num negócio parecido com o teu e fala de custo por cliente e receita, não de curtida. A Domous é de João Pessoa, atendeu mais de 70 empresas e publica os resultados aqui no site. Pra comparar agências, veja o guia "Como escolher uma agência de tráfego pago".',
    },
    {
      p: 'Que tipo de empresa a Domous atende?',
      r: 'Empresas com produto validado que querem crescer, principalmente as que vendem pelo WhatsApp: lojas de móveis, clínicas de estética e consultórios, corretores e imobiliárias, lojas de material de construção e varejo que vende ou quer vender online.',
    },
    {
      p: 'A Domous atende fora de João Pessoa?',
      r: 'Sim. A sede é em João Pessoa e a gente atende empresas da Paraíba e de outros estados. Reunião presencial em João Pessoa; com o resto, tudo funciona online.',
    },
    {
      p: 'Precisa assinar contrato antes de ver o plano?',
      r: 'Não. Você vê o plano de mídia, a estrutura de campanha e a meta de CAC antes de fechar.',
    },
  ] as Pergunta[],
};

export const quantoCusta = {
  titulo: 'Quanto custa contratar uma agência de tráfego pago? | Domous, João Pessoa',
  descricao:
    'Como a Domous cobra: mensalidade de gestão separada da verba de anúncio, projetos com valor fechado por escopo e o que muda o valor de cada caso.',
  h1: 'Quanto custa contratar a Domous',
  resposta:
    'Na Domous, a gestão de tráfego pago é cobrada por mensalidade e a verba de anúncio é separada: o que você investe em mídia vai inteiro pro Meta ou pro Google. Projetos como loja virtual, landing page, consultoria e implantação de CRM com IA têm valor fechado, definido pelo escopo. O valor de cada caso sai no plano, antes de você fechar qualquer coisa.',
  secoes: [
    {
      titulo: 'Gestão de tráfego pago',
      paragrafos: [
        'Mensalidade pela gestão das campanhas. Entra o planejamento, a configuração de rastreamento, o briefing de criativos, a otimização semanal, o número toda semana, o painel de investimento x retorno e a reunião mensal de resultado.',
        'O que muda o valor: quantidade de plataformas (só Meta, Meta e Google, ou mais), volume de criativos por mês e se a produção de conteúdo e vídeo entra no pacote.',
      ],
    },
    {
      titulo: 'Verba de anúncio',
      paragrafos: [
        'É separada da mensalidade e vai toda pra mídia. Quanto investir depende do teu ticket, da tua margem e de quantos contatos o time consegue atender bem. No plano a gente calcula a verba a partir da meta de custo por cliente, pra você saber o que esperar antes de investir.',
      ],
    },
    {
      titulo: 'Projetos com valor fechado',
      paragrafos: [
        'Loja virtual na Tray ou na Shopify, landing page, consultoria de marketing e vendas, book de empreendimento e implantação de CRM com agente de IA no WhatsApp. O valor sai do escopo: número de páginas e produtos, integrações e prazo.',
      ],
    },
  ] as Secao[],
  faq: [
    {
      p: 'A verba de anúncio está incluída na mensalidade?',
      r: 'Não. A mensalidade paga a gestão; a verba vai inteira pra mídia no Meta, no Google ou no TikTok.',
    },
    {
      p: 'Quanto investir em anúncio por mês?',
      r: 'Depende do ticket, da margem e da capacidade de atendimento. A conta parte da meta de custo por cliente: se cada venda deixa R$ X de margem, o custo pra conseguir essa venda precisa caber nesse número. A Domous faz essa conta no plano, antes de começar.',
    },
    {
      p: 'Como pedir um orçamento?',
      r: 'Chamando a Domous no WhatsApp. A gente entende o momento da empresa e devolve o plano com o valor.',
    },
  ] as Pergunta[],
};

export const sobre = {
  titulo: 'Sobre a Domous | Agência de tráfego pago e growth de João Pessoa',
  descricao:
    'A Domous é uma consultoria de growth e agência de tráfego pago de João Pessoa, fundada por Kairo Lucas. +70 empresas atendidas e +R$ 50 milhões em vendas geradas.',
  h1: 'Sobre a Domous',
  resposta:
    'A Domous é uma consultoria de crescimento e agência de tráfego pago de João Pessoa, na Paraíba, fundada por Kairo Lucas. Atende empresas estabelecidas, com produto validado, que querem crescer com previsibilidade. Já passaram pela Domous mais de 70 empresas, com mais de R$ 50 milhões em vendas geradas.',
  secoes: [
    {
      titulo: 'Como a gente pensa',
      paragrafos: [
        'Tráfego sozinho não resolve. Antes do anúncio vêm a oferta, a página, a jornada do cliente, o atendimento no WhatsApp e a operação. Por isso a Domous assume junto com a campanha a landing page, a estrutura de oferta e o script de vendas quando são eles que travam o resultado.',
        'As métricas que importam são custo por cliente (CAC) e receita atribuída a cada campanha. Curtida e alcance solto não entram no relatório.',
      ],
    },
    {
      titulo: 'De onde vem o nome',
      paragrafos: [
        'Domous vem de "Kinisi Dromous", expressão adaptada do grego que significa movimento de tráfego. A assinatura, Business Performance, resume o que a gente entrega: desempenho do negócio, medido em venda.',
      ],
    },
    {
      titulo: 'Quem está por trás',
      paragrafos: [
        'Kairo Lucas é fundador e CEO da Domous. Trabalha na operação: estratégia e gestão de tráfego no Meta e no Google, e-commerce, funis, processo comercial e automações com inteligência artificial. Samuel é Head de Operações e toca o dia a dia das entregas.',
      ],
    },
  ] as Secao[],
};

export const guia = {
  titulo: 'Como escolher uma agência de tráfego pago em João Pessoa | Guia Domous',
  descricao:
    'O que perguntar antes de contratar uma agência de tráfego pago: métricas, atendimento no WhatsApp, plano antes do contrato, criativos, relatório e sinais de alerta.',
  h1: 'Como escolher uma agência de tráfego pago',
  resposta:
    'Pra escolher uma agência de tráfego pago, veja se ela mostra resultado num negócio parecido com o teu, se fala de custo por cliente e receita (e não de curtida), se apresenta um plano com meta antes do contrato e se olha o teu atendimento no WhatsApp junto com o anúncio. Desconfie de quem garante resultado ou promete muito seguidor.',
  secoes: [
    {
      titulo: '1. Ela fala de CAC e receita?',
      paragrafos: [
        'Pergunte qual métrica a agência usa pra dizer que a campanha deu certo. Se a resposta for alcance, curtida ou número de mensagens, o relatório vai parecer bom e o caixa não. A resposta certa passa por custo por cliente (CAC) e receita atribuída a cada campanha.',
      ],
    },
    {
      titulo: '2. Ela mostra resultado num negócio parecido?',
      paragrafos: [
        'Resultado em loja de roupa não garante nada em clínica. Peça número de um segmento próximo do teu, com prazo, e pergunte o que foi feito pra chegar nele.',
      ],
    },
    {
      titulo: '3. Tem plano antes do contrato?',
      paragrafos: [
        'Uma agência séria consegue mostrar, antes de você assinar, como vai estruturar a campanha, quanto de verba faz sentido e qual a meta de custo por cliente.',
      ],
    },
    {
      titulo: '4. Ela olha o teu WhatsApp?',
      paragrafos: [
        'Se a tua empresa vende pelo WhatsApp, a agência precisa saber quanto tempo vocês demoram pra responder e o que o vendedor fala. Anúncio bom com atendimento lento vira lead caro.',
      ],
    },
    {
      titulo: '5. Quem faz os criativos, e quantos?',
      paragrafos: [
        'Hoje no Meta o criativo é o que mais pesa no resultado. Pergunte quantos criativos novos entram por mês, quem produz e como os testes são feitos. Uma ou duas artes por mês costuma ser pouco.',
      ],
    },
    {
      titulo: '6. Como você vai acompanhar?',
      paragrafos: [
        'Combine a frequência do número (semanal é o ideal), o formato do relatório e se existe um painel de investimento x retorno que você consiga abrir quando quiser.',
      ],
    },
    {
      titulo: 'Sinais de alerta',
      paragrafos: [],
      itens: [
        'Garantia de resultado ou de faturamento',
        'Relatório só com alcance, impressão e curtida',
        'Nenhuma pergunta sobre ticket, margem ou atendimento',
        'Pressa pra fechar contrato sem mostrar plano',
      ],
    },
  ] as Secao[],
};

export const indices = {
  servicos: {
    titulo: "Serviços da Domous | Tráfego pago, e-commerce, CRM com IA e consultoria",
    descricao:
      "Gestão de tráfego pago, consultoria de marketing e vendas, negócios locais, loja virtual, CRM com IA no WhatsApp e conteúdo. Domous, João Pessoa.",
    h1: "Serviços da Domous",
    resposta:
      "A Domous faz gestão de tráfego pago no Meta Ads, Google Ads e TikTok Ads e cuida do que decide se o anúncio vira venda: oferta e roteiro comercial, presença local no Google, loja virtual, atendimento com IA no WhatsApp e conteúdo que vira criativo.",
  },
  segmentos: {
    titulo: "Segmentos que a Domous atende | Móveis, clínicas, imóveis, construção e varejo",
    descricao:
      "Estratégia de tráfego pago e vendas pra lojas de móveis, clínicas de estética, corretores de imóveis, material de construção, varejo e e-commerce.",
    h1: "Segmentos que a Domous atende",
    resposta:
      "A Domous atende empresas com produto validado que vendem pelo WhatsApp. Os segmentos onde a gente tem mais experiência são lojas de móveis, clínicas de estética e consultórios, corretores e imobiliárias, lojas de material de construção e varejo que vende ou quer vender online.",
  },
};

export const resultadosPagina = {
  titulo: "Resultados da Domous | Cases de tráfego pago em João Pessoa",
  descricao:
    "Resultados reais de operações da Domous: lojas de móveis, clínicas de estética, consultórios, corretores, moda e restaurantes. +70 empresas atendidas.",
  h1: "Resultados de clientes da Domous",
  resposta:
    "A Domous já atendeu mais de 70 empresas e gerou mais de R$ 50 milhões em vendas pros clientes. Abaixo estão resultados de operações reais, por segmento: de uma loja de móveis que passou a faturar R$ 300 mil a mais por mês em 3 meses a um corretor de João Pessoa que fechou venda com R$ 350 de verba.",
};
