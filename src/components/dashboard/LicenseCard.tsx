import { Sparkles } from 'lucide-react';

export function LicenseCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 h-48 bg-gradient-to-br from-gold via-yellow-500 to-amber-600 text-gold-foreground shadow-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-current" />
        <div className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 border-current" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-2 border-current" />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-80">PropelKit License</p>
            <h3 className="text-2xl font-bold mt-1">Agency Plan</h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-black/20 rounded-full">
            <Sparkles className="h-3 w-3" />
            <span className="text-xs font-medium">Active</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <p className="font-mono text-lg tracking-wider">•••• •••• •••• 4532</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase opacity-60">License Holder</p>
              <p className="text-sm font-medium">Tanishq Kumar</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase opacity-60">Valid Forever</p>
              <p className="text-sm font-medium">Lifetime Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
    </div>
  );
}
