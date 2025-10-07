import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Scale, FileText, Shield, Clock, TrendingUp, Play, Search, AlertTriangle, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";
import { usePDFDownload } from "@/hooks/usePDFDownload";

const Legal = () => {
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
  const stats = [
    { label: "Law Firms Using AI", value: "200+", icon: Scale },
    { label: "Review Time Reduction", value: "80%", icon: Clock },
    { label: "Accuracy Improvement", value: "95%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "98%", icon: Users }
  ];

  const problems = [
    {
      title: "Document Review Bottlenecks",
      items: [
        "Partners and associates spend 60-80% of billable time on document review",
        "Contract analysis takes weeks when clients need answers in days",
        "Discovery processes require armies of junior attorneys",
        "Critical deadlines missed due to manual processing delays"
      ]
    },
    {
      title: "Compliance & Risk Challenges",
      items: [
        "Regulatory compliance monitoring requires constant human oversight",
        "Contract risk assessment prone to human error and oversight",
        "Client confidentiality concerns with traditional outsourcing",
        "Inconsistent analysis quality across different team members"
      ]
    },
    {
      title: "Client Communication Issues",
      items: [
        "Clients demand faster response times but quality can't suffer",
        "Junior staff handle routine inquiries, reducing senior attorney efficiency",
        "After-hours client needs go unaddressed until next business day",
        "Language barriers limit international client service capabilities"
      ]
    },
    {
      title: "Research Inefficiencies",
      items: [
        "Legal research consumes hours that could be spent on strategy",
        "Keeping up with regulatory changes across jurisdictions",
        "Precedent analysis requires extensive manual cross-referencing",
        "Knowledge management systems underutilized due to complexity"
      ]
    }
  ];

  const solutions = [
    {
      title: "Contract Analysis & Review",
      icon: FileText,
      description: "AI-powered contract analysis that identifies clauses, risks, and opportunities in minutes instead of hours",
      features: [
        "Automated clause extraction and categorization",
        "Risk assessment and flagging of problematic terms",
        "Compliance verification against regulatory requirements",
        "Contract comparison and deviation analysis",
        "Renewal and deadline tracking automation"
      ]
    },
    {
      title: "Legal Research Automation",
      icon: Search,
      description: "Intelligent research assistants that analyze case law, statutes, and regulatory changes",
      features: [
        "Automated legal precedent research",
        "Regulatory change monitoring and alerts",
        "Case law analysis and summarization",
        "Citation verification and validation",
        "Legal brief and memo generation assistance"
      ]
    },
    {
      title: "Document Discovery",
      icon: Shield,
      description: "Advanced document classification and privilege review for litigation support",
      features: [
        "Intelligent document classification and tagging",
        "Privilege review and attorney-client protection",
        "Automated redaction for sensitive information",
        "Evidence organization and timeline construction",
        "Opposing counsel document production management"
      ]
    },
    {
      title: "Client Communication Automation",
      icon: Users,
      description: "24/7 intelligent client service with escalation to appropriate attorneys",
      features: [
        "Automated intake and case assessment",
        "Multi-language client communication support",
        "Document collection and organization",
        "Appointment scheduling and deadline reminders",
        "Status updates and progress reporting"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "BigLaw Firm: 90% Faster Contract Review",
      stats: "500+ attorney firm, $2M+ annual savings",
      description: "Major international law firm deployed AI contract analysis across M&A practice, reducing average contract review time from 8 hours to 45 minutes while improving risk identification by 95%.",
      results: [
        "90% reduction in contract review time",
        "95% improvement in risk identification",
        "$2M+ annual cost savings",
        "40% increase in client satisfaction scores"
      ]
    },
    {
      title: "Corporate Legal: Automated Compliance Monitoring", 
      stats: "Fortune 500 legal department, 75% efficiency gain",
      description: "In-house legal team implemented AI-powered regulatory monitoring across 15 jurisdictions, automating compliance tracking and reducing legal risk exposure.",
      results: [
        "75% reduction in compliance monitoring time",
        "100% regulatory change capture rate",
        "60% fewer compliance violations",
        "3x faster response to regulatory updates"
      ]
    },
    {
      title: "Litigation Support: Document Discovery Automation",
      stats: "Personal injury practice, 85% cost reduction",
      description: "Mid-size litigation firm automated document discovery process, handling 10x more cases with same staffing while improving case outcomes.",
      results: [
        "85% reduction in discovery costs",
        "10x increase in case handling capacity",
        "50% improvement in case win rate",
        "99.8% privilege review accuracy"
      ]
    }
  ];

  const complianceFeatures = [
    {
      title: "HIPAA Compliance",
      description: "Full healthcare data protection compliance for medical malpractice and health law practices"
    },
    {
      title: "SOX Compliance",
      description: "Sarbanes-Oxley compliance for corporate legal departments and securities law practices"
    },
    {
      title: "GDPR Compliance",
      description: "EU data protection compliance for international law firms and privacy practices"
    },
    {
      title: "Attorney-Client Privilege",
      description: "Absolute protection of privileged communications with encrypted processing and access controls"
    },
    {
      title: "Bar Association Standards",
      description: "Compliance with ABA Model Rules and state bar ethical requirements"
    },
    {
      title: "Data Retention Policies",
      description: "Automated compliance with legal data retention and destruction requirements"
    }
  ];

  const pricing = [
    {
      name: "Legal Starter",
      price: "$8,000/month",
      description: "Perfect for solo practitioners and small firms",
      features: [
        "Up to 1,000 document reviews/month",
        "Basic contract analysis",
        "Standard legal research tools",
        "Email support",
        "Basic compliance monitoring"
      ],
      popular: false
    },
    {
      name: "Legal Professional", 
      price: "$25,000/month",
      description: "Ideal for mid-size firms and corporate legal departments",
      features: [
        "Up to 10,000 document reviews/month",
        "Advanced contract risk analysis",
        "Comprehensive legal research AI",
        "Document discovery automation",
        "Priority support and training",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Legal Enterprise",
      price: "Custom",
      description: "For large law firms and enterprise legal departments", 
      features: [
        "Unlimited document processing",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated support team",
        "SLA guarantees",
        "Advanced compliance features"
      ],
      popular: false
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
              Transform Your Legal Practice with AI - From Document Chaos to Legal Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 200+ law firms using AI to reduce document review time by 80%, improve accuracy by 95%, and focus on high-value legal work instead of repetitive tasks.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
                Get Free Legal AI Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Legal Practice Challenges That AI Can Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-destructive flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {problem.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Solutions for Legal Professionals</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <solution.icon className="h-6 w-6 text-primary" />
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-lg">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">Why This Matters:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Reduce contract review time from hours to minutes while improving accuracy and risk detection."}
                        {index === 1 && "Access comprehensive legal research in seconds rather than spending hours on manual research."}
                        {index === 2 && "Automate discovery processes that typically require teams of junior attorneys."}
                        {index === 3 && "Provide 24/7 client service while ensuring senior attorneys focus on complex legal work."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Legal AI Success Stories</h2>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">{study.stats}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-green-800">Results Achieved:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance & Security Guarantees</h2>
            <p className="text-xl text-muted-foreground">Your clients' confidentiality and regulatory compliance are our top priorities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Legal AI Solutions Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    MOST POPULAR
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{pkg.price}</CardDescription>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} onClick={openConsultationPopup}>
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading law firms already using AI to deliver better results for their clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Legal AI Assessment
            </Button>
            <Button size="lg" variant="outline" onClick={openPDFDownload}>
              Download Legal AI Guide
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

export default Legal;