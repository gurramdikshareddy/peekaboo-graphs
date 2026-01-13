import { Activity, MapPin, Users, TrendingUp, Heart, Scale, DollarSign, Stethoscope, ArrowUpDown, BarChart3, ClipboardList, Pill } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/charts/StatCard";
import { BMIBarChart } from "@/components/charts/BMIBarChart";
import { GenderPieChart } from "@/components/charts/GenderPieChart";
import { LocationLineChart } from "@/components/charts/LocationLineChart";
import { RadarComparisonChart } from "@/components/charts/RadarComparisonChart";
import { AreaTrendChart } from "@/components/charts/AreaTrendChart";
import { HorizontalBarChart } from "@/components/charts/HorizontalBarChart";
import { ScatterPlotChart } from "@/components/charts/ScatterPlotChart";
import { DataTable } from "@/components/charts/DataTable";
import { statistics } from "@/data/healthcareData";

// Diagnosis Cost Components
import { DiagnosisCostBarChart } from "@/components/charts/DiagnosisCostBarChart";
import { CostCategoryPieChart } from "@/components/charts/CostCategoryPieChart";
import { CostDeviationChart } from "@/components/charts/CostDeviationChart";
import { CostTrendLineChart } from "@/components/charts/CostTrendLineChart";
import { DiagnosisCostTable } from "@/components/charts/DiagnosisCostTable";
import { CostAreaChart } from "@/components/charts/CostAreaChart";
import { diagnosisStatistics } from "@/data/diagnosisCostData";

// Visit Type Components
import { VisitTypePieChart } from "@/components/charts/VisitTypePieChart";
import { VisitTypeBarChart } from "@/components/charts/VisitTypeBarChart";
import { VisitComparisonChart } from "@/components/charts/VisitComparisonChart";
import { VisitRadialChart } from "@/components/charts/VisitRadialChart";
import { VisitSummaryCards } from "@/components/charts/VisitSummaryCards";

