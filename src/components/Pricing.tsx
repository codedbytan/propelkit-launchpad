import { Check, X, Zap, Crown, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Indie Hacker",
    subtitle: "For Solo Founders",
    price: "3,999",
    originalPrice: "7,999",
    badge: "Personal Projects",
    icon: Zap,
    popular: false,
    features: [
      { text: "Complete Source Code", included: true },
      { text: "Razorpay & GST Integration", included: true },
      { text: "Discord Community Access", included: true },
      { text: "Lifetime Updates", included: true },
      { text: "Personal License", included: true },
      { text: "Commercial License", included: false },
      { text: "Admin Dashboard", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Starter License",
  },
  {
    name: "Founder's Edition",
    subtitle: "For Startups & Agencies",
    price: "9,999",
    originalPrice: "19,999",
    badge: "Best Value",
    icon: Crown,
    popular: true,
    features: [
      { text: "Everything in Indie Hacker", included: true },
      { text: "Commercial License", included: true, highlight: true, sub: "Build unlimited client apps" },
      { text: "Full Admin Dashboard", included: true, highlight: true, sub: "User Management, Revenue Charts" },
      { text: "Priority Support", included: true, highlight: true, sub: "WhatsApp + Email" },
      { text: "Multi-Tenancy Support", included: true },
      { text: "1-on-1 Onboarding Call", included: true },
      { text: "Early Access to Features", included: true },
      { text: "Lifetime License", included: true },
    ],
    cta: "Get Founder License",
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
    description: "Up and running in 5 minutes",
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = async (planName: string, price: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${planName} plan at ₹${price}`,
    });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🔥 Launch Offer: 50% OFF
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Choose Your <span className="text-primary">Launch Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay once, build forever. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards - Technical Spec Sheet Style */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-none p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-[#0a0a0a] border border-primary/40"
                  : "bg-[#0a0a0a] border border-white/10 hover:border-white/20"
              }`}
              style={plan.popular ? {
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.08), 0 0 80px rgba(255, 215, 0, 0.04)'
              } : undefined}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5">
                  <Crown className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              {!plan.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                  {plan.badge}
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
                    {feature.included ? (
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-white/60'}`} />
                    ) : (
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/20" />
                    )}
                    <div className={feature.highlight ? 'bg-primary/10 -mx-2 px-2 py-1' : ''}>
                      <span className={`text-sm ${
                        !feature.included ? 'text-white/30 line-through' : 
                        feature.highlight ? 'font-medium text-white' : 'text-white/70'
                      }`}>
                        {feature.text}
                      </span>
                      {feature.sub && (
                        <p className="text-xs text-white/40 mt-0.5">{feature.sub}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleCheckout(plan.name, plan.price)}
                className={`w-full py-6 text-base font-semibold rounded-none ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
        <p className="text-center text-sm text-white/40 mt-8">
          🔒 Secure payment via Razorpay • Instant access after purchase
        </p>
      </div>
    </section>
  );
}
