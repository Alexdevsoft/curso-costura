import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Helena",
      age: 52,
      location: "São Paulo, SP",
      text: "Nunca pensei que conseguiria aprender costura na minha idade. Hoje faço ajustes em casa com orgulho e já fiz até uma saia para minha neta!",
      rating: 5,
    },
    {
      name: "Tereza Cristina",
      age: 58,
      location: "Belo Horizonte, MG",
      text: "As explicações são tão claras que até eu, que nunca tinha usado uma máquina, consegui acompanhar. É como ter uma professora paciente ao seu lado.",
      rating: 5,
    },
    {
      name: "Sandra Regina",
      age: 47,
      location: "Curitiba, PR",
      text: "O melhor investimento que fiz. Agora consigo fazer pequenos consertos que antes pagava caro na costureira. Já economizei o valor do curso!",
      rating: 5,
    },
    {
      name: "Lúcia Fernanda",
      age: 61,
      location: "Porto Alegre, RS",
      text: "Estava aposentada e buscando algo para ocupar meu tempo. Encontrei muito mais que uma atividade - encontrei uma paixão!",
      rating: 5,
    },
    {
      name: "Rosângela",
      age: 54,
      location: "Rio de Janeiro, RJ",
      text: "Sempre tive medo de máquina de costura. Com esse curso, perdi o medo e ganhei uma habilidade que uso toda semana.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold-dark font-body font-medium rounded-full text-sm mb-4">
              ⭐ Depoimentos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossas Alunas Estão Dizendo
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Mulheres reais que transformaram suas vidas com a costura
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-sm border border-border p-6 hover:shadow-rose transition-shadow duration-300 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-rose-medium mb-4" />
                
                {/* Testimonial text */}
                <p className="font-body text-foreground mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-medium to-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      {testimonial.name}, {testimonial.age} anos
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
