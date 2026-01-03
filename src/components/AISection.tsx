export function AISection() {
  const aiTools = [
    { name: "Cursor", emoji: "🖱️" },
    { name: "Copilot", emoji: "🤖" },
    { name: "Claude", emoji: "🧠" },
    { name: "ChatGPT", emoji: "💬" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo equation */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
            {/* PropelKit */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20">
              <span className="text-2xl">🚀</span>
              <span className="font-bold">PropelKit</span>
            </div>

            <span className="text-2xl text-muted-foreground">+</span>

            {/* AI Tools */}
            <div className="flex items-center gap-2">
              {aiTools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-lg"
                  title={tool.name}
                >
                  {tool.emoji}
                </div>
              ))}
            </div>

            <span className="text-2xl text-muted-foreground">=</span>

            {/* Result */}
            <div>
              <p className="text-xl md:text-2xl font-bold">
                Launch your idea
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                INSTANTLY
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PropelKit gives your AI code editor real context to build full features in seconds. Just ask your AI to build what you need.
          </p>
        </div>
      </div>
    </section>
  );
}
