import { Check, X, Clock, AlertTriangle, Shield, Zap, Sparkles } from "lucide-react";
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
    <Check className="w-4 h-4 text-green-500" />
  </div>
);

const XIcon = () => (
  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20">
    <X className="w-4 h-4 text-destructive" />
  </div>
);

export const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background - matching hero style */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating orbs - matching hero */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - matching Features style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Feature Comparison</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Developers Choose <span className="text-gradient">PropelKit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop reinventing the wheel. Start with production-ready code.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-6 bg-muted/50">
                <p className="font-semibold text-foreground">Feature / Task</p>
              </div>
              <div className="p-6 bg-destructive/5 border-x border-border">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <p className="font-semibold text-destructive">Building from Scratch</p>
                </div>
              </div>
              <div className="p-6 gradient-primary">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                  <p className="font-semibold text-primary-foreground">With PropelKit</p>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "grid grid-cols-3 group hover:bg-muted/30 transition-colors",
                  index !== features.length - 1 && "border-b border-border/50"
                )}
              >
                <div className="p-5 flex items-center">
                  <p className="text-foreground font-medium">{feature.task}</p>
                </div>
                <div className="p-5 flex items-center gap-3 border-x border-border/50 bg-destructive/[0.02]">
                  <XIcon />
                  <span className="text-muted-foreground text-sm">{feature.scratch}</span>
                </div>
                <div className="p-5 flex items-center gap-3 bg-primary/[0.03]">
                  <CheckIcon />
                  <span className="text-muted-foreground text-sm">{feature.propelkit}</span>
                </div>
              </div>
            ))}

            {/* Summary Section */}
            <div className="border-t-2 border-border bg-muted/30">
              {summary.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "grid grid-cols-3 group",
                    index !== summary.length - 1 && "border-b border-border"
                  )}
                >
                  <div className="p-5 flex items-center gap-3 bg-muted/50">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-semibold">{item.label}</p>
                  </div>
                  <div className="p-5 flex items-center border-x border-border bg-destructive/5">
                    <span className="text-destructive font-bold text-lg">{item.scratch}</span>
                  </div>
                  <div className="p-5 flex items-center bg-primary/10">
                    <span className="text-gradient font-bold text-lg">{item.propelkit}</span>
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

        {/* Mobile Cards - matching Features card style */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-4 border-b border-border bg-muted/50">
                <p className="font-semibold text-foreground">{feature.task}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 border-r border-border bg-destructive/5">
                  <div className="flex items-center gap-2 mb-2">
                    <XIcon />
                    <span className="text-xs text-destructive font-medium">From Scratch</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.scratch}</p>
                </div>
                <div className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon />
                    <span className="text-xs text-primary font-medium">PropelKit</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.propelkit}</p>
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
                className="bg-card border border-border rounded-2xl overflow-hidden hover-lift shadow-card"
              >
                <div className="p-4 border-b border-border bg-muted/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-border bg-destructive/5">
                    <p className="text-xs text-muted-foreground mb-1">From Scratch</p>
                    <p className="text-lg font-bold text-destructive">{item.scratch}</p>
                  </div>
                  <div className="p-4 bg-primary/5">
                    <p className="text-xs text-muted-foreground mb-1">PropelKit</p>
                    <p className="text-lg font-bold text-gradient">{item.propelkit}</p>
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
