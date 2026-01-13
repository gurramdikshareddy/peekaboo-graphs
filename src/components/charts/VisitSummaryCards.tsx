import { Card, CardContent } from "@/components/ui/card";
import { visitStatistics } from "@/data/visitData";
import { Building2, Users, TrendingUp, Percent } from "lucide-react";

export function VisitSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="shadow-elegant">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Visits</p>
              <p className="text-2xl font-bold">{visitStatistics.totalVisits}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-elegant">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-chart-1/10">
              <Building2 className="h-6 w-6 text-chart-1" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Inpatient</p>
              <p className="text-2xl font-bold">{visitStatistics.inpatientCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-elegant">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-chart-2/10">
              <TrendingUp className="h-6 w-6 text-chart-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Outpatient</p>
              <p className="text-2xl font-bold">{visitStatistics.outpatientCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-elegant">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <Percent className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">OP:IP Ratio</p>
              <p className="text-2xl font-bold">{visitStatistics.ratio.toFixed(1)}:1</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
