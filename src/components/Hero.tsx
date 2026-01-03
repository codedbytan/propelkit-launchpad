import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Zap } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
];

export function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating orbs - Cyber Yellow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Built for India 🇮🇳</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-display-md font-bold tracking-tight mb-6 animate-fade-up stagger-1">
              Ship your Indian SaaS
              <br />
              <span className="text-gradient">in 24 Hours.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up stagger-2">
              The Next.js boilerplate with Razorpay, GST Invoicing, and Authentication pre-configured. 
              <span className="text-foreground font-medium"> Stop coding the boring stuff.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-up stagger-3">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="gradient-primary shadow-glow text-lg px-8 py-6 hover:opacity-90 transition-all group font-semibold"
              >
                Get PropelKit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:border-primary/50 group">
                View Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up stagger-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  Trusted by <span className="text-foreground font-semibold">100+ Indian Developers</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-up stagger-5 hidden lg:block">
            {/* Dashboard UI Mockup - Background */}
            <div className="relative transform translate-x-8">
              <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-muted/30 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">P</span>
                    </div>
                    <span className="font-semibold text-foreground">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted" />
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                      <p className="text-xl font-bold text-foreground">₹4,52,000</p>
                      <p className="text-xs text-green-500">+12.5%</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Users</p>
                      <p className="text-xl font-bold text-foreground">1,234</p>
                      <p className="text-xs text-green-500">+8.2%</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Orders</p>
                      <p className="text-xl font-bold text-foreground">89</p>
                      <p className="text-xs text-green-500">+22%</p>
                    </div>
                  </div>
                  {/* Chart placeholder */}
                  <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-xl flex items-end p-4">
                    <div className="flex items-end gap-2 w-full">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/60 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor Mockup - Floating on top */}
            <div className="absolute -left-8 top-12 transform -rotate-2 hover-lift z-10">
              <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden w-80">
                {/* Window Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-muted-foreground">razorpay.ts</span>
                </div>
                {/* Code Content */}
                <div className="p-4 font-mono text-xs">
                  <pre className="text-muted-foreground">
                    <code>
                      <span className="text-primary">const</span> order = <span className="text-primary">await</span>{"\n"}
                      {"  "}razorpay.<span className="text-green-400">createOrder</span>({`{`}{"\n"}
                      {"    "}amount: <span className="text-primary">3999</span>,{"\n"}
                      {"    "}currency: <span className="text-yellow-400">"INR"</span>,{"\n"}
                      {"    "}gstInvoice: <span className="text-primary">true</span>{"\n"}
                      {"  "}{`}`});
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Razorpay Success Card - Floating */}
            <div className="absolute -bottom-4 right-0 transform rotate-3 animate-float-slow z-20">
              <div className="bg-card border border-primary/30 rounded-xl p-4 shadow-glow w-56">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Payment Success!</p>
                    <p className="text-xs text-muted-foreground">Order #RZP123</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Amount</span>
                  <span className="font-bold text-foreground">₹3,999</span>
                </div>
                <div className="text-xs text-primary mt-1">
                  GST Invoice Generated ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
