# Estratégia editorial do blog da Domous

Atualizado em 27/10/2026. Lido pela rotina diária antes de escrever cada post.

## Objetivo
Fazer a Domous ser encontrada e citada quando um empresário pergunta ao Google, ao ChatGPT, ao Gemini, ao Perplexity ou ao Claude sobre tráfego pago, vendas pelo WhatsApp, IA no atendimento e marketing pro setor dele. Cada post precisa: (1) responder uma pergunta real, (2) mostrar que a Domous entende do assunto, (3) levar pra uma página de serviço e pro WhatsApp.

## Público
Dono, sócio ou gestor de empresa com produto validado que vende pelo WhatsApp. Foco principal: empresas acima de R$ 1 milhão/mês, sobretudo construtoras e incorporadoras, distribuidores e atacado, varejo de ticket alto (móveis), clínicas. Quem pesquisa costuma ser o filho, o gerente comercial ou o analista de marketing; quem decide é o dono.

## Três níveis geográficos
| Nível | Pra quê | Exemplo de palavra-chave | Proporção |
|---|---|---|---|
| João Pessoa | Intenção local, menos concorrência, vira contato | "como aparecer no google maps", "tráfego pago joão pessoa" | ~30% |
| Paraíba | Autoridade regional, Raio-X de empresas paraibanas, pauta pra imprensa local | "marketing de construtora na paraíba" | ~20% |
| Brasil | Volume de busca e citação em IA; o leitor de fora conhece a Domous por aqui | "meta ads ou google ads", "como calcular cac" | ~50% |

Mesmo no nível Brasil, o post usa exemplo e contexto de João Pessoa quando fizer sentido (é o que diferencia a Domous de blog genérico).

## Cinco tipos de post
| Tipo | O que é | Frequência alvo |
|---|---|---|
| Guia | Como fazer, quanto custa, o que é, qual escolher. Responde uma pergunta de busca. | 4 por semana |
| Raio-X (analise) | Análise do marketing de uma empresa da Paraíba que **não é cliente**, no tom aprovado: empresa protagonista, admiração, três melhorias gentis, todo dado com fonte. | 1 por semana |
| Opinião | Ponto de vista do Kairo, assinado por ele, a partir do que ele já defende (ver "O que o Kairo defende"). | 1 por semana |
| Estudo | Dado original (ex.: levantamento na Biblioteca de Anúncios). Precisa de coleta local; a rotina não faz. | quando houver |
| Case | História de resultado, sempre sem identificar o cliente. Só com insumo do Kairo. | quando houver |

## Grupos de tema (cada post aponta pra um pilar)
| Grupo | Pilar no site (campo `servicos`) |
|---|---|
| Tráfego pago (Meta, Google, TikTok, criativo, verba) | trafego-pago, meta-ads, google-ads, tiktok-ads |
| WhatsApp, atendimento e IA | crm-ia-whatsapp, automacao-e-integracoes, consultoria-de-marketing-e-vendas |
| Medição e retorno (CAC, ROAS, painel, API de Conversões) | mensuracao-e-painel |
| Conversão (landing page, oferta, roteiro) | landing-page-e-cro, consultoria-de-marketing-e-vendas |
| Imobiliário e construtoras | book-de-empreendimento, meta-ads, landing-page-e-cro |
| Varejo, distribuidores e e-commerce | ecommerce, criacao-de-loja-virtual, google-ads |
| Negócio local e João Pessoa | negocios-locais, google-ads |

## Como escolher a palavra-chave
- Uma palavra-chave principal por post, escrita como o empresário escreve. Fonte: autocompletar do Google (`https://suggestqueries.google.com/complete/search?client=firefox&hl=pt-BR&gl=br&q=TERMO`).
- Não repetir palavra-chave de post ou página que já existe (ver `src/content/posts/` e `src/data/servicos.ts`, `src/data/segmentos.ts`). Se o tema já tem página de serviço, o post ataca uma pergunta mais específica.
- Título no formato da pergunta ou da promessa, com a palavra-chave no começo. Ex.: "Remarketing: como vender pra quem já conversou e não comprou".

## O que o Kairo defende (base dos posts de opinião)
- Tráfego sozinho não resolve: antes do anúncio vêm oferta, página, jornada, atendimento no WhatsApp e operação.
- As métricas que importam são custo por cliente (CAC) e receita atribuída. Alcance e curtida não entram no relatório.
- No Meta Ads atual, o criativo é a segmentação: variar persona e ângulo, testar um ângulo por vez.
- Depoimento e resultado de cliente vendem mais que o dono falando da própria empresa. Empresário quer ver resultado num negócio que ele conhece.
- A conversa que o Meta reporta não é a conversa que chega no WhatsApp; medir a diferença é obrigatório.
- Lead esfria rápido: velocidade de resposta vale tanto quanto a campanha.
- Plano e meta de custo por cliente antes de investir o primeiro real.

## Fora do blog
Política e eleição, notícia do setor sem análise, conteúdo que cite cliente da Domous ou use dado de cliente, promessa de resultado, "diagnóstico gratuito".
