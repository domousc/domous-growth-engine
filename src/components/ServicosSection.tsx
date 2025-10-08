import { CheckCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";

const ServicosSection = () => {
  const servicos = [
    {
      id: "trafego",
      titulo: "Tráfego Pago (Meta/Google/TikTok/YouTube)",
      dor: "Gastando em anúncios mas sem retorno consistente?",
      solucao: "Arquitetura ToFu/MoFu/BoFu com orçamento estratégico por estágio",
      entregaveis: ["Plano de mídia completo", "Estrutura de campanhas", "10–20 criativos/mês", "Otimização contínua"],
      kpi: "CAC/ROAS e payback em até 60 dias",
    },
    {
      id: "funil",
      titulo: "Planejamento de Funil de Vendas",
      dor: "Sem clareza de como transformar tráfego em cliente?",
      solucao: "Mapeamento completo de ICP, oferta, matriz de objeções e roteiro de mensagens",
      entregaveis: ["Persona e ICP definidos", "Jornada do cliente", "Matriz de objeções", "Scripts de vendas"],
      kpi: "Velocidade para 1º sinal (2–4 semanas)",
    },
    {
      id: "local",
      titulo: "Assessoria para Negócios Locais",
      dor: "Quer agenda cheia mas depende de indicação?",
      solucao: "Geração de agenda com scripts no WhatsApp e Google Perfil otimizado",
      entregaveis: ["Google Meu Negócio otimizado", "Campanhas locais", "Scripts de atendimento", "Follow-up automatizado"],
      kpi: "Custo por agendamento e taxa de show-up",
    },
    {
      id: "ecommerce",
      titulo: "Assessoria de E-commerce",
      dor: "Loja montada mas não vende como deveria?",
      solucao: "Otimização de catálogo, pricing, kits, logística e CRO",
      entregaveis: ["Auditoria completa", "Otimização de produto", "Estratégia de pricing", "Melhorias de UX/checkout"],
      kpi: "Taxa de conversão e AOV (ticket médio)",
    },
    {
      id: "tray",
      titulo: "Implantação de Lojas Virtuais (Tray)",
      dor: "Quer vender online mas não sabe por onde começar?",
      solucao: "ERP/marketplaces/checkout/frete prontos para vender no dia 1",
      entregaveis: ["Loja completa na Tray", "Integrações (ERP, pagamento, frete)", "Catálogo configurado", "Treinamento"],
      kpi: "Vendas no lançamento (primeiros 7 dias)",
    },
    {
      id: "lancamento",
      titulo: "Lançamento (Go-to-Market)",
      dor: "Lançar produto/negócio sem queimar budget?",
      solucao: "Campanha de inauguração + calendário 90 dias",
      entregaveis: ["Estratégia de lançamento", "Campanha completa", "Calendário 90 dias", "Mídia integrada"],
      kpi: "Payback do lançamento",
    },
    {
      id: "crm",
      titulo: "CRM com IA + WhatsApp (Domous CRM)",
      dor: "Perdendo leads por falta de follow-up?",
      solucao: "Captar → qualificar → nutrir → fechar, SDR B2B (LeadsPJ), agente de IA 24/7",
      entregaveis: ["CRM configurado", "Funis conversacionais", "Agente de IA", "Automações de follow-up", "Dashboards"],
      kpi: "Taxa de contato e win rate",
    },
    {
      id: "social",
      titulo: "Social Media (foco em vendas)",
      dor: "Redes sociais bonitas mas que não geram vendas?",
      solucao: "Linha editorial por estágio, calendário, UGC/bastidores que viram anúncio",
      entregaveis: ["Estratégia de conteúdo", "Calendário mensal", "Posts (feed + stories)", "UGC para ads"],
      kpi: "Salvamentos e CTR para LP",
    },
    {
      id: "video",
      titulo: "Audiovisual (conteúdo & ads)",
      dor: "Vídeos que não prendem atenção nem vendem?",
      solucao: "Roteiros por ângulo (dor/prova/objeção/desejo), depoimentos, demos, cortes para ads",
      entregaveis: ["Roteiros estratégicos", "Produção de vídeos", "Depoimentos de clientes", "Edição para ads"],
      kpi: "Taxa de view-through e CPV",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada serviço é orientado a vendas. Você escolhe o que precisa ou a gente monta o pacote completo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <div 
                key={servico.id}
                className="bg-card rounded-2xl border border-border shadow-card hover:shadow-domous transition-smooth p-6 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{servico.titulo}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{servico.dor}</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <p className="font-semibold text-accent text-sm mb-2">✓ Solução</p>
                    <p className="text-muted-foreground text-sm">{servico.solucao}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-accent text-sm mb-2">📦 Entregáveis</p>
                    <ul className="space-y-1">
                      {servico.entregaveis.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="font-semibold text-primary text-xs mb-1">🎯 KPI principal</p>
                    <p className="text-sm">{servico.kpi}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <CTAButton 
                    type="whatsapp"
                    label="Solicitar orçamento"
                    variant="outline"
                    size="default"
                    className="w-full"
                    customMessage={`Olá! Gostaria de solicitar um orçamento para: ${servico.titulo}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
