import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { sortedByCount, totalPrescriptions, prescriptionStatistics } from "@/data/prescriptionData";

export function PrescriptionTable() {
  const getPercentage = (count: number) => ((count / totalPrescriptions) * 100).toFixed(1);
  
  const getRankBadge = (index: number) => {
    if (index === 0) return <Badge className="bg-yellow-500">Top</Badge>;
    if (index === sortedByCount.length - 1) return <Badge variant="secondary">Lowest</Badge>;
    return null;
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle>Prescription Details</CardTitle>
        <CardDescription>
          Complete prescription data ranked by count (Avg: {prescriptionStatistics.avgPrescriptions.toFixed(0)})
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Rank</TableHead>
              <TableHead>Drug Name</TableHead>
              <TableHead className="text-right">Count</TableHead>
              <TableHead className="text-right">% of Total</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedByCount.map((drug, index) => (
              <TableRow key={drug.drug_name}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="capitalize">{drug.drug_name}</TableCell>
                <TableCell className="text-right">{drug.prescription_count}</TableCell>
                <TableCell className="text-right">{getPercentage(drug.prescription_count)}%</TableCell>
                <TableCell className="text-center">{getRankBadge(index)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
