import { CreditCard, FileText, Shield, Mail, Code2, Palette } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Razorpay Native",
    description: "Webhooks, Smart Retries, and Subscription logic. No 'Merchant of Record' fees.",
    code: `const { createOrder } = useRazorpay();
await createOrder({ amount: 3999 });`,
  },
  {
    icon: FileText,
    title: "GST Engine",
    description: "Auto-calculates IGST vs CGST/SGST based on customer GSTIN. B2B compliant.",
    code: `{ state: "MH", tax: "CGST+SGST", rate: "18%" }`,
  },
  {
    icon: Shield,
    title: "Supabase Auth",
    description: "Magic Links, Google Login, and Row Level Security policies ready to go.",
    code: `const { user } = await supabase.auth.getUser();`,
  },
  {
    icon: Mail,
    title: "React Email",
    description: "Beautiful transactional emails that don't land in spam. Invoice templates included.",
    code: `await sendInvoice({ to: user.email, invoice });`,
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description: "100% TypeScript with Next.js 14 App Router. Server Components ready.",
    code: `// Strict mode enabled, zero any types`,
  },
  {
    icon: Palette,
    title: "20+ UI Components",
    description: "Pre-built dashboard, landing pages, and admin panels with Tailwind CSS.",
    code: `<DashboardLayout> <YourApp /> </DashboardLayout>`,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-4">
            const launch_time = '07:51 PM';
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything you need to <span className="text-primary">ship fast</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop rebuilding the same features for every project. Get a production-ready foundation.
          </p>
        </div>

        {/* Features Grid - Stealth Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20"
            >
              {/* Icon - Yellow accent only */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Code Preview - VS Code style */}
              <div className="relative rounded-md overflow-hidden">
                {/* Window controls */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e1e1e] border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27ca40]" />
                  <span className="ml-2 text-[10px] text-white/40 font-mono">code.ts</span>
                </div>
                {/* Code content */}
                <div className="bg-[#0d0d0d] p-3 font-mono text-xs overflow-x-auto">
                  <code className="text-emerald-400">{feature.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">20+ pre-built components included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
