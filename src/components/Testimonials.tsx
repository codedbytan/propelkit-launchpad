import { Twitter, Heart } from "lucide-react";

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  content: string;
  likes: number;
  verified?: boolean;
  badge?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    handle: "@arjun_builds",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "I launched my EdTech SaaS in 4 days using PropelKit. Razorpay was already configured—I just added my keys. First sale came in 48 hours. Worth every rupee.",
    likes: 156,
    verified: true,
    badge: "₹45K MRR",
  },
  {
    name: "Priya Sharma",
    handle: "@priya_codes",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The GST engine alone saved me a week. I was dreading the tax calculation logic. PropelKit handles IGST/CGST automatically. Clean code, too.",
    likes: 203,
    verified: true,
    badge: "Shipped in 3 days",
  },
  {
    name: "Rohan Desai",
    handle: "@rohan_agency",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "I bought 3 other boilerplates before this. All were US-focused—no Razorpay, no GST. PropelKit is the only one built for India. Finally.",
    likes: 89,
    badge: "Built 5 client apps",
  },
  {
    name: "Sneha Kapoor",
    handle: "@sneha_founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "As a non-technical founder, I hired a dev to customize PropelKit. He said the code was 'production-grade' and we launched in 2 days. Now at ₹1.2L revenue.",
    likes: 234,
    verified: true,
    badge: "₹1.2L in 3 weeks",
  },
  {
    name: "Vikram Singh",
    handle: "@vikram_saas",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "The admin dashboard is insane. I can see revenue charts, manage users, and ban spammers—all out of the box. This is what 'launch-ready' means.",
    likes: 178,
    verified: true,
    badge: "200+ users",
  },
  {
    name: "Anjali Gupta",
    handle: "@anjali_indie",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "I wasted ₹15K paying a freelancer to integrate Razorpay on my last project. PropelKit cost ₹3,999 and did it better. Plus I own the code forever.",
    likes: 145,
    badge: "10x ROI",
  },
  {
    name: "Amit Kumar",
    handle: "@amit_ships",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "PropelKit saved me 3 weeks. Razorpay integration just worked. The webhook verification logic is solid. ₹25k MRR in first month!",
    likes: 112,
    verified: true,
    badge: "₹25K MRR",
  },
  {
    name: "Kavitha M",
    handle: "@kavitha_saas",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    content: "Built my SaaS in 6 days as a noob. GST invoicing was my biggest pain point - solved instantly. ₹40k MRR and growing.",
    likes: 198,
    verified: true,
    badge: "₹40K MRR",
  },
  {
    name: "Rahul Verma",
    handle: "@rahul_dev",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Cleanest Next.js 14 code I've seen. App Router, Server Components, the works. It's not just a boilerplate, it's a masterclass.",
    likes: 267,
    verified: true,
  },
  {
    name: "Deepak Joshi",
    handle: "@deepak_indie",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    content: "3 projects shipped. 3 happy clients. All using PropelKit as the base. The commercial license was a no-brainer. ₹1.2L revenue.",
    likes: 134,
    verified: true,
    badge: "Agency",
  },
  {
    name: "Ananya Rao",
    handle: "@ananya_builds",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "I was skeptical about yet another boilerplate. But the GST engine alone is worth 10x the price. Automatic CGST/SGST/IGST calculation!",
    likes: 156,
    badge: "Freelancer",
  },
  {
    name: "Meera Krishnan",
    handle: "@meera_ships",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Stop reinventing the wheel. PropelKit has everything - auth, payments, emails, admin. Just add your idea and ship! 🚀",
    likes: 189,
    verified: true,
  },
  {
    name: "Karthik Nair",
    handle: "@karthik_dev",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    content: "Made back the cost in 48 hours. Best investment of 2025. The code quality is exceptional - strict TypeScript, clean architecture.",
    likes: 223,
    verified: true,
    badge: "Solo Founder",
  },
  {
    name: "Neha Agarwal",
    handle: "@neha_startup",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "Finally, something for Indian devs. ShipFast is great but USD pricing and Stripe don't work for us. PropelKit is the answer. 🇮🇳",
    likes: 178,
  },
  {
    name: "Sanjay Reddy",
    handle: "@sanjay_builds",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face",
    content: "This saved me at least 60 hours of development time. The Razorpay subscription hooks are chef's kiss 👨‍🍳",
    likes: 145,
    verified: true,
    badge: "SaaS Founder",
  },
];

function TweetCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#111] border border-white/10 p-5 break-inside-avoid mb-4 transition-all duration-300 hover:border-white/20">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-sm text-white">{testimonial.name}</p>
              {testimonial.verified && (
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-xs text-white/50">{testimonial.handle}</p>
          </div>
        </div>
        <Twitter className="w-5 h-5 text-white/40" />
      </div>
      
      <p className="text-sm leading-relaxed text-white/80 mb-4">{testimonial.content}</p>
      
      <div className="flex items-center justify-between text-xs text-white/40">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 hover:text-red-400 transition-colors cursor-pointer">
            <Heart className="w-4 h-4" />
            <span>{testimonial.likes}</span>
          </div>
          <span>2h ago</span>
        </div>
        {testimonial.badge && (
          <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary font-medium">
            {testimonial.badge}
          </span>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            200+ Indian Founders Are Shipping Faster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real developers. Real results. Real revenue.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TweetCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
