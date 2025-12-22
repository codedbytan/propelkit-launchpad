import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { LicenseCard } from '@/components/dashboard/LicenseCard';
import { DownloadSection } from '@/components/dashboard/DownloadSection';
import { InvoicesTable } from '@/components/dashboard/InvoicesTable';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { useEffect, useState } from 'react';
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
        
        <main className="p-6 space-y-6">
          {/* Stats overview */}
          <StatsCards />

          {/* License + Download */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-muted-foreground">My License</h2>
              <LicenseCard />
            </div>
            <DownloadSection />
          </div>

          {/* Invoices table */}
          <InvoicesTable />
        </main>
      </div>
    </div>
  );
}
