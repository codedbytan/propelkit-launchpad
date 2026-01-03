import { Rocket } from "lucide-react";

const aiTools = [
  { name: "GitHub Copilot", src: "/logos/github-copilot.png" },
  { name: "Cursor", src: "/logos/cursor.png" },
  { name: "Claude", src: "/logos/claude.png" },
  { name: "ChatGPT", src: "/logos/chatgpt.png" },
  { name: "Windsurf", src: "/logos/windsurf.png" },
  { name: "Gemini", src: "/logos/gemini.png" },
  { name: "Grok", src: "/logos/grok.png" },
  { name: "DeepSeek", src: "/logos/deepseek.png" },
];

const indiaStackTools = [
  { name: "Razorpay", src: "/logos/razorpay.png" },
  { name: "GST Engine", src: "/logos/gst-engine.png" },
  { name: "Supabase", src: "/logos/supabase.png" },
  { name: "Resend", src: "/logos/resend.png" },
];

export function TechStackLogos() {
  return (
    <section className="bg-neutral-800">
      <div className="max-w-screen-md mx-auto px-8 md:px-0 py-12">
        
        {/* PropelKit Logo */}
        <div className="flex justify-center text-center mx-auto">
          <div className="relative">
            <div className="w-36 md:w-52 mx-auto flex items-center justify-center gap-2">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <span className="text-2xl md:text-3xl font-bold text-white">PropelKit</span>
            </div>
            <p className="absolute text-lime-500 text-sm leading-5 right-0 top-0 
                          font-mono hidden md:block 
                          translate-x-[44.8125px] -translate-y-2.5 
                          rotate-[6deg]">
              codebase
            </p>
          </div>
        </div>
        
        {/* Plus Sign */}
        <p className="text-3xl md:text-4xl leading-9 md:leading-10 text-center mt-5 text-white">
          +
        </p>
        
        {/* AI Tools Grid */}
        <div className="relative flex flex-wrap justify-center gap-4 mt-6 md:mt-8">
          {aiTools.map((tool, index) => (
            <div key={tool.name} className="relative">
              <div 
                className="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-white/10 border border-white/20
                           flex items-center justify-center
                           shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]"
              >
                <span className="text-xs md:text-sm text-white/80 font-medium text-center px-1">
                  {tool.name.split(' ')[0]}
                </span>
              </div>
              {/* "AI" Label on Last Icon */}
              {index === aiTools.length - 1 && (
                <p className="absolute text-lime-500 text-sm leading-5 -right-1 -top-3
                              font-mono hidden md:block
                              translate-x-[16.8125px] -translate-y-2.5
                              rotate-[6deg]">
                  AI
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Equals Sign */}
        <p className="text-3xl md:text-4xl leading-9 md:leading-10 text-center mt-6 md:mt-8 text-white">
          =
        </p>
        
        {/* Result */}
        <div className="text-center mt-6 md:mt-8 mx-auto">
          <p className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 text-white">
            Launch your idea{" "}
            <span className="text-yellow-950 bg-stone-300 tracking-[0.6px] md:tracking-[0.9px] 
                             leading-8 md:leading-10 px-1 md:px-1.5">
              INSTANTLY
            </span>
          </p>
        </div>
        
      </div>

      {/* India Stack Section */}
      <div className="border-t border-stone-700">
        <div className="max-w-screen-md mx-auto px-8 md:px-0 py-12">
          
          {/* PropelKit Logo (smaller) */}
          <div className="flex justify-center text-center mx-auto">
            <div className="w-24 md:w-32 mx-auto flex items-center justify-center gap-2">
              <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <span className="text-xl md:text-2xl font-bold text-white">PropelKit</span>
            </div>
          </div>
          
          {/* Plus Sign */}
          <p className="text-3xl md:text-4xl leading-9 md:leading-10 text-center mt-5 text-white">
            +
          </p>
          
          {/* India Stack Tools */}
          <div className="relative flex flex-wrap justify-center gap-4 mt-6 md:mt-8">
            {indiaStackTools.map((tool, index) => (
              <div key={tool.name} className="relative">
                <div 
                  className="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-primary/10 border border-primary/30
                             flex items-center justify-center
                             shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                >
                  <span className="text-xs md:text-sm text-primary font-medium text-center px-1">
                    {tool.name.split(' ')[0]}
                  </span>
                </div>
                {/* "India Stack" Label on Last Icon */}
                {index === indiaStackTools.length - 1 && (
                  <p className="absolute text-amber-400 text-sm leading-5 -right-1 -top-3
                                font-mono hidden md:block whitespace-nowrap
                                translate-x-[16.8125px] -translate-y-2.5
                                rotate-[6deg]">
                    India Stack
                  </p>
                )}
              </div>
            ))}
          </div>
          
          {/* Equals Sign */}
          <p className="text-3xl md:text-4xl leading-9 md:leading-10 text-center mt-6 md:mt-8 text-white">
            =
          </p>
          
          {/* Result */}
          <div className="text-center mt-6 md:mt-8 mx-auto">
            <p className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 text-white">
              Ship with{" "}
              <span className="text-black bg-amber-400 tracking-[0.6px] md:tracking-[0.9px] 
                               leading-8 md:leading-10 px-1 md:px-1.5 mx-1">
                ZERO
              </span>
              {" "}compliance headaches
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
