import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import InteractiveCylinder from "@/components/sections/InteractiveCylinder";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <InteractiveCylinder />
      <DashboardShowcase />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
