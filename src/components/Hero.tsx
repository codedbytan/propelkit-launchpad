import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Star } from "lucide-react";

const terminalLines = [
  { text: "npx create-propelkit my-saas", isCommand: true },
  { text: "✓ Installing dependencies..." },
  { text: "✓ Setting up Razorpay webhooks..." },
  { text: "✓ Configuring GST engine..." },
  { text: "✓ Creating admin dashboard..." },
  { text: "" },
  { text: "Success! Your SaaS is ready 🚀", isSuccess: true },
  { text: "cd my-saas && npm run dev", isCommand: true },
];

const codeLines = [
  { text: "// app/api/razorpay/route.ts", isComment: true },
  { text: "import { createOrder } from '@/lib/razorpay';" },
  { text: "import { calculateGST } from '@/lib/gst';" },
  { text: "" },
  { text: "export async function POST(req: Request) {", isKeyword: true },
  { text: "  const { amount, state } = await req.json();" },
  { text: "" },
  { text: "  const gst = calculateGST(amount, state);", isFunction: true },
  { text: "  const total = amount + gst.cgst + gst.sgst;" },
  { text: "" },
  { text: "  const order = await createOrder({", isFunction: true },
  { text: "    amount: total * 100, // paise", hasNumber: true },
  { text: "    currency: 'INR',", isString: true },
  { text: "    receipt: `order_${Date.now()}`" },
  { text: "  });" },
  { text: "" },
  { text: "  return Response.json({ order, gst });", isKeyword: true },
  { text: "}" },
];

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1 -top-48 -right-48" />
        <div className="orb orb-2 top-1/3 -left-32" />
        <div className="orb orb-3 bottom-1/4 right-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Product Hunt Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 rotate-organic-3 animate-fade-up">
              <span className="text-sm font-medium text-primary">🚀 v2.0 is Live</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Built for Next.js 14</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-up stagger-1">
              Ship your Indian SaaS in{" "}
              <span className="relative inline-block">
                <span className="highlight-handdrawn text-primary rotate-organic-2">days, not weeks</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-2">
              The only Next.js boilerplate with pre-built{" "}
              <span className="font-semibold text-foreground">Razorpay</span>,{" "}
              <span className="font-semibold text-foreground">GST Invoicing</span>, and{" "}
              <span className="font-semibold text-foreground">Supabase Auth</span>.
              Stop wasting weeks on setup.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up stagger-3">
              <div className="flex avatar-stack">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by <span className="font-semibold text-foreground">100+</span> developers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up stagger-4">
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="gradient-primary shadow-glow text-lg px-8 py-6 font-semibold hover:opacity-90 transition-all group"
              >
                Get PropelKit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Live Demo
              </Button>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 text-sm animate-fade-up stagger-5">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-muted-foreground">
                <span className="text-green-500 font-semibold">₹4,000 off</span> for first 50 customers
                <span className="text-primary font-semibold ml-1">(13 left)</span>
              </span>
            </div>
          </div>

          {/* Right Content - Code Editor Mockup */}
          <div className="relative animate-fade-up stagger-4">
            {/* Main Code Editor */}
            <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-card">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">
                  app/api/razorpay/route.ts
                </span>
              </div>

              {/* Code Content */}
              <div className="p-4 font-mono text-xs md:text-sm overflow-x-auto max-h-[400px]">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-muted-foreground/40 select-none text-right pr-4">{i + 1}</span>
                    <span className={
                      line.isComment ? "text-muted-foreground/60 italic" :
                      line.isKeyword ? "text-purple-400" :
                      line.isFunction ? "text-blue-400" :
                      line.isString ? "text-green-400" :
                      line.hasNumber ? "text-amber-400" :
                      "text-muted-foreground"
                    }>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card border border-border rounded-xl p-4 shadow-card rotate-organic-4 animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Payment Success!</p>
                  <p className="text-xs text-muted-foreground">₹3,999 • GST Invoice Generated ✓</p>
                </div>
              </div>
            </div>

            {/* Terminal Preview (Mobile) */}
            <div className="mt-6 lg:hidden">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">Terminal</span>
                </div>
                <div className="p-4 font-mono text-xs min-h-[160px]">
                  {terminalLines.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className="mb-1">
                      {line.isCommand ? (
                        <span className="text-green-400">$ {line.text}</span>
                      ) : line.isSuccess ? (
                        <span className="text-primary font-semibold">{line.text}</span>
                      ) : (
                        <span className="text-muted-foreground">{line.text}</span>
                      )}
                    </div>
                  ))}
                  {visibleLines < terminalLines.length && (
                    <span className="animate-pulse text-primary">▋</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
