import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComparativoSection = () => {
  const comparacao = [
    {
      criterio: "Começa pelo funil",
      domous: true,
      agencia: false,
    },
    {
      criterio: "KPIs de negócio (CAC/AOV/LTV)",
      domous: true,
      agencia: false,
    },
    {
      criterio: "LP/Loja + CRM integrados",
      domous: true,
      agencia: false,
    },
    {
      criterio: "Revisão semanal com estrategista",
      domous: true,
      agencia: false,
    },
    {
      criterio: "Sem fidelidade",
      domous: true,
      agencia: false,
    },
    {
      criterio: "Foco em criativo bonito (não em venda)",
      domous: false,
      agencia: true,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Comparativo honesto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Domous (Full-Funnel) vs Agência "vídeo + anúncio"
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/30 border-b border-border">
              <div className="font-bold text-lg">Critério</div>
              <div className="font-bold text-lg text-center gradient-domous-text">Domous</div>
              <div className="font-bold text-lg text-center text-muted-foreground">Agência tradicional</div>
            </div>

            {/* Rows */}
            {comparacao.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 ${index !== comparacao.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-center">
                  <span className="font-medium">{item.criterio}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  {item.domous ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground/30" />
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  {item.agencia ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground/30" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
            >
              Quero sair do enfeite e ir para o caixa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparativoSection;
