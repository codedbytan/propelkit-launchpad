import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a subscription or one-time payment?",
    answer: "One-time payment. You pay ₹3,999 (Starter) or ₹7,999 (Agency) once, and own the code forever. No recurring fees, ever.",
  },
  {
    question: "What if I don't know Next.js?",
    answer: "PropelKit is built for developers with basic React knowledge. The included documentation walks you through every step. Plus, you get Discord support from the community.",
  },
  {
    question: "Can I use this for client projects?",
    answer: "Only with the Agency License (₹7,999). The Starter License is for personal projects only.",
  },
  {
    question: "How is this different from ShipFast or BoilerCode?",
    answer: "Those are built for US markets (Stripe, USD, no tax logic). PropelKit has Razorpay, GST invoicing, and Indian compliance built-in. It's the only boilerplate designed for ₹ rupee businesses.",
  },
  {
    question: "Does it work with Razorpay subscriptions?",
    answer: "Absolutely! We have a complete useRazorpaySubscription hook that handles creating, updating, and canceling subscriptions. Webhook verification and smart retry logic are built-in.",
  },
  {
    question: "Is GST invoice generation automatic?",
    answer: "Yes! The GST engine automatically determines whether to apply IGST (inter-state) or CGST+SGST (intra-state) based on your business location and customer's GSTIN. PDF invoices with all required fields are generated automatically.",
  },
  {
    question: "Do I need a GST number to use this?",
    answer: "You don't need a GST number to use PropelKit. However, if you're running a business in India with revenue above the threshold, you'll need to register for GST. PropelKit makes it easy to go from unregistered to GST-compliant with just your GSTIN.",
  },
  {
    question: "Do I get updates?",
    answer: "Yes. Lifetime updates are included. When I add new features (like UPI autopay or invoice reminders), you get them free.",
  },
  {
    question: "What if I need help?",
    answer: "Starter License: Discord community + documentation. Agency License: Priority WhatsApp + email support + 1-on-1 onboarding call.",
  },
  {
    question: "What tech stack does this use?",
    answer: "Next.js 14 (App Router), Supabase (auth + DB), Tailwind CSS, TypeScript, shadcn/ui, Razorpay, Resend (emails), Vercel (deployment).",
  },
  {
    question: "How long does setup take?",
    answer: "30-60 minutes. Clone the repo, add your API keys (Razorpay, Supabase, Resend), and deploy. The docs guide you step-by-step.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes. 7-day money-back guarantee. If you're not satisfied, email me and I'll refund you—no questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Questions? <span className="text-primary">Answers.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PropelKit
          </p>
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
      </div>
    </section>
  );
}
