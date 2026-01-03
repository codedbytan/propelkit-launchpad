import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "Built an EdTech SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "I launched my EdTech SaaS in 4 days using PropelKit. Razorpay was already configured—I just added my keys. First sale came in 48 hours. Worth every rupee.",
  },
  {
    name: "Priya Sharma",
    role: "Solo Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The GST engine alone saved me a week. I was dreading the tax calculation logic. PropelKit handles IGST/CGST automatically. Clean code, too.",
  },
  {
    name: "Rohan Desai",
    role: "Agency Owner",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    content: "I bought 3 other boilerplates before this. All were US-focused—no Razorpay, no GST. PropelKit is the only one built for India. Finally.",
  },
  {
    name: "Sneha Kapoor",
    role: "Founder, FinSmart",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    content: "As a non-technical founder, I hired a dev to customize PropelKit. He said the code was 'production-grade' and we launched in 2 days. Now at ₹1.2L revenue.",
  },
  {
    name: "Vikram Singh",
    role: "SaaS Founder",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    content: "The admin dashboard is insane. I can see revenue charts, manage users, and ban spammers—all out of the box. This is what 'launch-ready' means.",
  },
  {
    name: "Anjali Gupta",
    role: "Bootstrapped Founder",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "I wasted ₹15K paying a freelancer to integrate Razorpay on my last project. PropelKit cost ₹3,999 and did it better. Plus I own the code forever.",
  },
  {
    name: "Amit Kumar",
    role: "Built a SaaS",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "PropelKit saved me 3 weeks. Razorpay integration just worked. The webhook verification logic is solid. ₹25k MRR in first month!",
  },
  {
    name: "Kavitha M",
    role: "Built a SaaS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    content: "Built my SaaS in 6 days as a noob. GST invoicing was my biggest pain point - solved instantly. ₹40k MRR and growing.",
  },
  {
    name: "Rahul Verma",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Cleanest Next.js 14 code I've seen. App Router, Server Components, the works. It's not just a boilerplate, it's a masterclass.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-neutral-900 border border-white/10 p-6 break-inside-avoid mb-4">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-sm text-white">{testimonial.name}</p>
          <p className="text-xs text-white/50">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      
      <p className="text-sm leading-relaxed text-white/80">{testimonial.content}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* MRR Screenshot */}
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-neutral-900">MRR</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">+48.9%</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">₹5,86,857</p>
              <p className="text-xs text-neutral-500">₹3,94,101 previous month</p>
              <div className="mt-4 h-20 flex items-end gap-1">
                {[40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-400 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <div>
              <div className="text-primary text-5xl font-serif mb-4">"</div>
              <p className="text-xl text-white leading-relaxed mb-6">
                Without PropelKit I might have never launched my SaaS and I would still be at ₹0 MRR.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Jack Friks"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">Arjun Mehta</p>
                  <p className="text-sm text-white/50">Built post-bridge.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
