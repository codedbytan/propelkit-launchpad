import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I use this for client work?",
    answer:
      "Yes! If you purchase the Founder's Edition (₹9,999), you get a commercial license that allows you to build unlimited client projects. The Indie Hacker plan is for personal projects only.",
  },
  {
    question: "Why use PropelKit over ShipFast?",
    answer:
      "ShipFast uses Stripe and LemonSqueezy which don't work well for Indian businesses. PropelKit is built specifically for India with Razorpay integration and complete GST compliance — including automatic IGST/CGST/SGST calculation and B2B invoice generation with HSN codes.",
  },
  {
    question: "Does it work with Razorpay subscriptions?",
    answer:
      "Absolutely! We have a complete useRazorpaySubscription hook that handles creating, updating, and canceling subscriptions. Webhook verification and smart retry logic are built-in.",
  },
  {
    question: "Is GST invoice generation automatic?",
    answer:
      "Yes! The GST engine automatically determines whether to apply IGST (inter-state) or CGST+SGST (intra-state) based on your business location and customer's GSTIN. PDF invoices with all required fields are generated automatically.",
  },
  {
    question: "Do I need a GST number to use this?",
    answer:
      "You don't need a GST number to use PropelKit. However, if you're running a business in India with revenue above the threshold, you'll need to register for GST. PropelKit makes it easy to go from unregistered to GST-compliant with just your GSTIN.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "We have an active Discord community where you can get help. Founder's Edition customers also get priority support via WhatsApp and email, plus a 1-on-1 onboarding call to get you started.",
  },
  {
    question: "What tech stack does PropelKit use?",
    answer:
      "PropelKit is built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Supabase (auth & database), Razorpay (payments), and Resend (transactional emails). Everything is strictly typed with no 'any' types.",
  },
  {
    question: "Do I get lifetime updates?",
    answer:
      "Yes! Once you purchase PropelKit, you get access to all future updates forever. We regularly add new features, improve existing ones, and keep dependencies up to date — all included in your one-time payment.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
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
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card data-[state=open]:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
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
