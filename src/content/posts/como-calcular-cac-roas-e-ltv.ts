import type { Post } from "../tipos";

const post: Post = {
  "slug": "como-calcular-cac-roas-e-ltv",
  "tipo": "guia",
  "nivel": "brasil",
  "palavraChave": "como calcular cac",
  "titulo": "Como calcular CAC, ROAS e LTV no marketing (com exemplo) | Guia Domous",
  "h1": "Como calcular CAC, ROAS e LTV no marketing, com exemplo",
  "descricao": "As três contas que dizem se o marketing da tua empresa dá lucro: custo por cliente (CAC), retorno sobre o anúncio (ROAS) e valor do cliente ao longo do tempo (LTV).",
  "resposta": "CAC é quanto custa conquistar um cliente novo: o investimento em marketing e vendas do período dividido pelo número de clientes novos. ROAS é quanto a mídia devolve em receita: a receita atribuída aos anúncios dividida pelo valor investido neles. LTV é quanto um cliente deixa de receita (ou de margem) durante todo o relacionamento. O marketing se paga quando o LTV é bem maior que o CAC.",
  "secoes": [
    {
      "titulo": "CAC: custo de aquisição de cliente",
      "paragrafos": [
        "Fórmula: CAC = investimento em marketing e vendas no período ÷ clientes novos no período.",
        "Exemplo: a empresa investiu R$ 20.000 em anúncio e R$ 10.000 em time comercial e ferramentas num mês, e fechou 60 clientes novos. CAC = R$ 30.000 ÷ 60 = R$ 500. Se olhar só a mídia (R$ 20.000 ÷ 60), o custo de mídia por cliente é R$ 333. Vale acompanhar os dois."
      ]
    },
    {
      "titulo": "ROAS: retorno sobre o investimento em anúncio",
      "paragrafos": [
        "Fórmula: ROAS = receita atribuída aos anúncios ÷ investimento em anúncios.",
        "Exemplo: R$ 20.000 em anúncio geraram R$ 120.000 em vendas atribuídas. ROAS = 6, ou 6x: cada real investido voltou seis em receita. ROAS não é lucro. Uma empresa com margem baixa pode ter ROAS 4x e perder dinheiro; outra, com margem alta, ganha bem com 3x."
      ]
    },
    {
      "titulo": "LTV: valor do cliente no tempo",
      "paragrafos": [
        "Fórmula simples: LTV = ticket médio × compras por ano × anos de relacionamento. Pra decisão de verba, use a margem em vez da receita.",
        "Exemplo: ticket médio de R$ 800, o cliente compra 3 vezes por ano e fica em média 2 anos. LTV = R$ 800 × 3 × 2 = R$ 4.800 em receita. Com margem de 30%, são R$ 1.440 de margem por cliente."
      ]
    },
    {
      "titulo": "Como ler os três juntos",
      "paragrafos": [
        "No exemplo, cada cliente custa R$ 500 (CAC) e deixa R$ 1.440 de margem (LTV em margem): quase 3 vezes o custo. Uma referência muito usada no mercado é buscar LTV pelo menos 3 vezes maior que o CAC. Abaixo disso, o crescimento come o caixa; muito acima, normalmente dá pra investir mais em aquisição."
      ],
      "itens": [
        "CAC subindo e ROAS caindo: problema de campanha, criativo ou público",
        "Conversas subindo e CAC subindo: problema de atendimento ou de qualificação",
        "ROAS bom e caixa apertado: margem baixa ou prazo de recebimento longo"
      ]
    },
    {
      "titulo": "O erro mais comum: medir só o que a plataforma mostra",
      "paragrafos": [
        "Meta e Google mostram cliques e conversas, mas não sabem da venda que fechou no WhatsApp ou no balcão. Sem registrar a origem de cada venda, o CAC e o ROAS viram chute. É por isso que a medição (pixel, API de Conversões, origem do lead no CRM e conversa real no WhatsApp) vem antes de escalar verba."
      ]
    }
  ],
  "faq": [
    {
      "p": "Qual a diferença entre ROAS e ROI?",
      "r": "ROAS olha só receita sobre investimento em mídia. ROI considera o lucro: desconta custo do produto, impostos e outros custos. Um ROAS alto pode ter ROI baixo se a margem for pequena."
    },
    {
      "p": "Qual é um bom ROAS?",
      "r": "Depende da margem. Divida 1 pela margem pra achar o ROAS mínimo que empata: com margem de 25%, o ROAS de empate é 4x. Acima disso, o anúncio dá lucro."
    },
    {
      "p": "O CAC deve incluir o salário do time comercial?",
      "r": "Pra visão completa, sim. Pra comparar campanhas entre si, o custo de mídia por cliente basta. O ideal é acompanhar os dois."
    }
  ],
  "servicos": [
    "mensuracao-e-painel",
    "trafego-pago",
    "consultoria-de-marketing-e-vendas"
  ],
  "publicado": "2026-10-26",
  "atualizado": "2026-10-26"
};

export default post;
