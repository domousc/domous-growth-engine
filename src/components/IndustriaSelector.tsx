import { useState } from "react";

export type Industria = "moda" | "saude" | "servicos" | "alimentacao" | "arquitetura" | "todas";

interface IndustriaSelectorProps {
  selectedIndustria: Industria;
  onSelectIndustria: (industria: Industria) => void;
}

const IndustriaSelector = ({ selectedIndustria, onSelectIndustria }: IndustriaSelectorProps) => {
  const industrias: { id: Industria; label: string }[] = [
    { id: "todas", label: "Todas" },
    { id: "moda", label: "Moda" },
    { id: "saude", label: "Saúde" },
    { id: "servicos", label: "Serviços" },
    { id: "alimentacao", label: "Alimentação" },
    { id: "arquitetura", label: "Arquitetura" },
  ];

  const handleClick = (industria: Industria) => {
    onSelectIndustria(industria);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: 'case_filter_click',
      filter_industria: industria
    });
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {industrias.map((industria) => (
        <button
          key={industria.id}
          onClick={() => handleClick(industria.id)}
          className={`px-6 py-2 rounded-full font-semibold transition-smooth ${
            selectedIndustria === industria.id
              ? "gradient-domous text-white shadow-domous"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          {industria.label}
        </button>
      ))}
    </div>
  );
};

export default IndustriaSelector;
