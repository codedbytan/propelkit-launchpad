import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode, useState, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

// Mock auth check - replace with real auth when Supabase is connected
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulate auth check - in production, check Supabase session
    const checkAuth = () => {
      const mockAuth = localStorage.getItem('propelkit_auth');
      setIsAuthenticated(mockAuth === 'true');
    };
    
    checkAuth();
  }, []);

  return { isAuthenticated, isLoading: isAuthenticated === null };
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 rounded-lg bg-gold animate-pulse" />
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
