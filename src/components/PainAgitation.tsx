import { Clock, ArrowDown } from "lucide-react";

const painPoints = [
  { task: "Setting up Razorpay webhooks", hours: 6 },
  { task: "Debugging GST calculations", hours: 4 },
  { task: "Building auth + email flows", hours: 8 },
  { task: "Designing a pricing page", hours: 3 },
  { task: "Responsive Tailwind components", hours: 5 },
  { task: "Writing tax invoice PDFs", hours: 2 },
];

export function PainAgitation() {
  const totalHours = painPoints.reduce((acc, item) => acc + item.hours, 0);
  const totalCost = totalHours * 500; // ₹500/hr

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12">
            The Real Cost of Building from Scratch
          </h2>

          {/* Pain Points List */}
          <div className="bg-destructive/5 border border-destructive/20 p-8 mb-8">
            <div className="space-y-4 text-left">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 border-b border-destructive/10 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-destructive" />
                    <span className="text-destructive">{item.task}</span>
                  </div>
                  <span className="font-mono text-destructive">{item.hours} hrs</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-8 pt-6 border-t border-destructive/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Total Time Wasted</span>
                <span className="text-2xl font-bold font-mono text-destructive">{totalHours}+ hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Developer Cost (at ₹500/hr)</span>
                <span className="text-3xl font-bold font-mono text-destructive">
                  ₹{totalCost.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Emoji */}
            <p className="mt-6 text-center text-2xl">😤</p>
          </div>

          {/* Hook */}
          <div className="flex flex-col items-center gap-4 animate-fade-up">
            <p className="text-xl font-medium text-muted-foreground">There's a better way</p>
            <a
              href="#features"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
