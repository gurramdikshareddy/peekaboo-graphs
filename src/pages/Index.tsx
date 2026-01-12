import { Activity, MapPin, Users, TrendingUp, Heart, Scale } from "lucide-react";
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
              BMI Data Visualization Dashboard
            </h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Comprehensive analysis of average BMI data across 8 hospital locations in India, 
              segmented by gender categories with interactive visualizations.
            </p>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-6 pb-16">
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
          {/* Row 1: Bar Chart (full width) */}
          <BMIBarChart />

          {/* Row 2: Pie Chart + Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GenderPieChart />
            <LocationLineChart />
          </div>

          {/* Row 3: Radar Chart + Area Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RadarComparisonChart />
            <AreaTrendChart />
          </div>

          {/* Row 4: Horizontal Bar + Scatter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HorizontalBarChart />
            <ScatterPlotChart />
          </div>

          {/* Row 5: Data Table (full width) */}
          <DataTable />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p>Data extracted from parquet file • Healthcare BMI Analytics Dashboard</p>
            <p className="mt-1">Built with React, Recharts & Tailwind CSS</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
