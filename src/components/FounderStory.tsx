export function FounderStory() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Tanishq - Founder of PropelKit"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border-4 border-background shadow-card"
                />
                <div className="absolute -bottom-2 -right-2 text-2xl">👋</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hi, I'm Tanishq.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I built <span className="text-foreground font-medium">PropelKit</span> because I was tired of the same painful cycle: every new project meant weeks of setting up Razorpay webhooks, building authentication from scratch, and figuring out GST compliance yet again.
                </p>
                <p>
                  As an indie hacker in India, I quickly realized that tools like ShipFast and other popular boilerplates were built for Western markets. USD pricing, Stripe integration, no GST handling — none of it worked for us.
                </p>
                <p>
                  So I built what I needed: a production-ready Next.js starter kit designed specifically for Indian developers. One that actually understands Razorpay's quirks, handles IGST vs CGST/SGST automatically, and generates proper GST-compliant invoices.
                </p>
                <p className="text-foreground font-medium text-lg">
                  Stop reinventing the wheel. Start shipping. 🚀
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">Tanishq</p>
                <p className="text-sm text-muted-foreground">Founder, PropelKit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
