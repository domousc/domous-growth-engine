// Réplica do painel real da Domous (domous-dashboards) com uma empresa e números
// FICTÍCIOS. Nada aqui vem de cliente. Os números são coerentes entre si:
// vendas = soma da série diária; custo por venda = investido / vendas;
// receita = vendas x ticket (R$ 3.370); retorno = receita / investido.
// Cores dos canais validadas (dataviz) no fundo #17171E: #9466F0 e #1FAE7A.
import { Bot, CalendarDays, CircleDollarSign, Image as ImagemIcone, Images, LineChart, MessageCircle, Play, Repeat, ShoppingBag, Tag, TrendingUp, Users, Workflow, Zap } from "lucide-react";
import type { ComponentType } from "react";

const ROXO = "#9466F0";
const VERDE = "#1FAE7A";

const vendasPorDia = [7, 9, 7, 7, 9, 6, 5, 8, 10, 10, 8, 9, 8, 8, 9, 11, 12, 10, 10, 9, 10, 10, 12, 13, 12, 11, 10, 12, 12, 12];

type Kpi = { rotulo: string; valor: string; sub: string; delta: string; bom: boolean; icone: ComponentType<{ className?: string }>; destaque?: boolean };

const kpis: Kpi[] = [
  { rotulo: "Investido", valor: "R$ 48.200", sub: "Meta + Google no período", delta: "12% acima", bom: true, icone: CircleDollarSign },
  { rotulo: "Conversas reais", valor: "2.140", sub: "chegaram no WhatsApp", delta: "38% acima", bom: true, icone: MessageCircle },
  { rotulo: "Vendas atribuídas", valor: "286", sub: "fechadas a partir do anúncio", delta: "41% acima", bom: true, icone: ShoppingBag },
  { rotulo: "Receita atribuída", valor: "R$ 963,8 mil", sub: "faturamento que veio do anúncio", delta: "47% acima", bom: true, icone: TrendingUp, destaque: true },
  { rotulo: "Custo por venda", valor: "R$ 168,53", sub: "quanto custou cada cliente", delta: "21% abaixo", bom: true, icone: LineChart },
  { rotulo: "Retorno", valor: "20,0x", sub: "receita por real investido", delta: "31% acima", bom: true, icone: Zap },
];

const funil = [
  { etapa: "Conversas reportadas pelo Meta", valor: 2560 },
  { etapa: "Conversas reais no WhatsApp", valor: 2140 },
  { etapa: "Leads qualificados pela IA", valor: 734 },
  { etapa: "Vendas fechadas", valor: 286 },
];

const canais = [
  { nome: "Meta Ads", cor: ROXO, investido: "R$ 31.400", receita: "R$ 597,6 mil", retorno: "19,0x", parte: 62 },
  { nome: "Google Ads", cor: VERDE, investido: "R$ 16.800", receita: "R$ 366,2 mil", retorno: "21,8x", parte: 38 },
];

// Anúncios ativos do Meta (os 4 maiores de 12). Vendas somam 167 das 177 do Meta.
const criativos = [
  { id: "AD14", formato: "Vídeo 15s", icone: Play, gancho: "O vendedor resolve em 15 segundos", angulo: "Prova", gasto: "R$ 8.200", conversas: 520, custoConversa: "R$ 15,77", vendas: 78, custoVenda: "R$ 105,13", nota: "Melhor custo por venda", revisar: false },
  { id: "AD09", formato: "Carrossel", icone: Images, gancho: "Antes e depois da obra", angulo: "Desejo", gasto: "R$ 6.400", conversas: 360, custoConversa: "R$ 17,78", vendas: 49, custoVenda: "R$ 130,61", nota: "", revisar: false },
  { id: "AD17", formato: "Vídeo 20s", icone: Play, gancho: "Bastidor: o pedido saindo pra entrega", angulo: "Objeção", gasto: "R$ 5.300", conversas: 270, custoConversa: "R$ 19,63", vendas: 31, custoVenda: "R$ 170,97", nota: "", revisar: false },
  { id: "AD03", formato: "Estático", icone: Tag, gancho: "Oferta da semana com preço", angulo: "Oferta", gasto: "R$ 4.200", conversas: 150, custoConversa: "R$ 28,00", vendas: 9, custoVenda: "R$ 466,67", nota: "", revisar: true },
];

