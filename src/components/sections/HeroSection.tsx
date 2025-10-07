import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ onConsultationClick }: { onConsultationClick: () => void }) => {
  const navigate = useNavigate();
  const trustIndicators = [
    { metric: "200+", label: "Projects Completed" },
    { metric: "$100M+", label: "in Operational Savings" },
    { metric: "95%", label: "Client Retention" },
    { metric: "Fortune 500", label: "Trusted" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-6 text-sm px-6 py-2 bg-white/80 backdrop-blur-sm">
            ✨ Trusted by Fortune 500 Companies
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Stop Drowning in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Manual Work
            </span>
            <br />
            Start Scaling with{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations from manual chaos to intelligent automation with AI solutions that delivered{" "}
            <span className="font-semibold text-primary">300% ROI</span> and{" "}
            <span className="font-semibold text-primary">75% time savings</span> for companies like yours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 group"
              onClick={onConsultationClick}
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 group"
              onClick={() => {
                // Scroll to testimonials section
                const testimonialsSection = document.getElementById('testimonials-section');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {indicator.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;