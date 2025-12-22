import { DollarSign, Users, Download, Key } from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '₹12,450',
    change: '+12%',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
  {
    label: 'Active Users',
    value: '1,234',
    change: '+8%',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    label: 'Downloads',
    value: '856',
    change: '+23%',
    changeType: 'positive' as const,
    icon: Download,
  },
  {
    label: 'Active Licenses',
    value: '432',
    change: '+5%',
    changeType: 'positive' as const,
    icon: Key,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-card-gold rounded-xl p-5 hover:border-gold/30 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-gold" />
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-red-500/10 text-red-400'
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
