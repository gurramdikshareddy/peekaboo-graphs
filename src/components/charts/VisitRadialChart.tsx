import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { visitStatistics } from "@/data/visitData";

const radialData = [
  {
    name: "Outpatient",
    value: visitStatistics.outpatientPercentage,
    fill: "hsl(var(--chart-2))",
  },
  {
    name: "Inpatient",
    value: visitStatistics.inpatientPercentage,
    fill: "hsl(var(--chart-1))",
  },
];

export function VisitRadialChart() {
  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle>Visit Type Percentage</CardTitle>
        <CardDescription>
          Radial view of visit type distribution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="30%"
              outerRadius="90%"
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                label={{ position: "insideStart", fill: "hsl(var(--foreground))" }}
                background
                dataKey="value"
              />
              <Tooltip
                formatter={(value: number) => [`${value.toFixed(1)}%`, "Percentage"]}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
