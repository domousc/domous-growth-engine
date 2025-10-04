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
      criterio: "Fidelidade transparente com marcos",
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
    <section className="section-dark py-28 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-dark-foreground">Comparativo honesto</h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            Domous (Full-Funnel) vs Agência "vídeo + anúncio"
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-2xl border shadow-dark overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
              <div className="font-bold text-lg text-dark-foreground">Critério</div>
              <div className="font-bold text-lg text-center gradient-domous-text">Domous</div>
              <div className="font-bold text-lg text-center text-dark-muted">Agência tradicional</div>
            </div>

            {/* Rows */}
            {comparacao.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 ${index % 2 === 1 ? 'bg-white/5' : ''} ${index !== comparacao.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="flex items-center">
                  <span className="font-medium text-dark-foreground">{item.criterio}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  {item.domous ? (
                    <Check className="w-6 h-6 text-green-500" strokeWidth={1.75} />
                  ) : (
                    <X className="w-6 h-6 text-red-500/60" strokeWidth={1.75} />
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  {item.agencia ? (
                    <Check className="w-6 h-6 text-green-500" strokeWidth={1.75} />
                  ) : (
                    <X className="w-6 h-6 text-red-500/60" strokeWidth={1.75} />
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
