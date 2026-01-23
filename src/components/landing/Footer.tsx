import { Scissors, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="font-display text-xl font-bold">Corte e Costura</span>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm max-w-md mx-auto">
              Aprenda corte e costura do zero com um método simples e acolhedor,
              criado especialmente para mulheres adultas.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p className="font-body">
              © {currentYear} Fátima costurando idéias. Todos os direitos reservados.
            </p>
            <p className="font-body flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para você
            </p>
          </div>

          {/* Legal links */}
          <div className="flex justify-center gap-6 mt-6 text-xs text-primary-foreground/50">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
