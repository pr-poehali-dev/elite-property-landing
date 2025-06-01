import HeroSection from "@/components/HeroSection";
import PropertyShowcase from "@/components/PropertyShowcase";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PropertyShowcase />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
