import { useEffect } from "react";
import { CheckCircle, MessageCircle, Calendar as CalendarIcon, Video, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDomous from "@/assets/logo-domous-black.png";

const Obrigado = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'thankyou_view' });
  }, []);

  const handleCalendlyClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'calendly_book' });
  };

  const proximosPassos = [
    "Aguarde nossa mensagem no WhatsApp (em minutos)",
    "Separe acessos: Facebook Business, Google Ads, site/loja",
    "Pense nos principais objetivos e gargalos do negócio",
    "Agende sua call estratégica (link abaixo)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Header simples */}
      <header className="py-6 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <img src={logoDomous} alt="DOMOUS" className="h-8" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full gradient-domous flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Recebemos seu contato!
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Vamos te responder em minutos via WhatsApp com uma análise inicial do seu cenário.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
            <h2 className="text-2xl font-bold mb-4">Quer agilizar ainda mais?</h2>
            <p className="text-muted-foreground mb-6">
              Inicie a conversa agora mesmo pelo WhatsApp e receba seu diagnóstico imediatamente.
            </p>
            <Button
              size="lg"
              className="w-full gradient-domous text-white hover:opacity-90 shadow-domous"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'click_whatsapp' });
                window.open('https://wa.me/5583981195186?text=' + encodeURIComponent('Acabei de preencher o formulário'), '_blank');
              }}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp agora
            </Button>
          </div>

          {/* Calendly */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-primary" />
              Agende sua call estratégica
            </h2>
            <p className="text-muted-foreground mb-6">
              Escolha o melhor horário para uma conversa de 30 minutos com nosso time.
            </p>
            
            <div className="bg-secondary/30 rounded-xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                [Widget Calendly será inserido aqui]
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => {
                  handleCalendlyClick();
                  window.open('https://calendly.com/domous', '_blank');
                }}
              >
                Abrir agenda no Calendly
              </Button>
            </div>
          </div>

          {/* Próximos Passos */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
            <h2 className="text-2xl font-bold mb-6">Próximos passos</h2>
            <ul className="space-y-4">
              {proximosPassos.map((passo, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-domous flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-lg">{passo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vídeos Tutoriais */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Como enviar acessos</h3>
              </div>
              <div className="aspect-video bg-secondary/30 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Tutorial rápido mostrando como compartilhar acessos com segurança.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Como gravar depoimento</h3>
              </div>
              <div className="aspect-video bg-secondary/30 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Dicas para gravar um depoimento impactante caso queira compartilhar.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Obrigado;
