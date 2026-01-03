import { Check, X, Clock, AlertTriangle, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { task: "Razorpay Integration", scratch: "8-12 hours", propelkit: "Pre-configured" },
  { task: "GST Invoice Generation", scratch: "12-16 hours", propelkit: "Automated" },
  { task: "Supabase Auth", scratch: "6-8 hours", propelkit: "Ready to use" },
  { task: "Email System", scratch: "4-6 hours", propelkit: "Templates included" },
  { task: "User Dashboard", scratch: "16-20 hours", propelkit: "Complete UI" },
  { task: "Admin Panel", scratch: "20-30 hours", propelkit: "Full-featured" },
  { task: "Webhook Handling", scratch: "8-10 hours", propelkit: "Production-ready" },
  { task: "Documentation", scratch: "Hours of reading", propelkit: "Clear guides" },
];

const summary = [
  { label: "Total Time", scratch: "4-6 weeks", propelkit: "5 minutes", icon: Clock },
  { label: "Total Cost", scratch: "₹40,000+*", propelkit: "₹3,999", icon: Zap },
  { label: "Risk Level", scratch: "High (bugs, security)", propelkit: "Low (tested by 100+ devs)", icon: Shield },
];

const CheckIcon = () => (
  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 group-hover:scale-110 transition-transform duration-300">
    <Check className="w-4 h-4 text-green-400" />
  </div>
);

const XIcon = () => (
  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
    <X className="w-4 h-4 text-red-400" />
  </div>
);

export const ComparisonTable = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/5 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Feature Comparison
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Developers Choose{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">PropelKit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop reinventing the wheel. Start with production-ready code.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="p-6 bg-white/5">
                <p className="font-semibold text-foreground">Feature / Task</p>
              </div>
              <div className="p-6 bg-red-500/5 border-x border-white/10">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <p className="font-semibold text-red-400">Building from Scratch</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-green-500/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <p className="font-semibold text-yellow-400">With PropelKit</p>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "grid grid-cols-3 group hover:bg-white/5 transition-colors",
                  index !== features.length - 1 && "border-b border-white/5"
                )}
              >
                <div className="p-5 flex items-center">
                  <p className="text-foreground font-medium">{feature.task}</p>
                </div>
                <div className="p-5 flex items-center gap-3 border-x border-white/5 bg-red-500/[0.02]">
                  <XIcon />
                  <span className="text-red-400/80 text-sm">{feature.scratch}</span>
                </div>
                <div className="p-5 flex items-center gap-3 bg-green-500/[0.02]">
                  <CheckIcon />
                  <span className="text-green-400/80 text-sm">{feature.propelkit}</span>
                </div>
              </div>
            ))}

            {/* Summary Section */}
            <div className="border-t-2 border-white/10 bg-white/5">
              {summary.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "grid grid-cols-3 group",
                    index !== summary.length - 1 && "border-b border-white/10"
                  )}
                >
                  <div className="p-5 flex items-center gap-3 bg-white/5">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <p className="text-foreground font-semibold">{item.label}</p>
                  </div>
                  <div className="p-5 flex items-center border-x border-white/10 bg-red-500/5">
                    <span className="text-red-400 font-bold text-lg">{item.scratch}</span>
                  </div>
                  <div className="p-5 flex items-center bg-gradient-to-r from-green-500/5 to-yellow-500/5">
                    <span className="text-green-400 font-bold text-lg">{item.propelkit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            *Based on ₹1,500/hour freelance rate in India
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <div className="p-4 border-b border-white/10 bg-white/5">
                <p className="font-semibold text-foreground">{feature.task}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 border-r border-white/10 bg-red-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <XIcon />
                    <span className="text-xs text-red-400 font-medium">From Scratch</span>
                  </div>
                  <p className="text-sm text-red-400/80">{feature.scratch}</p>
                </div>
                <div className="p-4 bg-green-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon />
                    <span className="text-xs text-green-400 font-medium">PropelKit</span>
                  </div>
                  <p className="text-sm text-green-400/80">{feature.propelkit}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Summary Cards */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center mb-4">The Bottom Line</h3>
            {summary.map((item, index) => (
              <div 
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <p className="font-semibold text-foreground">{item.label}</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-white/10 bg-red-500/5">
                    <p className="text-xs text-muted-foreground mb-1">From Scratch</p>
                    <p className="text-lg font-bold text-red-400">{item.scratch}</p>
                  </div>
                  <div className="p-4 bg-green-500/5">
                    <p className="text-xs text-muted-foreground mb-1">PropelKit</p>
                    <p className="text-lg font-bold text-green-400">{item.propelkit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Footnote */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            *Based on ₹1,500/hour freelance rate in India
          </p>
        </div>
      </div>
    </section>
  );
};
