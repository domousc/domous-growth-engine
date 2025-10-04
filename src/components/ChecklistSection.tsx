import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ChecklistSection = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const criterios = [
    "Começa do funil para a mídia?",
    "Mede CAC, AOV, LTV, payback (não só CTR)?",
    "Integra Social, Vídeo, LP/Loja e CRM?",
    "Entrega Primeiros 30 dias com marcos?",
    "Revisão semanal e painel claro?",
    "SLA de resposta e canal direto?",
    "Fidelidade alinhada com marcos claros?",
  ];

  const handleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const allChecked = checkedCount === criterios.length;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Checklist do decisor</h2>
            <p className="text-xl text-muted-foreground">
              Avalie sua assessoria atual (ou futura) com estes 7 critérios essenciais
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 border-2 border-border shadow-card">
            <div className="space-y-6 mb-8">
              {criterios.map((criterio, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-smooth cursor-pointer"
                  onClick={() => handleCheck(index)}
                >
                  <Checkbox
                    id={`criterio-${index}`}
                    checked={checkedItems[index] || false}
                    onCheckedChange={() => handleCheck(index)}
                    className="mt-1"
                  />
                  <label 
                    htmlFor={`criterio-${index}`}
                    className="flex-1 text-lg cursor-pointer select-none"
                  >
                    {criterio}
                  </label>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {checkedCount} de {criterios.length} critérios
                </span>
                <span className="text-sm font-bold text-primary">
                  {Math.round((checkedCount / criterios.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-domous transition-all duration-500"
                  style={{ width: `${(checkedCount / criterios.length) * 100}%` }}
                />
              </div>
            </div>

            {/* CTA */}
            {allChecked && (
              <div className="text-center animate-fade-in">
                <p className="text-lg font-semibold mb-4 text-primary">
                  ✨ Todos os critérios marcados! A Domous atende 100%.
                </p>
                <Button 
                  size="lg" 
                  className="gradient-domous text-white hover:opacity-90 shadow-domous"
                >
                  Quero avaliar meu cenário em 5 min
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
            
            {!allChecked && checkedCount > 0 && (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Continue marcando para ver como a Domous pode ajudar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
