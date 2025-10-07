import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Phone, Mail, MapPin, Clock, Download, AlertCircle, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";
import { usePDFDownload } from "@/hooks/usePDFDownload";
import { useContactForm } from "@/hooks/useContactForm";
import { getOfficeEmails } from "@/lib/domain";

const Contact = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = usePDFDownload();
  
  const {
    formData,
    isSubmitting,
    isSubmitted: isContactSubmitted,
    error,
    validationErrors,
    handleInputChange,
    submitForm,
    resetForm
  } = useContactForm();

  // Get dynamic office emails based on current domain
  const officeEmails = getOfficeEmails();
  
  const officeLocations = [
    {
      city: "Moscow",
      country: "Russia",
      address: "Business District, Moscow",
      phone: "+7 (xxx) xxx-xx-xx",
      email: officeEmails.moscow,
      timezone: "MSK (UTC+3)",
      hours: "9:00 AM - 7:00 PM",
      specialties: ["Strategic Consulting", "Enterprise Implementation", "Client Success"]
    },
    {
      city: "Nizhny Novgorod",
      country: "Russia", 
      address: "Technology Park, Nizhny Novgorod",
      phone: "+7 (xxx) xxx-xx-xx",
      email: officeEmails.nizhnyNovgorod,
      timezone: "MSK (UTC+3)",
      hours: "9:00 AM - 6:00 PM",
      specialties: ["AI Research", "Model Development", "Technical Innovation"]
    }
  ];

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

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most projects begin within 1-2 weeks of contract signing. Implementation timelines range from 4-12 weeks depending on complexity."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We have solutions for businesses of all sizes, from startups to Fortune 500 companies. Our Starter packages begin at $2,500/month."
    },
    {
      question: "What if the AI solution doesn't work for us?",
      answer: "We offer a 90-day satisfaction guarantee. If our solution doesn't deliver the promised results, we'll work to fix it or provide a full refund."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain SOC 2 Type II certification, ISO 27001 compliance, and GDPR compliance. All data is encrypted and processed according to the highest security standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onConsultationClick={openConsultationPopup} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Transform Your Business with AI?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get expert guidance on your AI transformation journey. Our team is ready to help you identify opportunities, plan implementation, and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your challenges and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="p-8">
            {isContactSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button onClick={resetForm} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  await submitForm();
                }}
              >
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      placeholder="Your company" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry, index) => (
                          <SelectItem key={index} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((budget, index) => (
                          <SelectItem key={index} value={budget.toLowerCase().replace(/[\s$+/-]/g, '')}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="challenge">Biggest Challenge *</Label>
                  <Select value={formData.challenge} onValueChange={(value) => handleInputChange('challenge', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What's your biggest challenge?" />
                    </SelectTrigger>
                    <SelectContent>
                      {challenges.map((challenge, index) => (
                        <SelectItem key={index} value={challenge.toLowerCase().replace(/\s+/g, '-')}>
                          {challenge}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your project, current challenges, and what you're hoping to achieve with AI automation..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact-preference">Preferred Contact Method</Label>
                  <Select value={formData.contact_preference} onValueChange={(value) => handleInputChange('contact_preference', value)}>
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message & Get Response Within 24 Hours"
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Global Offices</h2>
            <p className="text-xl text-muted-foreground">
              Strategic locations combining research excellence with business expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    {office.city}, {office.country}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.hours} ({office.timezone})</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Promo Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn Before You Leap?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get our comprehensive AI Implementation Guide - everything you need to plan your automation strategy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Inside this guide:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Detailed ROI calculator for your industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">15+ automation opportunity templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Implementation timeline and budget planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Vendor selection criteria and checklist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Risk assessment and mitigation strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 mb-6">
                  <Download className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Free AI Implementation Guide</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    50+ pages of actionable strategies and frameworks
                  </p>
                  <Badge className="bg-green-500 text-white mb-4">Usually $299 - Free Today</Badge>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 mb-4"
                  onClick={openPDFDownload}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  No spam. Just actionable AI automation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ConsultationPopup 
        isOpen={isOpen} 
        onClose={closeConsultationPopup}
        title={popupConfig.title}
        description={popupConfig.description}
      />
      <PDFDownloadPopup
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        isSubmitted={isPDFSubmitted}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
      />
    </div>
  );
};

export default Contact;