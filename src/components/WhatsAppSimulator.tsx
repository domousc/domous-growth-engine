import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles } from "lucide-react";

type Scenario = "orcamento" | "duvida" | "reagendar" | "pos-venda";

const WhatsAppSimulator = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>("orcamento");

  const scenarios = {
    orcamento: {
      label: "Pedido de orçamento",
      conversation: [
        { role: "lead", text: "Oi, quero um orçamento para tratamento facial" },
        { role: "ia", text: "Oi! 😊 Perfeito! Qual resultado você busca? Rejuvenescimento, manchas ou harmonização?" },
        { role: "next", text: "→ IA qualifica, envia cardápio de preços e agenda consulta" }
      ]
    },
    duvida: {
      label: "Dúvida sobre produto",
      conversation: [
        { role: "lead", text: "Esse vestido tem em tamanho G?" },
        { role: "ia", text: "Sim! Temos em G e GG. Qual cor você prefere? Mando fotos reais 📸" },
        { role: "next", text: "→ IA envia fotos, tira dúvidas e fecha venda" }
      ]
    },
    reagendar: {
      label: "Reagendar consulta",
      conversation: [
        { role: "lead", text: "Preciso remarcar minha consulta de amanhã" },
        { role: "ia", text: "Sem problema! Tenho horários livres na quinta 14h ou sexta 10h. Qual prefere?" },
        { role: "next", text: "→ IA reagenda, confirma no Calendly e atualiza CRM" }
      ]
    },
    "pos-venda": {
      label: "Pós-venda",
      conversation: [
        { role: "lead", text: "Comprei ontem, quando chega?" },
        { role: "ia", text: "Seu pedido #1234 sai hoje! Chega em 3-5 dias. Quer rastreio ou tem outra dúvida? 🚚" },
        { role: "next", text: "→ IA oferece upsell e coleta feedback pós-entrega" }
      ]
    }
  };

  const handleOpen = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'wa_sim_open',
      wa_sim_scenario: selectedScenario
    });
  };

  const handleSend = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    const message = encodeURIComponent(
      `Quero esse fluxo de IA — cenário:${scenarios[selectedScenario].label} | utm:${utmSource}/${utmCampaign}/${utmTerm}`
    );
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'wa_sim_send',
      wa_sim_scenario: selectedScenario
    });
    window.dataLayer.push({ event: 'click_whatsapp' });
    
    window.open(`https://wa.me/5583981195186?text=${message}`, '_blank');
  };

  return (
    <Card className="p-6 md:p-8 border-2 border-primary/20 shadow-domous">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Simulador de Conversas com IA</h3>
      </div>

      <p className="text-muted-foreground mb-6">
        Veja como a IA responde seus clientes 24/7, qualifica leads e aumenta conversão
      </p>

      {/* Cenários */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {(Object.keys(scenarios) as Scenario[]).map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedScenario(key);
              handleOpen();
            }}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-smooth ${
              selectedScenario === key
                ? "gradient-domous text-white shadow-domous"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {scenarios[key].label}
          </button>
        ))}
      </div>

      {/* Conversa */}
      <div className="bg-secondary/30 rounded-2xl p-6 mb-6 space-y-4">
        {scenarios[selectedScenario].conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "lead" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "lead"
                  ? "bg-primary text-primary-foreground"
                  : msg.role === "ia"
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground border-2 border-dashed border-primary/30"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-accent/10 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-accent mb-2">✨ O que a IA faz automaticamente</p>
        <ul className="text-sm space-y-1">
          <li>• Responde em segundos, 24/7</li>
          <li>• Qualifica e roteia para humano quando necessário</li>
          <li>• Integra com Calendly, CRM e seu sistema</li>
          <li>• Aprende com suas respostas e melhora continuamente</li>
        </ul>
      </div>

      <Button 
        onClick={handleSend}
        className="w-full gradient-domous text-white hover:opacity-90 shadow-domous"
        size="lg"
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        Mandar esse fluxo no meu WhatsApp
      </Button>
    </Card>
  );
};

export default WhatsAppSimulator;
