import Layout from "@/components/site/Layout";

const NotFound = () => (
  <Layout origem="404">
    <section className="section-dark purple-glow min-h-[70vh] pt-40 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-2xl">
        <h1 className="mb-6 text-white">Página não encontrada</h1>
        <p className="text-lg text-dark-muted mb-8">O endereço pode ter mudado. Volte pro início ou veja os serviços da Domous.</p>
        <div className="flex flex-wrap gap-3">
          <a href="/" className="inline-flex items-center rounded-full px-6 h-12 font-semibold gradient-domous text-white">Ir pro início</a>
          <a href="/servicos/" className="inline-flex items-center rounded-full px-6 h-12 font-semibold border-2 border-white/20 text-white">Ver serviços</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
