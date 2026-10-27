import { Bot, ChevronRight, Database, Gauge, Plug, RefreshCw, Send } from "lucide-react";

const itens = [
  { icone: Bot, titulo: "Agente de IA no WhatsApp", texto: "Atende 24 horas, tira dúvida com base no que a empresa vende, qualifica e passa pro vendedor quem está pronto pra comprar." },
  { icone: Database, titulo: "Lead direto no CRM", texto: "Cada contato entra no CRM na hora, com a campanha de origem. Ninguém mais perde lead em print de conversa." },
  { icone: Send, titulo: "Venda volta pra plataforma", texto: "A venda registrada é enviada pro Meta e pro Google, que passam a buscar mais gente parecida com quem comprou." },
  { icone: RefreshCw, titulo: "Lembrete e retomada", texto: "Confirmação de visita ou consulta, lembrete no dia e retomada automática de quem parou de responder." },
  { icone: Plug, titulo: "Integração com o que já existe", texto: "Conexão por API com ERP, CRM, agenda e as ferramentas que a operação já usa." },
  { icone: Gauge, titulo: "Painel que se atualiza sozinho", texto: "Investimento, conversas, vendas e receita num link fixo, sem ninguém montar planilha no fim do mês." },
];

const IaAutomacao = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <p className="text-sm font-semibold text-primary mb-2">IA e automação</p>
      <h2 className="mb-4 max-w-3xl">O trabalho repetitivo fica com a máquina. O vendedor fica com quem vai comprar.</h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
        Lead que espera resposta esfria. A Domous implanta inteligência artificial e automação em volta do anúncio pra nenhum contato pago se
        perder no caminho.
      </p>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {itens.map(({ icone: Icone, titulo, texto }) => (
          <li key={titulo} className="bg-card rounded-2xl border border-border p-6 shadow-card">
            <span className="inline-flex w-10 h-10 rounded-xl gradient-domous items-center justify-center mb-4">
              <Icone className="w-5 h-5 text-white" aria-hidden />
            </span>
            <h3 className="text-lg font-bold mb-2">{titulo}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{texto}</p>
          </li>
        ))}
      </ul>
      <a href="/servicos/crm-ia-whatsapp/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
        Ver como funciona o CRM com IA <ChevronRight className="w-4 h-4" aria-hidden />
      </a>
    </div>
  </section>
);

export default IaAutomacao;
