import { useEffect, useState, useRef } from "react";
import { Clock, Zap, ArrowRight } from "lucide-react";

const tasks = [
  { name: "Setting up Auth", hours: 4, color: "bg-red-500" },
  { name: "Payment Integration", hours: 6, color: "bg-orange-500" },
  { name: "Email System", hours: 2, color: "bg-yellow-500" },
];

const totalHours = tasks.reduce((sum, task) => sum + task.hours, 0);

export function PainCalculator() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stop wasting time on <span className="text-gradient">setup.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every hour spent on boilerplate is an hour not spent on your actual product.
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Traditional Way */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-lg">The Traditional Way</h3>
            </div>
            
            <div className="space-y-4">
              {tasks.map((task, i) => (
                <div key={task.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{task.name}</span>
                    <span className="font-medium">{task.hours} hours</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${task.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: isVisible ? `${(task.hours / totalHours) * 100}%` : "0%",
                        transitionDelay: `${i * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-muted-foreground">Total time wasted</span>
              <span className="text-2xl font-bold text-red-500">{totalHours}+ Hours</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-4">
            <ArrowRight className="w-8 h-8 text-primary rotate-90" />
          </div>

          {/* PropelKit Way */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-bl-xl">
              PropelKit
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">The PropelKit Way</h3>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Everything pre-configured</span>
                <span className="font-medium text-primary">5 minutes</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-primary transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: isVisible ? "100%" : "0%",
                    transitionDelay: "800ms",
                  }}
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-muted-foreground">Time to launch</span>
              <span className="text-2xl font-bold text-primary">5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
