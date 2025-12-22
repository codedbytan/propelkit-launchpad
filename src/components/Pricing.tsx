import { Check, Sparkles, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Starter",
    price: "₹3,999",
    originalPrice: "₹7,999",
    description: "Perfect for indie hackers building their first SaaS.",
    features: [
      "Complete source code",
      "Razorpay integration",
      "GST invoicing",
      "Supabase Auth",
      "Email templates",
      "Lifetime updates",
      "Personal license",
    ],
    popular: false,
  },
  {
    name: "Agency",
    price: "₹9,999",
    originalPrice: "₹19,999",
    description: "For agencies and developers building for clients.",
    features: [
      "Everything in Starter",
      "Commercial license",
      "Use for unlimited client projects",
      "Priority support",
      "Private Discord access",
      "Early access to new features",
      "1-on-1 onboarding call",
    ],
    popular: true,
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = async (planName: string, price: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${planName} plan at ${price}`,
    });
    // TODO: Connect to /api/checkout when Supabase is enabled
    console.log(`Checkout initiated for ${planName} at ${price}`);
  };

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Launch Offer Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 p-4 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-6 h-6 animate-pulse" />
                <span className="text-lg md:text-xl font-bold">🔥 LAUNCH OFFER</span>
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-primary">50% OFF</span>
                <span className="text-muted-foreground ml-2">— Limited Time Only!</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span>Ends Soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pay once, <span className="text-gradient">build forever.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Just a one-time payment for lifetime access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border hover-lift"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-primary-foreground text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-muted-foreground line-through">{plan.originalPrice}</span>
                </div>
                <span className="text-muted-foreground">one-time payment</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleCheckout(plan.name, plan.price)}
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? "gradient-primary shadow-glow hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          🔒 Secure payment via Razorpay. Instant access after purchase.
        </p>
      </div>
    </section>
  );
}
