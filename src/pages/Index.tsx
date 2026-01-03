import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { PainCalculator } from "@/components/PainCalculator";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <Hero />
      <TheProblem />
      <Features />
      <Testimonials />
      <PainCalculator />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
