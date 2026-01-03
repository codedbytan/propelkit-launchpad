export function FounderStory() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/founder-tanishq.jpg"
                alt="Tanishq - Founder of PropelKit"
                className="w-32 h-32 md:w-48 md:h-48 object-cover border border-white/10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face";
                }}
              />
            </div>

            {/* Story */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hey, I'm Tanishq 👋
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2023, I spent 3 weeks building my first SaaS. Two weeks of that? Just setting up Razorpay and figuring out GST.
                </p>
                
                <p>
                  I shipped. Made <span className="text-primary font-semibold">$2,000 from my projects</span>. But I kept thinking: "I just wasted 14 days on boilerplate stuff that every Indian founder has to rebuild."
                </p>
                
                <p>
                  So I built PropelKit. Not for me—for every Indian developer who's tired of:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm pl-4">
                  <li>Googling "how to verify Razorpay webhook signature" at 2 AM</li>
                  <li>Calculating IGST vs CGST+SGST manually</li>
                  <li>Rebuilding the same auth flow for the 5th time</li>
                  <li>Dealing with "US-first" boilerplates that don't support Indian payments</li>
                </ul>
                
                <p>
                  I've coded this once, properly, so you never have to.
                </p>
                
                <p className="text-foreground font-medium text-lg">
                  Your turn to ship. 🚀
                </p>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  🐦 Follow on Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  💻 GitHub Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
