import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Signature</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Token</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-sm">0x123...abc</TableCell>
          <TableCell>1.234</TableCell>
          <TableCell className="text-sm">0xdef...789</TableCell>
          <TableCell className="text-sm">0x456...fed</TableCell>
          <TableCell>$1,234.56</TableCell>
          <TableCell>SUI</TableCell>
        </TableRow>
        {/* Add more rows as needed */}
      </TableBody>
    </Table>
  );
}
