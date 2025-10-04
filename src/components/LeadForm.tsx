import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { HeroVariant } from "@/hooks/useUTMParams";

const formSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter ao menos 2 caracteres").max(100),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  site_instagram: z.string().trim().min(3, "Campo obrigatório").max(255),
  tipo_negocio: z.string().min(1, "Selecione o tipo de negócio"),
  faturamento: z.string().min(1, "Selecione a faixa de faturamento"),
  objetivo: z.string().min(1, "Selecione o objetivo principal"),
});

interface LeadFormProps {
  variant: HeroVariant;
}

const LeadForm = ({ variant }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      site_instagram: "",
      tipo_negocio: "",
      faturamento: "",
      objetivo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", { ...values, variant });
    
    const event = new CustomEvent('lead_submit', { detail: { ...values, variant } });
    window.dispatchEvent(event);
    
    toast.success("Recebido! Vamos te responder em minutos.", {
      description: "Nossa equipe já está analisando seu caso.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(83) 99999-9999" 
                  {...field}
                  onChange={(e) => field.onChange(formatWhatsApp(e.target.value))}
                  maxLength={15}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="site_instagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site ou Instagram</FormLabel>
              <FormControl>
                <Input placeholder="www.seusite.com ou @perfil" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tipo_negocio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de negócio</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saude">Saúde e bem-estar</SelectItem>
                  <SelectItem value="servicos">Serviços</SelectItem>
                  <SelectItem value="alimentacao">Alimentação</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="faturamento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faixa de faturamento mensal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0-10k">Até R$ 10 mil</SelectItem>
                  <SelectItem value="10k-50k">R$ 10 a 50 mil</SelectItem>
                  <SelectItem value="50k-100k">R$ 50 a 100 mil</SelectItem>
                  <SelectItem value="100k-500k">R$ 100 a 500 mil</SelectItem>
                  <SelectItem value="500k+">Acima de R$ 500 mil</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="objetivo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objetivo principal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="aumentar-vendas">Aumentar vendas</SelectItem>
                  <SelectItem value="reduzir-cac">Reduzir CAC</SelectItem>
                  <SelectItem value="estruturar-funil">Estruturar funil de vendas</SelectItem>
                  <SelectItem value="escalar-midia">Escalar mídia paga</SelectItem>
                  <SelectItem value="automatizar">Automatizar processos</SelectItem>
                  <SelectItem value="lancar">Lançar negócio/produto</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full gradient-domous text-white hover:opacity-90 shadow-domous h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Receber diagnóstico gratuito"}
        </Button>
      </form>
    </Form>
  );
};

export default LeadForm;
