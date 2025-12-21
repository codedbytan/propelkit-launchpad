import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    handle: "@rahulsharma_dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "PropelKit saved me 2 weeks of setup time. The Razorpay integration just works out of the box. Launched my SaaS in 3 days!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    handle: "@priya_codes",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Finally, a boilerplate that understands the Indian market. GST invoicing was always a pain. Not anymore! 🙌",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    handle: "@arjunbuilds",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "The code quality is exceptional. Clean architecture, TypeScript everywhere, and amazing documentation. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    handle: "@sneha_tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "I've tried 5+ boilerplates. PropelKit is the only one with proper Indian payment integration. The GST handling is 💯",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    handle: "@vikramcodes",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Launched 3 client projects using PropelKit. The email templates and auth system are production-ready. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    handle: "@ananya_dev",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The support from Tanishq is incredible. Got my questions answered within hours. The community is super helpful too!",
    rating: 5,
  },
  {
    name: "Karthik Iyer",
    handle: "@karthik_ships",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "From idea to paid users in 48 hours. PropelKit is the secret weapon every indie hacker needs. No more boilerplate hell!",
    rating: 5,
  },
  {
    name: "Meera Nair",
    handle: "@meerabuilds",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "The dark mode is chef's kiss 👨‍🍳 Every component is beautifully designed. My users love the UI!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">Makers.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 500+ developers who are shipping faster with PropelKit.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.handle}
              className="break-inside-avoid mb-6 bg-card border border-border rounded-2xl p-6 hover-lift transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
