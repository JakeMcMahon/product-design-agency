import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hammer, Brain, Rocket, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  const pillars = [
    {
      icon: Hammer,
      title: "Foundation",
      timeframe: "Weeks 1-2",
      description: "Map your specific requirements and complexity levels",
      details: [
        "Choose optimal AI architecture: simple prompt chains for straightforward tasks",
        "Intelligent routing for multi-path workflows, or orchestrator systems for complex operations",
        "Design the simplest solution that reliably delivers results"
      ],
      result: "Right-fit AI strategy that eliminates unnecessary complexity"
    },
    {
      icon: Brain,
      title: "Intelligence",
      timeframe: "Weeks 3-6",
      description: "Deploy tailored solutions: from basic prompt engineering to multi-agent systems",
      details: [
        "Implement smart routing that directs tasks to appropriate AI components",
        "Build orchestrator layers only where complexity demands it",
        "Deploy proven patterns before experimental approaches"
      ],
      result: "Reliable AI working exactly as intended"
    },
    {
      icon: Rocket,
      title: "Optimization",
      timeframe: "Weeks 7-8",
      description: "Fine-tune each component for maximum reliability",
      details: [
        "Scale proven solutions before adding complexity",
        "Strengthen successful automations with redundancy",
        "Optimize performance and error handling"
      ],
      result: "Go from strength to strength in your automation journey"
    },
    {
      icon: TrendingUp,
      title: "Evolution",
      timeframe: "Month 3+",
      description: "Expand successful patterns to new use cases",
      details: [
        "Add sophisticated agents only where simple solutions fall short",
        "Build on proven foundations, not experimental complexity",
        "Continuous improvement and scaling"
      ],
      result: "Robust, scalable AI ecosystem that just works"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm">
            🚀 Our Proven Methodology
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Manual Chaos to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Excellence
            </span>
            <br />
            in 90 Days
          </h2>
        </div>

        {/* The Four Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {pillar.timeframe}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pillar.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <p className="text-sm font-medium text-primary">
                      <span className="font-bold">Result:</span> {pillar.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;