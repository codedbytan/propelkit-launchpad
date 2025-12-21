import { Download, Github, FileCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DownloadSection() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCode className="h-5 w-5 text-gold" />
          Download Source Code
        </CardTitle>
        <CardDescription>
          Get the latest version of PropelKit with all updates included
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}
