import type { Post } from "../tipos";

const post: Post = {
  slug: "google-tag-vira-container-tag-manager-janeiro-2027",
  tipo: "noticia",
  editoria: "marketing",
  nivel: "brasil",
  palavraChave: "google tag manager unificação",
  titulo: "Google junta a tag do Google e o Tag Manager: o que muda na medição de quem anuncia | Domous News",
  h1: "Google junta a tag do Google e o Tag Manager: o que muda na medição de quem anuncia",
  descricao:
    "Nota do Google de 17/11 confirma que cada tag do Google vira um contêiner do Tag Manager. Instalações fora do padrão recebem a mudança em janeiro de 2027.",
  resposta:
    "O Google publicou em 17 de novembro de 2026, nas notas de versão do Tag Manager, que a tag do Google (gtag.js) e o Google Tag Manager passam a ser uma coisa só: cada tag do Google vira um contêiner do Tag Manager. Segundo o Google, o funcionamento da tag dentro do site não muda. Instalações que o Google considera sem suporte recebem a atualização em janeiro de 2027, e a recomendação é ajustar antes. Como é essa tag que leva as conversões pro Google Ads e pro Analytics, vale conferir a instalação do site agora.",
  secoes: [
    {
      titulo: "O que aconteceu",
      paragrafos: [
        "Em 17 de novembro, o Google registrou nas notas de versão do Tag Manager a unificação da tag do Google com o Google Tag Manager. Pela nota, cada tag do Google se torna um contêiner do Tag Manager, e sites que usam só a tag do Google ganham acesso aos recursos do Tag Manager, como configuração pela interface, depuração e controle de versões. A mudança foi noticiada no mesmo dia pelo Search Engine Roundtable e pelo PPC Land.",
        "O plano já estava descrito numa página de ajuda do Google datada de 20 de agosto. A nota de 17 de novembro acrescenta o prazo: instalações sem suporte recebem a atualização em janeiro de 2027.",
      ],
    },
    {
      titulo: "O que o Google diz que muda e o que fica igual",
      paragrafos: [
        "Segundo o Google, a atualização não altera o comportamento da tag dentro da página. Cada destino do Google (Google Ads, Analytics, Campaign Manager) ganha uma tag própria no contêiner, o que preserva as configurações e os acionadores de eventos automáticos que já existem. Os códigos de instalação novos ficam iguais pra todo mundo e deixam de trazer o comando de configuração do gtag. Pra quem depende desse comando, o Google orienta usar o acionador de inicialização do Tag Manager.",
        "Outra mudança é de acesso. As permissões do contêiner no Tag Manager passam a definir quem vê os dados no Tag Assistant, a ferramenta de diagnóstico das tags. Quem tem permissão de publicar no contêiner consegue mudar o que roda no site.",
      ],
    },
    {
      titulo: "Qual instalação corre risco",
      paragrafos: [
        "A nota não define o que é instalação sem suporte. Uma página de ajuda do Google sobre o gtag.js aponta um caso: carregar códigos do Analytics ou do Google Ads (os que começam com G-, AW- ou DC-) pelo código do Tag Manager, contando com comandos de configuração do gtag. O Google diz que essa é uma implementação sem suporte e que esses sites podem ter mudanças inesperadas no comportamento das tags. O Google não informou quantos sites estão nessa situação nem o que acontece com quem não ajustar até janeiro.",
      ],
    },
    {
      titulo: "Por que isso importa pra tua empresa",
      paragrafos: [
        "A tag do Google é o que conta formulário, compra e clique no WhatsApp como conversão. Os lances automáticos do Google Ads aprendem com esses dados. Se uma conversão para de ser registrada ou passa a contar em dobro depois da atualização, a campanha passa a otimizar com informação errada e o relatório de custo por cliente deixa de bater com o comercial. Com Black Friday e fim de ano no meio do caminho, o ideal é deixar a revisão pronta antes de janeiro.",
      ],
    },
    {
      titulo: "O que fazer agora",
      paragrafos: [],
      itens: [
        "Pedir a quem cuida do site um levantamento de como a tag do Google está instalada e se algum código G-, AW- ou DC- é carregado pelo código do Tag Manager",
        "Se a instalação estiver nesse formato, migrar pro código padrão da tag do Google antes de janeiro de 2027",
        "Revisar quem tem acesso de edição e publicação nos contêineres do Tag Manager e tirar quem não precisa mais",
        "Testar no modo de visualização se as conversões principais (formulário, compra, clique no WhatsApp) disparam uma vez só",
        "Comparar o número de conversões no Google Ads com o registro do CRM nas semanas seguintes pra perceber qualquer mudança cedo",
      ],
    },
    {
      titulo: "Leitura da Domous",
      paragrafos: [
        "Mudança de tag mexe direto no custo por cliente que a diretoria acompanha. A gente trata a instalação de medição como parte da campanha: conferimos o disparo de cada conversão antes de investir e cruzamos o que a plataforma reporta com o que chega no comercial. Uma revisão curta agora evita semanas de lance aprendendo com dado errado.",
      ],
    },
  ],
  faq: [
    {
      p: "Preciso fazer alguma coisa se uso a tag do Google pelo código padrão?",
      r: "Segundo o Google, o comportamento da tag no site não muda. Mesmo assim, vale conferir as conversões no modo de visualização e revisar as permissões do contêiner, que passam a controlar o acesso aos dados no Tag Assistant.",
    },
    {
      p: "O que acontece em janeiro de 2027?",
      r: "Pela nota do Google de 17 de novembro, instalações consideradas sem suporte recebem a atualização em janeiro de 2027. O Google recomenda ajustar a configuração antes e não detalhou o que acontece com quem não ajustar.",
    },
    {
      p: "Isso afeta o rastreamento de conversões do Google Ads?",
      r: "A tag do Google é a que registra as conversões do Google Ads. Em instalações sem suporte, o Google avisa que pode haver mudanças inesperadas no comportamento das tags, por isso o teste das conversões principais é a primeira providência.",
    },
  ],
  servicos: ["mensuracao-e-painel", "google-ads"],
  publicado: "2026-11-18",
  atualizado: "2026-11-18",
  fontes: [
    { nome: "Notas de versão do Google Tag Manager, 17/11/2026: unificação da tag do Google e do Tag Manager", url: "https://support.google.com/tagmanager/answer/4620708?hl=pt-BR" },
    { nome: "Ajuda do Google Tag Manager, 20/08/2026: mudanças na tag do Google e no Tag Manager", url: "https://support.google.com/tagmanager/answer/17079602?hl=pt-BR" },
    { nome: "Ajuda do Google Tag Manager: configurar corretamente a instalação da tag do Google com gtag.js", url: "https://support.google.com/tagmanager/answer/17231523?hl=pt-BR" },
    { nome: "Search Engine Roundtable, 17/11/2026: Google Tag & Google Tag Manager Unification", url: "https://www.seroundtable.com/google-tag-manager-unification-42562.html" },
    { nome: "PPC Land, 17/11/2026: instalações sem suporte da tag do Google recebem a atualização em janeiro de 2027", url: "https://ppc.land/unsupported-google-tag-installs-get-the-tag-manager-upgrade-in-january-2027/" },
  ],
};

export default post;
