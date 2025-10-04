import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import IndustriaSelector, { Industria } from "./IndustriaSelector";
import CaseNavigator from "./CaseNavigator";

interface CasesSectionProps {
  selectedIndustria?: Industria;
  onSelectIndustria?: (industria: Industria) => void;
}

const CasesSection = ({ selectedIndustria = "todas", onSelectIndustria }: CasesSectionProps) => {
  const [activeTab, setActiveTab] = useState(selectedIndustria === "todas" ? "saude" : selectedIndustria);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCase = (caseData: any) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  const cases = {
    saude: [
      {
        resultado: "CAC R$ 42 | ROAS 8.2x — Clínica de Estética",
        metricaDestaque: "ROAS 8.2x em 30 dias",
        cliente: "Clínica de Estética",
        descricao: "Estruturação completa do produto + funil de captação + mídia",
        metricas: ["CAC: R$ 42", "Ticket: R$ 890", "ROAS: 8.2x"],
      },
      {
        resultado: "Show-up 87% — Dentista",
        metricaDestaque: "Show-up 87% em 15 dias",
        cliente: "Dentista",
        descricao: "Google Perfil + anúncios locais + CRM WhatsApp",
        metricas: ["Custo/agendamento: R$ 18", "Show-up: 87%"],
      },
    ],
    ecommerce: [
      {
        resultado: "AOV +18% em 60 dias — Moda",
        metricaDestaque: "AOV +18% e CAC –28%",
        cliente: "Loja de Moda (Tray)",
        descricao: "Loja Tray + CRM + Ads otimizados",
        metricas: ["Conversão: 2.1% → 3.4%", "AOV: R$ 187 → R$ 221"],
      },
      {
        resultado: "R$ 127k no 1º mês — Casa",
        metricaDestaque: "R$ 127k em faturamento",
        cliente: "E-commerce de Casa",
        descricao: "Lançamento completo com mídia integrada",
        metricas: ["ROAS: 6.8x", "Pedidos: 580"],
      },
    ],
    servicos: [
      {
        resultado: "Pipeline +340% em 90 dias — B2B",
        metricaDestaque: "Pipeline +340%",
        cliente: "Consultoria B2B",
        descricao: "LinkedIn + CRM com IA + SDR automatizado",
        metricas: ["Leads/mês: 45 → 198", "Win rate: 23%"],
      },
    ],
    alimentacao: [
      {
        resultado: "LTV +38% — Restaurante",
        metricaDestaque: "Ticket médio +22%",
        cliente: "Restaurante",
        descricao: "CRM/IA + ofertas sazonais + remarketing",
        metricas: ["Recompra: 31% → 49%", "LTV: +38%"],
      },
    ],
  };

  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Nossos cases por indústria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Resultados reais de clientes reais. Escolha sua indústria e veja o que é possível.
          </p>
          
          {onSelectIndustria && (
            <IndustriaSelector 
              selectedIndustria={selectedIndustria}
              onSelectIndustria={(industria) => {
                onSelectIndustria(industria);
                if (industria !== "todas") setActiveTab(industria);
              }}
            />
          )}
        </div>

        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="saude">Saúde</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            <TabsTrigger value="servicos">Serviços</TabsTrigger>
            <TabsTrigger value="alimentacao">Alimentação</TabsTrigger>
          </TabsList>

          {Object.entries(cases).map(([key, casesArray]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              {casesArray.map((caso, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-domous transition-smooth hover-tilt"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{caso.resultado}</h3>
                      <p className="text-muted-foreground mb-4">{caso.descricao}</p>
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary/5 hover-tilt"
                        onClick={() => handleOpenCase({
                          cliente: caso.cliente,
                          industria: key,
                          brief: caso.descricao,
                          gargalo: "Análise detalhada do gargalo principal identificado",
                          acao: "Implementação estratégica personalizada conforme Sistema Domous",
                          resultado: caso.resultado,
                          proximoPasso: "Escalar resultados e otimizar processos contínuos",
                          lpFluxoLink: "#servicos"
                        })}
                      >
                        Ver planejamento
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Métricas principais</p>
                      {caso.metricas.map((metrica, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <p className="text-sm font-medium">{metrica}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Depoimentos em vídeo - Placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">O que nossos clientes dizem</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Dra. Bethânia", "Malibu", "Pizza do Paulista"].map((nome) => (
              <div key={nome} className="bg-card rounded-2xl p-6 border border-border shadow-card aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">📹 Depoimento {nome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Navigator Modal */}
        {selectedCase && (
          <CaseNavigator 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            caseData={selectedCase}
          />
        )}
      </div>
    </section>
  );
};

export default CasesSection;
