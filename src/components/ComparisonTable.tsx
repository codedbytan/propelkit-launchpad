import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "Payment Integration", scratch: "6+ hours setup", propelkit: "Pre-configured" },
  { name: "GST Invoicing", scratch: "Research + code (4+ hrs)", propelkit: "Automated" },
  { name: "Auth System", scratch: "8+ hours", propelkit: "Supabase ready" },
  { name: "Email Templates", scratch: "Design + code (3+ hrs)", propelkit: "5 templates included" },
  { name: "Admin Dashboard", scratch: "12+ hours", propelkit: "Full dashboard" },
  { name: "Responsive UI", scratch: "10+ hours", propelkit: "50+ components" },
];

const totals = {
  scratch: { time: "43+ hours", cost: "₹21,500" },
  propelkit: { time: "< 1 hour", cost: "₹3,999" },
};

export function ComparisonTable() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            PropelKit vs. Building from Scratch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare the real cost of going it alone
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="max-w-4xl mx-auto hidden md:block">
          <div className="border border-white/10 overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-white/5">
              <div className="p-4 font-semibold text-sm border-r border-white/10">Feature</div>
              <div className="p-4 font-semibold text-sm text-center border-r border-white/10 text-destructive">
                Building from Scratch
              </div>
              <div className="p-4 font-semibold text-sm text-center text-success">
                With PropelKit
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-white/10">
                <div className="p-4 text-sm border-r border-white/10">{feature.name}</div>
                <div className="p-4 text-sm text-center border-r border-white/10 text-destructive/70">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4" />
                    <span>{feature.scratch}</span>
                  </div>
                </div>
                <div className="p-4 text-sm text-center text-success">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>{feature.propelkit}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Totals Row */}
            <div className="grid grid-cols-3 border-t-2 border-white/20 bg-white/5">
              <div className="p-4">
                <p className="font-bold">Total Time</p>
                <p className="text-sm text-muted-foreground">Cost @ ₹500/hr</p>
              </div>
              <div className="p-4 text-center border-x border-white/10">
                <p className="font-bold text-destructive text-lg">{totals.scratch.time}</p>
                <p className="text-sm text-destructive/70">{totals.scratch.cost}</p>
              </div>
              <div className="p-4 text-center bg-primary/5">
                <p className="font-bold text-success text-lg">{totals.propelkit.time}</p>
                <p className="text-sm text-primary font-semibold">{totals.propelkit.cost}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4">
              <p className="font-semibold mb-3">{feature.name}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">From Scratch</p>
                  <p className="text-destructive">{feature.scratch}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">PropelKit</p>
                  <p className="text-success">{feature.propelkit}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Totals Card */}
          <div className="bg-primary/5 border border-primary/20 p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xs text-muted-foreground mb-1">From Scratch</p>
                <p className="text-xl font-bold text-destructive">{totals.scratch.time}</p>
                <p className="text-sm text-destructive/70">{totals.scratch.cost}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PropelKit</p>
                <p className="text-xl font-bold text-success">{totals.propelkit.time}</p>
                <p className="text-sm text-primary font-semibold">{totals.propelkit.cost}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToPricing}
            className="gradient-primary shadow-glow-sm px-8 py-6 text-lg font-semibold"
          >
            Stop wasting time. Start building.
          </Button>
        </div>
      </div>
    </section>
  );
}
