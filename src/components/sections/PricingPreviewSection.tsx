import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const PricingPreviewSection = ({ onConsultationClick }: { onConsultationClick: () => void }) => {
  const packages = [
    {
      name: "Starter Package",
      popular: false,
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "1-3 AI use cases",
        "Basic integration",
        "3 months support",
        "Email support",
        "Implementation guide"
      ]
    },
    {
      name: "Growth Package",
      popular: true,
      description: "Most popular choice for growing businesses",
      features: [
        "5-10 AI use cases",
        "Advanced integrations",
        "6 months support",
        "Priority support",
        "Custom training",
        "ROI tracking"
      ]
    },
    {
      name: "Enterprise Package",
      popular: false,
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited use cases",
        "Custom development",
        "Ongoing partnership",
        "Dedicated support team",
        "White-label options",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Budget
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your business needs and scale as you grow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative ${pkg.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {pkg.description}
                  </p>
                  <div className="text-3xl font-bold text-primary mb-2">Custom Quote</div>
                  <p className="text-xs text-muted-foreground">Tailored to your specific needs</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:shadow-xl' 
                      : 'variant-outline hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  onClick={onConsultationClick}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All packages include comprehensive onboarding, training, and our proven 90-day implementation process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" onClick={onConsultationClick}>
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              // Scroll to services section to compare features
              const servicesSection = document.getElementById('services-section');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Compare All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;