import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I get exactly?",
    answer: `1/ The Next.js starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more.

The repo is available in TypeScript with App Router.

2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.

3/ Access to our Discord with 500+ makers to showcase your startup and get feedback.`,
  },
  {
    question: "Is this a subscription or one-time payment?",
    answer: "One-time payment. You pay ₹3,999 (Starter) or ₹7,999 (All-in) once, and own the code forever. No recurring fees, ever.",
  },
  {
    question: "Does PropelKit work with AI (Cursor, Copilot)?",
    answer: `It does not only work with AI, it's built for it.

PropelKit comes with a complete codebase—which gives your AI code editor real context to build full features in seconds.

You can just ask your AI to build the feature you need, and it will generate the code for you, using the naming convention, file structure, and best practices you're used to.`,
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
    question: "Can I get a refund?",
    answer: "Yes. 7-day money-back guarantee. If you're not satisfied, email me and I'll refund you—no questions asked.",
  },
  {
    question: "How long does setup take?",
    answer: "30-60 minutes. Clone the repo, add your API keys (Razorpay, Supabase, Resend), and deploy. The docs guide you step-by-step.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-white/50 mb-2">
          Frequently Asked Questions
        </p>
        <p className="text-center text-sm text-white/50 mb-12">
          Have another question? Contact me on{" "}
          <a href="#" className="text-primary hover:underline">
            Twitter
          </a>{" "}
          or by{" "}
          <a href="mailto:hello@propelkit.com" className="text-primary hover:underline">
            email
          </a>
          .
        </p>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-neutral-900 border border-white/10 px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4 leading-relaxed whitespace-pre-line">
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
