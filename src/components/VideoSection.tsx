import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            See PropelKit in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            3-minute walkthrough of what you're getting
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-[#111] border border-white/10 overflow-hidden group cursor-pointer">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Coming soon text */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-sm text-muted-foreground">
                Video coming soon — 
                <a href="#" className="text-primary hover:underline ml-1">
                  Subscribe to get notified
                </a>
              </p>
            </div>

            {/* Screenshot previews */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 bg-primary/50" />
              <div className="w-2 h-2 bg-white/20" />
              <div className="w-2 h-2 bg-white/20" />
              <div className="w-2 h-2 bg-white/20" />
            </div>
          </div>

          {/* Feature previews */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {["Dashboard", "Payments", "GST Invoice", "Admin Panel"].map((label) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 p-4 text-center"
              >
                <div className="aspect-video bg-white/5 mb-2" />
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
