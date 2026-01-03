import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X, Check, Sparkles, ArrowRight } from "lucide-react";

const PROPELKIT_PRICE = 3999;

const buildTasks = [
  { name: "Auth & Database Schema", hours: 8 },
  { name: "Razorpay & Webhooks", hours: 15 },
  { name: "GST Invoices & PDF Gen", hours: 12 },
  { name: "Email System", hours: 4 },
  { name: "Responsive Dashboard", hours: 8 },
];

const propelkitFeatures = [
  "Razorpay & GST Pre-configured",
  "Supabase Auth Ready",
  "Email Workflows Setup",
  "Admin Dashboard Included",
  "Lifetime Updates",
];

function AnimatedNumber({ value, prefix = "", suffix = "", className }: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const start = previousValue.current;
    const end = value;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousValue.current = end;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export function PainCalculator() {
  const [hourlyRate, setHourlyRate] = useState(1500);
  const totalHours = buildTasks.reduce((acc, task) => acc + task.hours, 0);
  const costToBuild = hourlyRate * totalHours;
  const savings = costToBuild - PROPELKIT_PRICE;
  const roi = Math.round((savings / PROPELKIT_PRICE) * 100);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            The Cost of "I'll Build It Myself"
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much time and money you'll save with PropelKit
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - Manual Build Calculator */}
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-b from-destructive/20 to-transparent rounded-2xl blur-sm opacity-50" />
            <div className="relative glass-card rounded-2xl p-8 border-destructive/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                Building From Scratch
              </h3>

              {/* Hourly Rate Slider */}
              <div className="mb-8">
                <label className="block text-sm text-muted-foreground mb-3">
                  Your Hourly Rate
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold font-mono">
                    ₹{hourlyRate.toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <Slider
                  value={[hourlyRate]}
                  onValueChange={(value) => setHourlyRate(value[0])}
                  min={500}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>₹500</span>
                  <span>₹10,000</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-3 mb-8">
                {buildTasks.map((task) => (
                  <div
                    key={task.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                  >
                    <div className="flex items-center gap-3">
                      <X className="w-4 h-4 text-destructive" />
                      <span className="text-sm">{task.name}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{task.hours}hrs</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Total Hours</span>
                  <span className="font-mono font-bold">{totalHours} hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Cost</span>
                  <AnimatedNumber
                    value={costToBuild}
                    prefix="₹"
                    className="text-3xl font-bold font-mono text-destructive"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - PropelKit Solution */}
          <div className="relative">
            {/* Launch Offer Badge */}
            <div className="absolute -top-3 right-6 badge-launch z-10">
              <Sparkles className="w-3 h-3" />
              LAUNCH OFFER
            </div>

            <div className="absolute -inset-px bg-gradient-to-b from-primary/30 to-transparent rounded-2xl blur-sm opacity-50" />
            <div className="relative glass-card-gold rounded-2xl p-8 border-2 border-primary/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                PropelKit Solution
              </h3>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {propelkitFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="pt-6 border-t border-primary/20 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground line-through">₹7,999</span>
                  <span className="text-xs text-primary font-medium">50% OFF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">PropelKit Price</span>
                  <span className="text-4xl md:text-5xl font-bold font-mono text-primary">
                    ₹3,999
                  </span>
                </div>
              </div>

              {/* Savings Card */}
              <div className="relative bg-gradient-to-br from-primary/20 to-amber-500/10 rounded-xl p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent" />
                <p className="text-sm text-muted-foreground mb-2 relative z-10">You Save</p>
                <AnimatedNumber
                  value={Math.max(0, savings)}
                  prefix="₹"
                  className="text-5xl md:text-6xl font-bold font-mono text-primary relative z-10"
                />
                <p className="text-sm text-muted-foreground mt-2 relative z-10">
                  That's <span className="font-bold text-primary">{roi}% ROI</span>
                </p>
              </div>

              {/* CTA */}
              <Button
                onClick={scrollToPricing}
                className="w-full mt-6 gradient-primary shadow-glow py-6 text-lg font-semibold group"
              >
                Claim 50% Off Offer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
