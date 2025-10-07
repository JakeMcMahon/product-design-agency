import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Shield, TrendingUp } from "lucide-react";

const WhyItWorksSection = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Right-Fit Architecture Approach",
      description: "We don't force complex agent systems where simple prompt chains work better. Our methodology:",
      points: [
        "Simple Tasks: Direct prompt engineering and basic chaining",
        "Multi-Path Workflows: Intelligent routing between specialized components",
        "Complex Operations: Orchestrator systems that coordinate multiple AI tools",
        "Advanced Scenarios: Multi-agent architectures only where truly necessary"
      ]
    },
    {
      icon: Shield,
      title: "Reliability Over Complexity",
      description: "While others chase the latest AI trends, we focus on solutions that work consistently:",
      points: [
        "Start with the simplest solution that meets your requirements",
        "Add complexity only when it demonstrably improves outcomes",
        "Build redundancy and error handling into every system",
        "Map requirements first, choose technology second"
      ]
    },
    {
      icon: TrendingUp,
      title: "Proven Success Methodology",
      description: "Our \"strength to strength\" approach ensures continuous improvement:",
      points: [
        "Validate simple automations before scaling",
        "Build on proven foundations rather than experimental features",
        "Expand successful patterns to new use cases",
        "Strengthen working systems before adding new capabilities"
      ]
    }
  ];

  const results = [
    { metric: "99%+", label: "reliability in production systems" },
    { metric: "75%", label: "faster implementation than agent-first approaches" },
    { metric: "300%", label: "return on investment" },
    { metric: "95%", label: "client satisfaction with system stability" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2">
            🎯 What Makes Us Different
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Our AI Solutions{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Actually Work
            </span>
            <br />
            <span className="text-muted-foreground text-2xl">(While Others Fail)</span>
          </h2>
        </div>

        {/* Three Key Differentiators */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {differentiators.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {diff.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 text-lg">
                        {diff.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {diff.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Average Results */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8">Average Results:</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;