import { Skeleton } from '@/components/ui/skeleton';

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar skeleton */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar-bg border-r border-border/10">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center gap-2 px-6 border-b border-border/10">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-5 w-24" />
          </div>
          <nav className="flex-1 px-3 py-4 space-y-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-lg" />
            ))}
          </nav>
        </div>
      </aside>

      <div className="ml-64">
        {/* Header skeleton */}
        <header className="h-16 border-b border-border/10 px-6 flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-9 w-9 rounded-full" />
          </div>
        </header>

        {/* Main content skeleton */}
        <main className="p-6 space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>

          {/* License and Download sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-48 rounded-2xl" />
            </div>
            <Skeleton className="h-52 rounded-xl" />
          </div>

          {/* Table skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="rounded-lg border border-border/50 overflow-hidden">
              <Skeleton className="h-12 w-full" />
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-14 w-full" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
