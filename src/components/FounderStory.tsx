export function FounderStory() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Founder of PropelKit"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover border-2 border-white/10"
                />
                <div className="absolute -bottom-2 -right-2 text-2xl">👋</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hey, I'm building PropelKit.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2023, I spent 3 weeks building my first SaaS. Two weeks of that? Just setting up Razorpay and figuring out GST.
                </p>
                <p>
                  I shipped. Made <span className="text-primary font-semibold">₹12,000 in the first month</span>. But I kept thinking: "I just wasted 14 days on boilerplate stuff."
                </p>
                <p>
                  So I built <span className="text-foreground font-medium">PropelKit</span>. Not for me—for every Indian developer who's tired of:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Googling "how to verify Razorpay webhook signature" at 2 AM</li>
                  <li>Calculating IGST vs CGST manually</li>
                  <li>Rebuilding the same auth flow for the 5th time</li>
                </ul>
                <p>
                  I've coded this once, properly, so you never have to.
                </p>
                <p>
                  <span className="text-primary font-semibold">200+ founders</span> have used PropelKit to ship faster. Some made their first ₹10K in a week. Others are at ₹2L MRR now.
                </p>
                <p className="text-foreground font-medium text-lg">
                  Your turn. 🚀
                </p>
              </div>

              {/* Trust signals */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>🐦 3,500+ followers on Twitter</span>
                <span>🏆 Featured on IndieHackers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
