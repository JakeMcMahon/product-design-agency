import { useState } from "react";
import { Button } from "@/components/ui-agency/button";
import { Badge } from "@/components/ui-agency/badge";
import { Card, CardContent } from "@/components/ui-agency/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, Play, Clock, Users, Trophy, Zap, Shield, TrendingUp, Sparkles, Calendar, DollarSign, Building2, ChevronRight, Star, AlertCircle, Gift, Timer, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import PDFDownloadPopupRU from "@/components/PDFDownloadPopupRU";
import { useSprintPDFDownload } from "@/hooks/useSprintPDFDownload";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";

const navigationItems = [
  { label: "SERVICES", hasDropdown: true, href: "#solution" },
  { label: "CASES", href: "#use-cases" },
  { label: "RESULTS", href: "#pricing" },
  { label: "ABOUT", href: "#about" },
];

const ModernHomepageAgency = () => {
  const [email, setEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("professional");
  const [roiInputs, setRoiInputs] = useState({
    hoursPerWeek: 40,
    hourlyRate: 3000, // RUB per hour
    repetitiveTasks: 60,
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationConfig, setConsultationConfig] = useState({
    title: "Book Your AI Automation Sprint",
    description: "Schedule a 30-minute strategic call to discuss your automation needs"
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
      description: "Schedule a 30-minute strategic call to discuss your automation needs"
    };
    
    if (tier === 'starter') {
      config = {
        title: "Book Your Starter Sprint",
        description: "Let's discuss your needs for simple prompts automation and quick wins"
      };
    } else if (tier === 'professional') {
      config = {
        title: "Book Your Professional Sprint",
        description: "Schedule a call to discuss your requirements for AI agent automation"
      };
    } else if (tier === 'enterprise') {
      config = {
        title: "Book Your Enterprise Sprint",
        description: "Let's discuss your needs for full AI transformation"
      };
    }
    
    setConsultationConfig(config);
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="bg-white min-h-screen w-full" data-model-id="2:4">
      <div className="bg-white w-full flex flex-col px-4 sm:px-6 lg:px-8 xl:px-0">
        
        {/* Header Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <header className="relative w-full h-[1284px] bg-[#111111] overflow-hidden">
            <div className="relative w-full h-full">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
              
              {/* Floating gradient elements */}
              <div className="absolute top-20 left-20 w-72 h-72 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse delay-700"></div>

              {/* Navigation */}
              <nav className="absolute w-full h-[75px] top-0 left-0 z-10">
                <div className="flex items-center justify-between px-4 md:px-[90px] py-[29px]">
                  <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                    <div className="text-white text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                      AI Automation Solutions
                    </div>
                  </div>

                  <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <nav className="flex items-center gap-2">
                      {navigationItems.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-1.5">
                          <div className="flex items-end gap-1.5">
                            <a 
                              href={item.href || "#"}
                              onClick={(e) => {
                                if (item.href && item.href.startsWith('#')) {
                                  e.preventDefault();
                                  scrollToSection(item.href.substring(1));
                                }
                              }}
                              className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-[13.2px] tracking-[0] leading-[13.5px] whitespace-nowrap cursor-pointer hover:text-[#4f5bff] transition-colors">
                              {item.label}
                            </a>
                            {item.hasDropdown && (
                              <div className="w-3 h-3 md:w-[15px] md:h-[15px] text-white text-xs">▼</div>
                            )}
                          </div>
                          {index < navigationItems.length - 1 && (
                            <div className="w-[37.5px]" />
                          )}
                        </div>
                      ))}
                    </nav>

                    <Button
                      className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[13.2px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                      variant="ghost"
                      onClick={() => openConsultationPopup()}
                    >
                      START
                    </Button>
                  </div>
                </div>
              </nav>

              {/* Hero Content */}
              <main className="flex flex-col items-center gap-9 absolute top-[180px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-[1176px] items-center gap-9">
                  
                  {/* Subheading */}
                  <div className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-lg tracking-[0.36px] leading-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <span className="text-neutral-100 tracking-[0.06px]">
                      AI Automation for Business /
                    </span>
                    <span className="text-[#666666] tracking-[0.06px]">/</span>
                    <span className="text-[#3d3d3d] tracking-[0.06px]">/</span>
                    <span className="text-neutral-100 tracking-[0.06px]">
                      {"  "}Россия
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] tracking-[0] leading-tight lg:leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    From Manual Work to AI Automation <br />
                    in 2-8 Weeks
                  </h1>

                  {/* Description */}
                  <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl">
                    <span className="text-white tracking-[0.03px]">Stop losing $4 million/month on routine tasks. Our </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">AI sprints</span>
                    <span className="text-white tracking-[0.03px]"> deliver working solutions that save </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">
                      20+ hours per week
                    </span>
                    <span className="text-white tracking-[0.03px]">, guaranteed.</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                    <Button 
                      className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                      onClick={() => openConsultationPopup()}
                    >
                      Book Strategic Call
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('pricing')}
                    >
                      View Packages
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        72 часа
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        First Automation Works
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        300%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Average ROI
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        20+ часов
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Weekly Time Savings
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        100%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Project Success Rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
                  <div className="w-full h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                    <div className="text-white/60 text-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                      AI Dashboard Preview
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </header>
        </section>

        {/* VSL Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] mt-20">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Why 75% of Enterprises Plan to Automate with AI
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Discover how AI automation can save the average business from $10M to $50M per year
                </p>
              </div>
              
              {/* Video Card */}
              <div className="relative max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <Card className="rounded-[18px] overflow-hidden bg-neutral-100 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative aspect-video bg-gradient-to-br from-[#4f5bff]/10 to-[#8b5cf6]/10 rounded-lg overflow-hidden border border-[#4f5bff]/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-[#4f5bff] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#4f5bff]/90 transition-colors">
                            <Play className="h-12 w-12 text-white ml-1" />
                          </div>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-lg">Click to Play</p>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-sm">Video Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-20">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1260px] items-start gap-4 md:gap-6 mx-auto">
              {[
                {
                  id: "01",
                  value: "$50M+",
                  description: "Saved by clients\nlast year",
                  valueSize: "text-[52.7px]",
                },
                {
                  id: "02",
                  value: "300%",
                  description: "Average ROI\nfrom automation",
                  valueSize: "text-[52.3px]",
                },
                {
                  id: "03",
                  value: "72h",
                  description: "First automation\nlaunched and working",
                  valueSize: "text-[51.6px]",
                },
                {
                  id: "04",
                  value: "20+ hours",
                  description: "Time savings per week\nper team",
                  valueSize: "text-[40.7px]",
                },
                {
                  id: "05",
                  value: "Complete Solution",
                  description: "From process analysis to implementation\nand support of AI systems",
                  valueSize: "text-[40.7px]",
                },
              ].map((stat, index) => (
                <Card
                  key={stat.id}
                  className={`${index >= 3 ? 'md:col-span-2 lg:col-span-1' : ''} w-full min-h-[250px] md:min-h-[300px] rounded-[18px] overflow-hidden bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={
                    {
                      "--animation-delay": `${(index + 1) * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col justify-between h-full p-[30px] pt-[33px] pb-[30px]">
                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0.14px] leading-[17.5px]">
                      / {stat.id}
                    </div>

                    <div className="flex-1 flex items-end">
                      <div
                        className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] ${stat.valueSize} tracking-[0] leading-[54px]`}
                      >
                        {stat.value}
                      </div>
                    </div>

                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-6 whitespace-pre-line">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Solution Section - Agency Style */}
        <section id="solution" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Problem and Solution
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Your employees spend precious time on routine tasks instead of strategic development
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Problem Card */}
                <Card className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                        <AlertCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-2xl">
                        Current Situation
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Manual document processing takes 8+ hours per day",
                        "Repetitive tasks consume 60% of work time",
                        "Human errors cost $2-5 million per month",
                        "Scaling requires proportional hiring",
                        "Team burns out from monotonous work"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0" />
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-base leading-6">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Solution Card */}
                <Card className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#4f5bff] rounded-full flex items-center justify-center mr-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-2xl">
                        AI Automation
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Automatic processing in seconds instead of hours",
                        "AI agents work 24/7 without weekends",
                        "99.7% accuracy vs human errors",
                        "Infinite scaling without hiring",
                        "Team focuses on strategic tasks"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#4f5bff] rounded-full mt-3 mr-3 flex-shrink-0" />
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-base leading-6">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                <Button 
                  className="w-auto px-4 md:px-6 h-12 md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-tight transition-colors text-center"
                  onClick={() => openConsultationPopup()}
                >
                  <span className="block sm:hidden">Start</span>
                  <span className="hidden sm:block">Start automation now</span>
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  ROI Calculator
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Calculate the potential savings for your business
                </p>
              </div>

              <Card className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-6">
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-2xl mb-6">
                        Your Business Parameters
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666] text-sm mb-2 block">
                            Working hours per week per team
                          </Label>
                          <Input
                            type="number"
                            value={roiInputs.hoursPerWeek}
                            onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                            className="rounded-lg border-[#e0e0e0] h-12"
                          />
                        </div>
                        
                        <div>
                          <Label className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666] text-sm mb-2 block">
                            Average hourly cost ($)
                          </Label>
                          <Input
                            type="number"
                            value={roiInputs.hourlyRate}
                            onChange={(e) => setRoiInputs({...roiInputs, hourlyRate: parseInt(e.target.value) || 0})}
                            className="rounded-lg border-[#e0e0e0] h-12"
                          />
                        </div>
                        
                        <div>
                          <Label className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666] text-sm mb-2 block">
                            % of time on routine tasks
                          </Label>
                          <Input
                            type="number"
                            value={roiInputs.repetitiveTasks}
                            onChange={(e) => setRoiInputs({...roiInputs, repetitiveTasks: parseInt(e.target.value) || 0})}
                            className="rounded-lg border-[#e0e0e0] h-12"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-2xl mb-6">
                        Potential Savings
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666]">
                            Weekly savings:
                          </span>
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-xl">
                            ₽{roi.weeklySavings.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666]">
                            Monthly savings:
                          </span>
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-xl">
                            ₽{roi.monthlySavings.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-[#4f5bff] rounded-lg">
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-white">
                            Yearly savings:
                          </span>
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl">
                            ₽{roi.yearlySavings.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="mt-6">
                          <Button 
                            className="w-full h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                            onClick={() => openConsultationPopup()}
                          >
                            Get Personalized Calculation
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section - Agency Style */}
        <section id="pricing" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  AI Sprint Packages
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Choose the right level of automation for your business
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    tier: "starter",
                    name: "Starter",
                    price: "$150,000",
                    duration: "2-3 weeks",
                    description: "Quick wins with simple automation",
                    features: [
                      "3-5 basic automations",
                      "Team training",
                      "30 days support",
                      "ROI reporting"
                    ],
                    popular: false
                  },
                  {
                    tier: "professional",
                    name: "Professional",
                    price: "$500,000",
                    duration: "4-6 weeks",
                    description: "Comprehensive automation of key processes",
                    features: [
                      "8-12 AI automations",
                      "Custom AI agents",
                      "System integration",
                      "90 days support",
                      "Team training",
                      "ROI monitoring"
                    ],
                    popular: true
                  },
                  {
                    tier: "enterprise",
                    name: "Enterprise", 
                    price: "$1,200,000",
                    duration: "6-8 weeks",
                    description: "Full enterprise-level AI transformation",
                    features: [
                      "15+ AI automations",
                      "Custom AI platform",
                      "Full integration",
                      "6 months support",
                      "Training for all departments",
                      "Advanced analytics",
                      "Dedicated team"
                    ],
                    popular: false
                  }
                ].map((plan, index) => (
                  <Card 
                    key={plan.tier}
                    className={`rounded-[18px] border-0 relative overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 ${
                      plan.popular ? 'bg-[#4f5bff]' : 'bg-neutral-100'
                    }`}
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-[#4f5bff] px-3 py-1">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-2xl mb-2 ${
                          plan.popular ? 'text-white' : 'text-[#111111]'
                        }`}>
                          {plan.name}
                        </h3>
                        <div className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-4xl mb-2 ${
                          plan.popular ? 'text-white' : 'text-[#4f5bff]'
                        }`}>
                          {plan.price}
                        </div>
                        <div className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-sm ${
                          plan.popular ? 'text-white/80' : 'text-[#666666]'
                        }`}>
                          {plan.duration}
                        </div>
                      </div>

                      <p className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-center mb-6 ${
                        plan.popular ? 'text-white/90' : 'text-[#666666]'
                      }`}>
                        {plan.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle2 className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${
                              plan.popular ? 'text-white' : 'text-[#4f5bff]'
                            }`} />
                            <span className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-sm ${
                              plan.popular ? 'text-white' : 'text-[#666666]'
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full h-[54px] rounded-[10.8px] text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors ${
                          plan.popular 
                            ? 'bg-white text-[#4f5bff] hover:bg-white/90' 
                            : 'bg-[#4f5bff] text-white hover:bg-[#3d47cc]'
                        }`}
                        onClick={() => openConsultationPopup(plan.tier)}
                      >
                        Выбрать пакет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-lg mb-6">
                  Все пакеты включают гарантию результата и возврат средств
                </p>
                <Button 
                  variant="ghost"
                  className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                  onClick={() => openPDFDownload()}
                >
                  Скачать подробности
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Agency Style */}
        <section id="about" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Команда экспертов
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Опытные специалисты по ИИ и автоматизации бизнес-процессов
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Jake McMahon",
                    role: "ИИ-стратег и основатель",
                    image: "/images/jakeprofile.png",
                    description: "15+ лет опыта в автоматизации. Построил ИИ-решения для 200+ компаний. Эксперт по LLM и агентным системам.",
                    achievements: [
                      "Сэкономил клиентам ₽2+ млрд",
                      "200+ успешных ИИ-проектов",
                      "Эксперт по GPT и Claude"
                    ]
                  },
                  {
                    name: "Vyacheslav Razin",
                    role: "Технический директор",
                    image: "/images/vyacheslavprofile.PNG",
                    description: "Мастер интеграций и ИИ-архитектуры. Специализируется на сложных корпоративных системах и масштабировании.",
                    achievements: [
                      "Архитектор корпоративных ИИ",
                      "Эксперт по интеграциям",
                      "20+ лет в enterprise"
                    ]
                  }
                ].map((member, index) => (
                  <Card 
                    key={member.name}
                    className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden mr-6 flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-1">
                            {member.name}
                          </h3>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#4f5bff] text-sm mb-3">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6 mb-6">
                        {member.description}
                      </p>
                      
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#4f5bff] rounded-full mt-3 mr-3 flex-shrink-0" />
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto text-center">
              <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Готовы автоматизировать свой бизнес?
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto mb-12">
                  Забронируйте стратегический звонок и получите персональный план автоматизации за 30 минут
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button 
                    className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                    onClick={() => openConsultationPopup()}
                  >
                    Забронировать звонок бесплатно
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                    onClick={() => openPDFDownload()}
                  >
                    Скачать гайд
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    {
                      icon: <Clock className="h-8 w-8 text-[#4f5bff] mx-auto mb-3" />,
                      title: "30 минут",
                      description: "Длительность стратегического звонка"
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-[#4f5bff] mx-auto mb-3" />,
                      title: "Бесплатно",
                      description: "Никаких скрытых платежей"
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-[#4f5bff] mx-auto mb-3" />,
                      title: "Гарантия",
                      description: "100% возврат средств если не довольны"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="translate-y-[-1rem] animate-fade-in opacity-0" 
                         style={{"--animation-delay": `${200 + index * 100}ms`} as React.CSSProperties}>
                      {feature.icon}
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <div className="py-[40px] px-4 md:px-[90px] bg-neutral-100">
            <div className="max-w-[1260px] mx-auto text-center">
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                © 2024 AI Automation RU. Все права защищены. | 
                <span className="mx-2">Политика конфиденциальности</span> | 
                <span className="mx-2">Условия использования</span>
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Popups */}
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title={consultationConfig.title}
        description={consultationConfig.description}
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />

      <PDFDownloadPopupRU
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
        isSubmitting={isPDFSubmitting}
        isSubmitted={isPDFSubmitted}
      />
    </main>
  );
};

export default ModernHomepageAgency;