import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainAgitation } from "@/components/PainAgitation";
import { IndiaStackUSP } from "@/components/IndiaStackUSP";
import { TechStackLogos } from "@/components/TechStackLogos";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Features } from "@/components/Features";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainAgitation />
      <IndiaStackUSP />
      <TechStackLogos />
      <ComparisonTable />
      <Features />
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
