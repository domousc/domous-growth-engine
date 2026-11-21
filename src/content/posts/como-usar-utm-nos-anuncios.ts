import type { Post } from "../tipos";

const post: Post = {
  slug: "como-usar-utm-nos-anuncios",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "como usar utm",
  titulo: "Como usar UTM nos anúncios do Meta e do Google pra saber de onde veio cada venda | Domous",
  h1: "Como usar UTM nos anúncios do Meta e do Google pra saber de onde veio cada venda",
  descricao:
    "Como usar UTM nos anúncios do Meta e do Google: quais parâmetros preencher, padrão de nomes, macros dinâmicas e como levar a origem até o WhatsApp e o CRM.",
  resposta:
    "Pra usar UTM, você acrescenta ao link do anúncio os parâmetros utm_source, utm_medium e utm_campaign, que o Google Analytics exige, e de preferência utm_content pra separar criativos. No Meta Ads, as macros dinâmicas preenchem o nome da campanha, do conjunto e do anúncio sozinhas; no Google Ads, a marcação automática já cuida do Analytics, e a UTM entra pelo sufixo do URL final quando outra ferramenta precisa ler a origem. O passo que quase todo mundo esquece é levar essa origem até o WhatsApp e o CRM, onde a venda acontece.",
  secoes: [
    {
      titulo: "O que é UTM e por que ela importa pra quem vende pelo WhatsApp?",
      paragrafos: [
        "UTM é um pedaço de texto que vai no fim do link e diz de onde a pessoa veio: qual plataforma, qual campanha, qual criativo. O Google Analytics lê esses parâmetros e organiza o tráfego nos relatórios de aquisição.",
        "Pra quem vende pelo WhatsApp, a UTM é o começo da resposta pra pergunta que mais importa no fim do mês: quanto custou cada cliente e qual campanha trouxe a receita. Sem a origem anotada, o gerenciador mostra cliques e conversas, o comercial mostra vendas, e ninguém consegue ligar uma coisa à outra.",
      ],
    },
    {
      titulo: "Quais parâmetros UTM preencher?",
      paragrafos: [
        "A Central de Ajuda do Google Analytics diz que utm_source, utm_medium e utm_campaign são obrigatórios sempre que você marca um link. Os outros ajudam a detalhar:",
      ],
      itens: [
        "utm_source: a origem, como meta, google ou newsletter",
        "utm_medium: o meio, como cpc, pago ou email",
        "utm_campaign: o nome da campanha ou da oferta",
        "utm_content: o criativo ou a variação, útil pra comparar anúncios",
        "utm_term: a palavra-chave paga, ou outro detalhe que você queira guardar",
        "utm_id: o ID da campanha, que o Google recomenda junto dos três obrigatórios",
      ],
    },
    {
      titulo: "Como criar um padrão de nomes que não vira bagunça?",
      paragrafos: [
        "O Google avisa que os valores diferenciam maiúsculas de minúsculas: utm_source=meta e utm_source=Meta aparecem como duas origens diferentes no relatório. A recomendação do próprio Google é usar tudo em minúsculas.",
        "Aqui a gente segue algumas regras simples. Tudo minúsculo, sem acento e sem espaço, com hífen separando palavras. A mesma origem sempre com o mesmo nome. E o nome da campanha no gerenciador já montado do jeito que a gente quer ler no relatório, por exemplo: leads-whatsapp-jp-moveis-nov26.",
        "Vale guardar esse padrão num documento curto que todo mundo do time consulta. Numa loja de João Pessoa com duas pessoas subindo campanha em canais diferentes, se ninguém combinar antes, a mesma origem logo aparece escrita de vários jeitos e o relatório se divide em pedaços.",
      ],
    },
    {
      titulo: "Como usar UTM no Meta Ads com parâmetros dinâmicos?",
      paragrafos: [
        "No Meta Ads, a UTM vai no campo de parâmetros de URL do anúncio. Em vez de digitar o nome de cada campanha na mão, use as macros dinâmicas que a documentação da Meta lista: {{campaign.name}}, {{adset.name}} e {{ad.name}} pros nomes, e {{campaign.id}}, {{adset.id}} e {{ad.id}} pros IDs.",
        "Um modelo que funciona bem:",
        "utm_source=meta&utm_medium=pago&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}",
        "Um cuidado: segundo a documentação da Meta, o nome usado pela macro é o que existia quando a campanha, o conjunto ou o anúncio foi publicado pela primeira vez. Se você renomear depois, o link continua com o nome antigo. Por isso o nome certo precisa estar lá antes de publicar. Se o time costuma renomear, prefira as macros de ID, que não mudam.",
      ],
    },
    {
      titulo: "E no Google Ads, precisa de UTM?",
      paragrafos: [
        "Pro Google Analytics, a marcação automática do Google Ads já resolve. Ela acrescenta o gclid ao link de cada clique, e o Analytics usa esse identificador pra trazer os dados da campanha. A ajuda do Google Analytics recomenda esse caminho e deixa a marcação manual dos links do Google Ads pra casos especiais.",
        "A UTM entra quando outra ferramenta precisa ler a origem: o CRM, a planilha do comercial, o formulário da página. Nesse caso, coloque os parâmetros no sufixo do URL final, que pode ser definido na conta, na campanha ou no grupo de anúncios. Os parâmetros ValueTrack ajudam a preencher valores sozinhos, como {campaignid}, {adgroupid}, {keyword} e {device}.",
        "A ajuda do Google lista {campaignid}, sem um parâmetro com o nome da campanha. E o {keyword} vem vazio quando o anúncio aparece sem uma palavra-chave correspondente, como no Performance Max. Pra ter o nome legível, escreva o nome da campanha direto no sufixo configurado no nível de cada campanha.",
      ],
    },
    {
      titulo: "Como levar a origem até o WhatsApp e o CRM?",
      paragrafos: [
        "Aqui está o buraco da maioria das empresas. A UTM chega até a página, a pessoa toca no botão do WhatsApp, e a origem fica pra trás. Dois caminhos resolvem boa parte dos casos:",
      ],
      itens: [
        "Anúncio que leva direto pra conversa: como não passa por um link de site, a UTM não se aplica. Quem usa a API do WhatsApp Business recebe, segundo a documentação da Meta, um bloco de referência na primeira mensagem da conversa, com dados do anúncio e um identificador do clique. A integração precisa guardar isso no contato do CRM logo nessa primeira mensagem",
        "Página com botão de WhatsApp: um script na página lê a UTM e coloca um código curto na mensagem pronta do botão. O atendimento ou a automação registra esse código como origem no CRM. Se a pessoa apagar a mensagem pronta antes de enviar, a origem se perde, então vale acompanhar quantos contatos chegam sem código",
      ],
    },
    {
      titulo: "Como saber se a UTM está funcionando?",
      paragrafos: [
        "Clique no próprio anúncio pela prévia, confira se o link abre com os parâmetros preenchidos e veja se a visita aparece no relatório de aquisição do Analytics com a origem certa. Redirecionamento no site pode apagar os parâmetros, então teste o caminho inteiro até a página final.",
        "Depois, uma vez por semana, compare três números por campanha: conversas que o gerenciador reporta, contatos que chegaram no CRM com origem marcada e vendas. A diferença entre o primeiro e o segundo mostra quanto está escapando. O terceiro é o que permite calcular o custo por cliente de cada campanha, que é a conta que decide onde colocar a verba.",
      ],
    },
  ],
  faq: [
    {
      p: "UTM funciona em anúncio de clique pro WhatsApp?",
      r: "Não diretamente, porque a pessoa vai pra conversa sem passar por um link de site. Pela API do WhatsApp Business, a Meta envia dados do anúncio na primeira mensagem, e é isso que a integração deve guardar no CRM.",
    },
    {
      p: "Preciso colocar UTM no Google Ads se a marcação automática está ligada?",
      r: "Pro Google Analytics, a marcação automática basta, e é o caminho que o próprio Google recomenda. Use UTM no sufixo do URL final quando o CRM ou outra ferramenta precisar ler a origem do contato.",
    },
    {
      p: "Posso usar UTM em link interno do meu site?",
      r: "Não é recomendado. A UTM serve pra quem chega de fora; num link interno, ela troca a origem real da visita e bagunça o relatório.",
    },
  ],
  servicos: ["mensuracao-e-painel", "automacao-e-integracoes", "crm-ia-whatsapp"],
  publicado: "2026-11-21",
  atualizado: "2026-11-21",
  fontes: [
    { nome: "Central de Ajuda do Google Analytics: URLs personalizados e parâmetros UTM", url: "https://support.google.com/analytics/answer/10917952?hl=pt-BR" },
    { nome: "Central de Ajuda do Google Analytics: marcar URLs finais do Google Ads", url: "https://support.google.com/analytics/answer/10723132?hl=pt-BR" },
    { nome: "Central de Ajuda do Google Ads: marcação automática", url: "https://support.google.com/google-ads/answer/3095550?hl=pt-BR" },
    { nome: "Central de Ajuda do Google Ads: configurar o rastreamento com parâmetros ValueTrack", url: "https://support.google.com/google-ads/answer/6305348?hl=pt-BR" },
    { nome: "Meta for Developers: tags de URL para rastreamento", url: "https://developers.facebook.com/documentation/ads-commerce/instagram/ads-api/guides/url-tags-for-tracking" },
    { nome: "Meta for Developers: webhook de mensagens do WhatsApp Business", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/text" },
  ],
};

export default post;
