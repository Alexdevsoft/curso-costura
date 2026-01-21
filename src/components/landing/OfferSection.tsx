import { Button } from "@/components/ui/button";
import { Check, Gift, Zap, Clock, Headphones, RefreshCw } from "lucide-react";

const OfferSection = () => {
  const handleCTAClick = () => {
    // TODO: Replace with actual Hotmart checkout link
    window.open("https://pay.hotmart.com/B97955905Y?off=pzkq27nl", "_blank");
  };

  const benefits = [
    { icon: Clock, text: "Acesso vitalício ao curso" },
    { icon: RefreshCw, text: "Atualizações futuras inclusas" },
    { icon: Headphones, text: "Suporte ao aluno" },
    { icon: Gift, text: "Bônus exclusivos" },
  ];

  return (
    <section id="oferta" className="py-16 lg:py-24 bg-gradient-to-b from-rose-soft via-cream to-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-body font-medium rounded-full text-sm mb-4">
              💰 Oferta Especial
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comece Sua Jornada Hoje
            </h2>
          </div>

          {/* Offer card */}
          <div className="bg-card rounded-3xl shadow-xl border-2 border-gold overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-rose-dark to-primary p-6 text-center">
              <p className="font-body text-primary-foreground/90 mb-2">
                Curso Completo de Corte e Costura
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Método Passo a Passo Para Iniciantes
              </h3>
            </div>

            {/* Pricing */}
            <div className="p-8 text-center border-b border-border">
              <div className="mb-4">
                <p className="font-body text-muted-foreground">
                  De <span className="line-through text-lg">R$ 297</span>
                </p>
              </div>
              <div className="mb-2">
                <span className="font-body text-lg text-muted-foreground">Por apenas</span>
              </div>
              <div className="mb-4">
                <span className="font-display text-5xl md:text-6xl font-bold text-primary">R$ 197</span>
                <span className="font-body text-xl text-muted-foreground ml-2">à vista</span>
              </div>
              <p className="font-body text-lg text-muted-foreground">
                ou <strong className="text-foreground">12x no cartão</strong>
              </p>
              <div className="mt-4 inline-block px-4 py-2 bg-gold/20 rounded-full">
                <p className="font-body text-sm text-gold-dark font-medium">
                  ✨ Pagamento único • Sem mensalidades
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="p-8 bg-cream/50">
              <p className="font-body font-semibold text-foreground mb-4 text-center">
                O que você recebe:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-body text-sm text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-rose-dark hover:from-primary/90 hover:to-rose-dark/90 text-primary-foreground font-body font-bold text-lg py-7 rounded-full shadow-rose hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Zap className="w-5 h-5 mr-2" />
                SIM, QUERO APRENDER CORTE E COSTURA AGORA
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4 font-body">
                🔒 Compra 100% segura • Acesso imediato após o pagamento
              </p>
            </div>
          </div>

          {/* Urgency message */}
          <div className="mt-8 text-center">
            <div className="inline-block p-4 bg-card rounded-xl border border-gold/30 shadow-sm">
              <p className="font-body text-foreground">
                ⏳ <strong>Atenção:</strong> Esta oferta com valor promocional pode sair do ar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
