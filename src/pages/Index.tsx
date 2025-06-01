import HeroSection from "@/components/HeroSection";
import PropertyShowcase from "@/components/PropertyShowcase";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PropertyShowcase />
      <ServicesSection />
      <MapSection />
      <ContactSection />
    </div>
  );
};

export default Index;
