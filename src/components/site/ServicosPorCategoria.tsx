import { ChevronRight } from "lucide-react";
import { categorias, servicos } from "@/data/servicos";

// Serviços agrupados por categoria, com link pra cada página.
const ServicosPorCategoria = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {categorias.map((cat) => (
      <div key={cat} className="bg-card rounded-2xl border border-border p-6 shadow-card">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{cat}</h3>
        <ul className="space-y-1">
          {servicos
            .filter((s) => s.categoria === cat)
            .map((s) => (
              <li key={s.slug}>
                <a href={`/servicos/${s.slug}/`} className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 hover:bg-secondary/60 transition-smooth">
                  <span>
                    <span className="block font-semibold">{s.nome}</span>
                    <span className="block text-sm text-muted-foreground leading-snug mt-0.5">{s.descricao.split(". ")[0].slice(0, 110)}{s.descricao.split(". ")[0].length > 110 ? "…" : ""}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
              </li>
            ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ServicosPorCategoria;
