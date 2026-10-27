// Dados da empresa. Tudo que aparece em mais de uma página (e no schema) sai daqui,
// pra nome, telefone e cidade ficarem idênticos em todo lugar.

export const site = {
  nome: 'Domous',
  assinatura: 'Business Performance',
  url: 'https://domous.com.br',
  descricao:
    'Agência de tráfego pago em João Pessoa. Meta Ads, Google Ads, loja virtual, CRM com IA no WhatsApp e consultoria comercial pra empresas que querem vender mais com previsibilidade.',
  cidade: 'João Pessoa',
  uf: 'PB',
  telefone: '+55 83 98119-5186',
  telefoneE164: '+5583981195186',
  whatsapp: '5583981195186',
  email: 'domousc@gmail.com',
  cnpj: '66.244.263/0001-54',
  instagram: 'https://instagram.com/domousc',
  instagramKairo: 'https://instagram.com/kairolucas',
  siteKairo: 'https://kairolucas.com.br',
  areaAtendida: ['João Pessoa', 'Cabedelo', 'Bayeux', 'Santa Rita', 'Campina Grande', 'Paraíba', 'Brasil'],
  empresasAtendidas: '+70',
  vendasGeradas: '+R$ 50 milhões',
};

// Link de WhatsApp com a origem marcada no fim da mensagem, igual à landing,
// pra saber de qual página o contato veio.
export function wa(texto: string, origem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`${texto} [site-${origem}]`)}`;
}
