import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, content, icon }, ref) => {
    return (
      <Card ref={ref} className="hover:shadow-lg transition-shadow h-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };