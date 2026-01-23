import { Heart, Clock, Star, Smile } from "lucide-react";

const ConnectionSection = () => {
  const points = [
    {
      icon: Clock,
      text: "Sempre quis aprender costura, mas nunca teve tempo ou oportunidade",
    },
    {
      icon: Star,
      text: "Quer ocupar melhor o tempo livre com algo útil e gratificante",
    },
    {
      icon: Heart,
      text: "Deseja fazer suas próprias roupas, ajustes e customizações",
    },
    {
      icon: Smile,
      text: "Busca uma atividade prazerosa, criativa e que traga realização",
    },
  ];

  return (
    <section className="pt-2 pb-2 lg:pt-2 lg:pb-2 bg-section-benefits">
      {/* Mantive o pb-16/pb-24 para a parte de baixo da seção, 
    mas reduzi o pt-16/pt-24 para a parte de cima */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você Se Identifica Com Alguma Dessas Situações?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full" />
          </div>

          {/* Connection points */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-rose transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-body text-foreground text-lg leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Empathetic message */}
          <div className="bg-gradient-to-r from-rose-soft to-secondary p-8 md:p-12 rounded-2xl border border-rose-medium/30">
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center">
              Sabemos como é ter vontade de aprender algo novo, mas sentir que o momento nunca chega.
              A correria do dia a dia, as responsabilidades, e às vezes até a dúvida:
              <em className="text-primary font-medium"> "Será que ainda dá tempo?"</em>
            </p>
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center mt-6">
              A resposta é: <strong className="text-primary">sim, dá tempo!</strong> E mais do que isso —
              este é o momento perfeito para você.
            </p>
            <div className="mt-8 text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">
                "O método fcs foi desenvolvido especialmente para você que deseja aprender a costurar sem complicação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
