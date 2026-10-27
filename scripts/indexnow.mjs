// Avisa Bing, Yandex e outros buscadores do IndexNow que as páginas do sitemap mudaram.
// O Bing alimenta a busca do ChatGPT, então isso acelera a Domous aparecer por lá.
// Roda depois do deploy: npm run publicar.
import fs from "node:fs";

const SITE = "https://domous.com.br";
const CHAVE = "950a20eddbae6a61c6bc2e16d2fa5280";
const sitemap = fs.readFileSync(new URL("../dist/sitemap.xml", import.meta.url), "utf-8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const resposta = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "domous.com.br", key: CHAVE, keyLocation: `${SITE}/${CHAVE}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${urls.length} URLs enviadas, resposta ${resposta.status}`);
