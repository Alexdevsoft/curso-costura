import { Play, BookOpen, Layers, Heart, Volume2, Clock } from "lucide-react";

const MethodSection = () => {
  const features = [
    {
      icon: Play,
      title: "Aulas Gravadas",
      description: "Assista quando quiser, quantas vezes precisar, sem pressa",
    },
    {
      icon: BookOpen,
      title: "Linguagem Simples",
      description: "Sem termos técnicos complicados, tudo explicado de forma clara",
    },
    {
      icon: Layers,
      title: "Ensino Progressivo",
      description: "Do básico ao avançado, cada aula construindo sobre a anterior",
    },
    {
      icon: Heart,
      title: "Tom Acolhedor",
      description: "Ambiente de aprendizado calmo, paciente e encorajador",
    },
    {
      icon: Volume2,
      title: "Áudio Claro",
      description: "Som nítido e fácil de acompanhar, sem distrações",
    },
    {
      icon: Clock,
      title: "Seu Ritmo",
      description: "Pause, volte e reveja quantas vezes precisar",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rose-medium/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold-dark font-body font-medium rounded-full text-sm mb-4">
              ✨ O Método
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Método de Corte e Costura<br />
              <span className="text-gradient-gold">Passo a Passo</span> Para Mulheres Adultas
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Um sistema de aprendizado desenvolvido pensando em quem nunca costurou, 
              mas sonha em criar suas próprias peças com confiança.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-rose-dark rounded-full">
              <p className="font-body text-primary-foreground font-medium">
                💖 Conteúdo organizado para evitar frustração e garantir seu progresso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
