import type { Post } from "../tipos";

const post: Post = {
  slug: "google-analytics-data-manager-conversoes-em-dobro",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "data manager google analytics",
  titulo: "Google lança Data Manager no Analytics e alerta pra conversões em dobro: o que muda pra quem importa dados do CRM | Domous News",
  h1: "Google lança Data Manager no Analytics e alerta pra conversões em dobro: o que muda pra quem importa dados do CRM",
  descricao:
    "O Google Analytics ganhou em 6/11 o Data Manager, em beta, pra centralizar conexões e dados próprios. O Google avisa que a mesma conexão no Analytics e no Google Ads pode contar conversão duas vezes.",
  resposta:
    "Em 6 de novembro de 2026, o Google lançou em beta o Data Manager dentro do Google Analytics, um painel na área de administração que reúne fluxos de dados, vínculos com outros produtos e importação de dados próprios, como vendas vindas do CRM. Na página de ajuda, o Google avisa que ativar a mesma conexão de dados no Analytics e no Google Ads ao mesmo tempo pode registrar conversões duas vezes. Pra quem otimiza campanha por conversão importada, a duplicidade infla o resultado e confunde os lances automáticos.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "A página de novidades do Google Analytics registrou em 6 de novembro o lançamento do Data Manager em versão beta. A ferramenta fica no menu da Administração, logo abaixo de \"Minhas preferências\", e junta num só lugar os fluxos de dados do site e do app, os produtos conectados (como Google Ads) e as importações de dados de fora, como planilhas, CRM e arquivos offline. O PPC Land detalhou a mudança em 8 de novembro.",
        "A nota do Google não menciona restrição por país. As propriedades secundárias (subproperties) e as propriedades de consolidação (roll-up), recursos do Analytics 360, ainda não têm acesso à tela.",
      ],
    },
    {
      titulo: "O aviso sobre conversões em dobro",
      paragrafos: [
        "Segundo a ajuda do Google, os dados que entram pelo Data Manager do Analytics descem pras contas vinculadas do Google Ads e da Google Marketing Platform. O caminho contrário não acontece. Por isso o Google orienta: conexões novas devem ser criadas no Analytics; conexões que já existem no Google Ads continuam sendo geridas lá, sem repetir a mesma conexão no Analytics. Se a mesma fonte de dados for ligada nos dois lugares, a conversão pode ser contada duas vezes.",
        "As importações que a empresa já tinha no Analytics aparecem sozinhas no Data Manager. A ferramenta também traz um mapa das conexões, com as fontes à esquerda, a propriedade no centro e os destinos à direita, e marca em vermelho a conexão com erro.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "Empresa que vende pelo comercial (construtora, distribuidor, clínica, varejo de ticket alto) costuma devolver ao Google as vendas fechadas no CRM, pra campanha aprender com quem comprou. Se essa venda entra duas vezes, o custo por cliente parece metade do real, a campanha recebe mais verba do que merece e o lance automático passa a buscar o perfil errado. Com o Analytics e o Google Ads mexidos por pessoas diferentes (agência, TI, fornecedor do CRM), o risco de alguém criar a mesma conexão no segundo lugar é real.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Abrir a Administração do Analytics, entrar no Data Manager e conferir no mapa todas as fontes que alimentam a propriedade",
        "Listar onde cada conversão importada nasce hoje (Google Ads, Analytics ou ferramenta de terceiros) e manter um único caminho pra cada uma",
        "Comparar, no mesmo período, o total de vendas no CRM com as conversões importadas no Google Ads: número maior que o do CRM é sinal de duplicidade",
        "Definir por escrito quem pode criar conexões de dados no Analytics e no Google Ads",
        "Resolver os alertas vermelhos do mapa antes da Black Friday, quando o volume de conversões aumenta",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "A gente defende medir custo por cliente e receita atribuída, e esse número só vale se cada venda entrar uma vez. O Data Manager ajuda a enxergar as conexões, e o mapa é uma boa desculpa pra fazer a auditoria que muita empresa adia. Na prática, a regra que seguimos é simples: uma fonte, um caminho, um dono, e conferência mensal entre o CRM e a plataforma de anúncio.",
      ],
    },
  ],
  faq: [
    {
      p: "O que é o Data Manager do Google Analytics?",
      r: "É um painel da Administração do Google Analytics, lançado em beta em 6 de novembro de 2026, que reúne fluxos de dados, produtos conectados e importação de dados próprios, com um mapa visual das conexões e alertas de erro.",
    },
    {
      p: "Por que o Data Manager pode contar conversão duas vezes?",
      r: "Porque os dados importados no Analytics seguem pras contas vinculadas do Google Ads. Se a mesma fonte também estiver conectada direto no Google Ads, a mesma conversão entra pelos dois caminhos. O Google recomenda não ativar a mesma conexão nas duas ferramentas.",
    },
    {
      p: "Preciso refazer as importações que já tenho no Google Ads?",
      r: "Não. Segundo a ajuda do Google, as conexões que já existem no Google Ads continuam sendo geridas lá. O Analytics deve ser usado pras conexões novas.",
    },
  ],
  servicos: ["mensuracao-e-painel", "google-ads"],
  publicado: "2026-11-08",
  atualizado: "2026-11-08",
  fontes: [
    { nome: "Ajuda do Google Analytics, 06/11/2026: novidades do Google Analytics (Data Manager em beta)", url: "https://support.google.com/analytics/answer/9164320" },
    { nome: "Ajuda do Google Analytics: sobre o Data Manager no Google Analytics (beta)", url: "https://support.google.com/analytics/answer/18107176" },
    { nome: "PPC Land, 08/11/2026: Data Manager do Google Analytics pode registrar conversões duas vezes", url: "https://ppc.land/google-analytics-data-manager-duplicate-ads-setups-can-log-conversions-twice/" },
  ],
};

export default post;
