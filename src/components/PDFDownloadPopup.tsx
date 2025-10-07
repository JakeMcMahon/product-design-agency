import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, CheckCircle, FileText, Gift, BookOpen, Target, TrendingDown, BarChart3, Map, AlertTriangle } from "lucide-react";

interface PDFDownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    company: string;
    industry: string;
  };
  isSubmitted: boolean;
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PDFDownloadPopup = ({ 
  isOpen, 
  onClose, 
  formData,
  isSubmitted,
  onFormChange,
  onSubmit
}: PDFDownloadPopupProps) => {
  const industries = [
    "Legal Services",
    "Healthcare", 
    "Manufacturing",
    "Financial Services",
    "Real Estate",
    "E-commerce",
    "Logistics",
    "Technology",
    "Education",
    "Government",
    "Other"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Gift className="h-6 w-6 text-primary" />
            Download Your Free AI Strategy Guide
          </DialogTitle>
          <DialogDescription className="text-lg">
            Get our comprehensive 47-page guide with ROI calculator and implementation checklist
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Download Started!</h3>
            <p className="text-muted-foreground mb-4">
              Your AI Strategy Guide is downloading now. Check your downloads folder.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-blue-800 mb-2">
                <FileText className="h-4 w-4" />
                <span className="font-semibold">What you'll get:</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 47-page comprehensive AI automation guide</li>
                <li>• Industry-specific ROI calculator templates</li>
                <li>• Step-by-step implementation checklist</li>
                <li>• Real case studies and success stories</li>
              </ul>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-[300px,1fr] gap-6">
              {/* Lead Magnet Cover Image */}
              <div className="flex justify-center md:justify-start">
                <div className="w-full max-w-72 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20 shadow-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                    <div className="text-xs font-bold text-primary mb-1">
                      5 LLM Automation
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">
                      Patterns That Work
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Add cover:
                      /public/images/lead-magnet-cover.png
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Benefits Section */}
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  What You'll Learn:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">The exact framework for choosing the right AI approach (no more guesswork)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Why 72% cost reduction is possible with simple routing patterns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real examples with actual metrics from production systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Map className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">The 4-phase implementation roadmap from foundation to advanced</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Why "agentic AI" fails 80% of the time and what to use instead</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pdf-name">Full Name *</Label>
                <Input 
                  id="pdf-name"
                  value={formData.name}
                  onChange={(e) => onFormChange("name", e.target.value)}
                  placeholder="Your full name"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="pdf-email">Email Address *</Label>
                <Input 
                  id="pdf-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => onFormChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="pdf-company">Company Name *</Label>
                <Input 
                  id="pdf-company"
                  value={formData.company}
                  onChange={(e) => onFormChange("company", e.target.value)}
                  placeholder="Your company"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="pdf-industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => onFormChange("industry", value)}>
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
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Free AI Strategy Guide
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="w-full"
              >
                Cancel
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Your information will only be used to send you relevant AI automation insights.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFDownloadPopup;