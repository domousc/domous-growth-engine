// Worker do Cloudflare: redireciona www pro domínio principal e entrega os
// arquivos estáticos gerados pelo build (pasta dist).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.domous.com.br") {
      url.hostname = "domous.com.br";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
