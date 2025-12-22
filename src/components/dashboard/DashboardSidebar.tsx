import { Home, Package, FileText, CreditCard, Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
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

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('propelkit_auth');
    navigate('/login');
  };

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen bg-sidebar-bg border-r border-border/10 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border/10">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="h-8 w-8 rounded-lg bg-gold flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-gold-foreground text-sm">PK</span>
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-sidebar-foreground whitespace-nowrap">PropelKit</span>
            )}
          </div>
          <button
            onClick={onToggle}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-sidebar-foreground/70 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground transition-all"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/dashboard'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                  collapsed && 'justify-center px-0',
                  isActive
                    ? 'bg-gold/10 text-gold'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground'
                )
              }
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-2 py-4 border-t border-border/10 space-y-1">
          {bottomItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground transition-all",
                collapsed && 'justify-center px-0'
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && item.label}
            </NavLink>
          ))}
          <button
            onClick={handleSignOut}
            className={cn(
              "flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all",
              collapsed && 'justify-center px-0'
            )}
            title={collapsed ? 'Sign Out' : undefined}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && 'Sign Out'}
          </button>
        </div>
      </div>
    </aside>
  );
}
