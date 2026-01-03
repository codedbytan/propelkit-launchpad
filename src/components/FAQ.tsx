import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I get exactly?",
    answer: "1/ The complete NextJS 14 boilerplate with all code to run a SaaS: Razorpay payments, Supabase database, authentication, GST invoicing, email system, and 50+ UI components. 2/ Full documentation on setup, deployment, and customization. 3/ Access to Discord community and lifetime updates.",
  },
  {
    question: "Does PropelKit work with AI (Cursor, Copilot)?",
    answer: "Yes! PropelKit is built for AI code editors. The complete codebase gives your AI real context to build features in seconds. Just ask your AI to build what you need, and it will use PropelKit's patterns and components.",
  },
  {
    question: "Is this just a template?",
    answer: "No. It's a complete business foundation. You get payment processing, database, authentication, GST invoicing, email system, and admin dashboard. Everything you need to run a SaaS business, not just a landing page.",
  },
  {
    question: "How is PropelKit different from ShipFast or other boilerplates?",
    answer: "US boilerplates use Stripe (doesn't work well in India) and USD pricing. PropelKit has native Razorpay integration, automatic GST invoice generation (IGST/CGST/SGST), and INR currency formatting. It's the only boilerplate built specifically for the Indian market.",
  },
  {
    question: "Can I use this for client projects?",
    answer: "Only with the Agency License (₹7,999). The Starter License is for personal projects only. Agency License allows unlimited client projects.",
  },
  {
    question: "What if I don't know Next.js?",
    answer: "PropelKit works best if you have basic React knowledge. The documentation walks you through setup step-by-step. The code is clean and well-commented. Plus, Discord community is there to help.",
  },
  {
    question: "Do I need a GST number?",
    answer: "No. You can use PropelKit without GST registration. However, if your business crosses the GST threshold, PropelKit makes it easy to become GST-compliant - just add your GSTIN and it handles everything.",
  },
  {
    question: "How do I get the code after purchase?",
    answer: "Instant access. After payment, you'll receive an email with login credentials to your dashboard. Download the complete codebase as a ZIP file from there. No GitHub access needed.",
  },
  {
    question: "Do I get updates?",
    answer: "Yes. Lifetime updates included with both licenses. When I add new features or fix bugs, you get them free forever.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes. 7-day money-back guarantee. If PropelKit doesn't work for you, email me within 7 days for a full refund. No questions asked.",
  },
  {
    question: "What's included in Priority Support?",
    answer: "Agency License includes WhatsApp + Email support with <24hr response time, plus a 1-on-1 onboarding call to help you get started. Starter License includes Discord community support.",
  },
  {
    question: "Is the code obfuscated?",
    answer: "No. You get 100% readable, well-commented source code. No minification, no obfuscation. You own the code and can modify it however you want.",
  },
  {
    question: "Can I hire you for custom work?",
    answer: "Yes. If you need custom features beyond what PropelKit provides, I offer consulting at ₹5,000/hour. Email me: tanishq@propelkit.dev",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white/5 border border-white/10 px-6 data-[state=open]:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:tanishq@propelkit.dev" className="text-primary hover:underline">
              Email me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
