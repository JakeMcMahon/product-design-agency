import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingCardProps {
  title: string;
  price: string;
  type: "total" | "per month";
  highlight?: string;
  recommended?: boolean;
  features: string[];
  ctaText?: string;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ title, price, type, highlight, recommended, features, ctaText = "Schedule Diagnostic" }, ref) => {
    return (
      <Card 
        ref={ref} 
        className={`hover:shadow-lg transition-shadow ${recommended ? "border-2 border-blue-500 relative" : ""}`}
      >
        {recommended && (
          <Badge className="absolute top-4 right-4 bg-blue-500">Most Popular</Badge>
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="mt-2">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-gray-600">/{type}</span>
          </div>
          {highlight && (
            <CardDescription>{highlight}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full" variant={recommended ? "default" : "outline"}>
            {ctaText}
          </Button>
        </CardContent>
      </Card>
    );
  }
);
PricingCard.displayName = "PricingCard";

export { PricingCard };