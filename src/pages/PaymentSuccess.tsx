import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, ArrowRight, Sparkles } from 'lucide-react';

export default function PaymentSuccess() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Hide confetti after animation
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#FACC15', '#F59E0B', '#EAB308', '#FCD34D', '#FDE68A'][
                    Math.floor(Math.random() * 5)
                  ],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Glass card */}
      <div className="w-full max-w-lg relative z-10">
        <div className="glass-card-gold rounded-2xl p-8 md:p-12 shadow-xl text-center">
          {/* Success icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gold/20 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-gold" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-6 w-6 text-gold animate-pulse" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Payment Successful!</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Welcome to PropelKit. You now have lifetime access.
          </p>

          {/* Order summary */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Product</span>
                <span className="font-medium">PropelKit Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">License</span>
                <span className="font-medium">Lifetime Access</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-xs">PK-{Date.now().toString(36).toUpperCase()}</span>
              </div>
              <div className="border-t border-border/50 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total Paid</span>
                  <span className="font-bold text-gold">₹4,999</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <Button
              asChild
              className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground font-semibold"
            >
              <Link to="/dashboard">
                <Download className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-border/50"
            >
              <Link to="/">
                Back to Home <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Receipt note */}
          <p className="mt-6 text-sm text-muted-foreground">
            A receipt has been sent to your email address.
          </p>
        </div>
      </div>
    </div>
  );
}
