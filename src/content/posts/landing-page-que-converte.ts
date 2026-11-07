import type { Post } from "../tipos";

const post: Post = {
  slug: "landing-page-que-converte",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "landing page que converte",
  titulo: "Landing page que converte: checklist pra quem anuncia no tráfego pago | Domous",
  h1: "Landing page que converte: checklist pra quem anuncia no tráfego pago",
  descricao:
    "Landing page que converte tráfego pago: checklist de promessa, prova, objeções, velocidade, caminho até o WhatsApp e medição, antes de subir o anúncio.",
  resposta:
    "Uma landing page que converte tráfego pago tem seis coisas no lugar: a promessa do anúncio repetida no topo, prova de quem já comprou, respostas pras objeções que travam a venda, carregamento rápido no celular, um caminho curto até o WhatsApp ou o formulário e medição de cada contato. Se uma delas falta, o anúncio paga o clique e a página perde a pessoa no meio do caminho.",
  secoes: [
    {
      titulo: "Por que a landing page decide o resultado do anúncio?",
      paragrafos: [
        "O anúncio faz a pessoa clicar. A página faz a pessoa chamar, se cadastrar ou comprar. Quando a campanha traz clique barato e quase nenhum contato, o problema costuma estar entre o clique e o botão.",
        "No Google Ads isso pesa duas vezes. A experiência na página de destino é um dos três componentes do Índice de Qualidade, ao lado da taxa de cliques esperada e da relevância do anúncio, segundo a central de ajuda do Google. Página ruim deixa o contato mais caro e ainda pode piorar a entrega do anúncio.",
        "Antes de mexer em verba ou público, vale passar a página por este checklist. A gente usa ele toda vez que assume uma conta nova.",
      ],
    },
    {
      titulo: "1. A promessa do anúncio aparece no topo?",
      paragrafos: [
        "A pessoa clicou por causa de uma frase. Se a página abre falando de outra coisa, ela acha que caiu no lugar errado e volta. O título da página precisa repetir a promessa do anúncio com as mesmas palavras, e o subtítulo diz pra quem é e o que acontece depois do clique.",
        "Um teste simples: mostre só a primeira tela do celular pra alguém de fora e pergunte o que a empresa vende e o que ela quer que a pessoa faça. Se a resposta demorar, o topo precisa de ajuste.",
        "Uma página por oferta ajuda muito. Quem anuncia um apartamento de dois quartos em Manaíra e outro de quatro suítes no Altiplano, aqui em João Pessoa, fala com compradores diferentes e precisa de duas páginas.",
      ],
    },
    {
      titulo: "2. Tem prova de quem já comprou?",
      paragrafos: [
        "Empresário que pesquisa fornecedor quer ver resultado num negócio parecido com o dele. Comprador de imóvel quer ver obra andando. Paciente quer ver estrutura e equipe. A prova precisa estar perto do primeiro botão, antes da pessoa decidir se rola a página.",
        "Os formatos que mais usamos:",
      ],
      itens: [
        "Depoimento em vídeo curto de cliente, com nome e cidade quando ele autorizar",
        "Print de avaliação do Google com a nota e o número de avaliações",
        "Foto real do produto, da loja, da obra ou da equipe no lugar de imagem de banco",
        "Números da própria empresa que dá pra conferir: anos de mercado, entregas, clientes atendidos",
        "Logos de empresas atendidas, quando o contrato permite",
      ],
    },
    {
      titulo: "3. A página responde as objeções que o vendedor ouve?",
      paragrafos: [
        "Toda venda trava nas mesmas perguntas: preço, prazo, forma de pagamento, garantia, entrega, se atende a minha região. Pergunte ao comercial quais são as cinco dúvidas que mais aparecem no WhatsApp e responda cada uma na página, de preferência em perguntas frequentes no fim.",
        "Isso tira trabalho do vendedor e filtra o contato. Quem chama depois de ler já sabe o básico e chega mais perto de fechar.",
        "Clínica e consultório têm um cuidado a mais: a página segue as regras de publicidade do conselho da profissão, sem promessa de resultado e sem antes e depois quando o conselho proíbe.",
      ],
    },
    {
      titulo: "4. Carrega rápido no celular?",
      paragrafos: [
        "Quase todo clique de Instagram chega pelo celular, muitas vezes no 4G. Página pesada perde gente antes de aparecer na tela.",
        "O Google usa as Core Web Vitals como referência. Os limites considerados bons são LCP de até 2,5 segundos (o tempo pro maior elemento aparecer), INP de até 200 milissegundos (a resposta ao toque) e CLS de até 0,1 (o quanto a tela pula enquanto carrega), medidos no percentil 75 das visitas, segundo o web.dev. Dá pra testar de graça no PageSpeed Insights.",
        "Os vilões mais comuns são imagem enorme sem compressão, vídeo que toca sozinho no topo e um monte de scripts de chat, pop-up e pixel duplicado.",
      ],
    },
    {
      titulo: "5. O caminho até o WhatsApp é curto?",
      paragrafos: [
        "Cada campo a mais no formulário e cada clique a mais até a conversa custam contato. Pra quem vende pelo WhatsApp, o caminho mais curto costuma ser um botão que abre a conversa com uma mensagem já escrita.",
        "O WhatsApp permite isso com o link no formato wa.me/número?text=mensagem, com o número no formato internacional e o texto codificado pra URL, segundo a central de ajuda do WhatsApp. Uma mensagem diferente por página ou por campanha já mostra ao vendedor de onde aquele contato veio.",
      ],
      itens: [
        "Um botão de ação principal, repetido ao longo da página com o mesmo texto",
        "Botão fixo no rodapé do celular",
        "Formulário com o mínimo de campos que o comercial precisa pra atender",
        "Nada de menu levando pro resto do site no meio da decisão",
      ],
    },
    {
      titulo: "6. Dá pra medir cada contato?",
      paragrafos: [
        "Sem medição, você não sabe se o problema é a página ou o anúncio. O mínimo é registrar o clique no botão do WhatsApp e o envio do formulário como conversão no GA4, no Pixel da Meta e no Google Ads.",
        "Depois disso, vale olhar o comportamento. O Microsoft Clarity é gratuito, segundo a própria Microsoft, e mostra gravação de sessão e mapa de calor. Em uma semana de tráfego você enxerga onde as pessoas param de rolar, onde tentam clicar e o que ignoram.",
        "O passo seguinte é ligar a página às vendas: marcar a origem de cada conversa no CRM e devolver as vendas pras plataformas. Assim você compara páginas pelo custo por cliente, que é o número que importa.",
      ],
    },
  ],
  faq: [
    {
      p: "Landing page ou anúncio direto pro WhatsApp: qual é melhor?",
      r: "Depende do produto. Oferta simples e conhecida costuma ir bem direto pro WhatsApp. Produto de ticket alto, que precisa de prova e explicação, tende a chegar com contato mais qualificado quando passa por uma página antes.",
    },
    {
      p: "O que não pode faltar numa landing page?",
      r: "A promessa do anúncio no topo, prova, respostas às objeções, um botão de ação claro, carregamento rápido no celular e medição de cada contato.",
    },
    {
      p: "Landing page precisa ser longa ou curta?",
      r: "Do tamanho da dúvida de quem compra. Produto barato e conhecido pede página curta. Imóvel, móveis planejados e serviço de ticket alto pedem mais prova e mais respostas, então a página cresce.",
    },
    {
      p: "Como saber se a minha landing page está convertendo bem?",
      r: "Compare a taxa de contato por visita e o custo por cliente entre páginas e ao longo do tempo, com a medição bem configurada. Gravações de sessão ajudam a entender onde as pessoas desistem.",
    },
  ],
  servicos: ["landing-page-e-cro", "mensuracao-e-painel", "consultoria-de-marketing-e-vendas"],
  publicado: "2026-11-07",
  atualizado: "2026-11-07",
  fontes: [
    { nome: "Ajuda do Google Ads: sobre o Índice de Qualidade (experiência na página de destino)", url: "https://support.google.com/google-ads/answer/6167118?hl=pt-BR" },
    { nome: "web.dev: Core Web Vitals e limites de LCP, INP e CLS", url: "https://web.dev/articles/vitals?hl=pt-br" },
    { nome: "Central de ajuda do WhatsApp: como usar o link wa.me com mensagem pronta", url: "https://faq.whatsapp.com/5913398998672934" },
    { nome: "Microsoft Learn: perguntas frequentes do Clarity (serviço gratuito, gravação de sessão e mapa de calor)", url: "https://learn.microsoft.com/en-us/clarity/faq" },
  ],
};

export default post;
