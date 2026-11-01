import { ChevronDown, ArrowUpRight, Megaphone, Handshake, ShoppingBag, Workflow, PenTool } from "lucide-react";
import { categorias, servicos } from "@/data/servicos";
import BotaoWhatsApp from "./BotaoWhatsApp";
const icones = [Megaphone, Handshake, ShoppingBag, Workflow, PenTool];
const ServicosPorCategoria = () => <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
  {categorias.map((cat,i) => { const Icone = icones[i % icones.length]; return <details key={cat} className="tool-details group border-b border-border py-5">
    <summary className="flex items-center gap-4"><Icone className="text-primary w-6 h-6 shrink-0" aria-hidden /><h3 className="text-lg flex-1">{cat}</h3><ChevronDown className="expand-icon text-primary w-5 h-5" /></summary>
    <ul className="pt-5 space-y-5">{servicos.filter(s=>s.categoria===cat).map(s=><li key={s.slug}><a href={`/servicos/${s.slug}/`} className="flex justify-between gap-4 font-semibold text-sm hover:text-primary">{s.nome}<ArrowUpRight size={16} className="text-primary shrink-0" /></a><p className="text-sm text-muted-foreground mt-2 mb-3 leading-relaxed">{s.descricao.split(". ")[0]}</p><BotaoWhatsApp origem={`servico-${s.slug}`} texto={`Oi! Quero solicitar um orçamento para ${s.nome}.`} label="Solicitar orçamento" className="h-9 text-xs px-4" /></li>)}</ul>
  </details>; })}
</div>;
export default ServicosPorCategoria;
