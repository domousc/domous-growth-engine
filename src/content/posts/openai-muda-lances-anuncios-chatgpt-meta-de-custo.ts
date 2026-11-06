import type { Post } from "../tipos";

const post: Post = {
  slug: "openai-muda-lances-anuncios-chatgpt-meta-de-custo",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "lance anúncios chatgpt",
  titulo: "OpenAI troca o lance máximo por meta de custo nos anúncios do ChatGPT: o que muda pra quem anuncia | Domous News",
  h1: "OpenAI troca o lance máximo por meta de custo nos anúncios do ChatGPT: o que muda pra quem anuncia",
  descricao:
    "A partir de 9/11, campanhas novas nos anúncios do ChatGPT usam meta de custo por conversão ou por clique. O lance máximo sai em 1º/1/2027. O que ajustar antes.",
  resposta:
    "A OpenAI avisou os anunciantes do ChatGPT, em 5 de novembro de 2026, que a partir de 9 de novembro as campanhas novas passam a usar meta de custo: CPA desejado pra campanhas de conversão e CPC desejado pra campanhas de clique. Os lances máximos (Max Bid e Max CPC) deixam de existir em 1º de janeiro de 2027, quando as campanhas restantes serão migradas. Pra quem já anuncia ou pensa em anunciar no ChatGPT, a entrega passa a depender mais da qualidade do sinal de conversão e da meta definida.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "Segundo o Search Engine Roundtable, que publicou em 5 de novembro o e-mail enviado pela OpenAI aos anunciantes, o gerenciador de anúncios do ChatGPT muda as opções de lance na segunda-feira, 9 de novembro. Campanhas de conversão criadas a partir dessa data usam CPA desejado (Target CPA) no lugar do lance máximo (Max Bid). Campanhas de clique usam CPC desejado (Target CPC) no lugar do CPC máximo (Max CPC). O Search Engine Land e a consultoria Relevant Audience, que também consultou a central de ajuda da OpenAI, confirmam as datas.",
        "As campanhas que já estão no ar seguem com a estratégia atual até 31 de dezembro e podem ser trocadas a qualquer momento. Em 1º de janeiro de 2027, o Max Bid e o Max CPC são aposentados e a OpenAI move o que restar pra estratégia equivalente. A opção de maximizar resultados, em que o sistema define o lance sozinho, continua existindo com outro nome: lances inteligentes (intelligent bidding).",
      ],
    },
    {
      titulo: "Lance máximo e meta de custo: a diferença na prática",
      paragrafos: [
        "No lance máximo, o anunciante diz quanto aceita pagar no máximo por resultado. Na meta de custo, ele informa o custo médio que quer atingir, e o sistema pode dar lance acima ou abaixo desse valor em cada leilão pra chegar perto da média, segundo a descrição da central de ajuda da OpenAI reproduzida nas reportagens. É a mesma lógica que o anunciante já conhece do CPA desejado no Google Ads.",
        "A própria OpenAI fez dois alertas no e-mail: a meta deve partir do custo real recente da campanha, e meta muito apertada ou sinal de conversão fraco reduzem a entrega e deixam verba sem gastar. O comunicado não diz qual meta será aplicada nas campanhas migradas automaticamente em janeiro.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "Os anúncios no ChatGPT chegaram ao Brasil em 4 de agosto de 2026, pra usuários dos planos gratuito e Go, segundo o Meio & Mensagem e a CNN Brasil. Com a meta de custo, o algoritmo da OpenAI passa a decidir mais sobre quanto pagar em cada leilão, e a decisão depende do que o pixel ou a API de Conversões informam. Empresa que mede mal a conversão vai ensinar o sistema a buscar o resultado errado. As reportagens não detalham diferenças por país, então vale conferir no painel da conta quando a mudança aparecer.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Levantar o custo por conversão e por clique das últimas semanas em cada campanha do ChatGPT antes de 9 de novembro: esse número vira a primeira meta",
        "Conferir se o pixel ou a API de Conversões da OpenAI enviam o evento certo (lead qualificado ou venda) e se há alerta de qualidade do evento no painel",
        "Migrar as campanhas atuais por conta própria até dezembro, uma de cada vez, antes da troca automática de janeiro",
        "Começar com meta um pouco acima do custo real e apertar aos poucos, acompanhando se a verba está sendo gasta",
        "Comparar o custo por cliente do ChatGPT com o do Google e do Meta no mesmo painel, com a mesma regra de atribuição",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A mudança aproxima o ChatGPT do que Google e Meta já fazem: o anunciante define a meta e a plataforma decide o lance. Isso funciona quando a conversão enviada é a que importa pro negócio. Pra quem vende pelo WhatsApp, a gente recomenda medir o lead que virou conversa e, se possível, a venda, antes de colocar a meta. Sem esse dado, o sistema otimiza pra um evento que pode nunca virar venda. A base de decisão continua sendo o custo por cliente, comparado entre canais.",
      ],
    },
  ],
  faq: [
    {
      p: "Quando muda o lance dos anúncios no ChatGPT?",
      r: "Em 9 de novembro de 2026 as campanhas novas passam a usar CPA desejado ou CPC desejado. Em 1º de janeiro de 2027 o lance máximo e o CPC máximo deixam de existir e as campanhas restantes são migradas pela OpenAI.",
    },
    {
      p: "Minha campanha atual no ChatGPT para de rodar?",
      r: "Segundo o e-mail da OpenAI, as campanhas existentes seguem com a estratégia atual até 31 de dezembro e podem ser trocadas antes. A migração automática acontece em 1º de janeiro de 2027.",
    },
    {
      p: "Preciso de pixel pra usar o CPA desejado?",
      r: "A OpenAI recomenda confirmar que o pixel ou a API de Conversões enviam o evento escolhido. Sem sinal de conversão confiável, a própria empresa avisa que a entrega pode cair.",
    },
  ],
  servicos: ["trafego-pago", "mensuracao-e-painel"],
  publicado: "2026-11-06",
  atualizado: "2026-11-06",
  fontes: [
    { nome: "Search Engine Roundtable, 05/11/2026: OpenAI Updates ChatGPT Ads Bidding Options For Max Bid or Max CPC", url: "https://www.seroundtable.com/openai-updates-chatgpt-ads-bidding-options-42470.html" },
    { nome: "Search Engine Land, 11/2026: ChatGPT Ads bidding options are changing on November 9th", url: "https://searchengineland.com/chatgpt-ads-bidding-options-are-changing-on-november-9th-500701" },
    { nome: "Relevant Audience, 06/11/2026: ChatGPT Ads moves to Target CPA and Target CPC", url: "https://www.relevantaudience.com/ai/chatgpt-ads-target-cpa-target-cpc-replace-max-bid/" },
    { nome: "OpenAI, central de ajuda: Bidding strategies and how pricing works in ChatGPT Ads", url: "https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads" },
    { nome: "Meio & Mensagem, 04/08/2026: ChatGPT começa a exibir anúncios aos usuários do Brasil", url: "https://www.meioemensagem.com.br/midia/chatgpt-comeca-a-exibir-anuncios-aos-usuarios-do-brasil" },
  ],
};

export default post;
