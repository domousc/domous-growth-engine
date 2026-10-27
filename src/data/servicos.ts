// Páginas de serviço. Cada uma abre com `resposta`: o parágrafo que responde a
// pergunta do título em poucas frases, que é o trecho que Google e IA costumam citar.

export type Secao = { titulo: string; paragrafos: string[]; itens?: string[] };
export type Pergunta = { p: string; r: string };

export type Pagina = {
  slug: string;
  nome: string;
  titulo: string;
  h1: string;
  descricao: string;
  resposta: string;
  imagem?: string;
  waTexto: string;
  secoes: Secao[];
  resultados: string[];
  faq: Pergunta[];
};

export const servicos: Pagina[] = [
  {
    slug: 'trafego-pago',
    nome: 'Tráfego pago',
    titulo: 'Gestão de tráfego pago em João Pessoa | Meta Ads e Google Ads | Domous',
    h1: 'Gestão de tráfego pago em João Pessoa',
    descricao:
      'A Domous faz gestão de tráfego pago no Meta Ads, Google Ads e TikTok Ads pra empresas de João Pessoa e de todo o Brasil, medindo CAC e receita do clique até a venda.',
    resposta:
      'A Domous é uma agência de tráfego pago de João Pessoa que gerencia campanhas no Meta Ads (Instagram e Facebook), Google Ads e TikTok Ads. A gente mede o que entra no caixa: custo por cliente (CAC) e receita atribuída a cada campanha, acompanhando o lead do clique até o fechamento no WhatsApp ou no site.',
    waTexto: 'Oi! Quero falar sobre tráfego pago pra minha empresa.',
    secoes: [
      {
        titulo: 'O que entra na gestão',
        paragrafos: [
          'Antes de subir qualquer campanha você recebe o plano: estrutura de campanha, distribuição de verba por canal e a meta de CAC. Depois que a conta roda, a otimização é semanal e você recebe o número toda semana.',
        ],
        itens: [
          'Meta Ads (Instagram e Facebook), Google Ads (Pesquisa, Performance Max e Shopping com Merchant Center) e TikTok Ads',
          'Briefing de criativos por ângulo: de 6 a 12 criativos por mês, testando de 3 a 5 ângulos diferentes',
          'Configuração de rastreamento: pixel, API de Conversões, GA4 e Google Tag Manager',
          'Segmentação por região e por CEP de alta renda quando o produto pede',
          'Painel de investimento x retorno com link fixo e relatório mensal em reunião',
        ],
      },
      {
        titulo: 'Por que a gente olha pro WhatsApp e não só pro anúncio',
        paragrafos: [
          'A maior parte das empresas que a gente atende vende pelo WhatsApp. É comum o Meta reportar um número de conversas e a empresa receber bem menos mensagens de verdade, ou receber as mensagens e não fechar. Por isso a gente cruza conversa reportada com conversa real, usa a API oficial do WhatsApp com a API de Conversões quando faz sentido e olha o script de atendimento junto com a campanha.',
          'Tráfego sozinho não resolve. Se a oferta, a página ou o atendimento travam, mais verba só deixa o problema mais caro. Quando a gente encontra o gargalo fora do anúncio, fala na hora e ajuda a resolver.',
        ],
      },
      {
        titulo: 'Como a gente usa criativo no Meta Ads hoje',
        paragrafos: [
          'Com o algoritmo atual do Meta, o criativo virou a principal forma de segmentação: é ele que diz pra plataforma com quem conversar. Então em vez de apertar público, a gente varia persona e ângulo no criativo, otimiza pra resultado e testa um ângulo de cada vez até achar o que puxa venda. As métricas que guiam a decisão são taxa de parada no vídeo (thumbstop), CTR e custo por resultado, sempre amarradas à venda.',
        ],
      },
    ],
    resultados: ['loja-de-moveis', 'clinica-de-estetica', 'corretor-de-imoveis'],
    faq: [
      {
        p: 'O que faz uma agência de tráfego pago?',
        r: 'Planeja, cria e gerencia anúncios pagos em plataformas como Meta Ads, Google Ads e TikTok Ads pra gerar contatos e vendas. Na Domous isso inclui o rastreamento, o briefing de criativos, a otimização semanal e a leitura de CAC e receita, olhando também página e atendimento.',
      },
      {
        p: 'Vale mais a pena anunciar no Instagram ou no Google?',
        r: 'Depende de como teu cliente compra. Google pega quem já está procurando (ex.: "loja de móveis em João Pessoa"); Meta cria demanda em quem ainda não estava procurando. A maioria das empresas que a gente atende usa os dois, com a verba dividida pelo CAC de cada canal.',
      },
      {
        p: 'Em quanto tempo o tráfego pago dá resultado?',
        r: 'Os primeiros contatos chegam nos primeiros dias de campanha. Resultado consistente depende de teste de criativo e ajuste de atendimento; nos resultados publicados aqui no site, os ganhos maiores vieram em 3 meses de operação.',
      },
      {
        p: 'A Domous atende só empresas de João Pessoa?',
        r: 'Não. A sede é em João Pessoa e a gente atende empresas da Paraíba e de outros estados. Pra quem é de João Pessoa dá pra fazer reunião presencial; com o resto, tudo funciona online.',
      },
      {
        p: 'Como eu acompanho o que está acontecendo com meu dinheiro?',
        r: 'Você recebe o número toda semana, uma reunião mensal com relatório e um painel com link fixo mostrando investimento e retorno. Métrica de vaidade (curtida, alcance solto) não entra na conversa.',
      },
    ],
  },
  {
    slug: 'consultoria-de-marketing-e-vendas',
    nome: 'Consultoria de marketing e vendas',
    titulo: 'Consultoria de marketing e vendas em João Pessoa | Domous',
    h1: 'Consultoria de marketing e vendas',
    descricao:
      'Mapeamento de cliente ideal, oferta, objeções e roteiro de mensagens no WhatsApp, com treinamento do time comercial. Consultoria da Domous em João Pessoa.',
    resposta:
      'A consultoria de marketing e vendas da Domous organiza o que vem antes e depois do anúncio: quem é o cliente ideal, qual oferta apresentar, quais objeções aparecem e o que o vendedor responde no WhatsApp. Termina com o time comercial treinado e um roteiro de mensagens pronto pra usar.',
    waTexto: 'Oi! Quero falar sobre consultoria de marketing e vendas.',
    secoes: [
      {
        titulo: 'O que a gente entrega',
        paragrafos: [
          'É o trabalho pra empresa que já gera contato mas sente que vende menos do que devia, ou que quer investir mais em anúncio e precisa ter certeza de que o comercial aguenta o volume.',
        ],
        itens: [
          'Mapa do cliente ideal (ICP): quem compra mais, mais rápido e com melhor margem',
          'Estrutura de oferta: o que apresentar, em que ordem e com qual argumento',
          'Matriz de objeções com a resposta de cada uma',
          'Roteiro de mensagens pro WhatsApp, do primeiro contato ao fechamento e ao pós-venda',
          'Landing page e funil quando a página atual derruba a conversão',
          'Treinamento do time comercial em cima do roteiro',
        ],
      },
      {
        titulo: 'Por que isso vem antes de aumentar a verba',
        paragrafos: [
          'Anúncio traz gente pra conversa; quem fecha é a oferta e o atendimento. Quando a resposta demora, quando o vendedor manda preço seco ou quando a página não explica o produto, a empresa paga caro por lead e culpa o tráfego. Ajustar isso costuma ser o jeito mais barato de baixar o CAC.',
        ],
      },
    ],
    resultados: ['consultorio-odontologico', 'loja-de-moda'],
    faq: [
      {
        p: 'Qual a diferença entre consultoria e gestão de tráfego?',
        r: 'Na gestão de tráfego a Domous opera as campanhas todo mês. Na consultoria o foco é oferta, roteiro de vendas e treinamento do time, pra empresa converter melhor os contatos que já tem ou que vão chegar com o anúncio. Dá pra contratar as duas juntas.',
      },
      {
        p: 'A consultoria serve pra empresa que vende pelo WhatsApp?',
        r: 'É pra ela principalmente. O roteiro de mensagens e a matriz de objeções são pensados pro atendimento no WhatsApp, que é onde a maior parte dos clientes da Domous fecha venda.',
      },
      {
        p: 'Vocês fazem landing page?',
        r: 'Sim. Quando a página é o que trava a conversão, a gente assume a landing page, a estrutura da oferta e o script de vendas junto com a campanha.',
      },
    ],
  },
  {
    slug: 'negocios-locais',
    nome: 'Negócios locais',
    titulo: 'Marketing para negócios locais em João Pessoa | Agenda pelo WhatsApp | Domous',
    h1: 'Assessoria de marketing para negócios locais',
    descricao:
      'Pra clínica, consultório, loja e serviço local em João Pessoa: anúncio pra região, Perfil da Empresa no Google otimizado e script de agendamento no WhatsApp.',
    resposta:
      'A assessoria pra negócios locais da Domous enche a agenda de clínicas, consultórios, lojas físicas e serviços de bairro em João Pessoa e região. Junta três coisas: anúncio direcionado pra quem mora perto, Perfil da Empresa no Google bem montado e um script de agendamento no WhatsApp que transforma conversa em horário marcado.',
    waTexto: 'Oi! Tenho um negócio local e quero encher a agenda.',
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [
          'Negócio local perde cliente em três lugares: quando não aparece no Google Maps, quando o anúncio fala com a cidade inteira em vez do bairro certo e quando a mensagem no WhatsApp fica sem resposta. A assessoria cuida dos três.',
        ],
        itens: [
          'Anúncios no Meta e no Google com raio e bairros definidos',
          'Perfil da Empresa no Google otimizado: categoria, serviços, fotos, posts e rotina de avaliações',
          'Script de agendamento e confirmação no WhatsApp',
          'Lembrete pra reduzir falta no horário marcado',
          'Acompanhamento de custo por agendamento e taxa de comparecimento',
        ],
      },
    ],
    resultados: ['consultorio-odontologico', 'clinica-de-estetica', 'restaurante'],
    faq: [
      {
        p: 'Como aparecer no Google Maps em João Pessoa?',
        r: 'O principal é ter o Perfil da Empresa no Google completo: categoria certa, serviços cadastrados, fotos reais, horário, posts frequentes e avaliações de clientes respondidas. Distância de quem busca e relevância das avaliações pesam muito no resultado.',
      },
      {
        p: 'Qual métrica importa pra negócio local?',
        r: 'Custo por agendamento e taxa de comparecimento. Mensagem que não vira horário marcado, e horário que vira falta, não paga o anúncio.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    nome: 'E-commerce e loja virtual',
    titulo: 'Criação de loja virtual e assessoria de e-commerce em João Pessoa | Tray e Shopify | Domous',
    h1: 'Loja virtual e assessoria de e-commerce',
    descricao:
      'A Domous cria lojas virtuais na Tray e na Shopify com ERP, marketplace, checkout e frete integrados, e faz assessoria de e-commerce: catálogo, preço, kits, logística e conversão.',
    resposta:
      'A Domous cria lojas virtuais na Tray e na Shopify prontas pra vender no primeiro dia, com ERP, marketplaces, checkout e frete integrados. Pra quem já tem loja, a assessoria de e-commerce trabalha catálogo, preço, kits, logística e taxa de conversão do site, e conecta tudo ao tráfego pago no Google Shopping e no Meta.',
    waTexto: 'Oi! Quero falar sobre loja virtual e e-commerce.',
    secoes: [
      {
        titulo: 'Criação de loja virtual',
        paragrafos: [
          'Loja montada pra vender, não só pra existir. Isso significa produto bem cadastrado, frete calculando certo, checkout sem atrito e integração com o sistema que a empresa já usa.',
        ],
        itens: [
          'Loja na Tray ou na Shopify',
          'Integração com ERP, marketplaces, meios de pagamento e frete',
          'Catálogo pronto pra Google Merchant Center e catálogo do Meta',
          'Rastreamento de vendas no GA4 e nas plataformas de anúncio',
        ],
      },
      {
        titulo: 'Assessoria de e-commerce',
        paragrafos: [
          'Pra loja que já vende e quer vender mais com a mesma visita. A gente olha catálogo, política de preço, montagem de kits pra subir ticket, prazo e custo de entrega e os pontos onde o visitante desiste da compra, usando dado do GA4 e gravação de sessão.',
        ],
      },
      {
        titulo: 'Varejo físico que quer vender online',
        paragrafos: [
          'Muita loja de João Pessoa vende bem no balcão e no WhatsApp e ainda não tem e-commerce. A gente monta a loja, aproveita o catálogo e o público que a empresa já tem e liga a loja virtual ao tráfego pago desde o começo.',
        ],
      },
    ],
    resultados: ['loja-de-moda', 'loja-de-moveis'],
    faq: [
      {
        p: 'Tray ou Shopify: qual escolher?',
        r: 'A Tray é forte em integração com ERPs, marketplaces e meios de pagamento brasileiros. A Shopify tem mais aplicativos e liberdade de layout. A Domous trabalha com as duas e indica a plataforma depois de ver o catálogo, o sistema que a empresa usa e os canais de venda.',
      },
      {
        p: 'A loja virtual já sai integrada com marketplace?',
        r: 'Sai sim, quando faz parte do projeto. A integração com marketplace, ERP, checkout e frete é definida no escopo antes de começar.',
      },
      {
        p: 'Como aumentar a conversão de uma loja virtual?',
        r: 'Começa pelos dados: em que página o visitante sai, quanto custa o frete, quanto tempo leva a entrega e como o produto está apresentado. Em uma loja de moda atendida pela Domous, ajustes desse tipo levaram a conversão de 2,1% pra 3,4% e o ticket médio de R$ 187 pra R$ 221.',
      },
    ],
  },
  {
    slug: 'crm-ia-whatsapp',
    nome: 'CRM com IA e WhatsApp',
    titulo: 'CRM com IA e agente de IA no WhatsApp pra empresas | Domous',
    h1: 'CRM com IA e agente de IA no WhatsApp',
    descricao:
      'Agente de IA que atende 24 horas no WhatsApp, qualifica e passa o lead pro vendedor, com CRM e integrações com os sistemas da empresa. Implantação pela Domous.',
    resposta:
      'A Domous implanta CRM com inteligência artificial ligado ao WhatsApp: um agente de IA atende 24 horas, tira dúvida, qualifica o contato e passa pro vendedor quem está pronto pra comprar. Tudo fica registrado no CRM, integrado por API aos sistemas que a operação já usa.',
    waTexto: 'Oi! Quero conhecer o CRM com IA no WhatsApp.',
    secoes: [
      {
        titulo: 'O que o agente faz',
        paragrafos: [
          'O agente responde com base no que a empresa vende: produtos, preços, condições, horários e perguntas frequentes. Ele qualifica o contato com as perguntas que o teu vendedor faria e entrega a conversa pronta pra quem fecha.',
        ],
        itens: [
          'Atendimento 24 horas no WhatsApp, inclusive fora do horário comercial',
          'Qualificação do lead e passagem pro vendedor certo',
          'Nutrição e retomada de contato com quem não respondeu',
          'SDR pra venda B2B',
          'Integração por API com CRM, ERP, agenda e outras ferramentas',
        ],
      },
      {
        titulo: 'Por que isso mexe no resultado do anúncio',
        paragrafos: [
          'Lead que espera resposta esfria. Quando a empresa anuncia e o atendimento só começa no dia seguinte, parte da verba vai embora sem ninguém perceber. O agente responde na hora, e o CRM mostra quantos contatos de cada campanha viraram venda, o que fecha a conta do CAC.',
        ],
      },
    ],
    resultados: [],
    faq: [
      {
        p: 'O agente de IA substitui o vendedor?',
        r: 'Não. Ele cuida do primeiro atendimento, das dúvidas repetidas e da qualificação, e passa pro vendedor quem está pronto pra comprar. O vendedor gasta o tempo dele fechando.',
      },
      {
        p: 'Funciona no número de WhatsApp que a empresa já usa?',
        r: 'Na maioria dos casos sim, usando a API oficial do WhatsApp. Existe hoje a possibilidade de usar o aplicativo e a API no mesmo número; a gente avalia o caso de cada empresa na implantação.',
      },
    ],
  },
  {
    slug: 'conteudo-e-audiovisual',
    nome: 'Conteúdo e audiovisual',
    titulo: 'Social media, conteúdo e audiovisual pra anúncios em João Pessoa | Domous',
    h1: 'Social media, conteúdo e audiovisual',
    descricao:
      'Linha editorial por estágio de funil, bastidor, UGC e roteiro de vídeo por ângulo (dor, prova, objeção e desejo) pra conteúdo e anúncio. Domous, João Pessoa.',
    resposta:
      'A Domous cuida das redes sociais e da produção de vídeo das empresas com um objetivo: conteúdo que também vira anúncio. A linha editorial é organizada por estágio de funil, e cada vídeo é roteirizado por ângulo (dor, prova, objeção ou desejo), que é o mesmo jeito que a gente testa criativo no tráfego pago.',
    waTexto: 'Oi! Quero falar sobre social media e audiovisual.',
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [
          'Conteúdo pensado junto com o tráfego. O vídeo de bastidor que segura atenção no orgânico vira criativo; o depoimento de cliente vira anúncio de prova; a objeção que aparece no WhatsApp vira roteiro.',
        ],
        itens: [
          'Linha editorial por estágio de funil',
          'Gravação e edição de vídeos curtos',
          'Bastidor e UGC (conteúdo no formato de cliente real) pra anúncio',
          'Roteiro por ângulo: dor, prova, objeção e desejo',
        ],
      },
      {
        titulo: 'O que a gente aprendeu sobre conteúdo que vende',
        paragrafos: [
          'Pra empresa que vende pra empresário e pra quem tem ticket alto, depoimento e resultado de cliente costumam converter melhor do que o dono falando da própria empresa. Quem compra quer ver o resultado num negócio que ele conhece. Por isso prova de cliente entra no calendário desde o primeiro mês.',
        ],
      },
    ],
    resultados: [],
    faq: [
      {
        p: 'Social media e tráfego pago precisam ser da mesma agência?',
        r: 'Não é obrigatório, mas ajuda: quando o mesmo time planeja o conteúdo e os anúncios, o vídeo é gravado já pensando no criativo e o que funciona no anúncio volta pro orgânico.',
      },
    ],
  },
];
