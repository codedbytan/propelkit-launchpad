import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { TheProblem } from "@/components/TheProblem";
import { Features } from "@/components/Features";
import { PainCalculator } from "@/components/PainCalculator";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FounderStory } from "@/components/FounderStory";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBanner />
      <TheProblem />
      <Features />
      <PainCalculator />
      <Testimonials />
      <Pricing />
      <FounderStory />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
