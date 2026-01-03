import { Check, X, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const starterFeatures = [
  { text: "Complete NextJS 14 source code", included: true },
  { text: "Razorpay integration + webhooks", included: true },
  { text: "GST invoice engine", included: true },
  { text: "Supabase auth + database", included: true },
  { text: "50+ Tailwind components", included: true },
  { text: "Email templates (Resend)", included: true },
  { text: "Lifetime updates", included: true },
  { text: "Discord community", included: true },
  { text: "Commercial license", included: true },
  { text: "Admin dashboard", included: false },
];

const agencyFeatures = [
  { text: "Everything in Starter, PLUS:", isHeader: true },
  { text: "Build unlimited client projects", included: true },
  { text: "Full admin dashboard", included: true },
  { text: "User management panel", included: true },
  { text: "Revenue analytics charts", included: true },
  { text: "Multi-tenancy support", included: true },
  { text: "Priority support (WhatsApp + Email)", included: true },
  { text: "1-on-1 onboarding call", included: true },
  { text: "Early access to new features", included: true },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = async (plan: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${plan} license`,
    });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Save hours of repetitive code, ship fast, get profitable!
          </p>
          <p className="text-sm font-medium text-primary">
            ₹3,000 off for early adopters (50 spots left)
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Starter */}
          <div className="bg-[#0a0a0a] border border-white/10 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-muted-foreground line-through">₹6,999</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-mono">₹3,999</span>
                <span className="text-sm text-muted-foreground">one-time + GST</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {starterFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? "text-sm" : "text-sm text-muted-foreground/50 line-through"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handleCheckout('starter')}
              variant="outline"
              className="w-full py-6 text-base font-semibold"
              size="lg"
            >
              Get Starter License
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Pay once. Build unlimited personal projects!
            </p>
          </div>

          {/* Agency */}
          <div className="relative bg-[#0a0a0a] border border-primary/40 p-8" style={{
            boxShadow: '0 0 40px rgba(255, 190, 24, 0.08)'
          }}>
            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold">
              MOST POPULAR
            </div>

            <div className="mb-6 pt-2">
              <h3 className="text-xl font-bold mb-2">Agency</h3>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-muted-foreground line-through">₹14,999</p>
                <span className="text-xs px-2 py-0.5 bg-success/10 text-success font-medium">
                  Save ₹7,000
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-mono">₹7,999</span>
                <span className="text-sm text-muted-foreground">one-time + GST</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {agencyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {feature.isHeader ? (
                    <span className="text-sm font-medium">{feature.text}</span>
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature.text}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handleCheckout('agency')}
              className="w-full py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Get Agency License
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Pay once. Build unlimited client projects!
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure payment via Razorpay</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Lifetime updates included</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Instant access after payment</span>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center max-w-md mx-auto p-4 border border-white/10 bg-white/5">
          <p className="text-sm">
            🛡️ <span className="font-semibold">7-Day Money-Back Guarantee</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            If PropelKit doesn't save you 20+ hours, I'll refund you. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
