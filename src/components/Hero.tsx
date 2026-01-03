<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
  {/* Animated orbs background - KEEP THIS */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="orb orb-1 -top-48 -right-48" />
    <div className="orb orb-2 top-1/3 -left-32" />
    <div className="orb orb-3 bottom-1/4 right-1/4" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        {/* URGENCY BADGE - ADD THIS */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 mb-6 animate-fade-up rounded-full">
          <span className="text-sm font-medium text-primary">🔥 Launch Offer</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">₹3,000 off for first 100 customers (23 left)</span>
        </div>

        {/* HEADLINE - SIMPLIFY */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-up stagger-1">
          Ship your Indian SaaS in{" "}
          <span className="relative inline-block">
            <span className="text-primary">days, not weeks</span>
            {/* Handwritten highlight effect */}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 5 Q 50 2, 100 5 T 195 5"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>
        </h1>

        {/* SUBHEADLINE - MORE CONCISE */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-2">
          The only Next.js boilerplate with <span className="font-semibold text-foreground">Razorpay</span>,{" "}
          <span className="font-semibold text-foreground">GST invoicing</span>, and{" "}
          <span className="font-semibold text-foreground">Indian compliance</span> built-in.
        </p>

        {/* SOCIAL PROOF - ADD THIS */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up stagger-3">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=4"
              alt="User 4"
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="User 5"
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">200+ developers</span> ship faster
            </span>
          </div>
        </div>

        {/* CTAs - KEEP BUT ADJUST */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up stagger-4">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="gradient-primary shadow-glow text-lg px-8 py-6 font-semibold hover:opacity-90 transition-all group"
          >
            Get PropelKit
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 group border-border hover:bg-muted">
            <Play className="w-5 h-5 mr-2" />
            See Demo
          </Button>
        </div>

        {/* URGENCY TEXT BELOW CTAs - ADD THIS */}
        <p className="text-sm text-muted-foreground animate-fade-up stagger-5">
          ₹3,000 off ends in <span className="font-semibold text-primary">72 hours</span>
        </p>
      </div>

      {/* RIGHT CONTENT - SIMPLIFIED TERMINAL */}
      <div className="relative animate-fade-up stagger-4">
        <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-lg">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="ml-4 text-xs text-white/40 font-mono">Terminal</span>
          </div>

          {/* Terminal Content - SIMPLE ANIMATION */}
          <div className="p-6 font-mono text-sm min-h-[300px]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-success">$</span>
                <span className="text-white/80">npx create-propelkit my-saas</span>
              </div>
              <div className="text-white/60">✓ Installing dependencies...</div>
              <div className="text-white/60">✓ Setting up Razorpay webhooks...</div>
              <div className="text-white/60">✓ Configuring GST engine...</div>
              <div className="text-white/60">✓ Creating admin dashboard...</div>
              <div className="h-4" />
              <div className="text-primary font-semibold">Success! Your SaaS is ready 🚀</div>
              <div className="h-2" />
              <div className="flex items-center gap-2">
                <span className="text-success">$</span>
                <span className="text-white/80">cd my-saas && npm run dev</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="animate-pulse text-primary">▋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge - KEEP THIS */}
        <div className="absolute -bottom-6 -left-6 md:-left-12 bg-[#111] border border-white/10 p-4 shadow-lg hidden sm:block rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 flex items-center justify-center rounded-lg">
              <Check className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Payment Success!</p>
              <p className="text-xs text-white/50">₹3,999 • GST Invoice Generated ✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
