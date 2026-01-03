import { useState, useEffect, useRef } from "react";
import { Clock, Zap, CheckCircle, XCircle, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const tasks = [
  { name: "Authentication System", hours: 8 },
  { name: "Payment Integration", hours: 12 },
  { name: "GST Invoice Generator", hours: 8 },
  { name: "Email System", hours: 6 },
  { name: "Dashboard UI", hours: 6 },
];

const PROPELKIT_PRICE = 3999;
const TOTAL_HOURS = 40;

function AnimatedNumber({ value, prefix = "₹", className }: { value: number; prefix?: string; className?: string }) {
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
      
      // Easing function for smooth animation
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
  const [hourlyRate, setHourlyRate] = useState(1500);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const traditionalCost = TOTAL_HOURS * hourlyRate;
  const savings = traditionalCost - PROPELKIT_PRICE;
  const savingsPercentage = Math.min(100, Math.round((savings / traditionalCost) * 100));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden noise-bg">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">ROI Calculator</span>
          </div>
          <h2 className="font-display text-3xl md:text-display-sm font-bold mb-4 tracking-tight">
            How much is your <span className="text-gradient">time worth?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much you save by using PropelKit instead of building from scratch.
          </p>
        </div>

        <div 
          ref={ref}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8"
        >
          {/* Left Column - Input & Breakdown */}
          <div className="space-y-6">
            {/* Slider Input */}
            <div className="bento-card p-6 md:p-8">
              <label className="block text-sm font-medium text-muted-foreground mb-4">
                Your hourly rate
              </label>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-foreground">₹{hourlyRate.toLocaleString('en-IN')}</span>
                <span className="text-muted-foreground">/hour</span>
              </div>
              <Slider
                value={[hourlyRate]}
                onValueChange={(value) => setHourlyRate(value[0])}
                min={500}
                max={5000}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>₹500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* Traditional Way Card */}
            <div className="bento-card p-6 md:p-8 border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Building from Scratch</h3>
                  <p className="text-sm text-muted-foreground">~{TOTAL_HOURS} hours of development</p>
                </div>
              </div>

              <div className="space-y-3">
                {tasks.map((task, i) => (
                  <div 
                    key={task.name} 
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.5s ease-out ${i * 100}ms`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <XCircle className="w-4 h-4 text-destructive/60" />
                      <span className="text-sm text-muted-foreground">{task.name}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{task.hours}h</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-destructive/20">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cost to build from scratch</span>
                  <AnimatedNumber 
                    value={traditionalCost} 
                    className="text-3xl font-bold text-destructive"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - PropelKit & Savings */}
          <div className="space-y-6">
            {/* PropelKit Way Card */}
            <div className="bento-card p-6 md:p-8 glow-border relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-bl-xl">
                PropelKit
              </div>

              <div className="flex items-center gap-3 mb-6 mt-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Using PropelKit</h3>
                  <p className="text-sm text-muted-foreground">Ready in 5 minutes</p>
                </div>
              </div>

              <div className="space-y-3">
                {['Everything Pre-configured', 'Auth & Payments Ready', 'GST Invoicing Included', 'Dashboard Included', 'Lifetime Updates'].map((feature, i) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 py-2"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.5s ease-out ${i * 100 + 200}ms`
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">PropelKit Cost</span>
                  <span className="text-3xl font-bold text-primary">₹3,999</span>
                </div>
              </div>
            </div>

            {/* Big Savings Card */}
            <div 
              className="bento-card p-8 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--card)) 100%)',
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)'
                }}
              />

              <div className="relative z-10">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  You Save
                </p>
                <div className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
                  <AnimatedNumber value={Math.max(0, savings)} className="" />
                </div>
                
                {/* Savings Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Savings</span>
                    <span className="text-primary font-semibold">{savingsPercentage}%</span>
                  </div>
                  <Progress value={savingsPercentage} className="h-3 bg-muted" />
                </div>
                
                <Button 
                  onClick={scrollToPricing}
                  size="lg" 
                  className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:scale-105 transition-transform"
                >
                  Get PropelKit Now
                </Button>

                <p className="mt-4 text-sm text-muted-foreground">
                  Pay once. Ship forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
