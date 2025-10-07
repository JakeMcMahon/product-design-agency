import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, FileText } from "lucide-react";

const LeadMagnetSection = ({ onPDFDownload }: { onPDFDownload: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    challenge: ""
  });

  const benefits = [
    "Precise methodology for choosing the right product approach (no more guesswork)",
    "Why you can reduce development costs by 72% with simple routing patterns",
    "Real examples with actual metrics from production systems",
    "4-phase implementation roadmap from basics to advanced level"
  ];

  const industries = [
    "Legal Firms",
    "Healthcare",
    "Manufacturing",
    "Finance & Banking",
    "Real Estate",
    "E-commerce",
    "Logistics",
    "Other"
  ];

  const challenges = [
    "Document Processing",
    "Quality Control",
    "Customer Support",
    "Data Analysis",
    "Compliance",
    "Workflow Automation",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - trigger PDF download
    console.log("Form submitted:", formData);
    onPDFDownload();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Lead Magnet Info */}
            <div>
              <Badge variant="secondary" className="mb-4 px-6 py-2">
                <Download className="mr-2 h-4 w-4" />
                Free Download
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get the product design guide that helped{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  50+ companies achieve 30% productivity growth
                </span>
              </h2>

              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">5 LLM automation patterns that actually work</h3>
                    <p className="text-muted-foreground">While others chase complex "agent AI" that fails 80% of the time, smart companies use these 5 proven patterns to build AI with real ROI</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-lg mb-4">What you'll learn:</h4>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  <span className="font-bold">Over 1000 companies trust us</span> to make informed product design decisions
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Industry</label>
                    <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Main challenge</label>
                    <Select value={formData.challenge} onValueChange={(value) => setFormData({ ...formData, challenge: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's your main challenge?" />
                      </SelectTrigger>
                      <SelectContent>
                        {challenges.map((challenge) => (
                          <SelectItem key={challenge} value={challenge.toLowerCase().replace(/\s+/g, '-')}>
                            {challenge}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download free guide
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By downloading, you agree to receive helpful product design tips by email. Unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;