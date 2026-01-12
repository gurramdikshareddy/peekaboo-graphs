import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

export const StatCard = ({ title, value, icon, description, delay = 0 }: StatCardProps) => {
  return (
    <Card 
      className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up border-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
