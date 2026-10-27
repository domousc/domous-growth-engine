// Páginas de serviço. Cada uma abre com `resposta`: o parágrafo que responde a
// pergunta do título em poucas frases, que é o trecho que Google e IA costumam citar.
// Regra: nenhum cliente citado nem ligado a resultado; case só por segmento.

export type Secao = { titulo: string; paragrafos: string[]; itens?: string[] };
export type Pergunta = { p: string; r: string };
export type Etapa = { titulo: string; texto: string };

export type Pagina = {
  slug: string;
  nome: string;
  categoria?: string;
  titulo: string;
  h1: string;
  descricao: string;
  resposta: string;
  waTexto: string;
  paraQuem?: string[];
  sinais?: string[];
  secoes: Secao[];
  etapas?: Etapa[];
  metricas?: string[];
  ferramentas?: string[];
  mostrarPainel?: boolean;
  resultados: string[];
  faq: Pergunta[];
  relacionados?: string[];
};

export const categorias = [
  "Tráfego e mídia",
  "Comercial e conversão",
  "E-commerce",
  "IA, automação e dados",
  "Conteúdo",
] as const;

export const servicos: Pagina[] = [
  // ───────────────────────── Tráfego e mídia ─────────────────────────
  {
    slug: 'trafego-pago',
    nome: 'Gestão de tráfego pago',
    categoria: 'Tráfego e mídia',
    titulo: 'Gestão de tráfego pago em João Pessoa | Meta Ads, Google Ads e TikTok | Domous',
    h1: 'Gestão de tráfego pago em João Pessoa',
    descricao:
      'A Domous faz gestão de tráfego pago no Meta Ads, Google Ads e TikTok Ads pra empresas de João Pessoa e de todo o Brasil, medindo custo por cliente e receita do clique até a venda.',
    resposta:
      'A Domous é uma agência de tráfego pago de João Pessoa que gerencia campanhas no Meta Ads (Instagram e Facebook), Google Ads e TikTok Ads. A gente mede o que entra no caixa: custo por cliente (CAC) e receita atribuída a cada campanha, acompanhando o lead do clique até o fechamento no WhatsApp, na loja ou no site.',
    waTexto: 'Oi! Quero falar sobre gestão de tráfego pago pra minha empresa.',
    paraQuem: [
      'Empresas com produto validado que querem crescer com previsibilidade',
      'Quem já anuncia e não sabe quanto o anúncio vende',
      'Quem vende pelo WhatsApp e recebe contato que não vira venda',
      'Quem saiu de outra agência com relatório bonito e venda igual',
    ],
    sinais: [
      'O relatório fala de alcance e curtida, e não de venda',
      'Você não sabe quanto custa cada cliente que vem do anúncio',
      'O Meta mostra um número de conversas e o WhatsApp recebe outro',
      'Os mesmos 2 ou 3 criativos rodam há meses',
      'Ninguém sabe dizer qual campanha, criativo ou público vende mais',
    ],
    secoes: [
      {
        titulo: 'O que entra na gestão',
        paragrafos: [
          'Antes de subir qualquer campanha você recebe o plano: estrutura de campanha, distribuição de verba por canal e a meta de custo por cliente. Depois que a conta roda, a otimização é semanal e você recebe o número toda semana.',
        ],
        itens: [
          'Meta Ads (Instagram e Facebook), Google Ads (Pesquisa, Performance Max, Shopping e YouTube) e TikTok Ads',
          'Briefing de criativos por ângulo: de 6 a 12 criativos por mês, testando de 3 a 5 ângulos diferentes',
          'Rastreamento configurado: pixel, API de Conversões, GA4 e Google Tag Manager',
          'Medição de conversa real no WhatsApp, separada da conversa que a plataforma reporta',
          'Segmentação por região e por CEP de alta renda quando o produto pede',
          'Painel de investimento x receita com link fixo, com custo e venda por criativo e por público',
          'Reunião mensal de resultado e número toda semana',
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
        titulo: 'Como a gente usa criativo hoje',
        paragrafos: [
          'Com o algoritmo atual do Meta, o criativo virou a principal forma de segmentação: é ele que diz pra plataforma com quem conversar. Em vez de apertar público, a gente varia persona e ângulo no criativo, otimiza pra resultado e testa um ângulo de cada vez até achar o que puxa venda. Cada criativo aparece no painel com gasto, conversas, vendas e custo por venda, então a decisão de escalar ou desligar sai do dado.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Raio-X da conta', texto: 'Histórico de campanhas, rastreamento, criativos, atendimento e o caminho do cliente até a venda.' },
      { titulo: 'Plano', texto: 'Estrutura de campanha, verba por canal, ângulos de criativo e meta de custo por cliente.' },
      { titulo: 'Estrutura', texto: 'Pixel, API de Conversões, GA4, medição de conversa real e painel no ar.' },
      { titulo: 'Operação', texto: 'Campanhas rodando, teste de ângulo, otimização semanal e reunião mensal de resultado.' },
    ],
    metricas: ['Custo por cliente (CAC)', 'Receita atribuída e retorno sobre o investimento', 'Custo por conversa real', 'Taxa de conversa que vira venda', 'Custo e venda por criativo', 'Custo e venda por público'],
    ferramentas: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Google Merchant Center', 'GA4', 'Google Tag Manager', 'API de Conversões', 'WhatsApp Business API', 'Microsoft Clarity'],
    mostrarPainel: true,
    resultados: ['loja-de-moveis', 'imoveis-6-vendas', 'clinica-de-estetica'],
    faq: [
      {
        p: 'O que faz uma agência de tráfego pago?',
        r: 'Planeja, cria e gerencia anúncios pagos em plataformas como Meta Ads, Google Ads e TikTok Ads pra gerar contatos e vendas. Na Domous isso inclui o rastreamento, o briefing de criativos, a otimização semanal e a leitura de CAC e receita, olhando também página e atendimento.',
      },
      {
        p: 'Vale mais a pena anunciar no Instagram ou no Google?',
        r: 'Depende de como teu cliente compra. Google pega quem já está procurando (ex.: "loja de móveis em João Pessoa"); Meta cria demanda em quem ainda não estava procurando. A maioria das empresas que a gente atende usa os dois, com a verba dividida pelo custo por cliente de cada canal.',
      },
      {
        p: 'Em quanto tempo o tráfego pago dá resultado?',
        r: 'Os primeiros contatos chegam nos primeiros dias de campanha. Resultado consistente depende de teste de criativo e ajuste de atendimento; nos resultados publicados aqui no site, os ganhos maiores vieram em 1 a 3 meses de operação.',
      },
      {
        p: 'Quanto investir em anúncio por mês?',
        r: 'Depende do ticket, da margem e de quantos contatos o time consegue atender bem. A conta parte da meta de custo por cliente, e a Domous faz essa conta no plano antes de começar. Veja a página "Quanto custa".',
      },
      {
        p: 'A Domous atende só empresas de João Pessoa?',
        r: 'Não. A sede é em João Pessoa e a gente atende empresas da Paraíba e de outros estados. Pra quem é de João Pessoa dá pra fazer reunião presencial; com o resto, tudo funciona online.',
      },
      {
        p: 'As contas de anúncio ficam no nome de quem?',
        r: 'No nome da tua empresa. Conta de anúncio, pixel e dados são do cliente; a Domous trabalha com acesso de parceiro. Se um dia a parceria acabar, o histórico e as campanhas continuam contigo.',
      },
      {
        p: 'Como eu acompanho o que está acontecendo com meu dinheiro?',
        r: 'Você recebe o número toda semana, uma reunião mensal com relatório e um painel com link fixo mostrando investimento, receita e o desempenho de cada criativo e público. Métrica de vaidade não entra na conversa.',
      },
    ],
    relacionados: ['meta-ads', 'google-ads', 'mensuracao-e-painel', 'landing-page-e-cro'],
  },
  {
    slug: 'meta-ads',
    nome: 'Meta Ads (Instagram e Facebook)',
    categoria: 'Tráfego e mídia',
    titulo: 'Gestão de Meta Ads em João Pessoa | Anúncios no Instagram e Facebook | Domous',
    h1: 'Gestão de Meta Ads: anúncios no Instagram e no Facebook',
    descricao:
      'Gestão de anúncios no Instagram e Facebook com criativo por ângulo, campanha de mensagem pro WhatsApp e medição de conversa real e venda por criativo. Domous, João Pessoa.',
    resposta:
      'A Domous gerencia anúncios no Instagram e no Facebook (Meta Ads) com foco em venda: campanhas de mensagem pro WhatsApp, de cadastro e de compra, criativos testados por ângulo e medição de quantas conversas reais e vendas cada anúncio trouxe. Com o algoritmo atual do Meta, o criativo é o que mais decide o resultado, então é nele que a gente concentra o trabalho.',
    waTexto: 'Oi! Quero falar sobre anúncios no Instagram e Facebook pra minha empresa.',
    paraQuem: [
      'Empresas que vendem pelo WhatsApp e querem mais conversa que vira venda',
      'Negócios de ticket alto que precisam aparecer pra quem ainda não está procurando',
      'Lojas com catálogo que querem anúncio por produto',
      'Quem já impulsiona post e quer sair do botão "turbinar"',
    ],
    sinais: [
      'Você impulsiona post pelo Instagram e não sabe o que voltou',
      'O custo por conversa sobe e ninguém sabe por quê',
      'Os criativos são sempre o mesmo formato e o mesmo argumento',
      'O público é montado com uma pilha de interesses',
    ],
    secoes: [
      {
        titulo: 'Como a gente estrutura o Meta Ads',
        paragrafos: [
          'Pouca campanha, verba concentrada e muita variação de criativo. É a estrutura que funciona melhor com o algoritmo atual do Meta, que usa o próprio criativo pra decidir quem vê o anúncio.',
        ],
        itens: [
          'Campanhas de mensagem pro WhatsApp (clique pra conversar), cadastro e compra',
          'Anúncio de catálogo pra loja virtual e varejo com muitos produtos',
          'Remarketing pra quem interagiu, visitou o site ou conversou e não comprou',
          'Segmentação por região, raio da loja e CEP de alta renda quando faz sentido',
          'De 6 a 12 criativos novos por mês, organizados por ângulo: dor, prova, objeção e desejo',
        ],
      },
      {
        titulo: 'Medir conversa real, e não só conversa reportada',
        paragrafos: [
          'O número de conversas que o Meta mostra costuma ser maior do que o número de mensagens que chegam de verdade no WhatsApp da empresa. A Domous mede as duas coisas e, quando faz sentido, liga a API oficial do WhatsApp à API de Conversões, pra plataforma aprender com quem de fato conversou e comprou.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Leitura da conta', texto: 'Histórico, estrutura, criativos, públicos e custo por resultado dos últimos meses.' },
      { titulo: 'Ângulos e criativos', texto: 'Briefing com 3 a 5 ângulos e os formatos (vídeo, carrossel, estático) de cada um.' },
      { titulo: 'Campanha no ar', texto: 'Estrutura enxuta, rastreamento conferido e meta de custo por conversa e por venda.' },
      { titulo: 'Escala', texto: 'Mais verba no ângulo e no público que vendem, criativo novo onde o desempenho cai.' },
    ],
    metricas: ['Custo por conversa real', 'Custo por venda', 'Taxa de parada no vídeo (thumbstop)', 'CTR', 'Frequência e custo por mil impressões', 'Venda por criativo e por público'],
    ferramentas: ['Meta Ads', 'Gerenciador de Negócios', 'API de Conversões', 'WhatsApp Business API', 'Catálogo do Meta'],
    mostrarPainel: true,
    resultados: ['imoveis-6-vendas', 'clinica-de-estetica', 'loja-de-moveis'],
    faq: [
      {
        p: 'Impulsionar post é a mesma coisa que anunciar no Meta Ads?',
        r: 'Não. O impulsionamento é uma versão simplificada, com poucas opções de objetivo, público e medição. No Gerenciador de Anúncios dá pra escolher o objetivo certo, testar criativos, separar públicos e medir conversa e venda.',
      },
      {
        p: 'Quantos criativos preciso por mês?',
        r: 'A Domous trabalha com 6 a 12 criativos novos por mês, organizados em 3 a 5 ângulos. Menos que isso costuma deixar a conta dependente de um anúncio só, que cansa e encarece.',
      },
      {
        p: 'Por que o número de conversas do Meta é diferente do que chega no WhatsApp?',
        r: 'A plataforma conta como conversa situações em que a pessoa abriu o chat mas não mandou mensagem, entre outras. A diferença varia por conta, e por isso a Domous mede a conversa real separado.',
      },
      {
        p: 'Dá pra anunciar só pra quem mora perto da loja?',
        r: 'Dá. A segmentação pode ser por raio, bairro, cidade ou por lista de CEPs, o que ajuda muito negócio local e produto de ticket alto.',
      },
    ],
    relacionados: ['trafego-pago', 'conteudo-e-audiovisual', 'crm-ia-whatsapp', 'mensuracao-e-painel'],
  },
  {
    slug: 'google-ads',
    nome: 'Google Ads',
    categoria: 'Tráfego e mídia',
    titulo: 'Gestão de Google Ads em João Pessoa | Pesquisa, Performance Max e Shopping | Domous',
    h1: 'Gestão de Google Ads: Pesquisa, Performance Max, Shopping e YouTube',
    descricao:
      'Anúncios no Google pra quem já está procurando o que você vende: Pesquisa, Performance Max, Shopping com Merchant Center e YouTube, medidos até a venda. Domous, João Pessoa.',
    resposta:
      'A Domous gerencia Google Ads pra capturar quem já está procurando o que a empresa vende: campanhas de Pesquisa por palavra-chave, Performance Max, Shopping com Google Merchant Center e YouTube. O trabalho inclui pesquisa de palavras, lista de termos negativos, conversões configuradas no GA4 e no Tag Manager e leitura de custo por cliente, e não só de clique.',
    waTexto: 'Oi! Quero falar sobre Google Ads pra minha empresa.',
    paraQuem: [
      'Negócios com demanda de busca: quem procura "o teu produto + cidade"',
      'E-commerce que precisa aparecer no Shopping com foto e preço',
      'Serviços locais que precisam aparecer no Maps e na pesquisa',
      'Empresas que só anunciam no Instagram e deixam a busca pro concorrente',
    ],
    sinais: [
      'O concorrente aparece em primeiro quando alguém pesquisa o teu serviço',
      'A conta gasta com termo que não tem nada a ver com o negócio',
      'A Performance Max roda sem ninguém saber o que ela está fazendo',
      'As conversões contam clique no botão, e não venda',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [],
        itens: [
          'Pesquisa de palavras-chave com volume, custo estimado e intenção de compra',
          'Campanhas de Pesquisa com anúncios responsivos, extensões e lista de negativas',
          'Performance Max e Shopping com o catálogo organizado no Merchant Center',
          'Campanhas locais pra aparecer no Maps de quem está perto',
          'YouTube pra remarketing e pra produto que precisa ser explicado',
          'Conversões configuradas no GA4 e no Google Tag Manager, com importação de venda quando possível',
          'Leitura semanal dos termos de busca reais',
        ],
      },
      {
        titulo: 'Google e Meta trabalham juntos',
        paragrafos: [
          'O Google pega a demanda que já existe. O Meta cria demanda nova. Quando os dois rodam juntos, quem viu o anúncio no Instagram e depois pesquisa a marca encontra a empresa no Google. A divisão de verba sai do custo por cliente de cada canal, olhado no mesmo painel.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Pesquisa', texto: 'Palavras-chave, concorrentes que aparecem nos termos e custo estimado por clique.' },
      { titulo: 'Estrutura', texto: 'Campanhas, grupos de anúncio, negativas, extensões e conversões configuradas.' },
      { titulo: 'Lançamento', texto: 'Verba controlada nas primeiras semanas, lendo os termos de busca reais.' },
      { titulo: 'Otimização', texto: 'Lances, negativas e anúncios ajustados toda semana pelo custo por cliente.' },
    ],
    metricas: ['Custo por cliente', 'Taxa de conversão por campanha', 'Parcela de impressões nas buscas importantes', 'Termos de busca que geram venda', 'Retorno do Shopping por produto'],
    ferramentas: ['Google Ads', 'Google Merchant Center', 'Planejador de palavras-chave', 'GA4', 'Google Tag Manager', 'Perfil da Empresa no Google'],
    mostrarPainel: true,
    resultados: ['loja-de-moda', 'consultorio-odontologico'],
    faq: [
      {
        p: 'Qual a diferença entre Pesquisa e Performance Max?',
        r: 'A Pesquisa mostra anúncio de texto pra quem buscou uma palavra-chave escolhida. A Performance Max é automática e distribui o anúncio em Pesquisa, YouTube, Display, Gmail e Maps a partir dos objetivos e do catálogo. Elas funcionam juntas quando bem configuradas.',
      },
      {
        p: 'Preciso de site pra anunciar no Google?',
        r: 'Pra Pesquisa e Shopping, sim. Pra negócio local, dá pra começar com o Perfil da Empresa no Google e ligação ou WhatsApp, mas uma página boa quase sempre baixa o custo por cliente.',
      },
      {
        p: 'O que são palavras-chave negativas?',
        r: 'São termos que você não quer que acionem o anúncio, como "grátis", "vaga" ou "curso", quando não fazem sentido pro negócio. Uma lista bem feita corta muito gasto à toa.',
      },
      {
        p: 'Quanto custa um clique no Google em João Pessoa?',
        r: 'Varia muito por segmento e concorrência. A Domous levanta o custo estimado das palavras do teu negócio no plano, antes de investir.',
      },
    ],
    relacionados: ['trafego-pago', 'ecommerce', 'negocios-locais', 'landing-page-e-cro'],
  },
  {
    slug: 'tiktok-ads',
    nome: 'TikTok Ads',
    categoria: 'Tráfego e mídia',
    titulo: 'Gestão de TikTok Ads | Anúncios no TikTok pra empresas | Domous',
    h1: 'Gestão de TikTok Ads',
    descricao:
      'Anúncios no TikTok com vídeo nativo, criado pra plataforma, e medição de conversa e venda. Pra marcas que querem alcance com custo menor e público que não está no Instagram.',
    resposta:
      'A Domous gerencia anúncios no TikTok pra empresas que querem alcançar público novo com vídeo curto feito no formato da plataforma. O trabalho junta roteiro e produção de vídeo nativo, campanha com objetivo de conversão e medição pelo pixel e pela API de eventos, com a mesma leitura de custo por cliente usada no Meta e no Google.',
    waTexto: 'Oi! Quero falar sobre anúncios no TikTok.',
    paraQuem: [
      'Marcas de varejo, moda, beleza e alimentação com produto visual',
      'Empresas que querem público mais jovem ou que não está no Instagram',
      'Quem já tem vídeo curto bom no orgânico e quer escalar',
    ],
    sinais: [
      'O custo no Meta subiu e falta canal novo pra testar',
      'Os vídeos que funcionam no Reels nunca foram testados como anúncio',
      'O público do produto passa muito tempo no TikTok',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [
          'No TikTok, anúncio com cara de anúncio é pulado. O vídeo precisa parecer conteúdo da plataforma: gente real, gancho nos primeiros segundos e linguagem do feed.',
        ],
        itens: [
          'Roteiro de vídeo nativo por ângulo, com gancho nos 3 primeiros segundos',
          'Campanhas de conversão, tráfego e mensagem',
          'Pixel do TikTok e API de eventos configurados',
          'Testes de criativo semanais e corte do que não segura atenção',
        ],
      },
    ],
    etapas: [
      { titulo: 'Avaliação', texto: 'Se o produto e o público fazem sentido no TikTok antes de investir.' },
      { titulo: 'Criativos', texto: 'Roteiros nativos e gravação (própria ou com criador).' },
      { titulo: 'Teste', texto: 'Verba de teste por ângulo e leitura de retenção e custo.' },
      { titulo: 'Escala', texto: 'Mais verba nos vídeos que vendem e reaproveitamento no Reels.' },
    ],
    metricas: ['Retenção dos primeiros segundos', 'Custo por resultado', 'Custo por venda', 'Taxa de conversão do clique'],
    ferramentas: ['TikTok Ads Manager', 'Pixel do TikTok', 'API de eventos', 'GA4'],
    resultados: [],
    faq: [
      {
        p: 'TikTok Ads funciona pra empresa B2B?',
        r: 'Normalmente rende menos que Meta, Google e LinkedIn pra B2B. A Domous indica o TikTok quando o produto é visual e o público está lá; em outros casos, recomenda priorizar outro canal.',
      },
      {
        p: 'Preciso dançar ou fazer trend?',
        r: 'Não. O que funciona é vídeo com cara de conteúdo: alguém mostrando o produto, resolvendo um problema ou contando uma história curta.',
      },
    ],
    relacionados: ['conteudo-e-audiovisual', 'meta-ads', 'trafego-pago'],
  },

  // ───────────────────────── Comercial e conversão ─────────────────────────
  {
    slug: 'consultoria-de-marketing-e-vendas',
    nome: 'Consultoria de marketing e vendas',
    categoria: 'Comercial e conversão',
    titulo: 'Consultoria de marketing e vendas em João Pessoa | Processo comercial | Domous',
    h1: 'Consultoria de marketing e vendas',
    descricao:
      'Mapeamento de cliente ideal, oferta, objeções e roteiro de mensagens no WhatsApp, com treinamento do time comercial. Consultoria da Domous em João Pessoa.',
    resposta:
      'A consultoria de marketing e vendas da Domous organiza o que vem antes e depois do anúncio: quem é o cliente ideal, qual oferta apresentar, quais objeções aparecem e o que o vendedor responde no WhatsApp. Termina com o time comercial treinado, um roteiro de mensagens pronto pra usar e os números do funil acompanhados.',
    waTexto: 'Oi! Quero falar sobre consultoria de marketing e vendas.',
    paraQuem: [
      'Empresas que geram contato e sentem que vendem menos do que deviam',
      'Quem vai aumentar a verba de anúncio e precisa que o comercial aguente',
      'Empresas onde a venda depende do dono',
      'Times comerciais sem roteiro, cada vendedor atendendo de um jeito',
    ],
    sinais: [
      'O vendedor manda preço seco e some',
      'Cada vendedor atende de um jeito e ninguém sabe qual funciona',
      'Lead bom esfria porque ninguém faz o segundo contato',
      'O dono é o único que consegue fechar venda grande',
    ],
    secoes: [
      {
        titulo: 'O que a gente entrega',
        paragrafos: [],
        itens: [
          'Mapa do cliente ideal (ICP): quem compra mais, mais rápido e com melhor margem',
          'Estrutura de oferta: o que apresentar, em que ordem e com qual argumento',
          'Matriz de objeções com a resposta de cada uma',
          'Roteiro de mensagens pro WhatsApp, do primeiro contato ao fechamento e ao pós-venda',
          'Cadência de retomada pra quem não respondeu',
          'Landing page e funil quando a página atual derruba a conversão',
          'Treinamento do time comercial em cima do roteiro',
          'Indicadores do funil: tempo de resposta, taxa de orçamento e de fechamento',
        ],
      },
      {
        titulo: 'Por que isso vem antes de aumentar a verba',
        paragrafos: [
          'Anúncio traz gente pra conversa; quem fecha é a oferta e o atendimento. Quando a resposta demora, quando o vendedor manda preço seco ou quando a página não explica o produto, a empresa paga caro por lead e culpa o tráfego. Ajustar isso costuma ser o jeito mais barato de baixar o custo por cliente.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Escuta', texto: 'Entrevista com dono e vendedores, leitura de conversas reais e números do funil.' },
      { titulo: 'Desenho', texto: 'ICP, oferta, objeções e roteiro de mensagens.' },
      { titulo: 'Treinamento', texto: 'Time treinado no roteiro, com simulação das objeções mais comuns.' },
      { titulo: 'Acompanhamento', texto: 'Indicadores do funil e ajuste do roteiro com o que aparece na prática.' },
    ],
    metricas: ['Tempo de primeira resposta', 'Taxa de conversa que vira orçamento', 'Taxa de orçamento que vira venda', 'Ticket médio', 'Venda por vendedor'],
    ferramentas: ['WhatsApp Business', 'CRM', 'Planilhas e painel de funil'],
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
    relacionados: ['crm-ia-whatsapp', 'landing-page-e-cro', 'trafego-pago'],
  },
  {
    slug: 'landing-page-e-cro',
    nome: 'Landing page e conversão (CRO)',
    categoria: 'Comercial e conversão',
    titulo: 'Criação de landing page e otimização de conversão (CRO) | Domous, João Pessoa',
    h1: 'Landing page e otimização de conversão',
    descricao:
      'Landing pages feitas pra converter o tráfego pago: oferta clara, prova, objeções respondidas e caminho curto até o WhatsApp ou o formulário, com teste e medição.',
    resposta:
      'A Domous cria landing pages pensadas pra receber tráfego pago e converter: oferta clara no topo, prova, objeções respondidas e um caminho curto até o WhatsApp, o formulário ou a compra. Depois do lançamento, a página é medida com GA4 e gravação de sessão e ajustada pelo que os visitantes fazem de verdade.',
    waTexto: 'Oi! Quero uma landing page que converta.',
    paraQuem: [
      'Quem anuncia mandando o tráfego pra um site institucional ou pro Instagram',
      'Lançamentos imobiliários e produtos de ticket alto',
      'Serviços que precisam explicar antes de vender',
      'Empresas com taxa de conversão baixa no site',
    ],
    sinais: [
      'A página demora pra abrir no celular',
      'O visitante precisa rolar muito pra entender o que você vende',
      'Não existe prova (número, cliente, avaliação) na página',
      'O botão leva pra um formulário longo demais',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [],
        itens: [
          'Estrutura e texto da página a partir da oferta e das objeções reais',
          'Design no padrão da marca, pensado primeiro pro celular',
          'Página rápida, com texto no HTML (bom pra Google e pras IAs)',
          'Integração com WhatsApp, formulário, CRM e pixels',
          'Medição com GA4 e Microsoft Clarity (mapa de calor e gravação de sessão)',
          'Testes de título, oferta e chamada depois do lançamento',
        ],
      },
      {
        titulo: 'O que costuma derrubar a conversão',
        paragrafos: [
          'Página lenta, promessa genérica, ausência de prova, preço ou condição escondidos e caminho longo até o contato. Na maioria das vezes, ajustar esses pontos rende mais que trocar de campanha.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Oferta', texto: 'O que a página vende, pra quem e com qual argumento.' },
      { titulo: 'Texto e estrutura', texto: 'Seções na ordem da decisão do cliente.' },
      { titulo: 'Desenvolvimento', texto: 'Página no ar com rastreamento e integrações.' },
      { titulo: 'Otimização', texto: 'Leitura de mapa de calor, gravações e testes.' },
    ],
    metricas: ['Taxa de conversão da página', 'Velocidade no celular', 'Rolagem e cliques', 'Custo por contato vindo da página'],
    ferramentas: ['GA4', 'Google Tag Manager', 'Microsoft Clarity', 'Hotjar', 'Lovable', 'WordPress e Elementor'],
    resultados: ['loja-de-moda', 'clinica-de-estetica'],
    faq: [
      {
        p: 'Landing page ou site institucional?',
        r: 'Pra tráfego pago, landing page quase sempre converte mais: ela tem um objetivo só e fala com um público só. O site institucional segue útil pra quem pesquisa a marca.',
      },
      {
        p: 'Quanto tempo leva pra fazer uma landing page?',
        r: 'Depende do escopo, das integrações e de quanto material já existe. O prazo é definido no orçamento, antes de começar.',
      },
      {
        p: 'O que é CRO?',
        r: 'É a otimização da taxa de conversão: medir o que os visitantes fazem na página e ajustar o que impede o contato ou a compra.',
      },
    ],
    relacionados: ['consultoria-de-marketing-e-vendas', 'trafego-pago', 'mensuracao-e-painel'],
  },
  {
    slug: 'negocios-locais',
    nome: 'Negócios locais e Google Perfil',
    categoria: 'Comercial e conversão',
    titulo: 'Marketing para negócios locais em João Pessoa | Google Maps e agenda pelo WhatsApp | Domous',
    h1: 'Assessoria de marketing para negócios locais',
    descricao:
      'Pra clínica, consultório, loja e serviço local em João Pessoa: anúncio pra região, Perfil da Empresa no Google otimizado e script de agendamento no WhatsApp.',
    resposta:
      'A assessoria pra negócios locais da Domous enche a agenda de clínicas, consultórios, lojas físicas e serviços de bairro em João Pessoa e região. Junta três coisas: anúncio direcionado pra quem mora perto, Perfil da Empresa no Google bem montado e um script de agendamento no WhatsApp que transforma conversa em horário marcado.',
    waTexto: 'Oi! Tenho um negócio local e quero encher a agenda.',
    paraQuem: [
      'Clínicas, consultórios e estúdios',
      'Lojas físicas e showrooms',
      'Serviços de bairro e empresas com várias unidades',
    ],
    sinais: [
      'A empresa não aparece no Google Maps quando alguém pesquisa o serviço',
      'Poucas avaliações, ou avaliações sem resposta',
      'Muita gente agenda e não aparece',
      'O anúncio fala com a cidade inteira',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [
          'Negócio local perde cliente em três lugares: quando não aparece no Google Maps, quando o anúncio fala com a cidade inteira em vez do bairro certo e quando a mensagem no WhatsApp fica sem resposta. A assessoria cuida dos três.',
        ],
        itens: [
          'Anúncios no Meta e no Google com raio e bairros definidos',
          'Perfil da Empresa no Google otimizado: categoria, serviços, fotos, posts e rotina de avaliações',
          'Uma página por unidade quando a empresa tem mais de um endereço',
          'Script de agendamento e confirmação no WhatsApp',
          'Lembrete pra reduzir falta no horário marcado',
          'Acompanhamento de custo por agendamento e taxa de comparecimento',
        ],
      },
    ],
    etapas: [
      { titulo: 'Presença', texto: 'Perfil do Google, avaliações e página da unidade.' },
      { titulo: 'Anúncio local', texto: 'Raio, bairros e oferta de entrada.' },
      { titulo: 'Agenda', texto: 'Roteiro de agendamento, confirmação e lembrete.' },
      { titulo: 'Leitura', texto: 'Custo por agendamento e comparecimento todo mês.' },
    ],
    metricas: ['Custo por agendamento', 'Taxa de comparecimento', 'Ligações e rotas pelo Google', 'Nota e volume de avaliações'],
    ferramentas: ['Perfil da Empresa no Google', 'Google Ads', 'Meta Ads', 'WhatsApp Business'],
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
      {
        p: 'Como pedir avaliação sem parecer forçado?',
        r: 'No momento certo (logo depois do atendimento ou da entrega), com o link direto e pedindo que a pessoa conte o que achou. Nunca oferecer desconto em troca, que vai contra as regras do Google.',
      },
    ],
    relacionados: ['google-ads', 'meta-ads', 'crm-ia-whatsapp'],
  },
  {
    slug: 'book-de-empreendimento',
    nome: 'Book de empreendimento',
    categoria: 'Comercial e conversão',
    titulo: 'Book de empreendimento imobiliário | Estrutura, textos e diagramação | Domous',
    h1: 'Book de empreendimento imobiliário',
    descricao:
      'Book de venda pra lançamento imobiliário: estrutura, curadoria das imagens que a construtora já tem, argumentos de venda e diagramação. Pro corretor e pro anúncio.',
    resposta:
      'A Domous monta o book de venda de empreendimentos imobiliários: a estrutura do material, a curadoria das fotos, renders e plantas que a construtora já tem, os textos e argumentos de venda e a diagramação. O book serve pro corretor apresentar, pra mandar no WhatsApp e como base dos anúncios do lançamento.',
    waTexto: 'Oi! Quero um book pro meu empreendimento.',
    paraQuem: ['Construtoras e incorporadoras em lançamento', 'Imobiliárias com produto exclusivo', 'Corretores que vendem empreendimento na planta'],
    sinais: [
      'O corretor manda 30 fotos soltas no WhatsApp',
      'O material atual é bonito mas não argumenta',
      'O comprador de fora não entende a localização e o diferencial',
    ],
    secoes: [
      {
        titulo: 'O que entra (e o que não entra)',
        paragrafos: [
          'A Domous não faz fotografia nem render: isso fica com estúdio parceiro. O book é montado em cima do material visual que a construtora já tem.',
        ],
        itens: [
          'Estrutura do book na ordem da decisão do comprador',
          'Curadoria das imagens, plantas e renders existentes',
          'Textos e argumentos de venda: localização, diferenciais, plantas, condições',
          'Diagramação na identidade do empreendimento',
          'Versão leve pra WhatsApp e versão pra apresentação',
        ],
      },
    ],
    etapas: [
      { titulo: 'Material', texto: 'Levantamento do que a construtora já tem.' },
      { titulo: 'Argumento', texto: 'Público, diferenciais e objeções do comprador.' },
      { titulo: 'Diagramação', texto: 'Book montado e revisado.' },
      { titulo: 'Uso', texto: 'Versões pro corretor, pro WhatsApp e pro anúncio.' },
    ],
    resultados: ['imoveis-6-vendas'],
    faq: [
      {
        p: 'A Domous faz render e fotografia?',
        r: 'Não. O book é montado em cima das fotos, renders e plantas que o cliente já tem. Fotografia e render ficam com estúdio parceiro.',
      },
      {
        p: 'O book pode virar anúncio?',
        r: 'Pode e deve. Os argumentos e as imagens do book viram criativos e a base da landing page do lançamento.',
      },
    ],
    relacionados: ['landing-page-e-cro', 'meta-ads', 'consultoria-de-marketing-e-vendas'],
  },

  // ───────────────────────── E-commerce ─────────────────────────
  {
    slug: 'criacao-de-loja-virtual',
    nome: 'Criação de loja virtual',
    categoria: 'E-commerce',
    titulo: 'Criação de loja virtual na Tray e na Shopify em João Pessoa | Domous',
    h1: 'Criação de loja virtual na Tray e na Shopify',
    descricao:
      'Loja virtual pronta pra vender no primeiro dia: Tray ou Shopify, com ERP, marketplaces, checkout, frete e pagamento integrados e catálogo pronto pra anunciar.',
    resposta:
      'A Domous cria lojas virtuais na Tray e na Shopify prontas pra vender no primeiro dia: produto bem cadastrado, frete calculando certo, checkout sem atrito, integração com ERP e marketplaces e catálogo pronto pro Google Shopping e pro Meta. A loja já nasce medida no GA4 e ligada ao tráfego pago.',
    waTexto: 'Oi! Quero criar minha loja virtual.',
    paraQuem: [
      'Varejo físico que quer começar a vender online',
      'Marcas que vendem só por Instagram e WhatsApp',
      'Lojas em plataforma que não integra com o sistema da empresa',
    ],
    sinais: [
      'O cliente pergunta preço e frete no direct todo dia',
      'O estoque da loja física não conversa com o online',
      'A loja atual é lenta ou o checkout tem passos demais',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [],
        itens: [
          'Escolha da plataforma (Tray ou Shopify) pelo catálogo, sistema e canais de venda',
          'Layout pensado pro celular e na identidade da marca',
          'Cadastro e organização do catálogo',
          'Integração com ERP, meios de pagamento, frete e marketplaces',
          'Catálogo pronto pro Google Merchant Center e pro Meta',
          'GA4, pixels e API de Conversões configurados',
          'Plano de lançamento com tráfego pago',
        ],
      },
    ],
    etapas: [
      { titulo: 'Escopo', texto: 'Plataforma, integrações, catálogo e prazo definidos.' },
      { titulo: 'Construção', texto: 'Layout, cadastro e integrações.' },
      { titulo: 'Teste', texto: 'Compra de teste, frete, pagamento e rastreamento.' },
      { titulo: 'Lançamento', texto: 'Loja no ar com campanha de lançamento.' },
    ],
    metricas: ['Taxa de conversão', 'Ticket médio', 'Abandono de carrinho', 'Retorno por canal'],
    ferramentas: ['Tray', 'Shopify', 'Google Merchant Center', 'Catálogo do Meta', 'GA4', 'ERPs e marketplaces'],
    resultados: ['loja-de-moda'],
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
        p: 'Quanto custa criar uma loja virtual?',
        r: 'O valor é fechado por escopo: quantidade de produtos, integrações e layout. Veja como a Domous cobra na página "Quanto custa".',
      },
    ],
    relacionados: ['ecommerce', 'google-ads', 'meta-ads'],
  },
  {
    slug: 'ecommerce',
    nome: 'Assessoria de e-commerce',
    categoria: 'E-commerce',
    titulo: 'Assessoria de e-commerce | Conversão, catálogo, kits e tráfego | Domous, João Pessoa',
    h1: 'Assessoria de e-commerce',
    descricao:
      'Pra loja virtual que já vende e quer vender mais com a mesma visita: catálogo, preço, kits, frete, conversão do site e tráfego pago no Google Shopping e no Meta.',
    resposta:
      'A assessoria de e-commerce da Domous é pra loja que já vende e quer vender mais com a mesma visita. A gente trabalha catálogo, política de preço, kits pra subir ticket, prazo e custo de frete e os pontos onde o visitante desiste da compra, e conecta tudo ao tráfego pago no Google Shopping, na Performance Max e no catálogo do Meta.',
    waTexto: 'Oi! Tenho um e-commerce e quero vender mais.',
    paraQuem: ['Lojas na Tray, Shopify ou outra plataforma', 'Marcas com tráfego e conversão baixa', 'E-commerce que depende de um produto só'],
    sinais: [
      'Muita visita e pouca venda',
      'Carrinho abandonado alto',
      'O ticket médio não sai do lugar',
      'O Shopping gasta e ninguém sabe quais produtos vendem',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [],
        itens: [
          'Leitura de conversão com GA4 e gravação de sessão',
          'Ajuste de página de produto, frete e checkout',
          'Kits e combos pra subir ticket médio',
          'Organização do catálogo e do feed do Merchant Center',
          'Google Shopping, Performance Max e anúncios de catálogo no Meta',
          'Recuperação de carrinho e pós-venda',
        ],
      },
    ],
    etapas: [
      { titulo: 'Leitura dos dados', texto: 'Onde o visitante sai e quanto cada canal vende.' },
      { titulo: 'Correções', texto: 'Página de produto, frete, checkout e catálogo.' },
      { titulo: 'Mídia', texto: 'Shopping, PMax e catálogo com verba por produto.' },
      { titulo: 'Escala', texto: 'Mais verba no que tem margem e giro.' },
    ],
    metricas: ['Taxa de conversão', 'Ticket médio', 'Retorno por produto', 'Custo por pedido'],
    ferramentas: ['Tray', 'Shopify', 'Google Merchant Center', 'Google Ads', 'Meta Ads', 'GA4', 'Microsoft Clarity'],
    mostrarPainel: true,
    resultados: ['loja-de-moda', 'loja-de-moveis'],
    faq: [
      {
        p: 'Como aumentar a conversão de uma loja virtual?',
        r: 'Começa pelos dados: em que página o visitante sai, quanto custa o frete, quanto tempo leva a entrega e como o produto está apresentado. Em uma loja de moda atendida pela Domous, ajustes desse tipo levaram a conversão de 2,1% pra 3,4% e o ticket médio de R$ 187 pra R$ 221.',
      },
      {
        p: 'Qual a diferença entre Google Shopping e Performance Max?',
        r: 'Shopping mostra o produto com foto e preço na pesquisa do Google. Performance Max é uma campanha automática que usa o mesmo catálogo e distribui o anúncio em vários canais do Google. As duas dependem de um catálogo bem cadastrado.',
      },
    ],
    relacionados: ['criacao-de-loja-virtual', 'google-ads', 'landing-page-e-cro'],
  },

  // ───────────────────────── IA, automação e dados ─────────────────────────
  {
    slug: 'crm-ia-whatsapp',
    nome: 'CRM com IA e agente no WhatsApp',
    categoria: 'IA, automação e dados',
    titulo: 'Agente de IA no WhatsApp e CRM com inteligência artificial | Domous',
    h1: 'CRM com IA e agente de IA no WhatsApp',
    descricao:
      'Agente de IA que atende 24 horas no WhatsApp, qualifica e passa o lead pro vendedor, com CRM e integrações com os sistemas da empresa. Implantação pela Domous.',
    resposta:
      'A Domous implanta CRM com inteligência artificial ligado ao WhatsApp: um agente de IA atende 24 horas, tira dúvida com base no que a empresa vende, qualifica o contato e passa pro vendedor quem está pronto pra comprar. Tudo fica registrado no CRM, integrado por API aos sistemas que a operação já usa, e cada venda pode voltar pras plataformas de anúncio.',
    waTexto: 'Oi! Quero conhecer o CRM com IA no WhatsApp.',
    paraQuem: [
      'Empresas que recebem muita mensagem e não dão conta de responder rápido',
      'Quem anuncia e perde lead fora do horário comercial',
      'Times comerciais que precisam de fila e histórico organizados',
      'Venda B2B que precisa de pré-qualificação',
    ],
    sinais: [
      'Mensagem de sábado só é respondida na segunda',
      'O vendedor responde as mesmas 10 perguntas o dia todo',
      'O lead some e ninguém retoma',
      'Não dá pra saber quantos contatos de cada campanha viraram venda',
    ],
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
          'Registro da origem do lead e envio da venda pro Meta e pro Google',
        ],
      },
      {
        titulo: 'Por que isso mexe no resultado do anúncio',
        paragrafos: [
          'Lead que espera resposta esfria. Quando a empresa anuncia e o atendimento só começa no dia seguinte, parte da verba vai embora sem ninguém perceber. O agente responde na hora, e o CRM mostra quantos contatos de cada campanha viraram venda, o que fecha a conta do custo por cliente.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Base de conhecimento', texto: 'Produtos, preços, regras e as perguntas que mais chegam.' },
      { titulo: 'Fluxo', texto: 'Qualificação, passagem pro vendedor e retomada.' },
      { titulo: 'Integração', texto: 'WhatsApp oficial, CRM e sistemas da empresa.' },
      { titulo: 'Ajuste', texto: 'Leitura das conversas e melhoria contínua do agente.' },
    ],
    metricas: ['Tempo de primeira resposta', 'Conversas atendidas fora do horário', 'Leads qualificados', 'Taxa de passagem que vira venda'],
    ferramentas: ['WhatsApp Business API', 'Claude API', 'Make', 'n8n', 'CRM'],
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
      {
        p: 'A IA pode errar informação?',
        r: 'Por isso o agente responde só com base no que a empresa cadastrou e passa pro humano quando a pergunta foge disso. As conversas são revisadas e o agente é ajustado com o tempo.',
      },
    ],
    relacionados: ['automacao-e-integracoes', 'consultoria-de-marketing-e-vendas', 'mensuracao-e-painel'],
  },
  {
    slug: 'automacao-e-integracoes',
    nome: 'Automação e integrações',
    categoria: 'IA, automação e dados',
    titulo: 'Automação de marketing e vendas e integrações por API | Domous',
    h1: 'Automação de marketing e vendas',
    descricao:
      'Automações que ligam anúncio, WhatsApp, CRM, ERP e planilhas: lead no CRM na hora, venda de volta pras plataformas, lembretes e relatórios automáticos.',
    resposta:
      'A Domous monta automações que ligam as ferramentas da empresa: o lead do anúncio cai no CRM na hora, a venda registrada volta pro Meta e pro Google, o cliente recebe confirmação e lembrete no WhatsApp e o relatório se atualiza sozinho. As integrações são feitas por API, com ferramentas como Make e n8n, em cima do que a operação já usa.',
    waTexto: 'Oi! Quero automatizar processos de marketing e vendas.',
    paraQuem: ['Empresas com trabalho manual repetido entre sistemas', 'Times que copiam lead de um lugar pro outro', 'Quem quer medir venda por campanha sem planilha'],
    sinais: [
      'Alguém passa lead do formulário pro CRM na mão',
      'Os sistemas não conversam',
      'O relatório do mês leva dias pra ficar pronto',
    ],
    secoes: [
      {
        titulo: 'Exemplos do que a gente automatiza',
        paragrafos: [],
        itens: [
          'Lead de anúncio e formulário direto no CRM, com a campanha de origem',
          'Venda do CRM ou do ERP enviada pro Meta e pro Google (conversão offline)',
          'Confirmação, lembrete e pós-venda no WhatsApp',
          'Retomada automática de quem parou de responder',
          'Alertas pro time quando entra lead de alto valor',
          'Painéis e relatórios atualizados automaticamente',
        ],
      },
    ],
    etapas: [
      { titulo: 'Mapa', texto: 'Ferramentas, fluxos e onde o trabalho manual acontece.' },
      { titulo: 'Desenho', texto: 'Quais automações trazem mais ganho primeiro.' },
      { titulo: 'Construção', texto: 'Integrações por API e testes.' },
      { titulo: 'Monitoramento', texto: 'Alertas de falha e ajuste contínuo.' },
    ],
    ferramentas: ['Make', 'n8n', 'WhatsApp Business API', 'API de Conversões', 'Google Sheets', 'CRMs e ERPs'],
    resultados: [],
    faq: [
      {
        p: 'Preciso trocar de sistema pra automatizar?',
        r: 'Normalmente não. A automação é feita em cima das ferramentas que a empresa já usa, desde que elas tenham integração ou API.',
      },
      {
        p: 'O que é conversão offline?',
        r: 'É mandar pras plataformas de anúncio as vendas que aconteceram fora do site, como no WhatsApp ou na loja. Isso ensina o algoritmo a buscar mais gente parecida com quem comprou.',
      },
    ],
    relacionados: ['crm-ia-whatsapp', 'mensuracao-e-painel', 'trafego-pago'],
  },
  {
    slug: 'mensuracao-e-painel',
    nome: 'Mensuração e painel de resultados',
    categoria: 'IA, automação e dados',
    titulo: 'Mensuração de marketing e painel de resultados | Investimento x receita | Domous',
    h1: 'Mensuração e painel de investimento x receita',
    descricao:
      'Rastreamento do clique até a venda e um painel com link fixo: investimento, receita, custo por cliente e desempenho por criativo e público, atualizado automaticamente.',
    resposta:
      'A Domous organiza a medição do marketing do clique até a venda e entrega um painel com link fixo, atualizado automaticamente: quanto foi investido, quantas conversas reais chegaram, quantas viraram venda, quanto voltou em receita e o desempenho de cada anúncio ativo, criativo, conjunto e público. É a base pra decidir onde colocar verba com dado, e não com achismo.',
    waTexto: 'Oi! Quero saber quanto meu marketing vende de verdade.',
    paraQuem: ['Donos que querem ver o retorno sem pedir relatório', 'Empresas com mais de um canal de anúncio', 'Quem precisa mostrar resultado pros sócios'],
    sinais: [
      'Cada área mostra um número diferente',
      'Ninguém sabe o custo por cliente',
      'O relatório chega no fim do mês, quando já não dá pra mudar nada',
    ],
    secoes: [
      {
        titulo: 'O que entra',
        paragrafos: [],
        itens: [
          'Pixel, API de Conversões, GA4 e Google Tag Manager configurados e conferidos',
          'Medição de conversa real no WhatsApp',
          'Registro da origem do lead até a venda',
          'Painel com investimento, receita, custo por cliente e retorno',
          'Desempenho por anúncio ativo, criativo, conjunto e público',
          'Leitura em texto do que mudou e do que fazer',
        ],
      },
    ],
    etapas: [
      { titulo: 'Auditoria', texto: 'O que está medido, o que está quebrado e o que falta.' },
      { titulo: 'Rastreamento', texto: 'Pixels, eventos e origem do lead configurados.' },
      { titulo: 'Painel', texto: 'Link fixo com os números que importam.' },
      { titulo: 'Rotina', texto: 'Atualização automática e leitura semanal.' },
    ],
    metricas: ['Investimento', 'Receita atribuída', 'Custo por cliente', 'Retorno', 'Custo e venda por criativo e público'],
    ferramentas: ['GA4', 'Google Tag Manager', 'API de Conversões', 'Meta Ads', 'Google Ads', 'Looker Studio'],
    mostrarPainel: true,
    resultados: [],
    faq: [
      {
        p: 'O painel é em tempo real?',
        r: 'Ele é atualizado automaticamente em intervalos definidos e mostra a data da última atualização. Você abre o mesmo link sempre que quiser.',
      },
      {
        p: 'Dá pra ver o resultado de cada anúncio?',
        r: 'Dá. O painel mostra cada anúncio ativo com o criativo, o gasto, as conversas, as vendas e o custo de cada uma, e o mesmo recorte por conjunto e público.',
      },
    ],
    relacionados: ['trafego-pago', 'automacao-e-integracoes', 'crm-ia-whatsapp'],
  },

  // ───────────────────────── Conteúdo ─────────────────────────
  {
    slug: 'conteudo-e-audiovisual',
    nome: 'Social media e audiovisual',
    categoria: 'Conteúdo',
    titulo: 'Social media, conteúdo e audiovisual pra anúncios em João Pessoa | Domous',
    h1: 'Social media, conteúdo e audiovisual',
    descricao:
      'Linha editorial por estágio de funil, bastidor, UGC e roteiro de vídeo por ângulo (dor, prova, objeção e desejo) pra conteúdo e anúncio. Domous, João Pessoa.',
    resposta:
      'A Domous cuida das redes sociais e da produção de vídeo das empresas com um objetivo: conteúdo que também vira anúncio. A linha editorial é organizada por estágio de funil, e cada vídeo é roteirizado por ângulo (dor, prova, objeção ou desejo), que é o mesmo jeito que a gente testa criativo no tráfego pago.',
    waTexto: 'Oi! Quero falar sobre social media e audiovisual.',
    paraQuem: ['Empresas que precisam de criativo novo todo mês', 'Marcas com Instagram parado ou sem estratégia', 'Quem quer conteúdo que ajude a vender'],
    sinais: [
      'O Instagram posta, mas ninguém sabe pra quê',
      'Falta vídeo pra testar no anúncio',
      'O conteúdo não usa prova nem história de cliente',
    ],
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
          'Legendas, capas e versão de cada vídeo pro anúncio',
        ],
      },
      {
        titulo: 'O que a gente aprendeu sobre conteúdo que vende',
        paragrafos: [
          'Pra empresa que vende pra empresário e pra quem tem ticket alto, resultado de cliente e bastidor real costumam converter melhor do que o dono falando da própria empresa. Quem compra quer ver o resultado num negócio que ele conhece.',
        ],
      },
    ],
    etapas: [
      { titulo: 'Linha editorial', texto: 'Temas por estágio de funil e calendário.' },
      { titulo: 'Roteiro', texto: 'Ângulo, gancho e chamada de cada vídeo.' },
      { titulo: 'Gravação e edição', texto: 'Vídeos curtos com legenda e capa.' },
      { titulo: 'Leitura', texto: 'O que reteve no orgânico vira teste no anúncio.' },
    ],
    metricas: ['Retenção dos vídeos', 'Envios e salvamentos', 'Seguidores qualificados', 'Desempenho do conteúdo como anúncio'],
    resultados: [],
    faq: [
      {
        p: 'Social media e tráfego pago precisam ser da mesma agência?',
        r: 'Não é obrigatório, mas ajuda: quando o mesmo time planeja o conteúdo e os anúncios, o vídeo é gravado já pensando no criativo e o que funciona no anúncio volta pro orgânico.',
      },
      {
        p: 'Quantas gravações por mês?',
        r: 'O volume é definido no escopo, de acordo com a necessidade de conteúdo e de criativo da empresa.',
      },
    ],
    relacionados: ['meta-ads', 'tiktok-ads', 'trafego-pago'],
  },
];

export const servicoPorSlug = (slug: string) => servicos.find((s) => s.slug === slug);
