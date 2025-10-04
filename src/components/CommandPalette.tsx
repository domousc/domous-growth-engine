import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const sections = [
    { label: "Hero", anchor: "#hero" },
    { label: "Cases", anchor: "#cases" },
    { label: "Funil", anchor: "#funil" },
    { label: "Serviços", anchor: "#servicos" },
    { label: "CRM com IA", anchor: "#crm" },
    { label: "Como decidimos", anchor: "#decisao" },
    { label: "Primeiros 30 dias", anchor: "#primeiros-30-dias" },
    { label: "FAQ", anchor: "#faq" },
    { label: "Contato", anchor: "#contato" },
    { label: "Calculadora de Vazamento", anchor: "#leak" },
  ];

  const filteredSections = sections.filter((section) =>
    section.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'cmd_open' });
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavigate = (anchor: string, label: string) => {
    window.location.href = anchor;
    setIsOpen(false);
    setQuery("");
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'cmd_navigate',
      cmd_section: label
    });
  };

  return (
    <>
      {/* Hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-card">
          <p className="text-xs text-muted-foreground">
            Pressione <kbd className="px-2 py-1 bg-secondary rounded text-xs font-mono">/</kbd> para buscar
          </p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar seção..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
          </div>

          <div className="max-h-96 overflow-y-auto p-2">
            {filteredSections.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground text-sm">
                Nenhuma seção encontrada
              </div>
            ) : (
              <div className="space-y-1">
                {filteredSections.map((section) => (
                  <button
                    key={section.anchor}
                    onClick={() => handleNavigate(section.anchor, section.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-secondary transition-smooth text-left group"
                  >
                    <span className="font-medium">{section.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommandPalette;
