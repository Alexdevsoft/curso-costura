import { CheckCircle2 } from "lucide-react";

const LearningSection = () => {
  const learnings = [
    "Como usar a máquina de costura com segurança e confiança",
    "Tirar medidas corretamente para peças que vestem bem",
    "Fazer cortes precisos em diferentes tecidos",
    "Dominar a costura reta e acabamentos profissionais",
    "Confeccionar peças úteis do início ao fim",
    "Fazer ajustes e consertos em roupas do dia a dia",
    "Escolher tecidos e materiais adequados para cada projeto",
    "Desenvolver uma habilidade valorizada para toda a vida",
  ];

  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-body font-medium rounded-full text-sm mb-4">
              📘 Conteúdo do Curso
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Habilidades práticas que você vai usar no seu dia a dia
            </p>
          </div>

          {/* Learning items */}
          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              {learnings.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-rose-soft/50 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-xl border border-gold/20">
              <p className="font-body text-center text-foreground">
                <span className="text-gold-dark font-semibold">🎯 Resultado:</span> Ao final do curso, 
                você terá confiança para criar, ajustar e consertar peças com suas próprias mãos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
