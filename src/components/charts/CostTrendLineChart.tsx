import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { sortedByCost, diagnosisStatistics } from "@/data/diagnosisCostData";

export const CostTrendLineChart = () => {
  const data = sortedByCost.map((d, index) => ({
    index: index + 1,
    name: d.diagnosis_description.length > 20 
      ? d.diagnosis_description.substring(0, 17) + "..." 
      : d.diagnosis_description,
    fullName: d.diagnosis_description,
    cost: d.avg_cost,
  }));

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Cost Trend Analysis</CardTitle>
        <CardDescription>
          Cost distribution pattern across diagnoses (ranked)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              domain={[2250, 2550]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Avg Cost']}
              labelFormatter={(label, payload) => payload?.[0]?.payload?.fullName || label}
            />
            <ReferenceLine 
              y={diagnosisStatistics.avgCost} 
              stroke="hsl(var(--chart-2))" 
              strokeDasharray="5 5"
              label={{ value: 'Avg', position: 'right', fill: 'hsl(var(--chart-2))' }}
            />
            <Line 
              type="monotone" 
              dataKey="cost" 
              stroke="hsl(var(--chart-4))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--chart-4))', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8, fill: 'hsl(var(--chart-1))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
