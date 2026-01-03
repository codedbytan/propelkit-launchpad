import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { PainCalculator } from "@/components/PainCalculator";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FounderStory } from "@/components/FounderStory";
import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TheProblem />
      <PainCalculator />
      <Features />
      <Testimonials />
      <Pricing />
      <FounderStory />
      <BlogPreview />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
