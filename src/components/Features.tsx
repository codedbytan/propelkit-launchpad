import { 
  Wallet, 
  Shield, 
  Mail, 
  FileText, 
  Code, 
  Zap, 
  CheckCircle,
  Users,
  Key
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-display-sm font-bold mb-4">
            Everything you need to <span className="text-gradient">ship fast.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop rebuilding the same features for every project. Get a production-ready foundation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          
          {/* Card 1 - Razorpay (Large) */}
          <div className="bento-card md:col-span-2 lg:col-span-1 lg:row-span-2 p-8 group">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              🇮🇳 India First
            </div>

            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
              <Wallet className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-foreground">Razorpay Native</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pre-integrated Razorpay with automatic GST invoice generation. Accept payments in INR instantly.
            </p>

            {/* Payment Success Mockup */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Payment Successful</p>
                  <p className="text-xs text-muted-foreground">₹9,999 • GST Invoice Sent</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>UPI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Cards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Netbanking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - GST Compliant */}
          <div className="bento-card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground">GST Compliant</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Auto-generated GST invoices with proper CGST/SGST breakdown.
            </p>

            {/* Mini Invoice Mockup */}
            <div className="bg-muted/30 rounded-lg p-3 border border-border text-xs font-mono">
              <div className="flex justify-between text-muted-foreground mb-1">
                <span>Subtotal</span>
                <span>₹3,389</span>
              </div>
              <div className="flex justify-between text-muted-foreground mb-1">
                <span>CGST (9%)</span>
                <span>₹305</span>
              </div>
              <div className="flex justify-between text-muted-foreground mb-1">
                <span>SGST (9%)</span>
                <span>₹305</span>
              </div>
              <div className="flex justify-between text-foreground font-bold pt-1 border-t border-border">
                <span>Total</span>
                <span>₹3,999</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Supabase Auth */}
          <div className="bento-card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground">Supabase Auth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Complete auth system with magic links, OAuth, and role-based access.
            </p>

            {/* Login Mockup */}
            <div className="bg-muted/30 rounded-lg p-3 border border-border space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded border border-border text-xs text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>Continue with Google</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded border border-border text-xs text-muted-foreground">
                <Key className="w-3 h-3" />
                <span>Magic Link</span>
              </div>
            </div>
          </div>

          {/* Card 4 - Resend Emails */}
          <div className="bento-card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground">Resend Emails</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Beautiful transactional emails with React Email templates.
            </p>

            {/* Email Preview */}
            <div className="bg-muted/30 rounded-lg p-3 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">P</div>
                <span className="text-xs font-medium text-foreground">Welcome to PropelKit!</span>
              </div>
              <p className="text-xs text-muted-foreground">Thanks for signing up. Let's get you shipping...</p>
            </div>
          </div>

          {/* Card 5 - TypeScript */}
          <div className="bento-card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Code className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground">TypeScript First</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              100% TypeScript codebase with strict typing for better DX.
            </p>

            {/* Code Preview */}
            <div className="bg-muted/30 rounded-lg p-3 border border-border font-mono text-xs">
              <span className="text-primary">interface</span>{" "}
              <span className="text-foreground">User</span> {`{`}
              <br />
              {"  "}<span className="text-muted-foreground">id:</span> <span className="text-green-400">string</span>;
              <br />
              {"  "}<span className="text-muted-foreground">email:</span> <span className="text-green-400">string</span>;
              <br />
              {`}`}
            </div>
          </div>

          {/* Card 6 - Next.js 14 */}
          <div className="bento-card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground">Next.js 14</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Built on the latest Next.js with App Router & Server Components.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">App Router</span>
              <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">RSC</span>
              <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">Edge Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
