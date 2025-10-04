import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, MessageCircle, TrendingUp, AlertCircle } from "lucide-react";
import CTAButton from "./CTAButton";
import { useCTAData } from "@/hooks/useCTAData";

const SimuladorCACROAS = () => {
  const [tipoFunil, setTipoFunil] = useState<"loja" | "leads">("leads");
  const [cpc, setCpc] = useState([1.5]);
  const [ticketMedio, setTicketMedio] = useState([300]);
  const [cvrLP, setCvrLP] = useState([2]);
  const [respostaWhats, setRespostaWhats] = useState([70]);
  const [fechamento, setFechamento] = useState([20]);
  const { setSimulator } = useCTAData();

  const calcularMetricas = () => {
    const ticket = ticketMedio[0];
    const taxaConversaoLP = cvrLP[0] / 100;
    const cpcValor = cpc[0];

    if (tipoFunil === "loja") {
      // Loja online: ROAS = (AOV × CVR_compra) / CPC
      const roasEstimado = cpcValor > 0 ? ((ticket * taxaConversaoLP) / cpcValor).toFixed(2) : "0";
      const cacEstimado = taxaConversaoLP > 0 ? Math.floor(cpcValor / taxaConversaoLP) : 0;
      const receitaPorClique = ticket * taxaConversaoLP;
      
      // Viabilidade: ROAS >= 3
      const viavel = parseFloat(roasEstimado) >= 3;
      const cpcIdeal = taxaConversaoLP > 0 ? ((ticket * taxaConversaoLP) / 3).toFixed(2) : "0";
      const cvrIdeal = cpcValor > 0 ? ((3 * cpcValor / ticket) * 100).toFixed(1) : "0";

      return { 
        cacEstimado, 
        roasEstimado, 
        receitaPorClique: receitaPorClique.toFixed(2),
        viavel,
        cpcIdeal,
        cvrIdeal,
        metricaPrincipal: "ROAS"
      };
    } else {
      // Leads via Whats/CRM
      const taxaResposta = respostaWhats[0] / 100;
      const taxaFechamento = fechamento[0] / 100;
      const cadeia = taxaConversaoLP * taxaResposta * taxaFechamento;
      
      const cacEstimado = cadeia > 0 ? Math.floor(cpcValor / cadeia) : 0;
      const roasEstimado = cpcValor > 0 ? ((ticket * cadeia) / cpcValor).toFixed(2) : "0";
      const receitaPorClique = ticket * cadeia;
      
      // Viabilidade: CAC <= 30% do ticket (regra comum)
      const cacMeta = ticket * 0.3;
      const viavel = cacEstimado <= cacMeta && cacEstimado > 0;
      const cpcIdeal = cadeia > 0 ? (cacMeta * cadeia).toFixed(2) : "0";
      const cadeiaIdeal = cpcValor > 0 ? ((cpcValor / cacMeta) * 100).toFixed(1) : "0";

      return { 
        cacEstimado, 
        roasEstimado, 
        receitaPorClique: receitaPorClique.toFixed(2),
        viavel,
        cpcIdeal,
        cadeiaIdeal,
        metricaPrincipal: "CAC"
      };
    }
  };

  const metricas = calcularMetricas();

  // Update global store when values change
  useEffect(() => {
    const estimate = metricas.metricaPrincipal === "CAC" 
      ? `CAC~R$${metricas.cacEstimado} / ROAS~${metricas.roasEstimado}x`
      : `ROAS~${metricas.roasEstimado}x / CAC~R$${metricas.cacEstimado}`;
    setSimulator(estimate);
  }, [metricas.cacEstimado, metricas.roasEstimado, metricas.metricaPrincipal, setSimulator]);

  const handleSliderChange = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'sim_change' });
  };

  const handleSubmit = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'sim_submit',
      sim_tipo_funil: tipoFunil,
      sim_cpc: cpc[0],
      sim_ticket: ticketMedio[0],
      sim_cvr_lp: cvrLP[0],
      sim_resposta: tipoFunil === "leads" ? respostaWhats[0] : null,
      sim_fechamento: tipoFunil === "leads" ? fechamento[0] : null,
      sim_cac: metricas.cacEstimado,
      sim_roas: metricas.roasEstimado
    });
  };

  return (
    <Card className="p-6 md:p-8 border-2 border-primary/20 shadow-domous">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Simulador CAC/ROAS</h3>
      </div>

      {/* Toggle Tipo de Funil */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Tipo de funil</label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={tipoFunil === "loja" ? "default" : "outline"}
            onClick={() => setTipoFunil("loja")}
            className="w-full"
          >
            Loja online (checkout)
          </Button>
          <Button
            variant={tipoFunil === "leads" ? "default" : "outline"}
            onClick={() => setTipoFunil("leads")}
            className="w-full"
          >
            Leads via Whats/CRM
          </Button>
        </div>
      </div>

      {/* Texto guia contextual */}
      <div className="bg-accent/10 rounded-lg p-3 mb-6">
        <p className="text-sm text-muted-foreground">
          {tipoFunil === "leads" 
            ? "💡 Use CAC como métrica principal. ROAS é secundário, depende de contrato/LTV."
            : "💡 Use ROAS como principal; CAC opcional."}
        </p>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        * Estimativas educativas baseadas em médias de mercado. Resultados reais dependem de múltiplos fatores.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">CPC médio</label>
            <span className="text-sm font-bold text-primary">R$ {cpc[0].toFixed(2)}</span>
          </div>
          <Slider
            value={cpc}
            onValueChange={(v) => { setCpc(v); handleSliderChange(); }}
            min={0.5}
            max={10}
            step={0.1}
            className="mb-1"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">
              {tipoFunil === "leads" ? "Receita média por venda (ticket/contrato)" : "Ticket médio (AOV)"}
            </label>
            <span className="text-sm font-bold text-primary">R$ {ticketMedio[0]}</span>
          </div>
          <Slider
            value={ticketMedio}
            onValueChange={(v) => { setTicketMedio(v); handleSliderChange(); }}
            min={50}
            max={5000}
            step={50}
            className="mb-1"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">
              {tipoFunil === "loja" ? "CVR Compra (%)" : "CVR LP (%)"}
            </label>
            <span className="text-sm font-bold text-primary">{cvrLP[0]}%</span>
          </div>
          <Slider
            value={cvrLP}
            onValueChange={(v) => { setCvrLP(v); handleSliderChange(); }}
            min={0.5}
            max={10}
            step={0.5}
            className="mb-1"
          />
        </div>

        {tipoFunil === "leads" && (
          <>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">% Resposta Whats</label>
                <span className="text-sm font-bold text-primary">{respostaWhats[0]}%</span>
              </div>
              <Slider
                value={respostaWhats}
                onValueChange={(v) => { setRespostaWhats(v); handleSliderChange(); }}
                min={10}
                max={100}
                step={5}
                className="mb-1"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">% Fechamento</label>
                <span className="text-sm font-bold text-primary">{fechamento[0]}%</span>
              </div>
              <Slider
                value={fechamento}
                onValueChange={(v) => { setFechamento(v); handleSliderChange(); }}
                min={5}
                max={50}
                step={5}
                className="mb-1"
              />
            </div>
          </>
        )}
      </div>

      {/* Badge de Viabilidade */}
      <div className="mb-6 flex items-center gap-2">
        {metricas.viavel ? (
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">
            <TrendingUp className="w-3 h-3 mr-1" />
            Viável
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30">
            <AlertCircle className="w-3 h-3 mr-1" />
            Ajustes necessários
          </Badge>
        )}
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`rounded-xl p-4 text-center ${metricas.metricaPrincipal === "CAC" ? "bg-primary/10 border-2 border-primary/30" : "bg-primary/5"}`}>
          <p className="text-xs text-muted-foreground mb-1">
            CAC {metricas.metricaPrincipal === "CAC" && "(principal)"}
          </p>
          <p className="text-2xl font-bold text-primary">R$ {metricas.cacEstimado}</p>
        </div>
        <div className={`rounded-xl p-4 text-center ${metricas.metricaPrincipal === "ROAS" ? "bg-primary/10 border-2 border-primary/30" : "bg-primary/5"}`}>
          <p className="text-xs text-muted-foreground mb-1">
            ROAS {metricas.metricaPrincipal === "ROAS" && "(principal)"}
          </p>
          <p className="text-2xl font-bold text-primary">{metricas.roasEstimado}x</p>
        </div>
      </div>

      {/* Recomendações para bater meta */}
      {!metricas.viavel && (
        <div className="bg-accent/10 rounded-xl p-4 mb-6 border border-accent/20">
          <p className="text-sm font-semibold text-accent mb-2">
            {tipoFunil === "loja" ? "Para bater ROAS 3, você precisa de:" : "Para reduzir CAC para 30% do ticket:"}
          </p>
          <ul className="text-sm space-y-1">
            <li>• CPC ≤ R$ {metricas.cpcIdeal}</li>
            {tipoFunil === "loja" ? (
              <li>• CVR Compra ≥ {metricas.cvrIdeal}%</li>
            ) : (
              <li>• Taxa combinada (CVR × Resp × Fech) ≥ {metricas.cadeiaIdeal}%</li>
            )}
          </ul>
        </div>
      )}

      <div className="bg-accent/10 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-accent mb-2">💡 O que testar primeiro</p>
        <ul className="text-sm space-y-1">
          {cvrLP[0] < 2 && <li>• Melhorar CVR da {tipoFunil === "loja" ? "Loja" : "LP"} (copy, provas, UX)</li>}
          {tipoFunil === "leads" && respostaWhats[0] < 70 && <li>• Otimizar tempo de resposta no WhatsApp (&lt;5min)</li>}
          {tipoFunil === "leads" && fechamento[0] < 15 && <li>• Otimizar follow-up e qualificação de leads</li>}
          {ticketMedio[0] < 200 && <li>• Considerar upsell/cross-sell para aumentar AOV</li>}
          {cpc[0] > 3 && <li>• Refinar segmentação e criativos para reduzir CPC</li>}
        </ul>
      </div>

      <CTAButton 
        type="whatsapp"
        label="Receber plano no WhatsApp"
        onClick={handleSubmit}
        size="lg"
        className="w-full"
      />
    </Card>
  );
};

export default SimuladorCACROAS;
