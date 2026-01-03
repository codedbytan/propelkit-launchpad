export function FeaturedOn() {
  const techLogos = [
    { name: "Next.js", icon: "▲" },
    { name: "Supabase", icon: "⚡" },
    { name: "Razorpay", icon: "💳" },
    { name: "Tailwind", icon: "🎨" },
    { name: "TypeScript", icon: "TS" },
    { name: "Resend", icon: "📧" },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Built with production-grade tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xl">{logo.icon}</span>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
