import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, ShoppingCart, MessageSquare, TrendingUp, Repeat } from "lucide-react";
import decorativeOrbs from "@/assets/decorative-orbs.webp";

const SistemaDomousSection = () => {
  const camadas = [
    {
      numero: 1,
      titulo: "Estratégia & Oferta",
      descricao: "ICP, promessa, ângulos, objeções",
      subdescricao: "Social/Audiovisual: roteiros, hooks, tom de voz",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    {
      numero: 2,
      titulo: "Atração (Conteúdo/Social/SEO)",
      descricao: "Calendário editorial, UGC/bastidores",
      subdescricao: "Alimentam criativos e geram autoridade",
      icon: Users,
      color: "from-purple-600 to-purple-700",
    },
    {
      numero: 3,
      titulo: "Conversão (LP/Loja Tray + CRO)",
      descricao: "Copy, UX, provas, checkout/frete",
      subdescricao: "Vídeos de prova e demo na LP",
      icon: ShoppingCart,
      color: "from-purple-700 to-purple-800",
    },
    {
      numero: 4,
      titulo: "Monetização (CRM WhatsApp com IA)",
      descricao: "Captação, qualificação, follow-up automático",
      subdescricao: "SDR B2B (LeadsPJ)",
      icon: MessageSquare,
      color: "from-purple-800 to-purple-700",
    },
    {
      numero: 5,
      titulo: "Mídia de Performance",
      descricao: "Meta/Google/TikTok por estágio",
      subdescricao: "Orçamento ToFu/MoFu/BoFu, criativos, metas CAC/ROAS",
      icon: TrendingUp,
      color: "from-purple-700 to-purple-600",
    },
    {
      numero: 6,
      titulo: "Retenção & LTV",
      descricao: "Pós-venda, reativação, comunidade",
      subdescricao: "Remarketing estratégico",
      icon: Repeat,
      color: "from-purple-600 to-purple-500",
    },
  ];

  return (
    <section id="sistema" className="py-28 md:py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 relative">
          {/* Decorative orbs */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 opacity-30 pointer-events-none">
            <img src={decorativeOrbs} alt="Orbs decorativos lilás" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="mb-6">Sistema Domous de Vendas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As 6 camadas integradas que transformam seu negócio em uma máquina de vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {camadas.map((camada) => (
            <div
              key={camada.numero}
              className="bg-card rounded-[20px] p-6 border border-border hover:border-primary/40 transition-smooth shadow-card hover:shadow-domous group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${camada.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                  {camada.numero}
                </div>
                <div className="flex-1">
                  <camada.icon className="w-8 h-8 text-primary mb-2" strokeWidth={1.75} />
                  <h3 className="text-xl font-bold mb-2">{camada.titulo}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-2">{camada.descricao}</p>
              <p className="text-sm text-muted-foreground/70 italic">{camada.subdescricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
          >
            Quero o Sistema Domous no meu negócio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SistemaDomousSection;
