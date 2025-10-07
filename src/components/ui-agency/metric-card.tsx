import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  color?: string;
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ value, label, description, color = "blue" }, ref) => {
    const colorClasses = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };

    return (
      <Card ref={ref} className="text-center hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className={`text-4xl text-center ${colorClasses[color as keyof typeof colorClasses]}`}>
            {value}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-center font-semibold mb-2">{label}</h3>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    );
  }
);
MetricCard.displayName = "MetricCard";

export { MetricCard };