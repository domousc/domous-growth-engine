import { Button } from "@/components/ui/button";
import { Shield, Zap, BarChart3 } from "lucide-react";

const GarantiaSection = () => {
  const garantias = [
    {
      icon: Shield,
      titulo: "Fidelidade transparente",
      descricao: "Alinhamos prazo mínimo para implementar e escalar com segurança: setup 0–14d, testes 15–30d, otimizações 31–60d.",
    },
    {
      icon: Zap,
      titulo: "Onboarding rápido",
      descricao: "Em menos de 48h você já está com tudo configurado e rodando.",
    },
    {
      icon: BarChart3,
      titulo: "Método claro e mensurável",
      descricao: "Você vê exatamente o que está acontecendo, semana a semana.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Compromisso com implantação e resultado</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fidelidade alinhada para cobrir o ciclo de setup, testes e ramp-up. 
            Sem esse horizonte, o risco é validar superficialmente e encarecer CAC.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {garantias.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="w-14 h-14 rounded-xl gradient-domous flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
                <p className="text-muted-foreground">{item.descricao}</p>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
          >
            Agendar sua garantia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GarantiaSection;
