# Rotina diária do Domous News (1 notícia por dia)

Domous News é a seção de notícias do site (domous.com.br/news). Todo dia saem **uma ou duas** notícias de marketing, vendas, negócios ou inteligência artificial que mexe com a receita das empresas, com a leitura da Domous. Se algum passo falhar, **não publique**: registre em `docs/blog/registro.md`, faça commit só do registro e pare.

## Público
Diretores e gerentes de marketing, diretores comerciais e donos de empresas grandes (acima de R$ 1 milhão/mês), muitos com formação em marketing tradicional. Querem saber o que mudou, se afeta a empresa deles e o que fazer. Não querem hype nem jargão de growth hacker.

## 1. Preparar
- `git checkout main && git pull`; `npm install` se faltar `node_modules`.
- Data de hoje no fuso de João Pessoa: `TZ=America/Fortaleza date +%F`.
- Conte as notícias (`"tipo": "noticia"`) com `publicado` igual a hoje em `src/content/posts/`:
  - **0:** edição normal, siga o passo a passo.
  - **1:** edição extra (a rotina roda de manhã e à tarde). Só publique se achar uma notícia com **nota 20 ou mais** no passo 3 e de **assunto diferente** da já publicada hoje. Se não achar, pare sem publicar e sem registrar (é normal sair só uma por dia).
  - **2 ou mais:** pare.

## 2. Garimpar a pauta (ferramenta WebSearch)
Procure o que saiu nas **últimas 48 horas**. Faça de 6 a 10 buscas cobrindo:
- Plataformas de anúncio: Meta (Facebook, Instagram, WhatsApp Business), Google (Ads, Search, Maps, YouTube), TikTok, LinkedIn, anúncios no ChatGPT e em outras IAs.
- IA aplicada a marketing, vendas e atendimento: lançamentos e mudanças de OpenAI, Google, Anthropic, Microsoft, Meta que afetem empresas.
- Varejo, e-commerce, consumo e mercado imobiliário no Brasil.
- Economia que mexe com vendas: juros, crédito, consumo, regras novas pra empresas (tributação, LGPD, defesa do consumidor, publicidade).
- Pesquisas e estudos com dado novo sobre marketing, vendas ou comportamento do consumidor.

Fontes preferidas: Meio & Mensagem, Propmark, Valor Econômico, Exame, InfoMoney, NeoFeed, Folha, Estadão, Tecnoblog, Núcleo, Mobile Time, E-commerce Brasil, blogs oficiais das plataformas (Meta, Google, OpenAI, Anthropic), TechCrunch, The Verge, Adweek, Search Engine Land, PPC Land.

## 3. Escolher a notícia
Dê nota de 1 a 5 em cada critério e escolha a maior soma:
1. Mexe com receita, custo de mídia ou processo comercial de empresa grande?
2. O leitor precisa agir (prazo, mudança de regra, oportunidade nova)?
3. É de agora (até 48h) e ainda não foi coberta no Domous News (ver `docs/blog/registro.md`)?
4. Dá pra confirmar em pelo menos **duas fontes**, ou numa fonte oficial?
5. A Domous tem algo a dizer (tráfego, WhatsApp, IA, medição, comercial)?

Fora: política partidária e eleição, fofoca de empresa, celebridade, cripto especulativo, notícia sem impacto em negócio, rumor sem confirmação.

## 4. Conferir
- Leia a matéria original de pelo menos duas fontes (WebFetch). Datas, números e nomes só se baterem nas fontes.
- Se uma fonte mais nova corrige outra (adiamento, recuo, desmentido), a notícia é a versão mais nova.
- Nunca copie texto: escreva com as suas palavras. Citação literal só curta, entre aspas e com a fonte.

## 5. Escrever
Arquivo `src/content/posts/<slug>.ts`, formato de `src/content/posts/meta-adia-novos-termos-comerciais-20-de-novembro.ts`:
- `editoria`: uma de `marketing`, `vendas`, `negocios`, `ia`, `varejo` (a que o leitor procuraria).
- `tipo: "noticia"`, `nivel: "brasil"` (ou `"joao-pessoa"`/`"paraiba"` se for local), `palavraChave`: como as pessoas vão buscar a notícia.
- `titulo`: "<h1> | Domous News". O h1 diz o fato e o impacto: "<Quem> <fez o quê>: o que muda pra <quem>".
- `resposta`: 2 a 4 frases com o fato, a data e por que importa.
- Seções, nesta ordem: **O que aconteceu** (fato, data, fonte) · detalhes que precisam ser explicados (1 ou 2 seções) · **Por que isso importa pra tua empresa** · **O que fazer agora** (3 a 5 ações práticas, em lista) · **Leitura da Domous** (opinião curta, primeira pessoa do plural, a partir do que a Domous defende em `docs/blog/ESTRATEGIA.md`).
- `faq`: 2 ou 3 perguntas que alguém faria ao ler a manchete.
- `fontes`: no mínimo 2, com veículo, data e link.
- `servicos`: 1 a 3 slugs válidos de `src/data/servicos.ts`.
- Tamanho: 450 a 800 palavras.

## 6. Regras de texto
As mesmas de `docs/blog/ROTINA.md` (sem travessão, sem contraste "não é X, é Y" / "X, e não Y", sem palavras vazias, sem número inventado, sem citar cliente da Domous, sem promessa de resultado). Notícia ainda exige: tom sóbrio, nada de sensacionalismo, nada de "bomba", "urgente", "chocante".

## 7. Conferir, publicar e registrar
- `grep -c "—" src/content/posts/<slug>.ts` = 0; `npx tsc --noEmit -p tsconfig.app.json` limpo; `npm run build` gerando `dist/news/<slug>/index.html`.
- Linha em `docs/blog/registro.md`: `- <data> · noticia · <palavra-chave> · https://domous.com.br/news/<slug>/`
- `git add src/content/posts/<slug>.ts docs/blog/registro.md`, commit `News: <h1>` com `Co-Authored-By: Claude <noreply@anthropic.com>` na última linha, `git push origin main`. O Cloudflare publica sozinho. Não rode `wrangler` nem `scripts/indexnow.mjs`.
- Conflito no push: `git pull --rebase` e tente uma vez; se falhar, registre e pare.

## 8. Resumo
3 linhas: manchete, fontes principais e URL. Se pulou, o motivo.
