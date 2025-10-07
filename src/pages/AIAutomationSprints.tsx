import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, Play, Clock, Users, Trophy, Zap, Shield, TrendingUp, Sparkles, Calendar, DollarSign, Building2, ChevronRight, Star, AlertCircle, Gift, Timer, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useSprintPDFDownload } from "@/hooks/useSprintPDFDownload";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";

const AIAutomationSprints = () => {
  const [email, setEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("professional");
  const [roiInputs, setRoiInputs] = useState({
    hoursPerWeek: 40,
    hourlyRate: 50,
    repetitiveTasks: 60,
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationConfig, setConsultationConfig] = useState({
    title: "Book Your AI Automation Sprint",
    description: "Schedule a 30-minute strategy call to discuss your automation needs"
  });
  
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    isSubmitting: isPDFSubmitting,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = useSprintPDFDownload();
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const calculateROI = () => {
    const weeklyTimeSaved = roiInputs.hoursPerWeek * (roiInputs.repetitiveTasks / 100) * 0.75;
    const weeklySavings = weeklyTimeSaved * roiInputs.hourlyRate;
    const monthlySavings = weeklySavings * 4.33;
    const yearlySavings = monthlySavings * 12;
    return { weeklyTimeSaved, weeklySavings, monthlySavings, yearlySavings };
  };

  const roi = calculateROI();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openConsultationPopup = (tier?: string) => {
    let config = {
      title: "Book Your AI Automation Sprint",
      description: "Schedule a 30-minute strategy call to discuss your automation needs"
    };
    
    if (tier === 'starter') {
      config = {
        title: "Book Your Starter Sprint",
        description: "Let's discuss your simple prompt automation needs and quick wins"
      };
    } else if (tier === 'professional') {
      config = {
        title: "Book Your Professional Sprint",
        description: "Schedule a call to discuss your AI agent automation requirements"
      };
    } else if (tier === 'enterprise') {
      config = {
        title: "Book Your Enterprise Sprint",
        description: "Let's discuss your complete AI transformation needs"
      };
    }
    
    setConsultationConfig(config);
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="default" className="mb-6 px-6 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Sprint Slots Available - Only 3 Teams This Month
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Go From Manual Chaos to
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-Powered Operations
              </span>
              In Just 2-8 Weeks
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop losing $50K+/month on repetitive tasks. Our AI automation sprints deliver working solutions that save 20+ hours per week, guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => openConsultationPopup()}>
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('pricing')}>
                <Play className="mr-2 h-5 w-5" />
                View Sprint Packages
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { metric: "72hrs", label: "First Automation Live" },
                { metric: "300%", label: "Average ROI" },
                { metric: "20+hrs", label: "Saved Weekly" },
                { metric: "100%", label: "Success Rate" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section id="vsl" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See How We Transformed This $50M Company in Just 4 Weeks
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Watch this 8-minute case study showing exactly how we saved them $200K annually with AI automation
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-primary/20">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/90 transition-colors">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                    <p className="text-lg font-semibold">Click to Watch Case Study</p>
                    <p className="text-sm text-muted-foreground">8:42 minutes</p>
                  </div>
                </div>
                
                {/* When you have actual video, replace with: */}
                {/* <iframe 
                  src="your-video-url" 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allowFullScreen
                  title="AI Automation Case Study"
                /> */}
              </div>
              
              {/* Video Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">4 weeks</div>
                  <div className="text-sm text-muted-foreground">Implementation Time</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">$200K</div>
                  <div className="text-sm text-muted-foreground">Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Process Automation</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">3 weeks</div>
                  <div className="text-sm text-muted-foreground">ROI Achieved</div>
                </div>
              </div>
            </div>
            
            {/* CTA Under VSL */}
            <div className="text-center mt-8">
              <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-primary to-accent">
                Get Your Custom Automation Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Free 30-minute strategy session • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Every day you don't automate costs you money, time, and competitive advantage
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Drowning in Repetitive Tasks",
                  description: "Your team spends 60% of their time on mind-numbing copy-paste work instead of strategic initiatives",
                  cost: "$8,000/month in wasted salaries"
                },
                {
                  title: "Manual Data Processing Nightmares",
                  description: "Processing invoices, contracts, and documents takes days when it should take minutes",
                  cost: "72 hours/week lost to manual processing"
                },
                {
                  title: "Customer Response Delays",
                  description: "Support tickets pile up, customers wait days for responses that AI could handle instantly",
                  cost: "38% customer churn from slow response"
                },
                {
                  title: "Error-Prone Manual Workflows",
                  description: "Human errors in data entry and processing lead to costly mistakes and rework",
                  cost: "$50K+ annual cost of errors"
                }
              ].map((pain, i) => (
                <Card key={i} className="border-destructive/20 bg-destructive/5">
                  <CardHeader>
                    <AlertCircle className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>{pain.title}</CardTitle>
                    <CardDescription>{pain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-semibold text-destructive">
                      Hidden Cost: {pain.cost}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Alert className="border-primary bg-primary/10">
              <TrendingUp className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>The Real Cost:</strong> Companies like yours lose an average of <strong>$250,000/year</strong> on inefficient manual processes while competitors using AI automation gain 40% productivity advantages.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* CTA After Problem */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to End the Manual Work Nightmare?</h3>
            <p className="text-muted-foreground mb-6">See how we can automate your biggest pain points in just 2-8 weeks</p>
            <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-primary to-accent">
              Get Your Free Automation Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              A Better Way: Sprint-Based AI Implementation
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Not another consultant. Not another course. Real AI solutions, built for you, in weeks not months.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Week 1: Rapid Discovery</h3>
                <p className="text-muted-foreground">We analyze your workflows, identify automation opportunities, and prioritize highest-ROI solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Week 2-4: Build & Deploy</h3>
                <p className="text-muted-foreground">Our AI engineers build, test, and deploy your custom automations with your team's input</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Week 4+: Scale & Optimize</h3>
                <p className="text-muted-foreground">We ensure adoption, measure results, and continuously optimize for maximum impact</p>
              </div>
            </div>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Why Sprints Work Better Than Traditional Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Fixed timeline, fixed budget:</strong> No endless consulting hours or scope creep
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Working solutions in days:</strong> See your first automation live within 72 hours
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Your team learns by doing:</strong> Knowledge transfer built into every sprint
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Guaranteed results:</strong> If we don't deliver the promised ROI, you don't pay
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process and Why It Works */}
      <section id="our-process" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Process: AI and Product Experts Working in Perfect Harmony
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              We're not AI researchers experimenting with your budget. We're product builders who use AI as a tool to solve real business problems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Product-First Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Jobs-to-be-Done analysis:</strong> We identify what your users actually need to accomplish, not just what they say they want
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>User story mapping:</strong> We break down complex processes into clear, actionable user workflows
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Human-in-the-loop design:</strong> We design seamless onboarding and interaction flows for AI+human collaboration
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>End-user focus:</strong> Every automation is built with your team's daily reality in mind
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Performance-Driven Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Dual metrics tracking:</strong> We measure both business impact (time saved, costs reduced) and AI performance (accuracy, latency)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>SaaS-grade monitoring:</strong> Real-time dashboards showing adoption rates, error rates, and ROI metrics
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Continuous optimization:</strong> We iterate based on actual usage data, not assumptions
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Business-first KPIs:</strong> Success measured by your outcomes, not our technology demos
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Right-Fit AI Solutions, Not Buzzword Bingo</CardTitle>
                <CardDescription className="text-lg">
                  We choose the simplest technology that delivers the best results for your specific use case
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Prompt Chaining</h4>
                    <p className="text-sm text-muted-foreground">For simple, reliable text processing tasks</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Orchestration</h4>
                    <p className="text-sm text-muted-foreground">For complex multi-step workflows</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">AI Agents</h4>
                    <p className="text-sm text-muted-foreground">For decision-making and adaptive workflows</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">For visual processing and quality control</p>
                  </div>
                </div>
                
                {/* RAPID Framework Visual */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="font-semibold text-lg mb-6 text-center">Our RAPID Framework in Action</h4>
                  <div className="relative max-w-4xl mx-auto">
                    {/* Placeholder for RAPID workflow diagram */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="grid grid-cols-5 gap-4 mb-6">
                          {['R', 'A', 'P', 'I', 'D'].map((letter, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                                <span className="font-bold text-primary">{letter}</span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-primary/50" style={{opacity: i === 4 ? 0 : 1}} />
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">RAPID Framework Workflow Diagram</p>
                        <p className="text-xs text-muted-foreground mt-1">Replace with actual workflow diagram</p>
                      </div>
                    </div>
                    {/* When you have the actual diagram, replace with: */}
                    {/* <img 
                      src="/rapid-framework-diagram.png" 
                      alt="RAPID Framework Workflow Diagram" 
                      className="w-full aspect-[16/9] object-contain rounded-lg"
                    /> */}
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-lg">Our Technology Philosophy:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>BERT vs LLM:</strong> We use traditional NLP when it's faster, cheaper, and more reliable than large language models
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>ML + LLM hybrid:</strong> We combine ML classification with LLMs when neither alone is sufficient
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Workflow decomposition:</strong> We break complex problems into simple, testable components
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Reliability over novelty:</strong> We choose proven solutions over experimental technologies
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle className="text-destructive">What We DON'T Do</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive text-xl">❌</span>
                    <div>Use your project as a learning opportunity for unproven AI technologies</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive text-xl">❌</span>
                    <div>Deploy overly complex, computationally expensive agent systems when simple solutions work</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive text-xl">❌</span>
                    <div>Build AI for the sake of AI - every solution must deliver measurable business value</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive text-xl">❌</span>
                    <div>Ignore your workforce - we design for human+AI collaboration, not replacement</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-primary">What We DO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>Build automations that actually work in your daily operations</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>Choose the most reliable, cost-effective solution for each specific problem</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>Focus on end results that benefit your business and empower your workforce</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>Deliver proven ROI, not impressive technology demos</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Alert className="mt-8 border-primary bg-primary/10">
              <Sparkles className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Our Promise:</strong> Every automation we build has been proven in B2B and B2C applications. We bring product expertise and user-centered design to AI implementation, ensuring solutions that your team will actually adopt and love using.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA #1 */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/20 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Free AI Automation Readiness Assessment</h3>
                <p className="text-muted-foreground mb-4 font-medium">
                  Get our 15-page analysis that reveals exactly which of your processes can be automated for maximum ROI. Used by 500+ companies.
                </p>
                <Button onClick={openPDFDownload} size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Download Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA After Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-primary bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Want to See This Process in Action?</h3>
                <p className="text-muted-foreground mb-4">Book a 30-minute call and we'll show you exactly how our process would work for your business</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => openConsultationPopup()}>
                    Book Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => scrollToSection('pricing')}>
                    View Sprint Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Who AI Automation Sprints Are For (And Not For)
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              We work with specific types of businesses that are ready to transform their operations
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Perfect Fit */}
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Perfect Fit For Our Sprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Growing businesses (50+ employees)</strong> drowning in manual processes
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Leadership teams committed</strong> to digital transformation and willing to change workflows
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Companies losing $50K+/year</strong> on repetitive tasks and want immediate ROI
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Businesses ready to invest</strong> in proven solutions and willing to follow our process
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Teams with clear processes</strong> that can be documented and automated
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Decision-makers who can commit</strong> to 2-8 week sprint timelines
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Not A Good Fit */}
              <Card className="border-destructive">
                <CardHeader>
                  <CardTitle className="text-2xl text-destructive flex items-center gap-2">
                    <AlertCircle className="h-6 w-6" />
                    Not A Good Fit For Our Sprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Early-stage startups</strong> without established processes or sufficient budget for automation
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Companies looking for cheap solutions</strong> or expecting miracles without investment
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Businesses resistant to change</strong> or unwilling to adapt existing workflows
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Organizations with unclear processes</strong> that can't be easily documented or mapped
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Companies wanting custom software</strong> rather than automation solutions
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-0.5">❌</span>
                    <div>
                      <strong>Businesses expecting overnight results</strong> without proper planning or implementation time
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Work With */}
      <section id="industries" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Industries We Specialize In
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              We've delivered successful AI automation projects across these high-impact industries
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Legal Services",
                  description: "Contract analysis, document review, legal research automation, and compliance tracking",
                  icon: "⚖️",
                  results: "Streamline contract review processes"
                },
                {
                  title: "Healthcare",
                  description: "Patient intake automation, insurance verification, appointment scheduling, and records processing",
                  icon: "🏥",
                  results: "Cut down doctor's time on documentation"
                },
                {
                  title: "Financial Services",
                  description: "Fraud detection, risk assessment, regulatory reporting, and customer onboarding automation",
                  icon: "🏦",
                  results: "Reduce fraud detection false positives"
                },
                {
                  title: "Manufacturing",
                  description: "Quality control inspection, supply chain optimization, predictive maintenance, and inventory management",
                  icon: "🏭",
                  results: "Prevent costly production defects"
                },
                {
                  title: "Real Estate",
                  description: "Property evaluation, document processing, lead qualification, and market analysis automation",
                  icon: "🏢",
                  results: "Generate more qualified leads"
                },
                {
                  title: "E-commerce",
                  description: "Customer support automation, inventory management, pricing optimization, and order processing",
                  icon: "🛒",
                  results: "Provide instant customer support"
                },
                {
                  title: "Professional Services",
                  description: "Client onboarding, proposal generation, project management, and reporting automation",
                  icon: "💼",
                  results: "Eliminate administrative overhead"
                },
                {
                  title: "Technology",
                  description: "Code review automation, testing pipelines, customer success workflows, and data processing",
                  icon: "💻",
                  results: "Accelerate deployment cycles"
                },
                {
                  title: "Education",
                  description: "Student assessment, administrative tasks, curriculum management, and communication automation",
                  icon: "🎓",
                  results: "Free up time from grading tasks"
                }
              ].map((industry, i) => (
                <Card key={i} className="h-full">
                  <CardHeader>
                    <div className="text-4xl mb-2">{industry.icon}</div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {industry.results}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Most Requested Automation Use Cases
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Here's what we're automating for clients every week
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {/* Image placeholder for Document & Data Processing */}
                <div className="aspect-video bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📄</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Document Processing Image</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Document & Data Processing</h3>
                <div className="space-y-4">
                  {[
                    { task: "Invoice processing and approval workflows", time: "Save 20hrs/week" },
                    { task: "Contract analysis and extraction", time: "85% faster reviews" },
                    { task: "Customer onboarding document collection", time: "3x faster processing" },
                    { task: "Compliance reporting and documentation", time: "90% accuracy improvement" },
                    { task: "Data entry from forms and emails", time: "Zero manual entry" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Image placeholder for Customer & Communication */}
                <div className="aspect-video bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">💬</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Customer Communication Image</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Customer & Communication</h3>
                <div className="space-y-4">
                  {[
                    { task: "Customer support ticket routing and responses", time: "2min response time" },
                    { task: "Lead qualification and scoring", time: "3x more qualified leads" },
                    { task: "Email classification and prioritization", time: "Zero missed emails" },
                    { task: "Appointment scheduling and reminders", time: "95% show-up rate" },
                    { task: "Customer feedback analysis and reporting", time: "Real-time insights" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Image placeholder for Operations & Quality Control */}
                <div className="aspect-video bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <span className="text-sm text-orange-600 font-medium">Operations Control Image</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Operations & Quality Control</h3>
                <div className="space-y-4">
                  {[
                    { task: "Visual quality inspection and defect detection", time: "99.7% accuracy" },
                    { task: "Inventory management and reordering", time: "30% cost reduction" },
                    { task: "Process monitoring and exception handling", time: "24/7 monitoring" },
                    { task: "Report generation and distribution", time: "Instant reports" },
                    { task: "Compliance checking and alerts", time: "Zero violations" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Image placeholder for Analytics & Decision Making */}
                <div className="aspect-video bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📊</span>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Analytics & Decision Image</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Analytics & Decision Making</h3>
                <div className="space-y-4">
                  {[
                    { task: "Fraud detection and risk assessment", time: "90% false positive reduction" },
                    { task: "Predictive maintenance scheduling", time: "$500K saved annually" },
                    { task: "Market analysis and trend identification", time: "Real-time insights" },
                    { task: "Performance monitoring and alerting", time: "Instant notifications" },
                    { task: "Resource allocation optimization", time: "25% efficiency gain" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="border-primary bg-primary/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Don't See Your Use Case?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We've automated processes in 47 different industries. If you have repetitive tasks, data processing, or decision-making workflows, we can likely automate them.
                  </p>
                  <Button size="lg" onClick={() => openConsultationPopup()}>
                    Discuss Your Specific Needs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA After Use Cases */}
      <section className="py-12 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Processes?</h3>
            <p className="text-muted-foreground mb-6">See exactly which sprint tier is perfect for your business and automation goals</p>
            <Button size="lg" onClick={() => scrollToSection('process')} className="bg-gradient-to-r from-primary to-accent">
              Choose Your Sprint Tier
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Process - Sprint Tiers */}
      <section id="process" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choose Your AI Transformation Sprint
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Each tier is designed for different automation complexity and business needs
            </p>
            
            <Tabs defaultValue="starter" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="starter">Starter Sprint</TabsTrigger>
                <TabsTrigger value="professional">Professional Sprint</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise Sprint</TabsTrigger>
              </TabsList>
              
              <TabsContent value="starter" className="mt-8">
                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">2-Week Sprint</Badge>
                    <CardTitle className="text-2xl">Starter Sprint: Simple Prompt Automation</CardTitle>
                    <CardDescription>Uses pre-built prompt chains and workflows - no custom coding or complex AI agents. Perfect for teams wanting immediate wins with minimal technical complexity.</CardDescription>
                    
                    {/* Starter Sprint Visual */}
                    <div className="mt-6">
                      <div className="aspect-[3/1] bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 flex items-center justify-center p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">📝</span>
                            </div>
                            <span className="text-xs font-medium">Input</span>
                          </div>
                          <ArrowRight className="h-6 w-6 text-green-500" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">🔗</span>
                            </div>
                            <span className="text-xs font-medium">Prompt Chain</span>
                          </div>
                          <ArrowRight className="h-6 w-6 text-blue-500" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">✨</span>
                            </div>
                            <span className="text-xs font-medium">Output</span>
                          </div>
                        </div>
                      </div>
                      {/* Replace with actual illustration */}
                      {/* <img src="/starter-sprint-diagram.png" alt="Starter Sprint Flow" className="w-full aspect-[3/1] object-contain rounded-lg" /> */}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">What We'll Automate:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Email drafting and responses",
                          "Document summarization",
                          "Data extraction from PDFs",
                          "Content generation workflows",
                          "Simple customer support responses",
                          "Report generation from templates"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Sprint Timeline:</h4>
                      <div className="space-y-3">
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Day 1-2:</div>
                          <div>Workflow analysis and automation mapping</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Day 3-7:</div>
                          <div>Build and test 3-5 prompt chains</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Day 8-10:</div>
                          <div>Integration with your existing tools</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Day 11-14:</div>
                          <div>Team training and optimization</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Expected Results:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">8-10hrs</div>
                          <div className="text-sm">Saved Weekly</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">70%</div>
                          <div className="text-sm">Faster Responses</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">3-5</div>
                          <div className="text-sm">Automations</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">$3-5K</div>
                          <div className="text-sm">Monthly Savings</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="professional" className="mt-8">
                <Card className="border-primary">
                  <CardHeader>
                    <Badge className="w-fit mb-2" variant="default">4-Week Sprint - Most Popular</Badge>
                    <CardTitle className="text-2xl">Professional Sprint: Intelligent Agent Automation</CardTitle>
                    <CardDescription>Custom AI agents that make decisions, handle multi-step workflows, and learn from your data. Goes beyond simple prompts to create intelligent systems that adapt and scale.</CardDescription>
                    
                    {/* Professional Sprint Visual */}
                    <div className="mt-6">
                      <div className="aspect-[3/1] bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center p-6">
                        <div className="flex items-center gap-3">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">📊</span>
                            </div>
                            <span className="text-xs font-medium">Data</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-primary/50" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">🤖</span>
                            </div>
                            <span className="text-xs font-medium">AI Agent</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-primary/50" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">⚡</span>
                            </div>
                            <span className="text-xs font-medium">Decision</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-accent/50" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">🔄</span>
                            </div>
                            <span className="text-xs font-medium">Action</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-accent/50" />
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-2xl">📈</span>
                            </div>
                            <span className="text-xs font-medium">Learn</span>
                          </div>
                        </div>
                      </div>
                      {/* Replace with actual illustration */}
                      {/* <img src="/professional-sprint-diagram.png" alt="Professional Sprint Flow" className="w-full aspect-[3/1] object-contain rounded-lg" /> */}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">What We'll Automate:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Multi-step customer service workflows",
                          "Intelligent document processing pipelines",
                          "Automated research and analysis",
                          "Dynamic pricing and quotes generation",
                          "Contract review and analysis",
                          "Lead qualification and routing",
                          "Inventory and order management",
                          "Complex data transformation workflows"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Sprint Timeline:</h4>
                      <div className="space-y-3">
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 1:</div>
                          <div>Deep dive analysis, process mapping, and agent architecture design</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 2:</div>
                          <div>Build core AI agents and automation logic</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 3:</div>
                          <div>Integration, testing, and refinement with real data</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 4:</div>
                          <div>Deployment, team training, and performance optimization</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Expected Results:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">20-30hrs</div>
                          <div className="text-sm">Saved Weekly</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">85%</div>
                          <div className="text-sm">Process Automation</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">8-12</div>
                          <div className="text-sm">AI Agents</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">$15-25K</div>
                          <div className="text-sm">Monthly Savings</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="enterprise" className="mt-8">
                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2" variant="secondary">8-Week Sprint</Badge>
                    <CardTitle className="text-2xl">Enterprise Sprint: Full-Stack AI Transformation</CardTitle>
                    <CardDescription>Advanced AI including computer vision, custom ML models, and predictive analytics. Combines agents with visual processing and machine learning for complete operational transformation.</CardDescription>
                    
                    {/* Enterprise Sprint Visual */}
                    <div className="mt-6">
                      <div className="aspect-[3/1] bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200 flex items-center justify-center p-4">
                        <div className="grid grid-cols-6 gap-2 items-center">
                          <div className="text-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-lg">👁️</span>
                            </div>
                            <span className="text-xs font-medium">CV</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-purple-400" />
                          <div className="text-center">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-lg">🧠</span>
                            </div>
                            <span className="text-xs font-medium">ML</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-indigo-400" />
                          <div className="text-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-lg">🤖</span>
                            </div>
                            <span className="text-xs font-medium">Agents</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-blue-400" />
                          <div className="text-center">
                            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-lg">📊</span>
                            </div>
                            <span className="text-xs font-medium">Analytics</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-teal-400" />
                          <div className="text-center">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-lg">🚀</span>
                            </div>
                            <span className="text-xs font-medium">Scale</span>
                          </div>
                        </div>
                      </div>
                      {/* Replace with actual illustration */}
                      {/* <img src="/enterprise-sprint-diagram.png" alt="Enterprise Sprint Flow" className="w-full aspect-[3/1] object-contain rounded-lg" /> */}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">What We'll Automate:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Computer vision for quality control",
                          "Predictive analytics and forecasting",
                          "End-to-end supply chain optimization",
                          "Intelligent document processing at scale",
                          "Custom ML models for your industry",
                          "Voice and video analysis systems",
                          "Fraud detection and risk assessment",
                          "Complete customer journey automation",
                          "Cross-department workflow orchestration",
                          "Real-time decision engines"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Sprint Timeline:</h4>
                      <div className="space-y-3">
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 1-2:</div>
                          <div>Enterprise analysis, stakeholder alignment, and roadmap creation</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 3-4:</div>
                          <div>Core AI infrastructure and agent development</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 5-6:</div>
                          <div>Computer vision and advanced ML model training</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="font-semibold text-primary">Week 7-8:</div>
                          <div>Full deployment, change management, and optimization</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Expected Results:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">50+hrs</div>
                          <div className="text-sm">Saved Weekly</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">95%</div>
                          <div className="text-sm">Process Automation</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">20+</div>
                          <div className="text-sm">AI Systems</div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="font-bold text-xl text-primary">$50K+</div>
                          <div className="text-sm">Monthly Savings</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA After Sprint Tiers */}
      <section className="py-12 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Which Sprint is Right for You?</h3>
            <p className="text-muted-foreground mb-6">Not sure which tier fits your needs? Let's discuss your specific requirements</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" onClick={() => openConsultationPopup()}>
                Get Personalized Recommendation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={openPDFDownload}>
                Download Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works / Proof */}
      <section id="proof" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Science Behind Our Proven Success
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              We don't guess. We use proven methodologies that deliver consistent results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Our Proprietary RAPID Framework</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong className="text-primary">R</strong>ecognize: AI-powered process mining identifies automation opportunities
                  </div>
                  <div>
                    <strong className="text-primary">A</strong>rchitect: Design fail-safe automation with human-in-the-loop controls
                  </div>
                  <div>
                    <strong className="text-primary">P</strong>rototype: Build working solutions in 72 hours for immediate validation
                  </div>
                  <div>
                    <strong className="text-primary">I</strong>mplement: Deploy with zero downtime and full rollback capabilities
                  </div>
                  <div>
                    <strong className="text-primary">D</strong>eliver: Measure ROI and continuously optimize performance
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Why Others Fail (And We Don't)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">❌</span>
                    <div>
                      <strong>They:</strong> Spend months on analysis
                      <br />
                      <strong className="text-primary">We:</strong> Deploy in days, iterate based on real data
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">❌</span>
                    <div>
                      <strong>They:</strong> Build complex systems nobody uses
                      <br />
                      <strong className="text-primary">We:</strong> Start simple, scale based on adoption
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">❌</span>
                    <div>
                      <strong>They:</strong> Leave after deployment
                      <br />
                      <strong className="text-primary">We:</strong> Ensure adoption with training and support
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA After Proof */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Join 127 Successful Companies</h3>
                  <p className="text-muted-foreground mb-6">Every single client achieved or exceeded their guaranteed ROI. You could be next.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => openConsultationPopup()}>
                      Start Your Success Story
                      <Trophy className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToSection('testimonials')}>
                      Read Success Stories
                      <Star className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section id="benefits" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your AI Transformation Timeline
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Real results that compound over time
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Immediate (Day 1)</Badge>
                  <CardTitle className="text-lg">Instant Wins</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      $10K+ monthly savings identified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Team buy-in from visible progress
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Clear automation roadmap
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Week 1</Badge>
                  <CardTitle className="text-lg">Early Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      First automations live
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      5-10 hours saved per person/week
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      50% faster response times
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Month 1</Badge>
                  <CardTitle className="text-lg">Transformation Visible</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      20+ hours saved weekly
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      35% customer satisfaction increase
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      $15-25K operational savings
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="default">Month 3+</Badge>
                  <CardTitle className="text-lg">Competitive Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      300% ROI achieved
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      New revenue from freed capacity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      $50K+ monthly savings
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Alert className="mt-8 border-accent bg-accent/10">
              <Gift className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Hidden Benefit:</strong> Teams report 47% higher job satisfaction when freed from repetitive tasks to focus on creative, strategic work.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA #3 */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Download Your Automation Assessment Before You Go
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    See exactly which processes in your business can be automated first and calculate your potential monthly savings with our comprehensive assessment tool.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold mb-1">ROI Calculator</h4>
                    <p className="text-sm text-muted-foreground">Calculate exact savings potential</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h4 className="font-semibold mb-1">Process Audit</h4>
                    <p className="text-sm text-muted-foreground">15-point automation checklist</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/60 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold mb-1">Priority Matrix</h4>
                    <p className="text-sm text-muted-foreground">Which automations to do first</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button onClick={openPDFDownload} size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3">
                    Download Free Assessment Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">Join 500+ companies who've used this assessment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              127 Successful Sprints and Counting
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Real companies, real results, real ROI
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>Legal Firm Saves 30 Hours/Week</CardTitle>
                  <CardDescription>
                    Sarah Chen, Operations Director at Chen & Associates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    "We were drowning in contract reviews and document processing. The Professional Sprint automated 80% of our routine legal document work. Our lawyers now focus on high-value client strategy instead of paperwork."
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <strong className="text-primary">ROI:</strong> 380%
                    </div>
                    <div>
                      <strong className="text-primary">Time Saved:</strong> 30hrs/week
                    </div>
                    <div>
                      <strong className="text-primary">Sprint:</strong> Professional
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>E-commerce Scales Without Hiring</CardTitle>
                  <CardDescription>
                    Marcus Johnson, CEO of TechGear Direct
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    "Customer service was killing us. The Starter Sprint gave us AI-powered responses that handle 70% of inquiries instantly. We went from 48-hour to 2-minute response times without hiring a single person."
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <strong className="text-primary">ROI:</strong> 250%
                    </div>
                    <div>
                      <strong className="text-primary">Response:</strong> 2 min
                    </div>
                    <div>
                      <strong className="text-primary">Sprint:</strong> Starter
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>Manufacturing Prevents $2M in Defects</CardTitle>
                  <CardDescription>
                    Jennifer Park, VP Operations at Precision Parts Inc
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    "The Enterprise Sprint implemented computer vision quality control that catches defects our human inspectors missed. We prevented $2M in potential recalls in the first quarter alone."
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <strong className="text-primary">Saved:</strong> $2M
                    </div>
                    <div>
                      <strong className="text-primary">Accuracy:</strong> 99.7%
                    </div>
                    <div>
                      <strong className="text-primary">Sprint:</strong> Enterprise
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>Healthcare Clinic Doubles Capacity</CardTitle>
                  <CardDescription>
                    Dr. Robert Kim, Director at MedCare Clinics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    "Administrative work was eating 60% of our time. The Professional Sprint automated patient intake, scheduling, and insurance verification. We now see twice as many patients with the same staff."
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <strong className="text-primary">Capacity:</strong> 2x
                    </div>
                    <div>
                      <strong className="text-primary">Admin:</strong> -60%
                    </div>
                    <div>
                      <strong className="text-primary">Sprint:</strong> Professional
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Us - Founders */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Meet Your AI Automation Partners
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              AI experts and product builders who've transformed 200+ companies with proven automation solutions
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Jake McMahon */}
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      {/* Placeholder for Jake's profile photo */}
                      <div className="text-4xl font-bold text-primary">JM</div>
                    </div>
                    {/* Uncomment and replace src when you have Jake's photo */}
                    {/* <img 
                      src="/path-to-jake-photo.jpg" 
                      alt="Jake McMahon" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    /> */}
                  </div>
                  <CardTitle className="text-2xl">Jake McMahon</CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    AI Strategy & Implementation Expert
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    With 8+ years transforming SaaS companies from data chaos to growth engines, Jake brings proven expertise in analytics, automation, and strategic implementation.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Education:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        St. Petersburg State University Graduate School of Management
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Core Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AI Strategy & Planning</Badge>
                      <Badge variant="outline">Business Process Automation</Badge>
                      <Badge variant="outline">Data Analytics & Insights</Badge>
                      <Badge variant="outline">SaaS Growth & Scaling</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        CPO at B2B EdTech platform serving 6,000+ enterprise users at companies like Raiffeisen and SemRUSH
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Product and growth consultant for high-scale consumer apps with 100K+ monthly active users
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Built payment fraud detection and churn prediction systems using advanced ML techniques
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Designed multi-LLM automation systems for Monday.com, Guardio, 8fig, and other high-growth companies
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Vyacheslav */}
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                      {/* Placeholder for Vyacheslav's profile photo */}
                      <div className="text-4xl font-bold text-primary">V</div>
                    </div>
                    {/* Uncomment and replace src when you have Vyacheslav's photo */}
                    {/* <img 
                      src="/path-to-vyacheslav-photo.jpg" 
                      alt="Vyacheslav" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    /> */}
                  </div>
                  <CardTitle className="text-2xl">Vyacheslav Разин</CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    AI Research & Deep Learning Specialist
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Leading AI researcher and practitioner from ННГУ, Vyacheslav Разин specializes in deep learning, machine learning model development, and advanced AI implementations. Regular speaker at top AI conferences across Russia and Europe.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Education:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Аспирантура in AI/Machine Learning from ННГУ
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        ННГУ (Research Focus)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Core Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Deep Learning & Neural Networks</Badge>
                      <Badge variant="outline">ML Model Development</Badge>
                      <Badge variant="outline">AI Research & Innovation</Badge>
                      <Badge variant="outline">Advanced AI Architectures</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        100+ published research papers
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Speaker at major AI conferences
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Expert in cutting-edge AI technologies
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Pioneer in advanced AI implementations
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Why We Started This Company</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  We saw too many great businesses struggling with manual processes while AI solutions remained inaccessible, overcomplicated, or simply didn't work as promised.
                </p>
                <p className="text-muted-foreground text-center">
                  The AI industry was full of impressive demos that failed in production, complex architectures that solved the wrong problems, and vendors who disappeared after implementation.
                </p>
                <p className="text-lg font-semibold text-center">
                  We bridge that gap with practical, results-driven AI implementations that actually work and deliver measurable business value.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">AI Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$100M+</div>
                    <div className="text-sm text-muted-foreground">Client Operational Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Fortune 500 Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA After About */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-accent bg-accent/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Work With the Team That Delivers</h3>
                  <p className="text-muted-foreground mb-6">Jake and Vyacheslav Разин personally oversee every sprint to ensure your success</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={() => openConsultationPopup()}>
                      Meet the Team
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" onClick={() => scrollToSection('calculator')}>
                      Calculate Your ROI
                      <DollarSign className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Calculate Your AI Automation ROI
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              See exactly how much you'll save with our sprints
            </p>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Your Current Situation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label>Average hours per employee per week</Label>
                    <Input
                      type="number"
                      value={roiInputs.hoursPerWeek}
                      onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Average hourly rate ($)</Label>
                    <Input
                      type="number"
                      value={roiInputs.hourlyRate}
                      onChange={(e) => setRoiInputs({...roiInputs, hourlyRate: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>% time on repetitive tasks</Label>
                    <Input
                      type="number"
                      value={roiInputs.repetitiveTasks}
                      onChange={(e) => setRoiInputs({...roiInputs, repetitiveTasks: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h3 className="text-xl font-bold mb-4">Your Potential Savings with AI Automation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Hours saved per week:</span>
                        <span className="text-xl font-bold text-primary">{roi.weeklyTimeSaved.toFixed(1)} hrs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Weekly savings:</span>
                        <span className="text-xl font-bold text-primary">${roi.weeklySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly savings:</span>
                        <span className="text-xl font-bold text-primary">${roi.monthlySavings.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-primary/10 rounded-lg">
                        <div className="text-3xl font-bold text-primary">${roi.yearlySavings.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                        <div className="text-lg font-semibold text-primary mt-2">
                          {(roi.yearlySavings / 25000).toFixed(1)}x ROI
                        </div>
                        <div className="text-xs text-muted-foreground">on Professional Sprint</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Alert className="border-primary bg-primary/10">
                  <TrendingUp className="h-4 w-4" />
                  <AlertDescription>
                    These calculations assume 75% automation efficiency. Most clients achieve 80-90% after optimization.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" onClick={() => openConsultationPopup()}>
                  Book Strategy Call to Discuss ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Investment That Pays For Itself
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Fixed pricing, guaranteed ROI, no surprises
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className={selectedTier === 'starter' ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle>Starter Sprint</CardTitle>
                  <CardDescription>Quick wins with simple prompt chains - no complex AI needed</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold">Starting from $9,800</div>
                    <div className="text-sm text-muted-foreground">2-week sprint</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "3-5 prompt chain automations",
                      "Integration with existing tools",
                      "Team training included",
                      "8-10 hours saved weekly",
                      "30-day support",
                      "ROI in 6-8 weeks"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={selectedTier === 'starter' ? 'default' : 'outline'}
                    onClick={() => {
                      setSelectedTier('starter');
                      openConsultationPopup('starter');
                    }}
                  >
                    Select Starter Sprint
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className={selectedTier === 'professional' ? 'border-primary' : ''}>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="default">Most Popular</Badge>
                  <CardTitle>Professional Sprint</CardTitle>
                  <CardDescription>Custom AI agents that think, decide, and adapt to your workflows</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold">Starting from $24,900</div>
                    <div className="text-sm text-muted-foreground">4-week sprint</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "8-12 AI agent automations",
                      "Custom workflow design",
                      "Advanced integrations",
                      "20-30 hours saved weekly",
                      "90-day support",
                      "ROI in 4-6 weeks",
                      "Quarterly optimization",
                      "Priority support"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={selectedTier === 'professional' ? 'default' : 'outline'}
                    onClick={() => {
                      setSelectedTier('professional');
                      openConsultationPopup('professional');
                    }}
                  >
                    Select Professional Sprint
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className={selectedTier === 'enterprise' ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle>Enterprise Sprint</CardTitle>
                  <CardDescription>Advanced ML, computer vision, and predictive intelligence</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold">Starting from $50K</div>
                    <div className="text-sm text-muted-foreground">8-week sprint</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "20+ AI systems",
                      "Computer vision & ML",
                      "Enterprise architecture",
                      "50+ hours saved weekly",
                      "12-month support",
                      "ROI in 2-3 weeks",
                      "Dedicated success manager",
                      "Monthly optimization",
                      "SLA guarantees"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={selectedTier === 'enterprise' ? 'default' : 'outline'}
                    onClick={() => {
                      setSelectedTier('enterprise');
                      openConsultationPopup('enterprise');
                    }}
                  >
                    Get Custom Quote
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Alert className="mt-8 border-accent bg-accent/10">
              <Gift className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Limited Time Bonus:</strong> Book this week and get our $2,000 AI Readiness Assessment FREE (uncovers additional $50K+ in automation opportunities)
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions (With Honest Answers)
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What if we're not technical? Can we still use AI automation?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. 73% of our clients have zero technical background. We handle all the technical complexity and train your team on simple, user-friendly interfaces. If you can use email, you can use our automations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How is this different from hiring developers or consultants?
                </AccordionTrigger>
                <AccordionContent>
                  Developers take 6-12 months and cost $200K+. Consultants give you reports, not working solutions. We deliver functioning automations in weeks with fixed pricing and guaranteed ROI. You get results, not recommendations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What if it doesn't work for our specific industry?
                </AccordionTrigger>
                <AccordionContent>
                  We've successfully implemented automations in 47 different industries, from law firms to manufacturers. Our discovery process identifies your unique workflows, and we customize every solution. Plus, our guarantee means zero risk for you.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Will AI replace our employees?
                </AccordionTrigger>
                <AccordionContent>
                  No. AI handles the repetitive work your team hates, freeing them for strategic, creative tasks they love. Our clients report 47% higher employee satisfaction after automation because their teams focus on meaningful work, not mindless tasks.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How quickly will we see ROI?
                </AccordionTrigger>
                <AccordionContent>
                  Most clients see positive ROI within 4-6 weeks. The Starter Sprint typically pays for itself in 6-8 weeks, Professional in 4-6 weeks, and Enterprise in 2-3 weeks. We guarantee specific ROI metrics in your contract.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What happens after the sprint ends?
                </AccordionTrigger>
                <AccordionContent>
                  Your automations keep running forever. We include 30-90 days of support (depending on tier) and optional monthly optimization packages. Most clients are fully self-sufficient after the sprint, but we're here if you need us.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Can we start small and expand later?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Many clients start with the Starter Sprint to prove ROI, then expand with additional sprints. We design everything to be scalable, so you can add more automations as you grow comfortable with the technology.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  What's your success rate really based on?
                </AccordionTrigger>
                <AccordionContent>
                  100% success rate means every client achieved or exceeded their guaranteed ROI metrics. We've completed 127 sprints with zero failures because we only take on projects where we're confident in delivering results, and we guarantee them contractually.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section id="guarantee" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary bg-primary/5">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">Our Triple Guarantee</CardTitle>
                <CardDescription className="text-lg">
                  We're so confident, we remove all your risk
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. ROI Guarantee</h3>
                    <p className="text-muted-foreground">
                      We guarantee specific, measurable ROI within 90 days. If we don't hit the numbers we promise in your contract, you get a full refund. No questions, no hassles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Adoption Guarantee</h3>
                    <p className="text-muted-foreground">
                      If your team doesn't adopt the automations due to complexity or poor design, we'll rebuild them at no cost until they work seamlessly with your workflow.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Performance Guarantee</h3>
                    <p className="text-muted-foreground">
                      All automations come with uptime and accuracy SLAs. If performance drops below agreed thresholds, we fix it free and credit you for any downtime.
                    </p>
                  </div>
                </div>
                
                <Alert className="border-primary">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Why we can guarantee this:</strong> Our 100% success rate isn't luck. We've perfected our process over 127 sprints. We know exactly what works, how long it takes, and what ROI you'll achieve.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-magnet" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">Free Resource</Badge>
                <CardTitle className="text-3xl">Not Ready to Start a Sprint?</CardTitle>
                <CardDescription className="text-lg">
                  Get our AI Automation Readiness Assessment FREE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Lead Magnet Image */}
                  <div className="order-2 md:order-1">
                    <div className="relative max-w-md mx-auto">
                      {/* Placeholder for lead magnet cover image */}
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center shadow-lg">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="h-8 w-8 text-primary" />
                          </div>
                          <div className="text-lg font-bold text-primary mb-2">AI Automation</div>
                          <div className="text-lg font-bold text-primary mb-2">Readiness Assessment</div>
                          <div className="text-sm text-muted-foreground">27-Point Analysis</div>
                        </div>
                      </div>
                      {/* When you have the actual cover image, replace with: */}
                      {/* <img 
                        src="/lead-magnet-cover.png" 
                        alt="AI Automation Readiness Assessment Cover" 
                        className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg border border-primary/20"
                      /> */}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="order-1 md:order-2 space-y-6">
                    <div>
                      <p className="text-lg mb-6">
                        Discover exactly how much money you're leaving on the table with our 27-point assessment that reveals:
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        "Your top 10 automation opportunities ranked by ROI",
                        "Exactly how many hours you're wasting weekly",
                        "Hidden costs of manual processes in your business",
                        "Quick wins you can implement today",
                        "Whether AI automation is right for you",
                        "Potential savings specific to your industry"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <Button className="w-full" size="lg" onClick={openPDFDownload}>
                        Get Free Assessment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        No spam, ever. Just one valuable assessment and occasional updates on AI automation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 bg-gradient-to-b from-primary/10 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="destructive" className="mb-6 px-6 py-2">
              <Timer className="w-4 h-4 mr-2" />
              Only 3 Sprint Slots Available This Month
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Day You Wait Costs You{" "}
              <span className="text-primary">${Math.round(roi.monthlySavings / 30)}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              While you're reading this, your competitors are automating. In 30 days, they'll be moving 10x faster than you. In 90 days, they'll be taking your customers.
            </p>
            
            <Card className="border-primary mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">Today</div>
                    <p className="text-sm text-muted-foreground">Book your sprint slot</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Next Week</div>
                    <p className="text-sm text-muted-foreground">First automations live</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">30 Days</div>
                    <p className="text-sm text-muted-foreground">Full ROI achieved</p>
                  </div>
                </div>
                
                <Alert className="border-accent bg-accent/10">
                  <Gift className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Book Today, Get:</strong> Free AI Readiness Assessment ($2,000 value) + Priority scheduling + 10% discount on future sprints
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => openConsultationPopup()}>
                  Book Your Sprint Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
                  Send Requirements
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Questions? Call us directly: 1-800-AI-SPRINT
                <br />
                Average response time: 2 minutes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
              {[
                "Proven Track Record",
                "ROI Guaranteed",
                "No Risk",
                "Cancel Anytime"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA #4 - Final */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/30 bg-gradient-to-r from-white to-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-primary">Last Chance</h3>
                    <p className="text-sm text-muted-foreground">Get your free automation assessment</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Before you leave, grab our assessment tool and see exactly how much your business could save with AI automation.
                </p>
                <Button onClick={openPDFDownload} className="bg-primary hover:bg-primary/90">
                  Download Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Ready to Get Started?</CardTitle>
                <CardDescription className="text-lg">
                  Tell us about your automation needs and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isContactSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground">
                      {contactSuccessMessage || "We've received your requirements and will get back to you within 24 hours with a custom proposal."}
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    
                    const data = {
                      first_name: formData.get('firstName') as string,
                      last_name: formData.get('lastName') as string,
                      email: formData.get('email') as string,
                      company: formData.get('company') as string,
                      role: formData.get('role') as string,
                      company_size: formData.get('company_size') as string,
                      sprint_tier: formData.get('sprint_tier') as string,
                      current_processes: formData.get('current_processes') as string,
                      desired_timeline: formData.get('desired_timeline') as string,
                    };
                    
                    try {
                      await submitContactForm(data);
                    } catch (error) {
                      console.error('Form submission error:', error);
                    }
                  }}>
                    {contactError && (
                      <Alert className="border-destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{contactError}</AlertDescription>
                      </Alert>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input name="firstName" id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input name="lastName" id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input name="email" id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input name="company" id="company" placeholder="Your Company Name" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input name="role" id="role" placeholder="CEO, CTO, Operations Manager, etc." />
                    </div>
                    
                    <div>
                      <Label htmlFor="company_size">Company Size</Label>
                      <select 
                        name="company_size"
                        id="company_size" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="sprint_tier">Interested Sprint Tier</Label>
                      <select 
                        name="sprint_tier"
                        id="sprint_tier" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select sprint tier</option>
                        <option value="starter">Starter Sprint - Simple Prompt Automation</option>
                        <option value="professional">Professional Sprint - AI Agents</option>
                        <option value="enterprise">Enterprise Sprint - Full AI Transformation</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="current_processes">Current Manual Processes</Label>
                      <textarea 
                        name="current_processes"
                        id="current_processes"
                        placeholder="Tell us about the repetitive tasks or manual processes you'd like to automate..."
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="desired_timeline">Desired Timeline</Label>
                      <select 
                        name="desired_timeline"
                        id="desired_timeline" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP - Ready to start immediately</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="planning">Just planning/researching</option>
                      </select>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isContactSubmitting}>
                      {isContactSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send My Requirements
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      We'll review your requirements and get back to you within 24 hours with a custom proposal.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ConsultationPopup 
        isOpen={isConsultationOpen} 
        onClose={closeConsultationPopup}
        title={consultationConfig.title}
        description={consultationConfig.description}
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

export default AIAutomationSprints;