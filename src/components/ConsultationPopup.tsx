import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Clock, CheckCircle, X, AlertCircle, Loader2 } from "lucide-react";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const ConsultationPopup = ({ 
  isOpen, 
  onClose, 
  title = "Schedule Your Free AI Strategy Consultation",
  description = "Get expert guidance on your AI transformation journey. Our team will analyze your needs and provide actionable recommendations."
}: ConsultationPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
    message: "",
    contactPreference: "",
    budget: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/backend/api';

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

  const challenges = [
    "Document Processing Automation",
    "Contract Analysis & Review", 
    "Quality Control & Inspection",
    "Customer Support Automation",
    "Content Moderation",
    "Predictive Maintenance",
    "Fraud Detection",
    "Process Optimization",
    "Data Analysis & Insights",
    "Custom AI Solution",
    "Not Sure - Need Consultation"
  ];

  const budgetRanges = [
    "Under $10K/month",
    "$10K - $25K/month",
    "$25K - $50K/month",
    "$50K - $100K/month", 
    "$100K+ /month",
    "Custom Enterprise Solution"
  ];

  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.company.trim()) errors.push("Company is required");
    if (!formData.industry) errors.push("Industry is required");
    if (!formData.challenge) errors.push("Challenge is required");
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/consultation-booking.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success) {
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            industry: "",
            challenge: "",
            message: "",
            contactPreference: "",
            budget: ""
          });
          setError("");
          setValidationErrors([]);
          onClose();
        }, 4000);
      } else {
        if (data.details && Array.isArray(data.details)) {
          setValidationErrors(data.details);
        } else {
          setError(data.error || "An error occurred while submitting your consultation request");
        }
      }
    } catch (err) {
      console.error('Consultation booking error:', err);
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Unable to connect to server. Please check your internet connection and try again.");
      } else {
        setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError("");
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calendar className="h-6 w-6 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {description}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-4">
              Your consultation request has been submitted successfully.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-green-800 mb-2">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">What happens next?</span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• We'll review your information within 2 hours</li>
                <li>• A senior AI strategist will contact you within 24 hours</li>
                <li>• We'll schedule your 30-minute consultation at your convenience</li>
              </ul>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {validationErrors.length > 0 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <ul className="list-disc list-inside">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="popup-name">Full Name *</Label>
                <Input 
                  id="popup-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="popup-email">Email Address *</Label>
                <Input 
                  id="popup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="popup-company">Company Name *</Label>
                <Input 
                  id="popup-company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="popup-phone">Phone Number</Label>
                <Input 
                  id="popup-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="popup-industry">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
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
                <Label htmlFor="popup-budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget} value={budget.toLowerCase().replace(/[\s$+/-]/g, '')}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="popup-challenge">Biggest Challenge *</Label>
              <Select value={formData.challenge} onValueChange={(value) => handleInputChange("challenge", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="What's your biggest challenge?" />
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

            <div>
              <Label htmlFor="popup-message">Project Details</Label>
              <Textarea 
                id="popup-message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us more about your project, current challenges, and what you're hoping to achieve with AI automation..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="popup-contact-preference">Preferred Contact Method</Label>
              <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange("contactPreference", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How would you like us to follow up?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="video">Video Call</SelectItem>
                  <SelectItem value="any">Any Method</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  "Schedule Free Consultation"
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopup;