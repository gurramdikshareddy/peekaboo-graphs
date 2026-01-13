// Prescription Data extracted from parquet file
// Data represents prescription counts by drug name

export interface PrescriptionRecord {
  drug_name: string;
  prescription_count: number;
}

export const prescriptionData: PrescriptionRecord[] = [
  { drug_name: "enalapril", prescription_count: 116 },
  { drug_name: "iron supplements", prescription_count: 106 },
  { drug_name: "levothyroxine", prescription_count: 81 },
  { drug_name: "coldact", prescription_count: 80 },
  { drug_name: "salbutamol", prescription_count: 80 },
  { drug_name: "amoxicillin", prescription_count: 39 },
  { drug_name: "azithromycin", prescription_count: 113 },
  { drug_name: "metformin", prescription_count: 106 },
  { drug_name: "atorvastatin", prescription_count: 116 },
];

// Total prescriptions
export const totalPrescriptions = prescriptionData.reduce((sum, p) => sum + p.prescription_count, 0);

// Sorted by count
export const sortedByCount = [...prescriptionData].sort((a, b) => b.prescription_count - a.prescription_count);

// Drug categories
export const drugCategories = {
  cardiovascular: ["enalapril", "atorvastatin"],
  diabetes: ["metformin"],
  thyroid: ["levothyroxine"],
  supplements: ["iron supplements"],
  respiratory: ["salbutamol", "coldact"],
  antibiotics: ["amoxicillin", "azithromycin"],
};

// Category data
export const categoryData = [
  { 
    name: "Cardiovascular", 
    count: prescriptionData.filter(p => drugCategories.cardiovascular.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--chart-1))"
  },
  { 
    name: "Antibiotics", 
    count: prescriptionData.filter(p => drugCategories.antibiotics.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--chart-2))"
  },
  { 
    name: "Diabetes", 
    count: prescriptionData.filter(p => drugCategories.diabetes.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--chart-3))"
  },
  { 
    name: "Respiratory", 
    count: prescriptionData.filter(p => drugCategories.respiratory.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--chart-4))"
  },
  { 
    name: "Thyroid", 
    count: prescriptionData.filter(p => drugCategories.thyroid.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--chart-5))"
  },
  { 
    name: "Supplements", 
    count: prescriptionData.filter(p => drugCategories.supplements.includes(p.drug_name))
      .reduce((sum, p) => sum + p.prescription_count, 0),
    color: "hsl(var(--primary))"
  },
];

// Statistics
export const prescriptionStatistics = {
  totalDrugs: prescriptionData.length,
  totalPrescriptions,
  avgPrescriptions: totalPrescriptions / prescriptionData.length,
  maxPrescriptions: Math.max(...prescriptionData.map(p => p.prescription_count)),
  minPrescriptions: Math.min(...prescriptionData.map(p => p.prescription_count)),
  topDrug: sortedByCount[0].drug_name,
  leastDrug: sortedByCount[sortedByCount.length - 1].drug_name,
};

// Chart data
export const prescriptionBarData = sortedByCount.map((p, index) => ({
  name: p.drug_name.charAt(0).toUpperCase() + p.drug_name.slice(1),
  count: p.prescription_count,
  fill: `hsl(var(--chart-${(index % 5) + 1}))`,
}));

// Pie data
export const prescriptionPieData = prescriptionData.map(p => ({
  name: p.drug_name.charAt(0).toUpperCase() + p.drug_name.slice(1),
  value: p.prescription_count,
  percentage: ((p.prescription_count / totalPrescriptions) * 100).toFixed(1),
}));
