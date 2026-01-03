import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
];

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -top-48 -right-48" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl top-1/3 -left-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Launch offer badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">₹3,000 off for early adopters</span>
              <span className="text-xs text-muted-foreground">(Limited spots)</span>
            </div>

            {/* Big, clean headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Ship your startup in days,
              <br />
              <span className="text-primary">not weeks</span>
            </h1>

            {/* Single-line value prop */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first ₹ online fast.
            </p>

            {/* Single CTA */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-semibold group"
            >
              Get PropelKit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Early adopter social proof */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Developer"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="text-foreground font-medium">50+ developers</span> building with PropelKit
              </p>
            </div>
          </div>

          {/* Right Content - Product Screenshot */}
          <div className="relative">
            <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/hero-dashboard.png"
                alt="PropelKit Dashboard"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop";
                }}
              />
              {/* Live Preview badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-success/90 text-white text-xs font-medium">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
