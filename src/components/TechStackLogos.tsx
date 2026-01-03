const foundationStack = [
  { name: "Next.js 14", desc: "App Router" },
  { name: "Supabase", desc: "Auth + Database" },
  { name: "Tailwind CSS", desc: "Styling" },
  { name: "TypeScript", desc: "Type Safety" },
  { name: "shadcn/ui", desc: "Components" },
];

const indiaStack = [
  { name: "Razorpay", desc: "Payments" },
  { name: "GST Engine", desc: "Tax Compliance" },
  { name: "Resend", desc: "Transactional Email" },
  { name: "Vercel", desc: "Deployment" },
];

export function TechStackLogos() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A production-ready tech stack designed for scale
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* The Foundation */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
              The Foundation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {foundationStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white/5 border border-white/10 p-4 text-center transition-all duration-300 hover:border-white/20"
                >
                  <p className="font-semibold text-sm mb-1">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plus Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 border border-primary/30 flex items-center justify-center">
              <span className="text-2xl text-primary font-light">+</span>
            </div>
          </div>

          {/* The India Stack */}
          <div>
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6 text-center">
              The India Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {indiaStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-primary/5 border border-primary/20 p-4 text-center transition-all duration-300 hover:border-primary/40"
                >
                  <p className="font-semibold text-sm mb-1 text-primary">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
