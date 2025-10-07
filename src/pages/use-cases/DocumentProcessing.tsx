import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Zap, Clock, TrendingUp, Search, AlertTriangle, Eye, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const DocumentProcessing = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Processing Speed", value: "1000x Faster", icon: Zap },
    { label: "Accuracy Rate", value: "99.8%", icon: Eye },
    { label: "Cost Reduction", value: "85%", icon: TrendingUp },
    { label: "Documents Daily", value: "50K+", icon: FileText }
  ];

  const problems = [
    {
      title: "The Manual Processing Nightmare",
      items: [
        "Teams spend 40+ hours weekly on repetitive document data entry",
        "Human error rates reach 15% in manual document processing",
        "Critical information gets lost in mountains of unstructured documents",
        "Document backlogs grow faster than teams can process them"
      ]
    },
    {
      title: "Compliance & Risk Issues",
      items: [
        "Manual document reviews miss regulatory compliance requirements",
        "Audit trails are incomplete due to inconsistent processing",
        "Document classification errors create legal and financial risks",
        "Version control and document tracking becomes impossible at scale"
      ]
    },
    {
      title: "Business Impact",
      items: [
        "Customer onboarding delayed by weeks due to document processing bottlenecks",
        "Decision-making hampered by inability to quickly access document insights",
        "Competitive disadvantage as competitors process documents faster",
        "Revenue lost due to slow contract processing and approvals"
      ]
    }
  ];

  const solutions = [
    {
      title: "Intelligent OCR & Data Extraction",
      description: "Advanced optical character recognition that understands context and extracts structured data from any document type",
      features: [
        "Multi-language document recognition",
        "Handwritten text extraction",
        "Table and form data capture",
        "Image and signature extraction",
        "Poor quality document enhancement"
      ]
    },
    {
      title: "Document Classification & Routing",
      description: "AI-powered document categorization that automatically sorts and routes documents to appropriate workflows",
      features: [
        "Automatic document type identification",
        "Content-based classification",
        "Priority scoring and routing",
        "Duplicate detection and removal",
        "Workflow automation triggers"
      ]
    },
    {
      title: "Content Analysis & Insights",
      description: "Deep document analysis that extracts meaning, sentiment, and actionable insights from unstructured content",
      features: [
        "Key information extraction",
        "Sentiment and risk analysis",
        "Entity recognition and linking",
        "Compliance checking and flagging",
        "Trend analysis across document sets"
      ]
    }
  ];

  const useCaseScenarios = [
    {
      industry: "Legal Firms",
      scenario: "Contract & Legal Document Processing",
      challenge: "Law firm processing 500+ contracts monthly with 3-day average review time",
      solution: "AI extracts key clauses, identifies risks, and generates summaries in minutes",
      results: [
        "Review time reduced from 3 days to 30 minutes",
        "95% improvement in risk identification",
        "80% reduction in processing costs",
        "100% audit trail compliance"
      ]
    },
    {
      industry: "Healthcare",
      scenario: "Medical Records & Insurance Processing",
      challenge: "Hospital processing 10K+ patient documents daily with manual data entry",
      solution: "Automated extraction of patient data, insurance information, and medical codes",
      results: [
        "99.5% accuracy in medical data extraction",
        "75% reduction in processing time",
        "90% decrease in insurance claim errors",
        "HIPAA compliant automated workflows"
      ]
    },
    {
      industry: "Financial Services",
      scenario: "Loan Application & KYC Processing",
      challenge: "Bank processing 1K+ loan applications weekly with manual verification",
      solution: "AI extracts financial data, verifies documents, and flags compliance issues",
      results: [
        "Loan processing time cut from weeks to hours",
        "99% accuracy in document verification",
        "60% reduction in compliance violations",
        "10x increase in application throughput"
      ]
    },
    {
      industry: "Manufacturing",
      scenario: "Invoice & Purchase Order Processing",
      challenge: "Manufacturer processing 5K+ invoices monthly with manual matching",
      solution: "Automated invoice data extraction and three-way matching with POs and receipts",
      results: [
        "Invoice processing time reduced by 90%",
        "99.8% accuracy in data extraction",
        "85% reduction in processing costs",
        "Real-time payment tracking and reporting"
      ]
    }
  ];

  const documentTypes = [
    { type: "Contracts & Agreements", icon: "📋" },
    { type: "Financial Statements", icon: "💰" },
    { type: "Legal Documents", icon: "⚖️" },
    { type: "Medical Records", icon: "🏥" },
    { type: "Insurance Forms", icon: "🛡️" },
    { type: "Tax Documents", icon: "📊" },
    { type: "Purchase Orders", icon: "🛒" },
    { type: "Employee Records", icon: "👥" },
    { type: "Compliance Reports", icon: "✅" }
  ];

  const implementation = [
    {
      phase: "Assessment & Planning (Week 1)",
      tasks: [
        "Document volume and type analysis",
        "Current workflow mapping",
        "Integration requirements planning",
        "Success metrics definition"
      ]
    },
    {
      phase: "Setup & Configuration (Week 2-3)",
      tasks: [
        "AI model training on your documents",
        "Workflow automation setup",
        "Integration with existing systems",
        "Quality assurance testing"
      ]
    },
    {
      phase: "Deployment & Optimization (Week 4)",
      tasks: [
        "Production deployment",
        "Team training and handoff",
        "Performance monitoring setup",
        "Continuous improvement loops"
      ]
    }
  ];

  const pricing = [
    {
      name: "Document Starter",
      price: "$2,500/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5,000 documents/month",
        "Basic OCR and data extraction",
        "Standard document types",
        "Email support",
        "Basic reporting dashboard"
      ],
      popular: false
    },
    {
      name: "Document Professional",
      price: "$8,000/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50,000 documents/month",
        "Advanced AI processing",
        "Custom document types",
        "API integrations",
        "Priority support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Document Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited document processing",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated support team",
        "SLA guarantees",
        "Multi-tenant architecture"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stop Drowning in Documents - Process 1000x Faster with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your document processing from manual chaos to intelligent automation. Extract, classify, and analyze any document type with 99.8% accuracy and lightning speed.
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
                Get Free Document Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Document Types We Process</h2>
            <p className="text-xl text-muted-foreground">AI-powered processing for any document type across all industries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {documentTypes.map((doc, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="font-semibold text-lg">{doc.type}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Hidden Costs of Manual Document Processing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Document Processing Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <FileText className="h-6 w-6 text-primary" />
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-lg">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Capabilities:</h4>
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
                      <h4 className="font-semibold mb-2 text-primary">Business Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Eliminate manual data entry and extract structured information from any document format with superhuman accuracy."}
                        {index === 1 && "Automatically organize and route documents to appropriate teams and workflows, reducing processing delays."}
                        {index === 2 && "Unlock insights hidden in your documents to make faster, data-driven decisions and identify risks early."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Scenarios Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-World Success Stories</h2>
          </div>

          <div className="space-y-8">
            {useCaseScenarios.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="mb-2">{useCase.industry}</Badge>
                      <CardTitle className="text-xl">{useCase.scenario}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-destructive">Challenge:</h4>
                      <p className="text-muted-foreground mb-4">{useCase.challenge}</p>
                      <h4 className="font-semibold mb-2 text-primary">Solution:</h4>
                      <p className="text-muted-foreground">{useCase.solution}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-green-800">Results Achieved:</h4>
                      <ul className="space-y-2">
                        {useCase.results.map((result, resultIndex) => (
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

      {/* Implementation Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">4-Week Implementation Process</h2>
          </div>

          <div className="space-y-6">
            {implementation.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Document Processing Packages</h2>
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
                    Get Quote
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Document Processing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of organizations processing documents 1000x faster with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Analysis
            </Button>
          </div>
        </div>
      </section>
      
      <ConsultationPopup 
        isOpen={isOpen}
        onClose={closeConsultationPopup}
        title={popupConfig.title}
        description={popupConfig.description}
      />
      
      <Footer />
    </div>
  );
};

export default DocumentProcessing;