import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { prescriptionBarData, prescriptionStatistics } from "@/data/prescriptionData";

export function PrescriptionBarChart() {
  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle>Prescription Count by Drug</CardTitle>
        <CardDescription>
          {prescriptionStatistics.totalDrugs} drugs with {prescriptionStatistics.totalPrescriptions} total prescriptions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={prescriptionBarData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`${value} prescriptions`, "Count"]}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {prescriptionBarData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
