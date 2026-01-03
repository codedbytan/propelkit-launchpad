import { Check, X, Zap, Crown, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Starter License",
    subtitle: "Best for Solo Founders",
    price: "3,999",
    originalPrice: "6,999",
    icon: Zap,
    popular: false,
    features: [
      { text: "Complete Next.js 14 source code", included: true },
      { text: "Razorpay integration + webhooks", included: true },
      { text: "GST invoice engine", included: true },
      { text: "Supabase auth + database", included: true },
      { text: "5 email templates (Resend)", included: true },
      { text: "50+ Tailwind components", included: true },
      { text: "User dashboard", included: true },
      { text: "Lifetime updates", included: true },
      { text: "Discord community access", included: true },
      { text: "Commercial license", included: false },
      { text: "Admin dashboard", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Starter License",
    footer: "For 1 project. Personal use only.",
  },
  {
    name: "Agency License",
    subtitle: "For Startups & Agencies",
    price: "7,999",
    originalPrice: "14,999",
    icon: Crown,
    popular: true,
    features: [
      { text: "Everything in Starter, PLUS:", included: true, isHeader: true },
      { text: "Build unlimited client projects", included: true, highlight: true },
      { text: "Full admin dashboard", included: true, highlight: true, sub: "Revenue, users, bans" },
      { text: "Multi-tenancy support", included: true },
      { text: "User management panel", included: true },
      { text: "Blog/SEO engine (MDX)", included: true },
      { text: "Priority WhatsApp support", included: true, highlight: true },
      { text: "1-on-1 onboarding call", included: true },
      { text: "Reseller rights", included: true },
      { text: "Early access to features", included: true },
      { text: "Lifetime license", included: true },
    ],
    cta: "Get Agency License",
    footer: "Build for clients. Keep 100% of revenue.",
  },
];

const valueProps = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Razorpay-verified merchant",
  },
  {
    icon: Sparkles,
    title: "Lifetime Updates",
    description: "Free forever, no subscriptions",
  },
  {
    icon: Crown,
    title: "Easy Integration",
    description: "Up and running in 30 minutes",
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = async (planName: string, price: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${planName} at ₹${price}`,
    });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🔥 Launch Offer: 50% OFF
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Pay Once. Build Forever.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just a one-time payment and lifetime access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-[#0a0a0a] border border-primary/40"
                  : "bg-[#0a0a0a] border border-white/10 hover:border-white/20"
              }`}
              style={plan.popular ? {
                boxShadow: '0 0 40px rgba(255, 190, 24, 0.08), 0 0 80px rgba(255, 190, 24, 0.04)'
              } : undefined}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5">
                  <Crown className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-2 pt-2">
                <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-white/60'}`} />
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>
              <p className="text-sm text-white/50 mb-6">{plan.subtitle}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-white/40 line-through font-mono">₹{plan.originalPrice}</span>
                  {plan.popular && (
                    <span className="text-xs px-2 py-0.5 bg-success/10 text-success font-medium">
                      Save ₹7,000
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold font-mono text-white">₹{plan.price}</span>
                  <span className="text-white/50 text-sm">one-time + GST</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`border-t mb-6 ${plan.popular ? 'border-primary/20' : 'border-white/10'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.isHeader ? (
                      <span className="text-sm font-medium text-white">{feature.text}</span>
                    ) : feature.included ? (
                      <>
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-white/60'}`} />
                        <div className={feature.highlight ? 'bg-primary/10 -mx-2 px-2 py-1' : ''}>
                          <span className={`text-sm ${feature.highlight ? 'font-medium text-white' : 'text-white/70'}`}>
                            {feature.text}
                          </span>
                          {feature.sub && (
                            <p className="text-xs text-white/40 mt-0.5">{feature.sub}</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/20" />
                        <span className="text-sm text-white/30 line-through">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleCheckout(plan.name, plan.price)}
                className={`w-full py-6 text-base font-semibold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Footer */}
              <p className="text-center text-xs text-white/40 mt-4">{plan.footer}</p>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <prop.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-white">{prop.title}</p>
                <p className="text-sm text-white/50">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="text-center text-sm text-white/40 mb-4">
          💳 Secure payment via Razorpay • 🔒 Your code. Your server. No vendor lock-in. • ⚡ Instant access after payment
        </p>

        {/* Urgency */}
        <p className="text-center text-sm font-medium text-primary">
          ⏰ Launch Offer: ₹3,000 off ends soon
        </p>

        {/* Guarantee */}
        <div className="text-center mt-8 p-4 max-w-md mx-auto border border-white/10 bg-white/5">
          <p className="text-sm text-white/70">
            🛡️ <span className="font-semibold text-white">7-Day Money-Back Guarantee</span>
            <br />
            <span className="text-white/50">If PropelKit doesn't save you 20+ hours, I'll refund you. No questions asked.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
