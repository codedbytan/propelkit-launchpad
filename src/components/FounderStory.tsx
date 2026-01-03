export function FounderStory() {
  return (
    <section className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar + Badge */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Founder of PropelKit"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                />
              </div>
              {/* Badge placeholder */}
              <div className="mt-4 bg-neutral-900 border border-white/10 p-3 text-center">
                <p className="text-[10px] text-white/40 uppercase tracking-wider">Indie Maker</p>
                <p className="text-xs text-white font-medium mt-1">2024</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Hey, it's me 👋
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  In 2023, I spent 3 weeks building my first SaaS. Two weeks of that? Just setting up Razorpay and figuring out GST.
                </p>
                <p>
                  A few months after my burnout, I restarted the journey differently: I shipped like a madman—
                  <a href="#" className="text-primary hover:underline">3 startups in 6 months</a>. Now I'm earning ₹45,000/month passively.
                </p>
                <p>
                  I realized I was doing the same thing over and over: set up Razorpay webhooks, listen to payment callbacks, calculate GST logic... So I built PropelKit for 3 reasons:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-white">Save time</strong> and focus on what matters: building a business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-white">Avoid headaches</strong> like emails ending in spam or handling Razorpay subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-white">Get profitable fast</strong>—the more you ship, the more you learn, the more you earn</span>
                  </li>
                </ul>
                <p>
                  <a href="#" className="text-primary hover:underline">10,000+ people</a> trust me on Twitter, and{" "}
                  <a href="#testimonials" className="text-primary hover:underline">200+ indie makers</a> are using PropelKit to launch startups quickly, scroll to see what they say.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
