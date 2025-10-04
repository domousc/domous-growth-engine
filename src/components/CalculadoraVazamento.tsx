import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MessageCircle, TrendingUp } from "lucide-react";

const CalculadoraVazamento = () => {
  const [trafego, setTrafego] = useState([10000]);
  const [ctr, setCtr] = useState([2]);
  const [cvrLP, setCvrLP] = useState([2]);
  const [respostaWhats, setRespostaWhats] = useState([30]);
  const [fechamento, setFechamento] = useState([20]);
  const [aov, setAov] = useState([300]);

  const calcular = () => {
    const cliques = Math.floor(trafego[0] * (ctr[0] / 100));
    const leads = Math.floor(cliques * (cvrLP[0] / 100));
    const conversas = Math.floor(leads * (respostaWhats[0] / 100));
    const vendas = Math.floor(conversas * (fechamento[0] / 100));
    const receita = vendas * aov[0];
    const cac = vendas > 0 ? Math.floor((trafego[0] * 3) / vendas) : 0; // Estimando custo de mídia
    const roas = cac > 0 ? (aov[0] / cac).toFixed(1) : "0";

    // Detectar maior vazamento
    const taxas = [
      { etapa: "CTR (Anúncio → Clique)", valor: ctr[0], ideal: 3 },
      { etapa: "CVR LP/Loja", valor: cvrLP[0], ideal: 3 },
      { etapa: "% Resposta WhatsApp", valor: respostaWhats[0], ideal: 50 },
      { etapa: "% Fechamento", valor: fechamento[0], ideal: 25 },
    ];

    const vazamento = taxas.reduce((prev, curr) => {
      const gapPrev = prev.ideal - prev.valor;
      const gapCurr = curr.ideal - curr.valor;
      return gapCurr > gapPrev ? curr : prev;
    });

    return { cliques, leads, conversas, vendas, receita, cac, roas, vazamento };
  };

  const { cliques, leads, conversas, vendas, receita, cac, roas, vazamento } = calcular();

  const handleSliderChange = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'leak_change' });
  };

  const handleSubmit = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    const message = encodeURIComponent(
      `Quero corrigir vazamento — etapa:${vazamento.etapa} | receita estimada:R$${receita} | utm:${utmSource}/${utmCampaign}/${utmTerm}`
    );
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'leak_submit',
      leak_maior_vazamento: vazamento.etapa,
      leak_receita_estimada: receita
    });
    window.dataLayer.push({ event: 'click_whatsapp' });
    
    window.open(`https://wa.me/5583981195186?text=${message}`, '_blank');
  };

  const getAnchor = () => {
    if (vazamento.etapa.includes("CTR")) return "#servicos";
    if (vazamento.etapa.includes("CVR LP")) return "#servicos";
    if (vazamento.etapa.includes("WhatsApp")) return "#crm";
    return "#funil";
  };

  return (
    <section id="leak" className="py-28 md:py-32 lg:py-40 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(hsl(280 85% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(280 85% 55% / 0.1) 1px, transparent 1px)',
          backgroundSize: '12px 12px'
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Descubra onde seu dinheiro está vazando</h2>
            <p className="text-xl text-muted-foreground" style={{ maxWidth: '65ch', margin: '0 auto' }}>
              Identifique o maior gargalo no seu funil e corrija isso primeiro
            </p>
          </div>

          <Card className="p-6 md:p-8 border-2 border-primary/20 shadow-domous rounded-[20px]">
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Tráfego/mês (impressões)</label>
                  <span className="text-sm font-bold text-primary">{trafego[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={trafego}
                  onValueChange={(v) => { setTrafego(v); handleSliderChange(); }}
                  min={1000}
                  max={100000}
                  step={1000}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">CTR - Taxa de clique (%)</label>
                  <span className="text-sm font-bold text-primary">{ctr[0]}%</span>
                </div>
                <Slider
                  value={ctr}
                  onValueChange={(v) => { setCtr(v); handleSliderChange(); }}
                  min={0.5}
                  max={10}
                  step={0.5}
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
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">% Resposta WhatsApp</label>
                  <span className="text-sm font-bold text-primary">{respostaWhats[0]}%</span>
                </div>
                <Slider
                  value={respostaWhats}
                  onValueChange={(v) => { setRespostaWhats(v); handleSliderChange(); }}
                  min={10}
                  max={80}
                  step={5}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">% Fechamento (conversa → venda)</label>
                  <span className="text-sm font-bold text-primary">{fechamento[0]}%</span>
                </div>
                <Slider
                  value={fechamento}
                  onValueChange={(v) => { setFechamento(v); handleSliderChange(); }}
                  min={5}
                  max={50}
                  step={5}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Ticket médio (AOV)</label>
                  <span className="text-sm font-bold text-primary">R$ {aov[0]}</span>
                </div>
                <Slider
                  value={aov}
                  onValueChange={(v) => { setAov(v); handleSliderChange(); }}
                  min={50}
                  max={2000}
                  step={50}
                />
              </div>
            </div>

            {/* Funil Visual */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Impressões</span>
                <span className="font-bold">{trafego[0].toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>→ Cliques ({ctr[0]}%)</span>
                <span className="font-bold">{cliques}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>→ Leads ({cvrLP[0]}%)</span>
                <span className="font-bold">{leads}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>→ Conversas ({respostaWhats[0]}%)</span>
                <span className="font-bold">{conversas}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>→ Vendas ({fechamento[0]}%)</span>
                <span className="font-bold text-primary text-lg">{vendas}</span>
              </div>
            </div>

            {/* Resultados */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/5 rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Receita estimada</p>
                <p className="text-2xl font-bold text-primary">R$ {receita.toLocaleString()}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">CAC teórico</p>
                <p className="text-2xl font-bold text-primary">R$ {cac}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 text-center col-span-2 md:col-span-1">
                <p className="text-xs text-muted-foreground mb-1">ROAS teórico</p>
                <p className="text-2xl font-bold text-primary">{roas}x</p>
              </div>
            </div>

            {/* Maior Vazamento */}
            <div className="bg-destructive/5 rounded-xl p-4 mb-6 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <p className="font-semibold text-destructive">Maior vazamento</p>
              </div>
              <p className="text-sm mb-1">
                <strong>{vazamento.etapa}</strong> está em {vazamento.valor}% (ideal: {vazamento.ideal}%+). Corrija isso primeiro.
              </p>
              <p className="text-xs text-muted-foreground">
                Corrigir essa etapa pode aumentar drasticamente sua receita
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/5"
                onClick={() => window.location.href = getAnchor()}
              >
                <TrendingUp className="mr-2 w-4 h-4" />
                Corrigir essa etapa agora
              </Button>
              
              <Button 
                onClick={handleSubmit}
                className="flex-1 gradient-domous text-white hover:opacity-90 shadow-domous"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Receber plano no WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculadoraVazamento;
