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
      "Yes, if you buy the Founder's Edition (₹9,999), you have a commercial license to build unlimited client projects.",
  },
  {
    question: "Why use this over ShipFast?",
    answer:
      "ShipFast uses Stripe/LemonSqueezy. We use Razorpay and handle Indian GST Compliance (Invoicing, HSN codes). If you are incorporated in India, you need this.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "We have a Discord community and I provide direct support via email. Founder's Edition holders get priority WhatsApp support.",
  },
  {
    question: "What tech stack does PropelKit use?",
    answer:
      "PropelKit is built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Supabase (for auth & database), Razorpay (for payments), and Resend (for emails).",
  },
  {
    question: "Do I get lifetime updates?",
    answer:
      "Absolutely! Once you purchase PropelKit, you get access to all future updates forever. We regularly add new features and improvements.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 noise-bg grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
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
