import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const PROPELKIT_PRICE = 3999;
const DEFAULT_HOURS = 60;

function AnimatedNumber({ value, prefix = "₹", className }: { value: number; prefix?: string; className?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const start = previousValue.current;
    const end = value;
    const duration = 400;
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

  return <span className={className}>{prefix}{displayValue.toLocaleString('en-IN')}</span>;
}

export function PainCalculator() {
  const [hourlyRate, setHourlyRate] = useState(1000);
  const [hoursSaved, setHoursSaved] = useState(DEFAULT_HOURS);

  const costToBuild = hourlyRate * hoursSaved;
  const savings = costToBuild - PROPELKIT_PRICE;
  const roi = costToBuild > 0 ? Math.round((savings / PROPELKIT_PRICE) * 100) : 0;

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 noise-bg grid-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Do the math.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much you save by using PropelKit instead of building from scratch.
          </p>
        </div>

        {/* Calculator Card - System Monitor Style */}
        <div className="max-w-3xl mx-auto">
          <div className="bento-card p-8 bg-card border border-border">
            {/* Monitor Header */}
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">ROI Calculator • Live</span>
            </div>

            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Hourly Rate */}
              <div>
                <label className="block text-sm text-muted-foreground mb-3">
                  Hourly Rate (₹)
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold font-mono text-foreground">
                    ₹{hourlyRate.toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground text-sm">/hour</span>
                </div>
                <Slider
                  value={[hourlyRate]}
                  onValueChange={(value) => setHourlyRate(value[0])}
                  min={500}
                  max={5000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>₹500</span>
                  <span>₹5,000</span>
                </div>
              </div>

              {/* Hours Saved */}
              <div>
                <label className="block text-sm text-muted-foreground mb-3">
                  Hours Saved (est.)
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold font-mono text-foreground">
                    {hoursSaved}
                  </span>
                  <span className="text-muted-foreground text-sm">hours</span>
                </div>
                <Slider
                  value={[hoursSaved]}
                  onValueChange={(value) => setHoursSaved(value[0])}
                  min={20}
                  max={120}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>20h</span>
                  <span>120h</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
              {/* Cost to Build */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Cost to Build</p>
                <AnimatedNumber 
                  value={costToBuild} 
                  className="text-2xl md:text-3xl font-bold font-mono text-red-500"
                />
              </div>

              {/* PropelKit Price */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">PropelKit Price</p>
                <span className="text-2xl md:text-3xl font-bold font-mono text-green-500">
                  ₹3,999
                </span>
              </div>

              {/* ROI */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">ROI</p>
                <AnimatedNumber 
                  value={Math.max(0, roi)} 
                  prefix=""
                  className="text-2xl md:text-3xl font-bold font-mono text-primary"
                />
                <span className="text-2xl md:text-3xl font-bold font-mono text-primary">%</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="gradient-primary shadow-glow text-lg px-10 py-6 font-semibold"
              >
                Get PropelKit Now
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Pay once. Ship forever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
