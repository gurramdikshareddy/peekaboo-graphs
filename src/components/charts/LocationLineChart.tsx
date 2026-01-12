import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { locationData } from "@/data/healthcareData";

export const LocationLineChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">BMI Trends Across Locations</CardTitle>
        <CardDescription>Line comparison showing BMI variations by hospital location</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={locationData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="location" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis 
              domain={[27.5, 30]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)"
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="female" 
              name="Female"
              stroke="hsl(var(--chart-female))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-female))", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="male" 
              name="Male"
              stroke="hsl(var(--chart-male))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-male))", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="other" 
              name="Other"
              stroke="hsl(var(--chart-other))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-other))", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="average" 
              name="Average"
              stroke="hsl(var(--chart-average))" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "hsl(var(--chart-average))", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
