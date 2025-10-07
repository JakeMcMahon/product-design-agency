import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, Download, TrendingUp, Clock, Users, DollarSign, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";
import { usePDFDownload } from "@/hooks/usePDFDownload";

const AISavingsCalculator = () => {
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
  
  // Form state
  const [formData, setFormData] = useState({
    industry: "",
    companySize: "",
    avgSalary: [75000],
    hoursPerWeek: [20],
    processComplexity: "",
    currentErrorRate: [5],
    automationLevel: [70]
  });

  // Results state
  const [results, setResults] = useState({
    weeklyTimeSaved: 0,
    annualTimeSaved: 0,
    costSavings: 0,
    errorReduction: 0,
    fteEquivalent: 0
  });

  // Industry multipliers for different automation potential
  const industryMultipliers = {
    "legal-services": 1.3,
    "healthcare": 1.1,
    "manufacturing": 1.4,
    "financial-services": 1.2,
    "real-estate": 1.0,
    "ecommerce": 1.1,
    "logistics": 1.3,
    "technology": 0.9,
    "education": 1.0,
    "government": 1.2,
    "other": 1.0
  };

  // Company size employee counts
  const companySizeEmployees = {
    "startup": 25,
    "small": 100,
    "medium": 500,
    "large": 2000,
    "enterprise": 10000
  };

  // Automation complexity cost multipliers
  const complexityMultipliers = {
    "simple": 0.7,
    "medium": 1.0,
    "complex": 1.5
  };

  // Calculate results when form data changes
  useEffect(() => {
    calculateSavings();
  }, [formData]);

  const calculateSavings = () => {
    if (!formData.industry || !formData.companySize || !formData.processComplexity) {
      return;
    }

    const industryMultiplier = industryMultipliers[formData.industry] || 1.0;
    const employeeCount = companySizeEmployees[formData.companySize] || 100;
    
    const avgSalary = formData.avgSalary[0];
    const hoursPerWeek = formData.hoursPerWeek[0];
    const automationLevel = formData.automationLevel[0] / 100;
    const currentErrorRate = formData.currentErrorRate[0] / 100;

    // Calculate time savings per employee
    const weeklyTimeSavedPerEmployee = hoursPerWeek * automationLevel * industryMultiplier;
    const annualTimeSavedPerEmployee = weeklyTimeSavedPerEmployee * 52;

    // Calculate total time saved across affected employees (assume 10% of employees affected)
    const affectedEmployees = Math.max(1, Math.round(employeeCount * 0.1));
    const totalWeeklyTimeSaved = weeklyTimeSavedPerEmployee * affectedEmployees;
    const totalAnnualTimeSaved = annualTimeSavedPerEmployee * affectedEmployees;

    // Calculate cost savings based on hourly rate
    const hourlyRate = avgSalary / (52 * 40); // 2080 hours per year
    const annualCostSavings = totalAnnualTimeSaved * hourlyRate;

    // FTE equivalent (total hours saved divided by full-time hours)
    const fteEquivalent = totalAnnualTimeSaved / (52 * 40);

    // Error reduction in percentage points (if current is 5%, reducing by 90% means new rate is 0.5%, so reduction is 4.5 percentage points)
    const errorReductionPoints = currentErrorRate * 90; // This gives percentage points reduced

    setResults({
      weeklyTimeSaved: Math.round(totalWeeklyTimeSaved),
      annualTimeSaved: Math.round(totalAnnualTimeSaved),
      costSavings: Math.round(annualCostSavings),
      errorReduction: Math.round(errorReductionPoints * 100) / 100, // Error reduction in percentage points
      fteEquivalent: Math.round(fteEquivalent * 100) / 100
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const industries = [
    { value: "legal-services", label: "Legal Services" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "financial-services", label: "Financial Services" },
    { value: "real-estate", label: "Real Estate" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "logistics", label: "Logistics" },
    { value: "technology", label: "Technology" },
    { value: "education", label: "Education" },
    { value: "government", label: "Government" },
    { value: "other", label: "Other" }
  ];

  const companySizes = [
    { value: "startup", label: "Startup (1-50 employees)" },
    { value: "small", label: "Small (51-200 employees)" },
    { value: "medium", label: "Medium (201-1000 employees)" },
    { value: "large", label: "Large (1001-5000 employees)" },
    { value: "enterprise", label: "Enterprise (5000+ employees)" }
  ];

  const complexityLevels = [
    { value: "simple", label: "Simple - Basic workflow automation" },
    { value: "medium", label: "Medium - Multi-system integration" },
    { value: "complex", label: "Complex - Advanced AI and ML integration" }
  ];

  const benefitHighlights = [
    {
      title: "Weekly Hours Saved",
      description: "Total hours saved per week across your team",
      icon: Clock,
      value: `${results.weeklyTimeSaved} hours`,
      color: "text-blue-600"
    },
    {
      title: "Annual Cost Savings",
      description: "Dollar value of time saved annually",
      icon: DollarSign,
      value: `$${results.costSavings.toLocaleString()}`,
      color: "text-green-600"
    },
    {
      title: "FTE Equivalent",
      description: "Full-time employees worth of hours saved",
      icon: Users,
      value: `${results.fteEquivalent} FTEs`,
      color: "text-orange-600"
    },
    {
      title: "Annual Hours Saved",
      description: "Total hours saved per year",
      icon: TrendingUp,
      value: `${results.annualTimeSaved.toLocaleString()} hours`,
      color: "text-purple-600"
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
              AI Savings Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how many hours and dollars your business can save with AI automation. Get personalized projections based on your industry, company size, and current processes.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-green-500">Free Analysis</Badge>
              <Badge variant="outline">Instant Results</Badge>
              <Badge variant="outline">Industry-Specific</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Calculator className="h-6 w-6 text-primary" />
                    Calculate Your AI Savings
                  </CardTitle>
                  <CardDescription>
                    Provide some basic information about your business to get customized savings estimates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="company-size">Company Size</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your company size" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="avg-salary">Average Employee Salary: ${formData.avgSalary[0].toLocaleString()}/year</Label>
                    <Slider
                      value={formData.avgSalary}
                      onValueChange={(value) => handleInputChange("avgSalary", value)}
                      max={200000}
                      min={35000}
                      step={5000}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>$35K</span>
                      <span>$200K</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hours-per-week">Hours per week spent on manual processes: {formData.hoursPerWeek[0]} hours</Label>
                    <Slider
                      value={formData.hoursPerWeek}
                      onValueChange={(value) => handleInputChange("hoursPerWeek", value)}
                      max={40}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1 hour</span>
                      <span>40 hours</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="process-complexity">Process Complexity</Label>
                    <Select value={formData.processComplexity} onValueChange={(value) => handleInputChange("processComplexity", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select complexity level" />
                      </SelectTrigger>
                      <SelectContent>
                        {complexityLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="automation-level">Expected Automation Level: {formData.automationLevel[0]}%</Label>
                    <Slider
                      value={formData.automationLevel}
                      onValueChange={(value) => handleInputChange("automationLevel", value)}
                      max={95}
                      min={20}
                      step={5}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>20%</span>
                      <span>95%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="error-rate">Current Error Rate: {formData.currentErrorRate[0]}%</Label>
                    <Slider
                      value={formData.currentErrorRate}
                      onValueChange={(value) => handleInputChange("currentErrorRate", value)}
                      max={30}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Your AI Automation Savings</CardTitle>
                  <CardDescription>
                    Based on your inputs, here's what you could save with AI automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formData.industry && formData.companySize && formData.processComplexity ? (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {benefitHighlights.map((benefit, index) => (
                          <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <benefit.icon className={`h-8 w-8 mx-auto mb-2 ${benefit.color}`} />
                            <div className="text-2xl font-bold">{benefit.value}</div>
                            <div className="text-sm text-muted-foreground">{benefit.title}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Hourly Rate (based on salary)</span>
                          <span className="font-semibold">${Math.round(formData.avgSalary[0] / (52 * 40))}/hour</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Employees Affected</span>
                          <span className="font-semibold">{Math.max(1, Math.round(companySizeEmployees[formData.companySize] * 0.1))} people</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Error Rate Reduction</span>
                          <span className="font-semibold text-green-600">{results.errorReduction} percentage points</span>
                        </div>
                      </div>

                      <div className="text-center space-y-4">
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-primary to-accent"
                          onClick={() => openConsultationPopup({
                            title: "Get Your Detailed AI Strategy",
                            description: "Let's discuss how these savings can become reality for your business. Our experts will create a customized implementation plan."
                          })}
                        >
                          Get My Custom AI Strategy
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={openPDFDownload}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Detailed Report
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Fill in the form to see your personalized savings calculation
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Promotion Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want the Complete AI Implementation Roadmap?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get our comprehensive guide with everything you need to successfully implement AI automation in your business.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Inside this guide:</h3>
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
                  <h4 className="text-xl font-semibold mb-2">Free Implementation Guide</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    50+ pages of actionable strategies and frameworks
                  </p>
                  <Badge className="bg-green-500 text-white">Usually $299 - Free Today</Badge>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                  onClick={openPDFDownload}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
                
                <p className="text-sm text-muted-foreground mt-3">
                  No spam. Just actionable AI automation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Value Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Beyond Cost Savings: Additional Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-lg font-semibold mb-2">Improved Employee Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Eliminate repetitive tasks and let your team focus on meaningful, strategic work
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold mb-2">Scalable Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Handle increased workload without proportional increases in staffing costs
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg font-semibold mb-2">24/7 Operations</h3>
                <p className="text-muted-foreground text-sm">
                  Automated processes work around the clock, increasing overall productivity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make These Savings Reality?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation to discuss your specific automation opportunities and create an implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              onClick={openConsultationPopup}
            >
              Schedule Free Strategy Session
            </Button>
            <Button size="lg" variant="outline" onClick={openPDFDownload}>
              Download Implementation Guide
            </Button>
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

export default AISavingsCalculator;