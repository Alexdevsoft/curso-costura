import { X, Check, Sparkles } from "lucide-react";

const ObjectionsSection = () => {
  const objections = [
    {
      myth: "É tarde demais para aprender",
      truth: "A melhor idade para aprender é agora. Muitas alunas começaram após os 50 e hoje costuram com maestria.",
    },
    {
      myth: "Costura é muito difícil",
      truth: "Com o método certo e explicação passo a passo, costura é simples. Você aprende no seu ritmo.",
    },
    {
      myth: "Preciso ter experiência prévia",
      truth: "O curso foi criado do zero para iniciantes absolutas. Não precisa saber nada antes.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-rose-soft text-primary font-body font-medium rounded-full text-sm mb-4">
              Quebrando Mitos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Talvez Você Esteja Pensando...
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              É natural ter dúvidas antes de começar algo novo. Vamos esclarecer alguns pontos importantes:
            </p>
          </div>

          {/* Objection cards */}
          <div className="space-y-6 mb-12">
            {objections.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-rose transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Myth side */}
                  <div className="flex-1 p-6 bg-rose-soft/50 flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="font-body text-foreground font-medium line-through decoration-destructive/50">
                      {item.myth}
                    </p>
                  </div>
                  
                  {/* Truth side */}
                  <div className="flex-1 p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="font-body text-foreground">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance message */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 rounded-2xl border border-gold/20">
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-body text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              <strong>Costura não exige força, tecnologia avançada ou juventude.</strong> Exige apenas 
              <span className="text-primary font-semibold"> método claro</span>, 
              <span className="text-primary font-semibold"> prática guiada</span> e 
              <span className="text-primary font-semibold"> paciência consigo mesma</span>.
              <br /><br />
              E tudo isso você encontra neste curso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
