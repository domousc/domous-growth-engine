import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      pergunta: "Quando vejo os primeiros sinais?",
      resposta: "Entre semanas 2–4, dependendo do seu ciclo de venda. Negócios com ticket baixo e ciclo curto podem ver resultados já na primeira semana. Para tickets mais altos ou ciclos B2B, costuma levar 3-4 semanas para os primeiros sinais consistentes.",
    },
    {
      pergunta: "Atendem só em João Pessoa?",
      resposta: "Não! Atendemos Brasil inteiro de forma 100% remota. Nossa equipe já trabalhou com clientes em mais de 15 estados, de São Paulo ao Amazonas. O que importa é ter conexão boa para as calls semanais.",
    },
    {
      pergunta: "Preciso de equipe técnica no meu time?",
      resposta: "Não. A Domous implanta e treina tudo que for necessário. Você só precisa focar no seu negócio e nos fornecer os acessos quando solicitado. Cuidamos da parte técnica: pixels, integrações, automações, CRM, etc.",
    },
    {
      pergunta: "Fazem 'só tráfego'?",
      resposta: "Não fazemos 'só tráfego'. Fazemos marketing que vende. Tráfego é uma tática dentro do Sistema Domous, que inclui estratégia, funil, conteúdo, conversão, CRM e mídia. Se você quer só rodar anúncios sem estrutura, não somos a melhor opção.",
    },
    {
      pergunta: "Como vocês reportam os resultados?",
      resposta: "Painel semanal com as métricas que importam: CAC, AOV, LTV, taxa de conversão e próximos testes. Nada de 'alcance' e 'impressões' soltas. Você vê exatamente quanto está investindo e quanto está retornando, além do roadmap dos próximos sprints.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Perguntas frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dúvidas comuns de quem está avaliando a Domous
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-2xl border border-border shadow-card hover:shadow-domous transition-smooth overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                  <span className="text-lg font-bold pr-4">{faq.pergunta}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed pt-2 border-t border-border">
                    {faq.resposta}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
