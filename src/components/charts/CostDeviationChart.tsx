import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";
import { comparisonData, diagnosisStatistics } from "@/data/diagnosisCostData";

export const CostDeviationChart = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Cost Deviation from Average</CardTitle>
        <CardDescription>
          How each diagnosis cost compares to the average (${diagnosisStatistics.avgCost.toFixed(2)})
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `$${value > 0 ? '+' : ''}${value.toFixed(0)}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`$${value > 0 ? '+' : ''}${value.toFixed(2)}`, 'Deviation']}
              labelFormatter={(label, payload) => payload?.[0]?.payload?.fullName || label}
            />
            <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
            <Bar dataKey="deviation" radius={[4, 4, 0, 0]}>
              {comparisonData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.deviation > 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-3))"} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
