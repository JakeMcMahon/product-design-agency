import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scale, Heart, Factory, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Scale,
      title: "Legal Firms",
      services: [
        "Contract analysis and review",
        "Document discovery and classification",
        "Compliance monitoring"
      ],
      href: "/industries/legal"
    },
    {
      icon: Heart,
      title: "Healthcare",
      services: [
        "Medical document processing",
        "Patient data analysis",
        "Regulatory compliance"
      ],
      href: "/industries/healthcare"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      services: [
        "Quality control automation",
        "Predictive maintenance",
        "Supply chain optimization"
      ],
      href: "/industries/manufacturing"
    },
    {
      icon: DollarSign,
      title: "Finance & Banking",
      services: [
        "Fraud detection",
        "Risk assessment",
        "Document verification"
      ],
      href: "/industries/finance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI automation solutions tailored to your industry's unique challenges and requirements
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground text-left">{service}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={industry.href}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Industries CTA */}
        <div className="text-center mt-12">
          <Link to="/industries">
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300">
              View All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;