// Conjuntos e públicos do Meta. Vendas somam 177 (total do Meta).
const publicos = [
  { nome: "Remarketing · interagiu em 30 dias", gasto: "R$ 3.100", conversas: 240, custoConversa: "R$ 12,92", vendas: 34, custoVenda: "R$ 91,18", revisar: false },
  { nome: "Profissionais e empresas (PJ)", gasto: "R$ 7.400", conversas: 380, custoConversa: "R$ 19,47", vendas: 58, custoVenda: "R$ 127,59", revisar: false },
  { nome: "Aberto · Grande João Pessoa", gasto: "R$ 9.800", conversas: 610, custoConversa: "R$ 16,07", vendas: 72, custoVenda: "R$ 136,11", revisar: false },
  { nome: "CEP de alta renda", gasto: "R$ 6.900", conversas: 310, custoConversa: "R$ 22,26", vendas: 13, custoVenda: "R$ 530,77", revisar: true },
];

const automacoes = [
  "Lead do anúncio cai no CRM na hora, com a campanha de origem",
  "Venda registrada volta pro Meta e pro Google (API de Conversões)",
  "Confirmação e lembrete automáticos no WhatsApp",
  "Retomada de quem parou de responder em 24 horas",
  "Painel atualizado sozinho todo dia",
];

const formata = (n: number) => n.toLocaleString("pt-BR");
const data = (i: number) => `${String(i + 1).padStart(2, "0")}/09`;

