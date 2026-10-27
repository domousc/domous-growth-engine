import type { Post } from "../tipos";

const post: Post = {
  "slug": "conversas-meta-ads-x-whatsapp",
  "tipo": "guia",
  "nivel": "brasil",
  "palavraChave": "conversas meta ads whatsapp",
  "titulo": "Por que o Meta mostra mais conversas do que chegam no WhatsApp? | Guia Domous",
  "h1": "Por que o Meta mostra mais conversas do que chegam no WhatsApp?",
  "descricao": "A diferença entre a conversa que o Gerenciador de Anúncios reporta e a mensagem que chega de verdade, por que ela acontece e como medir a conversa real.",
  "resposta": "É comum o Gerenciador de Anúncios do Meta reportar mais conversas do que as mensagens que a empresa recebe de fato no WhatsApp. A diferença vem principalmente de como a plataforma conta e atribui uma conversa ao anúncio, de conversas que começam e não seguem, e da falta de cruzamento com o que chega no aparelho. Pra medir a conversa real, a empresa precisa contar as mensagens que entram com origem no anúncio, idealmente pela API oficial do WhatsApp, e cruzar com as vendas.",
  "secoes": [
    {
      "titulo": "O que o Meta chama de conversa",
      "paragrafos": [
        "A métrica de conversas iniciadas mede quando alguém começa uma conversa com a empresa a partir do anúncio, dentro das regras de contagem e de atribuição da plataforma. Ela é útil pra otimizar campanha, mas não é a mesma coisa que \"mensagem recebida e respondida\" e muito menos \"cliente\"."
      ]
    },
    {
      "titulo": "Motivos comuns da diferença",
      "paragrafos": [],
      "itens": [
        "Atribuição: a plataforma credita ao anúncio conversas de quem interagiu com ele dentro da janela de atribuição, mesmo que a pessoa chegue por outro caminho",
        "Conversa que começa e não segue: a pessoa abre, manda uma mensagem automática ou um \"oi\" e some",
        "Mensagens que caem em outro número, aparelho ou atendente e não são contadas",
        "Ninguém conta a conversa real com origem, então a comparação nunca é feita"
      ]
    },
    {
      "titulo": "Por que isso importa",
      "paragrafos": [
        "Se a empresa decide verba pela conversa reportada, ela pode escalar a campanha errada: a que gera muita conversa contada e pouca venda. O custo por conversa parece bom e o custo por cliente piora sem ninguém ver."
      ]
    },
    {
      "titulo": "Como medir a conversa real",
      "paragrafos": [],
      "itens": [
        "Usar a API oficial do WhatsApp (WhatsApp Business Platform): conversas que começam pelo botão do anúncio chegam com a identificação do anúncio de origem",
        "Registrar a origem de cada conversa no CRM, com etiqueta de campanha",
        "Marcar quais conversas viraram orçamento e venda",
        "Enviar essas vendas de volta pro Meta pela API de Conversões, pra campanha otimizar por quem compra",
        "Comparar no mesmo painel: conversa reportada, conversa real, orçamento e venda"
      ]
    },
    {
      "titulo": "Dá pra manter o aplicativo do WhatsApp?",
      "paragrafos": [
        "Hoje existe a possibilidade de usar o aplicativo WhatsApp Business e a API no mesmo número, o que facilita a transição pra quem não quer mudar a rotina do time. A viabilidade depende de cada caso e é avaliada na implantação."
      ]
    }
  ],
  "faq": [
    {
      "p": "A diferença entre conversa reportada e real é normal?",
      "r": "Alguma diferença é comum. O problema é não saber de quanto ela é, porque aí a decisão de verba fica baseada num número que não representa o que chega."
    },
    {
      "p": "Preciso da API do WhatsApp pra medir?",
      "r": "Ajuda muito, porque a origem do anúncio chega junto com a conversa. Sem a API, dá pra fazer um controle manual com etiqueta e mensagem pré-preenchida, mas é menos preciso."
    }
  ],
  "servicos": [
    "meta-ads",
    "mensuracao-e-painel",
    "crm-ia-whatsapp"
  ],
  "publicado": "2026-10-26",
  "atualizado": "2026-10-26"
};

export default post;
