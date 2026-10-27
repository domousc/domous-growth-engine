// Conta rápida: quanto custa cada venda que vem do anúncio hoje.
// Quem não sabe quantas vendas vêm do anúncio descobre a própria dor (falta de
// medição); quem sabe leva os números pra conversa no WhatsApp.
import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { wa } from "@/data/site";

const reais = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const numero = (s: string) => Number(s.replace(/\D/g, "")) || 0;

const Campo = ({ id, rotulo, valor, aoMudar, prefixo }: { id: string; rotulo: string; valor: string; aoMudar: (v: string) => void; prefixo?: string }) => (
  <label htmlFor={id} className="block">
    <span className="block text-sm font-semibold mb-2">{rotulo}</span>
    <span className="flex items-center rounded-xl border border-border bg-card px-4 h-12 focus-within:border-primary">
      {prefixo && <span className="text-muted-foreground mr-2">{prefixo}</span>}
      <input
        id={id}
        inputMode="numeric"
        value={valor}
        onChange={(e) => aoMudar(e.target.value.replace(/[^\d.]/g, ""))}
        className="w-full bg-transparent outline-none text-base tabular-nums"
        placeholder="0"
      />
    </span>
  </label>
);

const ContaRapida = ({ origem }: { origem: string }) => {
  const [verba, setVerba] = useState("");
  const [vendas, setVendas] = useState("");
  const [ticket, setTicket] = useState("");
  const [naoSei, setNaoSei] = useState(false);

  const v = numero(verba);
  const q = numero(vendas);
  const t = numero(ticket);
  const pronto = v > 0 && (naoSei || q > 0);
  const custoVenda = q > 0 ? v / q : 0;
  const retorno = q > 0 && t > 0 ? (q * t) / v : 0;

  let mensagem = "Oi! Fiz a conta rápida no site da Domous e quero conversar.";
  if (pronto && naoSei) {
    mensagem = `Oi! Invisto cerca de ${reais(v)} por mês em anúncio e não sei quantas vendas vêm dele. Quero entender como medir isso.`;
  } else if (pronto) {
    mensagem =
      `Oi! Fiz a conta no site: invisto ${reais(v)} por mês em anúncio e vêm ${q} vendas, um custo de ${reais(custoVenda)} por venda` +
      (retorno ? ` e retorno de ${retorno.toFixed(1).replace(".", ",")}x` : "") +
      `. Quero entender se dá pra melhorar.`;
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 max-w-6xl">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-3">
            <Calculator className="w-4 h-4" aria-hidden /> Conta rápida
          </p>
          <h2 className="text-2xl md:text-3xl mb-4">Quanto custa cada venda que o teu anúncio traz?</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            É a pergunta que mais importa e a que menos empresa sabe responder. Coloca os números do último mês.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Campo id="cr-verba" rotulo="Investimento em anúncio no mês" prefixo="R$" valor={verba} aoMudar={setVerba} />
            <Campo id="cr-ticket" rotulo="Ticket médio (opcional)" prefixo="R$" valor={ticket} aoMudar={setTicket} />
            <div className="sm:col-span-2">
              {!naoSei && <Campo id="cr-vendas" rotulo="Vendas que vieram do anúncio no mês" valor={vendas} aoMudar={setVendas} />}
              <label className="mt-3 flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={naoSei} onChange={(e) => setNaoSei(e.target.checked)} className="w-4 h-4 accent-[hsl(var(--primary))]" />
                Não sei quantas vendas vêm do anúncio
              </label>
            </div>
          </div>
        </div>

        <div className="section-dark rounded-3xl p-6 md:p-8 flex flex-col justify-between" aria-live="polite">
          {!pronto && (
            <p className="text-dark-muted text-lg">Preenche o investimento e as vendas pra ver o custo de cada venda.</p>
          )}
          {pronto && naoSei && (
            <div>
              <p className="text-white text-xl font-bold mb-3">Esse é o primeiro problema a resolver.</p>
              <p className="text-dark-muted leading-relaxed">
                Sem saber quantas vendas vêm do anúncio, não dá pra saber se os {reais(v)} por mês se pagam. Medir isso (conversa real,
                orçamento e venda por campanha) é a primeira coisa que a Domous organiza.
              </p>
            </div>
          )}
          {pronto && !naoSei && (
            <ul className="grid grid-cols-2 gap-4">
              <li className="card-dark rounded-xl border p-4">
                <p className="text-xs text-dark-muted mb-1">Custo por venda</p>
                <p className="text-2xl font-bold text-white tabular-nums">{reais(custoVenda)}</p>
              </li>
              <li className="card-dark rounded-xl border p-4">
                <p className="text-xs text-dark-muted mb-1">Retorno por real investido</p>
                <p className="text-2xl font-bold text-white tabular-nums">{retorno ? `${retorno.toFixed(1).replace(".", ",")}x` : "Informe o ticket"}</p>
              </li>
              <li className="col-span-2 text-dark-muted text-sm leading-relaxed">
                Esse número só vale se as vendas forem contadas certo. Em muita empresa, parte da venda do anúncio fecha no balcão ou
                no WhatsApp e não entra na conta.
              </li>
            </ul>
          )}
          <a
            href={wa(mensagem, origem)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-origem={origem}
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: "click_whatsapp", cta_label: "conta-rapida", origem, nao_sei: naoSei });
            }}
            className="mt-8 flex items-center justify-center gap-2 rounded-full h-12 font-semibold gradient-domous text-white shadow-domous hover:opacity-90 transition-smooth"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            {pronto ? "Levar esses números pra conversa" : "Falar com a Domous"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContaRapida;
