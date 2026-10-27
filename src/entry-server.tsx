// Entrada usada só no build: renderiza cada rota em HTML (ver scripts/prerender.mjs).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provedores, Rotas } from "./App";

export { rotas, rota404 } from "./seo/rotas";

export function render(url: string) {
  return renderToString(
    <Provedores>
      <StaticRouter location={url}>
        <Rotas />
      </StaticRouter>
    </Provedores>,
  );
}
