import { CreditCard, FileText, IndianRupee } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Payment Gateway Ready",
    description: "Razorpay Orders API pre-configured. Webhooks, signature verification, and invoice generation—all done.",
    badge: "Saves 6 hours",
  },
  {
    icon: FileText,
    title: "Auto GST Invoicing",
    description: "IGST/CGST/SGST calculated automatically based on customer state. PDF invoices generated on every purchase.",
    badge: "100% Compliant",
  },
  {
    icon: IndianRupee,
    title: "Built for Rupees",
    description: "Currency formatting, state-based tax logic, and Indian UPI fallback—no foreign exchange confusion.",
    badge: "India-First",
  },
];

export function IndiaStackUSP() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            The "India Stack" That US Boilerplates Don't Have
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Indian developers and businesses
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Badge */}
              <span className="inline-flex px-3 py-1 bg-success/10 text-success text-sm font-medium">
                {feature.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
