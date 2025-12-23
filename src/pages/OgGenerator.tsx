const OgGenerator = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      {/* OG Card Container - Fixed 1200x630 */}
      <div 
        className="relative w-[1200px] h-[630px] bg-[hsl(222,47%,6%)] border border-[hsl(215,20%,20%)] overflow-hidden"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(215,20%,30%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(215,20%,30%) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex">
          {/* Left Side - 60% */}
          <div className="w-[60%] h-full flex flex-col justify-center pl-16 pr-8">
            {/* Version Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[hsl(217,91%,60%,0.1)] text-[hsl(217,91%,70%)] tracking-tight">
                v1.0 Release
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-[5.5rem] font-bold text-white leading-none mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              PropelKit
            </h1>

            {/* Subhead */}
            <p 
              className="text-3xl text-[hsl(215,20%,55%)] leading-snug"
              style={{ letterSpacing: '-0.01em' }}
            >
              The Enterprise-Grade Boilerplate<br />for India.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex gap-3 mt-8">
              {['Next.js 14', 'Supabase', 'Razorpay', 'TypeScript'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-[hsl(215,20%,60%)] bg-[hsl(215,20%,12%)] rounded-md border border-[hsl(215,20%,18%)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - 40% Code Mockup */}
          <div className="w-[40%] h-full flex items-center pr-12">
            <div className="w-full">
              {/* VS Code Window */}
              <div className="bg-[hsl(220,13%,10%)] rounded-lg border border-[hsl(215,20%,18%)] overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220,13%,8%)] border-b border-[hsl(215,20%,15%)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[hsl(0,70%,55%)]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(45,90%,55%)]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(140,60%,45%)]" />
                  </div>
                  <span className="ml-3 text-xs text-[hsl(215,20%,45%)] font-mono">
                    app/dashboard/page.tsx
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">1</span>
                    <span>
                      <span className="text-[hsl(300,50%,70%)]">import</span>
                      <span className="text-white"> {'{ '}</span>
                      <span className="text-[hsl(40,90%,70%)]">auth</span>
                      <span className="text-white">{' }'} </span>
                      <span className="text-[hsl(300,50%,70%)]">from</span>
                      <span className="text-[hsl(100,50%,70%)]"> "@/lib/supabase"</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">2</span>
                    <span className="text-[hsl(215,20%,35%)]"></span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">3</span>
                    <span>
                      <span className="text-[hsl(300,50%,70%)]">export default</span>
                      <span className="text-[hsl(200,90%,70%)]"> async function</span>
                      <span className="text-[hsl(50,90%,70%)]"> Dashboard</span>
                      <span className="text-white">() {'{'}</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">4</span>
                    <span>
                      <span className="text-white">  </span>
                      <span className="text-[hsl(300,50%,70%)]">const</span>
                      <span className="text-[hsl(200,90%,80%)]"> user</span>
                      <span className="text-white"> = </span>
                      <span className="text-[hsl(300,50%,70%)]">await</span>
                      <span className="text-[hsl(50,90%,70%)]"> auth</span>
                      <span className="text-white">()</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">5</span>
                    <span className="text-[hsl(215,20%,35%)]"></span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">6</span>
                    <span>
                      <span className="text-white">  </span>
                      <span className="text-[hsl(300,50%,70%)]">return</span>
                      <span className="text-white"> {'<'}</span>
                      <span className="text-[hsl(200,90%,70%)]">Dashboard</span>
                      <span className="text-[hsl(180,60%,70%)]"> user</span>
                      <span className="text-white">={'{'}</span>
                      <span className="text-[hsl(200,90%,80%)]">user</span>
                      <span className="text-white">{'}'} /{'>'}</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[hsl(215,20%,35%)] w-8 text-right mr-4 select-none">7</span>
                    <span className="text-white">{'}'}</span>
                  </div>
                </div>
              </div>

              {/* "Real Code" indicator */}
              <div className="mt-4 text-center">
                <span className="text-xs text-[hsl(215,20%,40%)] tracking-wide uppercase">
                  Production-Ready Code Included
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Watermark */}
        <div className="absolute bottom-6 left-16 flex items-center gap-2">
          <span className="text-sm text-[hsl(215,20%,40%)]">
            propelkit.dev
          </span>
        </div>
      </div>

      {/* Helper text outside card */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
        Screenshot this 1200×630 card for your OG image
      </div>
    </div>
  );
};

export default OgGenerator;
