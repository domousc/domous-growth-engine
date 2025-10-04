import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Target, Zap } from "lucide-react";
import CTAMicrocopy from "./CTAMicrocopy";

const DecisaoSection = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Diagnóstico (5 min, WhatsApp)",
      descricao: "Conversamos sobre sua oferta, ticket, meta e principais gargalos. Rápido e direto.",
      icon: FileText,
      tempo: "5 minutos",
    },
    {
      numero: 2,
      titulo: "Escopo recomendado (doc curto)",
      descricao: "Quais camadas ativar, métricas-alvo (CAC, AOV, LTV, payback) e marcos semanais. Sinais esperados em 2–4 semanas.",
      icon: Target,
      tempo: "24-48h",
    },
    {
      numero: 3,
      titulo: "Execução + revisão semanal",
      descricao: "Criativos, testes, CRO/LP/loja, CRM, mídia. Canal direto com estrategista (SLA no horário comercial).",
      icon: Zap,
      tempo: "Contínuo",
    },
  ];

  return (
    <section id="decisao" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Como decidimos o caminho</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sem planos engessados. Cada negócio é único, então criamos um escopo sob medida.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {passos.map((passo) => (
              <div key={passo.numero} className="relative">
                {/* Connector line */}
                {passo.numero < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent -z-10" 
                       style={{ width: 'calc(100% - 3rem)' }} />
                )}
                
                <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-primary/40 transition-smooth shadow-card h-full">
                  {/* Número */}
                  <div className="w-12 h-12 rounded-xl gradient-domous text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {passo.numero}
                  </div>
                  
                  {/* Icon */}
                  <passo.icon className="w-10 h-10 text-primary mb-4" />
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold mb-2">{passo.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{passo.descricao}</p>
                  
                  {/* Tempo */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    ⏱️ {passo.tempo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6">
          <Button 
            size="lg" 
            className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
          >
            Receber diagnóstico no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <CTAMicrocopy />
        </div>
      </div>
    </section>
  );
};

export default DecisaoSection;
