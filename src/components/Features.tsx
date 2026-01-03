export function Features() {
  return (
    <section id="features" className="py-24 noise-bg grid-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Everything you need to <span className="text-gradient">ship fast.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop rebuilding the same features for every project. Get a production-ready foundation.
          </p>
        </div>

        {/* Bento Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          
          {/* Card 1 - Razorpay Native */}
          <div className="bento-card p-6 hover-lift">
            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Payments</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Razorpay Native</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Webhooks, Smart Retries, and Subscription logic handling. No "Merchant of Record" fees.
            </p>

            {/* Code snippet visual */}
            <div className="bg-background/50 rounded-lg p-4 border border-border font-mono text-xs overflow-x-auto">
              <pre className="text-muted-foreground">
<span className="text-primary">const</span> <span className="text-foreground">subscription</span> = {"\n"}
{"  "}<span className="text-green-400">useRazorpaySubscription</span>({"{"}
{"\n"}{"    "}planId: <span className="text-primary">"plan_xyz"</span>,
{"\n"}{"    "}onSuccess: () {"=>"} {"{}"}
{"\n"}{"  "}{"}"});
              </pre>
            </div>
          </div>

          {/* Card 2 - The GST Engine */}
          <div className="bento-card p-6 hover-lift">
            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Compliance</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">The GST Engine</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Auto-calculates IGST vs Intra-state tax based on customer GSTIN. B2B compliant.
            </p>

            {/* JSON visual */}
            <div className="bg-background/50 rounded-lg p-4 border border-border font-mono text-xs">
              <pre className="text-muted-foreground">
{"{"}
{"\n"}{"  "}<span className="text-foreground">"state"</span>: <span className="text-primary">"MH"</span>,
{"\n"}{"  "}<span className="text-foreground">"tax"</span>: <span className="text-primary">"CGST+SGST"</span>,
{"\n"}{"  "}<span className="text-foreground">"rate"</span>: <span className="text-primary">"18%"</span>
{"\n"}{"}"}
              </pre>
            </div>
          </div>

          {/* Card 3 - Supabase Auth */}
          <div className="bento-card p-6 hover-lift">
            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Authentication</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Supabase Auth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Magic Links, Google Login, and RLS Policies ready to go.
            </p>

            {/* User table mockup */}
            <div className="bg-background/50 rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-mono">
                <div className="p-2 bg-muted/30 border-b border-r border-border text-muted-foreground">id</div>
                <div className="p-2 bg-muted/30 border-b border-r border-border text-muted-foreground">email</div>
                <div className="p-2 bg-muted/30 border-b border-border text-muted-foreground">role</div>
                <div className="p-2 border-r border-border text-foreground">uuid_1</div>
                <div className="p-2 border-r border-border text-foreground">user@app.com</div>
                <div className="p-2 text-primary">admin</div>
              </div>
            </div>
          </div>

          {/* Card 4 - React Email */}
          <div className="bento-card p-6 hover-lift lg:col-span-2">
            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Emails</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">React Email</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transactional emails that don't land in spam. Beautiful invoice templates included.
            </p>

            {/* Email preview mockup */}
            <div className="bg-background/50 rounded-lg border border-border p-4">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold">P</div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Invoice #INV-2024-001</p>
                  <p className="text-xs text-muted-foreground">Your payment was successful</p>
                </div>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹3,389</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>GST (18%)</span>
                  <span>₹610</span>
                </div>
                <div className="flex justify-between text-foreground font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span>₹3,999</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - TypeScript & Next.js */}
          <div className="bento-card p-6 hover-lift">
            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Stack</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">TypeScript First</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              100% TypeScript with Next.js 14 App Router. Server Components ready.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border font-mono">App Router</span>
              <span className="px-3 py-1.5 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border font-mono">RSC</span>
              <span className="px-3 py-1.5 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border font-mono">Edge Ready</span>
              <span className="px-3 py-1.5 bg-muted/50 rounded-md text-xs text-muted-foreground border border-border font-mono">Strict TS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
