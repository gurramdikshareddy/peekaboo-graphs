import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { sortedByCost } from "@/data/diagnosisCostData";

export const CostAreaChart = () => {
  const data = sortedByCost.map((d, index) => ({
    index: index + 1,
    name: d.diagnosis_description.length > 15 
      ? d.diagnosis_description.substring(0, 12) + "..." 
      : d.diagnosis_description,
    fullName: d.diagnosis_description,
    cost: d.avg_cost,
  }));

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Cost Distribution Area</CardTitle>
        <CardDescription>
          Visual representation of cost variation across diagnoses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
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
            <Area 
              type="monotone" 
              dataKey="cost" 
              stroke="hsl(var(--chart-4))" 
              strokeWidth={2}
              fill="url(#costGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
