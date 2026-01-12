import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { genderData } from "@/data/healthcareData";

const COLORS = ["hsl(var(--chart-female))", "hsl(var(--chart-male))", "hsl(var(--chart-other))"];

export const GenderPieChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "300ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">BMI Distribution by Gender</CardTitle>
        <CardDescription>Average BMI values across gender categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={genderData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="avg_bmi"
              nameKey="gender"
              label={({ gender, avg_bmi }) => `${gender}: ${avg_bmi.toFixed(2)}`}
              labelLine={{ stroke: "hsl(var(--muted-foreground))" }}
            >
              {genderData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)"
              }}
              formatter={(value: number) => [value.toFixed(2), "Avg BMI"]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
