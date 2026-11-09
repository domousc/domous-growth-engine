// Perguntas da página /comecar (qualificação antes do WhatsApp), em SPIN:
//   1. Situação (4 perguntas): segmento, faturamento (corte), ticket, verba.
//   2. Contato: nome, empresa, WhatsApp e papel. O lead já entra no funil aqui,
//      então quem desiste no meio não se perde.
//   3. Problema: a primeira pergunta muda se a empresa anuncia ou não, e cada
//      resposta abre um caminho próprio, com perguntas diferentes.
//   4. Implicação: uma pergunta de agravamento por caminho + a tela que faz a
//      conta só com os números que a própria pessoa deu (nada inventado).
//   5. Necessidade de solução: o que mudaria (opções do caminho) e o que não
//      pode faltar numa solução. Por último, o prazo.
// Cada pergunta guarda a resposta no próprio id e diz qual é a próxima (`depois`).

export type Opcao = { v: string; l: string; d?: string; /** Só aparece pra esses segmentos. */ so?: string[] };
export type Pergunta = {
  id: string;
  titulo: string;
  nota?: string;
  opcoes: Opcao[];
  cards?: boolean;
  fase: "situacao" | "problema" | "implicacao" | "solucao";
  /** Próxima tela. Sem `depois`, a ordem segue a regra do `fluxo`. */
  depois?: (r: Respostas) => string;
};
export type Respostas = Record<string, string>;

export const TICKET_MEDIO: Record<string, number> = { ate1k: 500, "1a5k": 3000, "5a20k": 12000, "20a100k": 50000, "100k": 150000 };
export const INVESTIMENTO_MEDIO: Record<string, number> = { zero: 0, ate5k: 3000, "5a20k": 12000, "20a50k": 35000, "50k": 70000 };

const P = (p: Omit<Pergunta, "fase"> & { fase?: Pergunta["fase"] }, fase: Pergunta["fase"]): Pergunta => ({ ...p, fase });
const vai = (id: string) => () => id;

