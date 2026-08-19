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
        titulo: "ROAS 8.2x em 30 dias, Saúde (LP + Ads + CRM)",
        resultado: "CAC R$ 42 | ROAS 8.2x",
        cliente: "Clínica de Estética",
        descricao: "Estruturação completa do produto + funil de captação + mídia",
        metricas: ["CAC: R$ 42", "Ticket: R$ 890", "ROAS: 8.2x"],
        brief: "Clínica de estética sem presença digital estruturada. Queriam começar com tráfego pago mas não tinham landing page nem CRM.",
        gargalo: "Começar mídia sem estrutura de conversão = queimar budget. Precisavam primeiro validar oferta e preparar funil para receber tráfego frio.",
        acao: "1) Criamos LP com prova social e oferta irresistível (avaliação grátis). 2) Implementamos CRM no WhatsApp para qualificação. 3) Só depois ativamos Meta Ads com públicos frios. 4) Otimizamos criativos semanalmente.",
        proximoPasso: "Escalar budget gradualmente mantendo CAC abaixo de R$ 60 e testar upsell de pacotes premium.",
      },
      {
        titulo: "Show-up 87% em 15 dias, Saúde (Google + CRM)",
        resultado: "Show-up 87%",
        cliente: "Dentista",
        descricao: "Google Perfil + anúncios locais + CRM WhatsApp",
        metricas: ["Custo/agendamento: R$ 18", "Show-up: 87%"],
        brief: "Consultório odontológico com Google Perfil desatualizado. Agendamentos via telefone com alto no-show.",
        gargalo: "Pessoas agendavam mas não compareciam. Faltava confirmação e lembretes automatizados.",
        acao: "1) Otimizamos Google Perfil com fotos e avaliações. 2) Criamos fluxo de confirmação e lembrete no WhatsApp. 3) Ativamos Google Ads Local para bairros próximos.",
        proximoPasso: "Adicionar remarketing para tratamentos de maior ticket e coletar avaliações pós-consulta.",
      },
    ],
    moda: [
      {
        titulo: "AOV +18% em 60 dias, Moda (Tray + CRM + Ads)",
        resultado: "AOV +18% e CAC –28%",
        cliente: "Loja de Moda (Tray)",
        descricao: "Loja Tray + CRM + Ads otimizados",
        metricas: ["Conversão: 2.1% → 3.4%", "AOV: R$ 187 → R$ 221"],
        brief: "E-commerce na Tray com tráfego mas conversão baixa. Ticket médio estagnado em R$ 187.",
        gargalo: "Checkout longo, frete surpresa e falta de upsell. Pessoas chegavam mas não finalizavam ou compravam só 1 item.",
        acao: "1) Otimizamos UX do checkout (1 página, frete antecipado). 2) Adicionamos combo 'Leve 3 Pague 2'. 3) CRM com carrinho abandonado. 4) Criativos com prova social.",
        proximoPasso: "Testar assinatura mensal (curadoria de looks) e ampliar públicos similares.",
      },
    ],
    ecommerce: [
      {
        titulo: "R$ 127k no 1º mês, E-commerce (Lançamento Completo)",
        resultado: "R$ 127k em faturamento",
        cliente: "E-commerce de Casa",
        descricao: "Lançamento completo com mídia integrada",
        metricas: ["ROAS: 6.8x", "Pedidos: 580"],
        brief: "Lançamento de loja de decoração do zero. Sem base, sem tráfego, prazo apertado.",
        gargalo: "Começar do zero exige validação rápida de oferta + público antes de escalar budget.",
        acao: "1) Setup Tray + pixel + catálogo. 2) Testes A/B de 3 ofertas na primeira semana. 3) Público warm (interesse em decoração) + lookalike. 4) Escala gradual após validar ROAS >4x.",
        proximoPasso: "Expandir linha de produtos e ativar Google Shopping para capturar intenção de busca.",
      },
    ],
    servicos: [
      {
        titulo: "Pipeline +340% em 90 dias, B2B (LinkedIn + CRM + IA)",
        resultado: "Pipeline +340%",
        cliente: "Consultoria B2B",
        descricao: "LinkedIn + CRM com IA + SDR automatizado",
        metricas: ["Leads/mês: 45 → 198", "Win rate: 23%"],
        brief: "Consultoria B2B dependente de indicação. Queriam escalar geração de leads qualificados.",
        gargalo: "Outbound manual não escala. Precisavam automatizar prospecção sem perder personalização.",
        acao: "1) Campanha LinkedIn Ads para download de material rico. 2) Sequência de e-mails automatizada. 3) SDR com IA para qualificação inicial. 4) CRM para nutrir pipeline.",
        proximoPasso: "Criar webinar ao vivo trimestral e expandir para Google Ads (busca por palavras-chave de intenção).",
      },
    ],
    alimentacao: [
      {
        titulo: "Ticket médio +22%, Alimentação (CRM + Upsell + Mídia)",
        resultado: "LTV +38%",
        cliente: "Restaurante",
        descricao: "CRM/IA + ofertas sazonais + remarketing",
        metricas: ["Recompra: 31% → 49%", "LTV: +38%"],
        brief: "Restaurante com clientela local mas sem estratégia de retenção. Ticket médio baixo.",
        gargalo: "Cliente comprava 1x e sumia. Faltava motivo para voltar e oportunidade de upsell.",
        acao: "1) CRM com ofertas personalizadas (aniversário, combo família). 2) Menu digital com sugestão de acompanhamento. 3) Remarketing Meta para quem pediu nos últimos 30 dias.",
        proximoPasso: "Programa de fidelidade (cashback) e parcerias com apps de delivery para ampliar alcance.",
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

        {/* Filtrar casos por indústria selecionada */}
        {selectedIndustria !== "todas" ? (
          <div className="max-w-5xl mx-auto space-y-6">
            {cases[selectedIndustria as keyof typeof cases]?.length > 0 ? (
              cases[selectedIndustria as keyof typeof cases].map((caso, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-domous transition-smooth hover-tilt"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">{caso.titulo}</h3>
                      <p className="text-muted-foreground mb-4">{caso.descricao}</p>
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary/5 hover-tilt"
                        onClick={() => handleOpenCase({
                          cliente: caso.cliente,
                          industria: selectedIndustria,
                          brief: caso.brief,
                          gargalo: caso.gargalo,
                          acao: caso.acao,
                          resultado: caso.resultado,
                          proximoPasso: caso.proximoPasso,
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
              ))
            ) : (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <p className="text-muted-foreground">
                  Sem case público neste nicho, mostramos em call.
                </p>
              </div>
            )}
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="saude">Saúde</TabsTrigger>
              <TabsTrigger value="moda">Moda</TabsTrigger>
              <TabsTrigger value="servicos">Serviços</TabsTrigger>
              <TabsTrigger value="alimentacao">Alimentação</TabsTrigger>
            </TabsList>

            {Object.entries(cases).map(([key, casesArray]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                {casesArray.length > 0 ? (
                  casesArray.map((caso, index) => (
                    <div 
                      key={index}
                      className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-domous transition-smooth hover-tilt"
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">{caso.titulo}</h3>
                          <p className="text-muted-foreground mb-4">{caso.descricao}</p>
                          <Button 
                            variant="outline" 
                            className="border-primary text-primary hover:bg-primary/5 hover-tilt"
                            onClick={() => handleOpenCase({
                              cliente: caso.cliente,
                              industria: key,
                              brief: caso.brief,
                              gargalo: caso.gargalo,
                              acao: caso.acao,
                              resultado: caso.resultado,
                              proximoPasso: caso.proximoPasso,
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
                  ))
                ) : (
                  <div className="text-center py-12 bg-card rounded-2xl border border-border">
                    <p className="text-muted-foreground">
                      Sem case público neste nicho, mostramos em call.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        )}

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
