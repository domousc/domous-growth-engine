// Resultados publicados na landing kairolucas.com.br.
// Regra do Kairo (26/10/2026): pode mostrar resultado e pode listar cliente,
// mas nunca ligar um resultado a um cliente. Por isso aqui só entra o segmento.

export type Resultado = {
  id: string;
  segmento: string;
  titulo: string;
  metricas: { rotulo: string; valor: string }[];
};

export const resultados: Resultado[] = [
  {
    id: 'loja-de-moveis',
    segmento: 'Loja de móveis',
    titulo: 'R$ 300 mil a mais por mês em 3 meses',
    metricas: [
      { rotulo: 'Faturamento mensal', valor: '+R$ 300 mil' },
      { rotulo: 'Prazo', valor: '3 meses' },
    ],
  },
  {
    id: 'clinica-de-estetica',
    segmento: 'Clínica de estética',
    titulo: '+130% de faturamento em 3 meses',
    metricas: [
      { rotulo: 'Faturamento', valor: '+130%' },
      { rotulo: 'Prazo', valor: '3 meses' },
      { rotulo: 'ROAS', valor: '8,2x' },
    ],
  },
  {
    id: 'consultorio-odontologico',
    segmento: 'Consultório odontológico',
    titulo: '87% de comparecimento em 15 dias',
    metricas: [
      { rotulo: 'Custo por agendamento', valor: 'R$ 18' },
      { rotulo: 'Comparecimento', valor: '87%' },
    ],
  },
  {
    id: 'corretor-de-imoveis',
    segmento: 'Corretor de imóveis',
    titulo: 'Venda fechada com R$ 350 de verba',
    metricas: [
      { rotulo: 'Verba de mídia', valor: 'R$ 350' },
      { rotulo: 'Resultado', valor: 'Venda fechada' },
    ],
  },
  {
    id: 'loja-de-moda',
    segmento: 'Loja de moda',
    titulo: 'Conversão do site de 2,1% pra 3,4%',
    metricas: [
      { rotulo: 'Conversão', valor: '2,1% → 3,4%' },
      { rotulo: 'Ticket médio', valor: 'R$ 187 → R$ 221' },
    ],
  },
  {
    id: 'restaurante',
    segmento: 'Restaurante',
    titulo: 'R$ 70 mil a mais de faturamento em 8 meses',
    metricas: [
      { rotulo: 'Faturamento extra', valor: 'R$ 70 mil' },
      { rotulo: 'Prazo', valor: '8 meses' },
    ],
  },
];

export const resultadoPorId = (id: string) => resultados.find((r) => r.id === id);
