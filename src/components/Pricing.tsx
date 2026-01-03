import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Starter",
    price: "3,999",
    originalPrice: "6,999",
    features: [
      "NextJS boilerplate",
      "SEO & Blog",
      "Resend emails",
      "Razorpay payments",
      "Supabase database",
      "Google OAuth & Magic Links",
      "Components & animations",
      "GST invoice engine",
      "Discord community",
      "Lifetime updates",
    ],
    cta: "Get PropelKit",
    footer: "Pay once. Build unlimited projects!",
  },
  {
    name: "All-in",
    price: "7,999",
    originalPrice: "14,999",
    popular: true,
    features: [
      "NextJS boilerplate",
      "SEO & Blog",
      "Resend emails",
      "Razorpay payments",
      "Supabase database",
      "Google OAuth & Magic Links",
      "Components & animations",
      "GST invoice engine",
      "Discord community",
      "Lifetime updates",
      { text: "Updated 3 weeks ago", highlight: true },
    ],
    cta: "Get PropelKit",
    footer: "Pay once. Build unlimited projects!",
  },
];

export function Pricing() {
  const { toast } = useToast();

  const handleCheckout = (planName: string) => {
    toast({
      title: "Redirecting to checkout...",
      description: `Processing ${planName}`,
    });
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <p className="text-center text-sm text-primary mb-2">Pricing</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-4">
          Save hours of repetitive code,
          <br />
          ship fast, get profitable!
        </h2>
        <p className="text-center text-primary text-sm mb-12">
          ₹3,000 off for the first 100 customers (10 left)
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 ${
                plan.popular
                  ? "bg-neutral-900 border-2 border-primary"
                  : "bg-neutral-900 border border-white/10"
              }`}
            >
              {/* Name */}
              <p className="text-lg font-medium text-white/60 mb-4">{plan.name}</p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-white/40 line-through">
                  ₹{plan.originalPrice}
                </span>
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-white/50 text-sm">INR</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => {
                  const text = typeof feature === "string" ? feature : feature.text;
                  const highlight = typeof feature === "object" && feature.highlight;
                  
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span
                        className={`text-sm ${
                          highlight ? "text-primary font-medium" : "text-white/70"
                        }`}
                      >
                        {text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handleCheckout(plan.name)}
                className={`w-full py-6 text-base font-semibold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Footer */}
              <p className="text-center text-xs text-white/40 mt-4">{plan.footer}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white/80 mb-4 italic">
            "I was able to launch my project in just one day! I made ₹17,000 already."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Mateus"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-medium text-white text-sm">Rahul Verma</p>
              <p className="text-xs text-white/50">Built a SaaS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
