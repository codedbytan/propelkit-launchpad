import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const invoices = [
  {
    id: 'INV-2024-001',
    date: 'Dec 15, 2024',
    amount: '₹9,999',
    status: 'paid',
    description: 'PropelKit Agency License',
  },
  {
    id: 'INV-2024-002',
    date: 'Nov 28, 2024',
    amount: '₹499',
    status: 'paid',
    description: 'Premium Support Add-on',
  },
  {
    id: 'INV-2024-003',
    date: 'Oct 10, 2024',
    amount: '₹1,999',
    status: 'paid',
    description: 'UI Component Pack',
  },
];

export function InvoicesTable() {
  return (
    <Card className="border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gold" />
            Recent Invoices
          </CardTitle>
          <CardDescription>Your purchase history and invoices</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          View All
          <ExternalLink className="h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-mono text-sm">{invoice.id}</TableCell>
                <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                <TableCell>{invoice.description}</TableCell>
                <TableCell className="font-semibold">{invoice.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-500 border-green-500/20 capitalize"
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
