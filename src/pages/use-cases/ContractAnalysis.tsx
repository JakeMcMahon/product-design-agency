import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Zap, Clock, TrendingUp, Search, AlertTriangle, Scale, Shield, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const ContractAnalysis = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Review Speed", value: "50x Faster", icon: Zap },
    { label: "Risk Detection", value: "95% Better", icon: AlertTriangle },
    { label: "Cost Savings", value: "80%", icon: TrendingUp },
    { label: "Contracts Analyzed", value: "100K+", icon: FileText }
  ];

  const problems = [
    {
      title: "The Contract Review Bottleneck",
      items: [
        "Legal teams spend 60-80% of time on repetitive contract review",
        "Average contract review takes 3-5 days for simple agreements",
        "Complex contracts require multiple attorney reviews creating delays",
        "Client deals stall while contracts sit in review queues"
      ]
    },
    {
      title: "Risk & Compliance Blind Spots",
      items: [
        "Hidden risks buried in complex legal language go unnoticed",
        "Inconsistent review standards across different attorneys",
        "Regulatory compliance requirements missed under time pressure",
        "Contract deviations from standard terms create legal exposure"
      ]
    },
    {
      title: "Business Impact & Costs",
      items: [
        "$200K+ annual cost for senior attorney time on routine reviews",
        "Deals lost due to slow contract turnaround times",
        "Client satisfaction decreases with lengthy approval processes",
        "Competitive disadvantage against firms with faster processes"
      ]
    }
  ];

  const solutions = [
    {
      title: "Intelligent Contract Parsing",
      description: "AI that understands legal language and extracts key terms, clauses, and obligations from any contract type",
      features: [
        "Automatic clause identification and extraction",
        "Key term highlighting and summarization",
        "Contract structure mapping and navigation",
        "Cross-reference detection and linking",
        "Multi-language contract support"
      ]
    },
    {
      title: "Risk Assessment & Flagging",
      description: "Advanced AI analysis that identifies potential risks, compliance issues, and problematic terms",
      features: [
        "Automated risk scoring and prioritization",
        "Compliance requirement verification",
        "Unfavorable term detection and flagging",
        "Liability and indemnification analysis",
        "Termination and renewal clause review"
      ]
    },
    {
      title: "Contract Comparison & Analysis",
      description: "Intelligent comparison tools that identify deviations from standard terms and precedent agreements",
      features: [
        "Deviation detection from standard templates",
        "Side-by-side contract comparison",
        "Version control and change tracking",
        "Precedent clause library matching",
        "Negotiation point identification"
      ]
    }
  ];

  const contractTypes = [
    { type: "Service Agreements", icon: "🤝", risk: "Medium", volume: "High" },
    { type: "Employment Contracts", icon: "👔", risk: "High", volume: "Medium" },
    { type: "NDAs", icon: "🔒", risk: "Low", volume: "Very High" },
    { type: "Vendor Agreements", icon: "🏪", risk: "Medium", volume: "High" },
    { type: "Real Estate Leases", icon: "🏢", risk: "High", volume: "Medium" },
    { type: "M&A Documents", icon: "💼", risk: "Very High", volume: "Low" },
    { type: "Software Licenses", icon: "💻", risk: "Medium", volume: "High" },
    { type: "Distribution Agreements", icon: "🚛", risk: "High", volume: "Medium" },
    { type: "Partnership Agreements", icon: "🤝", risk: "High", volume: "Low" }
  ];

  const useCaseScenarios = [
    {
      company: "BigLaw Firm",
      scenario: "M&A Due Diligence Contract Review",
      challenge: "Review 500+ contracts in 2 weeks for $2B acquisition",
      solution: "AI analyzes all contracts simultaneously, flagging risks and key terms",
      results: [
        "Review completed in 3 days instead of 2 weeks",
        "100% coverage vs. 60% with manual review",
        "Critical liability issues identified early",
        "$500K saved in partner time"
      ]
    },
    {
      company: "Fortune 500 Corp",
      scenario: "Vendor Contract Standardization",
      challenge: "Standardize 2,000+ vendor contracts across subsidiaries",
      solution: "AI identifies non-standard terms and suggests modifications",
      results: [
        "90% of contracts standardized automatically",
        "Risk exposure reduced by 40%",
        "Contract processing time cut by 75%",
        "$2M annual savings in legal costs"
      ]
    },
    {
      company: "Tech Startup",
      scenario: "Employment Agreement Processing",
      challenge: "Scale hiring with consistent, compliant employment contracts",
      solution: "AI ensures all contracts meet local laws and company standards",
      results: [
        "100% compliance with local employment laws",
        "Contract generation time reduced from days to minutes",
        "Zero legal disputes from contract issues",
        "Hiring velocity increased by 200%"
      ]
    }
  ];

  const riskCategories = [
    {
      category: "Liability & Indemnification",
      description: "Unlimited liability exposure, broad indemnification clauses",
      impact: "High",
      frequency: "Common"
    },
    {
      category: "Termination & Renewal",
      description: "Unfavorable termination terms, auto-renewal traps",
      impact: "Medium",
      frequency: "Very Common"
    },
    {
      category: "Intellectual Property",
      description: "Broad IP assignments, inadequate IP protection",
      impact: "High",
      frequency: "Common"
    },
    {
      category: "Data & Privacy",
      description: "GDPR non-compliance, inadequate data protection",
      impact: "Very High",
      frequency: "Common"
    },
    {
      category: "Financial Terms",
      description: "Payment terms, penalty clauses, cost escalations",
      impact: "Medium",
      frequency: "Very Common"
    },
    {
      category: "Regulatory Compliance",
      description: "Industry-specific regulation violations",
      impact: "Very High",
      frequency: "Moderate"
    }
  ];

  const implementation = [
    {
      phase: "Contract Audit & Setup (Week 1)",
      tasks: [
        "Analyze existing contract types and volumes",
        "Configure AI models for your contract templates",
        "Set up risk parameters and scoring criteria",
        "Integrate with document management systems"
      ]
    },
    {
      phase: "Training & Calibration (Week 2-3)",
      tasks: [
        "Train AI on your historical contracts",
        "Calibrate risk scoring against attorney reviews",
        "Set up workflow automation and routing",
        "Configure reporting and analytics dashboards"
      ]
    },
    {
      phase: "Production Deployment (Week 4)",
      tasks: [
        "Deploy AI contract analysis system",
        "Train legal team on AI-assisted review process",
        "Establish quality assurance protocols",
        "Monitor performance and optimization"
      ]
    }
  ];

  const pricing = [
    {
      name: "Contract Starter",
      price: "$5,000/month",
      description: "Perfect for small law firms and in-house teams",
      features: [
        "Up to 500 contracts/month",
        "Basic contract analysis",
        "Standard risk assessment",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Contract Professional",
      price: "$15,000/month",
      description: "Ideal for mid-size firms and corporate legal",
      features: [
        "Up to 5,000 contracts/month",
        "Advanced risk analysis",
        "Custom contract types",
        "Priority support",
        "Advanced analytics",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Contract Enterprise",
      price: "Custom",
      description: "For large firms and enterprise legal departments",
      features: [
        "Unlimited contract processing",
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
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stop Missing Contract Risks - Review 50x Faster with AI Legal Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform contract review from weeks to minutes. AI-powered analysis identifies risks, extracts key terms, and ensures compliance across all contract types.
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
                Get Free Contract Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contract Types We Analyze</h2>
            <p className="text-xl text-muted-foreground">AI-powered analysis for every contract type in your practice</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{contract.icon}</div>
                    <h3 className="font-semibold text-lg">{contract.type}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Risk Level:</span>
                    <Badge variant={contract.risk === 'Very High' ? 'destructive' : contract.risk === 'High' ? 'destructive' : 'secondary'}>
                      {contract.risk}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Volume:</span>
                    <Badge variant="outline">{contract.volume}</Badge>
                  </div>
                </div>
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
              The True Cost of Manual Contract Review
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

      {/* Risk Categories Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contract Risks Our AI Detects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {riskCategories.map((risk, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{risk.category}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={risk.impact === 'Very High' ? 'destructive' : risk.impact === 'High' ? 'destructive' : 'secondary'}>
                        {risk.impact}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{risk.description}</p>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Frequency:</span>
                    <Badge variant="outline">{risk.frequency}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Contract Analysis Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Scale className="h-6 w-6 text-primary" />
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
                      <h4 className="font-semibold mb-2 text-primary">Legal Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Instantly extract and summarize key contract terms, reducing review time from hours to minutes while ensuring nothing is missed."}
                        {index === 1 && "Automatically identify potential legal risks and compliance issues before they become costly problems."}
                        {index === 2 && "Quickly identify deviations from standard terms and compare against precedent agreements for consistent contracting."}
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contract Analysis Success Stories</h2>
          </div>

          <div className="space-y-8">
            {useCaseScenarios.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="mb-2">{useCase.company}</Badge>
                      <CardTitle className="text-xl">{useCase.scenario}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-destructive">Challenge:</h4>
                      <p className="text-muted-foreground mb-4">{useCase.challenge}</p>
                      <h4 className="font-semibold mb-2 text-primary">AI Solution:</h4>
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
      <section className="py-20 px-4">
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
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contract Analysis Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Contract Reviews?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading law firms and legal departments already using AI to review contracts 50x faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Contract Analysis
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

export default ContractAnalysis;