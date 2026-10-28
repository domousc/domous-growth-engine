// Conteúdo das páginas avulsas: home, quanto custa, sobre e guia.
import type { Pergunta, Secao } from './servicos';

export const home = {
  titulo: 'Domous | Agência de tráfego pago e growth em João Pessoa',
  descricao:
    'A Domous é uma agência de tráfego pago e growth de João Pessoa pra empresas que querem saber quanto o marketing vende. Meta Ads, Google Ads, processo comercial, CRM com IA no WhatsApp e painel de investimento x receita.',
  h1: 'Tua empresa cresceu. Agora o marketing precisa mostrar quanto vende.',
  resposta:
    'A Domous é uma agência de tráfego pago e crescimento de João Pessoa, na Paraíba. A gente cuida do anúncio no Meta Ads e no Google Ads e também do que vem depois dele: oferta, atendimento no WhatsApp, processo comercial e medição até a venda. Já são mais de 70 empresas atendidas e mais de R$ 50 milhões em vendas geradas pros clientes.',
  // Frases que o dono de empresa fala. A resposta mostra o que a Domous faz com cada uma.
  dores: [
    {
      frase: 'Invisto todo mês e não sei quanto volta.',
      resposta: 'Cada campanha é amarrada à venda: conversa real, orçamento e pedido. Você recebe custo por cliente e receita, não alcance.',
    },
    {
      frase: 'O lead chega e o vendedor não dá conta.',
      resposta: 'Roteiro de atendimento, distribuição entre vendedores e tempo de resposta medido. Quando o volume pede, um agente de IA atende 24 horas.',
    },
    {
      frase: 'Já tive agência. Relatório bonito, venda igual.',
      resposta: 'O plano vem antes do contrato, com meta de custo por cliente no papel. O relatório começa pela venda.',
    },
    {
      frase: 'Dependo de indicação e do balcão.',
      resposta: 'Campanha pra cada público que compra, inclusive o profissional e a empresa que compram todo mês, com o WhatsApp do vendedor no botão.',
    },
  ],
  passos: [
    {
      titulo: 'Raio-X',
      texto: 'O Raio-X Domous: a gente olha teus números, tuas contas de anúncio, teu atendimento e o caminho do cliente até a venda.',
    },
    {
      titulo: 'Plano',
      texto: 'Você recebe a estrutura de campanha, a verba por canal e a meta de custo por cliente antes de qualquer real investido.',
    },
    {
      titulo: 'Estrutura',
      texto: 'Rastreio de conversa e de venda, roteiro do WhatsApp e, quando faz sentido, página e CRM.',
    },
    {
      titulo: 'Operação',
      texto: 'Campanhas no ar, otimização toda semana, número toda semana, reunião de resultado todo mês e acesso ao nosso sistema de tarefas, painéis e pautas.',
    },
  ],
  faq: [
    {
      p: 'A Domous atende empresa do meu porte?',
      r: 'A carteira da Domous vai de negócio local a empresa com várias unidades. Pra empresa maior, o trabalho junta tráfego, processo comercial e medição de venda, com a estratégia pensada pelo fundador.',
    },
    {
      p: 'Já tive agência e não deu certo. O que muda?',
      r: 'Três coisas: você vê o plano e a meta de custo por cliente antes de fechar, a gente olha o atendimento no WhatsApp junto com o anúncio, e o relatório começa por venda e receita.',
    },
    {
      p: 'As contas de anúncio ficam no nome de quem?',
      r: 'No nome da tua empresa. Conta de anúncio, pixel e dados são do cliente; a Domous trabalha com acesso de parceiro. Se um dia a parceria acabar, o histórico e as campanhas continuam contigo.',
    },
    {
      p: 'Minha empresa já tem time de marketing. Como a Domous trabalha junto?',
      r: 'Com mais comunicação, não menos. O time interno participa de mais reuniões, tem acesso ao nosso sistema de gestão de tarefas, aos painéis, aos relatórios e às pautas das reuniões, e fica num grupo de WhatsApp com a Domous. Isso é padrão em todo cliente com time próprio.',
    },
    {
      p: 'Tem prazo mínimo de contrato?',
      r: 'Sim, de 3 a 6 meses, definido no plano conforme o escopo. É o tempo de estruturar a medição, testar ângulos de criativo e escalar o que vende, e você vê o plano antes de assinar.',
    },
    {
      p: 'Meu problema é o comercial, não o anúncio. A Domous ajuda?',
      r: 'Sim. A consultoria de marketing e vendas monta oferta, matriz de objeções e roteiro de mensagens e treina o time, e o CRM com IA organiza o atendimento. Muitas vezes é o jeito mais barato de baixar o custo por cliente.',
    },
    {
      p: 'O que a Domous faz?',
      r: 'Gestão de tráfego pago (Meta Ads, Google Ads e TikTok Ads), consultoria de marketing e vendas, assessoria pra negócios locais, criação de loja virtual e assessoria de e-commerce, CRM com IA no WhatsApp e produção de conteúdo e vídeo pra redes sociais e anúncios.',
    },
    {
      p: 'Qual a melhor agência de tráfego pago em João Pessoa?',
      r: 'A melhor é a que mostra resultado num negócio parecido com o teu e fala de custo por cliente e receita. A Domous é de João Pessoa, atendeu mais de 70 empresas e publica os resultados aqui no site. Pra comparar agências, veja o guia "Como escolher uma agência de tráfego pago".',
    },
    {
      p: 'Que tipo de empresa a Domous atende?',
      r: 'Empresas com produto validado que querem crescer, principalmente as que vendem pelo WhatsApp: construtoras e incorporadoras, distribuidores e atacado, lojas de móveis e varejo de ticket alto, clínicas e consultórios, corretores e e-commerce.',
    },
    {
      p: 'A Domous atende fora de João Pessoa?',
      r: 'Sim. A sede é em João Pessoa e a gente atende empresas da Paraíba e de outros estados. Reunião presencial em João Pessoa; com o resto, tudo funciona online.',
    },
    {
      p: 'Precisa assinar contrato antes de ver o plano?',
      r: 'Não. Você vê o plano de mídia, a estrutura de campanha e a meta de custo por cliente antes de fechar.',
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
      p: 'Tem prazo mínimo de contrato?',
      r: 'Sim, de 3 a 6 meses, definido no plano conforme o escopo. É o tempo de estruturar a medição, testar ângulos de criativo e escalar o que vende, e você vê o plano antes de assinar.',
    },
    {
      p: 'As contas de anúncio ficam no nome de quem?',
      r: 'No nome da tua empresa. Conta de anúncio, pixel e dados são do cliente; a Domous trabalha com acesso de parceiro. Se um dia a parceria acabar, o histórico e as campanhas continuam contigo.',
    },
    {
      p: 'Dá pra começar com algo menor antes de fechar contrato?',
      r: 'Dá. O Raio-X Domous é o primeiro passo: análise do marketing e do comercial com plano e meta de custo por cliente. É pago, e o valor é abatido da primeira mensalidade se a empresa seguir com a Domous.',
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
      titulo: '7. As contas ficam no nome da tua empresa?',
      paragrafos: [
        'Conta de anúncio, pixel e dados precisam ser da empresa, com a agência entrando como parceira. Se a conta é da agência, o histórico vai embora junto quando a parceria acaba.',
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
        'Conta de anúncio criada no nome da agência',
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
      "A Domous faz gestão de tráfego pago no Meta Ads, Google Ads e TikTok Ads e cuida do que decide se o anúncio vira venda: landing page, oferta e roteiro comercial, presença local no Google, loja virtual, agente de IA no WhatsApp, automação, painel de resultados e conteúdo que vira criativo.",
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
    "A Domous já atendeu mais de 70 empresas e gerou mais de R$ 50 milhões em vendas pros clientes. Abaixo estão resultados de operações reais, por segmento: de uma loja de móveis que passou a faturar R$ 300 mil a mais por mês em 3 meses a uma operação imobiliária que vendeu 6 imóveis em um mês com R$ 2.900 de verba.",
};

export const autor = {
  titulo: 'Kairo Lucas, fundador e CEO da Domous | Tráfego pago e growth em João Pessoa',
  descricao:
    'Kairo Lucas é fundador e CEO da Domous, agência de tráfego pago e growth de João Pessoa. Trabalha com Meta Ads, Google Ads, e-commerce, processo comercial e automação com IA.',
  h1: 'Kairo Lucas',
  resposta:
    'Kairo Lucas é fundador e CEO da Domous, agência de tráfego pago e crescimento de João Pessoa, na Paraíba. Trabalha direto na operação: estratégia e gestão de tráfego no Meta Ads e no Google Ads, e-commerce, funis, processo comercial e automações com inteligência artificial. Assina os artigos do blog da Domous.',
  secoes: [
    {
      titulo: 'O que faz na Domous',
      paragrafos: [
        'Desenha a estratégia das contas, acompanha os números de perto e participa das decisões de verba, criativo e atendimento. A Domous já atendeu mais de 70 empresas, de negócio local a empresa com várias unidades, e gerou mais de R$ 50 milhões em vendas pros clientes.',
      ],
    },
    {
      titulo: 'Como pensa marketing',
      paragrafos: [
        'Tráfego sozinho não resolve: antes do anúncio vêm a oferta, a página, a jornada do cliente, o atendimento no WhatsApp e a operação. As métricas que importam são custo por cliente (CAC) e receita atribuída a cada campanha.',
        'No Meta Ads atual, o criativo virou a principal forma de segmentação, e a prova de cliente costuma vender mais do que a empresa falando de si mesma. Empresário quer ver resultado num negócio que ele conhece.',
      ],
    },
    {
      titulo: 'Conteúdo e entrevistas',
      paragrafos: [
        'No Instagram @kairolucas, fala de marketing e negócios pra empresários da Paraíba, com análises do marketing de empresas locais. Deu entrevista ao EFashion (TV Masterizando) sobre o erro de marketing que trava o crescimento das empresas.',
      ],
    },
  ] as Secao[],
};

// Oferta de entrada. Sem valor e sem prazo no site (decisão do Kairo, 27/10/2026):
// condições combinadas na conversa.
export const raioX = {
  titulo: 'Raio-X Domous: diagnóstico de marketing e vendas da tua empresa | Domous',
  descricao:
    'Diagnóstico de marketing e vendas feito na prática: contas de anúncio, medição, atendimento no WhatsApp, página e concorrência, com plano e meta de custo por cliente.',
  h1: 'Raio-X Domous: o retrato do teu marketing, do anúncio até a venda',
  resposta:
    'O Raio-X Domous é o primeiro passo pra trabalhar com a Domous. A gente analisa as contas de anúncio, a medição, o atendimento no WhatsApp, a página e a concorrência da tua empresa e apresenta numa reunião o que está funcionando, o que trava e o plano com meta de custo por cliente. O Raio-X é pago, e o valor é abatido da primeira mensalidade se você seguir com a Domous.',
  waTexto: 'Oi! Quero um Raio-X Domous da minha empresa.',
  frentes: [
    { titulo: 'Contas de anúncio', texto: 'Meta e Google: estrutura, criativos por ângulo, públicos, verba e custo por resultado dos últimos meses.' },
    { titulo: 'Medição', texto: 'Pixel, API de Conversões, GA4, origem do lead e a diferença entre a conversa que a plataforma reporta e a que chega de verdade.' },
    { titulo: 'Atendimento', texto: 'Teste como cliente no WhatsApp: tempo de resposta, roteiro, perguntas de qualificação e retomada de quem não respondeu.' },
    { titulo: 'Página e oferta', texto: 'A página que recebe o anúncio: argumento, prova, velocidade e caminho até o contato.' },
    { titulo: 'Concorrência', texto: 'O que os concorrentes anunciam hoje e como aparecem no Google e no Maps.' },
  ],
  entregas: [
    'Reunião de apresentação com o Kairo Lucas, fundador da Domous, presencial em João Pessoa ou online',
    'O que está funcionando, o que trava e o tamanho da oportunidade',
    'Plano com estrutura de campanha, verba por canal, ângulos de criativo e meta de custo por cliente',
    'Lista de correções em ordem de prioridade, pra fazer com a Domous ou com quem já cuida da conta',
    'Prévia do Domous Dash com os números atuais, quando houver acesso às contas',
  ],
  passos: [
    { titulo: 'Conversa', texto: 'Pelo WhatsApp ou por chamada, pra entender o momento da empresa.' },
    { titulo: 'Acessos', texto: 'Acesso de leitura às contas de anúncio e ao GA4.' },
    { titulo: 'Análise', texto: 'A gente passa pelas cinco frentes, do anúncio até a venda.' },
    { titulo: 'Apresentação', texto: 'Reunião com o Kairo Lucas: o que a gente encontrou em cada frente e o plano. Daí você decide.' },
  ],
  faq: [
    {
      p: 'Pra quem é o Raio-X Domous?',
      r: 'Pra empresa com produto validado que já investe em anúncio, ou vai investir, e vende pelo WhatsApp, pela loja ou pelo corretor. Principalmente construtoras e incorporadoras, distribuidores e atacado, varejo de ticket alto e clínicas.',
    },
    {
      p: 'Quanto custa o Raio-X?',
      r: 'O Raio-X é pago, e o valor é abatido da primeira mensalidade se a empresa seguir com a Domous. O valor depende do tamanho da operação e a gente passa na conversa.',
    },
    {
      p: 'O Raio-X é um diagnóstico de marketing?',
      r: 'É um diagnóstico de marketing e vendas feito na prática: em vez de questionário, a gente olha as contas de anúncio, a medição, o atendimento no WhatsApp, a página e a concorrência, e entrega o plano com meta de custo por cliente.',
    },
    {
      p: 'Depois do Raio-X eu sou obrigado a contratar a Domous?',
      r: 'Não. Você sai com o plano e a lista de correções e decide se segue com a Domous, com o time interno ou com quem já cuida da conta.',
    },
    {
      p: 'Já tenho agência. Faz sentido?',
      r: 'Faz. O Raio-X é justamente um olhar de fora sobre o que está acontecendo, com número e plano.',
    },
    {
      p: 'Preciso dar acesso às contas de anúncio?',
      r: 'Pra análise completa, sim, com acesso de leitura. Sem acesso, a gente analisa o que é público (anúncios ativos, página, atendimento e concorrência).',
    },
  ] as Pergunta[],
};
