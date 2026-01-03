import { Button } from "@/components/ui/button";

export function FinalCTA() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-neutral-900 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
          Stop wasting time on boilerplate.
          <br />
          <span className="text-primary">Ship your startup today.</span>
        </h2>

        {/* CTA */}
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold mt-6"
        >
          Get PropelKit
        </Button>

        {/* Trust */}
        <p className="text-sm text-white/40 mt-6">
          ₹3,000 off for the first 100 customers (10 left)
        </p>
      </div>
    </section>
  );
}
