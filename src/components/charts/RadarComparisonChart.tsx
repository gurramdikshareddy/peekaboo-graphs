import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from "recharts";
import { locationData } from "@/data/healthcareData";

// Transform data for radar chart - normalized values for better visualization
const radarData = locationData.map(item => ({
  location: item.location,
  female: ((item.female - 28) / 2) * 100,
  male: ((item.male - 28) / 2) * 100,
  other: ((item.other - 28) / 2) * 100,
  // Store original values for tooltip
  originalFemale: item.female,
  originalMale: item.male,
  originalOther: item.other,
}));

export const RadarComparisonChart = () => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 animate-slide-up" style={{ animationDelay: "500ms" }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Multi-Dimensional BMI Analysis</CardTitle>
        <CardDescription>Radar visualization comparing gender BMI across all locations</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis 
              dataKey="location" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            />
            <PolarRadiusAxis 
              angle={22.5} 
              domain={[0, 100]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-lg)"
              }}
              formatter={(value: number, name: string, props) => {
                const originalKey = `original${name.charAt(0).toUpperCase() + name.slice(1)}` as keyof typeof props.payload;
                return [props.payload[originalKey]?.toFixed(2) || value.toFixed(2), name];
              }}
            />
            <Radar 
              name="Female" 
              dataKey="female" 
              stroke="hsl(var(--chart-female))" 
              fill="hsl(var(--chart-female))" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar 
              name="Male" 
              dataKey="male" 
              stroke="hsl(var(--chart-male))" 
              fill="hsl(var(--chart-male))" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar 
              name="Other" 
              dataKey="other" 
              stroke="hsl(var(--chart-other))" 
              fill="hsl(var(--chart-other))" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
