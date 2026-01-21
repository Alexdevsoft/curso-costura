import { Button } from "@/components/ui/button";
import { Scissors, Heart } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = () => {
    // TODO: Replace with actual Hotmart checkout link
    window.open("https://pay.hotmart.com/B97955905Y?off=pzkq27nl", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-rose-soft via-background to-cream overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Scissors className="w-16 h-16 text-primary rotate-45" />
      </div>
      <div className="absolute top-40 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-12 h-12 text-gold" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-15 animate-float" style={{ animationDelay: "2s" }}>
        <Scissors className="w-10 h-10 text-primary -rotate-12" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Aprenda Corte e Costura do Zero e Conquiste{" "}
            <span className="text-primary">Autonomia</span>,{" "}
            <span className="text-gradient-gold">Confiança</span> e Uma Nova Habilidade Útil Para a Vida
          </h1>
          {/* 🎥 Vídeo embed */}
          <div className="w-full max-w-sm mb-8 animate-fade-in">
            <div className="relative aspect-[9/16] rounded-2xl shadow-rose overflow-hidden border-4 border-card">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://youtube.com/shorts/vUCTNS6ve-Q?feature=share"
                title="Vídeo de introdução"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>



          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Um método simples, didático e comprovado, criado especialmente para{" "}
            <strong className="text-foreground">mulheres maduras</strong> que querem aprender com tranquilidade, no seu ritmo e sem complicação.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-lg px-8 py-6 rounded-full shadow-rose hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              SIM, QUERO APRENDER CORTE E COSTURA AGORA
            </Button>
            <p className="text-sm text-muted-foreground mt-4 font-body">
              ✨ Acesso imediato após a confirmação do pagamento
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--cream))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
