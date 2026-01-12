// Diagnosis Cost Data extracted from parquet file
// Data represents average cost by diagnosis description

export interface DiagnosisCostRecord {
  diagnosis_description: string;
  avg_cost: number;
}

export const diagnosisCostData: DiagnosisCostRecord[] = [
  { diagnosis_description: "Upper respiratory infection", avg_cost: 2523.14 },
  { diagnosis_description: "Chronic obstructive pulmonary disease", avg_cost: 2509.87 },
  { diagnosis_description: "Ischemic heart disease", avg_cost: 2476.33 },
  { diagnosis_description: "Hypothyroidism", avg_cost: 2425.56 },
  { diagnosis_description: "Type 2 diabetes mellitus", avg_cost: 2389.22 },
  { diagnosis_description: "Chronic kidney disease", avg_cost: 2356.78 },
  { diagnosis_description: "Gastroenteritis", avg_cost: 2312.45 },
  { diagnosis_description: "Asthma", avg_cost: 2298.67 },
  { diagnosis_description: "Essential hypertension", avg_cost: 2445.89 },
];

// Sorted by cost (high to low)
export const sortedByCost = [...diagnosisCostData].sort((a, b) => b.avg_cost - a.avg_cost);

// Categorized by cost range
export const costCategories = [
  { 
    category: "High Cost (>$2450)", 
    diagnoses: diagnosisCostData.filter(d => d.avg_cost > 2450),
    color: "#ef4444"
  },
  { 
    category: "Medium Cost ($2350-$2450)", 
    diagnoses: diagnosisCostData.filter(d => d.avg_cost >= 2350 && d.avg_cost <= 2450),
    color: "#f59e0b" 
  },
  { 
    category: "Low Cost (<$2350)", 
    diagnoses: diagnosisCostData.filter(d => d.avg_cost < 2350),
    color: "#22c55e"
  },
];

// Statistics
export const diagnosisStatistics = {
  totalRecords: diagnosisCostData.length,
  avgCost: diagnosisCostData.reduce((sum, d) => sum + d.avg_cost, 0) / diagnosisCostData.length,
  minCost: Math.min(...diagnosisCostData.map(d => d.avg_cost)),
  maxCost: Math.max(...diagnosisCostData.map(d => d.avg_cost)),
  costRange: Math.max(...diagnosisCostData.map(d => d.avg_cost)) - Math.min(...diagnosisCostData.map(d => d.avg_cost)),
  highestCostDiagnosis: sortedByCost[0].diagnosis_description,
  lowestCostDiagnosis: sortedByCost[sortedByCost.length - 1].diagnosis_description,
};

// Data for pie chart
export const costDistributionData = costCategories.map(cat => ({
  name: cat.category,
  value: cat.diagnoses.length,
  color: cat.color,
}));

// Data for comparison chart
export const comparisonData = diagnosisCostData.map(d => ({
  name: d.diagnosis_description.length > 20 
    ? d.diagnosis_description.substring(0, 18) + "..." 
    : d.diagnosis_description,
  fullName: d.diagnosis_description,
  cost: d.avg_cost,
  deviation: d.avg_cost - diagnosisStatistics.avgCost,
}));
