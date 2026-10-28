// Blocos reaproveitados por todas as páginas.
import type { ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import BotaoWhatsApp from "./BotaoWhatsApp";
import type { Pergunta, Secao } from "@/data/servicos";
import { resultadoPorId, resultados as todosResultados, type Resultado } from "@/data/resultados";

export type Migalha = { nome: string; href: string };

export const Trilha = ({ itens }: { itens: Migalha[] }) => (
  <nav aria-label="Você está em" className="mb-6 text-sm text-dark-muted">
    <ol className="flex flex-wrap items-center gap-1">
      {itens.map((m, i) => (
        <li key={m.href} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden />}
          {i < itens.length - 1 ? (
            <a href={m.href} className="hover:text-white">{m.nome}</a>
          ) : (
            <span className="text-white/90" aria-current="page">{m.nome}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Topo escuro das páginas internas. `resposta` é o parágrafo que responde o título.
export const Topo = ({
  trilha,
  h1,
  resposta,
  origem,
  waTexto,
  children,
}: {
  trilha: Migalha[];
  h1: string;
  resposta: string;
  origem: string;
  waTexto?: string;
  children?: ReactNode;
}) => (
  <section className="section-dark purple-glow pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <Trilha itens={trilha} />
        <h1 className="mb-6 text-white">{h1}</h1>
        <p className="text-lg md:text-xl text-dark-muted leading-relaxed mb-8">{resposta}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <BotaoWhatsApp origem={origem} texto={waTexto} />
          <a
            href="#conversa"
            className="inline-flex items-center justify-center rounded-full px-6 h-12 font-semibold border-2 border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-smooth"
          >
            Montar minha mensagem
          </a>
        </div>
        {children}
      </div>
    </div>
  </section>
);

export const Secoes = ({ secoes }: { secoes: Secao[] }) => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl space-y-14">
        {secoes.map((s) => (
          <article key={s.titulo}>
            <h2 className="text-2xl md:text-3xl mb-5">{s.titulo}</h2>
            {s.paragrafos.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg text-foreground/80 leading-relaxed mb-4">{p}</p>
            ))}
            {s.itens && (
              <ul className="mt-4 space-y-3">
                {s.itens.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full gradient-domous shrink-0" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const CartaoResultado = ({ r }: { r: Resultado }) => (
  <article id={r.id} className="bg-card rounded-2xl border border-border border-l-4 border-l-primary p-6 shadow-card scroll-mt-28">
    <p className="text-sm font-semibold text-primary mb-2">{r.segmento}</p>
    <h3 className="text-xl font-bold mb-5 leading-snug">{r.titulo}</h3>
    <dl className="grid grid-cols-2 gap-4">
      {r.metricas.map((m) => (
        <div key={m.rotulo}>
          <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{m.rotulo}</dt>
          <dd className="text-lg font-bold tabular-nums">{m.valor}</dd>
        </div>
      ))}
    </dl>
  </article>
);

export const Resultados = ({
  ids,
  titulo = "Resultados de quem já trabalha com a Domous",
}: {
  ids?: string[];
  titulo?: string;
}) => {
  const lista = ids ? ids.map(resultadoPorId).filter((r): r is Resultado => !!r) : todosResultados;
  if (!lista.length) return null;
  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl mb-3">{titulo}</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Números reais de operações da Domous. Por confidencialidade, os resultados aparecem pelo segmento do cliente.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((r) => (
            <CartaoResultado key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

// <details> nativo: a resposta fica no HTML mesmo fechada, ao contrário do
// accordion do Radix, que só monta o conteúdo depois do clique.
export const Perguntas = ({ faq, titulo = "Perguntas frequentes" }: { faq: Pergunta[]; titulo?: string }) => {
  if (!faq.length) return null;
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl mb-8">{titulo}</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.p} className="group bg-card rounded-2xl border border-border shadow-card open:border-primary/40">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base md:text-lg font-semibold">{f.p}</h3>
                  <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="px-6 pb-6 text-foreground/80 leading-relaxed">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export type Cartao = { titulo: string; texto: string; href: string; selo?: string };

export const GradeCartoes = ({ itens, escuro = false }: { itens: Cartao[]; escuro?: boolean }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {itens.map((c) => (
      <a
        key={c.href}
        href={c.href}
        className={`group rounded-2xl border p-6 transition-smooth hover:-translate-y-1 ${
          escuro ? "card-dark hover:border-primary/60" : "bg-card border-border shadow-card hover:shadow-domous hover:border-primary/40"
        }`}
      >
        {c.selo && <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{c.selo}</p>}
        <h3 className={`text-lg font-bold mb-2 ${escuro ? "text-white" : ""}`}>{c.titulo}</h3>
        <p className={`text-sm leading-relaxed mb-4 ${escuro ? "text-dark-muted" : "text-muted-foreground"}`}>{c.texto}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Ver detalhes <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </a>
    ))}
  </div>
);

// ── Blocos das páginas de serviço completas ──

export const ParaQuem = ({ paraQuem, sinais }: { paraQuem?: string[]; sinais?: string[] }) => {
  if (!paraQuem?.length && !sinais?.length) return null;
  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8 grid gap-6 md:grid-cols-2">
        {paraQuem?.length ? (
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
            <h2 className="text-xl md:text-2xl mb-5">Pra quem é</h2>
            <ul className="space-y-3">
              {paraQuem.map((i) => (
                <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full gradient-domous shrink-0" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {sinais?.length ? (
          <div className="bg-card rounded-2xl border border-border border-l-4 border-l-primary p-6 md:p-8 shadow-card">
            <h2 className="text-xl md:text-2xl mb-5">Sinais de que tu precisa</h2>
            <ul className="space-y-3">
              {sinais.map((i) => (
                <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                  <span className="text-primary font-bold shrink-0" aria-hidden>✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export const Etapas = ({ etapas, titulo = "Como funciona" }: { etapas?: { titulo: string; texto: string }[]; titulo?: string }) => {
  if (!etapas?.length) return null;
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl mb-8">{titulo}</h2>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-full gradient-domous text-white text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold mb-2">{e.titulo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export const MetricasFerramentas = ({ metricas, ferramentas }: { metricas?: string[]; ferramentas?: string[] }) => {
  if (!metricas?.length && !ferramentas?.length) return null;
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 grid gap-10 md:grid-cols-2">
        {metricas?.length ? (
          <div>
            <h2 className="text-xl md:text-2xl mb-5">O que a gente mede</h2>
            <ul className="flex flex-wrap gap-2">
              {metricas.map((m) => (
                <li key={m} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium">{m}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {ferramentas?.length ? (
          <div>
            <h2 className="text-xl md:text-2xl mb-5">Ferramentas</h2>
            <ul className="flex flex-wrap gap-2">
              {ferramentas.map((f) => (
                <li key={f} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{f}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};
