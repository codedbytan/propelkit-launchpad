import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, RefreshCw } from "lucide-react";

export function FinalCTA() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-primary-foreground">
          Stop coding boilerplate.
          <br />
          Start building your business.
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Join the first 50 Indian founders shipping with PropelKit
        </p>

        {/* CTA */}
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-7 font-semibold group"
        >
          Get PropelKit Now — ₹3,999
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Instant access after payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>7-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            <span>Lifetime updates included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
