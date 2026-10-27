import type { Post } from "../tipos";

const post: Post = {
  "slug": "api-de-conversoes-do-meta",
  "tipo": "guia",
  "nivel": "brasil",
  "palavraChave": "api de conversões meta",
  "titulo": "API de Conversões do Meta: o que é e por que importa pra quem vende pelo WhatsApp | Guia Domous",
  "h1": "API de Conversões do Meta: o que é e por que importa pra quem vende pelo WhatsApp",
  "descricao": "O que é a API de Conversões (CAPI) do Meta, a diferença pro pixel, como ela leva a venda do WhatsApp e do CRM de volta pro anúncio e quando vale implantar.",
  "resposta": "A API de Conversões do Meta é uma forma de enviar os eventos de venda e de lead direto do servidor ou do sistema da empresa pro Meta, sem depender só do pixel no navegador. Pra quem vende pelo WhatsApp ou na loja, ela é o caminho pra contar ao Meta quais conversas viraram venda. Com essa informação, a campanha aprende a buscar mais gente parecida com quem compra.",
  "secoes": [
    {
      "titulo": "Pixel x API de Conversões",
      "paragrafos": [
        "O pixel roda no navegador do visitante e registra o que acontece no site. Bloqueadores, navegação privada e restrições de privacidade fazem parte desses eventos se perder. A API de Conversões manda os eventos pelo servidor ou pela integração com o sistema, e o recomendado é usar os dois juntos, com deduplicação."
      ]
    },
    {
      "titulo": "Por que importa pra venda no WhatsApp",
      "paragrafos": [
        "Quando a venda fecha no WhatsApp, o pixel não vê nada: a pessoa nunca passou pelo site. Sem a API, o Meta só sabe que alguém iniciou uma conversa, e passa a otimizar pra gerar conversa, não venda. Com a venda voltando pela API, a otimização muda de alvo."
      ]
    },
    {
      "titulo": "O que precisa pra funcionar",
      "paragrafos": [],
      "itens": [
        "Registrar a venda em algum lugar (CRM, planilha estruturada, ERP)",
        "Guardar a origem do contato (de preferência pela API oficial do WhatsApp)",
        "Integração que envie a venda pro Meta com os dados de correspondência",
        "Conferência no Gerenciador de Eventos da qualidade da correspondência"
      ]
    },
    {
      "titulo": "Quando vale implantar",
      "paragrafos": [
        "Quando a empresa investe com frequência em campanha de mensagem ou de cadastro e a venda acontece fora do site. Quanto maior o ticket e mais longo o ciclo, mais a campanha ganha em aprender com a venda real."
      ]
    }
  ],
  "faq": [
    {
      "p": "A API de Conversões substitui o pixel?",
      "r": "Não. O recomendado é usar os dois, com o mesmo identificador de evento pra evitar contagem dupla."
    },
    {
      "p": "Precisa de programador?",
      "r": "Depende da origem dos dados. Muitas integrações são feitas com ferramentas como Make ou n8n, ou pela integração nativa do CRM."
    }
  ],
  "servicos": [
    "mensuracao-e-painel",
    "automacao-e-integracoes",
    "meta-ads"
  ],
  "publicado": "2026-10-27",
  "atualizado": "2026-10-27"
};

export default post;
