import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
  lgpd_consent: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
  honeypot: z.string().max(0), // Anti-spam
});

interface LeadFormProps {
  variant: HeroVariant;
  selectedIndustria?: string;
}

const LeadForm = ({ variant, selectedIndustria = "todas" }: LeadFormProps) => {
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
      lgpd_consent: false,
      honeypot: "",
    },
  });

  const tipoNegocioLabels: Record<string, string> = {
    ecommerce: "E-commerce",
    saude: "Saúde e bem-estar",
    servicos: "Serviços",
    alimentacao: "Alimentação",
    educacao: "Educação",
    outro: "Outro",
  };

  const faturamentoLabels: Record<string, string> = {
    "0-10k": "Até R$ 10 mil",
    "10k-50k": "R$ 10 a 50 mil",
    "50k-100k": "R$ 50 a 100 mil",
    "100k-500k": "R$ 100 a 500 mil",
    "500k+": "Acima de R$ 500 mil",
  };

  const objetivoLabels: Record<string, string> = {
    "aumentar-vendas": "Aumentar vendas",
    "reduzir-cac": "Reduzir CAC",
    "estruturar-funil": "Estruturar funil de vendas",
    "escalar-midia": "Escalar mídia paga",
    "automatizar": "Automatizar processos",
    "lancar": "Lançar negócio/produto",
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.honeypot) return;

    setIsSubmitting(true);

    const tipoLabel = tipoNegocioLabels[values.tipo_negocio] || values.tipo_negocio;
    const fatLabel = faturamentoLabels[values.faturamento] || values.faturamento;
    const objLabel = objetivoLabels[values.objetivo] || values.objetivo;

    const message = `Olá, quero saber mais sobre a assessoria da Domous. Vim do site. Meu nome é ${values.nome}, tenho um negócio no setor de ${tipoLabel}, o instagram é ${values.site_instagram}, minha faixa de faturamento mensal é ${fatLabel} e meu objetivo é ${objLabel}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5583981195186&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

    // DataLayer tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_submit',
      form_variant: variant,
      form_industria: selectedIndustria,
    });

    setIsSubmitting(false);
    window.open(whatsappUrl, '_blank');
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

        {/* LGPD Consent */}
        <FormField
          control={form.control}
          name="lgpd_consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm">
                  Aceito a{" "}
                  <a href="/privacidade" target="_blank" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  e autorizo o uso dos meus dados conforme LGPD
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* Honeypot (hidden) */}
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
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
