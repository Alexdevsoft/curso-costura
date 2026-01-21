import HeroSection from "@/components/landing/HeroSection";
import ConnectionSection from "@/components/landing/ConnectionSection";
import ObjectionsSection from "@/components/landing/ObjectionsSection";
import MethodSection from "@/components/landing/MethodSection";
import LearningSection from "@/components/landing/LearningSection";
import TargetSection from "@/components/landing/TargetSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ConnectionSection />
      <ObjectionsSection />
      <MethodSection />
      <LearningSection />
      <TargetSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
