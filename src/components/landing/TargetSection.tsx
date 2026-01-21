import { Check, X } from "lucide-react";

const TargetSection = () => {
  const isFor = [
    "Mulheres de 35 a 60+ anos",
    "Donas de casa que querem ocupar o tempo com algo produtivo",
    "Iniciantes absolutas que nunca tocaram numa máquina",
    "Quem quer aprender em casa, no seu ritmo",
    "Mulheres que buscam uma nova habilidade prazerosa",
    "Quem deseja fazer ajustes nas próprias roupas",
  ];

  const notRequired = [
    "Experiência prévia com costura",
    "Máquina de costura profissional ou cara",
    "Conhecimento técnico ou de moda",
    "Muito tempo disponível por dia",
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Este Curso É Para Você?
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Veja se você se encaixa no perfil de nossas alunas
            </p>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Is For column */}
            <div className="bg-card rounded-2xl shadow-sm border border-green-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  Este curso É para você se:
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {isFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="font-body text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Required column */}
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="bg-gradient-to-r from-muted to-secondary p-6">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <X className="w-6 h-6 text-muted-foreground" />
                  Você NÃO precisa ter:
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {notRequired.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="font-body text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="p-4 bg-rose-soft rounded-lg">
                  <p className="font-body text-sm text-foreground text-center">
                    💡 <strong>Dica:</strong> Uma máquina simples e doméstica já é suficiente para começar!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