// Prescription Components
import { PrescriptionBarChart } from "@/components/charts/PrescriptionBarChart";
import { PrescriptionPieChart } from "@/components/charts/PrescriptionPieChart";
import { DrugCategoryChart } from "@/components/charts/DrugCategoryChart";
import { PrescriptionRadarChart } from "@/components/charts/PrescriptionRadarChart";
import { PrescriptionTable } from "@/components/charts/PrescriptionTable";
import { prescriptionStatistics } from "@/data/prescriptionData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="gradient-hero text-primary-foreground py-12 px-6 mb-8">
        <div className="container max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Activity className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">
                Healthcare Analytics
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Healthcare Data Visualization Dashboard
            </h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Comprehensive analysis of healthcare data including BMI metrics and diagnosis costs
              with interactive visualizations.
            </p>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-6 pb-16">
        <Tabs defaultValue="bmi" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 mb-8">
            <TabsTrigger value="bmi" className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              BMI
            </TabsTrigger>
            <TabsTrigger value="diagnosis" className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              Diagnosis
            </TabsTrigger>
            <TabsTrigger value="visits" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Visits
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="flex items-center gap-2">
              <Pill className="h-4 w-4" />
              Prescriptions
            </TabsTrigger>
          </TabsList>

          {/* BMI Tab Content */}
          <TabsContent value="bmi">
            {/* Statistics Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatCard
                title="Total Records"
                value={statistics.totalRecords}
                icon={<Users className="h-5 w-5" />}
                description="Data points analyzed"
                delay={0}
              />
              <StatCard
                title="Avg BMI"
                value={statistics.avgBMI.toFixed(2)}
                icon={<Scale className="h-5 w-5" />}
                description="Overall average"
                delay={50}
              />
              <StatCard
                title="Min BMI"
                value={statistics.minBMI.toFixed(2)}
                icon={<TrendingUp className="h-5 w-5" />}
                description="Lowest recorded"
                delay={100}
              />
              <StatCard
                title="Max BMI"
                value={statistics.maxBMI.toFixed(2)}
                icon={<Heart className="h-5 w-5" />}
                description="Highest recorded"
                delay={150}
              />
              <StatCard
                title="Locations"
                value={statistics.locations}
                icon={<MapPin className="h-5 w-5" />}
                description="Hospital cities"
                delay={200}
              />
              <StatCard
                title="Categories"
                value={statistics.genders}
                icon={<Users className="h-5 w-5" />}
                description="Gender groups"
                delay={250}
              />
            </section>

            {/* Main Charts Grid */}
            <section className="space-y-8">
              <BMIBarChart />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GenderPieChart />
                <LocationLineChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RadarComparisonChart />
                <AreaTrendChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HorizontalBarChart />
                <ScatterPlotChart />
              </div>
              <DataTable />
            </section>
          </TabsContent>

          {/* Diagnosis Costs Tab Content */}
          <TabsContent value="diagnosis">
            {/* Statistics Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatCard
                title="Total Diagnoses"
                value={diagnosisStatistics.totalRecords}
                icon={<Stethoscope className="h-5 w-5" />}
                description="Types analyzed"
                delay={0}
              />
              <StatCard
                title="Avg Cost"
                value={`$${diagnosisStatistics.avgCost.toFixed(0)}`}
                icon={<DollarSign className="h-5 w-5" />}
                description="Average treatment"
                delay={50}
              />
              <StatCard
                title="Min Cost"
                value={`$${diagnosisStatistics.minCost.toFixed(0)}`}
                icon={<TrendingUp className="h-5 w-5" />}
                description="Lowest average"
                delay={100}
              />
              <StatCard
                title="Max Cost"
                value={`$${diagnosisStatistics.maxCost.toFixed(0)}`}
                icon={<Heart className="h-5 w-5" />}
                description="Highest average"
                delay={150}
              />
              <StatCard
                title="Cost Range"
                value={`$${diagnosisStatistics.costRange.toFixed(0)}`}
                icon={<ArrowUpDown className="h-5 w-5" />}
                description="Variation spread"
                delay={200}
              />
              <StatCard
                title="Categories"
                value="3"
                icon={<BarChart3 className="h-5 w-5" />}
                description="Cost levels"
                delay={250}
              />
            </section>

            {/* Diagnosis Charts Grid */}
            <section className="space-y-8">
              <DiagnosisCostBarChart />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CostCategoryPieChart />
                <CostDeviationChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CostTrendLineChart />
                <CostAreaChart />
              </div>
              <DiagnosisCostTable />
            </section>
          </TabsContent>

          {/* Visit Types Tab Content */}
          <TabsContent value="visits">
            <VisitSummaryCards />
            
            <section className="space-y-8 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <VisitTypePieChart />
                <VisitTypeBarChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <VisitComparisonChart />
                <VisitRadialChart />
              </div>
            </section>
          </TabsContent>

          {/* Prescriptions Tab Content */}
          <TabsContent value="prescriptions">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <StatCard
                title="Total Drugs"
                value={prescriptionStatistics.totalDrugs}
                icon={<Pill className="h-5 w-5" />}
                description="Unique medications"
                delay={0}
              />
              <StatCard
                title="Prescriptions"
                value={prescriptionStatistics.totalPrescriptions}
                icon={<ClipboardList className="h-5 w-5" />}
                description="Total issued"
                delay={50}
              />
              <StatCard
                title="Average"
                value={prescriptionStatistics.avgPrescriptions.toFixed(0)}
                icon={<BarChart3 className="h-5 w-5" />}
                description="Per drug type"
                delay={100}
              />
              <StatCard
                title="Maximum"
                value={prescriptionStatistics.maxPrescriptions}
                icon={<TrendingUp className="h-5 w-5" />}
                description="Highest count"
                delay={150}
              />
              <StatCard
                title="Minimum"
                value={prescriptionStatistics.minPrescriptions}
                icon={<ArrowUpDown className="h-5 w-5" />}
                description="Lowest count"
                delay={200}
              />
              <StatCard
                title="Top Drug"
                value="Enalapril"
                icon={<Heart className="h-5 w-5" />}
                description="Most prescribed"
                delay={250}
              />
            </section>

            <section className="space-y-8">
              <PrescriptionBarChart />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PrescriptionPieChart />
                <DrugCategoryChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PrescriptionRadarChart />
                <div className="flex items-center justify-center">
                  <div className="text-center p-8">
                    <Pill className="h-16 w-16 mx-auto text-primary/30 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Prescription Analytics</h3>
                    <p className="text-muted-foreground">
                      Cardiovascular drugs (Enalapril, Atorvastatin) lead prescriptions
                    </p>
                  </div>
                </div>
              </div>
              <PrescriptionTable />
            </section>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p>Data extracted from parquet files • Healthcare Analytics Dashboard</p>
            <p className="mt-1">Built with React, Recharts & Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
