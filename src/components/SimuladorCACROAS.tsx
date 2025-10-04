import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, MessageCircle } from "lucide-react";

const SimuladorCACROAS = () => {
  const [orcamento, setOrcamento] = useState([5000]);
  const [ticketMedio, setTicketMedio] = useState([300]);
  const [cvrLP, setCvrLP] = useState([2]);
  const [cvrVenda, setCvrVenda] = useState([20]);

  const calcularMetricas = () => {
    const orcamentoMensal = orcamento[0];
    const ticket = ticketMedio[0];
    const taxaConversaoLP = cvrLP[0] / 100;
    const taxaConversaoVenda = cvrVenda[0] / 100;

    // Estimativas educativas (não promessas)
    const clicksEstimados = Math.floor(orcamentoMensal / 3); // CPM médio R$ 3
    const leadsEstimados = Math.floor(clicksEstimados * taxaConversaoLP);
    const vendasEstimadas = Math.floor(leadsEstimados * taxaConversaoVenda);
    const cacEstimado = vendasEstimadas > 0 ? Math.floor(orcamentoMensal / vendasEstimadas) : 0;
    const receitaEstimada = vendasEstimadas * ticket;
    const roasEstimado = orcamentoMensal > 0 ? (receitaEstimada / orcamentoMensal).toFixed(1) : "0";

    return { cacEstimado, roasEstimado, vendasEstimadas, leadsEstimados };
  };

  const { cacEstimado, roasEstimado, vendasEstimadas, leadsEstimados } = calcularMetricas();

  const handleSliderChange = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'sim_change' });
  };

  const handleSubmit = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = encodeURIComponent(
      `Quero plano Domous — Orçamento: R$ ${orcamento[0]} | Ticket: R$ ${ticketMedio[0]} | utm:${urlParams.get("utm_source")}/${urlParams.get("utm_campaign")}`
    );
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'sim_submit',
      sim_orcamento: orcamento[0],
      sim_ticket: ticketMedio[0],
      sim_cvr_lp: cvrLP[0],
      sim_cvr_venda: cvrVenda[0]
    });
    
    window.open(`https://wa.me/5583999999999?text=${message}`, '_blank');
  };

  return (
    <Card className="p-6 md:p-8 border-2 border-primary/20 shadow-domous">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Simulador CAC/ROAS</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        * Estimativas educativas baseadas em médias de mercado. Resultados reais dependem de múltiplos fatores.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Orçamento mensal</label>
            <span className="text-sm font-bold text-primary">R$ {orcamento[0].toLocaleString()}</span>
          </div>
          <Slider
            value={orcamento}
            onValueChange={(v) => { setOrcamento(v); handleSliderChange(); }}
            min={1000}
            max={50000}
            step={1000}
            className="mb-1"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Ticket médio</label>
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
            <label className="text-sm font-medium">CVR LP/Loja (%)</label>
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

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">% Contato → Venda</label>
            <span className="text-sm font-bold text-primary">{cvrVenda[0]}%</span>
          </div>
          <Slider
            value={cvrVenda}
            onValueChange={(v) => { setCvrVenda(v); handleSliderChange(); }}
            min={5}
            max={50}
            step={5}
            className="mb-1"
          />
        </div>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Leads estimados</p>
          <p className="text-2xl font-bold text-primary">{leadsEstimados}</p>
        </div>
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Vendas estimadas</p>
          <p className="text-2xl font-bold text-primary">{vendasEstimadas}</p>
        </div>
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">CAC estimado</p>
          <p className="text-2xl font-bold text-primary">R$ {cacEstimado}</p>
        </div>
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">ROAS teórico</p>
          <p className="text-2xl font-bold text-primary">{roasEstimado}x</p>
        </div>
      </div>

      <div className="bg-accent/10 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-accent mb-2">💡 O que testar primeiro</p>
        <ul className="text-sm space-y-1">
          {cvrLP[0] < 2 && <li>• Melhorar CVR da LP/Loja (copy, provas, UX)</li>}
          {cvrVenda[0] < 15 && <li>• Otimizar follow-up e qualificação de leads</li>}
          {ticketMedio[0] < 200 && <li>• Considerar upsell/cross-sell para aumentar AOV</li>}
          {orcamento[0] < 3000 && <li>• Foco em orgânico + CRM antes de escalar mídia</li>}
        </ul>
      </div>

      <Button 
        onClick={handleSubmit}
        className="w-full gradient-domous text-white hover:opacity-90 shadow-domous"
        size="lg"
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        Receber plano no WhatsApp
      </Button>
    </Card>
  );
};

export default SimuladorCACROAS;
