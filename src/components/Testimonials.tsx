import { Twitter, Heart, MessageCircle, Repeat2 } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    handle: "@rahulsharma_dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "PropelKit saved me 2 weeks of setup time. The Razorpay integration just works out of the box. Launched my SaaS in 3 days! 🚀",
    verified: true,
    likes: 42,
    retweets: 8,
    date: "Dec 28",
  },
  {
    name: "Priya Patel",
    handle: "@priya_codes",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Finally, a boilerplate that understands the Indian market. GST invoicing was always a pain. Not anymore! 🙌",
    verified: true,
    likes: 67,
    retweets: 12,
    date: "Dec 25",
  },
  {
    name: "Arjun Mehta",
    handle: "@arjunbuilds",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "The code quality is exceptional. Clean architecture, TypeScript everywhere, and amazing documentation. Worth every rupee. 💯",
    verified: false,
    likes: 89,
    retweets: 15,
    date: "Dec 22",
  },
  {
    name: "Sneha Reddy",
    handle: "@sneha_tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "I've tried 5+ boilerplates. PropelKit is the only one with proper Indian payment integration. The GST handling is 💯",
    verified: true,
    likes: 156,
    retweets: 23,
    date: "Dec 20",
  },
  {
    name: "Vikram Singh",
    handle: "@vikramcodes",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Launched 3 client projects using PropelKit. The email templates and auth system are production-ready. Highly recommend! 🎯",
    verified: false,
    likes: 34,
    retweets: 5,
    date: "Dec 18",
  },
  {
    name: "Ananya Gupta",
    handle: "@ananya_dev",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The support from Tanishq is incredible. Got my questions answered within hours. The community is super helpful too! ✨",
    verified: true,
    likes: 78,
    retweets: 11,
    date: "Dec 15",
  },
  {
    name: "Karthik Iyer",
    handle: "@karthik_ships",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "From idea to paid users in 48 hours. PropelKit is the secret weapon every indie hacker needs. No more boilerplate hell! 🔥",
    verified: false,
    likes: 201,
    retweets: 45,
    date: "Dec 12",
  },
  {
    name: "Meera Nair",
    handle: "@meerabuilds",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "The dark mode is chef's kiss 👨‍🍳 Every component is beautifully designed. My users love the UI!",
    verified: true,
    likes: 112,
    retweets: 19,
    date: "Dec 10",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/20 noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-display-sm font-bold mb-4">
            Wall of <span className="text-gradient">Love.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 100+ Indian developers who are shipping faster with PropelKit.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.handle}
              className="twitter-card break-inside-avoid mb-4 hover-lift transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
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
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-muted-foreground/50" />
              </div>

              {/* Content */}
              <p className="text-foreground text-sm leading-relaxed mb-3">{testimonial.content}</p>

              {/* Footer */}
              <div className="flex items-center justify-between text-muted-foreground pt-3 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors text-xs">
                    <Heart className="w-4 h-4" />
                    <span>{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors text-xs">
                    <Repeat2 className="w-4 h-4" />
                    <span>{testimonial.retweets}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
