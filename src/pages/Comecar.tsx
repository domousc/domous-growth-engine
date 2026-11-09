// /comecar: qualifica a empresa antes do WhatsApp, em SPIN.
// Ordem: 4 perguntas de situação → contato (o lead já entra no funil do Sistema
// Domous aqui) → problema, com caminho próprio pra cada resposta → implicação →
// necessidade de solução → prazo → WhatsApp com o resumo.
// Quem fatura até R$ 30 mil/mês sai na 2ª pergunta com uma tela educada.
// Rastreio: o pixel só recebe "Lead" de quem passou do corte e TERMINOU o
// questionário (é o evento pra otimizar campanha). Quem só deixou o contato vira
// "ContatoComecar". Cada tela vista e resposta vai anônima pro mapa do formulário.
// Visual em comecar.css.
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import logoBranco from "@/assets/logo-domous-white.png";
import { site, wa } from "@/data/site";
import {
  PERGUNTAS, caminho, classificar, fluxo, implicacao, opcoesPara, perguntaDaImplicacao, resumo, rotulo, texto, type Respostas,
} from "@/data/comecar";
import "./comecar.css";

const CHAVE = "domous-comecar-v2";
const LETRAS = "ABCDEFGHIJ";
const PAUSA = 320; // tempo entre escolher e trocar de tela (dá pra ver a escolha marcando)

type Contato = { nome: string; empresa: string; whatsapp: string; papel: string; site: string };
type Estado = { r: Respostas; passo: number; contato: Contato; enviado: boolean; terminou: boolean; sessao: string };

declare global {
  interface Window { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void }
}

const novaSessao = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
const VAZIO: Estado = { r: {}, passo: 0, contato: { nome: "", empresa: "", whatsapp: "", papel: "", site: "" }, enviado: false, terminou: false, sessao: "" };

function ler(): Estado {
  try {
    const s = JSON.parse(sessionStorage.getItem(CHAVE) || "null");
    if (s && typeof s.passo === "number" && s.sessao) return { ...VAZIO, ...s };
  } catch { /* armazenamento indisponível */ }
  return { ...VAZIO, sessao: novaSessao() };
}

const camada = (dados: Record<string, unknown>) => {
  try { (window.dataLayer = window.dataLayer || []).push(dados); } catch { /* sem rastreio */ }
};

function utms() {
  const out: Record<string, string> = {};
  try {
    const u = new URLSearchParams(location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"].forEach((k) => {
      const v = u.get(k);
      if (v) out[k] = v.slice(0, 200);
    });
  } catch { /* noop */ }
  return out;
}

// De onde a pessoa veio, pro mapa: utm_source, senão o site que mandou, senão "direto".
function origem() {
  try {
    const u = new URLSearchParams(location.search);
    if (u.get("utm_source")) return u.get("utm_source")!.slice(0, 40);
    if (u.get("fbclid")) return "meta";
    if (u.get("gclid")) return "google";
    if (document.referrer) {
      const h = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (h && h !== location.hostname) return h.slice(0, 40);
    }
  } catch { /* noop */ }
  return "direto";
}

// Evento anônimo pro mapa (sem nome nem telefone). sendBeacon não trava a navegação.
function registrar(sessao: string, tipo: string, tela: string, extra: Record<string, string | undefined> = {}) {
  try {
    const corpo = JSON.stringify({ sessao, tipo, tela, ...extra });
    if (navigator.sendBeacon) navigator.sendBeacon("/api/comecar/evento", corpo);
    else fetch("/api/comecar/evento", { method: "POST", body: corpo, keepalive: true }).catch(() => {});
  } catch { /* noop */ }
}

