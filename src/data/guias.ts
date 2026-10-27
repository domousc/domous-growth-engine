// Central de guias: páginas que respondem as perguntas que o empresário faz pro
// Google e pras IAs. Cada guia abre com `resposta` (o trecho citável), tem seções
// com subtítulo em forma de pergunta quando faz sentido, FAQ e leva pros serviços.
// Temas escolhidos pelo autocompletar do Google (26/10/2026). Sem dado de cliente.
import type { Pergunta, Secao } from "./servicos";

export type Guia = {
  slug: string;
  titulo: string;
  h1: string;
  descricao: string;
  resposta: string;
  secoes: Secao[];
  faq: Pergunta[];
  servicos: string[];
  publicado: string;
  atualizado: string;
};

export const guias: Guia[] = [
  {
    slug: "meta-ads-ou-google-ads",
    titulo: "Meta Ads ou Google Ads: qual é melhor pra tua empresa? | Guia Domous",
    h1: "Meta Ads ou Google Ads: qual é melhor pra tua empresa?",
    descricao:
      "A diferença entre anunciar no Instagram e no Google, quando cada um rende mais e como dividir a verba entre os dois pelo custo por cliente.",
    resposta:
      "Google Ads captura quem já está procurando o que você vende; Meta Ads (Instagram e Facebook) cria demanda em quem ainda não estava procurando. Pra quem tem demanda de busca (\"loja de móveis em João Pessoa\"), o Google costuma trazer o contato mais pronto pra comprar. Pra produto visual, de desejo ou que o cliente não sabe que precisa, o Meta costuma ter mais escala. Na maioria das empresas os dois funcionam juntos, e a divisão da verba sai do custo por cliente de cada canal.",
    secoes: [
      {
        titulo: "A diferença em uma frase",
        paragrafos: [
          "No Google, a pessoa digita o que quer e o anúncio aparece como resposta. No Meta, o anúncio aparece no meio do feed de alguém que não estava procurando nada, e precisa ganhar a atenção dela. Isso muda tudo: no Google o trabalho principal é escolher bem as palavras-chave e a página; no Meta, é o criativo.",
        ],
      },
      {
        titulo: "Quando o Google Ads rende mais",
        paragrafos: [],
        itens: [
          "Existe busca pelo produto ou serviço na região (\"material elétrico perto de mim\", \"dermatologista em João Pessoa\")",
          "O cliente compara opções antes de decidir e pesquisa a marca",
          "E-commerce com catálogo, que aparece no Shopping com foto e preço",
          "Serviço local que precisa aparecer no Google Maps",
        ],
      },
      {
        titulo: "Quando o Meta Ads rende mais",
        paragrafos: [],
        itens: [
          "Produto visual ou de desejo (móveis, moda, imóvel, estética)",
          "Demanda que precisa ser criada: o cliente não sabe que tem o problema",
          "Venda pelo WhatsApp, com campanha de mensagem direto pra conversa",
          "Lançamento, oferta com prazo e remarketing de quem já interagiu",
        ],
      },
      {
        titulo: "Como dividir a verba entre os dois",
        paragrafos: [
          "A divisão sai do custo por cliente de cada canal. Um caminho prático: começar com o canal que combina mais com a forma de compra do teu cliente, medir conversa real e venda por canal por algumas semanas e mover verba pro que entrega cliente mais barato, sem zerar o outro. Os dois se ajudam: quem vê o anúncio no Instagram e depois pesquisa a marca no Google precisa encontrar a empresa lá.",
          "O que atrapalha essa decisão é medir cada canal de um jeito. O Meta conta conversas, o Google conta cliques no botão, e nenhum dos dois sabe da venda que fechou no WhatsApp. Por isso a Domous junta os dois num painel só, com custo por venda de cada canal.",
        ],
      },
      {
        titulo: "E o TikTok?",
        paragrafos: [
          "O TikTok Ads entra como terceiro canal quando o produto é visual e o público está lá, principalmente varejo, moda, beleza e alimentação. Pra venda B2B e ticket muito alto, costuma render menos que Meta e Google.",
        ],
      },
    ],
    faq: [
      {
        p: "Qual é melhor: Meta Ads ou Google Ads?",
        r: "Nenhum é melhor em todos os casos. Google é melhor pra capturar quem já procura; Meta é melhor pra criar demanda e vender produto visual. Quem decide é o custo por cliente medido em cada um.",
      },
      {
        p: "Dá pra começar com pouca verba nos dois?",
        r: "Dá, mas costuma render mais concentrar a verba no canal mais provável primeiro e abrir o segundo quando o primeiro estiver medido e estável.",
      },
      {
        p: "Anúncio no Instagram serve pra empresa B2B?",
        r: "Serve quando o criativo fala com o decisor e a campanha leva pra uma conversa qualificada. Pra B2B, o Google e o LinkedIn costumam complementar bem.",
      },
    ],
    servicos: ["meta-ads", "google-ads", "trafego-pago"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "como-calcular-cac-roas-e-ltv",
    titulo: "Como calcular CAC, ROAS e LTV no marketing (com exemplo) | Guia Domous",
    h1: "Como calcular CAC, ROAS e LTV no marketing, com exemplo",
    descricao:
      "As três contas que dizem se o marketing da tua empresa dá lucro: custo por cliente (CAC), retorno sobre o anúncio (ROAS) e valor do cliente ao longo do tempo (LTV).",
    resposta:
      "CAC é quanto custa conquistar um cliente novo: o investimento em marketing e vendas do período dividido pelo número de clientes novos. ROAS é quanto a mídia devolve em receita: a receita atribuída aos anúncios dividida pelo valor investido neles. LTV é quanto um cliente deixa de receita (ou de margem) durante todo o relacionamento. O marketing se paga quando o LTV é bem maior que o CAC.",
    secoes: [
      {
        titulo: "CAC: custo de aquisição de cliente",
        paragrafos: [
          "Fórmula: CAC = investimento em marketing e vendas no período ÷ clientes novos no período.",
          "Exemplo: a empresa investiu R$ 20.000 em anúncio e R$ 10.000 em time comercial e ferramentas num mês, e fechou 60 clientes novos. CAC = R$ 30.000 ÷ 60 = R$ 500. Se olhar só a mídia (R$ 20.000 ÷ 60), o custo de mídia por cliente é R$ 333. Vale acompanhar os dois.",
        ],
      },
      {
        titulo: "ROAS: retorno sobre o investimento em anúncio",
        paragrafos: [
          "Fórmula: ROAS = receita atribuída aos anúncios ÷ investimento em anúncios.",
          "Exemplo: R$ 20.000 em anúncio geraram R$ 120.000 em vendas atribuídas. ROAS = 6, ou 6x: cada real investido voltou seis em receita. ROAS não é lucro. Uma empresa com margem baixa pode ter ROAS 4x e perder dinheiro; outra, com margem alta, ganha bem com 3x.",
        ],
      },
      {
        titulo: "LTV: valor do cliente no tempo",
        paragrafos: [
          "Fórmula simples: LTV = ticket médio × compras por ano × anos de relacionamento. Pra decisão de verba, use a margem em vez da receita.",
          "Exemplo: ticket médio de R$ 800, o cliente compra 3 vezes por ano e fica em média 2 anos. LTV = R$ 800 × 3 × 2 = R$ 4.800 em receita. Com margem de 30%, são R$ 1.440 de margem por cliente.",
        ],
      },
      {
        titulo: "Como ler os três juntos",
        paragrafos: [
          "No exemplo, cada cliente custa R$ 500 (CAC) e deixa R$ 1.440 de margem (LTV em margem): quase 3 vezes o custo. Uma referência muito usada no mercado é buscar LTV pelo menos 3 vezes maior que o CAC. Abaixo disso, o crescimento come o caixa; muito acima, normalmente dá pra investir mais em aquisição.",
        ],
        itens: [
          "CAC subindo e ROAS caindo: problema de campanha, criativo ou público",
          "Conversas subindo e CAC subindo: problema de atendimento ou de qualificação",
          "ROAS bom e caixa apertado: margem baixa ou prazo de recebimento longo",
        ],
      },
      {
        titulo: "O erro mais comum: medir só o que a plataforma mostra",
        paragrafos: [
          "Meta e Google mostram cliques e conversas, mas não sabem da venda que fechou no WhatsApp ou no balcão. Sem registrar a origem de cada venda, o CAC e o ROAS viram chute. É por isso que a medição (pixel, API de Conversões, origem do lead no CRM e conversa real no WhatsApp) vem antes de escalar verba.",
        ],
      },
    ],
    faq: [
      {
        p: "Qual a diferença entre ROAS e ROI?",
        r: "ROAS olha só receita sobre investimento em mídia. ROI considera o lucro: desconta custo do produto, impostos e outros custos. Um ROAS alto pode ter ROI baixo se a margem for pequena.",
      },
      {
        p: "Qual é um bom ROAS?",
        r: "Depende da margem. Divida 1 pela margem pra achar o ROAS mínimo que empata: com margem de 25%, o ROAS de empate é 4x. Acima disso, o anúncio dá lucro.",
      },
      {
        p: "O CAC deve incluir o salário do time comercial?",
        r: "Pra visão completa, sim. Pra comparar campanhas entre si, o custo de mídia por cliente basta. O ideal é acompanhar os dois.",
      },
    ],
    servicos: ["mensuracao-e-painel", "trafego-pago", "consultoria-de-marketing-e-vendas"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "conversas-meta-ads-x-whatsapp",
    titulo: "Por que o Meta mostra mais conversas do que chegam no WhatsApp? | Guia Domous",
    h1: "Por que o Meta mostra mais conversas do que chegam no WhatsApp?",
    descricao:
      "A diferença entre a conversa que o Gerenciador de Anúncios reporta e a mensagem que chega de verdade, por que ela acontece e como medir a conversa real.",
    resposta:
      "É comum o Gerenciador de Anúncios do Meta reportar mais conversas do que as mensagens que a empresa recebe de fato no WhatsApp. A diferença vem principalmente de como a plataforma conta e atribui uma conversa ao anúncio, de conversas que começam e não seguem, e da falta de cruzamento com o que chega no aparelho. Pra medir a conversa real, a empresa precisa contar as mensagens que entram com origem no anúncio, idealmente pela API oficial do WhatsApp, e cruzar com as vendas.",
    secoes: [
      {
        titulo: "O que o Meta chama de conversa",
        paragrafos: [
          "A métrica de conversas iniciadas mede quando alguém começa uma conversa com a empresa a partir do anúncio, dentro das regras de contagem e de atribuição da plataforma. Ela é útil pra otimizar campanha, mas não é a mesma coisa que \"mensagem recebida e respondida\" e muito menos \"cliente\".",
        ],
      },
      {
        titulo: "Motivos comuns da diferença",
        paragrafos: [],
        itens: [
          "Atribuição: a plataforma credita ao anúncio conversas de quem interagiu com ele dentro da janela de atribuição, mesmo que a pessoa chegue por outro caminho",
          "Conversa que começa e não segue: a pessoa abre, manda uma mensagem automática ou um \"oi\" e some",
          "Mensagens que caem em outro número, aparelho ou atendente e não são contadas",
          "Ninguém conta a conversa real com origem, então a comparação nunca é feita",
        ],
      },
      {
        titulo: "Por que isso importa",
        paragrafos: [
          "Se a empresa decide verba pela conversa reportada, ela pode escalar a campanha errada: a que gera muita conversa contada e pouca venda. O custo por conversa parece bom e o custo por cliente piora sem ninguém ver.",
        ],
      },
      {
        titulo: "Como medir a conversa real",
        paragrafos: [],
        itens: [
          "Usar a API oficial do WhatsApp (WhatsApp Business Platform): conversas que começam pelo botão do anúncio chegam com a identificação do anúncio de origem",
          "Registrar a origem de cada conversa no CRM, com etiqueta de campanha",
          "Marcar quais conversas viraram orçamento e venda",
          "Enviar essas vendas de volta pro Meta pela API de Conversões, pra campanha otimizar por quem compra",
          "Comparar no mesmo painel: conversa reportada, conversa real, orçamento e venda",
        ],
      },
      {
        titulo: "Dá pra manter o aplicativo do WhatsApp?",
        paragrafos: [
          "Hoje existe a possibilidade de usar o aplicativo WhatsApp Business e a API no mesmo número, o que facilita a transição pra quem não quer mudar a rotina do time. A viabilidade depende de cada caso e é avaliada na implantação.",
        ],
      },
    ],
    faq: [
      {
        p: "A diferença entre conversa reportada e real é normal?",
        r: "Alguma diferença é comum. O problema é não saber de quanto ela é, porque aí a decisão de verba fica baseada num número que não representa o que chega.",
      },
      {
        p: "Preciso da API do WhatsApp pra medir?",
        r: "Ajuda muito, porque a origem do anúncio chega junto com a conversa. Sem a API, dá pra fazer um controle manual com etiqueta e mensagem pré-preenchida, mas é menos preciso.",
      },
    ],
    servicos: ["meta-ads", "mensuracao-e-painel", "crm-ia-whatsapp"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "como-vender-lancamento-imobiliario-com-trafego-pago",
    titulo: "Como vender um lançamento imobiliário com tráfego pago | Guia para construtoras",
    h1: "Como vender um lançamento imobiliário com tráfego pago",
    descricao:
      "Guia pra construtoras e incorporadoras: campanha por fase do lançamento, perfil de comprador, atendimento do lead pelo corretor e medição do custo por venda.",
    resposta:
      "Pra vender um lançamento imobiliário com tráfego pago, a construtora precisa de campanha diferente pra cada fase (pré-lançamento, lançamento e estoque) e pra cada perfil de comprador (quem vai morar, quem vai investir e quem compra de outro estado), lead entregue rápido pro corretor certo com roteiro de qualificação, e medição do caminho do lead até a assinatura. O número que importa é o custo por venda.",
    secoes: [
      {
        titulo: "Campanha por fase do lançamento",
        paragrafos: [],
        itens: [
          "Pré-lançamento: formar lista de interessados qualificados, com conteúdo de localização, conceito e condição de lançamento",
          "Lançamento: concentrar verba, levar pra visita ao estande ou decorado e acelerar a decisão",
          "Estoque: unidades específicas, condições e remarketing de quem já demonstrou interesse",
        ],
      },
      {
        titulo: "Campanha por perfil de comprador",
        paragrafos: [
          "Quem vai morar decide por planta, lazer e localização. Quem investe olha valorização, renda e liquidez. Quem compra de outro estado precisa entender a cidade e confiar à distância. Cada um pede criativo, argumento e página diferentes. Segmentação por região e por CEP de alta renda ajuda nos produtos de ticket maior.",
        ],
      },
      {
        titulo: "O lead precisa chegar rápido no corretor certo",
        paragrafos: [
          "Lead imobiliário esfria rápido. Distribuição automática entre corretores, resposta em minutos (inclusive à noite e no fim de semana, com agente de IA se preciso) e roteiro de qualificação com renda, entrada, prazo e interesse fazem mais diferença que qualquer ajuste de campanha.",
        ],
      },
      {
        titulo: "Material que o corretor e o anúncio usam",
        paragrafos: [
          "O book do empreendimento (estrutura, curadoria das imagens, argumentos e diagramação) e uma landing page por empreendimento dão ao corretor e ao anúncio o mesmo argumento. Versão leve pra WhatsApp evita mandar 30 fotos soltas.",
        ],
      },
      {
        titulo: "O que medir",
        paragrafos: [],
        itens: [
          "Custo por lead qualificado",
          "Taxa de lead que vira visita, de visita que vira proposta e de proposta que vira venda",
          "Tempo de resposta do corretor",
          "Custo por venda por empreendimento e por canal (time próprio, imobiliária parceira, digital)",
        ],
      },
      {
        titulo: "Exemplo de resultado",
        paragrafos: [
          "Numa operação imobiliária atendida pela Domous, R$ 2.900 de verba de mídia renderam 6 imóveis vendidos em um mês. O cliente não é identificado por confidencialidade.",
        ],
      },
    ],
    faq: [
      {
        p: "Quanto investir em tráfego pago num lançamento?",
        r: "Depende do VGV, do número de unidades, do ticket e da meta de vendas por fase. A conta parte do custo por venda aceitável, que a Domous calcula no plano antes de investir.",
      },
      {
        p: "Como saber se o problema é o lead ou o corretor?",
        r: "Registrando a origem e o andamento de cada lead. Com isso dá pra ver se a campanha traz o perfil errado ou se o atendimento demora e perde o contato.",
      },
    ],
    servicos: ["book-de-empreendimento", "meta-ads", "landing-page-e-cro"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "agente-de-ia-no-whatsapp",
    titulo: "Agente de IA no WhatsApp Business: como funciona e quando vale a pena | Guia Domous",
    h1: "Agente de IA no WhatsApp Business: como funciona e quando vale a pena",
    descricao:
      "O que um agente de inteligência artificial faz no WhatsApp da empresa, o que ele não deve fazer, como é implantado e como medir se está ajudando a vender.",
    resposta:
      "Um agente de IA no WhatsApp Business atende os clientes automaticamente, 24 horas, respondendo com base nas informações da empresa (produtos, preços, condições, horários), qualificando o contato e passando pro vendedor quem está pronto pra comprar. Ele vale a pena quando a empresa recebe mais mensagens do que consegue responder rápido, perde lead fora do horário comercial ou tem vendedores presos em perguntas repetidas.",
    secoes: [
      {
        titulo: "O que o agente faz bem",
        paragrafos: [],
        itens: [
          "Responde na hora, inclusive à noite e no fim de semana",
          "Tira as dúvidas repetidas: preço, prazo, entrega, horário, condições",
          "Faz as perguntas de qualificação que o vendedor faria",
          "Passa a conversa pronta pro vendedor certo",
          "Retoma o contato de quem parou de responder",
          "Registra tudo no CRM com a origem do lead",
        ],
      },
      {
        titulo: "O que ele não deve fazer",
        paragrafos: [
          "Inventar informação, negociar fora das regras da empresa ou fingir ser humano. Um agente bem feito responde só com base no que foi cadastrado e passa pro humano quando a conversa sai disso. As conversas são revisadas e o agente é ajustado com o tempo.",
        ],
      },
      {
        titulo: "Como é a implantação",
        paragrafos: [],
        itens: [
          "Base de conhecimento: produtos, preços, regras, perguntas frequentes e tom de voz",
          "Fluxo: quando qualificar, quando passar pro vendedor, quando retomar",
          "Integração: API oficial do WhatsApp, CRM e sistemas da empresa",
          "Ajuste: leitura das conversas reais nas primeiras semanas",
        ],
      },
      {
        titulo: "Como saber se está funcionando",
        paragrafos: [],
        itens: [
          "Tempo de primeira resposta",
          "Conversas atendidas fora do horário comercial",
          "Leads qualificados passados pro vendedor",
          "Taxa de passagem que vira venda",
          "Custo por cliente antes e depois",
        ],
      },
    ],
    faq: [
      {
        p: "O agente de IA substitui o vendedor?",
        r: "Não. Ele cuida do primeiro atendimento e da qualificação; o vendedor fica com quem está pronto pra comprar.",
      },
      {
        p: "Funciona no número que a empresa já usa?",
        r: "Na maioria dos casos sim, usando a API oficial do WhatsApp. A viabilidade de manter o aplicativo junto é avaliada na implantação.",
      },
      {
        p: "Agente de IA no WhatsApp é gratuito?",
        r: "Existem ferramentas com plano gratuito pra testar, mas um agente integrado ao CRM, com a base da empresa e a API oficial, tem custo de implantação e de uso da API do WhatsApp.",
      },
    ],
    servicos: ["crm-ia-whatsapp", "automacao-e-integracoes", "consultoria-de-marketing-e-vendas"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "como-aparecer-no-google-maps",
    titulo: "Como aparecer no Google Maps: guia pra empresas de João Pessoa | Domous",
    h1: "Como aparecer no Google Maps: guia pra empresas de João Pessoa",
    descricao:
      "Passo a passo pra empresa aparecer no Google Maps e na busca local: Perfil da Empresa no Google, categoria, avaliações, fotos, posts e anúncio local.",
    resposta:
      "Pra aparecer no Google Maps, a empresa precisa de um Perfil da Empresa no Google verificado e completo: categoria certa, serviços, horário, fotos reais, posts frequentes e avaliações respondidas. Segundo o próprio Google, o resultado local depende de três fatores: relevância (o perfil combina com a busca), distância (de quem pesquisa) e proeminência (o quanto a empresa é conhecida, o que inclui avaliações). Pra aparecer no topo mesmo quando está mais longe, dá pra complementar com anúncio local no Google Ads.",
    secoes: [
      {
        titulo: "Passo a passo",
        paragrafos: [],
        itens: [
          "Criar ou reivindicar o Perfil da Empresa no Google e verificar",
          "Escolher a categoria principal mais específica possível e categorias secundárias",
          "Cadastrar serviços, produtos, horário, telefone, WhatsApp e site",
          "Se atende no cliente ou não recebe visita, configurar como empresa de área de atendimento",
          "Subir fotos reais: fachada, equipe, produtos, ambiente",
          "Publicar posts com frequência (novidades, ofertas, eventos)",
          "Pedir avaliação logo depois do atendimento e responder todas",
          "Manter nome, endereço e telefone iguais no site, no Instagram e nos diretórios",
        ],
      },
      {
        titulo: "Avaliações: a alavanca que mais pesa",
        paragrafos: [
          "Volume, frequência e nota das avaliações influenciam a proeminência. O jeito certo de conseguir é pedir no momento certo, com o link direto, pedindo que o cliente conte o que achou. Comprar avaliação ou dar desconto em troca vai contra as regras do Google e pode derrubar o perfil.",
        ],
      },
      {
        titulo: "Empresa com várias unidades",
        paragrafos: [
          "Cada unidade precisa do próprio perfil e, de preferência, de uma página própria no site com endereço, horário e WhatsApp da unidade. Isso ajuda a aparecer na busca de cada bairro e cidade.",
        ],
      },
      {
        titulo: "Anúncio local pra acelerar",
        paragrafos: [
          "Campanhas do Google Ads podem mostrar a empresa no Maps e na busca local pra quem está num raio definido. É o caminho mais rápido enquanto o perfil ganha avaliações e relevância.",
        ],
      },
      {
        titulo: "O Perfil do Google também alimenta as IAs",
        paragrafos: [
          "Quando alguém pergunta pro Gemini ou pra busca do Google \"qual a melhor empresa de X em João Pessoa\", as informações e avaliações do Perfil da Empresa estão entre as fontes usadas. Um perfil completo ajuda a empresa a ser citada também nessas respostas.",
        ],
      },
    ],
    faq: [
      {
        p: "Aparecer no Google Maps é de graça?",
        r: "Sim. Criar e manter o Perfil da Empresa no Google é gratuito. O anúncio no Maps (Google Ads) é pago.",
      },
      {
        p: "Quanto tempo leva pra aparecer bem no Maps?",
        r: "A verificação costuma levar alguns dias. Subir no ranking local depende de avaliações, completude do perfil e concorrência, e costuma levar semanas.",
      },
      {
        p: "Posso cadastrar a empresa sem endereço comercial?",
        r: "Pode, como empresa de área de atendimento, ocultando o endereço e informando as cidades e bairros atendidos.",
      },
    ],
    servicos: ["negocios-locais", "google-ads"],
    publicado: "2026-10-26",
    atualizado: "2026-10-26",
  },
  {
    slug: "quanto-custa-gestao-de-trafego-pago",
    titulo: "Quanto custa gestão de tráfego pago? Como as agências cobram | Guia Domous",
    h1: "Quanto custa gestão de tráfego pago? Como as agências cobram",
    descricao:
      "Os modelos de cobrança de gestão de tráfego (mensalidade fixa, percentual da verba e misto), o que deve estar incluído e a diferença entre gestão e verba de anúncio.",
    resposta:
      "O custo de gestão de tráfego pago tem duas partes separadas: a remuneração da agência (a gestão) e a verba de anúncio, que vai pro Meta, pro Google ou pro TikTok. A gestão costuma ser cobrada de três jeitos: mensalidade fixa, percentual sobre a verba ou um modelo misto. O que muda o valor é a quantidade de canais, o volume de criativos, o que entra além da campanha (página, atendimento, painel) e o prazo de contrato.",
    secoes: [
      {
        titulo: "Gestão e verba são coisas diferentes",
        paragrafos: [
          "A verba é o dinheiro que vai pra plataforma e compra a exibição do anúncio. A gestão é o trabalho de planejar, criar, medir e otimizar. Desconfie de proposta que mistura as duas sem deixar claro quanto vai pra mídia.",
        ],
      },
      {
        titulo: "Os três modelos de cobrança",
        paragrafos: [],
        itens: [
          "Mensalidade fixa: valor mensal independente da verba. É previsível e não incentiva a agência a gastar mais",
          "Percentual da verba: a agência ganha uma parte do que é investido em mídia. Escala junto com o investimento",
          "Misto: um fixo mínimo mais percentual a partir de certa verba, ou fixo mais bônus por resultado",
        ],
      },
      {
        titulo: "O que deve estar incluído",
        paragrafos: [],
        itens: [
          "Plano com estrutura de campanha e meta de custo por cliente",
          "Configuração e conferência de rastreamento (pixel, API de Conversões, GA4)",
          "Criativos novos todo mês, ou o briefing deles",
          "Otimização semanal",
          "Relatório que mostra venda e receita, e não só alcance",
          "Reunião periódica de resultado",
        ],
      },
      {
        titulo: "O que faz o preço subir",
        paragrafos: [],
        itens: [
          "Mais canais (Meta, Google, TikTok, LinkedIn)",
          "Mais criativos por mês ou produção de vídeo",
          "Landing page, CRM, agente de IA e automações",
          "Mais de uma marca, unidade ou região",
        ],
      },
      {
        titulo: "Como a Domous cobra",
        paragrafos: [
          "Gestão por mensalidade, com a verba separada e indo inteira pra mídia. Projetos como loja virtual, landing page, consultoria e CRM com IA têm valor fechado por escopo. O contrato mínimo é de 3 a 6 meses, conforme o escopo, e o plano com o valor vem antes de você assinar. As contas de anúncio ficam no nome da tua empresa.",
        ],
      },
    ],
    faq: [
      {
        p: "Quanto investir em anúncio por mês?",
        r: "Depende do ticket, da margem e de quantos contatos o time consegue atender. A conta parte do custo por cliente que a empresa aguenta pagar e do número de vendas que quer no mês.",
      },
      {
        p: "Gestor de tráfego freelancer ou agência?",
        r: "O freelancer costuma custar menos e cuidar só da campanha. A agência tende a cobrir mais frentes (criativo, página, medição, atendimento) e ter continuidade se alguém sair. A escolha depende de quanto do funil a empresa já resolve internamente.",
      },
    ],
    servicos: ["trafego-pago", "mensuracao-e-painel"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
  {
    slug: "marketing-para-distribuidora",
    titulo: "Marketing para distribuidora: como vender mais pra empresa e consumidor final | Guia Domous",
    h1: "Marketing para distribuidora: como vender mais pra empresa e pro consumidor final",
    descricao:
      "Estratégia de marketing pra distribuidoras e atacado: separar PF e PJ, vendedor no WhatsApp com processo, Google pra demanda de busca e medição de quanto o digital vende.",
    resposta:
      "O marketing de uma distribuidora rende mais quando separa os dois públicos que quase todo mundo mistura: o consumidor final, que compra pouco e de vez em quando, e o profissional ou a empresa, que compra todo mês. Cada um precisa de campanha, oferta e atendimento próprios. Com isso, vendedor no WhatsApp com processo, Google pra quem já procura o produto e medição de pedido por campanha, a distribuidora sai da briga só por preço.",
    secoes: [
      {
        titulo: "PF e PJ: campanhas separadas",
        paragrafos: [
          "Quem vai trocar um chuveiro procura preço e entrega rápida. O eletricista, o empreiteiro, a construtora e o condomínio procuram condição, prazo, estoque e um vendedor que resolva. Misturar os dois na mesma campanha faz o anúncio falar com ninguém e o vendedor tratar o cliente grande como pequeno.",
        ],
      },
      {
        titulo: "O vendedor como ativo de marketing",
        paragrafos: [
          "Vídeo curto do vendedor resolvendo um problema de obra, com o WhatsApp dele no botão, costuma render mais que post de oferta. É o que a distribuidora tem e o marketplace não tem: gente que entende do produto.",
        ],
      },
      {
        titulo: "Processo no WhatsApp",
        paragrafos: [],
        itens: [
          "Distribuição das conversas entre vendedores",
          "Orçamento pela foto da lista do cliente",
          "Meta de tempo de resposta",
          "Etiqueta de origem em cada conversa (campanha, unidade, PF ou PJ)",
          "Retomada de orçamento que não fechou",
        ],
      },
      {
        titulo: "Atacado precisa de processo comercial ativo",
        paragrafos: [
          "Pro cliente empresa, anúncio ajuda, mas o que mais vende é processo: lista de empresas da região, cadência de contato, visita, proposta e CRM. O marketing alimenta e o comercial converte.",
        ],
      },
      {
        titulo: "Medir quanto o digital vende",
        paragrafos: [
          "Pedido que fecha no WhatsApp ou no balcão some do relatório se ninguém registra a origem. Cruzando conversa, orçamento e pedido do ERP com a campanha, dá pra saber o custo por cliente de cada público.",
        ],
      },
    ],
    faq: [
      {
        p: "Distribuidora precisa de loja virtual?",
        r: "Não necessariamente. Catálogo, WhatsApp com processo e Google costumam vir antes. A loja entra quando o mix e a logística permitem vender fora da região ou sem vendedor.",
      },
      {
        p: "Como anunciar pra profissional de obra?",
        r: "Com criativo que fala da rotina dele (obra, prazo, problema técnico), condição de profissional e atendimento rápido no WhatsApp, segmentando a região de entrega.",
      },
    ],
    servicos: ["meta-ads", "google-ads", "consultoria-de-marketing-e-vendas"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
  {
    slug: "api-de-conversoes-do-meta",
    titulo: "API de Conversões do Meta: o que é e por que importa pra quem vende pelo WhatsApp | Guia Domous",
    h1: "API de Conversões do Meta: o que é e por que importa pra quem vende pelo WhatsApp",
    descricao:
      "O que é a API de Conversões (CAPI) do Meta, a diferença pro pixel, como ela leva a venda do WhatsApp e do CRM de volta pro anúncio e quando vale implantar.",
    resposta:
      "A API de Conversões do Meta é uma forma de enviar os eventos de venda e de lead direto do servidor ou do sistema da empresa pro Meta, sem depender só do pixel no navegador. Pra quem vende pelo WhatsApp ou na loja, ela é o caminho pra contar ao Meta quais conversas viraram venda. Com essa informação, a campanha aprende a buscar mais gente parecida com quem compra.",
    secoes: [
      {
        titulo: "Pixel x API de Conversões",
        paragrafos: [
          "O pixel roda no navegador do visitante e registra o que acontece no site. Bloqueadores, navegação privada e restrições de privacidade fazem parte desses eventos se perder. A API de Conversões manda os eventos pelo servidor ou pela integração com o sistema, e o recomendado é usar os dois juntos, com deduplicação.",
        ],
      },
      {
        titulo: "Por que importa pra venda no WhatsApp",
        paragrafos: [
          "Quando a venda fecha no WhatsApp, o pixel não vê nada: a pessoa nunca passou pelo site. Sem a API, o Meta só sabe que alguém iniciou uma conversa, e passa a otimizar pra gerar conversa, não venda. Com a venda voltando pela API, a otimização muda de alvo.",
        ],
      },
      {
        titulo: "O que precisa pra funcionar",
        paragrafos: [],
        itens: [
          "Registrar a venda em algum lugar (CRM, planilha estruturada, ERP)",
          "Guardar a origem do contato (de preferência pela API oficial do WhatsApp)",
          "Integração que envie a venda pro Meta com os dados de correspondência",
          "Conferência no Gerenciador de Eventos da qualidade da correspondência",
        ],
      },
      {
        titulo: "Quando vale implantar",
        paragrafos: [
          "Quando a empresa investe com frequência em campanha de mensagem ou de cadastro e a venda acontece fora do site. Quanto maior o ticket e mais longo o ciclo, mais a campanha ganha em aprender com a venda real.",
        ],
      },
    ],
    faq: [
      {
        p: "A API de Conversões substitui o pixel?",
        r: "Não. O recomendado é usar os dois, com o mesmo identificador de evento pra evitar contagem dupla.",
      },
      {
        p: "Precisa de programador?",
        r: "Depende da origem dos dados. Muitas integrações são feitas com ferramentas como Make ou n8n, ou pela integração nativa do CRM.",
      },
    ],
    servicos: ["mensuracao-e-painel", "automacao-e-integracoes", "meta-ads"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
  {
    slug: "performance-max-o-que-e",
    titulo: "Performance Max: o que é, como funciona e quando usar | Guia Domous",
    h1: "Performance Max: o que é, como funciona e quando usar",
    descricao:
      "O que é a campanha Performance Max do Google Ads, onde ela aparece, o que ela precisa pra funcionar e os cuidados pra não gastar com o público errado.",
    resposta:
      "Performance Max é um tipo de campanha do Google Ads que usa automação pra mostrar anúncios em vários canais do Google ao mesmo tempo (Pesquisa, Shopping, YouTube, Display, Gmail, Discover e Maps) a partir dos objetivos de conversão, do catálogo e dos materiais da empresa. Ela funciona bem quando as conversões estão bem configuradas e o catálogo está organizado; sem isso, a automação otimiza pro sinal errado.",
    secoes: [
      {
        titulo: "Como funciona",
        paragrafos: [
          "Em vez de escolher palavra-chave e canal, a empresa entrega objetivos, verba, textos, imagens, vídeos, o catálogo do Merchant Center e sinais de público. O Google decide onde e pra quem mostrar, buscando o maior número de conversões ou de valor de conversão.",
        ],
      },
      {
        titulo: "Quando faz sentido",
        paragrafos: [],
        itens: [
          "E-commerce com catálogo no Merchant Center",
          "Negócio local que quer aparecer no Maps e na busca",
          "Empresa com conversão bem medida e volume suficiente pra automação aprender",
        ],
      },
      {
        titulo: "Os cuidados",
        paragrafos: [],
        itens: [
          "Conversão errada (clique em botão contando como venda) ensina a campanha a buscar clique",
          "Sem exclusão de marca, a campanha pode gastar com quem já ia procurar a empresa",
          "Materiais fracos derrubam o desempenho em YouTube e Display",
          "Acompanhar os relatórios de termos e de canais pra saber o que ela está fazendo",
        ],
      },
    ],
    faq: [
      {
        p: "Performance Max substitui a campanha de Pesquisa?",
        r: "Nem sempre. Muitas contas rodam as duas: Pesquisa pra termos de maior intenção, com controle, e Performance Max pra alcance e catálogo.",
      },
      {
        p: "Precisa de vídeo pra rodar Performance Max?",
        r: "Não é obrigatório, mas sem vídeo o Google pode gerar um automaticamente, quase sempre fraco. Vale subir vídeos próprios.",
      },
    ],
    servicos: ["google-ads", "ecommerce"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
  {
    slug: "como-anunciar-em-joao-pessoa",
    titulo: "Como anunciar em João Pessoa: região, público e o que funciona | Guia Domous",
    h1: "Como anunciar em João Pessoa: região, público e o que funciona",
    descricao:
      "Guia pra empresas que anunciam na Grande João Pessoa: recorte por região e CEP, Meta e Google pra público local, prova local e atendimento pelo WhatsApp.",
    resposta:
      "Pra anunciar bem em João Pessoa, a empresa precisa recortar o público pela região onde o cliente dela mora ou circula (bairros, raio da loja ou lista de CEPs), usar prova local que o paraibano reconhece e responder rápido no WhatsApp, que é onde a maior parte da venda acontece. Pra atender a Grande João Pessoa, vale incluir Cabedelo, Bayeux e Santa Rita na segmentação quando a entrega ou o atendimento chegam lá.",
    secoes: [
      {
        titulo: "Recorte por região",
        paragrafos: [
          "Anunciar pra cidade inteira desperdiça verba com quem não compra. O recorte pode ser por raio a partir da loja, por bairros ou por lista de CEPs. Pra produto de ticket alto, a segmentação por CEP de alta renda costuma baixar o custo por cliente.",
        ],
      },
      {
        titulo: "Prova local",
        paragrafos: [
          "Empresário e consumidor paraibano confiam mais quando reconhecem o lugar, a rua e as empresas. Criativo gravado na cidade, com gente daqui e resultado em negócio que o público conhece, tende a performar melhor que peça genérica de banco de imagem.",
        ],
      },
      {
        titulo: "Google pra quem já procura",
        paragrafos: [
          "Buscas com \"em João Pessoa\" ou \"perto de mim\" mostram intenção de compra. Pesquisa no Google Ads e Perfil da Empresa no Google bem feito capturam essa demanda, inclusive no Maps.",
        ],
      },
      {
        titulo: "Atendimento é parte da campanha",
        paragrafos: [
          "Em João Pessoa, a venda acontece quase sempre no WhatsApp. Resposta rápida, roteiro de atendimento e retomada de quem não respondeu valem tanto quanto o anúncio.",
        ],
      },
    ],
    faq: [
      {
        p: "Dá pra anunciar só pra um bairro?",
        r: "Dá, por raio ou por CEP. O cuidado é não fechar tanto o público que a campanha fique sem volume pra aprender.",
      },
      {
        p: "Agência local ou de fora?",
        r: "Uma agência de João Pessoa conhece a cidade, os bairros e o comportamento do público, e consegue fazer reunião presencial. O que mais importa, de qualquer forma, é medir custo por cliente e receita.",
      },
    ],
    servicos: ["trafego-pago", "negocios-locais", "meta-ads"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
  {
    slug: "criativo-e-a-nova-segmentacao-meta-ads",
    titulo: "O criativo virou a segmentação: o que mudou no Meta Ads | Guia Domous",
    h1: "O criativo virou a segmentação: o que mudou no Meta Ads",
    descricao:
      "Por que no Meta Ads atual o criativo pesa mais que a escolha de público, como organizar criativos por ângulo e quantos testar por mês.",
    resposta:
      "No Meta Ads atual, o sistema de entrega usa o próprio criativo pra decidir pra quem mostrar o anúncio, com cada vez menos dependência dos interesses escolhidos à mão. Na prática, o criativo virou a principal forma de segmentação: um vídeo que fala com dono de loja encontra dono de loja. Por isso as contas que mais rendem trabalham com público mais aberto e muita variação de criativo, testando ângulos diferentes todo mês.",
    secoes: [
      {
        titulo: "O que mudou",
        paragrafos: [
          "Os sistemas de entrega do Meta passaram a usar aprendizado de máquina pra escolher, entre milhões de anúncios, qual mostrar pra cada pessoa. O conteúdo do anúncio (imagem, texto, fala do vídeo) virou um dos sinais mais fortes dessa escolha. Empilhar interesses ajuda cada vez menos.",
        ],
      },
      {
        titulo: "Como organizar criativo por ângulo",
        paragrafos: [],
        itens: [
          "Dor: o problema que o cliente sente",
          "Prova: resultado, depoimento, número",
          "Objeção: a dúvida que trava a compra, respondida",
          "Desejo: o resultado que o cliente quer",
        ],
      },
      {
        titulo: "Quantos criativos por mês",
        paragrafos: [
          "A Domous trabalha com 6 a 12 criativos novos por mês, organizados em 3 a 5 ângulos, testando um ângulo de cada vez. Diversidade de persona e de formato (vídeo, carrossel, estático) ajuda o sistema a encontrar públicos diferentes.",
        ],
      },
      {
        titulo: "Como ler o resultado",
        paragrafos: [],
        itens: [
          "Taxa de parada no vídeo (thumbstop) pra saber se o gancho funciona",
          "CTR pra saber se a mensagem convence",
          "Custo por conversa real e por venda, por criativo",
          "Frequência e custo por mil impressões pra perceber desgaste",
        ],
      },
    ],
    faq: [
      {
        p: "Ainda vale segmentar por interesse?",
        r: "Em alguns casos, como teste ou em contas pequenas, mas o ganho maior hoje vem de criativo bom com público mais aberto e boa medição de conversão.",
      },
      {
        p: "Por que o custo do anúncio sobe com o tempo?",
        r: "Entre outros motivos, porque o criativo cansa: a mesma peça mostrada muitas vezes perde eficiência. Renovar criativo com frequência segura o custo.",
      },
    ],
    servicos: ["meta-ads", "conteudo-e-audiovisual"],
    publicado: "2026-10-27",
    atualizado: "2026-10-27",
  },
];

export const guiaPorSlug = (slug: string) => guias.find((g) => g.slug === slug);
