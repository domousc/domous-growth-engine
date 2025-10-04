import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Target, Inbox, Zap, Gift, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useCTAData } from "@/hooks/useCTAData";
import { Industria } from "./IndustriaSelector";

interface QuizAnswer {
  step: number;
  answer: string;
}

interface QuizResult {
  priority1: string;
  priority2?: string;
  segment: string;
  objective: string;
  lpStatus: string;
  crmStatus: string;
  creativesStatus: string;
  offerStatus: string;
  budget: string;
  // Lead Scoring fields
  lead_points: number;
  lead_score: number;
  lead_grade: 'A' | 'B' | 'C' | 'D';
  lead_bucket: 'Hot' | 'Warm' | 'Cold';
}

const QuizDiagnostico = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "", lgpdConsent: false });
  const [result, setResult] = useState<QuizResult | null>(null);
  const { industry, getWhatsAppMessage: getStoredWhatsAppMessage } = useCTAData();
  
  // Get UTM params and page info directly
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {
    utm_source: urlParams.get("utm_source") || "",
    utm_medium: urlParams.get("utm_medium") || "",
    utm_campaign: urlParams.get("utm_campaign") || "",
    utm_term: urlParams.get("utm_term") || "",
    utm_content: urlParams.get("utm_content") || ""
  };
  const pageTitle = document.title;
  const currentUrl = window.location.href;

  const questions = [
    {
      id: 1,
      question: "Qual é seu segmento?",
      options: [
        { value: "moda", label: "Moda" },
        { value: "saude", label: "Saúde" },
        { value: "servicos", label: "Serviços" },
        { value: "alimentacao", label: "Alimentação" },
        { value: "arquitetura", label: "Arquitetura" },
        { value: "outro", label: "Outro" }
      ]
    },
    {
      id: 2,
      question: "Qual seu objetivo principal agora?",
      options: [
        { value: "leads", label: "Gerar mais leads" },
        { value: "vender", label: "Vender online" },
        { value: "ticket", label: "Aumentar ticket/AOV" },
        { value: "escalar", label: "Escalar com CAC controlado" },
        { value: "reativar", label: "Reativar clientes" }
      ]
    },
    {
      id: 3,
      question: "Você tem Landing Page/Loja que converte hoje?",
      options: [
        { value: "sim_2", label: "Sim (≥2%)" },
        { value: "sim_baixo", label: "Sim, mas <2%" },
        { value: "nao", label: "Não" },
        { value: "nao_sei", label: "Não sei" }
      ]
    },
    {
      id: 4,
      question: "Como é seu atendimento? (Whats/CRM)",
      options: [
        { value: "otimo", label: "Responde rápido e segue com follow-up" },
        { value: "sem_followup", label: "Responde mas sem follow-up" },
        { value: "planilha", label: "Só anota/planilha" },
        { value: "nao_usa", label: "Não usa" }
      ]
    },
    {
      id: 5,
      question: "Sobre criativos/anúncios:",
      options: [
        { value: "bom", label: "CTR ≥1% e frequência <3" },
        { value: "ctr_baixo", label: "CTR baixo (<1%)" },
        { value: "saturacao", label: "Frequência alta/saturação" },
        { value: "nunca_testou", label: "Nunca testamos ângulos" },
        { value: "nao_sei", label: "Não sei" }
      ]
    },
    {
      id: 6,
      question: "Oferta e preço:",
      options: [
        { value: "clara", label: "Oferta clara/diferenciada" },
        { value: "sem_fechamento", label: "Muitos orçamentos sem fechamento" },
        { value: "ticket_baixo", label: "Ticket baixo para mídia" },
        { value: "sazonal", label: "Depende de sazonal" },
        { value: "nao_sei", label: "Não sei" }
      ]
    },
    {
      id: 7,
      question: "Métricas de negócio (marque o que acompanha):",
      options: [
        { value: "cac", label: "CAC" },
        { value: "aov", label: "AOV" },
        { value: "ltv", label: "LTV" },
        { value: "conversao", label: "Conversão da LP/Loja" },
        { value: "nenhum", label: "Nenhum/raramente" }
      ]
    },
    {
      id: 8,
      question: "Seu orçamento/mês hoje:",
      options: [
        { value: "menos_3k", label: "< R$ 3 mil" },
        { value: "3_10k", label: "R$ 3–10 mil" },
        { value: "10_30k", label: "R$ 10–30 mil" },
        { value: "mais_30k", label: "> R$ 30 mil" },
        { value: "nao_sei", label: "Não sei" }
      ]
    },
    {
      id: 9,
      question: "Velocidade de resultado esperada:",
      options: [
        { value: "rapido", label: "Ver sinais em 2–4 semanas" },
        { value: "consistente", label: "Prefiro consistência em 60–90 dias" }
      ]
    }
  ];

  const totalSteps = questions.length + 1; // +1 for contact info

  useEffect(() => {
    // Pre-fill segment from industry selector
    if (industry && industry !== "todas" && currentStep === 0) {
      setAnswers({ 0: industry });
    }
  }, [industry]);

  const calculateResult = (): QuizResult => {
    const scores = {
      crm: 0,
      lp: 0,
      criativos: 0,
      oferta: 0,
      midia: 0,
      reativacao: 0
    };

    // Lead scoring points
    let lead_points = 0;

    // Q1: Segmento (5 or 3 points)
    const segmentValue = answers[0] || industry || "todas";
    if (["moda", "saude", "servicos", "alimentacao", "arquitetura"].includes(segmentValue)) {
      lead_points += 5;
    } else if (segmentValue === "outro") {
      lead_points += 3;
    }

    // Q2: Objetivo (10, 8, or 6 points)
    const objectiveValue = answers[1] || "";
    if (objectiveValue === "escalar") {
      lead_points += 10;
    } else if (objectiveValue === "reativar") {
      lead_points += 8;
    } else if (["leads", "vender", "ticket"].includes(objectiveValue)) {
      lead_points += 6;
    }

    // Q3: LP/Loja (10, 6, 4, or 2 points)
    const lpValue = answers[2] || "";
    if (lpValue === "sim_2") {
      lead_points += 10;
    } else if (lpValue === "sim_baixo") {
      lead_points += 6;
    } else if (lpValue === "nao") {
      lead_points += 4;
    } else if (lpValue === "nao_sei") {
      lead_points += 2;
    }

    // Q4: CRM/Atendimento (10, 6, 4, or 2 points)
    const crmValue = answers[3] || "";
    if (crmValue === "otimo") {
      lead_points += 10;
    } else if (crmValue === "sem_followup") {
      lead_points += 6;
    } else if (crmValue === "planilha") {
      lead_points += 4;
    } else if (crmValue === "nao_usa") {
      lead_points += 2;
    }

    // Q5: Criativos (10, 6, 4, or 3 points)
    const creativesValue = answers[4] || "";
    if (creativesValue === "bom") {
      lead_points += 10;
    } else if (creativesValue === "ctr_baixo") {
      lead_points += 6;
    } else if (creativesValue === "saturacao") {
      lead_points += 4;
    } else if (creativesValue === "nunca_testou") {
      lead_points += 3;
    }

    // Q6: Oferta (10, 6, 5, 4, or 2 points)
    const offerValue = answers[5] || "";
    if (offerValue === "clara") {
      lead_points += 10;
    } else if (offerValue === "sem_fechamento") {
      lead_points += 6;
    } else if (offerValue === "sazonal") {
      lead_points += 5;
    } else if (offerValue === "ticket_baixo") {
      lead_points += 4;
    } else if (offerValue === "nao_sei") {
      lead_points += 2;
    }

    // Q7: Métricas (+3 per metric, max +12)
    const metricsValue = answers[6] || "";
    if (metricsValue !== "nenhum") {
      const metricsList = metricsValue.split(",");
      lead_points += Math.min(metricsList.length * 3, 12);
    }

    // Q8: Orçamento (12, 10, 6, 2, or 0 points)
    const budgetValue = answers[7] || "";
    if (budgetValue === "mais_30k") {
      lead_points += 12;
    } else if (budgetValue === "10_30k") {
      lead_points += 10;
    } else if (budgetValue === "3_10k") {
      lead_points += 6;
    } else if (budgetValue === "menos_3k") {
      lead_points += 2;
    }

    // Q9: Velocidade (8 or 4 points)
    const velocityValue = answers[8] || "";
    if (velocityValue === "rapido") {
      lead_points += 8;
    } else if (velocityValue === "consistente") {
      lead_points += 4;
    }

    // Convert to score 0-100 (max theoretical = 87)
    const lead_score = Math.round((lead_points / 87) * 100);

    // Determine bucket
    let lead_bucket: 'Hot' | 'Warm' | 'Cold';
    if (lead_score >= 75) {
      lead_bucket = 'Hot';
    } else if (lead_score >= 55) {
      lead_bucket = 'Warm';
    } else {
      lead_bucket = 'Cold';
    }

    // Determine grade
    let lead_grade: 'A' | 'B' | 'C' | 'D';
    if (lead_score >= 85) {
      lead_grade = 'A';
    } else if (lead_score >= 75) {
      lead_grade = 'B';
    } else if (lead_score >= 65) {
      lead_grade = 'C';
    } else {
      lead_grade = 'D';
    }

    // Priority scoring (existing logic)
    // Q4: CRM/Follow-up
    if (answers[3] !== "otimo") scores.crm++;
    
    // Q7: Metrics
    if (answers[6] === "nenhum") scores.crm++;

    // Q3: LP/Conversion
    if (answers[2] === "sim_baixo" || answers[2] === "nao") scores.lp++;

    // Q5: Creatives
    if (["ctr_baixo", "saturacao", "nunca_testou"].includes(answers[4])) scores.criativos++;

    // Q6: Offer
    if (answers[5] !== "clara") scores.oferta++;

    // Q2 + Q3 + Q4: Media/Scaling
    if (answers[1] === "escalar" && answers[2] === "sim_2" && answers[3] === "otimo") scores.midia++;

    // Q2 or Q7: Reactivation
    if (answers[1] === "reativar" || !answers[6]?.includes("ltv")) scores.reativacao++;

    // Find top 2 priorities
    const sorted = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .filter(([_, score]) => score > 0);

    return {
      priority1: sorted[0]?.[0] || "crm",
      priority2: sorted[1]?.[0],
      segment: answers[0] || industry || "todas",
      objective: answers[1] || "",
      lpStatus: answers[2] || "",
      crmStatus: answers[3] || "",
      creativesStatus: answers[4] || "",
      offerStatus: answers[5] || "",
      budget: answers[7] || "",
      lead_points,
      lead_score,
      lead_grade,
      lead_bucket
    };
  };

  const handleNext = () => {
    if (currentStep === questions.length - 1) {
      // Last question, move to contact form
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'quiz_next',
        step: currentStep + 1
      });
      setCurrentStep(currentStep + 1);
    } else if (currentStep === questions.length) {
      // Submit quiz
      if (!contactInfo.phone || !contactInfo.lgpdConsent) {
        alert("Ops, falta seu WhatsApp e aceitar o termo LGPD para enviarmos o plano.");
        return;
      }
      
      const quizResult = calculateResult();
      setResult(quizResult);
      
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'quiz_submit',
        lead_score: quizResult.lead_score,
        lead_bucket: quizResult.lead_bucket,
        lead_grade: quizResult.lead_grade,
        priority_1: quizResult.priority1,
        priority_2: quizResult.priority2,
        industry: quizResult.segment,
        objective: quizResult.objective
      });

      // Send bucket-specific event
      window.dataLayer.push({
        event: `lead_score_${quizResult.lead_bucket.toLowerCase()}`
      });

      // Store in localStorage with all scoring data
      localStorage.setItem('quiz_result', JSON.stringify({
        ...quizResult,
        lead_points: quizResult.lead_points,
        lead_score: quizResult.lead_score,
        lead_bucket: quizResult.lead_bucket,
        lead_grade: quizResult.lead_grade,
        ...utmParams,
        pageTitle,
        currentUrl
      }));
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'quiz_next',
        step: currentStep + 1
      });
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'quiz_back',
        step: currentStep + 1
      });
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'quiz_start' });
    setCurrentStep(1);
  };

  const getPriorityDetails = (priority: string) => {
    const details: Record<string, { icon: any, title: string, why: string, actions: string[], kpi: string }> = {
      crm: {
        icon: Inbox,
        title: "CRM/Follow-up",
        why: "Responde, mas não faz follow-up; leads esfriam antes de decidir.",
        actions: [
          "Ativar fluxo de captura + qualificação no Whats",
          "3 toques em 7 dias (auto + humano)",
          "Perguntas de objeção no 1º contato"
        ],
        kpi: "Tempo de resposta < 5 min"
      },
      lp: {
        icon: Target,
        title: "LP/Conversão",
        why: "LP inexistente ou <2% — tráfego não tem onde converter bem.",
        actions: [
          "Nova LP com oferta/prova e CTA único",
          "Teste A/B de headline e formulário",
          "Integração CRM + Whats"
        ],
        kpi: "Conversão ≥ 2–3%"
      },
      criativos: {
        icon: Zap,
        title: "Criativos/Ângulos",
        why: "CTR baixo/saturação — ângulos não atacam dor/objeção.",
        actions: [
          "3 ângulos (dor • prova • objeção)",
          "2 formatos por ângulo (UGC + motion)",
          "Biblioteca de hooks (10s)"
        ],
        kpi: "CTR ≥ 1% / freq < 3"
      },
      oferta: {
        icon: Gift,
        title: "Oferta/Posicionamento",
        why: "Muitos orçamentos sem fechamento; proposta pouco diferenciada.",
        actions: [
          "Bundle/garantia/urgência lógica",
          "Pré-brief no Whats (qualificar valor)",
          "Página de oferta clara"
        ],
        kpi: "Taxa de fechamento +X%"
      },
      midia: {
        icon: TrendingUp,
        title: "Mídia/Escalonamento",
        why: "Base pronta; hora de escalar mantendo CAC.",
        actions: [
          "Estrutura de campanhas por funil",
          "Orçamento por fase e taxa de teste",
          "Rotina semanal de otimização"
        ],
        kpi: "CAC dentro da meta"
      },
      reativacao: {
        icon: Users,
        title: "Reativação/CRM Pós-venda",
        why: "Base parada; dinheiro na mesa.",
        actions: [
          "Win-back 30/60/90",
          "Upsell/cross no Whats",
          "Oferta só para clientes inativos"
        ],
        kpi: "% receita de base"
      }
    };

    return details[priority] || details.crm;
  };

  const getWhatsAppMessage = () => {
    if (!result) return "";
    
    const parts = [
      `Quero diagnóstico Domous —`,
      `score:${result.lead_score}% (${result.lead_bucket}/${result.lead_grade})`,
      `indústria:${result.segment}`,
      `objetivo:${result.objective}`,
      `orçamento:${result.budget}`,
      `LP:${result.lpStatus}`,
      `CRM:${result.crmStatus}`,
      `criativos:${result.creativesStatus}`,
      `oferta:${result.offerStatus}`,
      `prioridade:${result.priority1}${result.priority2 ? `, ${result.priority2}` : ''}`,
      `origem:${utmParams.utm_source || 'direct'}/${utmParams.utm_campaign || 'none'}/${utmParams.utm_term || 'none'}`,
      `página:${pageTitle}`,
      `url:${currentUrl}`
    ];

    return encodeURIComponent(parts.filter(p => !p.includes('undefined')).join(' | '));
  };

  const handleWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'click_whatsapp',
      cta_label: 'Quiz Result WhatsApp',
      lead_score: result?.lead_score,
      lead_bucket: result?.lead_bucket,
      priority_1: result?.priority1,
      segment: result?.segment
    });
    
    window.open(`https://wa.me/5583981195186?text=${getWhatsAppMessage()}`, "_blank", "noopener,noreferrer");
  };

  const getBucketMessage = (bucket: 'Hot' | 'Warm' | 'Cold'): string => {
    const messages = {
      Hot: "Base pronta para escala mantendo CAC.",
      Warm: "Ajuste 1–2 frentes e acelera.",
      Cold: "Implante o básico (LP/CRM) para destravar."
    };
    return messages[bucket];
  };

  const getBucketColor = (bucket: 'Hot' | 'Warm' | 'Cold'): string => {
    const colors = {
      Hot: "bg-red-500/20 text-red-300 border-red-500/30",
      Warm: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      Cold: "bg-blue-500/20 text-blue-300 border-blue-500/30"
    };
    return colors[bucket];
  };

  if (currentStep === 0) {
    return (
      <Card className="card-dark p-6 md:p-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-dark-foreground">Quiz Diagnóstico Domous</h3>
          <p className="text-dark-muted">
            Em 60s a gente aponta onde começar. Vale responder 'Não sei'.
          </p>
          <Button onClick={handleStart} className="gradient-domous text-white h-12 px-8">
            Iniciar Diagnóstico
          </Button>
        </div>
      </Card>
    );
  }

  if (result) {
    const priority1Details = getPriorityDetails(result.priority1);
    const priority2Details = result.priority2 ? getPriorityDetails(result.priority2) : null;
    const Icon1 = priority1Details.icon;
    const Icon2 = priority2Details?.icon;
    
    const bucketMessage = getBucketMessage(result.lead_bucket);
    const bucketColorClass = getBucketColor(result.lead_bucket);
    
    // CTA routing based on bucket
    const isHot = result.lead_bucket === 'Hot';
    const isWarm = result.lead_bucket === 'Warm';
    const isCold = result.lead_bucket === 'Cold';

    return (
      <Card className="card-dark p-6 md:p-8">
        <div className="space-y-6">
          {/* Score Badge */}
          <div className="text-center space-y-3">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 ${bucketColorClass}`}>
              <span className="text-3xl font-bold">{result.lead_score}%</span>
              <span className="text-lg">•</span>
              <span className="text-xl font-semibold uppercase">{result.lead_bucket}</span>
              <span className="text-sm opacity-75">({result.lead_grade})</span>
            </div>
            <p className="text-sm text-dark-muted italic">{bucketMessage}</p>
          </div>

          <h3 className="text-2xl font-bold text-dark-foreground text-center">
            Diagnóstico pronto. Comece por aqui ⤵
          </h3>

          {/* Priority 1 */}
          <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon1 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-dark-muted">Prioridade #1</p>
                <h4 className="text-xl font-bold text-dark-foreground">{priority1Details.title}</h4>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-dark-muted">Por quê:</p>
                <p className="text-dark-foreground">{priority1Details.why}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-dark-muted">O que fazer nos próximos 14 dias:</p>
                <ul className="space-y-2 mt-2">
                  {priority1Details.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-dark-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark/20 rounded-lg p-3">
                <p className="text-sm font-medium text-primary">
                  KPI-alvo: {priority1Details.kpi}
                </p>
              </div>

              {/* Quality recommendation highlights */}
              {isCold && result.priority1 === 'lp' && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent">
                    💡 Destaque: Nova LP/CRO (meta ≥2–3%) é crucial para destravar conversão.
                  </p>
                </div>
              )}
              {isCold && result.priority1 === 'crm' && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent">
                    💡 Destaque: Fluxos Whats/CRM com follow-up 7/14/30 são fundamentais.
                  </p>
                </div>
              )}
              {isHot && result.priority1 === 'midia' && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent">
                    🚀 Pronto para escalar: Estrutura de campanhas e taxa de teste semanal.
                  </p>
                </div>
              )}
            </div>

            {/* CTA Routing */}
            <div className="space-y-3 pt-2">
              {isHot && (
                <>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="gradient-domous text-white w-full h-12"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Receber diagnóstico no WhatsApp agora
                  </Button>
                  <p className="text-xs text-center text-accent font-semibold">⚡ Resposta em minutos</p>
                </>
              )}
              
              {isWarm && (
                <Button 
                  onClick={handleWhatsAppClick}
                  className="gradient-domous text-white w-full h-12"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Receber plano no WhatsApp
                </Button>
              )}
              
              {isCold && (
                <>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="gradient-domous text-white w-full h-12"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar sobre pré-setup (LP/CRM)
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/5"
                  >
                    📋 Baixar Checklist de Implantação
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Priority 2 (if exists) */}
          {priority2Details && Icon2 && (
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-dark-muted">Próximo passo</p>
                  <h4 className="text-lg font-bold text-dark-foreground">{priority2Details.title}</h4>
                </div>
              </div>
              <p className="text-sm text-dark-muted">{priority2Details.why}</p>
            </div>
          )}

          {/* Secondary CTAs */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/5"
            >
              📞 Agendar uma call
            </Button>
            {isWarm && (
              <Button 
                variant="outline"
                className="flex-1 border-accent text-accent hover:bg-accent/5"
              >
                📄 Plano de 14 dias
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  }

  const isContactStep = currentStep === questions.length;
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <Card className="card-dark p-6 md:p-8">
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-dark-muted">
            <span>Passo {currentStep} de {totalSteps - 1}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question or Contact Form */}
        {!isContactStep ? (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-dark-foreground">
              {questions[currentStep - 1].question}
            </h3>

            <RadioGroup
              value={answers[currentStep - 1] || ""}
              onValueChange={(value) => setAnswers({ ...answers, [currentStep - 1]: value })}
              className="space-y-3"
            >
              {questions[currentStep - 1].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 bg-dark/20 rounded-lg p-3 hover:bg-dark/30 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-dark-foreground">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-dark-foreground">
              Contato (para enviar o plano em 1–2 minutos)
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-dark-foreground">Nome</Label>
                <Input
                  id="name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="mt-1"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-dark-foreground">WhatsApp *</Label>
                <Input
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="mt-1"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-dark-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="mt-1"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex items-start space-x-2 bg-dark/20 rounded-lg p-3">
                <Checkbox
                  id="lgpd"
                  checked={contactInfo.lgpdConsent}
                  onCheckedChange={(checked) => setContactInfo({ ...contactInfo, lgpdConsent: checked as boolean })}
                  required
                />
                <Label htmlFor="lgpd" className="text-sm text-dark-muted cursor-pointer leading-tight">
                  Autorizo contato por WhatsApp/Email conforme a LGPD. *
                </Label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
            className="border-primary text-primary hover:bg-primary/5"
          >
            <ChevronLeft className="mr-1 w-4 h-4" />
            Voltar
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isContactStep && !answers[currentStep - 1]}
            className="gradient-domous text-white flex-1"
          >
            {currentStep === questions.length ? "Ver Resultado" : "Próximo passo"}
            <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuizDiagnostico;
