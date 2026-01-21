import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const handleCTAClick = () => {
    // TODO: Replace with actual Hotmart checkout link
    window.open("https://pay.hotmart.com/B97955905Y?off=pzkq27nl", "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-cream via-rose-soft to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-dark">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Emotional closing */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Você Merece Conquistar<br />
            <span className="text-gradient-gold">Uma Nova Habilidade</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
              Imagine daqui a alguns meses... você, com suas próprias mãos,
              criando peças lindas, fazendo ajustes perfeitos, e sentindo aquele
              orgulho de quem <strong className="text-primary">aprendeu algo novo</strong>.
            </p>

            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
              A costura não é apenas uma habilidade — é uma forma de
              <span className="text-primary font-semibold"> autonomia</span>,
              <span className="text-primary font-semibold"> criatividade</span> e
              <span className="text-primary font-semibold"> autoestima</span>.
            </p>

            <p className="font-body text-lg text-muted-foreground">
              E o melhor: você pode começar <strong className="text-foreground">hoje mesmo</strong>,
              no conforto da sua casa, no seu próprio ritmo.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-gradient-to-r from-primary to-rose-dark hover:from-primary/90 hover:to-rose-dark/90 text-primary-foreground font-body font-bold text-lg px-10 py-7 rounded-full shadow-rose hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              QUERO COMEÇAR MINHA JORNADA AGORA
            </Button>
          </div>

          {/* Final reassurance */}
          <p className="font-body text-sm text-muted-foreground">
            🔒 Compra segura • 7 dias de garantia • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
