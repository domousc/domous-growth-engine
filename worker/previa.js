// Worker da prévia (domous-site-previa, endereço workers.dev). Usa o mesmo worker
// do site, mas pede pro Google não indexar: a prévia não pode competir com o
// domous.com.br nem ser vista como conteúdo duplicado.
import site from "./index.js";

export default {
  async fetch(request, env, ctx) {
    const resp = await site.fetch(request, env, ctx);
    const r = new Response(resp.body, resp);
    r.headers.set("X-Robots-Tag", "noindex, nofollow");
    return r;
  },
};
