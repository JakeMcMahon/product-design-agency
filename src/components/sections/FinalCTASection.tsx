import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Download, Clock, Users, TrendingUp } from "lucide-react";

const FinalCTASection = ({ onConsultationClick, onPDFDownload }: { onConsultationClick: () => void; onPDFDownload: () => void }) => {
  const urgencyPoints = [
    {
      icon: Clock,
      text: "Limited spots available this quarter"
    },
    {
      icon: Users,
      text: "Competitors gaining advantage daily"
    },
    {
      icon: TrendingUp,
      text: "Early adopter pricing expires soon"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm">
            ⚡ Join 200+ Successful Transformations
          </Badge>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Business with AI?
            </span>
          </h2>

          {/* Urgency Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {urgencyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </div>
              );
            })}
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 text-lg px-10 py-8 group"
              onClick={onConsultationClick}
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Book Your Free AI Audit
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-8 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 group bg-white/80 backdrop-blur-sm"
              onClick={onPDFDownload}
            >
              <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Download Transformation Guide
            </Button>
          </div>

          {/* Risk-Free Guarantee */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">
              🛡️ Risk-Free Transformation Guarantee
            </h3>
            <p className="text-muted-foreground">
              If you don't see measurable improvement in your operations within 90 days, 
              we'll work with you at no additional cost until you do. That's our commitment to your success.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">$100M+</div>
              <div className="text-sm text-muted-foreground">Savings Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Fortune 500</div>
              <div className="text-sm text-muted-foreground">Trusted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;