import { ArrowDown } from "lucide-react";

const painPoints = [
  { time: "4 hrs", task: "to set up emails" },
  { time: "+ 6 hrs", task: "designing a landing page" },
  { time: "+ 4 hrs", task: "to handle Razorpay webhooks" },
  { time: "+ 2 hrs", task: "for SEO tags" },
  { time: "+ 1 hr", task: "applying for Google OAuth" },
  { time: "+ 3 hrs", task: "for DNS records" },
  { time: "+ 2 hrs", task: "for protected API routes" },
  { time: "+ ∞ hrs", task: "overthinking..." },
];

export function PainAgitation() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Pain Points List */}
          <div className="space-y-3 mb-8">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <span className="text-destructive font-mono min-w-[80px]">{point.time}</span>
                <span>{point.task}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center gap-3 text-xl font-bold text-white border-t border-white/10 pt-6 mt-6">
            <span className="text-white/50">=</span>
            <span className="text-destructive font-mono">22+ hours</span>
            <span className="text-white/60 font-normal">of headaches</span>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <span className="font-medium">There's an easier way</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
