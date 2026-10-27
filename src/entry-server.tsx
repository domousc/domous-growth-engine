// Entrada usada só no build: renderiza cada rota em HTML (ver scripts/prerender.mjs).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provedores, Rotas } from "./App";

export { rotas, rota404 } from "./seo/rotas";
// Conteúdo bruto pro llms-full.txt (texto completo do site pras IAs).
export { servicos } from "./data/servicos";
export { segmentos } from "./data/segmentos";
export { home, quantoCusta, sobre, guia } from "./data/paginas";
export { resultados } from "./data/resultados";

export function render(url: string) {
  return renderToString(
    <Provedores>
      <StaticRouter location={url}>
        <Rotas />
      </StaticRouter>
    </Provedores>,
  );
}