export const PERGUNTAS: Record<string, Pergunta> = {
  // ── 1. Situação ──────────────────────────────────────────────────────────
  segmento: P({
    id: "segmento",
    titulo: "Pra começar: qual é o negócio?",
    nota: "Leva uns 3 minutos. As respostas chegam com você no WhatsApp, então ninguém vai te perguntar tudo de novo.",
    cards: true,
    opcoes: [
      { v: "industria", l: "Indústria ou fábrica", d: "Móveis, alimentos, confecção, cosméticos" },
      { v: "distribuidor", l: "Distribuidor ou atacado", d: "Vende pra revenda, profissional ou empresa" },
      { v: "loja", l: "Loja física / varejo", d: "Móveis, veículos, joias, ótica, material de construção" },
      { v: "ecommerce", l: "Loja online / e-commerce", d: "Site próprio, Shopify, Tray, marketplace" },
      { v: "servico_consumidor", l: "Serviço pro consumidor", d: "Clínica, odontologia, escola, academia, imobiliária, construtora" },
      { v: "servico_empresa", l: "Serviço pra empresa (B2B)", d: "Consultoria, tecnologia, contabilidade, logística" },
      { v: "outro", l: "Outro", d: "Me conta no WhatsApp" },
    ],
    depois: vai("faturamento"),
  }, "situacao"),
  faturamento: P({
    id: "faturamento",
    titulo: "Quanto a empresa fatura por mês, mais ou menos?",
    nota: "É só pra saber se a gente consegue ajudar de verdade. Fica entre você e a Domous.",
    opcoes: [
      { v: "ate30", l: "Até R$ 30 mil" },
      { v: "30a100", l: "De R$ 30 mil a R$ 100 mil" },
      { v: "100a300", l: "De R$ 100 mil a R$ 300 mil" },
      { v: "300a1m", l: "De R$ 300 mil a R$ 1 milhão" },
      { v: "1a5m", l: "De R$ 1 milhão a R$ 5 milhões" },
      { v: "5m", l: "Mais de R$ 5 milhões" },
    ],
    depois: vai("ticket"),
  }, "situacao"),
  ticket: P({
    id: "ticket",
    titulo: "Quanto o cliente paga, mais ou menos, numa compra?",
    opcoes: [
      { v: "ate1k", l: "Até R$ 1 mil" },
      { v: "1a5k", l: "De R$ 1 mil a R$ 5 mil" },
      { v: "5a20k", l: "De R$ 5 mil a R$ 20 mil" },
      { v: "20a100k", l: "De R$ 20 mil a R$ 100 mil" },
      { v: "100k", l: "Mais de R$ 100 mil" },
    ],
    depois: vai("investimento"),
  }, "situacao"),
  investimento: P({
    id: "investimento",
    titulo: "Quanto vocês gastam por mês com anúncio na internet?",
    nota: "Só o dinheiro que vai pro anúncio no Instagram, Facebook ou Google. Não conta o que você paga pra quem cuida dele.",
    opcoes: [
      { v: "zero", l: "Ainda não investimos" },
      { v: "ate5k", l: "Até R$ 5 mil" },
      { v: "5a20k", l: "De R$ 5 mil a R$ 20 mil" },
      { v: "20a50k", l: "De R$ 20 mil a R$ 50 mil" },
      { v: "50k", l: "Mais de R$ 50 mil" },
    ],
    depois: vai("contato"),
  }, "situacao"),

  // ── 3. Problema: quem já anuncia ─────────────────────────────────────────
  trava: P({
    id: "trava",
    titulo: "O que mais trava as vendas hoje?",
    nota: "Escolhe o que mais dói. As próximas perguntas mudam conforme a resposta.",
    opcoes: [
      { v: "poucos", l: "Chega pouco contato" },
      { v: "curiosos", l: "Chega contato, mas muito curioso e pouca venda" },
      { v: "atendimento", l: "O time não dá conta de responder o WhatsApp" },
      { v: "medicao", l: "Não sei quanto o anúncio vende de verdade" },
      { v: "agencia", l: "Pago agência ou gestor e não vejo resultado" },
      { v: "site", l: "Muita visita no site e pouca compra", so: ["ecommerce"] },
    ],
    depois: (r) => ({ site: "p_site_dor", poucos: "p_poucos_dor", curiosos: "p_curiosos_dor", atendimento: "p_atend_dor", medicao: "p_med_dor", agencia: "p_ag_dor" })[r.trava] ?? "p_poucos_dor",
  }, "problema"),

  // Fase de PROBLEMA: só dor, insatisfação e o que já tentaram. Nada de
  // pergunta de fato ("quantos", "quanto tempo") aqui: isso é situação e já
  // ficou nas 4 primeiras.

  // Pouco contato
  p_poucos_dor: P({
    id: "p_poucos_dor",
    titulo: "O que mais te incomoda na falta de cliente novo?",
    opcoes: [
      { v: "instavel", l: "Tem mês que chega bastante, tem mês que some" },
      { v: "pouco", l: "Chega pouco o ano inteiro" },
      { v: "errado", l: "Até chega, mas não é o cliente que eu quero" },
      { v: "depende", l: "Só chega quando eu posto ou faço promoção" },
    ],
    depois: vai("p_poucos_tentou"),
  }, "problema"),
  p_poucos_tentou: P({
    id: "p_poucos_tentou",
    titulo: "E o que vocês já tentaram pra resolver isso?",
    opcoes: [
      { v: "impulsiona", l: "Impulsionar post no Instagram" },
      { v: "agencia", l: "Contratar alguém ou uma agência" },
      { v: "promocao", l: "Fazer promoção e desconto" },
      { v: "nada", l: "Nada ainda, não sei por onde ir" },
    ],
    depois: vai("i_poucos"),
  }, "problema"),
  i_poucos: P({
    id: "i_poucos",
    titulo: "Quando o mês vem fraco, o que acontece na empresa?",
    opcoes: [
      { v: "parado", l: "O time de vendas fica parado esperando" },
      { v: "desconto", l: "A gente apela pra desconto pra fechar o mês" },
      { v: "eu", l: "Eu mesmo tenho que ir atrás de cliente" },
      { v: "caixa", l: "Aperta o dinheiro pra pagar as contas" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // Muito curioso
  p_curiosos_dor: P({
    id: "p_curiosos_dor",
    titulo: "Desses contatos que não compram, o que mais te irrita?",
    nota: "{nota_curioso}",
    opcoes: [
      { v: "preco", l: "Só querem saber o preço e somem" },
      { v: "somem", l: "Pedem {orcamento} e depois não respondem mais" },
      { v: "perfil", l: "Não têm dinheiro ou não são o meu cliente" },
      { v: "longe", l: "São de longe, de cidade que eu nem atendo" },
    ],
    depois: (r) => (r.p_curiosos_dor === "preco" ? "p_curiosos_preco" : r.p_curiosos_dor === "somem" ? "p_curiosos_volta" : "p_curiosos_quem"),
  }, "problema"),
  p_curiosos_preco: P({
    id: "p_curiosos_preco",
    titulo: "E quando vocês mandam o preço, o que costuma acontecer?",
    opcoes: [
      { v: "some", l: "A pessoa some" },
      { v: "desconto", l: "Pede desconto" },
      { v: "compara", l: "Diz que vai pesquisar e compra no concorrente" },
    ],
    depois: vai("i_curiosos"),
  }, "problema"),
  p_curiosos_volta: P({
    id: "p_curiosos_volta",
    titulo: "Alguém volta a chamar quem sumiu?",
    opcoes: [
      { v: "ninguem", l: "Ninguém, fica por isso mesmo" },
      { v: "asvezes", l: "Às vezes, quando lembra" },
      { v: "sempre", l: "Sim, mas mesmo assim não fecha" },
    ],
    depois: vai("i_curiosos"),
  }, "problema"),
  p_curiosos_quem: P({
    id: "p_curiosos_quem",
    titulo: "Quem perde tempo atendendo essas conversas?",
    opcoes: [
      { v: "vendedor", l: "O vendedor, que podia estar vendendo" },
      { v: "eu", l: "Eu mesmo" },
      { v: "todos", l: "Todo mundo um pouco" },
    ],
    depois: vai("i_curiosos"),
  }, "problema"),
  i_curiosos: P({
    id: "i_curiosos",
    titulo: "Quanto do dia do time vai em conversa que não vira venda?",
    opcoes: [
      { v: "todo", l: "Quase o dia todo" },
      { v: "metade", l: "Mais ou menos metade" },
      { v: "pedaco", l: "Um pedaço, mas incomoda" },
      { v: "naosei", l: "Não sei dizer" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // Atendimento
  p_atend_dor: P({
    id: "p_atend_dor",
    titulo: "O que acontece com o WhatsApp da empresa num dia cheio?",
    opcoes: [
      { v: "acumula", l: "Acumula mensagem sem resposta" },
      { v: "demora", l: "A gente responde, mas demora" },
      { v: "noite", l: "Chega mensagem de noite e ninguém vê" },
      { v: "eu", l: "Sou eu que respondo e não dou conta" },
    ],
    depois: (r) => (r.p_atend_dor === "noite" ? "p_atend_manha" : "p_atend_reclama"),
  }, "problema"),
  p_atend_manha: P({
    id: "p_atend_manha",
    titulo: "E de manhã, quem chamou de noite ainda responde?",
    opcoes: [
      { v: "some", l: "A maioria já sumiu" },
      { v: "alguns", l: "Alguns respondem, outros não" },
      { v: "outro", l: "Muitos já compraram em outro lugar" },
    ],
    depois: vai("i_atend"),
  }, "problema"),
  p_atend_reclama: P({
    id: "p_atend_reclama",
    titulo: "Algum cliente já reclamou da demora?",
    opcoes: [
      { v: "sim", l: "Já, mais de uma vez" },
      { v: "calado", l: "Ninguém reclama, a pessoa só some" },
      { v: "nao", l: "Não que eu saiba" },
    ],
    depois: vai("i_atend"),
  }, "problema"),
  i_atend: P({
    id: "i_atend",
    titulo: "Você já perdeu venda pra concorrente que respondeu primeiro?",
    opcoes: [
      { v: "sim", l: "Já, e sei de casos" },
      { v: "provavel", l: "Provavelmente, mas não tenho como saber" },
      { v: "nao", l: "Acho que não" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // Não sabe o que o anúncio vende
  p_med_dor: P({
    id: "p_med_dor",
    titulo: "Se alguém te perguntar se o anúncio está dando resultado, o que você responde?",
    opcoes: [
      { v: "acho", l: "Acho que sim, mas não tenho certeza" },
      { v: "naosei", l: "Sinceramente, não sei" },
      { v: "curtida", l: "Mostro curtida e clique" },
      { v: "sei", l: "Sei, com número" },
    ],
    depois: (r) => (r.p_med_dor === "sei" ? "p_med_falta" : "p_med_impede"),
  }, "problema"),
  p_med_impede: P({
    id: "p_med_impede",
    titulo: "O que te impede de saber?",
    opcoes: [
      { v: "whatsapp", l: "A venda fecha no WhatsApp e ninguém anota de onde o cliente veio" },
      { v: "loja", l: "O cliente compra na loja e não diz que viu o anúncio" },
      { v: "ninguem", l: "Ninguém organiza esses números" },
      { v: "quemcuida", l: "Quem cuida do anúncio não me mostra" },
    ],
    depois: vai("i_med"),
  }, "problema"),
  p_med_falta: P({
    id: "p_med_falta",
    titulo: "Então o que ainda te incomoda?",
    opcoes: [
      { v: "escalar", l: "Não sei onde vale colocar mais dinheiro" },
      { v: "custo", l: "Cada venda está saindo cara" },
      { v: "previsao", l: "Não consigo prever o mês" },
    ],
    depois: vai("i_med"),
  }, "problema"),
  i_med: P({
    id: "i_med",
    titulo: "Já aconteceu de deixar rodando um anúncio que não vendia, ou desligar um que vendia, sem saber?",
    opcoes: [
      { v: "sim", l: "Com certeza já" },
      { v: "talvez", l: "Pode ser, não tenho como saber" },
      { v: "nao", l: "Acho que não" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // Agência sem resultado
  p_ag_dor: P({
    id: "p_ag_dor",
    titulo: "O que mais te frustra com quem cuida do anúncio hoje?",
    opcoes: [
      { v: "venda", l: "Não vejo venda acontecendo" },
      { v: "relatorio", l: "Me mostram número que não diz nada" },
      { v: "some", l: "Só aparece quando é pra cobrar" },
      { v: "generico", l: "Faz igual pra todo mundo, não entende meu negócio" },
    ],
    depois: vai("p_ag_tempo"),
  }, "problema"),
  p_ag_tempo: P({
    id: "p_ag_tempo",
    titulo: "Há quanto tempo está assim?",
    opcoes: [
      { v: "3m", l: "Menos de 3 meses" },
      { v: "6m", l: "De 3 a 6 meses" },
      { v: "1a", l: "De 6 meses a 1 ano" },
      { v: "mais", l: "Mais de 1 ano" },
    ],
    depois: vai("i_ag"),
  }, "problema"),
  i_ag: P({
    id: "i_ag",
    titulo: "Se continuar assim mais 6 meses, o que acontece?",
    opcoes: [
      { v: "corta", l: "Desligo o anúncio de vez" },
      { v: "troca", l: "Troco de agência de novo" },
      { v: "segue", l: "Sigo pagando sem saber se volta" },
      { v: "concorrente", l: "O concorrente passa na frente" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // Site que não vende (só e-commerce)
  p_site_dor: P({
    id: "p_site_dor",
    titulo: "Onde o cliente desiste de comprar no site?",
    opcoes: [
      { v: "entra", l: "Entra, olha e sai sem fazer nada" },
      { v: "carrinho", l: "Coloca no carrinho e não finaliza" },
      { v: "frete", l: "Desiste quando vê o frete" },
      { v: "duvida", l: "Chama no WhatsApp pra tirar dúvida e some" },
    ],
    depois: vai("p_site_carrinho"),
  }, "problema"),
  p_site_carrinho: P({
    id: "p_site_carrinho",
    titulo: "E quem desiste, alguém vai atrás?",
    opcoes: [
      { v: "ninguem", l: "Ninguém" },
      { v: "email", l: "Só um e-mail automático" },
      { v: "whatsapp", l: "A gente chama no WhatsApp" },
    ],
    depois: vai("i_site"),
  }, "problema"),
  i_site: P({
    id: "i_site",
    titulo: "Quando a venda do site cai, o que vocês fazem?",
    opcoes: [
      { v: "cupom", l: "Solta cupom de desconto" },
      { v: "verba", l: "Coloca mais dinheiro no anúncio" },
      { v: "espera", l: "Espera o mês seguinte" },
      { v: "marketplace", l: "Tenta vender mais no Mercado Livre, Shopee ou Amazon" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // ── 3. Problema: quem ainda não anuncia ──────────────────────────────────
  trava_sem: P({
    id: "trava_sem",
    titulo: "O que fez a empresa ainda não anunciar?",
    nota: "As próximas perguntas mudam conforme a resposta.",
    opcoes: [
      { v: "tentou", l: "Já tentou e não deu certo" },
      { v: "comecar", l: "Não sabe por onde começar" },
      { v: "tempo", l: "Não tem ninguém pra cuidar disso" },
      { v: "medo", l: "Medo de gastar e não voltar" },
    ],
    depois: (r) => ({ tentou: "p_tentou_oque", comecar: "p_comecar_dor", tempo: "p_tempo_dor", medo: "p_medo_qual" })[r.trava_sem] ?? "p_comecar_dor",
  }, "problema"),
  p_tentou_oque: P({
    id: "p_tentou_oque",
    titulo: "O que deu errado quando tentaram?",
    opcoes: [
      { v: "semcontato", l: "Gastou e quase não veio contato" },
      { v: "ruim", l: "Veio contato, mas ninguém comprava" },
      { v: "semsaber", l: "Não deu pra saber se vendeu" },
      { v: "saiu", l: "Quem cuidava saiu e parou tudo" },
    ],
    depois: vai("p_tentou_pesou"),
  }, "problema"),
  p_tentou_pesou: P({
    id: "p_tentou_pesou",
    titulo: "E o que mais pesou nessa experiência?",
    opcoes: [
      { v: "dinheiro", l: "O dinheiro jogado fora" },
      { v: "tempo", l: "O tempo perdido" },
      { v: "confianca", l: "Perdi a confiança em anúncio" },
      { v: "agencia", l: "A agência ou a pessoa sumiu" },
    ],
    depois: vai("i_tentou"),
  }, "problema"),
  i_tentou: P({
    id: "i_tentou",
    titulo: "Desde que parou, como estão chegando {clientes} novos?",
    opcoes: [
      { v: "indicacao", l: "Só por indicação" },
      { v: "vendedor", l: "Vendedor indo atrás" },
      { v: "caiu", l: "Caiu e não voltou" },
      { v: "igual", l: "Ficou igual" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),
  p_comecar_dor: P({
    id: "p_comecar_dor",
    titulo: "O que mais te incomoda em ainda não anunciar?",
    opcoes: [
      { v: "concorrente", l: "Vejo o concorrente aparecendo e eu não" },
      { v: "depende", l: "Dependo de indicação e do movimento" },
      { v: "parado", l: "Tem mês parado e não sei o que fazer" },
      { v: "perdido", l: "Sei que preciso, mas não sei por onde começar" },
    ],
    depois: vai("i_origem"),
  }, "problema"),
  i_origem: P({
    id: "i_origem",
    titulo: "E quando o mês fica parado, o que acontece?",
    opcoes: [
      { v: "caixa", l: "Aperta o dinheiro na hora" },
      { v: "desconto", l: "A gente faz promoção pra girar" },
      { v: "segura", l: "A gente segura, mas sente" },
      { v: "ja", l: "Já aconteceu de ficar feio, por isso estou aqui" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),
  p_tempo_dor: P({
    id: "p_tempo_dor",
    titulo: "O que acontece com o marketing quando a correria aperta?",
    opcoes: [
      { v: "para", l: "Para tudo" },
      { v: "eu", l: "Eu faço à noite ou no fim de semana" },
      { v: "alguem", l: "Fica com alguém que já tem outra função" },
      { v: "nunca", l: "Nunca começou de verdade" },
    ],
    depois: vai("i_tempo"),
  }, "problema"),
  i_tempo: P({
    id: "i_tempo",
    titulo: "Quantas horas da semana vão nisso, de quem devia estar fazendo outra coisa?",
    opcoes: [
      { v: "5", l: "Até 5 horas" },
      { v: "10", l: "De 5 a 10 horas" },
      { v: "mais", l: "Mais de 10 horas" },
      { v: "naosei", l: "Nunca contei" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),
  p_medo_qual: P({
    id: "p_medo_qual",
    titulo: "Qual é o maior medo?",
    opcoes: [
      { v: "vender", l: "Gastar e não vender" },
      { v: "agencia", l: "Cair em agência que some depois do contrato" },
      { v: "medir", l: "Não saber se está funcionando" },
      { v: "caro", l: "Ser caro demais pro momento" },
    ],
    depois: vai("i_medo"),
  }, "problema"),
  i_medo: P({
    id: "i_medo",
    titulo: "Enquanto a empresa não anuncia, com quem ficam os {clientes} que procuram no Instagram e no Google?",
    opcoes: [
      { v: "concorrente", l: "Com o concorrente que anuncia" },
      { v: "ninguem", l: "Com ninguém, o mercado é pequeno" },
      { v: "naosei", l: "Não sei" },
    ],
    depois: vai("implicacao"),
  }, "implicacao"),

  // ── 5. Necessidade de solução ────────────────────────────────────────────
  // n_ganho_<caminho>: aparece na tela de implicação, com as opções do caminho.
  n_ganho_poucos: P({ id: "n_ganho_poucos", titulo: "Se {o_contato_certo} chegasse todo mês, o que mudaria primeiro?", opcoes: [
    { v: "time", l: "O time venderia o tempo que hoje fica parado" },
    { v: "previsao", l: "Eu conseguiria prever o mês" },
    { v: "desconto", l: "Pararia de vender no desconto" },
    { v: "crescer", l: "Abriria espaço pra crescer: loja, equipe, linha nova" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_curiosos: P({ id: "n_ganho_curiosos", titulo: "Se chegasse menos curioso e mais gente pronta pra comprar, o que mudaria primeiro?", opcoes: [
    { v: "vende", l: "O mesmo time venderia mais" },
    { v: "tempo", l: "O time teria tempo pra fechar quem importa" },
    { v: "custo", l: "O custo de cada venda cairia" },
    { v: "verba", l: "Eu colocaria mais dinheiro em anúncio sem medo" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_atendimento: P({ id: "n_ganho_atendimento", titulo: "Se toda conversa fosse respondida na hora, até fora do horário, o que mudaria primeiro?", opcoes: [
    { v: "recupera", l: "Recuperaria venda que hoje esfria" },
    { v: "eu", l: "Eu sairia do celular" },
    { v: "foco", l: "O time focaria em fechar" },
    { v: "noite", l: "Venderia pra quem chama de noite e no fim de semana" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_medicao: P({ id: "n_ganho_medicao", titulo: "Se você soubesse quanto cada real de anúncio vende, o que faria primeiro?", opcoes: [
    { v: "verba", l: "Colocaria mais dinheiro no anúncio que vende" },
    { v: "corta", l: "Desligaria o anúncio que só gasta" },
    { v: "decide", l: "Decidiria com número, não com achismo" },
    { v: "socios", l: "Mostraria o retorno pros sócios" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_agencia: P({ id: "n_ganho_agencia", titulo: "Se você soubesse quantas vendas o anúncio trouxe, e não só cliques, o que mudaria?", opcoes: [
    { v: "confia", l: "Voltaria a confiar no investimento" },
    { v: "verba", l: "Colocaria mais dinheiro no anúncio" },
    { v: "cobrar", l: "Saberia o que cobrar de quem cuida" },
    { v: "trocar", l: "Pararia de trocar de agência" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_tentou: P({ id: "n_ganho_tentou", titulo: "Se a próxima tentativa viesse com venda medida desde o primeiro real, o que mudaria?", opcoes: [
    { v: "volta", l: "Voltaria a anunciar sem medo" },
    { v: "fonte", l: "Teria outra fonte de cliente além da indicação" },
    { v: "previsao", l: "Conseguiria prever o mês" },
    { v: "crescer", l: "Cresceria sem depender de mim" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_comecar: P({ id: "n_ganho_comecar", titulo: "Se o anúncio virasse uma segunda fonte de cliente, o que mudaria primeiro?", opcoes: [
    { v: "seguranca", l: "Mais segurança no caixa" },
    { v: "crescer", l: "Cresceria sem esperar indicação" },
    { v: "previsao", l: "Conseguiria prever o mês" },
    { v: "equipe", l: "Daria trabalho pro time de vendas" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_tempo: P({ id: "n_ganho_tempo", titulo: "Se alguém cuidasse disso de ponta a ponta, o que você faria com esse tempo?", opcoes: [
    { v: "vender", l: "Venderia mais" },
    { v: "gestao", l: "Cuidaria da gestão da empresa" },
    { v: "expandir", l: "Tocaria a expansão" },
    { v: "respirar", l: "Teria vida fora da empresa" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_medo: P({ id: "n_ganho_medo", titulo: "O que te daria segurança pra começar?", opcoes: [
    { v: "pequeno", l: "Começar pequeno e aumentar com resultado" },
    { v: "numero", l: "Ver quantas vendas o anúncio trouxe, não só clique" },
    { v: "contas", l: "Contas e dados no nome da empresa" },
    { v: "prazo", l: "Contrato curto, sem amarra longa" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_ganho_site: P({ id: "n_ganho_site", titulo: "Se o site convertesse o dobro das visitas que já recebe, o que mudaria primeiro?", opcoes: [
    { v: "margem", l: "Pararia de queimar margem em cupom" },
    { v: "verba", l: "Colocaria mais dinheiro em anúncio sem medo" },
    { v: "marketplace", l: "Dependeria menos de Mercado Livre, Shopee e Amazon" },
    { v: "crescer", l: "Cresceria com a mesma estrutura" },
  ], depois: vai("n_criterio") }, "solucao"),
  n_criterio: P({
    id: "n_criterio",
    titulo: "Pra uma solução fazer sentido pra vocês, o que não pode faltar?",
    opcoes: [
      { v: "venda", l: "Mostrar venda, não só clique" },
      { v: "atendimento", l: "Cuidar do anúncio e do WhatsApp juntos" },
      { v: "perto", l: "Alguém perto, que entenda o negócio" },
      { v: "dono", l: "Contas e dados no nome da empresa" },
    ],
    depois: vai("prazo"),
  }, "solucao"),
  prazo: P({
    id: "prazo",
    titulo: "Última: quando você quer começar?",
    opcoes: [
      { v: "agora", l: "Agora, esse mês" },
      { v: "30dias", l: "Nos próximos 30 dias" },
      { v: "90dias", l: "Em 2 ou 3 meses" },
      { v: "pesquisando", l: "Ainda estou pesquisando" },
    ],
    depois: vai("fim"),
  }, "solucao"),

  // Fica dentro da tela de contato (não é uma tela própria).
  papel: P({
    id: "papel",
    titulo: "Seu papel na empresa",
    opcoes: [
      { v: "dono", l: "Dono ou sócio" },
      { v: "diretor", l: "Diretor ou gerente" },
      { v: "marketing", l: "Marketing" },
      { v: "outro", l: "Outro" },
    ],
  }, "situacao"),
};

/** Palavras que mudam com o tipo de negócio, pra pergunta falar a língua do lead. */
const TERMOS: Record<string, Record<string, string>> = {
  industria: { clientes: "lojistas e revendas", orcamento: "pedido", o_contato_certo: "o lojista certo", nota_curioso: "Na indústria, curioso é quem pede tabela e some, ou quem compra uma caixa e nunca mais." },
  distribuidor: { clientes: "clientes e revendas", orcamento: "pedido", o_contato_certo: "o comprador certo", nota_curioso: "No atacado, curioso é quem pede tabela de preço e não fecha pedido." },
  loja: { clientes: "clientes", orcamento: "orçamento ou visita na loja", o_contato_certo: "o cliente certo", nota_curioso: "Na loja, curioso é quem pergunta preço no WhatsApp e não aparece." },
  ecommerce: { clientes: "clientes", orcamento: "compra", o_contato_certo: "o cliente certo", nota_curioso: "No e-commerce, curioso é quem chama no WhatsApp, pergunta frete e não compra." },
  servico_consumidor: { clientes: "clientes e pacientes", orcamento: "agendamento ou orçamento", o_contato_certo: "o paciente ou cliente certo", nota_curioso: "Curioso é quem pergunta preço, não agenda, ou agenda e falta." },
  servico_empresa: { clientes: "empresas clientes", orcamento: "reunião ou proposta", o_contato_certo: "a empresa certa", nota_curioso: "No B2B, curioso é quem pede proposta só pra comparar preço." },
};
const TERMO_PADRAO = { clientes: "clientes", orcamento: "orçamento", o_contato_certo: "o contato certo", nota_curioso: "" };

/** Troca os {marcadores} do texto pelas palavras do segmento da pessoa. */
export const texto = (s: string | undefined, r: Respostas) =>
  (s ?? "").replace(/\{(\w+)\}/g, (_, k) => (TERMOS[r.segmento] ?? TERMO_PADRAO)[k] ?? TERMO_PADRAO[k as keyof typeof TERMO_PADRAO] ?? "");

/** Opções da pergunta que valem pro segmento da pessoa. */
export const opcoesPara = (id: string, r: Respostas) =>
  (PERGUNTAS[id]?.opcoes ?? []).filter((o) => !o.so || o.so.includes(r.segmento)).map((o) => ({ ...o, l: texto(o.l, r) }));

/** Caminho do problema: a resposta da primeira pergunta de problema. */
export const caminho = (r: Respostas) => (r.investimento === "zero" ? r.trava_sem : r.trava) || "";

/** Telas especiais: "contato" (dados + lead no funil), "implicacao" (conta +
 *  pergunta n_ganho_<caminho>) e "fim". */
function proxima(id: string, r: Respostas): string {
  if (id === "contato") return r.investimento === "zero" ? "trava_sem" : "trava";
  if (id === "implicacao") return "n_criterio";
  const p = PERGUNTAS[id];
  if (!p?.depois) return "fim";
  // Sem resposta ainda, segue pelo primeiro caminho só pra barra de progresso ter um total.
  return p.depois(r[id] ? r : { ...r, [id]: p.opcoes[0].v });
}

/** O caminho inteiro a partir das respostas atuais (termina antes do "fim"). */
export function fluxo(r: Respostas): string[] {
  const telas: string[] = [];
  let id = "segmento";
  while (id !== "fim" && telas.length < 30) {
    telas.push(id);
    id = proxima(id, r);
  }
  return telas;
}

/** Pergunta de solução que aparece junto da tela de implicação. */
export const perguntaDaImplicacao = (r: Respostas) => `n_ganho_${caminho(r) || "poucos"}`;

export const rotulo = (chave: string, valor?: string) =>
  PERGUNTAS[chave]?.opcoes.find((o) => o.v === valor)?.l ?? valor ?? "";

const reais = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const min = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** Texto da tela de implicação. Só usa os números que a pessoa respondeu. */
export function implicacao(r: Respostas): { titulo: string; paragrafos: string[] } {
  const inv = INVESTIMENTO_MEDIO[r.investimento] ?? 0;
  const ticket = TICKET_MEDIO[r.ticket] ?? 0;
  const p: string[] = [];
  let titulo = "Olha o que as suas respostas mostram";

  // Cada caminho devolve a dor nas palavras da própria pessoa e faz a conta só
  // com o que ela respondeu (valor médio da venda e gasto com anúncio).
  const disse = (id: string) => min(texto(rotulo(id, r[id]), r));
  // Fala da pessoa citada entre aspas, do jeito que ela escolheu.
  const aspas = (id: string) => `“${texto(rotulo(id, r[id]), r)}”`;
  switch (caminho(r)) {
    case "poucos": {
      titulo = "Mês fraco não é azar";
      p.push(`Você contou que ${disse("p_poucos_dor")}, e que quando o mês vem fraco ${disse("i_poucos")}.`);
      if (r.p_poucos_tentou === "impulsiona") p.push("O botão Impulsionar mostra o post pra quem gosta de curtir, não pra quem compra. Por isso o contato não vem, ou vem o cliente errado.");
      else if (r.p_poucos_tentou === "promocao") p.push("Promoção traz gente no curto prazo, mas ensina o cliente a esperar desconto. Contato que chega todo mês vem de anúncio falando com a pessoa certa.");
      else p.push("Quase nunca é falta de dinheiro. Na maioria das vezes é anúncio falando com as pessoas erradas, ou sem um bom motivo pra chamar.");
      break;
    }
    case "curiosos": {
      titulo = "Conversa que não vira venda custa caro";
      const quem = r.p_curiosos_quem === "eu" ? "o seu tempo" : r.p_curiosos_quem === "todos" ? "o tempo de todo mundo" : "o tempo de quem devia estar vendendo";
      p.push(`O que mais te irrita é que ${disse("p_curiosos_dor")}. E isso come ${r.i_curiosos === "naosei" ? quem : `${disse("i_curiosos")} do dia, e ${quem}`}.`);
      if (r.p_curiosos_preco === "compara") p.push("Quando a pessoa compara só preço, é porque ninguém mostrou por que vale pagar mais. Isso se resolve antes do anúncio, na oferta e na conversa.");
      if (r.p_curiosos_volta === "ninguem") p.push("E quem some não recebe mais nenhuma mensagem. Parte dessas pessoas comprava se alguém voltasse a chamar.");
      if (inv > 0) p.push(`Os ${reais(inv)} por mês em anúncio pagam todas essas conversas, inclusive as que nunca iam virar venda.`);
      break;
    }
    case "atendimento": {
      titulo = "Quem responde primeiro, vende primeiro";
      p.push(`Num dia cheio, ${disse("p_atend_dor")}. Quem pede preço pelo WhatsApp chama mais de uma empresa ao mesmo tempo, e quem responde primeiro leva.`);
      if (r.p_atend_manha === "outro") p.push("Você mesmo disse: muita gente que chamou de noite já comprou em outro lugar quando o dia amanhece.");
      if (r.p_atend_reclama === "calado") p.push("E quem não é respondido não reclama. Só some, e você nunca fica sabendo quanto perdeu.");
      if (inv > 0) p.push(`Cada conversa que esfria foi paga com os ${reais(inv)} por mês de anúncio.`);
      break;
    }
    case "medicao": {
      if (r.p_med_dor === "sei") {
        titulo = "Você já tem o número. Falta usar ele a seu favor";
        p.push(`O que ainda incomoda é que ${disse("p_med_falta")}. É aí que a gente olharia primeiro.`);
      } else {
        titulo = inv > 0 ? `${reais(inv * 12)} por ano sem saber o que volta` : "Anúncio sem saber o que vende é aposta";
        p.push(`Hoje, quando perguntam do resultado, a resposta é: ${disse("p_med_dor")}. E o motivo é que ${disse("p_med_impede")}.`);
        if (inv > 0) p.push(`São uns ${reais(inv)} por mês, ${reais(inv * 12)} no ano, sem saber em qual anúncio vale colocar mais dinheiro e qual devia ser desligado amanhã.`);
      }
      break;
    }
    case "agencia": {
      titulo = "Você paga, mas não vê a venda";
      p.push(`Você disse: ${aspas("p_ag_dor")}. E isso já faz ${disse("p_ag_tempo")}.`);
      if (inv > 0) p.push(`Nos próximos 6 meses, são uns ${reais(inv * 6)} em anúncio, sem contar o que você paga pra quem cuida, e sem saber quantas vendas isso traz.`);
      break;
    }
    case "site": {
      titulo = "O site recebe gente. Ela é que não compra";
      p.push(`No seu site, o cliente ${disse("p_site_dor")}. E quem desiste ${r.p_site_carrinho === "ninguem" ? "não recebe ninguém indo atrás" : r.p_site_carrinho === "email" ? "recebe só um e-mail automático" : "é chamado no WhatsApp"}.`);
      p.push(`Quando a venda cai, a saída hoje é: ${aspas("i_site")}.`);
      if (inv > 0) p.push(`Com ${reais(inv)} por mês em anúncio levando gente pro site, cada venda que escapa é dinheiro de anúncio indo embora.`);
      break;
    }
    case "tentou": {
      titulo = "A tentativa não falhou por causa do anúncio";
      p.push(`Na tentativa: ${aspas("p_tentou_oque")}. E o que mais pesou foi ${disse("p_tentou_pesou")}. Quase sempre o problema vem antes do anúncio: o que é oferecido, a página, o atendimento e saber o que vendeu.`);
      break;
    }
    case "comecar": {
      titulo = "Depender de uma fonte só é risco";
      p.push(`Você disse: ${aspas("p_comecar_dor")}. E quando o mês fica parado: ${aspas("i_origem")}.`);
      p.push("Indicação e movimento são bons, mas não dá pra ligar quando o mês precisa. Anúncio dá.");
      break;
    }
    case "tempo": {
      titulo = "O marketing está saindo do tempo de alguém";
      const horas = { "5": "até 20 horas", "10": "de 20 a 40 horas", mais: "mais de 40 horas" }[r.i_tempo];
      p.push(`Quando a correria aperta: ${aspas("p_tempo_dor")}.`);
      if (horas) p.push(`Pelas suas contas, são ${horas} por mês de alguém que devia estar fazendo outra coisa.`);
      p.push("E marketing feito no tempo que sobra costuma parar justo no mês em que a empresa mais precisa.");
      break;
    }
    case "medo": {
      titulo = "O medo faz sentido. Ficar parado também custa";
      p.push(`O maior medo é ${disse("p_medo_qual")}. Enquanto isso, quem procura no Instagram e no Google fica ${r.i_medo === "concorrente" ? "com o concorrente que anuncia" : "com quem aparecer primeiro"}.`);
      break;
    }
  }

  if (ticket > 0) p.push(`Com uma venda média de uns ${reais(ticket)}, cada venda a mais por mês são ${reais(ticket * 12)} a mais no ano.`);
  return { titulo, paragrafos: p };
}

/** Classe pro comercial: A = ICP (R$ 1 mi+), B = R$ 300 mil a 1 mi, C = o resto que passou do corte. */
export function classificar(r: Respostas) {
  const classe = ["1a5m", "5m"].includes(r.faturamento) ? "A" : r.faturamento === "300a1m" ? "B" : "C";
  const quente = ["agora", "30dias"].includes(r.prazo);
  return { classe, temperatura: quente ? "quente" : r.prazo === "90dias" ? "morno" : "frio" };
}

/** Resumo legível, o mesmo que vai pro CRM: pergunta e resposta de cada tela respondida. */
export function resumo(r: Respostas, completo: boolean): string[] {
  const linhas = [completo ? "Etapa: questionário completo" : "Etapa: deixou o contato (ainda faltam as perguntas de problema)"];
  if (r.papel) linhas.push(`Papel: ${rotulo("papel", r.papel)}`);
  for (const id of fluxo(r)) {
    const pid = id === "implicacao" ? perguntaDaImplicacao(r) : id;
    if (PERGUNTAS[pid] && r[pid]) linhas.push(`${texto(PERGUNTAS[pid].titulo, r)} ${texto(rotulo(pid, r[pid]), r)}`);
  }
  return linhas;
}
