import { useState, useEffect } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DocsSidebar, { sections } from "@/components/docs/DocsSidebar";
import CodeBlock from "@/components/docs/CodeBlock";
import Callout from "@/components/docs/Callout";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (const section of sectionElements.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sqlCode = `-- Users are handled by Supabase Auth

-- Create Profiles Table
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text
);

-- Create Licenses Table
create table public.licenses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  license_key text unique not null,
  plan_key text not null,
  status text default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create Invoices Table
create table public.invoices (
  id text primary key,
  user_id uuid references auth.users not null,
  amount integer not null,
  status text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);`;

  const envCode = `# ================================
# SUPABASE (Required)
# ================================

# Browser-safe keys (NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Server-only (KEEP SECRET!)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ================================
# RAZORPAY (Required for payments)
# ================================

RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxx

# ================================
# APP CONFIG
# ================================

NEXT_PUBLIC_APP_URL=http://localhost:3000`;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 lg:hidden flex items-center justify-between p-4 bg-background/80 backdrop-blur-xl border-b border-white/10">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span className="font-semibold">PropelKit</span>
        </Link>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-background border-white/10">
            <div className="mt-8">
              <DocsSidebar
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-white/10 bg-background/50 backdrop-blur-xl">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-2 text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <DocsSidebar
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 py-12 lg:px-16 lg:py-16">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Header */}
            <header className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to ship in minutes.
              </p>
            </header>

            {/* Getting Started */}
            <section id="getting-started" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-white/10 pb-4">
                Getting Started
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Get up and running with PropelKit in under 5 minutes. Follow these steps to set up your development environment.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Step 1: Clone the repository</h3>
                  <CodeBlock
                    language="bash"
                    code="git clone https://github.com/yourusername/propelkit.git"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Step 2: Install dependencies</h3>
                  <CodeBlock language="bash" code="cd propelkit
npm install" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Step 3: Start the development server</h3>
                  <CodeBlock language="bash" code="npm run dev" />
                </div>
              </div>

              <Callout type="tip" title="Pro Tip">
                Make sure you have Node.js 18+ installed before running these commands.
              </Callout>
            </section>

            {/* Configuration */}
            <section id="configuration" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-white/10 pb-4">
                Configuration (.env)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Create a <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono text-sm">.env.local</code> file in your project root and add the following environment variables.
              </p>

              <CodeBlock language="env" code={envCode} filename=".env.local" />

              <Callout type="warning" title="Security Warning">
                Never commit your <code className="font-mono">.env.local</code> file to version control. Keys without the <code className="font-mono">NEXT_PUBLIC_</code> prefix must be kept secret.
              </Callout>
            </section>

            {/* Database Setup */}
            <section id="database" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-white/10 pb-4">
                Database Setup (SQL)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Run this SQL query in your Supabase SQL Editor to create the necessary tables. This sets up the core data structure for user profiles, licenses, and invoices.
              </p>

              <CodeBlock language="sql" code={sqlCode} filename="schema.sql" />

              <Callout type="warning" title="Don't Forget!">
                After creating the tables, enable Row Level Security (RLS) policies to protect your data. Check the Supabase dashboard for policy templates.
              </Callout>

              <Callout type="info" title="User Authentication">
                User authentication is handled automatically by Supabase Auth. The <code className="font-mono">auth.users</code> table is managed by Supabase.
              </Callout>
            </section>

            {/* Going Live (Razorpay) */}
            <section id="razorpay" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-white/10 pb-4">
                Going Live (Razorpay)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Follow these steps to configure Razorpay for accepting payments in production.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">1. Create a Razorpay Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Sign up at <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">razorpay.com</a> and complete your KYC verification.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">2. Get your API Keys</h3>
                  <p className="text-muted-foreground text-sm">
                    Navigate to Settings → API Keys in your Razorpay dashboard. Copy both the Key ID and Key Secret.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">3. Configure Webhooks</h3>
                  <p className="text-muted-foreground text-sm">
                    Set up a webhook endpoint pointing to <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono text-sm">/api/webhooks/razorpay</code>
                  </p>
                </div>
              </div>

              <Callout type="warning" title="Enable Webhooks!">
                Webhooks are essential for handling payment confirmations. Without them, license activations won't work properly.
              </Callout>
            </section>

            {/* Deployment */}
            <section id="deployment" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-white/10 pb-4">
                Deployment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Deploy your PropelKit application to Vercel with one click.
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">1. Push to GitHub</h3>
                  <CodeBlock
                    language="bash"
                    code="git add .
git commit -m 'Initial commit'
git push origin main"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">2. Import to Vercel</h3>
                  <p className="text-muted-foreground text-sm">
                    Go to <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com/new</a> and import your repository.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">3. Add Environment Variables</h3>
                  <p className="text-muted-foreground text-sm">
                    Copy all variables from your <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono text-sm">.env.local</code> to Vercel's environment variables section.
                  </p>
                </div>
              </div>

              <Callout type="tip" title="Production Checklist">
                Before going live: update your Razorpay keys from test to live mode, set up proper domain in Supabase, and enable email confirmations.
              </Callout>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-white/10">
              <p className="text-muted-foreground text-sm">
                Need help? Join our{" "}
                <a href="#" className="text-primary hover:underline">
                  Discord community
                </a>{" "}
                or check out the{" "}
                <a href="#" className="text-primary hover:underline">
                  GitHub discussions
                </a>
                .
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
