import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { sortedByCost } from "@/data/diagnosisCostData";

export const DiagnosisCostBarChart = () => {
  const data = sortedByCost.map(d => ({
    name: d.diagnosis_description.length > 25 
      ? d.diagnosis_description.substring(0, 22) + "..." 
      : d.diagnosis_description,
    fullName: d.diagnosis_description,
    cost: d.avg_cost,
  }));

  const getBarColor = (cost: number) => {
    if (cost > 2450) return "hsl(var(--chart-1))";
    if (cost >= 2350) return "hsl(var(--chart-2))";
    return "hsl(var(--chart-3))";
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Average Cost by Diagnosis
        </CardTitle>
        <CardDescription>
          Healthcare costs ranked from highest to lowest average cost
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              width={200}
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
            <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.cost)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
