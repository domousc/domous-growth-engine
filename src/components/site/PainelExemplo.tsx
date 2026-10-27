// Ilustração do painel de investimento x receita que o cliente recebe.
// Números FICTÍCIOS e coerentes entre si (CAC = investimento / vendas; retorno =
// receita / investimento). O aviso de "exemplo" fica sempre visível.
const indicadores = [
  { rotulo: "Investimento em anúncio", valor: "R$ 30.000" },
  { rotulo: "Receita atribuída", valor: "R$ 240.000" },
  { rotulo: "Custo por cliente (CAC)", valor: "R$ 250" },
  { rotulo: "Retorno por real investido", valor: "8x" },
];

const funil = [
  { etapa: "Conversas reportadas pelo Meta", valor: 1650 },
  { etapa: "Conversas reais no WhatsApp", valor: 1380 },
  { etapa: "Orçamentos enviados", valor: 410 },
  { etapa: "Vendas fechadas", valor: 120 },
];

const formata = (n: number) => n.toLocaleString("pt-BR");

const PainelExemplo = ({ titulo = "O painel que tu recebe" }: { titulo?: string }) => {
  const maximo = funil[0].valor;
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
        <div>
          <h2 className="mb-5">{titulo}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Um link fixo que você abre quando quiser e mostra pros sócios: quanto foi investido, quantas conversas viraram orçamento e
            venda, e quanto voltou em receita.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Repara na diferença entre a conversa que o Meta reporta e a conversa que chega de verdade no WhatsApp. Medir essa
            diferença é uma das primeiras coisas que a gente faz.
          </p>
        </div>

        <figure className="section-dark rounded-3xl border border-white/10 p-5 md:p-7 shadow-dark">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm font-semibold text-white">Painel · Outubro</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-dark-muted">Exemplo com números fictícios</span>
          </div>

          <ul className="grid grid-cols-2 gap-3 mb-6">
            {indicadores.map((i) => (
              <li key={i.rotulo} className="card-dark rounded-xl border p-4">
                <p className="text-xs text-dark-muted mb-1">{i.rotulo}</p>
                <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{i.valor}</p>
              </li>
            ))}
          </ul>

          <p className="text-xs uppercase tracking-wide text-dark-muted mb-3">Do anúncio à venda</p>
          <ol className="space-y-2.5">
            {funil.map((f) => (
              <li key={f.etapa} title={`${f.etapa}: ${formata(f.valor)}`}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/85">{f.etapa}</span>
                  <span className="font-semibold text-white tabular-nums">{formata(f.valor)}</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/5">
                  <div className="h-2.5 rounded-full bg-primary" style={{ width: `${(f.valor / maximo) * 100}%` }} />
                </div>
              </li>
            ))}
          </ol>
          <figcaption className="sr-only">
            Exemplo fictício de painel: investimento de R$ 30.000, receita atribuída de R$ 240.000, CAC de R$ 250 e retorno de 8 vezes;
            1.650 conversas reportadas, 1.380 reais, 410 orçamentos e 120 vendas.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default PainelExemplo;