const Titulo = ({ icone: Icone, texto }: { icone: ComponentType<{ className?: string }>; texto: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-7 h-7 rounded-lg bg-[#9466F0]/20 flex items-center justify-center">
      <Icone className="w-3.5 h-3.5 text-[#B79CF7]" />
    </span>
    <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#B79CF7]">{texto}</span>
    <span className="flex-1 h-px bg-white/10" />
  </div>
);

// Gráfico de barras diário com média móvel de 7 dias. Tooltip nativo (<title>) por barra.
const GraficoDiario = () => {
  const L = 640, A = 236, esq = 30, base = 204, topo = 16, maxY = 15;
  const passo = (L - esq) / vendasPorDia.length;
  const y = (v: number) => base - (v / maxY) * (base - topo);
  const media = vendasPorDia.map((_, i) => {
    const janela = vendasPorDia.slice(Math.max(0, i - 6), i + 1);
    return janela.reduce((a, b) => a + b, 0) / janela.length;
  });
  const linha = media.map((m, i) => `${i ? "L" : "M"}${(esq + passo * i + passo / 2).toFixed(1)},${y(m).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${L} ${A}`} className="w-full h-auto" role="img" aria-label="Vendas por dia em setembro, de 5 a 13 por dia, com tendência de alta">
      {[0, 5, 10, 15].map((g) => (
        <g key={g}>
          <line x1={esq} x2={L} y1={y(g)} y2={y(g)} stroke="rgba(255,255,255,0.07)" />
          <text x={esq - 8} y={y(g) + 5} textAnchor="end" fontSize="14" fill="#8A8A96">{g}</text>
        </g>
      ))}
      {vendasPorDia.map((v, i) => {
        const x = esq + passo * i + 2;
        const largura = passo - 4;
        return (
          <g key={i}>
            <path
              d={`M${x},${base} V${y(v) + 3} Q${x},${y(v)} ${x + 3},${y(v)} H${x + largura - 3} Q${x + largura},${y(v)} ${x + largura},${y(v) + 3} V${base} Z`}
              fill={ROXO}
            />
            <rect x={x - 2} y={topo} width={passo} height={base - topo} fill="transparent">
              <title>{`${data(i)}: ${v} vendas`}</title>
            </rect>
          </g>
        );
      })}
      <path d={linha} fill="none" stroke="#E8E8EE" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {[0, 7, 14, 21, 29].map((i) => (
        <text key={i} x={esq + passo * i + passo / 2} y={base + 24} textAnchor={i === 29 ? "end" : i === 0 ? "start" : "middle"} fontSize="14" fill="#8A8A96">{data(i)}</text>
      ))}
    </svg>
  );
};

const PainelDomous = () => (
  <figure className="relative rounded-3xl border border-white/10 bg-[#0F0F14] p-4 sm:p-6 md:p-8 text-[#F2F2F5] shadow-dark overflow-hidden text-left">
    <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#8B00FF]/20 blur-3xl" aria-hidden />

    <div className="relative">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl gradient-domous flex items-center justify-center font-extrabold text-lg">D</span>
          <div>
            <p className="font-bold text-lg leading-tight">Empresa exemplo</p>
            <p className="text-xs text-[#9A9AA6]">Performance · Meta + Google · by Domous</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold">
            <CalendarDays className="w-3.5 h-3.5" aria-hidden /> 01 set — 30 set
          </span>
          <p className="text-[11px] text-[#8A8A96] mt-1.5">Atualizado automaticamente todo dia</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-7" aria-hidden>
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#8A8A96] mr-1">Período</span>
        {["Hoje", "7 dias", "30 dias", "90 dias", "12 meses"].map((p) => (
          <span key={p} className={`rounded-full px-3 py-1 text-xs font-medium ${p === "30 dias" ? "gradient-domous text-white" : "bg-white/5 text-[#C9C9D1] border border-white/10"}`}>{p}</span>
        ))}
      </div>

      <Titulo icone={LineChart} texto="Visão geral" />
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {kpis.map((k) => (
          <li
            key={k.rotulo}
            className={`rounded-2xl border p-4 ${k.destaque ? "border-transparent bg-gradient-to-br from-[#9D33FF] to-[#5B12B8]" : "border-white/10 bg-[#17171E]"}`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs sm:text-sm font-semibold">{k.rotulo}</span>
              <k.icone className={`w-4 h-4 ${k.destaque ? "text-white" : "text-[#8A8A96]"}`} />
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tabular-nums tracking-tight">{k.valor}</p>
            <p className={`text-[11px] mt-1 ${k.destaque ? "text-white/80" : "text-[#8A8A96]"}`}>{k.sub}</p>
            <p className={`text-[11px] mt-2 font-semibold ${k.destaque ? "text-white" : "text-[#3DD68C]"}`}>
              {k.delta.includes("abaixo") ? "▼" : "▲"} {k.delta} <span className={`font-normal ${k.destaque ? "text-white/75" : "text-[#8A8A96]"}`}>vs. 30 dias anteriores</span>
            </p>
          </li>
        ))}
      </ul>

      <Titulo icone={TrendingUp} texto="Evolução" />
      <div className="rounded-2xl border border-white/10 bg-[#17171E] p-4 sm:p-5 mb-8">
        <p className="font-semibold">Vendas por dia</p>
        <p className="text-xs text-[#8A8A96] mb-3">A linha clara é a média móvel de 7 dias.</p>
        <GraficoDiario />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <Titulo icone={Workflow} texto="Do anúncio à venda" />
          <ol className="rounded-2xl border border-white/10 bg-[#17171E] p-5 space-y-3">
            {funil.map((f) => (
              <li key={f.etapa} title={`${f.etapa}: ${formata(f.valor)}`}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-[#C9C9D1]">{f.etapa}</span>
                  <span className="font-semibold tabular-nums">{formata(f.valor)}</span>
                </div>
                <div className="h-2 rounded-full bg-white/5">
                  <div className="h-2 rounded-full" style={{ width: `${(f.valor / funil[0].valor) * 100}%`, background: ROXO }} />
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Titulo icone={Repeat} texto="Canais" />
          <div className="rounded-2xl border border-white/10 bg-[#17171E] p-5">
            <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5 mb-2" role="img" aria-label="Receita: Meta 62%, Google 38%">
              {canais.map((c) => (
                <div key={c.nome} style={{ width: `${c.parte}%`, background: c.cor }} />
              ))}
            </div>
            <p className="text-[11px] text-[#8A8A96] mb-4">Divisão da receita atribuída</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-[#8A8A96]">
                  <th className="text-left font-semibold pb-2">Canal</th>
                  <th className="text-right font-semibold pb-2 hidden sm:table-cell">Investido</th>
                  <th className="text-right font-semibold pb-2">Receita</th>
                  <th className="text-right font-semibold pb-2">Retorno</th>
                </tr>
              </thead>
              <tbody>
                {canais.map((c) => (
                  <tr key={c.nome} className="border-t border-white/10">
                    <td className="py-2.5 whitespace-nowrap"><span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: c.cor }} />{c.nome} <span className="text-[#8A8A96]">{c.parte}%</span></td>
                    <td className="text-right tabular-nums hidden sm:table-cell">{c.investido}</td>
                    <td className="text-right tabular-nums whitespace-nowrap">{c.receita}</td>
                    <td className="text-right tabular-nums font-semibold">{c.retorno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Titulo icone={ImagemIcone} texto="Anúncios ativos" />
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-[#C9C9D1]">Cada criativo com quanto gastou, quantas conversas e vendas trouxe e quanto custou cada uma.</p>
        <span className="rounded-full bg-[#3DD68C]/15 text-[#3DD68C] px-3 py-1 text-xs font-semibold">● 12 anúncios ativos</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {criativos.map((c) => (
          <li key={c.id} className={`rounded-2xl border bg-[#17171E] overflow-hidden ${c.revisar ? "border-[#F0616A]/40" : "border-white/10"}`}>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2A1650] via-[#1C1330] to-[#0F0F14] p-4 flex flex-col justify-between">
              <span className="self-start inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold">
                <c.icone className="w-3 h-3" aria-hidden /> {c.formato}
              </span>
              <p className="font-bold leading-snug text-white pr-10">{c.gancho}</p>
              {c.formato.startsWith("Vídeo") && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center" aria-hidden>
                  <Play className="w-4 h-4 fill-white" />
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs text-[#8A8A96] mb-3">{c.id} · ângulo {c.angulo}</p>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                <div><dt className="text-[10px] uppercase tracking-wider text-[#8A8A96]">Gasto</dt><dd className="font-semibold tabular-nums">{c.gasto}</dd></div>
                <div><dt className="text-[10px] uppercase tracking-wider text-[#8A8A96]">Conversas</dt><dd className="font-semibold tabular-nums">{formata(c.conversas)}</dd></div>
                <div><dt className="text-[10px] uppercase tracking-wider text-[#8A8A96]">Custo/conversa</dt><dd className="font-semibold tabular-nums">{c.custoConversa}</dd></div>
                <div><dt className="text-[10px] uppercase tracking-wider text-[#8A8A96]">Vendas</dt><dd className="font-semibold tabular-nums">{c.vendas}</dd></div>
                <div className="col-span-2"><dt className="text-[10px] uppercase tracking-wider text-[#8A8A96]">Custo por venda</dt><dd className="text-lg font-bold tabular-nums">{c.custoVenda}</dd></div>
              </dl>
              {c.nota && <p className="mt-3 text-[11px] font-semibold text-[#3DD68C]">▲ {c.nota}</p>}
              {c.revisar && <p className="mt-3 text-[11px] font-semibold text-[#F0616A]">▼ Custo por venda alto: revisar</p>}
            </div>
          </li>
        ))}
      </ul>

      <Titulo icone={Users} texto="Conjuntos e públicos" />
      <div className="rounded-2xl border border-white/10 bg-[#17171E] p-4 sm:p-5 mb-8 overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-[#8A8A96]">
              <th className="text-left font-semibold pb-3">Público</th>
              <th className="text-right font-semibold pb-3">Gasto</th>
              <th className="text-right font-semibold pb-3">Conversas</th>
              <th className="text-right font-semibold pb-3">Custo/conversa</th>
              <th className="text-right font-semibold pb-3">Vendas</th>
              <th className="text-right font-semibold pb-3">Custo/venda</th>
            </tr>
          </thead>
          <tbody>
            {publicos.map((p) => (
              <tr key={p.nome} className="border-t border-white/10">
                <td className="py-3 pr-3">{p.nome}</td>
                <td className="text-right tabular-nums">{p.gasto}</td>
                <td className="text-right tabular-nums">{formata(p.conversas)}</td>
                <td className="text-right tabular-nums">{p.custoConversa}</td>
                <td className="text-right tabular-nums">{p.vendas}</td>
                <td className={`text-right tabular-nums font-semibold ${p.revisar ? "text-[#F0616A]" : ""}`}>
                  {p.custoVenda}
                  {p.revisar ? " ▼" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[11px] text-[#8A8A96] mt-3">Ordenado pelo custo por venda. O público mais barato por conversa nem sempre é o que mais vende.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <Titulo icone={Bot} texto="Atendimento com IA" />
          <ul className="grid grid-cols-2 gap-3">
            {[
              { v: "2.140", r: "conversas atendidas pelo agente" },
              { v: "9 s", r: "tempo médio da primeira resposta" },
              { v: "58%", r: "das conversas fora do horário comercial" },
              { v: "734", r: "leads qualificados passados pro vendedor" },
            ].map((i) => (
              <li key={i.r} className="rounded-2xl border border-white/10 bg-[#17171E] p-4">
                <p className="text-2xl font-bold tabular-nums">{i.v}</p>
                <p className="text-[11px] text-[#8A8A96] mt-1 leading-snug">{i.r}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Titulo icone={Workflow} texto="Automações ativas" />
          <ul className="rounded-2xl border border-white/10 bg-[#17171E] p-5 space-y-3">
            {automacoes.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm text-[#C9C9D1]">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#3DD68C] shrink-0" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#17171E] p-5 text-sm leading-relaxed text-[#C9C9D1]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#B79CF7] mb-2">Leitura</p>
        O investimento de <strong className="text-white">R$ 48.200</strong> trouxe <strong className="text-white">R$ 963,8 mil</strong> em receita
        atribuída, 20 vezes o valor investido. As vendas subiram 41% contra os 30 dias anteriores e o custo por venda caiu 21%, com o agente de
        IA respondendo em segundos as conversas que antes esperavam até o dia seguinte. O Google tem o melhor retorno do mês (21,8x) e é o
        primeiro candidato a receber mais verba. No Meta, o vídeo do vendedor (AD14) vende a R$ 105 cada; a oferta com preço (AD03) e o
        público de CEP de alta renda passam de R$ 450 por venda e são os próximos a revisar.
      </div>

      <figcaption className="flex flex-wrap justify-between gap-2 mt-5 text-[11px] text-[#8A8A96]">
        <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">Exemplo com empresa e números fictícios</span>
        <span>Gerado por <span className="text-[#B79CF7] font-semibold">Domous</span> · Business Performance</span>
      </figcaption>
    </div>
  </figure>
);

const PainelExemplo = ({ titulo = "O painel que tu recebe" }: { titulo?: string }) => (
  <section className="section-dark py-16 md:py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl mb-10">
        <h2 className="mb-5 text-white">{titulo}</h2>
        <p className="text-lg text-dark-muted leading-relaxed">
          Um link fixo, atualizado automaticamente, que você abre quando quiser e mostra pros sócios: quanto foi investido, quantas conversas
          viraram venda e quanto voltou em receita. Dá pra ver cada anúncio ativo com o criativo, quanto ele gastou e quanto custou cada
          conversa e cada venda, o mesmo recorte por conjunto e público, e o que a IA e as automações fizeram no atendimento. Assim fica
          claro onde colocar mais verba e o que desligar.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <PainelDomous />
      </div>
    </div>
  </section>
);

export default PainelExemplo;
