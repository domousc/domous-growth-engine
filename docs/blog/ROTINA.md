# Rotina diária do blog (1 post por dia)

Instruções pro agente que roda todo dia. Siga na ordem. Se algum passo falhar, **não publique**: registre o erro em `docs/blog/registro.md`, faça commit só do registro e pare.

## 1. Preparar
- `git checkout main && git pull` (o Lovable também escreve neste repositório).
- `npm install` se `node_modules` não existir.
- Data de hoje no fuso de João Pessoa: `TZ=America/Fortaleza date +%F`. Use essa data em `publicado` e `atualizado`.
- Se já existe post **que não seja** `"tipo": "noticia"` com `publicado` igual à data de hoje em `src/content/posts/`, pare: o artigo do dia já saiu. (Notícias do Domous News têm rotina própria, `docs/blog/NEWS.md`, e não contam.)
- Esta rotina nunca escreve notícia (`tipo: "noticia"`).

## 2. Escolher o tema
- Leia `docs/blog/ESTRATEGIA.md` inteiro.
- Abra `docs/blog/pauta.json` e pegue o **primeiro** item com `"status": "pendente"` e `"execucao": "rotina"`.
- Equilíbrio da semana: se os últimos 6 posts publicados já têm um Raio-X e uma opinião, prefira o próximo guia da pauta; se faltam, prefira o próximo Raio-X ou opinião.
- **Se restarem menos de 5 itens pendentes de rotina**, antes de escrever crie 10 itens novos no fim da pauta: escolha temas dos grupos da estratégia que ainda não têm post, confira como as pessoas escrevem a busca (ferramenta WebSearch; o ambiente da nuvem bloqueia o acesso direto ao autocompletar do Google), não repita palavra-chave existente e siga o formato dos itens atuais.

## 3. Pesquisar
- **Guia e opinião:** use o seu conhecimento e confira com busca na web todo fato que não for opinião (regras de plataforma, nomes de produto, como algo funciona). Se não conseguir conferir, não afirme: escreva no condicional ou tire.
- **Raio-X:** leia o arquivo indicado em `fonte`. Use **só** dado marcado como conferido ou com fonte, e confira de novo na web os números antes de usar (podem ter mudado). O tom é o da versão `-v4-tom-aprovado`: a empresa é protagonista, admiração, o que ela faz muito bem, três ideias gentis em "o que eu faria se fosse minha", lição pra empresa do leitor, aviso "feito de fora, com dados públicos consultados em <mês/ano>; a <empresa> não é cliente da Domous". Proibido: "onde perde dinheiro", número que constrange, crítica, inferência apresentada como fato. Toda fonte vai no campo `fontes`.
- **Case:** só com insumo escrito pelo Kairo no item da pauta. Sem insumo, pule.
- Resultados que podem ser citados: **só** os de `src/data/resultados.ts`, sempre pelo segmento ("numa loja de móveis atendida pela Domous"), nunca pelo nome.

## 4. Escrever o arquivo
Crie `src/content/posts/<slug>.ts` no mesmo formato de `src/content/posts/raio-x-setai.ts` (tipo `Post` de `src/content/tipos.ts`):
- `titulo`: "<h1> | Domous", com a palavra-chave no começo do h1. Até ~70 caracteres no h1 quando der.
- `descricao`: 130 a 160 caracteres, com a palavra-chave.
- `resposta`: 2 a 4 frases que respondem a pergunta do título de forma direta e completa (é o trecho que Google e IA citam). A palavra-chave aparece aqui.
- `secoes`: 4 a 7 seções, subtítulos claros (de preferência em forma de pergunta ou de passo), parágrafos curtos, listas quando for passo a passo. Exemplo de João Pessoa quando couber.
- `faq`: 2 a 4 perguntas que as pessoas realmente fazem sobre o tema (use WebSearch pra ver as perguntas relacionadas), respostas de 1 a 3 frases.
- `servicos`: 2 ou 3 slugs que existem em `src/data/servicos.ts`.
- `tipo`, `nivel`, `palavraChave` iguais aos da pauta. `fontes` obrigatório em Raio-X e estudo; recomendado em guia que cite dado de terceiro.
- Tamanho: 700 a 1.300 palavras somando tudo.

## 5. Regras de texto (obrigatórias)
- Português do Brasil, voz da Domous: informal, direta, "a gente", frases curtas, como quem opera tráfego todo dia. Opinião é em primeira pessoa do Kairo ("eu").
- **Proibido:** travessão (—); construções de contraste "não é X, é Y", "mais do que X, é Y", "X, e não Y"; palavras vazias (mergulhe, potencialize, transforme, eleve, alavanque, desbloqueie); excesso de bullet onde parágrafo resolve; promessa de resultado; número, preço, prazo ou estatística inventados; citar cliente da Domous ou dado de cliente; política; "diagnóstico gratuito".
- Clínica e saúde: regras de publicidade dos conselhos, sem promessa de resultado.

## 6. Conferir
- `grep -c "—" src/content/posts/<slug>.ts` tem que dar 0.
- `npx tsc --noEmit -p tsconfig.app.json` sem erro.
- `npm run build` sem erro e com a página `dist/blog/<slug>/index.html` gerada.
- Releia o post inteiro uma vez procurando dado sem fonte, frase de IA genérica e as proibições acima. Corrija.

## 7. Publicar
- Em `docs/blog/pauta.json`: `"status": "publicado"` e `"data": "<hoje>"` no item.
- Acrescente uma linha em `docs/blog/registro.md`: `- <data> · <tipo> · <palavra-chave> · https://domous.com.br/blog/<slug>/`
- `git add src/content/posts/<slug>.ts docs/blog/pauta.json docs/blog/registro.md`
- Commit: `Blog: <h1>` e, na última linha, `Co-Authored-By: Claude <noreply@anthropic.com>`.
- `git push origin main`. O Cloudflare publica sozinho a partir do push (build + deploy + aviso IndexNow). Não rode `wrangler` nem `scripts/indexnow.mjs`.
- Se o push for recusado por conflito: `git pull --rebase` e tente uma vez. Se falhar de novo, registre e pare.

## 8. Resumo
Termine com 3 linhas: título publicado, palavra-chave e URL. Se pulou ou falhou, diga o motivo.
