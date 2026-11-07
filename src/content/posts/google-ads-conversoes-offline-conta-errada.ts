import type { Post } from "../tipos";

const post: Post = {
  slug: "google-ads-conversoes-offline-conta-errada",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "conversões offline google ads",
  titulo: "Google Ads pode contar conversões offline na conta errada: o que muda pra quem importa vendas do CRM | Domous News",
  h1: "Google Ads pode contar conversões offline na conta errada: o que muda pra quem importa vendas do CRM",
  descricao:
    "Relatos de 5/11 mostram que um envio único de conversões offline pra várias contas do Google Ads pode creditar vendas a contas que não geraram o clique. Como conferir.",
  resposta:
    "Em 5 de novembro de 2026, o Search Engine Land e o especialista Adriaan Dekker relataram que o Google Ads pode registrar conversões offline em contas que não geraram o clique ou a ligação. Isso acontece quando a empresa envia, num mesmo lote, conversões de várias contas que usam o mesmo nome de ação de conversão. Segundo o suporte do Google, essas conversões ficam fora dos lances automáticos e aparecem na coluna de conversões e no custo por conversão, o que pode distorcer o relatório.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "Na quinta-feira, 5 de novembro, o Search Engine Land publicou que o Google Ads pode contar conversões offline nas contas erradas. No mesmo dia, o consultor holandês Adriaan Dekker detalhou o comportamento no blog dele. O cenário descrito pelas duas fontes é o de quem administra várias contas e sobe as conversões offline num lote só, com a mesma ação de conversão (por exemplo, \"Compra\") criada com o mesmo nome em cada conta. Nesse caso, o Google pode aceitar um identificador de clique ou um número de telefone numa conta que nunca recebeu aquele clique ou aquela ligação.",
        "Até a publicação desta nota, o Google não tinha comentado o caso publicamente. A página de ajuda sobre erros de importação offline não menciona esse comportamento.",
      ],
    },
    {
      titulo: "O que a conta mostra e o que deixa de mostrar",
      paragrafos: [
        "Segundo Dekker, o problema não aparece em todo envio, e o Google ainda rejeita boa parte dessas linhas. O suporte do Google informou a ele que as conversões creditadas por engano ficam fora do Smart Bidding e são somadas na coluna de conversões e no custo por conversão.",
        "Outro ponto do relato: os status \"Successful\" e \"#OK\" (como aparecem na interface em inglês) na tela de envios indicam só que a linha foi lida. A verificação de atribuição acontece depois. Uma conversão pode aparecer como enviada com sucesso e nunca entrar no relatório, ou entrar na conta errada.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "A importação de conversões offline é o que liga a venda fechada no CRM, na loja ou no WhatsApp à campanha que trouxe o cliente. Empresas grandes costumam ter mais de uma conta (por marca, por unidade, por empreendimento) e integrações que mandam tudo de uma vez. Se uma conta recebe vendas que outra gerou, o custo por cliente de uma parece melhor do que é e o da outra parece pior. A decisão de verba tomada em cima desse número sai errada, mesmo com o lance automático protegido.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Levantar com quem cuida da integração se as conversões offline sobem num lote único pra mais de uma conta",
        "Dar um nome exclusivo à ação de conversão de cada conta (por exemplo, \"Venda CRM Unidade Centro\") e usar esse nome no envio",
        "Se não der pra renomear agora, separar os envios por conta",
        "Comparar o total de vendas enviadas por conta com o total que cada conta mostra no relatório, olhando o último mês",
        "Revisar o custo por conversão usado nas decisões de verba recentes se a conferência mostrar diferença",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A gente defende medir custo por cliente e receita atribuída, e a importação offline é o caminho pra isso no Google Ads. Este caso mostra que a integração precisa de conferência periódica: o número que a plataforma mostra deve bater com o número que sai do CRM. Quando não bate, a correção vem antes de qualquer mudança de verba.",
      ],
    },
  ],
  faq: [
    {
      p: "Quem é afetado pelo problema de conversões offline na conta errada?",
      r: "Segundo os relatos, quem envia conversões offline de várias contas do Google Ads num mesmo lote, com ações de conversão de mesmo nome em cada conta. Quem tem uma única conta ou envia separado por conta não se encaixa no cenário descrito.",
    },
    {
      p: "As conversões na conta errada afetam os lances automáticos?",
      r: "Segundo o suporte do Google, citado por Adriaan Dekker, elas ficam fora do Smart Bidding. Aparecem na coluna de conversões e no custo por conversão, o que afeta a leitura do relatório.",
    },
    {
      p: "O status de envio bem-sucedido garante que a conversão foi contada?",
      r: "Não. Segundo o relato, o status indica que a linha foi lida. A atribuição é conferida depois, então vale comparar o que foi enviado com o que aparece em cada conta.",
    },
  ],
  servicos: ["google-ads", "mensuracao-e-painel"],
  publicado: "2026-11-07",
  atualizado: "2026-11-07",
  fontes: [
    { nome: "Search Engine Land, 05/11/2026: Google Ads may count offline conversions in the wrong accounts", url: "https://searchengineland.com/google-ads-may-count-offline-conversions-in-the-wrong-accounts-500544" },
    { nome: "Adriaan Dekker, 05/11/2026: Google Ads can now count your offline conversions in the wrong accounts", url: "https://adriaan-dekker.nl/google-ads-can-now-count-your-offline-conversions-in-the-wrong-accounts/" },
    { nome: "Ajuda do Google Ads: corrigir discrepâncias e erros em importações de conversões offline", url: "https://support.google.com/google-ads/answer/13321563?hl=pt-BR" },
  ],
};

export default post;
