import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { sortedByCost, diagnosisStatistics } from "@/data/diagnosisCostData";

export const DiagnosisCostTable = () => {
  const getCostCategory = (cost: number) => {
    if (cost > 2450) return { label: "High", variant: "destructive" as const };
    if (cost >= 2350) return { label: "Medium", variant: "secondary" as const };
    return { label: "Low", variant: "default" as const };
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Complete Diagnosis Cost Data</CardTitle>
        <CardDescription>
          Detailed breakdown of all diagnosis costs with category classification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Diagnosis Description</TableHead>
                <TableHead className="text-right">Average Cost</TableHead>
                <TableHead className="text-right">Deviation</TableHead>
                <TableHead className="text-center">Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedByCost.map((record, index) => {
                const category = getCostCategory(record.avg_cost);
                const deviation = record.avg_cost - diagnosisStatistics.avgCost;
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{record.diagnosis_description}</TableCell>
                    <TableCell className="text-right font-mono">
                      ${record.avg_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className={`text-right font-mono ${deviation > 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {deviation > 0 ? '+' : ''}${deviation.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={category.variant}>{category.label}</Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
