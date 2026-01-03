import { CreditCard, FileText, Database, Mail, Download, Settings, Rocket, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  { icon: CreditCard, label: "Razorpay integration hell", time: "Week 1-2" },
  { icon: FileText, label: "GST invoice debugging", time: "Week 2-3" },
  { icon: Database, label: "Auth + database setup", time: "Week 3-4" },
  { icon: Mail, label: "Email system + webhooks", time: "Week 4+" },
];

const easySteps = [
  { icon: Download, label: "Download", step: 1 },
  { icon: Settings, label: "Configure .env", step: 2 },
  { icon: Rocket, label: "Deploy", step: 3 },
];

export const TheProblem = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stop Wasting Time on{" "}
            <span className="text-red-500">Boilerplate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every week spent on infrastructure is a week not spent on your actual product.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Without PropelKit */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-red-500/20 to-red-900/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-8 rounded-2xl border border-red-500/20 bg-slate-950/80 backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Without PropelKit</h3>
                  <p className="text-sm text-muted-foreground">Building SaaS the Hard Way</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4 mb-8">
                {painPoints.map((point, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{point.label}</p>
                        <p className="text-xs text-red-400/80">{point.time}</p>
                      </div>
                      {/* Progress bar showing wasted time */}
                      <div className="w-20 h-1.5 rounded-full bg-red-950/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-pulse"
                          style={{ width: `${75 + index * 5}%` }}
                        />
                      </div>
                    </div>
                    {/* Connector line */}
                    {index < painPoints.length - 1 && (
                      <div className="absolute left-7 top-[calc(100%+2px)] w-0.5 h-4 bg-gradient-to-b from-red-500/30 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="pt-6 border-t border-red-500/10">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Total Development Time</p>
                  <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">4-6 weeks</p>
                  <p className="text-lg text-red-400/80">₹40,000+ in developer time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - With PropelKit */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500/20 to-green-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-8 rounded-2xl border border-yellow-500/20 bg-slate-950/80 backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">With PropelKit</h3>
                  <p className="text-sm text-muted-foreground">The PropelKit Way</p>
                </div>
              </div>

              {/* Easy Steps */}
              <div className="space-y-4 mb-8">
                {easySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/20 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{step.label}</p>
                        <p className="text-xs text-green-400/80">Step {step.step}</p>
                      </div>
                      {/* Checkmark */}
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                    {/* Connector line */}
                    {index < easySteps.length - 1 && (
                      <div className="absolute left-7 top-[calc(100%+2px)] w-0.5 h-4 bg-gradient-to-b from-green-500/30 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Spacer to align with left card */}
              <div className="h-[72px]" />

              {/* Result */}
              <div className="pt-6 border-t border-green-500/10">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Total Setup Time</p>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                    5 minutes
                  </p>
                  <p className="text-lg text-green-400/80">₹3,999 one-time</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-950 font-semibold py-6 text-lg shadow-lg shadow-yellow-500/25"
                >
                  <a href="#pricing">See How It Works</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom comparison bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Traditional: <span className="text-red-400 font-semibold">4-6 weeks</span></span>
              </div>
              <div className="hidden md:block text-muted-foreground">→</div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">PropelKit: <span className="text-green-400 font-semibold">5 minutes</span></span>
              </div>
              <div className="hidden md:block text-muted-foreground">=</div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  99% Faster 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
