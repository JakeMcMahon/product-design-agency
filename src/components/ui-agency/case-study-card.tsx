import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
}

const CaseStudyCard = React.forwardRef<HTMLDivElement, CaseStudyCardProps>(
  ({ title, challenge, solution, result, image }, ref) => {
    return (
      <Card ref={ref} className="hover:shadow-lg transition-shadow">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
            <p className="text-gray-700">{challenge}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
            <p className="text-gray-700">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Result</h4>
            <p className="text-gray-700">{result}</p>
          </div>
        </CardContent>
      </Card>
    );
  }
);
CaseStudyCard.displayName = "CaseStudyCard";

export { CaseStudyCard };