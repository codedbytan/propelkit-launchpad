import { Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function LicenseCard() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const licenseKey = 'PK-AGY-2024-XXXX-4532';

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    toast({
      title: "License key copied!",
      description: "Your license key has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-gold via-yellow-500 to-amber-600 text-gold-foreground shadow-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-current" />
        <div className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 border-current" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-2 border-current" />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
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

        {/* Click to copy license key */}
        <div 
          onClick={handleCopy}
          className="flex items-center justify-between gap-2 p-3 bg-black/20 rounded-lg cursor-pointer hover:bg-black/30 transition-colors group"
        >
          <div className="flex-1">
            <p className="text-[10px] uppercase opacity-60 mb-1">License Key (Click to copy)</p>
            <p className="font-mono text-sm tracking-wider">{licenseKey}</p>
          </div>
          <div className="p-2 bg-black/20 rounded-lg group-hover:bg-black/30 transition-colors">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </div>
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

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
    </div>
  );
}
