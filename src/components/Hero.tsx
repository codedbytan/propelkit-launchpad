import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
];

const codeLines = [
  { text: "// app/api/razorpay/route.ts", type: "comment" },
  { text: "import { createOrder } from '@/lib/razorpay';", type: "normal" },
  { text: "import { calculateGST } from '@/lib/gst';", type: "normal" },
  { text: "", type: "normal" },
  { text: "export async function POST(req: Request) {", type: "keyword" },
  { text: "  const { amount, state } = await req.json();", type: "normal" },
  { text: "", type: "normal" },
  { text: "  const gst = calculateGST(amount, state);", type: "function" },
  { text: "  const total = amount + gst.cgst + gst.sgst;", type: "normal" },
  { text: "", type: "normal" },
  { text: "  const order = await createOrder({", type: "function" },
  { text: "    amount: total * 100, // paise", type: "number" },
  { text: "    currency: 'INR',", type: "string" },
  { text: "    receipt: `order_${Date.now()}`", type: "normal" },
  { text: "  });", type: "normal" },
  { text: "", type: "normal" },
  { text: "  return Response.json({ order, gst });", type: "keyword" },
  { text: "}", type: "normal" },
];

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const getCodeColor = (type: string) => {
    switch (type) {
      case "comment":
        return "text-white/40 italic";
      case "keyword":
        return "text-purple-400";
      case "function":
        return "text-blue-400";
      case "string":
        return "text-success";
      case "number":
        return "text-amber-400";
      default:
        return "text-white/80";
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Product Hunt Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1 text-white/60">
                <span className="text-xl">🏆</span>
                <span className="text-xs uppercase tracking-wider">Product of the day</span>
              </div>
              <span className="font-bold text-white">2nd</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
              Ship your startup in days,{" "}
              <span className="bg-stone-300 text-yellow-950 px-2">not weeks</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              The Next.js boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first ₹ online fast.
            </p>

            {/* CTA */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold w-full sm:w-auto"
            >
              Get PropelKit
            </Button>

            {/* Discount */}
            <p className="text-sm text-white/50 mt-4 flex items-center gap-2">
              <span className="text-primary">₹3,000 off</span>
              <span>for the first 100 customers (10 left)</span>
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-neutral-800 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-white/50">
                  <span className="font-semibold text-white">200+</span> makers ship faster
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="relative">
            {/* Dotted circle container - visual flair like ShipFast */}
            <div className="relative">
              {/* Main Code Editor */}
              <div className="relative bg-neutral-900 border border-white/10 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-950 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  </div>
                  <span className="ml-4 text-xs text-white/40 font-mono">app/api/razorpay/route.ts</span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs md:text-sm overflow-x-auto max-h-[350px]">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 text-white/20 select-none text-right pr-4">{i + 1}</span>
                      <span className={getCodeColor(line.type)}>{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Git clone command */}
              <div className="mt-4 text-center">
                <code className="font-mono text-primary text-sm">git clone propelkit</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
