import helenaImg from "@/assets/testimonials/helena-ribeiro.png";
import julianaImg from "@/assets/testimonials/juliana-lemos.png";
import mariaAntoniaImg from "@/assets/testimonials/maria-antonia.png";
import marianaImg from "@/assets/testimonials/mariana-silva.png";
import ritaImg from "@/assets/testimonials/rita-queiroz.png";

const TestimonialsSection = () => {
  const testimonials = [
    { image: helenaImg, alt: "Depoimento Helena Ribeiro de Lima" },
    { image: julianaImg, alt: "Depoimento Juliana Lemos" },
    { image: mariaAntoniaImg, alt: "Depoimento Maria Antônia Freitas" },
    { image: marianaImg, alt: "Depoimento Mariana da Silva Santos" },
    { image: ritaImg, alt: "Depoimento Rita Queiroz" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-testimonials">
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
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-rose transition-shadow duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
