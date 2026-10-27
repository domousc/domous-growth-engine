// Monta a primeira mensagem do WhatsApp em três toques (setor, faturamento, dor).
// O lead chega na conversa já dizendo quem é e o que precisa, e a Domous responde
// sabendo com quem fala. Nada é guardado no site: o texto só vai pro link do WhatsApp.
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { wa } from "@/data/site";

const setores = [
  { id: "construtora", rotulo: "Construtora ou incorporadora", frase: "uma construtora" },
  { id: "imobiliaria", rotulo: "Imobiliária ou corretor", frase: "uma imobiliária" },
  { id: "distribuidor", rotulo: "Distribuidor ou atacado", frase: "um distribuidor" },
  { id: "loja", rotulo: "Loja ou varejo", frase: "uma loja" },
  { id: "clinica", rotulo: "Clínica ou saúde", frase: "uma clínica" },
  { id: "outro", rotulo: "Outro segmento", frase: "uma empresa" },
];

const faturamentos = [
  { id: "ate300", rotulo: "Até R$ 300 mil/mês", frase: "até R$ 300 mil por mês" },
  { id: "300a1mi", rotulo: "R$ 300 mil a R$ 1 milhão/mês", frase: "entre R$ 300 mil e R$ 1 milhão por mês" },
  { id: "acima1mi", rotulo: "Acima de R$ 1 milhão/mês", frase: "acima de R$ 1 milhão por mês" },
];

const dores = [
  { id: "raiox", rotulo: "Quero um Raio-X Domous", frase: "quero um Raio-X Domous da empresa" },
  { id: "medir", rotulo: "Não sei quanto o marketing vende", frase: "não sei quanto o marketing vende" },
  { id: "lead", rotulo: "O lead chega e não vira venda", frase: "o lead chega e não vira venda" },
  { id: "dependencia", rotulo: "Dependo de indicação e balcão", frase: "dependo de indicação e do balcão" },
  { id: "comercial", rotulo: "Quero estruturar o comercial", frase: "quero estruturar o comercial" },
  { id: "meta", rotulo: "Tenho lançamento ou meta pela frente", frase: "tenho um lançamento ou uma meta pela frente" },
];

type Opcao = { id: string; rotulo: string; frase: string };

function montar(setor?: Opcao, faturamento?: Opcao, dor?: Opcao) {
  if (!setor && !faturamento && !dor) return "Oi! Quero conversar com a Domous sobre minha empresa.";
  const quem = `Sou de ${setor?.frase ?? "uma empresa"}${faturamento ? ` que fatura ${faturamento.frase}` : ""}.`;
  const peso = dor ? ` O que mais pesa hoje: ${dor.frase}.` : "";
  return `Oi! ${quem}${peso} Quero entender como a Domous pode ajudar.`;
}

const Grupo = ({
  titulo,
  opcoes,
  valor,
  aoEscolher,
}: {
  titulo: string;
  opcoes: Opcao[];
  valor?: string;
  aoEscolher: (id: string) => void;
}) => (
  <fieldset className="mb-6">
    <legend className="text-sm font-semibold text-white/90 mb-3">{titulo}</legend>
    <div className="flex flex-wrap gap-2">
      {opcoes.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={valor === o.id}
          onClick={() => aoEscolher(valor === o.id ? "" : o.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium border transition-smooth ${
            valor === o.id ? "gradient-domous text-white border-transparent" : "border-white/15 text-white/80 hover:border-primary/60"
          }`}
        >
          {o.rotulo}
        </button>
      ))}
    </div>
  </fieldset>
);

const MonteMensagem = ({
  origem,
  setorInicial,
  titulo = "Monta tua mensagem e fala com a gente",
}: {
  origem: string;
  setorInicial?: string;
  titulo?: string;
}) => {
  const [setor, setSetor] = useState(setorInicial ?? "");
  const [faturamento, setFaturamento] = useState("");
  const [dor, setDor] = useState("");

  const acha = (lista: Opcao[], id: string) => lista.find((o) => o.id === id);
  const texto = montar(acha(setores, setor), acha(faturamentos, faturamento), acha(dores, dor));

  return (
    <section id="conversa" className="section-dark purple-glow py-20 md:py-28 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="mb-4 text-white">{titulo}</h2>
            <p className="text-lg text-dark-muted mb-8">
              Três toques e a conversa já começa com o contexto da tua empresa. Sem formulário, sem cadastro.
            </p>
            <Grupo titulo="Qual é o teu negócio?" opcoes={setores} valor={setor} aoEscolher={setSetor} />
            <Grupo titulo="Quanto a empresa fatura?" opcoes={faturamentos} valor={faturamento} aoEscolher={setFaturamento} />
            <Grupo titulo="O que mais pesa hoje?" opcoes={dores} valor={dor} aoEscolher={setDor} />
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-wide text-dark-muted mb-3">Tua mensagem</p>
            <div className="card-dark rounded-2xl border p-5 mb-5">
              <p className="rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-4 py-3 text-white leading-relaxed">{texto}</p>
            </div>
            <a
              href={wa(texto, origem)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-origem={origem}
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: "click_whatsapp", cta_label: "monte-mensagem", origem, setor, faturamento, dor });
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full h-14 text-base font-semibold gradient-domous text-white shadow-domous hover:opacity-90 transition-smooth"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Abrir no WhatsApp
            </a>
            <p className="text-xs text-dark-muted mt-3 text-center">
              A mensagem abre no teu WhatsApp. Nada é enviado antes de você apertar enviar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteMensagem;
