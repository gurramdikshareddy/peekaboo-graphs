// Healthcare BMI Data extracted from parquet file
// Data represents average BMI by gender and hospital location

export interface HealthcareRecord {
  gender: string;
  hospital_location: string;
  avg_bmi: number;
}

export const healthcareData: HealthcareRecord[] = [
  { gender: "female", hospital_location: "pune", avg_bmi: 29.28 },
  { gender: "female", hospital_location: "mumbai", avg_bmi: 29.33 },
  { gender: "female", hospital_location: "delhi", avg_bmi: 29.22 },
  { gender: "female", hospital_location: "ahmedabad", avg_bmi: 28.77 },
  { gender: "female", hospital_location: "kolkata", avg_bmi: 28.64 },
  { gender: "female", hospital_location: "bangalore", avg_bmi: 28.52 },
  { gender: "female", hospital_location: "chennai", avg_bmi: 29.37 },
  { gender: "female", hospital_location: "hyderabad", avg_bmi: 29.15 },
  { gender: "male", hospital_location: "pune", avg_bmi: 29.45 },
  { gender: "male", hospital_location: "mumbai", avg_bmi: 29.12 },
  { gender: "male", hospital_location: "delhi", avg_bmi: 28.89 },
  { gender: "male", hospital_location: "ahmedabad", avg_bmi: 29.08 },
  { gender: "male", hospital_location: "kolkata", avg_bmi: 28.95 },
  { gender: "male", hospital_location: "bangalore", avg_bmi: 28.67 },
  { gender: "male", hospital_location: "chennai", avg_bmi: 29.22 },
  { gender: "male", hospital_location: "hyderabad", avg_bmi: 29.31 },
  { gender: "other", hospital_location: "pune", avg_bmi: 28.85 },
  { gender: "other", hospital_location: "mumbai", avg_bmi: 29.02 },
  { gender: "other", hospital_location: "delhi", avg_bmi: 28.91 },
  { gender: "other", hospital_location: "ahmedabad", avg_bmi: 28.69 },
  { gender: "other", hospital_location: "kolkata", avg_bmi: 28.78 },
  { gender: "other", hospital_location: "bangalore", avg_bmi: 28.55 },
  { gender: "other", hospital_location: "chennai", avg_bmi: 29.11 },
  { gender: "other", hospital_location: "hyderabad", avg_bmi: 29.05 },
];

// Aggregated data by location
export const locationData = [
  { location: "Pune", female: 29.28, male: 29.45, other: 28.85, average: 29.19 },
  { location: "Mumbai", female: 29.33, male: 29.12, other: 29.02, average: 29.16 },
  { location: "Delhi", female: 29.22, male: 28.89, other: 28.91, average: 29.01 },
  { location: "Ahmedabad", female: 28.77, male: 29.08, other: 28.69, average: 28.85 },
  { location: "Kolkata", female: 28.64, male: 28.95, other: 28.78, average: 28.79 },
  { location: "Bangalore", female: 28.52, male: 28.67, other: 28.55, average: 28.58 },
  { location: "Chennai", female: 29.37, male: 29.22, other: 29.11, average: 29.23 },
  { location: "Hyderabad", female: 29.15, male: 29.31, other: 29.05, average: 29.17 },
];

// Aggregated data by gender
export const genderData = [
  { gender: "Female", avg_bmi: 29.04, count: 8, color: "#ec4899" },
  { gender: "Male", avg_bmi: 29.09, count: 8, color: "#3b82f6" },
  { gender: "Other", avg_bmi: 28.87, count: 8, color: "#10b981" },
];

// BMI distribution ranges for radar chart
export const bmiRanges = [
  { range: "Underweight (<18.5)", female: 0, male: 0, other: 0 },
  { range: "Normal (18.5-24.9)", female: 0, male: 0, other: 0 },
  { range: "Overweight (25-29.9)", female: 8, male: 8, other: 8 },
  { range: "Obese (≥30)", female: 0, male: 0, other: 0 },
];

// Statistics
export const statistics = {
  totalRecords: 24,
  avgBMI: 28.99,
  minBMI: 28.52,
  maxBMI: 29.45,
  locations: 8,
  genders: 3,
};
