import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainAgitation } from "@/components/PainAgitation";
import { Features } from "@/components/Features";
import { TechStackLogos } from "@/components/TechStackLogos";
import { FounderStory } from "@/components/FounderStory";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-800">
      <Navbar />
      <Hero />
      <PainAgitation />
      <Features />
      <TechStackLogos />
      <FounderStory />
      <VideoSection />
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
