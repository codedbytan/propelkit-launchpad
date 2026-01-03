import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const terminalLines = [
  { text: "> npx create-propel-app my-saas", delay: 0 },
  { text: "> Installing Razorpay Webhooks... ", status: "[OK]", delay: 800 },
  { text: "> Configuring IGST/CGST Logic... ", status: "[OK]", delay: 1600 },
  { text: "> Generating Admin Panel... ", status: "[OK]", delay: 2400 },
  { text: "> Ready to ship! 🚀", delay: 3200 },
];

const techLogos = [
  { name: "Next.js", icon: "▲" },
  { name: "Supabase", icon: "⚡" },
  { name: "Razorpay", icon: "💳" },
  { name: "Resend", icon: "✉️" },
  { name: "Shadcn/UI", icon: "🎨" },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
        if (index === terminalLines.length - 1) {
          setTimeout(() => setTypingComplete(true), 500);
        }
      }, line.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 pb-20 overflow-hidden noise-bg grid-pattern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-up">
            <span className="text-sm font-medium text-primary">v1.0 is Live • Built for Next.js 14</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-6 animate-fade-up stagger-1">
            Ship your Indian SaaS
            <br />
            in <span className="text-primary">24 hours</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            The opinionated Next.js starter kit with <span className="text-foreground font-medium">Razorpay</span>, <span className="text-foreground font-medium">GST Invoicing</span>, and <span className="text-foreground font-medium">Supabase Auth</span> pre-configured. Stop coding the boring stuff.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="gradient-primary shadow-glow text-lg px-8 py-6 hover:opacity-90 transition-all group font-semibold"
            >
              Get PropelKit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-border hover:border-muted-foreground/50"
            >
              View Demo
            </Button>
          </div>

          {/* Terminal Window */}
          <div className="max-w-2xl mx-auto animate-fade-up stagger-4">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">bash — 80x24</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-left min-h-[180px]">
                {terminalLines.slice(0, visibleLines).map((line, index) => (
                  <div key={index} className="mb-2">
                    <span className="text-muted-foreground">{line.text}</span>
                    {line.status && (
                      <span className="text-green-500 font-semibold">{line.status}</span>
                    )}
                    {index === visibleLines - 1 && !typingComplete && (
                      <span className="animate-pulse text-primary">▋</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Logos */}
          <div className="mt-12 animate-fade-up stagger-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Powered by</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {techLogos.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
