import { Home, Package, FileText, CreditCard, Settings, HelpCircle, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Package, label: 'Downloads', href: '/dashboard/downloads' },
  { icon: FileText, label: 'Invoices', href: '/dashboard/invoices' },
  { icon: CreditCard, label: 'License', href: '/dashboard/license' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

const bottomItems = [
  { icon: HelpCircle, label: 'Help & Support', href: '/contact' },
];

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar-bg border-r border-border/10">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 px-6 border-b border-border/10">
          <div className="h-8 w-8 rounded-lg bg-gold flex items-center justify-center">
            <span className="font-bold text-gold-foreground text-sm">PK</span>
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">PropelKit</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/dashboard'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                  isActive
                    ? 'bg-gold/10 text-gold'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-border/10 space-y-1">
          {bottomItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground transition-all"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
