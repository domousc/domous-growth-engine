// Worker do Cloudflare: redireciona www pro domínio principal e entrega os
// arquivos estáticos gerados pelo build (pasta dist).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.domous.com.br") {
      url.hostname = "domous.com.br";
      return Response.redirect(url.toString(), 301);
    }
    // Os guias mudaram pra /blog/ em 27/10/2026.
    if (url.pathname === "/guias" || url.pathname.startsWith("/guias/")) {
      url.pathname = url.pathname.replace(/^\/guias(\/feed\.xml)?/, (m, feed) => (feed ? "/blog/feed.xml" : "/blog"));
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
