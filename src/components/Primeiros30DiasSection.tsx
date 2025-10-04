import { CheckCircle2 } from "lucide-react";

const Primeiros30DiasSection = () => {
  const timeline = [
    {
      dias: "Dia 0–2",
      atividades: ["Acessos e credenciais", "Pixel e eventos configurados", "CRM integrado"],
    },
    {
      dias: "Dia 3–7",
      atividades: ["Mensagem/oferta definida", "Pauta de conteúdo e criativos", "Ajustes LP/loja"],
    },
    {
      dias: "Dia 8–14",
      atividades: ["Campanhas MoFu/BoFu ativas", "Nutrição automatizada", "Primeiros testes A/B"],
    },
    {
      dias: "Dia 15–21",
      atividades: ["Otimizações de criativo", "Refinamento de segmentação", "Micro-CRO em LP/loja"],
    },
    {
      dias: "Dia 22–30",
      atividades: ["Review completo: CAC, AOV, Conversão", "Análise de resultados", "Definição próximos sprints"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Primeiros 30 dias</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Timeline detalhada do que acontece desde o dia zero até o primeiro mês completo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha vertical - apenas desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            
            <div className="space-y-6">
              {timeline.map((periodo, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  {/* Indicador */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-domous flex items-center justify-center text-white font-bold shadow-domous z-10">
                    {index + 1}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-domous transition-smooth">
                    <h3 className="text-xl font-bold mb-4">{periodo.dias}</h3>
                    <ul className="space-y-2">
                      {periodo.atividades.map((atividade, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{atividade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Primeiros30DiasSection;
