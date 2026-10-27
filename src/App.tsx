import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PaginaDetalhe from "./pages/PaginaDetalhe";
import Indice from "./pages/Indices";
import { Cases, Guia, QuantoCusta, Sobre } from "./pages/Avulsas";
import { BlogIndice, PostPagina } from "./pages/Blog";
import LandingAnuncio from "./pages/LandingAnuncio";
import Autor from "./pages/Autor";
import NotFound from "./pages/NotFound";
import { rotaPorPath } from "./seo/rotas";

const queryClient = new QueryClient();

// No site publicado cada página já sai com o <head> certo (scripts/prerender.mjs).
// Isto só atualiza o título quando a navegação acontece no navegador, como no preview do Lovable.
const TituloDaPagina = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const rota = rotaPorPath(pathname);
    document.title = rota.titulo;
    document.querySelector('meta[name="description"]')?.setAttribute("content", rota.descricao);
  }, [pathname]);
  return null;
};

// Toda página nova precisa de uma entrada em src/seo/rotas.ts também.
export const Rotas = () => (
  <>
    <TituloDaPagina />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servicos/" element={<Indice tipo="servicos" />} />
      <Route path="/servicos/:slug/" element={<PaginaDetalhe tipo="servicos" />} />
      <Route path="/segmentos/" element={<Indice tipo="segmentos" />} />
      <Route path="/segmentos/:slug/" element={<PaginaDetalhe tipo="segmentos" />} />
      <Route path="/quanto-custa/" element={<QuantoCusta />} />
      <Route path="/cases/" element={<Cases />} />
      <Route path="/sobre/" element={<Sobre />} />
      <Route path="/sobre/kairo-lucas/" element={<Autor />} />
      <Route path="/como-escolher-agencia-de-trafego-pago/" element={<Guia />} />
      <Route path="/blog/" element={<BlogIndice />} />
      <Route path="/blog/:slug/" element={<PostPagina />} />
      <Route path="/lp/:slug/" element={<LandingAnuncio />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export const Provedores = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <Provedores>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </Provedores>
);

export default App;
