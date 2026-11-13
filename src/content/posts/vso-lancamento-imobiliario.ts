import type { Post } from "../tipos";

const post: Post = {
  slug: "vso-lancamento-imobiliario",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "vso imobiliário",
  titulo: "VSO imobiliário: o que é, como calcular e como acelerar a venda | Domous",
  h1: "VSO imobiliário: o que é, como calcular e como acelerar a venda",
  descricao:
    "VSO imobiliário é a fatia do estoque vendida no período. Veja como calcular, como ler o número e o que o marketing faz pra acelerar a venda do lançamento.",
  resposta:
    "VSO imobiliário (vendas sobre oferta) é o percentual das unidades disponíveis que foram vendidas num período. A conta é: unidades vendidas no período divididas pelo total ofertado no mesmo período (o estoque do começo somado ao que foi lançado), vezes 100. Quanto maior o VSO, mais rápido o empreendimento gira. O marketing ajuda quando leva visita e proposta de comprador com perfil e quando mede a venda por canal, pra colocar a verba onde o VSO sobe.",
  secoes: [
    {
      titulo: "O que é VSO no mercado imobiliário?",
      paragrafos: [
        "VSO é a sigla de vendas sobre oferta. O indicador mostra quanto do que estava à venda foi vendido num intervalo de tempo: um mês, um trimestre, um ano. Incorporadora usa pra acompanhar o ritmo de cada empreendimento, investidor usa pra comparar empresas e entidades do setor usam pra medir o mercado de uma cidade. Em São Paulo, por exemplo, a pesquisa mensal do Secovi-SP divulga o VSO do mês e o acumulado de 12 meses.",
        "Ele costuma aparecer junto do IVV, o índice de velocidade de vendas. Segundo a Empiricus, o IVV costuma se concentrar nos lançamentos recentes, enquanto o VSO olha todo o estoque disponível.",
      ],
    },
    {
      titulo: "Como calcular o VSO passo a passo",
      paragrafos: [
        "A fórmula é simples. O cuidado está em contar a oferta do jeito certo:",
      ],
      itens: [
        "Escolha o período (o mais comum é o mês) e o recorte: um empreendimento, uma torre ou a empresa inteira",
        "Conte o estoque disponível no primeiro dia do período",
        "Some as unidades lançadas durante o período. Estoque mais lançamentos é a oferta total",
        "Conte as unidades vendidas no mesmo período",
        "Divida as vendas pela oferta total e multiplique por 100",
      ],
    },
    {
      titulo: "Um exemplo com números redondos",
      paragrafos: [
        "Imagine um lançamento em João Pessoa (o exemplo é hipotético) que começa novembro com 100 unidades em estoque e coloca mais 20 à venda com a liberação de uma nova torre. A oferta do mês é de 120 unidades. Se o time vende 12, o VSO de novembro fica em 12 dividido por 120, ou seja, 10%.",
        "A mesma conta aparece escrita de outro jeito em alguns sites: vendas divididas por vendas mais estoque final. No exemplo, sobram 108 unidades no fim do mês, e 12 dividido por 120 (12 mais 108) dá os mesmos 10%.",
      ],
    },
    {
      titulo: "Qual é um bom VSO?",
      paragrafos: [
        "Não existe um número único que sirva pra todo mundo. O VSO muda com o padrão do imóvel, a cidade, a fase da obra, o preço e o momento dos juros. A comparação que mais ajuda é com o histórico da própria empresa e com empreendimentos parecidos na mesma região.",
        "O período escolhido também conta: VSO de um mês e VSO acumulado de 12 meses medem coisas diferentes. Compare sempre mês com mês, ou 12 meses com 12 meses, e mantenha o mesmo recorte.",
      ],
    },
    {
      titulo: "Onde o marketing entra no VSO?",
      paragrafos: [
        "O VSO é o número que o dono da incorporadora acompanha. O relatório de marketing, quase sempre, fala de lead e de custo por lead. Quando esses dois mundos não conversam, a campanha pode bater meta de lead e o empreendimento continuar parado.",
        "Por isso a gente liga o anúncio à venda. Cada lead entra no CRM com a origem (campanha, criativo, empreendimento) e é acompanhado até a visita, a proposta e o contrato. Aí dá pra ver quanto custou cada venda por canal e por empreendimento, e mexer na verba olhando o que move o VSO.",
        "Num trabalho do segmento imobiliário atendido pela Domous, foram 6 imóveis vendidos em 1 mês com R$ 2.900 de verba de mídia.",
      ],
    },
    {
      titulo: "Como acelerar o VSO de um lançamento com marketing",
      paragrafos: [
        "O que eu faria, nessa ordem, num lançamento que precisa girar mais rápido:",
      ],
      itens: [
        "Olhar o estoque por planta. Se o que sobra é a unidade de três quartos ou o andar baixo, a campanha precisa falar com quem compra aquele produto, com criativo e página próprios",
        "Um ângulo por perfil de comprador: quem vai morar, quem quer investir, quem mora fora e quer um imóvel na praia. No Meta Ads atual, o criativo é a segmentação",
        "Resposta rápida no WhatsApp e qualificação antes de passar pro corretor (renda, prazo, forma de pagamento), pra ele gastar tempo com quem pode comprar",
        "Remarketing pra quem conversou, visitou o decorado ou pediu tabela e não fechou, com obra andando, condição de pagamento e depoimento de quem já comprou",
        "Enviar as etapas do CRM (visita, proposta, venda) pra API de Conversões da Meta, pra campanha aprender com quem compra",
        "Um painel semanal com VSO, visitas, propostas e custo por venda de cada empreendimento",
      ],
    },
  ],
  faq: [
    {
      p: "O que significa VSO no mercado imobiliário?",
      r: "VSO significa vendas sobre oferta. É o percentual das unidades disponíveis num período que foram vendidas nesse mesmo período.",
    },
    {
      p: "Qual a diferença entre VSO e IVV?",
      r: "Os dois medem a velocidade de venda. O IVV costuma olhar os lançamentos recentes, e o VSO considera todo o estoque disponível no período.",
    },
    {
      p: "De quanto em quanto tempo calcular o VSO?",
      r: "O mais comum é calcular todo mês e acompanhar também o acumulado de 12 meses. O importante é manter o mesmo período e o mesmo recorte pra comparar.",
    },
    {
      p: "VSO alto é sempre bom?",
      r: "Em geral, VSO alto mostra que o produto está girando. Se ele fica muito acima do esperado, pode valer a pena revisar a tabela de preço antes de lançar a próxima fase.",
    },
  ],
  servicos: ["meta-ads", "mensuracao-e-painel", "book-de-empreendimento"],
  publicado: "2026-11-13",
  atualizado: "2026-11-13",
  fontes: [
    { nome: "Suno: VSO, o significado desse indicador no mercado imobiliário", url: "https://www.suno.com.br/artigos/vso/" },
    { nome: "Empiricus: o que é VSO", url: "https://www.empiricus.com.br/explica/vso/" },
    {
      nome: "Mercado&Consumo: dados da pesquisa Secovi-SP do mercado imobiliário",
      url: "https://mercadoeconsumo.com.br/01/07/2025/economia/vendas-de-imoveis-novos-em-sao-paulo-somam-r-48-bilhoes-em-maio/",
    },
  ],
};

export default post;
