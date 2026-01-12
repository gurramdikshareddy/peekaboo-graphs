import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { locationData } from "@/data/healthcareData";

export const AreaTrendChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "600ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Average BMI Trend Analysis</CardTitle>
        <CardDescription>Stacked area showing BMI contribution by gender across locations</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={locationData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorFemale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-female))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-female))" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorMale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-male))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-male))" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorOther" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-other))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-other))" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="location" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
            />
            <YAxis 
              domain={[0, 90]}
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
            <Area 
              type="monotone" 
              dataKey="female" 
              name="Female"
              stackId="1" 
              stroke="hsl(var(--chart-female))" 
              fill="url(#colorFemale)" 
            />
            <Area 
              type="monotone" 
              dataKey="male" 
              name="Male"
              stackId="1" 
              stroke="hsl(var(--chart-male))" 
              fill="url(#colorMale)" 
            />
            <Area 
              type="monotone" 
              dataKey="other" 
              name="Other"
              stackId="1" 
              stroke="hsl(var(--chart-other))" 
              fill="url(#colorOther)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
