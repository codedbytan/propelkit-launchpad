import { Download, Github, FileCode, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const changelog = [
  { version: 'v2.4.1', date: 'Dec 20, 2024', change: 'Added GST invoice PDF export' },
  { version: 'v2.4.0', date: 'Dec 15, 2024', change: 'New admin dashboard components' },
  { version: 'v2.3.0', date: 'Dec 10, 2024', change: 'Razorpay subscription support' },
];

export function DownloadSection() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-gold" />
            Download Source Code
          </CardTitle>
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Sparkles className="h-3 w-3 mr-1" />
            Latest: v2.4.1
          </Badge>
        </div>
        <CardDescription>
          Get the latest version of PropelKit with all updates included
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="flex-1 gap-2 bg-gold hover:bg-gold/90 text-gold-foreground font-semibold">
            <Download className="h-5 w-5" />
            Download v2.4.1
          </Button>
          <Button size="lg" variant="outline" className="flex-1 gap-2">
            <Github className="h-5 w-5" />
            Clone from GitHub
          </Button>
        </div>

        <div className="rounded-lg bg-muted/50 p-4 space-y-2">
          <p className="text-sm font-medium text-foreground">What's included:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            {[
              'Next.js 14 App Router',
              'Supabase Auth Setup',
              'Razorpay Integration',
              'GST Invoice Generator',
              'Resend Email Templates',
              'Tailwind + Shadcn UI',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Changelog Preview */}
        <div className="rounded-lg border border-border/50 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">Latest Changes</p>
            <Button variant="link" size="sm" className="text-primary p-0 h-auto">
              View full changelog <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-2">
            {changelog.map((item) => (
              <div key={item.version} className="flex items-start gap-3 text-sm">
                <Badge variant="secondary" className="shrink-0 text-xs">
                  {item.version}
                </Badge>
                <span className="text-muted-foreground">{item.change}</span>
                <span className="text-muted-foreground/60 text-xs ml-auto shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
