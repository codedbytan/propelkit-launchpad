import { Check, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeatureStats {
  timeSaved: string;
  headaches?: string;
  compliance?: string;
}

interface Feature {
  title: string;
  isIndiaOnly?: boolean;
  benefits: string[];
  stats: FeatureStats;
  code: string;
}

const features: Record<string, Feature> = {
  emails: {
    title: "Emails",
    benefits: [
      "Send transactional emails",
      "DNS setup to avoid spam folder (DKIM, DMARC, SPF)",
      "5 pre-built email templates",
      "Webhook to receive & forward emails",
    ],
    stats: { timeSaved: "3 hours", headaches: "0" },
    code: `import { sendEmail } from '@/lib/resend';

await sendEmail({
  to: user.email,
  subject: 'Welcome to PropelKit',
  template: 'welcome',
});`,
  },
  payments: {
    title: "Payments",
    benefits: [
      "Accept payments via Razorpay (Cards, UPI, NetBanking)",
      "Webhook verification & signature handling",
      "One-time payments & subscriptions",
      "Automatic license key generation",
    ],
    stats: { timeSaved: "6 hours" },
    code: `import { createOrder } from '@/lib/razorpay';

const order = await createOrder({
  amount: 3999 * 100, // paise
  currency: 'INR',
});`,
  },
  login: {
    title: "Login",
    benefits: [
      "Email + password authentication",
      "Magic link login",
      "Google OAuth ready",
      "Protected routes & middleware",
    ],
    stats: { timeSaved: "4 hours" },
    code: `const { user } = await supabase.auth.getUser();

if (!user) {
  redirect('/login');
}`,
  },
  database: {
    title: "Database",
    benefits: [
      "PostgreSQL via Supabase",
      "Type-safe queries with TypeScript",
      "Row Level Security policies",
      "Real-time subscriptions",
    ],
    stats: { timeSaved: "5 hours" },
    code: `const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId);`,
  },
  seo: {
    title: "SEO",
    benefits: [
      "Meta tags & Open Graph",
      "Sitemap generation",
      "robots.txt configured",
      "Structured data (JSON-LD)",
    ],
    stats: { timeSaved: "2 hours" },
    code: `export const metadata = {
  title: 'Your SaaS',
  description: 'Ship faster',
  openGraph: { ... },
};`,
  },
  gst: {
    title: "GST",
    isIndiaOnly: true,
    benefits: [
      "Automatic IGST vs CGST+SGST calculation",
      "Generate compliant PDF invoices",
      "State-based tax logic pre-built",
      "Currency formatting in ₹ (rupees)",
    ],
    stats: { timeSaved: "4 hours", compliance: "100%" },
    code: `import { calculateGST } from '@/lib/gst';

const tax = calculateGST({
  amount: 3999,
  customerState: 'MH',
  businessState: 'KA',
});
// { igst: 0, cgst: 359.91, sgst: 359.91 }`,
  },
  style: {
    title: "Style",
    benefits: [
      "50+ pre-built Tailwind components",
      "Dark mode by default",
      "Responsive on all devices",
      "shadcn/ui integration",
    ],
    stats: { timeSaved: "10 hours" },
    code: `<Button variant="primary">
  Get Started
</Button>

<Card>
  <CardHeader>...</CardHeader>
</Card>`,
  },
};

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Supercharge your app instantly, launch faster, make ₹
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="payments" className="max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {Object.entries(features).map(([key, feature]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-8 bg-white/5 border border-white/10 p-8">
                {/* Left: Benefits */}
                <div>
                  {feature.isIndiaOnly && (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary mb-4">
                      India-Only Feature
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Time saved:</span>
                      <span className="font-semibold">{feature.stats.timeSaved}</span>
                    </div>
                    {feature.stats.headaches !== undefined && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Headaches:</span>
                        <span className="font-semibold ml-1">{feature.stats.headaches}</span>
                      </div>
                    )}
                    {feature.stats.compliance && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Compliance:</span>
                        <span className="font-semibold text-success ml-1">{feature.stats.compliance}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Code */}
                <div className="bg-[#0a0a0a] border border-white/10 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27ca40]" />
                    <span className="ml-2 text-xs text-white/40 font-mono">code.ts</span>
                  </div>
                  <pre className="p-4 font-mono text-xs md:text-sm overflow-x-auto">
                    <code className="text-success">{feature.code}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
