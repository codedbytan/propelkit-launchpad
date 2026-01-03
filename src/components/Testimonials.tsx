import { Twitter } from "lucide-react";

const testimonials = [
  {
    name: "Rohan",
    handle: "@rohan_dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "I wasted 2 weeks trying to get Stripe working in India. PropelKit's Razorpay wrapper just worked. The webhook verification logic is solid.",
  },
  {
    name: "Priya",
    handle: "@priya_codes",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The GST invoicing feature is a lifesaver. I didn't know I had to split IGST/CGST until I saw the code in this kit. Worth the ₹4k just for that.",
  },
  {
    name: "Amit",
    handle: "@amit_ships",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "Bought the Agency pack. Shipped 3 client sites this month. The Admin panel is basic but does exactly what my clients need (block users, view sales).",
  },
  {
    name: "Sarah",
    handle: "@sarah_tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "Cleanest Next.js 14 code I've seen. Strict TypeScript, clear folder structure. It's not just a wrapper, it's a good education resource.",
  },
  {
    name: "Vikram",
    handle: "@vikram_builds",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Finally, something for Indian devs. ShipFast is great but USD pricing and Stripe don't work for us. This is the answer.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 noise-bg grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Wall of <span className="text-gradient">Love.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 100+ Indian developers who are shipping faster with PropelKit.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.handle}
              className="twitter-card break-inside-avoid mb-4 hover-lift"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-muted-foreground/50" />
              </div>

              {/* Content */}
              <p className="text-foreground text-sm leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
