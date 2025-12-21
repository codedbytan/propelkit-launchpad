import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { LicenseCard } from '@/components/dashboard/LicenseCard';
import { DownloadSection } from '@/components/dashboard/DownloadSection';
import { InvoicesTable } from '@/components/dashboard/InvoicesTable';
import { useEffect } from 'react';

export default function Dashboard() {
  // Force dark mode for dashboard
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      // Optionally restore previous theme on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          {/* Top section: License + Download */}
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
