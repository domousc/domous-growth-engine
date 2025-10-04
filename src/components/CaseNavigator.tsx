import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Target, AlertCircle, Zap, TrendingUp, ArrowRight } from "lucide-react";

interface CaseData {
  cliente: string;
  industria: string;
  brief: string;
  gargalo: string;
  acao: string;
  resultado: string;
  proximoPasso: string;
  lpFluxoLink?: string;
}

interface CaseNavigatorProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: CaseData;
}

const CaseNavigator = ({ isOpen, onClose, caseData }: CaseNavigatorProps) => {
  const handleOpen = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'case_modal_open',
      case_cliente: caseData.cliente
    });
  };

  const handleCTA = (type: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'case_modal_cta',
      cta_type: type,
      case_cliente: caseData.cliente
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Case: {caseData.cliente}</DialogTitle>
          <p className="text-sm text-primary font-semibold">{caseData.industria}</p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* 1. Brief */}
          <div className="bg-secondary/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Brief inicial</h3>
            </div>
            <p className="text-muted-foreground">{caseData.brief}</p>
          </div>

          {/* 2. Gargalo */}
          <div className="bg-destructive/5 rounded-2xl p-6 border border-destructive/20">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <h3 className="text-lg font-bold">Principal gargalo</h3>
            </div>
            <p className="text-muted-foreground">{caseData.gargalo}</p>
          </div>

          {/* 3. Ação */}
          <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold">O que fizemos</h3>
            </div>
            <p className="text-muted-foreground">{caseData.acao}</p>
          </div>

          {/* 4. Resultado */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Resultado</h3>
            </div>
            <p className="font-semibold text-lg text-primary mb-2">{caseData.resultado}</p>
          </div>

          {/* 5. Próximo passo */}
          <div className="bg-secondary/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ArrowRight className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Próximo passo</h3>
            </div>
            <p className="text-muted-foreground">{caseData.proximoPasso}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
          {caseData.lpFluxoLink && (
            <Button
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/5"
              onClick={() => {
                handleCTA('ver_lp');
                window.location.href = caseData.lpFluxoLink!;
              }}
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Ver LP/fluxos usados
            </Button>
          )}
          
          <Button
            className="flex-1 gradient-domous text-white hover:opacity-90"
            onClick={() => {
              handleCTA('whatsapp');
              window.open('https://wa.me/5583999999999?text=' + encodeURIComponent(`Quero resultados como o case ${caseData.cliente}`), '_blank');
            }}
          >
            <MessageCircle className="mr-2 w-4 h-4" />
            Falar no WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseNavigator;
