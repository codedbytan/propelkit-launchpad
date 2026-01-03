import { Shield, Zap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "100%",
    label: "Secure",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    value: "< 1s",
    label: "Load Time",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: "100+",
    label: "Customers",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Rating",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function TrustBanner() {
  return (
    <section className="py-8 border-y border-border bg-gradient-to-r from-primary/5 via-amber-500/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
