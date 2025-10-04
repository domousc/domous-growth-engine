import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";
import { useCTAData } from "@/hooks/useCTAData";

const DiagnosticoExpress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [objetivo, setObjetivo] = useState("");
  const [ticket, setTicket] = useState("");
  const [usaCRM, setUsaCRM] = useState("");
  const [showRecomendacao, setShowRecomendacao] = useState(false);
  const { setDXP } = useCTAData();

  const handleOpen = () => {
    setIsOpen(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'dxp_open' });
  };

  const handleSubmit = () => {
    if (!objetivo || !ticket || !usaCRM) return;
    
    const prioridade = getPrioridade().area;
    
    // Update global CTA data
    setDXP(objetivo, ticket, usaCRM, prioridade);
    
    setShowRecomendacao(true);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'dxp_submit',
      dxp_objetivo: objetivo,
      dxp_ticket: ticket,
      dxp_crm: usaCRM,
      dxp_prioridade: prioridade
    });
  };

  const getPrioridade = (): { area: string; anchor: string; texto: string } => {
    if (objetivo === "leads" && usaCRM === "nao") {
      return { area: "CRM", anchor: "#crm", texto: "Começar com CRM WhatsApp + IA para não perder leads" };
    } else if (objetivo === "vender-online" && ticket === "0-100") {
      return { area: "LP/Loja", anchor: "#servicos", texto: "Loja Tray otimizada + Tráfego Pago para volume" };
    } else if (objetivo === "aumentar-ticket" && usaCRM === "sim") {
      return { area: "Criativo", anchor: "#servicos", texto: "Upsell/cross-sell via funis conversacionais" };
    } else {
      return { area: "Funil completo", anchor: "#funil", texto: "Estruturação de todas as camadas do funil" };
    }
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
        <h3 className="text-lg font-bold">Diagnóstico Express (3 perguntas)</h3>
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
            <p className="text-sm font-semibold text-primary mb-2">🎯 Prioridade: {getPrioridade().area}</p>
            <p className="text-sm">{getPrioridade().texto}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/5"
              onClick={() => window.location.href = getPrioridade().anchor}
            >
              Ver seção recomendada
            </Button>

            <CTAButton 
              type="whatsapp"
              label="Continuar no WhatsApp"
              className="w-full"
            />
          </div>

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
