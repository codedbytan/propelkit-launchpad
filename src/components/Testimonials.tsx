import { Twitter, Play, Star, Heart } from "lucide-react";

interface TextTestimonial {
  type: "text";
  name: string;
  handle: string;
  avatar: string;
  content: string;
  badge?: string;
}

interface TweetTestimonial {
  type: "tweet";
  name: string;
  handle: string;
  avatar: string;
  content: string;
  likes: number;
  verified?: boolean;
}

interface RevenueTestimonial {
  type: "revenue";
  name: string;
  handle: string;
  avatar: string;
  content: string;
  revenue: string;
  badge?: string;
}

interface VideoTestimonial {
  type: "video";
  name: string;
  title: string;
  thumbnail: string;
  quote: string;
}

type Testimonial = TextTestimonial | TweetTestimonial | RevenueTestimonial | VideoTestimonial;

const testimonials: Testimonial[] = [
  {
    type: "revenue",
    name: "Rohan Sharma",
    handle: "@rohan_dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "PropelKit saved me 3 weeks. Razorpay integration just worked. The webhook verification logic is solid.",
    revenue: "₹25k MRR",
    badge: "Indie Hacker",
  },
  {
    type: "tweet",
    name: "Priya Patel",
    handle: "@priya_codes",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The GST invoicing feature is a lifesaver. I didn't know I had to split IGST/CGST until I saw the code in this kit. Worth every rupee! 🔥",
    likes: 142,
    verified: true,
  },
  {
    type: "text",
    name: "Amit Kumar",
    handle: "@amit_ships",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "Bought the Agency pack. Shipped 3 client sites this month. The Admin panel does exactly what my clients need.",
    badge: "Agency Owner",
  },
  {
    type: "revenue",
    name: "Sarah Chen",
    handle: "@sarah_tech",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "Built my SaaS in 6 days as a noob. GST invoicing was my biggest pain point - solved instantly.",
    revenue: "₹15k MRR",
    badge: "SaaS Founder",
  },
  {
    type: "tweet",
    name: "Vikram Singh",
    handle: "@vikram_builds",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "Finally, something for Indian devs. ShipFast is great but USD pricing and Stripe don't work for us. PropelKit is the answer. 🇮🇳",
    likes: 89,
  },
  {
    type: "text",
    name: "Neha Gupta",
    handle: "@neha_startup",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Made back the cost in 48 hours. Best investment of 2025. The code quality is exceptional - strict TypeScript, clean architecture.",
    badge: "Frontend Dev",
  },
  {
    type: "video",
    name: "Arjun Reddy",
    title: "Full-Stack Developer",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
    quote: "This saved me at least 60 hours of development time.",
  },
  {
    type: "revenue",
    name: "Kavitha M",
    handle: "@kavitha_saas",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    content: "Launched my subscription business in a weekend. The Razorpay subscription hooks are chef's kiss 👨‍🍳",
    revenue: "₹40k MRR",
    badge: "Serial Founder",
  },
  {
    type: "tweet",
    name: "Rahul Verma",
    handle: "@rahul_codes",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Cleanest Next.js 14 code I've seen. App Router, Server Components, the works. It's not just a boilerplate, it's a masterclass.",
    likes: 234,
    verified: true,
  },
  {
    type: "text",
    name: "Ananya Rao",
    handle: "@ananya_dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "I was skeptical about yet another boilerplate. But the GST engine alone is worth 10x the price. Automatic CGST/SGST/IGST calculation based on customer location!",
    badge: "Freelancer",
  },
  {
    type: "revenue",
    name: "Deepak Joshi",
    handle: "@deepak_indie",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "3 projects shipped. 3 happy clients. All using PropelKit as the base. The commercial license was a no-brainer.",
    revenue: "₹1.2L Revenue",
    badge: "Agency",
  },
  {
    type: "tweet",
    name: "Meera Krishnan",
    handle: "@meera_ships",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Stop reinventing the wheel. PropelKit has everything - auth, payments, emails, admin. Just add your idea and ship! 🚀",
    likes: 178,
  },
];

function TextCard({ testimonial }: { testimonial: TextTestimonial }) {
  return (
    <div className="twitter-card hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
          </div>
        </div>
        {testimonial.badge && (
          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            {testimonial.badge}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed">{testimonial.content}</p>
    </div>
  );
}

function TweetCard({ testimonial }: { testimonial: TweetTestimonial }) {
  return (
    <div className="twitter-card hover-lift bg-slate-900/80">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              {testimonial.verified && (
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
          </div>
        </div>
        <Twitter className="w-5 h-5 text-blue-400" />
      </div>
      <p className="text-sm leading-relaxed mb-4">{testimonial.content}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          {testimonial.likes}
        </div>
        <span>•</span>
        <span>2h ago</span>
      </div>
    </div>
  );
}

function RevenueCard({ testimonial }: { testimonial: RevenueTestimonial }) {
  return (
    <div className="twitter-card hover-lift border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
          />
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
          </div>
        </div>
        {testimonial.badge && (
          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            {testimonial.badge}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed mb-4">{testimonial.content}</p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
        <span className="text-lg font-bold text-primary font-mono">{testimonial.revenue}</span>
        <span className="text-xs text-muted-foreground">in first month</span>
      </div>
    </div>
  );
}

function VideoCard({ testimonial }: { testimonial: VideoTestimonial }) {
  return (
    <div className="twitter-card hover-lift p-0 overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </div>
        <div className="absolute top-3 left-3 flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm italic mb-2">"{testimonial.quote}"</p>
        <p className="text-xs text-muted-foreground">{testimonial.name} • {testimonial.title}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Loved by <span className="text-gradient">builders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 100+ developers shipping faster with PropelKit
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => {
            if (testimonial.type === "text") {
              return <TextCard key={i} testimonial={testimonial} />;
            } else if (testimonial.type === "tweet") {
              return <TweetCard key={i} testimonial={testimonial} />;
            } else if (testimonial.type === "revenue") {
              return <RevenueCard key={i} testimonial={testimonial} />;
            } else if (testimonial.type === "video") {
              return <VideoCard key={i} testimonial={testimonial} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
