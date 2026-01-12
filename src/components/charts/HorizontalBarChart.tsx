import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { locationData } from "@/data/healthcareData";

const sortedData = [...locationData].sort((a, b) => b.average - a.average);

const getBarColor = (index: number) => {
  const colors = [
    "hsl(var(--chart-female))",
    "hsl(var(--chart-male))",
    "hsl(var(--chart-other))",
    "hsl(var(--chart-average))",
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(var(--muted-foreground))",
  ];
  return colors[index % colors.length];
};

export const HorizontalBarChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "700ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Location Rankings by Average BMI</CardTitle>
        <CardDescription>Hospitals ranked from highest to lowest average BMI</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart 
            data={sortedData} 
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              domain={[28, 30]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis 
              dataKey="location" 
              type="category"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              width={70}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)"
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
              formatter={(value: number) => [value.toFixed(2), "Avg BMI"]}
            />
            <Bar 
              dataKey="average" 
              name="Average BMI"
              radius={[0, 4, 4, 0]}
            >
              {sortedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
