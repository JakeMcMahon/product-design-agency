import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Factory, Eye, Shield, Clock, TrendingUp, Play, Search, AlertTriangle, Settings, Wrench } from "lucide-react";
import Header from "@/components/layout/Header";

const Manufacturing = () => {
  const stats = [
    { label: "Manufacturing Clients", value: "100+", icon: Factory },
    { label: "Defect Reduction", value: "95%", icon: TrendingUp },
    { label: "Quality Control Speed", value: "10x Faster", icon: Clock },
    { label: "Safety Improvement", value: "90%", icon: Shield }
  ];

  const problems = [
    {
      title: "Quality Control Bottlenecks",
      items: [
        "Manual inspections miss 15-20% of critical defects",
        "Quality control teams can't keep pace with production demands",
        "Inconsistent inspection standards across shifts and personnel",
        "Customer complaints from defective products reaching market"
      ]
    },
    {
      title: "Equipment Downtime Costs",
      items: [
        "Unplanned equipment failures cost $50,000+ per hour",
        "Maintenance schedules based on guesswork, not data",
        "Equipment sensors generate data but lack actionable insights",
        "Reactive maintenance approach leads to cascading failures"
      ]
    },
    {
      title: "Supply Chain Visibility Issues",
      items: [
        "Material tracking relies on manual processes and spreadsheets",
        "Inventory optimization limited by lack of real-time visibility",
        "Supplier quality issues discovered too late in production",
        "Demand forecasting accuracy hampered by siloed data"
      ]
    },
    {
      title: "Safety & Compliance Challenges",
      items: [
        "Workplace safety monitoring requires constant human oversight",
        "Regulatory compliance documentation consumes valuable resources",
        "Environmental monitoring systems generate alerts but lack intelligence",
        "Training effectiveness difficult to measure and optimize"
      ]
    }
  ];

  const solutions = [
    {
      title: "Quality Control Automation",
      icon: Eye,
      description: "AI-powered visual inspection and quality control systems that detect defects with superhuman accuracy",
      features: [
        "Automated visual defect detection",
        "Real-time quality metrics and reporting",
        "Statistical process control optimization",
        "Root cause analysis for quality issues",
        "Supplier quality monitoring"
      ]
    },
    {
      title: "Predictive Maintenance",
      icon: Settings,
      description: "Machine learning systems that predict equipment failures before they happen, optimizing maintenance schedules",
      features: [
        "Equipment failure prediction and early warning",
        "Optimal maintenance scheduling",
        "Parts inventory optimization",
        "Performance trend analysis",
        "Maintenance cost reduction"
      ]
    },
    {
      title: "Supply Chain Optimization",
      icon: Search,
      description: "Intelligent supply chain management with real-time visibility and predictive analytics",
      features: [
        "Demand forecasting and inventory optimization",
        "Supplier performance monitoring",
        "Material tracking and traceability",
        "Logistics optimization",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Safety Monitoring",
      icon: Shield,
      description: "AI-powered workplace safety monitoring and compliance automation for safer manufacturing environments",
      features: [
        "PPE compliance monitoring",
        "Safety incident detection and response",
        "Environmental hazard monitoring",
        "Worker behavior analysis",
        "Automated compliance reporting"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Automotive Manufacturer: 95% Defect Reduction",
      stats: "Fortune 500 company, $10M annual savings",
      description: "Global automotive manufacturer deployed AI-powered quality control across assembly lines, virtually eliminating defects while increasing production efficiency.",
      results: [
        "95% reduction in defect rates",
        "40% increase in production throughput",
        "$10M annual savings in rework costs",
        "99.5% customer quality satisfaction"
      ]
    },
    {
      title: "Steel Production: Predictive Maintenance Success",
      stats: "Integrated steel mill, 60% downtime reduction",
      description: "Large steel manufacturer implemented predictive maintenance AI across critical equipment, dramatically reducing unplanned downtime and maintenance costs.",
      results: [
        "60% reduction in unplanned downtime",
        "45% decrease in maintenance costs",
        "30% increase in equipment lifespan",
        "$5M annual operational savings"
      ]
    },
    {
      title: "Electronics Assembly: Smart Supply Chain",
      stats: "Electronics manufacturer, 80% inventory optimization",
      description: "Consumer electronics company optimized supply chain with AI-driven demand forecasting and inventory management.",
      results: [
        "80% improvement in inventory turnover",
        "90% reduction in stockouts",
        "50% decrease in carrying costs",
        "25% improvement in on-time delivery"
      ]
    }
  ];

  const industrySegments = [
    { name: "Automotive", icon: "🚗", description: "Assembly line optimization, quality control" },
    { name: "Aerospace", icon: "✈️", description: "Precision manufacturing, safety compliance" },
    { name: "Electronics", icon: "📱", description: "PCB inspection, component testing" },
    { name: "Food & Beverage", icon: "🍎", description: "Safety monitoring, packaging quality" },
    { name: "Pharmaceuticals", icon: "💊", description: "GMP compliance, batch quality control" },
    { name: "Textiles", icon: "🧵", description: "Fabric inspection, pattern matching" },
    { name: "Metals & Mining", icon: "⚒️", description: "Equipment monitoring, safety systems" },
    { name: "Chemicals", icon: "🧪", description: "Process optimization, safety monitoring" },
    { name: "Heavy Machinery", icon: "🏗️", description: "Predictive maintenance, quality assurance" }
  ];

  const complianceFeatures = [
    {
      title: "ISO 9001 Quality Management",
      description: "Complete quality management system compliance with automated documentation and reporting"
    },
    {
      title: "ISO 14001 Environmental",
      description: "Environmental management compliance with automated monitoring and reporting"
    },
    {
      title: "OSHA Safety Standards",
      description: "Workplace safety compliance with automated incident tracking and reporting"
    },
    {
      title: "FDA/GMP Compliance",
      description: "Good Manufacturing Practice compliance for pharmaceutical and food production"
    },
    {
      title: "Six Sigma Integration",
      description: "Statistical process control and continuous improvement methodology support"
    },
    {
      title: "Industry 4.0 Standards",
      description: "Smart manufacturing standards compliance with IoT and cyber-physical systems"
    }
  ];

  const pricing = [
    {
      name: "Manufacturing Starter",
      price: "$15,000/month",
      description: "Perfect for small to medium manufacturing operations",
      features: [
        "Up to 5 production lines",
        "Basic quality control AI",
        "Equipment monitoring dashboards",
        "Standard safety monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Manufacturing Professional",
      price: "$45,000/month",
      description: "Ideal for large manufacturing facilities",
      features: [
        "Up to 25 production lines",
        "Advanced predictive maintenance",
        "Supply chain optimization",
        "Comprehensive safety systems",
        "Priority support and training",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Manufacturing Enterprise",
      price: "Custom",
      description: "For multi-facility manufacturing operations",
      features: [
        "Unlimited production lines",
        "Custom AI model development",
        "Multi-facility deployment",
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
              Transform Manufacturing with AI - From Manual Processes to Smart Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 100+ manufacturers using AI to reduce defects by 95%, optimize equipment performance, and create safer, more efficient production environments.
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
                Get Free Manufacturing AI Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manufacturing Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">AI solutions tailored to your industry's specific requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industrySegments.map((segment, index) => (
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
              Manufacturing Challenges That AI Can Solve
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Solutions for Manufacturing</h2>
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
                      <h4 className="font-semibold mb-2 text-primary">Business Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Reduce quality-related costs by up to 90% while improving customer satisfaction and brand reputation."}
                        {index === 1 && "Cut maintenance costs by 40% and eliminate costly unplanned downtime with data-driven maintenance strategies."}
                        {index === 2 && "Optimize inventory levels by 30% while improving on-time delivery and reducing supply chain risks."}
                        {index === 3 && "Reduce workplace incidents by 90% while ensuring full regulatory compliance and protecting your workforce."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manufacturing AI Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Operational Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manufacturing Standards & Compliance</h2>
            <p className="text-xl text-muted-foreground">Meeting the highest manufacturing and safety standards</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manufacturing AI Solutions Pricing</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Manufacturing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading manufacturers improving efficiency, quality, and safety with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              Get Free Manufacturing AI Assessment
            </Button>
            <Button size="lg" variant="outline">
              Download Manufacturing AI Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;