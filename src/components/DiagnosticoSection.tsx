import { useState } from "react";
import { Sparkles, ClipboardCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import QuizDiagnostico from "./QuizDiagnostico";
import DiagnosticoExpress from "./DiagnosticoExpress";

const DiagnosticoSection = () => {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openDxp, setOpenDxp] = useState(false);

  const cards = [
    {
      icon: ClipboardCheck,
      title: "Quiz Diagnóstico",
      description: "Responda algumas perguntas e descubra qual é a prioridade #1 do seu negócio agora.",
      time: "~2 min",
      action: () => setOpenQuiz(true),
    },
    {
      icon: Sparkles,
      title: "Diagnóstico Express",
      description: "3 perguntas rápidas para uma recomendação imediata de onde investir primeiro.",
      time: "~30 seg",
      action: () => setOpenDxp(true),
    },
  ];

  return (
    <>
      <section className="py-28 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Descubra seu próximo passo</span>
            </div>
            <h2 className="mb-6">Não sabe por onde começar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Faça um diagnóstico rápido e descubra a maior alavanca de crescimento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.title}
                  onClick={card.action}
                  className="bg-card rounded-2xl border border-border p-8 text-left shadow-card hover:shadow-domous hover:border-primary/30 transition-smooth group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    ⏱ {card.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz Dialog */}
      <Dialog open={openQuiz} onOpenChange={setOpenQuiz}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Quiz Diagnóstico</DialogTitle>
          <QuizDiagnostico />
        </DialogContent>
      </Dialog>

      {/* Diagnóstico Express Dialog */}
      <Dialog open={openDxp} onOpenChange={setOpenDxp}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Diagnóstico Express</DialogTitle>
          <DiagnosticoExpress />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DiagnosticoSection;
