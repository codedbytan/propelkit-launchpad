import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { LicenseCard } from '@/components/dashboard/LicenseCard';
import { DownloadSection } from '@/components/dashboard/DownloadSection';
import { InvoicesTable } from '@/components/dashboard/InvoicesTable';
import { useEffect, useState } from 'react';
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton';
import { Sparkles } from 'lucide-react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const userName = 'Tanishq';

  // Force dark mode for dashboard
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <DashboardHeader onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        <main className="p-6 space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <h1 className="text-2xl font-bold text-foreground">
                Welcome back, {userName}!
              </h1>
            </div>
            <p className="text-muted-foreground">
              Your PropelKit license is active. Download the latest version below.
            </p>
          </div>

          {/* Main Download Card */}
          <DownloadSection />

          {/* License Card */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Your License</h2>
            <LicenseCard />
          </div>

          {/* Invoices table */}
          <InvoicesTable />
        </main>
      </div>
    </div>
  );
}
