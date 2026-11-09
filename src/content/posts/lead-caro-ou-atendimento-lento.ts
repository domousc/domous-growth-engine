import type { Post } from "../tipos";

const post: Post = {
  slug: "lead-caro-ou-atendimento-lento",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "lead caro",
  titulo: "Lead caro ou atendimento lento? Como achar o gargalo do funil | Domous",
  h1: "Lead caro ou atendimento lento? Como achar o gargalo do funil",
  descricao:
    "Lead caro nem sempre é culpa do anúncio. Veja os números pra olhar em cada etapa do funil, do clique à venda, e o que fazer quando o gargalo aparece.",
  resposta:
    "Lead caro só é problema quando o custo por cliente também está alto. Pra saber se o gargalo está no anúncio ou no atendimento, compare etapa por etapa: custo por lead, taxa de resposta, tempo da primeira resposta, lead que vira orçamento e orçamento que vira venda. Se o custo por lead está bom e a venda não vem, o problema mora depois do clique, quase sempre no WhatsApp.",
  secoes: [
    {
      titulo: "Por que olhar só o custo por lead engana?",
      paragrafos: [
        "O custo por lead mede quanto custa fazer alguém levantar a mão. Ele diz pouco sobre quanto custa um cliente. Um lead barato que nunca compra sai mais caro que um lead caro que fecha.",
        "Por isso a gente começa sempre pela ponta: quanto custou cada cliente no mês (o CAC) e quanto esse cliente deixou de receita. Se esses dois números estão saudáveis, um custo por lead alto pode ser só o preço de atrair gente mais qualificada. Se estão ruins, aí vale abrir o funil e procurar onde a conta quebra.",
      ],
    },
    {
      titulo: "Passo 1: desenhar o funil com os números de cada etapa",
      paragrafos: [
        "Antes de mexer em campanha, monte uma tabela simples com o último mês. Cada linha é uma etapa, e o que interessa é a passagem de uma pra outra:",
      ],
      itens: [
        "Verba investida e leads gerados, que dão o custo por lead",
        "Leads que receberam resposta, e em quanto tempo veio a primeira",
        "Leads que responderam de volta e viraram conversa de verdade",
        "Conversas que viraram orçamento, visita ou agendamento",
        "Orçamentos que viraram venda, e o valor vendido",
      ],
    },
    {
      titulo: "Passo 2: quando o problema está no anúncio",
      paragrafos: [
        "O gargalo está no anúncio quando o custo por lead sobe e, ao mesmo tempo, o lead que chega é ruim: gente fora da região, procurando outro produto, sem condição de comprar. O sinal no WhatsApp é o vendedor dizendo que \"só vem curioso\".",
        "Os ajustes que mais resolvem, nessa ordem:",
      ],
      itens: [
        "Criativo que filtra: mostrar preço a partir de, região atendida ou o perfil de quem compra afasta quem nunca ia fechar",
        "Variar ângulo e persona no criativo, porque no Meta Ads atual o criativo faz boa parte da segmentação",
        "Rever a região: um negócio local de João Pessoa costuma perder verba com gente de cidade que ele nem atende",
        "Mandar de volta pra plataforma quem virou orçamento e venda, pela API de Conversões da Meta ou pela importação de conversões do Google, pra campanha buscar mais gente parecida",
      ],
    },
    {
      titulo: "Passo 3: quando o problema está no atendimento",
      paragrafos: [
        "O gargalo está no atendimento quando o custo por lead está dentro do esperado e o lead some depois da primeira mensagem. Os sinais: conversa respondida horas depois, lead sem resposta no fim de semana, vendedor que manda o catálogo inteiro e espera.",
        "Lead esfria rápido. Um estudo publicado na Harvard Business Review em 2011 já mostrava que a maioria das empresas demorava demais pra responder quem pediu contato pela internet. Na operação, o ajuste costuma ser este:",
      ],
      itens: [
        "Medir o tempo da primeira resposta de cada conversa, inclusive fora do horário comercial",
        "Ter um roteiro curto de abertura com duas ou três perguntas de qualificação",
        "Usar etiqueta de origem e de etapa no WhatsApp ou no CRM, pra ninguém ficar esquecido",
        "Combinar uma rotina de retomada pra quem parou de responder",
        "Pensar num atendente de IA pra responder na hora e passar pro vendedor quem já está qualificado",
      ],
    },
    {
      titulo: "E quando a conversa não vira venda?",
      paragrafos: [
        "Às vezes o lead chega bom, é respondido rápido e mesmo assim não fecha. Aí o gargalo está na oferta, no preço, na página ou no processo de venda. Peça pro time anotar o motivo de perda de cada conversa por duas ou três semanas. Os motivos que se repetem mostram o que mexer: prazo, forma de pagamento, falta de prova, concorrente mais barato.",
        "Esse mesmo motivo de perda vira roteiro de criativo e de remarketing. Quem desistiu por dúvida de prazo pode ver um anúncio que responde exatamente isso.",
      ],
    },
    {
      titulo: "Como acompanhar isso todo mês sem planilha infinita?",
      paragrafos: [
        "O ideal é um painel que junte os dados da plataforma de anúncios com os do CRM: verba, leads, tempo de resposta, orçamentos e vendas por campanha. Com tudo no mesmo lugar, a reunião do mês passa a olhar a etapa em que o cliente está escapando.",
        "Comece simples. Uma planilha com as cinco etapas, preenchida toda segunda-feira, já mostra o caminho. Quando o volume crescer, vale integrar o WhatsApp ao CRM e automatizar a coleta.",
      ],
    },
  ],
  faq: [
    {
      p: "O que é um custo por lead bom?",
      r: "Depende do teu ticket, da margem e de quantos leads viram cliente. O custo por lead bom é o que deixa o custo por cliente dentro da meta que você definiu antes de investir.",
    },
    {
      p: "Por que meu custo por lead subiu de repente?",
      r: "As causas mais comuns são criativo cansado, mudança de público ou região, concorrência maior no leilão e alteração na página ou no formulário. Olhe primeiro o que mudou na conta e no criativo nas últimas semanas.",
    },
    {
      p: "Como reduzir o custo por lead sem perder qualidade?",
      r: "Teste novos ângulos de criativo e mande as vendas de volta pra plataforma, pra ela aprender com quem compra. Baixar o custo atraindo lead pior só empurra o problema pro atendimento.",
    },
  ],
  servicos: ["consultoria-de-marketing-e-vendas", "mensuracao-e-painel", "crm-ia-whatsapp"],
  publicado: "2026-11-09",
  atualizado: "2026-11-09",
  fontes: [
    { nome: "Harvard Business Review, mar/2011: The Short Life of Online Sales Leads", url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
  ],
};

export default post;
