import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Cog, Zap, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const phases = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      timeframe: "Week 1-2",
      items: [
        "Business process audit",
        "Data assessment",
        "Use case prioritization",
        "Technical architecture design"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cog,
      title: "Implementation",
      timeframe: "Week 3-6",
      items: [
        "AI model development",
        "System integration",
        "Testing and validation",
        "Team training"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Optimization",
      timeframe: "Week 7-8",
      items: [
        "Performance tuning",
        "Quality assurance",
        "User acceptance testing",
        "Go-live support"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      timeframe: "Month 3+",
      items: [
        "Performance monitoring",
        "Model updates",
        "Scaling to new use cases",
        "Strategic consulting"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2">
            ⚡ Proven Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Proven{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              90-Day Transformation
            </span>
            {" "}Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that has delivered consistent results for 200+ businesses
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20"></div>

          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} text-white shadow-lg`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                              {phase.title}
                            </h3>
                            <Badge variant="outline" className="mt-1">
                              {phase.timeframe}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2 flex-shrink-0`}></div>
                              <p className="text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg relative z-10 flex-shrink-0"></div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;