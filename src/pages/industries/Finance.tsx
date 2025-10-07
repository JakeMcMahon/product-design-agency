import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, Shield, Clock, TrendingUp, Play, Search, AlertTriangle, FileText, Users, BarChart3 } from "lucide-react";
import Header from "@/components/layout/Header";

const Finance = () => {
  const stats = [
    { label: "Financial Institutions", value: "75+", icon: DollarSign },
    { label: "Fraud Detection Rate", value: "99.8%", icon: Shield },
    { label: "Processing Speed", value: "95% Faster", icon: Clock },
    { label: "Risk Reduction", value: "80%", icon: TrendingUp }
  ];

  const problems = [
    {
      title: "Fraud Detection Challenges",
      items: [
        "Traditional rule-based systems miss sophisticated fraud patterns",
        "High false positive rates disrupt legitimate customer transactions",
        "Manual review processes create delays and customer friction",
        "New fraud schemes emerge faster than detection systems can adapt"
      ]
    },
    {
      title: "Risk Assessment Bottlenecks",
      items: [
        "Credit decisions rely on limited historical data points",
        "Manual underwriting processes slow loan approvals to weeks",
        "Market risk models fail to capture complex interdependencies",
        "Regulatory stress testing requires extensive manual modeling"
      ]
    },
    {
      title: "Document Processing Inefficiencies",
      items: [
        "Loan applications require extensive manual data entry and verification",
        "KYC and AML compliance documentation consumes significant resources",
        "Financial statements analysis limited by manual processing capacity",
        "Regulatory reporting requires armies of analysts and compliance staff"
      ]
    },
    {
      title: "Customer Service Limitations",
      items: [
        "Call centers struggle with complex financial product inquiries",
        "Customer onboarding processes create friction and abandonment",
        "Personalized financial advice limited by advisor availability",
        "After-hours customer support provides limited functionality"
      ]
    }
  ];

  const solutions = [
    {
      title: "Fraud Detection & Prevention",
      icon: Shield,
      description: "Advanced machine learning systems that detect fraudulent transactions in real-time with minimal false positives",
      features: [
        "Real-time transaction monitoring and scoring",
        "Behavioral pattern analysis and anomaly detection",
        "Cross-channel fraud detection (online, mobile, ATM)",
        "Adaptive learning from new fraud patterns",
        "Automated suspicious activity reporting (SAR)"
      ]
    },
    {
      title: "Risk Assessment & Underwriting",
      icon: BarChart3,
      description: "AI-powered risk analysis and automated underwriting for faster, more accurate lending decisions",
      features: [
        "Alternative data sources for credit scoring",
        "Automated loan underwriting and approval",
        "Portfolio risk monitoring and optimization",
        "Stress testing and scenario analysis",
        "Regulatory capital optimization"
      ]
    },
    {
      title: "Document Intelligence",
      icon: FileText,
      description: "Automated processing of financial documents, statements, and regulatory filings with high accuracy",
      features: [
        "Financial statement analysis and extraction",
        "KYC/AML document verification",
        "Regulatory filing automation",
        "Contract analysis and risk identification",
        "Tax document processing"
      ]
    },
    {
      title: "Customer Experience Enhancement",
      icon: Users,
      description: "AI-powered customer service and personalized financial advisory services available 24/7",
      features: [
        "Intelligent chatbots for customer inquiries",
        "Personalized product recommendations",
        "Automated customer onboarding",
        "Investment portfolio analysis and advice",
        "Multi-language customer support"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Regional Bank: 99.8% Fraud Detection Accuracy",
      stats: "$50B+ assets, $25M fraud prevented annually",
      description: "Mid-size regional bank deployed AI fraud detection system, dramatically improving detection rates while reducing false positives by 75%.",
      results: [
        "99.8% fraud detection accuracy",
        "75% reduction in false positives",
        "$25M+ fraud prevented annually",
        "90% improvement in customer satisfaction"
      ]
    },
    {
      title: "Credit Union: Automated Lending Platform",
      stats: "500K+ members, 80% faster loan approvals",
      description: "Large credit union implemented AI-powered underwriting, enabling instant loan decisions while maintaining low default rates.",
      results: [
        "80% reduction in loan processing time",
        "50% increase in loan approval volume",
        "95% automated decision rate",
        "30% improvement in portfolio performance"
      ]
    },
    {
      title: "Investment Firm: Regulatory Compliance Automation",
      stats: "$10B+ AUM, 90% compliance automation",
      description: "Asset management firm automated regulatory reporting and compliance monitoring, reducing compliance costs by 60%.",
      results: [
        "90% automation of regulatory reporting",
        "60% reduction in compliance costs",
        "100% accuracy in filing deadlines",
        "50% faster response to regulatory changes"
      ]
    }
  ];

  const financialSegments = [
    { name: "Commercial Banking", icon: "🏦", description: "Lending, deposits, treasury management" },
    { name: "Investment Banking", icon: "📈", description: "M&A analysis, IPO processing, research" },
    { name: "Asset Management", icon: "💼", description: "Portfolio optimization, risk analysis" },
    { name: "Insurance", icon: "🛡️", description: "Claims processing, underwriting, fraud detection" },
    { name: "Credit Unions", icon: "🤝", description: "Member services, lending, compliance" },
    { name: "Fintech", icon: "💳", description: "Digital banking, payments, robo-advisory" },
    { name: "Wealth Management", icon: "💎", description: "Client advisory, portfolio management" },
    { name: "Mortgage Lending", icon: "🏠", description: "Loan origination, underwriting, servicing" },
    { name: "Capital Markets", icon: "📊", description: "Trading, risk management, compliance" }
  ];

  const complianceFeatures = [
    {
      title: "SOX Compliance",
      description: "Sarbanes-Oxley compliance with automated financial reporting and internal controls"
    },
    {
      title: "Basel III/IV",
      description: "Banking regulatory compliance with automated risk calculation and capital adequacy reporting"
    },
    {
      title: "GDPR & Privacy",
      description: "Data protection compliance for customer financial information across global operations"
    },
    {
      title: "AML/KYC",
      description: "Anti-money laundering and know your customer compliance with automated monitoring"
    },
    {
      title: "PCI DSS",
      description: "Payment card industry data security standards compliance for transaction processing"
    },
    {
      title: "Dodd-Frank",
      description: "Financial reform compliance including stress testing and risk management requirements"
    }
  ];

  const pricing = [
    {
      name: "Financial Starter",
      price: "$20,000/month",
      description: "Perfect for community banks and credit unions",
      features: [
        "Up to 100K transactions/month",
        "Basic fraud detection",
        "Document processing (5K docs/month)",
        "Standard compliance monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Financial Professional",
      price: "$60,000/month",
      description: "Ideal for regional banks and financial services",
      features: [
        "Up to 1M transactions/month",
        "Advanced fraud detection & prevention",
        "Automated underwriting systems",
        "Comprehensive document intelligence",
        "Priority support and training",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Financial Enterprise",
      price: "Custom",
      description: "For large banks and financial institutions",
      features: [
        "Unlimited transaction processing",
        "Custom AI model development",
        "Multi-entity deployment",
        "Dedicated support team",
        "Advanced analytics platform",
        "White-label solutions"
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
              Revolutionize Finance with AI - From Risk to Reward, Faster and Safer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 75+ financial institutions using AI to achieve 99.8% fraud detection rates, 95% faster processing, and 80% risk reduction while enhancing customer experience.
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
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                Get Free Financial AI Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Segments Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Services We Transform</h2>
            <p className="text-xl text-muted-foreground">AI solutions designed for every segment of financial services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {financialSegments.map((segment, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{segment.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{segment.name}</h3>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
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
              Financial Services Challenges That AI Can Solve
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Solutions for Financial Services</h2>
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
                      <h4 className="font-semibold mb-2 text-primary">Financial Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Prevent millions in fraud losses while improving customer experience with 99.8% detection accuracy and minimal false positives."}
                        {index === 1 && "Accelerate lending decisions from weeks to minutes while maintaining low default rates and regulatory compliance."}
                        {index === 2 && "Reduce document processing costs by 90% while improving accuracy and compliance with automated intelligent extraction."}
                        {index === 3 && "Enhance customer satisfaction and retention while reducing service costs with 24/7 AI-powered assistance."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial AI Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Financial Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Regulatory Compliance</h2>
            <p className="text-xl text-muted-foreground">Meeting the strictest financial services regulations and standards</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial AI Solutions Pricing</h2>
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
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Services?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading financial institutions reducing risk and enhancing customer experience with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              Get Free Financial AI Assessment
            </Button>
            <Button size="lg" variant="outline">
              Download Financial AI Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;