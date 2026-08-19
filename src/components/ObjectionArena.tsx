import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, Zap, Target } from "lucide-react";

type Objection = "agencia" | "orcamento" | "equipe" | "rapido" | "mercado";

const ObjectionArena = () => {
  const [selectedObjection, setSelectedObjection] = useState<Objection | null>(null);

  const objections = {
    agencia: {
      label: "Já tenho agência",
      icon: Shield,
      resposta: "Ótimo! Potencializamos agências com CRM/IA, Tray e otimização de funil, áreas que 90% das agências não dominam.",
      evidencia: "Case: Agência + DOMOUS = CAC –34% e ROAS +2.8x mantendo mesma verba.",
      cta: "Ver como complementamos",
      anchor: "#servicos"
    },
    orcamento: {
      label: "Pouco orçamento",
      icon: TrendingUp,
      resposta: "Começamos com diagnóstico zero-custo. Priorizamos ações de maior ROI: CRM/IA antes de mídia, orgânico + testes antes de escalar.",
      evidencia: "Clientes iniciam com R$ 2k/mês e escalam conforme resultados provados.",
      cta: "Fazer diagnóstico grátis",
      anchor: "#contato"
    },
    equipe: {
      label: "Sem equipe",
      icon: Users,
      resposta: "Assumimos operação completa: criação, mídia, CRM, análise. Você só aprova e colhe resultados. Zero dependência de equipe interna.",
      evidencia: "87% dos clientes não têm equipe de marketing. Nós somos a equipe deles.",
      cta: "Ver nosso modelo",
      anchor: "#como-trabalhamos"
    },
    rapido: {
      label: "Quero resultado rápido",
      icon: Zap,
      resposta: "Setup em 0–14 dias. Primeiros leads/vendas em 15–30 dias. Otimização contínua 31–60 dias. Transparência total nos marcos semanais.",
      evidencia: "Média: primeiras vendas em 18 dias (cases de saúde e e-commerce).",
      cta: "Ver cronograma",
      anchor: "#primeiros-30-dias"
    },
    mercado: {
      label: "Meu mercado é diferente",
      icon: Target,
      resposta: "Atendemos 12+ nichos (saúde, moda, B2B, food, serviços). O Sistema Domous adapta-se ao seu funil, ticket e jornada específicos.",
      evidencia: "Cases em clínica (CAC R$ 42), e-commerce (ROAS 8.2x), consultoria B2B (pipeline +340%).",
      cta: "Ver cases do meu setor",
      anchor: "#cases"
    }
  };

  const handleClick = (objection: Objection) => {
    setSelectedObjection(selectedObjection === objection ? null : objection);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'objection_click',
      objection_type: objection
    });
  };

  return (
    <section id="objections" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Fale a verdade: o que te trava hoje?</h2>
            <p className="text-xl text-muted-foreground">
              Selecione a objeção que mais faz sentido para você
            </p>
          </div>

          {/* Chips de Objeções */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {(Object.keys(objections) as Objection[]).map((key) => {
              const Icon = objections[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => handleClick(key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-smooth ${
                    selectedObjection === key
                      ? "gradient-domous text-white shadow-domous"
                      : "bg-card border-2 border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {objections[key].label}
                </button>
              );
            })}
          </div>

          {/* Resposta */}
          {selectedObjection && (
            <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/20 shadow-domous animate-fade-in">
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <p className="font-semibold text-primary mb-2">💡 Resposta</p>
                  <p className="text-sm">{objections[selectedObjection].resposta}</p>
                </div>

                <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                  <p className="font-semibold text-accent mb-2">📊 Evidência</p>
                  <p className="text-sm">{objections[selectedObjection].evidencia}</p>
                </div>

                <Button
                  className="w-full gradient-domous text-white hover:opacity-90 shadow-domous"
                  size="lg"
                  onClick={() => window.location.href = objections[selectedObjection].anchor}
                >
                  {objections[selectedObjection].cta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ObjectionArena;
