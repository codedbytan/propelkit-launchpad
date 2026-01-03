import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Indie Hacker",
    price: "₹3,999",
    subtitle: "For Solo Founders",
    features: [
      "Complete Source Code",
      "Razorpay & GST Integration",
      "Discord Community Access",
      "Lifetime Updates",
      "Personal License",
    ],
    popular: false,
    cta: "Get Starter License",
  },
  {
    name: "Founder's Edition",
    price: "₹9,999",
    subtitle: "For Startups & Agencies",
    features: [
      { text: "Commercial License", highlight: true, sub: "Build unlimited client apps" },
      { text: "Full Admin Dashboard", highlight: true, sub: "User Management, Revenue Charts" },
      { text: "Priority Support", highlight: true, sub: "WhatsApp" },
      "Everything in Indie Hacker",
      "Multi-Tenancy Support",
      "1-on-1 Onboarding Call",
    ],
    popular: true,
    cta: "Get Founder License",
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = async (planName: string, price: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${planName} plan at ${price}`,
    });
    console.log(`Checkout initiated for ${planName} at ${price}`);
  };

  return (
    <section id="pricing" className="py-24 noise-bg grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Pay once, <span className="text-gradient">build forever.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just a one-time payment for lifetime access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "glow-border bg-card animate-pulse-glow"
                  : "receipt-card hover-lift"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-glow">
                  <Sparkles className="w-3 h-3" />
                  Best Value
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-bold font-mono text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => {
                  const isObject = typeof feature === 'object';
                  const text = isObject ? feature.text : feature;
                  const highlight = isObject ? feature.highlight : false;
                  const sub = isObject ? feature.sub : null;

                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div>
                        <span className={`text-sm ${highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                          {text}
                        </span>
                        {sub && (
                          <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => handleCheckout(plan.name, plan.price)}
                className={`w-full py-6 text-base font-semibold ${
                  plan.popular
                    ? "gradient-primary shadow-glow text-primary-foreground hover:opacity-90"
                    : "bg-transparent border border-border hover:bg-muted text-foreground"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          🔒 Secure payment via Razorpay. Instant access after purchase.
        </p>
      </div>
    </section>
  );
}
