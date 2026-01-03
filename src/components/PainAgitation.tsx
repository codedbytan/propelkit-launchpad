import { ArrowDown } from "lucide-react";

const painLines = [
  "4 hrs to set up emails",
  "+ 6 hrs designing a landing page",
  "+ 4 hrs to handle Razorpay webhooks",
  "+ 2 hrs for SEO tags",
  "+ 1 hr applying for Google OAuth",
  "+ 3 hrs for DNS records",
  "+ 2 hrs for GST invoicing logic",
  "+ ∞ hrs overthinking...",
];

export function PainAgitation() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Pain list */}
            <div className="bg-destructive/5 border border-destructive/20 p-8">
              <div className="space-y-3 font-mono text-sm">
                {painLines.map((line, i) => (
                  <p key={i} className="text-destructive/80">
                    {line}
                  </p>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-destructive/20">
                <p className="text-2xl font-bold text-destructive">
                  = 22+ hours of headaches
                </p>
              </div>
            </div>

            {/* Right: Solution */}
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                There's an easier way
              </p>
              <p className="font-mono text-primary text-lg">
                const launch_time = "Today";
              </p>
              
              <a
                href="#features"
                className="inline-flex items-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
                <span className="text-sm">See how</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
