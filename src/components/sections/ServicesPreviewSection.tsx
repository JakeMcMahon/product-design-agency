import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Eye, Brain, Video } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPreviewSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "OCR and data extraction, contract analysis, compliance monitoring",
      href: "/services/document-intelligence"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Quality control, security monitoring, defect detection",
      href: "/services/computer-vision"
    },
    {
      icon: Brain,
      title: "NLP & LLM Integration",
      description: "Customer support automation, content analysis, language translation",
      href: "/services/nlp-llm"
    },
    {
      icon: Video,
      title: "Video Analytics",
      description: "Content analysis, security monitoring, training optimization",
      href: "/services/video-analytics"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete AI Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI automation services designed to transform your specific business processes
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link to={service.href}>
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

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;