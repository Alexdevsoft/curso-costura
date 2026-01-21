import { Shield, CheckCircle, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-cream to-rose-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-lg border border-gold/30 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Shield icon */}
              <div className="lg:w-1/3 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/kGPR2d1R/7diasdegarantia.png"
                  alt="Selo de 7 dias de garantia"
                  className="w-56 max-w-full drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>


              {/* Right side - Content */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Garantia Incondicional de Satisfação
                </h2>

                <p className="font-body text-lg text-muted-foreground mb-6">
                  Queremos que você tenha total tranquilidade ao fazer sua inscrição.
                  Por isso, oferecemos <strong className="text-foreground">7 dias de garantia total</strong>.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="font-body text-foreground">
                      Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="font-body text-foreground">
                      Devolução de <strong>100% do valor pago</strong>, sem perguntas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="font-body text-foreground">
                      Processo simples e sem burocracia, direto pela plataforma Hotmart
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-body font-medium">
                  <ArrowRight className="w-4 h-4" />
                  <span>Risco zero para você experimentar o curso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <Shield className="w-4 h-4" />
              <span className="font-body text-sm">Plataforma Hotmart</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <CheckCircle className="w-4 h-4" />
              <span className="font-body text-sm">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <CheckCircle className="w-4 h-4" />
              <span className="font-body text-sm">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <CheckCircle className="w-4 h-4" />
              <span className="font-body text-sm">Celular, Tablet e PC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
