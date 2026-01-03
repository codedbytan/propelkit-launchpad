import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { PainCalculator } from "@/components/PainCalculator";
import { Features } from "@/components/Features";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FounderStory } from "@/components/FounderStory";
import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <Hero />
      <TheProblem />
      <PainCalculator />
      <Features />
      <ComparisonTable />
      <Testimonials />
      <Pricing />
      <FounderStory />
      <BlogPreview />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
