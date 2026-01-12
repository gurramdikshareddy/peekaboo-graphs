import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Legend } from "recharts";
import { healthcareData } from "@/data/healthcareData";

// Transform data for scatter plot
const femaleData = healthcareData
  .filter(d => d.gender === "female")
  .map((d, i) => ({ x: i + 1, y: d.avg_bmi, location: d.hospital_location }));

const maleData = healthcareData
  .filter(d => d.gender === "male")
  .map((d, i) => ({ x: i + 1, y: d.avg_bmi, location: d.hospital_location }));

const otherData = healthcareData
  .filter(d => d.gender === "other")
  .map((d, i) => ({ x: i + 1, y: d.avg_bmi, location: d.hospital_location }));

export const ScatterPlotChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "800ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">BMI Distribution Scatter Plot</CardTitle>
        <CardDescription>Individual data points showing BMI distribution by gender</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Location Index"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              domain={[0, 9]}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="BMI"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              domain={[28, 30]}
            />
            <ZAxis range={[100, 200]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)"
              }}
              formatter={(value: number, name: string) => {
                if (name === "y") return [value.toFixed(2), "BMI"];
                return [value, name];
              }}
              labelFormatter={() => ""}
            />
            <Legend />
            <Scatter 
              name="Female" 
              data={femaleData} 
              fill="hsl(var(--chart-female))"
              shape="circle"
            />
            <Scatter 
              name="Male" 
              data={maleData} 
              fill="hsl(var(--chart-male))"
              shape="diamond"
            />
            <Scatter 
              name="Other" 
              data={otherData} 
              fill="hsl(var(--chart-other))"
              shape="triangle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
