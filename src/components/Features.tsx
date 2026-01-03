import { CreditCard, FileText, Shield, Mail, Code2, Palette } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Razorpay Native",
    description: "Webhooks, Smart Retries, and Subscription logic. No 'Merchant of Record' fees.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    code: `const { createOrder } = useRazorpay();
await createOrder({ amount: 3999 });`,
  },
  {
    icon: FileText,
    title: "GST Engine",
    description: "Auto-calculates IGST vs CGST/SGST based on customer GSTIN. B2B compliant.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    code: `{ state: "MH", tax: "CGST+SGST", rate: "18%" }`,
  },
  {
    icon: Shield,
    title: "Supabase Auth",
    description: "Magic Links, Google Login, and Row Level Security policies ready to go.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    code: `const { user } = await supabase.auth.getUser();`,
  },
  {
    icon: Mail,
    title: "React Email",
    description: "Beautiful transactional emails that don't land in spam. Invoice templates included.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    code: `await sendInvoice({ to: user.email, invoice });`,
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description: "100% TypeScript with Next.js 14 App Router. Server Components ready.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    code: `// Strict mode enabled, zero any types`,
  },
  {
    icon: Palette,
    title: "20+ UI Components",
    description: "Pre-built dashboard, landing pages, and admin panels with Tailwind CSS.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    code: `<DashboardLayout> <YourApp /> </DashboardLayout>`,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-lime-500 mb-4">
            const launch_time = '07:51 PM';
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything you need to <span className="text-gradient">ship fast</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop rebuilding the same features for every project. Get a production-ready foundation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bento-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 bento-card-title transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Code Preview */}
              <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs text-muted-foreground overflow-x-auto">
                <code>{feature.code}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">20+ pre-built components included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
