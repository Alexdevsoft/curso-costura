import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Nunca costurei na vida. Vou conseguir aprender?",
      answer: "Sim! Este curso foi criado especialmente para iniciantes absolutas. Começamos do zero, explicando cada passo de forma clara e sem pressa. Muitas de nossas alunas nunca tinham tocado numa máquina de costura antes e hoje costuram com confiança.",
    },
    {
      question: "Preciso ter uma máquina de costura profissional?",
      answer: "Não! Uma máquina doméstica simples é suficiente para acompanhar todo o curso. Não é necessário investir em equipamentos caros. Se você ainda não tem máquina, damos dicas de modelos acessíveis para iniciantes.",
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso é vitalício! Isso significa que você pode assistir às aulas quantas vezes quiser, quando quiser, para sempre. Além disso, todas as atualizações futuras do curso estarão disponíveis para você sem custo adicional.",
    },
    {
      question: "Posso assistir às aulas pelo celular?",
      answer: "Sim! O curso é 100% online e pode ser acessado pelo celular, tablet ou computador. Você pode estudar de onde estiver, no horário que for mais conveniente para você.",
    },
    {
      question: "E se eu não gostar do curso?",
      answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita, basta solicitar o reembolso que devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia.",
    },
    {
      question: "Quanto tempo leva para aprender?",
      answer: "Isso depende do seu ritmo e disponibilidade. O curso é dividido em módulos que você pode assistir no seu tempo. Algumas alunas completam em poucas semanas estudando um pouco por dia, outras preferem ir mais devagar. O importante é que você aprenda com qualidade.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-rose-soft text-primary font-body font-medium rounded-full text-sm mb-4">
              ❓ Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b-border"
                >
                  <AccordionTrigger className="font-body font-semibold text-left text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional help */}
          <div className="mt-8 text-center">
            <p className="font-body text-muted-foreground">
              Ainda tem dúvidas? Entre em contato conosco pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
