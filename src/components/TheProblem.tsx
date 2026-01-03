import { X, Check } from "lucide-react";

const oldWayItems = [
  "Apply for Razorpay",
  "Debug Webhook Signatures",
  "Figure out HSN Codes",
  "Build Auth RLS Policies",
  "Design Email Templates",
];

const propelWayItems = [
  "npm install",
  "Add API Keys",
  "Ship",
];

export const TheProblem = () => {
  return (
    <section className="relative py-24 overflow-hidden noise-bg grid-pattern">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Why build from scratch?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every week spent on infrastructure is a week not spent on your actual product.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Card - The Old Way */}
          <div className="relative group">
            {/* Red glow effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-red-500/20 to-red-900/10 rounded-xl blur-sm opacity-60" />
            <div className="relative p-8 rounded-xl border border-red-500/20 bg-card">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Old Way</h3>
              </div>

              {/* List Items */}
              <div className="space-y-4 mb-8">
                {oldWayItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="pt-6 border-t border-red-500/10 text-center">
                <p className="text-3xl md:text-4xl font-bold text-red-500 font-mono">3 Weeks Wasted.</p>
              </div>
            </div>
          </div>

          {/* Right Card - The Propel Way */}
          <div className="relative group">
            {/* Green glow effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-green-500/20 to-green-900/10 rounded-xl blur-sm opacity-60" />
            <div className="relative p-8 rounded-xl border border-green-500/20 bg-card">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Propel Way</h3>
              </div>

              {/* List Items */}
              <div className="space-y-4 mb-8">
                {propelWayItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Spacer to match left card height */}
              <div className="h-[88px]" />

              {/* Result */}
              <div className="pt-6 border-t border-green-500/10 text-center">
                <p className="text-3xl md:text-4xl font-bold text-green-500 font-mono">Ship this Weekend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
