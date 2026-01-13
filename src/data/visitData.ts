// Visit Data extracted from parquet file
// Data represents visit counts by type (Inpatient/Outpatient)

export interface VisitRecord {
  visit_type: string;
  visit_count: number;
  label: string;
}

export const visitData: VisitRecord[] = [
  { visit_type: "ip", visit_count: 35, label: "Inpatient" },
  { visit_type: "op", visit_count: 165, label: "Outpatient" },
];

// Total visits
export const totalVisits = visitData.reduce((sum, v) => sum + v.visit_count, 0);

// Statistics
export const visitStatistics = {
  totalVisits,
  totalTypes: visitData.length,
  inpatientCount: visitData.find(v => v.visit_type === "ip")?.visit_count || 0,
  outpatientCount: visitData.find(v => v.visit_type === "op")?.visit_count || 0,
  inpatientPercentage: ((visitData.find(v => v.visit_type === "ip")?.visit_count || 0) / totalVisits * 100),
  outpatientPercentage: ((visitData.find(v => v.visit_type === "op")?.visit_count || 0) / totalVisits * 100),
  ratio: (visitData.find(v => v.visit_type === "op")?.visit_count || 0) / (visitData.find(v => v.visit_type === "ip")?.visit_count || 1),
};

// Data for pie chart
export const visitPieData = visitData.map(v => ({
  name: v.label,
  value: v.visit_count,
  percentage: (v.visit_count / totalVisits * 100).toFixed(1),
}));

// Data for bar chart
export const visitBarData = visitData.map(v => ({
  name: v.label,
  count: v.visit_count,
  fill: v.visit_type === "ip" ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
}));

// Comparison data
export const visitComparisonData = [
  {
    category: "Visit Distribution",
    Inpatient: visitData.find(v => v.visit_type === "ip")?.visit_count || 0,
    Outpatient: visitData.find(v => v.visit_type === "op")?.visit_count || 0,
  },
];
