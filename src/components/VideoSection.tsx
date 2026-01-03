export function VideoSection() {
  return (
    <section className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-white/50 mb-2">The code in 3 minutes</p>
        </div>

        {/* Video Embed Placeholder */}
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video bg-neutral-900 border border-white/10 overflow-hidden">
            {/* YouTube-style embed placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-medium">PropelKit Demo — 2x if too slow 😉</p>
                <p className="text-white/50 text-sm mt-1">Click to play</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial below video */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-white/80 italic mb-4">
            "It's a game changer. Comes with an easy-to-follow tutorial, and saves a ton of time."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
              alt="Priya"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-medium text-white text-sm">Priya Sharma</p>
              <p className="text-xs text-white/50">Built an AI tool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
