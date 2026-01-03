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
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Sparkles,
    title: "Lifetime Updates",
    description: "Free forever, no subscriptions",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Crown,
    title: "Easy Integration",
    description: "Up and running in 5 minutes",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
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
        <div className="text-center mb-16">
          <div className="badge-launch inline-flex mb-4">
            🔥 Launch Offer: 50% OFF
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Choose Your <span className="text-gradient">Launch Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay once, build forever. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary/50 shadow-glow scale-[1.02] bg-card"
                  : "receipt-card hover-lift"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 gradient-primary rounded-full text-primary-foreground text-sm font-semibold flex items-center gap-1.5 shadow-glow">
                  <Crown className="w-4 h-4" />
                  {plan.badge}
                </div>
              )}

              {!plan.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-2 pt-2">
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground line-through">₹{plan.originalPrice}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold font-mono">₹{plan.price}</span>
                  <span className="text-muted-foreground">one-time + GST</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`border-t mb-6 ${plan.popular ? 'border-primary/20' : 'border-dashed border-border'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-primary' : 'text-green-500'}`} />
                    ) : (
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-muted-foreground/40" />
                    )}
                    <div className={feature.highlight ? 'bg-primary/10 -mx-2 px-2 py-1 rounded-md' : ''}>
                      <span className={`text-sm ${
                        !feature.included ? 'text-muted-foreground/40 line-through' : 
                        feature.highlight ? 'font-semibold' : ''
                      }`}>
                        {feature.text}
                      </span>
                      {feature.sub && (
                        <p className="text-xs text-muted-foreground mt-0.5">{feature.sub}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleCheckout(plan.name, plan.price)}
                className={`w-full py-6 text-base font-semibold ${
                  plan.popular
                    ? "gradient-primary shadow-glow text-primary-foreground hover:opacity-90"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div className={`w-12 h-12 rounded-xl ${prop.bgColor} flex items-center justify-center`}>
                <prop.icon className={`w-6 h-6 ${prop.color}`} />
              </div>
              <div>
                <p className="font-semibold">{prop.title}</p>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          🔒 Secure payment via Razorpay • Instant access after purchase
        </p>
      </div>
    </section>
  );
}
