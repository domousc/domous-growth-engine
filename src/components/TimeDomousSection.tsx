import { Users, TrendingUp, FolderKanban, Share2, Video, Code, Film, Palette, ShoppingCart } from "lucide-react";
import CTAButton from "./CTAButton";

const TimeDomousSection = () => {
  const team = [
    {
      role: "Estrategista de Marketing",
      impact: "Posiciona, formula ofertas e ângulos vencedores.",
      icon: TrendingUp
    },
    {
      role: "Gestor de Tráfego",
      impact: "Aloca verba por hipótese, otimiza CAC e escala o que imprime caixa.",
      icon: TrendingUp
    },
    {
      role: "Gestor de Projetos",
      impact: "Orquestra sprints, prazos e 'serviços prometidos'.",
      icon: FolderKanban
    },
    {
      role: "Social Media",
      impact: "Distribuição e ativos orgânicos que alimentam performance.",
      icon: Share2
    },
    {
      role: "Videomaker",
      impact: "Capta provas e desejo com ritmo e narrativa.",
      icon: Video
    },
    {
      role: "Dev especialista em IA",
      impact: "Automações, integrações e eficiência operacional.",
      icon: Code
    },
    {
      role: "Editor de Vídeos",
      impact: "Retenção e storytelling orientados a conversão.",
      icon: Film
    },
    {
      role: "Designer e Especialista em E-commerce",
      impact: "LPs rápidas, UX e checkout sem fricção.",
      icon: Palette
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(hsl(280 85% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(280 85% 55% / 0.1) 1px, transparent 1px)',
          backgroundSize: '12px 12px'
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Time Multidisciplinar</span>
            </div>
            
            <h2 className="mb-4">Nosso Time Domous</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Equipe multidisciplinar que opera o funil ponta a ponta até a venda cair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-domous transition-smooth p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{member.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.impact}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8">
            <p className="text-center text-muted-foreground mb-4">
              Sprints, SLAs, testes de preço/oferta e dashboards de decisão.
            </p>
            <p className="text-center text-lg font-semibold text-foreground">
              ROI nasce de sistema, não de sorte.
            </p>
          </div>

          <div className="text-center">
            <CTAButton 
              type="whatsapp"
              label="Quero esse time trabalhando para mim"
              size="lg"
              className="text-lg h-14 px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeDomousSection;
