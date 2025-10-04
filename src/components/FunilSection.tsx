import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, MousePointer, MessageCircle, CreditCard, RefreshCw } from "lucide-react";
import decorativeOrbs from "@/assets/decorative-orbs.webp";

const FunilSection = () => {
  const etapas = [
    {
      fase: "Pré-funil",
      titulo: "Diagnóstico 5 min",
      descricao: "Oferta, ticket, metas → playbook 90 dias",
      icon: Eye,
      kpis: ["Alinhamento estratégico", "Roadmap claro"],
      color: "from-purple-400 to-purple-500",
    },
    {
      fase: "ToFu",
      titulo: "Atração",
      descricao: "Posts educativos, bastidores, UGC, reels",
      icon: MousePointer,
      kpis: ["Alcance qualificado", "CTR para LP/loja"],
      color: "from-purple-500 to-purple-600",
    },
    {
      fase: "MoFu",
      titulo: "Prova",
      descricao: "Cases, 'como funciona', comparativos",
      icon: MessageCircle,
      kpis: ["Tempo na página", "Respostas no WhatsApp"],
      color: "from-purple-600 to-purple-700",
    },
    {
      fase: "BoFu",
      titulo: "Conversão",
      descricao: "Oferta clara, garantias, remarketing direto",
      icon: CreditCard,
      kpis: ["Taxa de conversão", "CAC/ROAS"],
      color: "from-purple-700 to-purple-800",
    },
    {
      fase: "Pós-venda",
      titulo: "Retenção",
      descricao: "Reativação, upsell/cross",
      icon: RefreshCw,
      kpis: ["LTV", "Recompra", "Churn"],
      color: "from-purple-800 to-purple-700",
    },
  ];

  return (
    <section id="funil" className="py-28 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 relative">
          {/* Decorative orbs */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 opacity-30 pointer-events-none">
            <img src={decorativeOrbs} alt="Orbs decorativos lilás" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="mb-6">Funil de Vendas</h2>
          <p className="text-xl text-muted-foreground mx-auto" style={{ maxWidth: '65ch' }}>
            Mapa prático do caminho que seu cliente percorre — do primeiro contato ao fã da marca
          </p>
        </div>

        {/* Timeline Horizontal */}
        <div className="relative mb-16">
          {/* Linha conectora - oculta em mobile */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-700 -z-10" />
          
          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-[20px] p-6 border-2 border-border hover:border-primary/40 transition-smooth shadow-card hover:shadow-domous">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${etapa.color} flex items-center justify-center text-white`}>
                    <etapa.icon className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  
                  {/* Fase */}
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">
                      {etapa.fase}
                    </span>
                    <h3 className="text-lg font-bold">{etapa.titulo}</h3>
                  </div>
                  
                  {/* Descrição */}
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {etapa.descricao}
                  </p>
                  
                  {/* KPIs */}
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-primary">KPIs:</p>
                    {etapa.kpis.map((kpi, i) => (
                      <p key={i} className="text-xs text-muted-foreground">• {kpi}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="gradient-domous text-white hover:opacity-90 shadow-domous text-lg h-14 px-8"
          >
            Quero meu funil montado do zero ao lucro
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FunilSection;
