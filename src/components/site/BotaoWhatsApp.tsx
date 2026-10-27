import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { wa } from "@/data/site";

// Link de verdade (<a href>), não botão com window.open: funciona sem JavaScript
// e deixa o WhatsApp visível pra quem lê o HTML (robô de busca e de IA).
interface Props {
  texto?: string;
  origem: string;
  label?: string;
  variante?: "primario" | "contorno";
  className?: string;
}

const BotaoWhatsApp = ({
  texto = "Oi! Quero falar com a Domous sobre minha empresa.",
  origem,
  label = "Falar no WhatsApp",
  variante = "primario",
  className,
}: Props) => (
  <a
    href={wa(texto, origem)}
    target="_blank"
    rel="noopener noreferrer"
    data-cta="whatsapp"
    data-origem={origem}
    onClick={() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "click_whatsapp", cta_label: label, origem });
    }}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-base font-semibold transition-smooth",
      variante === "primario"
        ? "gradient-domous text-white shadow-domous hover:opacity-90"
        : "border-2 border-primary/60 text-current hover:bg-primary/10",
      className,
    )}
  >
    <MessageCircle className="w-5 h-5" aria-hidden />
    {label}
  </a>
);

export default BotaoWhatsApp;
