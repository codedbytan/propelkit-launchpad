import { Wallet, Shield, Mail, RefreshCw, Code, Zap } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Razorpay & GST Ready",
    description: "Pre-integrated Razorpay with automatic GST invoice generation. Accept payments in INR instantly.",
    badge: "🇮🇳 India First",
    large: true,
  },
  {
    icon: Shield,
    title: "Supabase Auth",
    description: "Complete authentication system with magic links, OAuth, and role-based access.",
    badge: null,
    large: false,
  },
  {
    icon: Mail,
    title: "Resend Emails",
    description: "Beautiful transactional emails with React Email templates, pre-configured.",
    badge: null,
    large: false,
  },
  {
    icon: RefreshCw,
    title: "Lifetime Updates",
    description: "Get all future updates and new features forever. No recurring fees.",
    badge: "∞",
    large: false,
  },
  {
    icon: Code,
    title: "TypeScript First",
    description: "100% TypeScript codebase with strict typing for better developer experience.",
    badge: null,
    large: false,
  },
  {
    icon: Zap,
    title: "Next.js 14",
    description: "Built on the latest Next.js with App Router, Server Components, and more.",
    badge: null,
    large: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="text-gradient">ship fast.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop rebuilding the same features for every project. Get a production-ready foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift transition-all duration-300 ${
                feature.large ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {feature.badge}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Large card extra content */}
              {feature.large && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-muted-foreground">UPI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-muted-foreground">Cards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-muted-foreground">Netbanking</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
