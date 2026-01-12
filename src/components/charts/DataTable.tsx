import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { healthcareData } from "@/data/healthcareData";

const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return { label: "Underweight", variant: "secondary" as const };
  if (bmi < 25) return { label: "Normal", variant: "default" as const };
  if (bmi < 30) return { label: "Overweight", variant: "outline" as const };
  return { label: "Obese", variant: "destructive" as const };
};

const getGenderColor = (gender: string) => {
  switch (gender) {
    case "female": return "bg-chart-female text-primary-foreground";
    case "male": return "bg-chart-male text-primary-foreground";
    default: return "bg-chart-other text-primary-foreground";
  }
};

export const DataTable = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "900ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Complete Dataset</CardTitle>
        <CardDescription>All {healthcareData.length} records from the parquet file</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] overflow-auto rounded-lg border">
          <Table>
            <TableHeader className="sticky top-0 bg-muted/95 backdrop-blur">
              <TableRow>
                <TableHead className="font-semibold">Gender</TableHead>
                <TableHead className="font-semibold">Hospital Location</TableHead>
                <TableHead className="font-semibold text-right">Avg BMI</TableHead>
                <TableHead className="font-semibold">Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthcareData.map((record, index) => {
                const category = getBMICategory(record.avg_bmi);
                return (
                  <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                    <TableCell>
                      <Badge className={`capitalize ${getGenderColor(record.gender)}`}>
                        {record.gender}
                      </Badge>
                    </TableCell>
                    <TableCell className="capitalize font-medium">
                      {record.hospital_location}
                    </TableCell>
                    <TableCell className="text-right font-mono font-semibold">
                      {record.avg_bmi.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={category.variant}>
                        {category.label}
                      </Badge>
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
