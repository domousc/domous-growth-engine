// Quiz curto que monta a primeira mensagem do WhatsApp: segmento, faturamento,
// canal de venda e o que mais pesa. Uma pergunta por tela, com a mensagem se
// montando ao lado em tempo real. Ninguém é barrado (a Domous atende quem pagar);
// o porte e o canal vão na mensagem pra o comercial priorizar.
// Nada é guardado no site: o texto só vai pro link do WhatsApp.
import { useEffect, useRef, useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {
  ArrowLeft, ArrowRight, Building2, Check, HeartPulse, Home, MessageCircle, Package, Sparkles, Store,
} from "lucide-react";
import { wa } from "@/data/site";
import { resultadoPorId } from "@/data/resultados";

type Opcao = { id: string; rotulo: string; frase: string };

const setores = [
  { id: "construtora", rotulo: "Construtora ou incorporadora", frase: "uma construtora", Icone: Building2, caso: "imoveis-6-vendas" },
  { id: "imobiliaria", rotulo: "Imobiliária ou corretor", frase: "uma imobiliária", Icone: Home, caso: "imoveis-6-vendas" },
  { id: "distribuidor", rotulo: "Distribuidor ou atacado", frase: "um distribuidor", Icone: Package, caso: undefined },
  { id: "loja", rotulo: "Loja, varejo ou e-commerce", frase: "uma loja", Icone: Store, caso: "ecommerce-de-brinquedos" },
  { id: "clinica", rotulo: "Clínica ou saúde", frase: "uma clínica", Icone: HeartPulse, caso: "clinica-de-estetica" },
  { id: "outro", rotulo: "Outro segmento", frase: "uma empresa", Icone: Sparkles, caso: undefined },
];

const faturamentos: Opcao[] = [
  { id: "ate100", rotulo: "Até R$ 100 mil", frase: "até R$ 100 mil por mês" },
  { id: "100a300", rotulo: "R$ 100 a 300 mil", frase: "entre R$ 100 mil e R$ 300 mil por mês" },
  { id: "300a1mi", rotulo: "R$ 300 mil a 1 mi", frase: "entre R$ 300 mil e R$ 1 milhão por mês" },
  { id: "1a5mi", rotulo: "R$ 1 a 5 mi", frase: "entre R$ 1 milhão e R$ 5 milhões por mês" },
  { id: "acima5mi", rotulo: "Acima de R$ 5 mi", frase: "acima de R$ 5 milhões por mês" },
];

const canais: Opcao[] = [
  { id: "principal", rotulo: "Sim, é onde sai a maior parte das vendas", frase: "vende principalmente pelo WhatsApp" },
  { id: "parte", rotulo: "Parte das vendas passa por lá", frase: "vende uma parte pelo WhatsApp" },
  { id: "nao", rotulo: "Ainda não, vendemos por outro canal", frase: "ainda não vende pelo WhatsApp" },
];

const dores: Opcao[] = [
  { id: "lead", rotulo: "O lead chega e não vira venda", frase: "o lead chega e não vira venda" },
  { id: "medir", rotulo: "Não sei quanto o marketing vende", frase: "não sei quanto o marketing vende" },
  { id: "dependencia", rotulo: "Dependo de indicação e balcão", frase: "dependo de indicação e do balcão" },
  { id: "comercial", rotulo: "Quero estruturar o comercial", frase: "quero estruturar o comercial" },
  { id: "meta", rotulo: "Tenho lançamento ou meta pela frente", frase: "tenho um lançamento ou uma meta pela frente" },
  { id: "raiox", rotulo: "Quero um Raio-X Domous", frase: "quero um Raio-X Domous da empresa" },
];

const acha = <T extends { id: string }>(lista: T[], id: string) => lista.find((o) => o.id === id);

function montar(setor?: Opcao, faturamento?: Opcao, canal?: Opcao, dor?: Opcao) {
  if (!setor && !faturamento && !canal && !dor) return "Oi! Quero conversar com a Domous sobre minha empresa.";
  const partes = [faturamento && `fatura ${faturamento.frase}`, canal?.frase].filter(Boolean);
  const quem = `Sou de ${setor?.frase ?? "uma empresa"}${partes.length ? ` que ${partes.join(" e ")}` : ""}.`;
  const peso = dor ? ` O que mais pesa hoje: ${dor.frase}.` : "";
  return `Oi! ${quem}${peso} Quero entender como a Domous pode ajudar.`;
}

const ETAPAS = ["Segmento", "Faturamento", "WhatsApp", "Prioridade"] as const;

const Escolha = ({ ativo, onClick, children, className = "" }: { ativo: boolean; onClick: () => void; children: React.ReactNode; className?: string }) => (
  <button
    type="button"
    aria-pressed={ativo}
    onClick={onClick}
    className={`group relative flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm md:text-base font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
      ativo
        ? "border-primary bg-primary/15 text-dark-foreground shadow-[0_0_0_1px_hsl(280_85%_55%/0.6)]"
        : "border-dark-border bg-white/[0.02] text-dark-foreground/85 hover:border-primary/50 hover:bg-primary/[0.07]"
    } ${className}`}
  >
    {children}
    <span className={`ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-smooth ${ativo ? "border-primary gradient-domous" : "border-dark-border"}`} aria-hidden>
      {ativo && <Check className="h-3 w-3 text-white" />}
    </span>
  </button>
);

const MonteMensagem = ({
  origem,
  setorInicial,
  titulo = "Vamos conversar sobre sua empresa.",
}: {
  origem: string;
  setorInicial?: string;
  titulo?: string;
}) => {
  const [setor, setSetor] = useState(setorInicial ?? "");
  const [faturamento, setFaturamento] = useState("");
  const [canal, setCanal] = useState("");
  const [dor, setDor] = useState("");
  // Página de segmento já sabe o setor: começa no faturamento (dá pra voltar).
  const [etapa, setEtapa] = useState(setorInicial ? 1 : 0);
  const tituloEtapa = useRef<HTMLHeadingElement>(null);
  const primeiraRender = useRef(true);

  useEffect(() => {
    if (primeiraRender.current) { primeiraRender.current = false; return; }
    tituloEtapa.current?.focus({ preventScroll: true });
  }, [etapa]);

  const s = acha(setores, setor);
  const texto = montar(s, acha(faturamentos, faturamento), acha(canais, canal), acha(dores, dor));
  const caso = s?.caso ? resultadoPorId(s.caso) : undefined;
  const fim = etapa >= ETAPAS.length;
  const progresso = Math.min(etapa, ETAPAS.length) / ETAPAS.length;
  const indiceFat = faturamentos.findIndex((f) => f.id === faturamento);

  // Escolha única avança sozinha, com uma pausa curta pra pessoa ver o que marcou.
  const escolher = (definir: (id: string) => void, id: string) => {
    definir(id);
    window.setTimeout(() => setEtapa((e) => e + 1), 260);
  };

  const pergunta = ["Qual é o seu negócio?", "Quanto a empresa fatura por mês?", "Vocês vendem pelo WhatsApp?", "O que mais pesa hoje?"][etapa];

  return (
    <section id="conversa" className="section-dark py-20 md:py-28 relative overflow-hidden scroll-mt-20">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,hsl(280_85%_55%/0.18),transparent)]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-3 text-dark-foreground max-w-2xl">{titulo}</h2>
          <p className="text-lg text-dark-muted mb-10 max-w-2xl">
            Quatro toques e a conversa já começa com o contexto da sua empresa. Sem formulário, sem cadastro.
          </p>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Quiz */}
            <div className="card-brilho card-dark rounded-3xl border p-5 sm:p-8">
              <div className="mb-7">
                <div className="flex items-center justify-between text-xs text-dark-muted mb-3">
                  <span>{fim ? "Mensagem pronta" : `Etapa ${etapa + 1} de ${ETAPAS.length} · ${ETAPAS[etapa]}`}</span>
                  <span className="tabular-nums">{Math.round(progresso * 100)}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-dark-border/70 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progresso * 100)} aria-label="Progresso">
                  <div className="h-full rounded-full gradient-domous transition-[width] duration-500 ease-out" style={{ width: `${progresso * 100}%` }} />
                </div>
              </div>

              <div key={etapa} className="quiz-etapa" aria-live="polite">
                {!fim && (
                  <h3 ref={tituloEtapa} tabIndex={-1} className="text-2xl md:text-3xl text-dark-foreground mb-6 outline-none">{pergunta}</h3>
                )}

                {etapa === 0 && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {setores.map(({ id, rotulo, Icone }) => (
                      <Escolha key={id} ativo={setor === id} onClick={() => escolher(setSetor, id)}>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-brand-label"><Icone className="h-5 w-5" aria-hidden /></span>
                        {rotulo}
                      </Escolha>
                    ))}
                  </div>
                )}

                {etapa === 1 && (
                  <div>
                    <p className="text-4xl md:text-5xl font-semibold tabular-nums mb-1 min-h-[1.2em]">
                      {indiceFat >= 0 ? <span className="gradient-domous-text">{faturamentos[indiceFat].rotulo}</span> : <span className="text-dark-muted/60 text-2xl md:text-3xl">Arraste ou toque numa faixa</span>}
                    </p>
                    <p className="text-sm text-dark-muted mb-8">por mês, valor aproximado</p>
                    <SliderPrimitive.Root
                      className="relative flex w-full touch-none select-none items-center h-6"
                      min={0}
                      max={faturamentos.length - 1}
                      step={1}
                      value={[indiceFat >= 0 ? indiceFat : 2]}
                      onValueChange={([v]) => setFaturamento(faturamentos[v].id)}
                      aria-label="Faturamento mensal"
                    >
                      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-dark-border/80">
                        <SliderPrimitive.Range className={`absolute h-full gradient-domous transition-opacity ${indiceFat >= 0 ? "opacity-100" : "opacity-30"}`} />
                      </SliderPrimitive.Track>
                      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-white bg-primary shadow-[0_0_0_6px_hsl(280_85%_55%/0.25)] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50" />
                    </SliderPrimitive.Root>
                    <div className="mt-4 grid grid-cols-5 gap-1 text-[11px] sm:text-xs text-dark-muted">
                      {faturamentos.map((f, i) => (
                        <button key={f.id} type="button" onClick={() => setFaturamento(f.id)} className={`text-center leading-tight rounded-md py-1 transition-smooth hover:text-dark-foreground ${i === indiceFat ? "text-brand-label font-semibold" : ""}`}>
                          {f.rotulo}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {etapa === 2 && (
                  <div className="grid gap-3">
                    {canais.map((c) => (
                      <Escolha key={c.id} ativo={canal === c.id} onClick={() => escolher(setCanal, c.id)}>{c.rotulo}</Escolha>
                    ))}
                  </div>
                )}

                {etapa === 3 && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {dores.map((d) => (
                      <Escolha key={d.id} ativo={dor === d.id} onClick={() => escolher(setDor, d.id)}>{d.rotulo}</Escolha>
                    ))}
                  </div>
                )}

                {fim && (
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-domous shadow-domous mb-5"><Check className="h-6 w-6 text-white" aria-hidden /></span>
                    <h3 ref={tituloEtapa} tabIndex={-1} className="text-2xl md:text-3xl text-dark-foreground mb-3 outline-none">Pronto. Sua mensagem já tem o contexto.</h3>
                    <p className="text-dark-muted mb-6">A conversa começa sabendo quem você é. É só abrir no WhatsApp e enviar.</p>
                    {caso && (
                      <div className="rounded-2xl border border-dark-border bg-white/[0.02] p-5 mb-2">
                        <p className="text-xs uppercase tracking-wide text-dark-muted mb-2">Um resultado parecido com o seu caso</p>
                        <p className="text-xs font-semibold text-brand-label mb-1">{caso.segmento}</p>
                        <p className="font-semibold text-dark-foreground">{caso.titulo}</p>
                      </div>
                    )}
                    {/* No celular a prévia fica longe, abaixo do card: o botão vem pra cá. */}
                    <a
                      href={wa(texto, origem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta="whatsapp"
                      data-origem={origem}
                      onClick={() => {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ event: "click_whatsapp", cta_label: "monte-mensagem-fim", origem, setor, faturamento, canal, dor, etapa });
                      }}
                      className="lg:hidden mt-5 flex w-full items-center justify-center gap-2 rounded-full h-14 text-base font-semibold gradient-domous botao-reflexo text-white shadow-domous"
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden />
                      Abrir no WhatsApp
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setEtapa((e) => Math.max(0, e - 1))}
                  className={`inline-flex items-center gap-2 text-sm text-dark-muted hover:text-dark-foreground transition-smooth ${etapa === 0 ? "invisible" : ""}`}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
                </button>
                {etapa === 1 && (
                  <button
                    type="button"
                    disabled={indiceFat < 0}
                    onClick={() => setEtapa(2)}
                    className="inline-flex items-center gap-2 rounded-full h-11 px-6 text-sm font-semibold gradient-domous botao-reflexo text-white shadow-domous transition-smooth disabled:opacity-40 disabled:shadow-none"
                  >
                    Próxima <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                )}
                {!fim && etapa !== 1 && (
                  <button type="button" onClick={() => setEtapa((e) => e + 1)} className="text-sm text-dark-muted hover:text-dark-foreground transition-smooth">
                    Pular
                  </button>
                )}
              </div>
            </div>

            {/* Mensagem montando ao vivo */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-wide text-dark-muted mb-3">Sua mensagem</p>
              <div className="card-dark rounded-3xl border p-5 mb-5">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-dark-border">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-domous text-sm font-bold text-white" aria-hidden>D</span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-dark-foreground">Domous</p>
                    <p className="text-xs text-dark-muted">WhatsApp</p>
                  </div>
                </div>
                <p key={texto} className="quiz-balao ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-4 py-3 text-dark-foreground leading-relaxed">{texto}</p>
              </div>
              <a
                href={wa(texto, origem)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-origem={origem}
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: "click_whatsapp", cta_label: "monte-mensagem", origem, setor, faturamento, canal, dor, etapa });
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-full h-14 text-base font-semibold gradient-domous botao-reflexo text-white transition-smooth ${fim ? "shadow-[0_14px_44px_-8px_hsl(280_85%_55%/0.7)] scale-[1.02]" : "shadow-domous"}`}
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                Abrir no WhatsApp
              </a>
              <p className="text-xs text-dark-muted mt-3 text-center">
                A mensagem abre no seu WhatsApp. Nada é enviado antes de você apertar enviar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteMensagem;
