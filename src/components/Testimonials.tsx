import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Setting up Razorpay webhooks was killing me. PropelKit had it working in 10 minutes. Worth every rupee.",
    name: "Arjun Mehta",
    role: "Founder, EdTech Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The GST engine alone saved me a week of research and coding. Clean, production-ready code.",
    name: "Priya Sharma",
    role: "Solo Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Finally, a boilerplate built for India. No more converting USD pricing logic to INR.",
    name: "Rohan Desai",
    role: "Agency Owner",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Got my SaaS MVP running in 2 days. The documentation is crystal clear.",
    name: "Sneha Kapoor",
    role: "First-time Founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The admin dashboard component saved me 10+ hours. Just plugged it in and it worked.",
    name: "Vikram Singh",
    role: "Indie Hacker",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Best ₹3,999 I've spent. The Supabase setup alone is worth it.",
    name: "Anjali Gupta",
    role: "Freelance Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function Testimonials() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Developers are shipping faster
          </h2>
          <p className="text-lg text-muted-foreground">
            Early adopters are already building with PropelKit
          </p>
        </div>

        {/* Simple 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 transition-all hover:border-white/20"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Join the first wave of Indian founders
          </p>
          <Button
            onClick={scrollToPricing}
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
