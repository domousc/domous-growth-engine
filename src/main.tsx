import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const raiz = document.getElementById("root")!;

// Página pré-renderizada (site publicado): só liga o React no HTML que já veio.
// Página vazia (preview do Lovable, npm run dev): renderiza do zero.
if (raiz.hasChildNodes()) hydrateRoot(raiz, <App />);
else createRoot(raiz).render(<App />);