// Luz que acompanha o mouse dentro do card.
const seguirMouse = (e: React.PointerEvent<HTMLElement>) => {
  const b = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - b.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - b.top}px`);
};

const atraso = (i: number) => ({ animationDelay: `${120 + i * 55}ms` });

const Opcoes = ({ id, r, cards, escolhendo, aoEscolher, base = 0 }: {
  id: string; r: Respostas; cards?: boolean; escolhendo?: string; aoEscolher: (v: string) => void; base?: number;
}) => {
  const lista = opcoesPara(id, r);
  return (
    <div className={cards ? "grid sm:grid-cols-2 gap-3" : "grid gap-3"} role="radiogroup">
      {lista.map((o, i) => {
        const marcada = r[id] === o.v;
        const sozinha = cards && lista.length % 2 === 1 && i === lista.length - 1;
        return (
          <button
            key={o.v}
            type="button"
            role="radio"
            aria-checked={marcada}
            onClick={() => aoEscolher(o.v)}
            onPointerMove={seguirMouse}
            style={atraso(base + i)}
            className={`cm-opcao cm-entra ${sozinha ? "sm:col-span-2" : ""} ${escolhendo === o.v ? "cm-escolhida" : ""}`}
          >
            <span className="cm-tecla" aria-hidden>{LETRAS[i]}</span>
            <span className="min-w-0">
              <span className="cm-opcao-titulo">{o.l}</span>
              {o.d && <span className="cm-opcao-desc">{o.d}</span>}
            </span>
            <Check className="cm-check w-5 h-5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
};

const min = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

const Comecar = () => {
  const [estado, setEstado] = useState<Estado>(() => (typeof window === "undefined" ? { ...VAZIO, sessao: "ssr" } : ler()));
  const { r, passo, contato, enviado, terminou, sessao } = estado;
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [fim, setFim] = useState<"" | "ok" | "fora">(() => (estado.terminou ? "ok" : ""));
  const [saindo, setSaindo] = useState(false);
  const [escolhendo, setEscolhendo] = useState("");
  const origemRef = useRef("direto");

  const etapas = useMemo(() => fluxo(r), [r]);
  const atual = etapas[Math.min(passo, etapas.length - 1)];
  const total = etapas.length;
  const progresso = Math.round(((passo + (fim === "ok" ? 1 : 0)) / total) * 100);
  const mudar = (p: Partial<Estado>) => setEstado((e) => ({ ...e, ...p }));

  useEffect(() => { origemRef.current = origem(); }, []);
  useEffect(() => {
    try { sessionStorage.setItem(CHAVE, JSON.stringify(estado)); } catch { /* noop */ }
  }, [estado]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [passo, fim]);

  // Cada tela aberta vira um "ver" no mapa.
  const telaAtual = fim || atual;
  useEffect(() => {
    if (sessao === "ssr" || fim === "ok") return;
    registrar(sessao, "ver", telaAtual === "implicacao" ? "implicacao" : telaAtual, { segmento: r.segmento, origem: origemRef.current });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telaAtual]);

  // Troca de tela com saída suave: some, troca, a próxima entra em cascata.
  function trocar(acao: () => void) {
    setSaindo(true);
    setTimeout(() => { acao(); setSaindo(false); setEscolhendo(""); }, PAUSA);
  }
  const ir = (novo: number) => trocar(() => mudar({ passo: Math.max(0, novo) }));

  async function mandarLead(respostas: Respostas, completo: boolean) {
    const { classe, temperatura } = classificar(respostas);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          nome: contato.nome.trim(), empresa: contato.empresa.trim(), whatsapp: contato.whatsapp.replace(/\D/g, ""),
          papel: rotulo("papel", contato.papel), site: contato.site,
          segmento: rotulo("segmento", respostas.segmento), faturamento: rotulo("faturamento", respostas.faturamento),
          classe, temperatura, respostas, resumo: resumo({ ...respostas, papel: contato.papel }, completo), utm: utms(), pagina: location.pathname,
        }),
      });
    } catch { /* o resumo segue na mensagem do WhatsApp de qualquer jeito */ }
  }

  async function finalizar(respostas: Respostas) {
    const { classe, temperatura } = classificar(respostas);
    if (!terminou) {
      // O evento que otimiza campanha: qualificado (passou do corte) e terminou tudo.
      try {
        window.fbq?.("track", "Lead", { content_name: "comecar", content_category: classe, status: temperatura }, { eventID: `comecar-${sessao}` });
        window.gtag?.("event", "generate_lead", { method: "comecar", classe, temperatura });
      } catch { /* noop */ }
      camada({ event: "comecar_lead", classe, temperatura });
      registrar(sessao, "fim", "fim", { segmento: respostas.segmento, origem: origemRef.current });
      mandarLead(respostas, true);
    }
    mudar({ terminou: true });
    trocar(() => setFim("ok"));
  }

  function responder(chave: string, valor: string) {
    if (saindo) return;
    const novo = { ...r, [chave]: valor };
    mudar({ r: novo });
    setEscolhendo(valor);
    camada({ event: "comecar_resposta", pergunta: chave, valor });
    registrar(sessao, "responder", chave, { resposta: valor, segmento: novo.segmento, origem: origemRef.current });
    if (chave === "faturamento" && valor === "ate30") {
      camada({ event: "comecar_fora", motivo: "faturamento" });
      registrar(sessao, "fora", "fora", { segmento: novo.segmento, origem: origemRef.current });
      trocar(() => setFim("fora"));
      return;
    }
    if (chave === "prazo") return void finalizar(novo);
    trocar(() => mudar({ passo: passo + 1 }));
  }

  // Atalho de teclado: A, B, C... escolhe a opção da tela.
  const idDaTela = atual === "implicacao" ? perguntaDaImplicacao(r) : PERGUNTAS[atual] ? atual : "";
  useEffect(() => {
    if (fim || !idDaTela) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      const o = opcoesPara(idDaTela, r)[LETRAS.indexOf(e.key.toUpperCase())];
      if (e.key.length === 1 && o) responder(idDaTela, o.v);
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  });

  async function enviarContato(e: React.FormEvent) {
    e.preventDefault();
    const zap = contato.whatsapp.replace(/\D/g, "");
    if (contato.nome.trim().length < 2) return setErro("Diz o seu nome.");
    if (!contato.empresa.trim()) return setErro("Diz o nome da empresa.");
    if (zap.length < 10 || zap.length > 13) return setErro("Confere o WhatsApp, com DDD.");
    if (!contato.papel) return setErro("Escolhe o seu papel na empresa.");
    setErro("");
    if (!enviado) {
      setEnviando(true);
      await mandarLead(r, false);
      setEnviando(false);
      try { window.fbq?.("trackCustom", "ContatoComecar", { content_category: classificar(r).classe }); } catch { /* noop */ }
      camada({ event: "comecar_contato", classe: classificar(r).classe });
      registrar(sessao, "contato", "contato", { segmento: r.segmento, origem: origemRef.current });
    }
    trocar(() => mudar({ enviado: true, passo: passo + 1 }));
  }

  function recomecar() {
    try { sessionStorage.removeItem(CHAVE); } catch { /* noop */ }
    setEstado({ ...VAZIO, sessao: novaSessao() });
    setFim("");
  }

  const primeiroNome = contato.nome.trim().split(/\s+/)[0] || "";
  const raiz = caminho(r);
  const travaId = r.investimento === "zero" ? "trava_sem" : "trava";
  const imp = atual === "implicacao" || fim === "ok" ? implicacao(r) : null;
  const mensagemWa =
    `Oi! Sou ${contato.nome.trim()}, da ${contato.empresa.trim()}. Respondi as perguntas no site` +
    (raiz ? `. O que mais trava hoje: ${min(rotulo(travaId, raiz))}` : "") +
    (r.prazo ? `. Quero começar: ${min(rotulo("prazo", r.prazo))}.` : ".");

  const pergunta = PERGUNTAS[atual];
  const ganhoId = perguntaDaImplicacao(r);

  return (
    <div className="cm flex flex-col">
      <div className="cm-fundo" aria-hidden>
        <div className="cm-luz cm-luz-1" />
        <div className="cm-luz cm-luz-2" />
        <div className="cm-grade" />
        <div className="cm-grao" />
      </div>

      <header className="cm-topo">
        <div className="max-w-3xl mx-auto w-full px-4 h-16 flex items-center justify-between">
          <a href="/" aria-label="Domous, voltar ao site">
            <img src={logoBranco} alt="Domous Business Performance" className="h-7" width={146} height={28} />
          </a>
          <a href="/" className="cm-link-topo">Voltar ao site</a>
        </div>
        {fim !== "fora" && (
          <div className="cm-progresso" aria-hidden>
            <div className="cm-progresso-barra" style={{ width: `${Math.max(3, progresso)}%` }} />
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pt-12 pb-16 md:pt-20">
        <div key={fim || atual} className={`cm-tela ${saindo ? "cm-sai" : ""}`}>
          {fim === "fora" && (
            <section aria-live="polite">
              <span className="cm-eyebrow cm-entra" style={atraso(0)}>Obrigado pela sinceridade</span>
              <h1 className="cm-titulo mt-5 mb-6 cm-entra" style={atraso(1)}>Por enquanto, a Domous não é o melhor investimento pro seu momento.</h1>
              <div className="cm-painel cm-entra" style={atraso(2)}>
                <p className="cm-nota mb-4">
                  Faturando até <span className="cm-destaque">R$ 30 mil por mês</span>, o dinheiro que iria pra gestão de agência rende
                  mais direto na operação.
                </p>
                <p className="cm-nota mb-8">
                  O que a gente sabe tá aberto no blog e no Instagram do Kairo, de graça. Quando a empresa passar desse ponto, volta aqui.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/blog/" className="cm-botao">Ler o blog da Domous <ArrowRight className="w-5 h-5" aria-hidden /></a>
                  <a href={site.instagramKairo} target="_blank" rel="noopener noreferrer" className="cm-botao-2">Seguir o @kairolucas</a>
                </div>
              </div>
              <button type="button" onClick={() => trocar(() => setFim(""))} className="cm-voltar mt-8 cm-entra" style={atraso(3)}>
                <ArrowLeft className="w-4 h-4" aria-hidden /> Marquei errado, quero corrigir
              </button>
            </section>
          )}

          {fim === "ok" && (
            <section aria-live="polite" className="text-center">
              <svg className="cm-selo cm-selo-luz mx-auto mb-6" viewBox="0 0 72 72" fill="none" aria-hidden>
                <circle cx="36" cy="36" r="32" stroke="hsl(285 95% 70%)" strokeWidth="2.5" />
                <path d="M24 37l8 8 16-17" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h1 className="cm-titulo mb-5 cm-entra" style={atraso(4)}>{primeiroNome ? `${primeiroNome}, agora` : "Agora"} é só mandar o oi.</h1>
              <p className="cm-nota mx-auto mb-10 cm-entra" style={atraso(5)}>
                As suas respostas já estão com a gente. Quem te responder no WhatsApp já chega sabendo
                {imp?.titulo ? <> de <span className="cm-destaque">{min(imp.titulo)}</span></> : " do seu caso"}, sem pergunta repetida.
              </p>
              <div className="cm-entra" style={atraso(6)}>
                <a
                  href={wa(mensagemWa, "comecar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-origem="comecar-final"
                  className="cm-botao w-full sm:w-auto sm:px-10"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden /> Abrir o WhatsApp da Domous
                </a>
              </div>
              <p className="mt-5 text-sm cm-nota mx-auto cm-entra" style={atraso(7)}>Horário comercial, de segunda a sexta. Fora disso, a gente responde no próximo dia útil.</p>
              <button type="button" onClick={recomecar} className="cm-voltar mt-10 cm-entra" style={atraso(8)}>Responder de novo</button>
            </section>
          )}

          {!fim && pergunta && (
            <section>
              <p className="cm-contador mb-5 cm-entra" style={atraso(0)}>
                <span>Pergunta <b>{passo + 1}</b> de {total}</span>
              </p>
              <h1 className="cm-titulo mb-4 cm-entra" style={atraso(1)}>{texto(pergunta.titulo, r)}</h1>
              {texto(pergunta.nota, r) && <p className="cm-nota mb-8 cm-entra" style={atraso(2)}>{texto(pergunta.nota, r)}</p>}
              <div className={texto(pergunta.nota, r) ? "" : "mt-8"}>
                <Opcoes id={atual} r={r} cards={pergunta.cards} escolhendo={escolhendo} base={3} aoEscolher={(v) => responder(atual, v)} />
              </div>
            </section>
          )}

          {!fim && imp && atual === "implicacao" && (
            <section>
              {/* Essa tela não pode parecer o fim: contador no topo, aviso de que
                  ainda tem pergunta e seta apontando pra ela. */}
              <p className="cm-contador mb-5 cm-entra" style={atraso(0)}>
                <span>Pergunta <b>{passo + 1}</b> de {total}</span>
              </p>
              <div className="cm-painel mb-8 cm-entra" style={atraso(1)}>
                <span className="cm-eyebrow mb-5">Uma conta rápida com o que você respondeu</span>
                <h2 className="cm-titulo mt-5 mb-5" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>{imp.titulo}</h2>
                {imp.paragrafos.map((t) => <p key={t} className="cm-nota mb-3 last:mb-0" style={{ color: "rgba(255,255,255,0.82)" }}>{t}</p>)}
              </div>
              <div className="cm-continua cm-entra" style={atraso(2)}>
                <span>Ainda não acabou: {total - passo === 1 ? "falta só mais 1 pergunta" : `faltam ${total - passo} perguntas`}</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden><path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h1 className="cm-titulo-2 mt-8 mb-6 cm-entra" style={atraso(3)}>{texto(PERGUNTAS[ganhoId]?.titulo, r)}</h1>
              <Opcoes id={ganhoId} r={r} escolhendo={escolhendo} base={3} aoEscolher={(v) => responder(ganhoId, v)} />
            </section>
          )}

          {!fim && atual === "contato" && (
            <section>
              <span className="cm-eyebrow cm-entra" style={atraso(0)}>Antes de seguir</span>
              <h1 className="cm-titulo mt-5 mb-4 cm-entra" style={atraso(1)}>Pra quem a gente manda o resumo?</h1>
              <p className="cm-nota mb-8 cm-entra" style={atraso(2)}>
                Agora vêm as perguntas sobre o que trava as vendas. São poucas e mudam conforme o que você responder. No fim, você
                cai no WhatsApp com tudo resumido.
              </p>
              <form onSubmit={enviarContato} className="cm-painel grid gap-5 cm-entra" style={atraso(3)} noValidate>
                {([
                  ["nome", "Seu nome", "name", "text", "Ex.: Ana Souza"],
                  ["empresa", "Nome da empresa", "organization", "text", "Ex.: Empresa Exemplo"],
                  ["whatsapp", "WhatsApp com DDD", "tel", "tel", "(83) 99999-9999"],
                ] as const).map(([campo, rot, auto, tipo, ph]) => (
                  <label key={campo} className="block">
                    <span className="block text-sm font-semibold text-white/90 mb-2">{rot}</span>
                    <input
                      type={tipo}
                      autoComplete={auto}
                      inputMode={tipo === "tel" ? "tel" : undefined}
                      placeholder={ph}
                      value={contato[campo]}
                      onChange={(e) => mudar({ contato: { ...contato, [campo]: e.target.value } })}
                      className="cm-campo"
                    />
                  </label>
                ))}
                <fieldset>
                  <legend className="block text-sm font-semibold text-white/90 mb-2">Seu papel na empresa</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {PERGUNTAS.papel.opcoes.map((o) => (
                      <button key={o.v} type="button" aria-pressed={contato.papel === o.v}
                        onClick={() => mudar({ contato: { ...contato, papel: o.v } })}
                        className="cm-chip">{o.l}</button>
                    ))}
                  </div>
                </fieldset>
                {/* Campo isca pra robô: gente não vê, robô preenche. */}
                <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={contato.site} onChange={(e) => mudar({ contato: { ...contato, site: e.target.value } })} />
                {erro && <p className="text-sm text-red-400" role="alert">{erro}</p>}
                <button type="submit" disabled={enviando} className="cm-botao mt-1 w-full">
                  {enviando ? "Salvando..." : <>Continuar <ArrowRight className="w-5 h-5" aria-hidden /></>}
                </button>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Seus dados ficam só com a Domous e servem pra gente te responder. Nada de lista de spam.</p>
              </form>
            </section>
          )}
        </div>

        {!fim && (
          <div className="mt-10 flex items-center justify-between gap-4">
            {passo > 0 ? (
              <button type="button" onClick={() => ir(passo - 1)} className="cm-voltar">
                <ArrowLeft className="w-4 h-4" aria-hidden /> Voltar
              </button>
            ) : <span />}
            {atual !== "contato" && (
              <p className="cm-dica hidden md:block">Dica: aperte <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> no teclado pra responder</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Comecar;
