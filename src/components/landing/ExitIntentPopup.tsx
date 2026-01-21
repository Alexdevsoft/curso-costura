import { useState, useEffect } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Only add listener after a delay to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleCTAClick = () => {
    // TODO: Replace with actual Hotmart checkout link
    window.open("#checkout", "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-gold">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            Espere! 🧵
          </DialogTitle>
        </DialogHeader>

        <div className="text-center py-4">
          <p className="font-body text-lg text-foreground mb-4">
            Você ainda pode começar hoje uma nova fase da sua vida.
          </p>
          <p className="font-body text-muted-foreground mb-6">
            A costura pode ser o caminho para sua autonomia, criatividade e realização pessoal.
          </p>

          <Button 
            onClick={handleCTAClick}
            className="w-full bg-gradient-to-r from-primary to-rose-dark hover:from-primary/90 hover:to-rose-dark/90 text-primary-foreground font-body font-semibold py-6 rounded-full"
          >
            QUERO APRENDER CORTE E COSTURA
          </Button>

          <button 
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            Não, obrigada
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
