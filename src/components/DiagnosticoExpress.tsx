import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles } from "lucide-react";

const DiagnosticoExpress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [objetivo, setObjetivo] = useState("");
  const [ticket, setTicket] = useState("");
  const [usaCRM, setUsaCRM] = useState("");
  const [showRecomendacao, setShowRecomendacao] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'dxp_open' });
  };

  const handleSubmit = () => {
    if (!objetivo || !ticket || !usaCRM) return;
    
    setShowRecomendacao(true);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'dxp_submit',
      dxp_objetivo: objetivo,
      dxp_ticket: ticket,
      dxp_crm: usaCRM
    });
  };

  const getRecomendacao = () => {
    if (objetivo === "leads" && usaCRM === "nao") {
      return "Recomendamos começar com CRM WhatsApp + IA para não perder leads, depois escalar com Tráfego Pago.";
    } else if (objetivo === "vender-online" && ticket === "0-100") {
      return "Para tickets baixos, foque em volume: Tráfego Pago + Loja Tray otimizada + automações de remarketing.";
    } else if (objetivo === "aumentar-ticket" && usaCRM === "sim") {
      return "Com CRM ativo, trabalhe upsell/cross-sell via funis conversacionais e ofertas direcionadas.";
    } else {
      return "Análise completa do seu funil + estruturação de camadas (Social, LP, CRM, Mídia) é o melhor caminho.";
    }
  };

  const getWhatsAppMessage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    
    return encodeURIComponent(
      `Quero diagnóstico Domous — objetivo:${objetivo} | ticket:${ticket} | crm:${usaCRM} | utm:${utmSource}/${utmCampaign}/${utmTerm}`
    );
  };

  if (!isOpen) {
    return (
      <Button
        onClick={handleOpen}
        className="gradient-domous text-white hover:opacity-90 shadow-domous"
        size="lg"
      >
        <Sparkles className="mr-2 w-5 h-5" />
        Diagnóstico Express (30s)
      </Button>
    );
  }

  return (
    <Card className="p-6 border-2 border-primary/20 shadow-domous">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">Diagnóstico Express</h3>
      </div>

      {!showRecomendacao ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Objetivo principal</label>
            <Select value={objetivo} onValueChange={setObjetivo}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="leads">Gerar leads</SelectItem>
                <SelectItem value="vender-online">Vender online</SelectItem>
                <SelectItem value="aumentar-ticket">Aumentar ticket</SelectItem>
                <SelectItem value="outro">Outra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Ticket médio</label>
            <Select value={ticket} onValueChange={setTicket}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">R$ 0 - 100</SelectItem>
                <SelectItem value="100-500">R$ 100 - 500</SelectItem>
                <SelectItem value="500-2k">R$ 500 - 2k</SelectItem>
                <SelectItem value="2k+">Acima de R$ 2k</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Usa CRM/WhatsApp?</label>
            <Select value={usaCRM} onValueChange={setUsaCRM}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleSubmit}
            disabled={!objetivo || !ticket || !usaCRM}
            className="w-full gradient-domous text-white hover:opacity-90"
          >
            Ver recomendação
          </Button>
        </div>
      ) : (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
            <p className="text-sm font-semibold text-primary mb-2">✨ Recomendação de caminho</p>
            <p className="text-sm">{getRecomendacao()}</p>
          </div>

          <Button 
            className="w-full gradient-domous text-white hover:opacity-90"
            onClick={() => window.open(`https://wa.me/5583999999999?text=${getWhatsAppMessage()}`, '_blank')}
          >
            <MessageCircle className="mr-2 w-4 h-4" />
            Continuar no WhatsApp
          </Button>

          <button
            onClick={() => {
              setShowRecomendacao(false);
              setObjetivo("");
              setTicket("");
              setUsaCRM("");
            }}
            className="w-full text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            Refazer diagnóstico
          </button>
        </div>
      )}
    </Card>
  );
};

export default DiagnosticoExpress;
