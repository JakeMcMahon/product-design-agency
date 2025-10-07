import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, MessageSquare, Video, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProblemSection = () => {
  const navigate = useNavigate();
  const problems = [
    {
      icon: FileText,
      title: "The Document Disaster",
      description: "Your team manually processes thousands of documents monthly. Legal contracts take days to review. Financial statements require hours of data entry. Meanwhile, competitors process everything instantly with AI."
    },
    {
      icon: Search,
      title: "The Quality Control Crisis",
      description: "Manual inspections miss 15% of defects. Your team can't keep up with production volume. Customer complaints pile up while you struggle to maintain standards."
    },
    {
      icon: MessageSquare,
      title: "The Customer Service Nightmare",
      description: "Support tickets pile up for hours. Simple questions require human intervention. Customers abandon purchases while waiting. Your best agents burn out on repetitive tasks."
    },
    {
      icon: Video,
      title: "The Content Chaos",
      description: "Hours of video content sit unanalyzed. Security footage requires manual review. Training materials need constant updates. You're missing critical insights hidden in your media."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Is Your Business Stuck in the{" "}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Stone Age of Operations?
            </span>
          </h2>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            onClick={() => navigate('/ai-savings-calculator')}
          >
            <Calculator className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Calculate What Manual Work Costs You
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;