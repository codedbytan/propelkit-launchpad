import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedOn } from "@/components/FeaturedOn";
import { PainAgitation } from "@/components/PainAgitation";
import { Features } from "@/components/Features";
import { AISection } from "@/components/AISection";
import { FounderStory } from "@/components/FounderStory";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedOn />
      <PainAgitation />
      <Features />
      <AISection />
      <FounderStory />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
