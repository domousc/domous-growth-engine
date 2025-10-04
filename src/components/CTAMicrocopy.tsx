import { Clock, Shield } from "lucide-react";

const CTAMicrocopy = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
      <span className="flex items-center gap-1.5">
        <Clock className="w-4 h-4 text-primary" />
        Resposta em minutos
      </span>
      <span className="hidden sm:inline">•</span>
      <span className="flex items-center gap-1.5">
        <Shield className="w-4 h-4 text-primary" />
        Sem fidelidade
      </span>
    </div>
  );
};

export default CTAMicrocopy;
