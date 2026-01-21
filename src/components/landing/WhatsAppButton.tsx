import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    // TODO: Replace with actual WhatsApp number
    const phoneNumber = "5584986582621";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o curso de Corte e Costura.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm font-body rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </button>
  );
};

export default WhatsAppButton;
