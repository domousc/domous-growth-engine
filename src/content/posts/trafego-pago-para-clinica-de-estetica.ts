import type { Post } from "../tipos";

const post: Post = {
  slug: "trafego-pago-para-clinica-de-estetica",
  tipo: "guia",
  nivel: "brasil",
  palavraChave: "tráfego pago para clínica de estética",
  titulo: "Tráfego pago para clínica de estética: do anúncio ao paciente que comparece | Domous",
  h1: "Tráfego pago para clínica de estética: do anúncio ao paciente que comparece",
  descricao:
    "Tráfego pago para clínica de estética: regras de publicidade dos conselhos e do Meta, campanha por procedimento, agenda pelo WhatsApp e controle de comparecimento.",
  resposta:
    "Tráfego pago para clínica de estética funciona quando o anúncio respeita as regras do conselho do profissional e da plataforma, cada campanha fala de um procedimento e a agenda feita no WhatsApp tem confirmação antes da consulta. A métrica que manda é o custo por paciente que compareceu, e o número de mensagens fica em segundo plano. Clique e curtida não pagam a sala de procedimento.",
  secoes: [
    {
      titulo: "Clínica de estética pode fazer tráfego pago?",
      paragrafos: [
        "Pode. O que muda em relação a outros negócios é a quantidade de regra no caminho. Existem duas camadas: a do conselho de classe do profissional que atende e a da plataforma onde o anúncio roda.",
        "Na camada do conselho, cada profissional segue o seu. Médico segue o Conselho Federal de Medicina (CFM), dentista segue o Conselho Federal de Odontologia (CFO), e assim por diante. Uma clínica com médico, dentista e biomédico na equipe precisa conferir a regra de cada um antes de escrever o anúncio sobre o procedimento que aquele profissional faz.",
        "Na camada da plataforma, o Meta trata procedimento estético como categoria restrita. Segundo a política de saúde e bem-estar do Meta, anúncio de produto, procedimento ou cirurgia estética só pode ser mostrado pra pessoas com 18 anos ou mais. A gente sempre confirma a política vigente na hora de montar a campanha, porque ela muda com alguma frequência.",
      ],
    },
    {
      titulo: "O que pode e o que não pode no anúncio?",
      paragrafos: [
        "Pra médicos, a Resolução CFM nº 2.336/2023 passou a admitir imagens de antes e depois com critérios. Segundo o próprio CFM, a imagem precisa vir com texto educativo, mostrar as indicações do procedimento e os fatores que podem atrapalhar o resultado, ter autorização do paciente e preservar o anonimato dele mesmo com essa autorização. Sensacionalismo e autopromoção continuam proibidos.",
        "O Meta também permite antes e depois de procedimento estético geral, desde que o anúncio não tente fazer a pessoa se sentir mal com a própria aparência. A política proíbe comparação lado a lado no caso de tratamento de rugas.",
        "Na prática, o que a gente evita em qualquer anúncio de clínica:",
      ],
      itens: [
        "Promessa de resultado (\"rejuvenesça 10 anos\", \"resultado garantido\")",
        "Frase que aponta defeito no corpo de quem está vendo (\"cansada dessas manchas?\")",
        "Preço como chamariz e desconto agressivo no procedimento",
        "Foto de paciente sem autorização por escrito",
        "Imagem de agulha, sangue ou procedimento acontecendo em close",
      ],
    },
    {
      titulo: "Passo 1: uma campanha por procedimento e uma região definida",
      paragrafos: [
        "Quem procura harmonização facial tem dúvida, ticket e tempo de decisão diferentes de quem procura limpeza de pele ou depilação a laser. Misturar tudo num anúncio só deixa a mensagem genérica e o relatório confuso.",
        "A gente separa as campanhas pelos procedimentos que mais dão margem e que a clínica tem agenda pra atender. Cada uma ganha criativo, texto e verba próprios, e assim dá pra ver quanto custa trazer um paciente pra cada procedimento.",
        "A região também precisa ser decidida antes. Clínica de bairro em João Pessoa, por exemplo, costuma ir bem com um raio que cubra os bairros de onde os pacientes já vêm (Manaíra, Tambaú, Cabo Branco, Bessa). Anunciar pra cidade inteira costuma trazer conversa de quem nunca vai atravessar a cidade pra uma sessão.",
      ],
    },
    {
      titulo: "Passo 2: criativo educativo com o profissional na frente",
      paragrafos: [
        "No Meta Ads atual, o criativo faz boa parte do trabalho de segmentação. É o vídeo que decide quem para de rolar o feed. Por isso a gente varia o ângulo e testa um de cada vez.",
        "Os ângulos que costumam render em clínica, sempre dentro das regras acima:",
      ],
      itens: [
        "O profissional explicando pra quem o procedimento é indicado e pra quem não é",
        "Como funciona a primeira consulta, passo a passo, pra tirar o medo de quem nunca foi",
        "Resposta às dúvidas que a recepção mais ouve no WhatsApp (dor, recuperação, quantas sessões)",
        "Bastidor da clínica: estrutura, higiene, equipe",
        "Depoimento de paciente sobre a experiência do atendimento, sem promessa de resultado",
      ],
    },
    {
      titulo: "Passo 3: agenda no WhatsApp com confirmação",
      paragrafos: [
        "A maior parte dos anúncios de clínica leva pro WhatsApp. A partir daí, quem vende é a recepção. Lead de estética esfria rápido: se a resposta demora, a pessoa já chamou a próxima clínica do Instagram.",
        "O que a gente monta junto com a clínica:",
      ],
      itens: [
        "Roteiro de atendimento com as perguntas de triagem e a oferta de dois horários próximos",
        "Agendamento com data perto do primeiro contato, porque a gente vê mais falta em consulta marcada pra muito longe",
        "Confirmação na véspera e lembrete no dia, com endereço e orientação de preparo",
        "Registro no CRM de qual anúncio trouxe cada paciente",
      ],
    },
    {
      titulo: "Passo 4: medir custo por paciente que compareceu",
      paragrafos: [
        "O relatório do Meta mostra conversas iniciadas. A clínica precisa saber outra coisa: quantas viraram agendamento, quantas compareceram e quanto faturaram. A conversa que o Meta conta também nem sempre bate com a que chega no WhatsApp, então a diferença precisa ser medida.",
        "Com a origem anotada no CRM, dá pra devolver os agendamentos e as vendas pro Meta pela API de Conversões. A campanha passa a buscar mais gente parecida com quem compareceu, e o painel mostra o custo por paciente de cada procedimento.",
        "Pra dar uma referência do que esse processo completo pode render: numa clínica de estética atendida pela Domous, o faturamento subiu 130% em 3 meses, com ROAS de 8,2x. Num consultório odontológico, o agendamento saiu a R$ 18 com 87% de comparecimento. Cada clínica tem ticket, concorrência e agenda próprios, então esses números contam o que aconteceu ali e servem de referência, sem garantia de repetir.",
      ],
    },
  ],
  faq: [
    {
      p: "Clínica de estética pode postar antes e depois no anúncio?",
      r: "Depende do conselho do profissional e da plataforma. Pra médicos, a Resolução CFM nº 2.336/2023 admite antes e depois com texto educativo, autorização e anonimato do paciente. O Meta permite antes e depois de procedimento estético geral, sem apelo à autoestima negativa e sem comparação lado a lado em tratamento de rugas.",
    },
    {
      p: "Por que o Meta reprova anúncio de clínica de estética?",
      r: "Os motivos mais comuns são público abaixo de 18 anos, texto que aponta defeito na aparência de quem vê e imagem de procedimento ou de transformação fora das regras. Revisar texto e imagem com a política de saúde e bem-estar aberta evita boa parte das reprovações.",
    },
    {
      p: "Quanto investir em tráfego pago numa clínica de estética?",
      r: "A conta começa pela meta de custo por paciente e pela capacidade da agenda, antes de escolher a verba. Com isso definido, dá pra calcular quantos agendamentos a clínica precisa e quanto investir pra chegar neles.",
    },
  ],
  servicos: ["negocios-locais", "meta-ads", "crm-ia-whatsapp"],
  publicado: "2026-11-06",
  atualizado: "2026-11-06",
  fontes: [
    { nome: "CFM: CFM atualiza resolução da publicidade médica (Resolução CFM nº 2.336/2023)", url: "https://portal.cfm.org.br/noticias/cfm-atualiza-resolucao-da-publicidade-medica" },
    { nome: "Meta: Padrões de Publicidade, saúde e bem-estar (idade mínima e antes e depois em procedimento estético)", url: "https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/" },
  ],
};

export default post;
