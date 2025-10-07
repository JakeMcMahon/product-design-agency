import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Eye, Zap, Clock, TrendingUp, Search, AlertTriangle, Shield, Settings, Factory } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const QualityControl = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Defect Detection", value: "99.5%", icon: Eye },
    { label: "Inspection Speed", value: "100x Faster", icon: Zap },
    { label: "Cost Reduction", value: "75%", icon: TrendingUp },
    { label: "Quality Improvement", value: "95%", icon: Shield }
  ];

  const problems = [
    {
      title: "Manual Inspection Limitations",
      items: [
        "Human inspectors miss 15-20% of critical defects under time pressure",
        "Inspection quality varies significantly between shifts and personnel",
        "Production speed limited by manual inspection bottlenecks",
        "Fatigue and repetitive stress impact inspection accuracy over time"
      ]
    },
    {
      title: "Quality Consistency Challenges",
      items: [
        "Inconsistent quality standards across different production lines",
        "Subjective quality assessments lead to disputes and rework",
        "Lack of real-time quality data prevents proactive adjustments",
        "Quality issues discovered too late in the production process"
      ]
    },
    {
      title: "Cost & Compliance Impact",
      items: [
        "Customer returns and complaints damage brand reputation",
        "Regulatory compliance failures result in costly shutdowns",
        "Rework costs consume 5-15% of total manufacturing budget",
        "Quality-related delays impact delivery schedules and customer satisfaction"
      ]
    }
  ];

  const solutions = [
    {
      title: "Automated Visual Inspection",
      description: "AI-powered computer vision that detects defects, anomalies, and quality issues with superhuman accuracy",
      features: [
        "Real-time defect detection and classification",
        "Multi-camera inspection system integration",
        "Surface defect analysis (scratches, dents, discoloration)",
        "Dimensional accuracy verification",
        "Assembly completeness and correctness checks"
      ]
    },
    {
      title: "Statistical Process Control",
      description: "Intelligent monitoring of production processes with predictive quality analytics and control recommendations",
      features: [
        "Real-time process parameter monitoring",
        "Statistical trend analysis and alerts",
        "Root cause analysis for quality issues",
        "Process optimization recommendations",
        "Quality prediction and early warning systems"
      ]
    },
    {
      title: "Automated Quality Reporting",
      description: "Comprehensive quality management with automated documentation, compliance tracking, and reporting",
      features: [
        "Real-time quality dashboards and KPIs",
        "Automated compliance documentation",
        "Quality trend analysis and reporting",
        "Supplier quality performance tracking",
        "Customer quality feedback integration"
      ]
    }
  ];

  const industryApplications = [
    {
      industry: "Automotive Manufacturing",
      applications: [
        "Engine component inspection",
        "Paint finish quality assessment",
        "Weld joint verification",
        "Final assembly validation"
      ],
      defectTypes: ["Surface defects", "Dimensional variance", "Assembly errors"]
    },
    {
      industry: "Electronics Assembly",
      applications: [
        "PCB component placement verification",
        "Solder joint quality inspection",
        "Screen and display testing",
        "Functional testing automation"
      ],
      defectTypes: ["Missing components", "Solder defects", "Alignment issues"]
    },
    {
      industry: "Food & Beverage",
      applications: [
        "Package integrity inspection",
        "Fill level verification",
        "Label placement and quality",
        "Contamination detection"
      ],
      defectTypes: ["Package damage", "Under/over fill", "Foreign objects"]
    },
    {
      industry: "Pharmaceuticals",
      applications: [
        "Tablet integrity inspection",
        "Packaging verification",
        "Label accuracy checking",
        "Serialization validation"
      ],
      defectTypes: ["Cracked tablets", "Missing labels", "Incorrect dosage"]
    }
  ];

  const qualityMetrics = [
    {
      metric: "First Pass Yield",
      before: "85%",
      after: "98%",
      improvement: "+15%",
      impact: "Reduced rework costs by $2M annually"
    },
    {
      metric: "Defect Detection Rate",
      before: "80%",
      after: "99.5%",
      improvement: "+24%",
      impact: "Eliminated customer quality complaints"
    },
    {
      metric: "Inspection Time",
      before: "30 seconds",
      after: "0.3 seconds",
      improvement: "100x faster",
      impact: "Increased production throughput by 40%"
    },
    {
      metric: "Quality Costs",
      before: "$500K/month",
      after: "$125K/month",
      improvement: "-75%",
      impact: "Annual savings of $4.5M"
    }
  ];

  const useCaseScenarios = [
    {
      company: "Automotive Tier 1 Supplier",
      scenario: "Engine Component Quality Control",
      challenge: "Inspect 10,000+ engine components daily with zero defect tolerance",
      solution: "AI vision system inspects every component for dimensional accuracy and surface defects",
      results: [
        "99.8% defect detection accuracy",
        "Zero customer quality complaints",
        "40% increase in inspection speed",
        "$3M annual cost savings"
      ]
    },
    {
      company: "Electronics Manufacturer",
      scenario: "PCB Assembly Inspection",
      challenge: "Verify correct placement and soldering of 50+ components per board",
      solution: "Multi-camera AI system inspects component placement and solder quality",
      results: [
        "95% reduction in field failures",
        "80% faster inspection process",
        "99.9% component placement accuracy",
        "$2.5M savings in warranty costs"
      ]
    },
    {
      company: "Food Processing Plant",
      scenario: "Package Integrity & Safety",
      challenge: "Ensure package integrity and detect contamination in 24/7 operations",
      solution: "AI-powered inspection detects package damage and foreign objects",
      results: [
        "100% contamination detection rate",
        "99.7% package integrity accuracy",
        "50% reduction in product recalls",
        "$5M saved in recall costs"
      ]
    }
  ];

  const implementation = [
    {
      phase: "Assessment & Design (Week 1-2)",
      tasks: [
        "Production line quality analysis",
        "Defect type identification and prioritization",
        "Camera positioning and lighting design",
        "Integration planning with existing systems"
      ]
    },
    {
      phase: "System Development (Week 3-5)",
      tasks: [
        "AI model training on your products",
        "Vision system hardware installation",
        "Software integration and testing",
        "Quality threshold calibration"
      ]
    },
    {
      phase: "Deployment & Optimization (Week 6-8)",
      tasks: [
        "Production line deployment",
        "Operator training and certification",
        "Performance monitoring and tuning",
        "Continuous learning implementation"
      ]
    }
  ];

  const pricing = [
    {
      name: "Quality Starter",
      price: "$10,000/month",
      description: "Perfect for single production line quality control",
      features: [
        "Single production line coverage",
        "Basic defect detection AI",
        "Standard reporting dashboard",
        "Email support",
        "Basic integration support"
      ],
      popular: false
    },
    {
      name: "Quality Professional",
      price: "$30,000/month",
      description: "Ideal for multi-line manufacturing facilities",
      features: [
        "Up to 5 production lines",
        "Advanced defect classification",
        "Statistical process control",
        "Real-time quality analytics",
        "Priority support and training",
        "Custom defect models"
      ],
      popular: true
    },
    {
      name: "Quality Enterprise",
      price: "Custom",
      description: "For large-scale manufacturing operations",
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
              Stop Missing Defects - Achieve 99.5% Quality Control with AI Vision
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform manufacturing quality control with AI-powered visual inspection that detects defects 100x faster than human inspectors with superhuman accuracy.
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
                Get Free Quality Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics Comparison */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Transformation Results</h2>
            <p className="text-xl text-muted-foreground">See the dramatic improvements our clients achieve</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {qualityMetrics.map((metric, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{metric.metric}</h3>
                  <Badge className="bg-green-500">{metric.improvement}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Before AI</div>
                    <div className="text-2xl font-bold text-destructive">{metric.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">With AI</div>
                    <div className="text-2xl font-bold text-green-600">{metric.after}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{metric.impact}</p>
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
              Quality Control Challenges Costing You Millions
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

      {/* Industry Applications Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Control Across Industries</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Factory className="h-5 w-5 text-primary" />
                    {industry.industry}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Applications:</h4>
                      <ul className="space-y-1">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Common Defect Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.defectTypes.map((defect, defectIndex) => (
                          <Badge key={defectIndex} variant="outline">{defect}</Badge>
                        ))}
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Quality Control Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Eye className="h-6 w-6 text-primary" />
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
                      <h4 className="font-semibold mb-2 text-primary">Manufacturing Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Eliminate human inspection errors and detect defects that are impossible for humans to see consistently."}
                        {index === 1 && "Predict and prevent quality issues before they occur, reducing waste and improving overall equipment effectiveness."}
                        {index === 2 && "Maintain complete quality traceability and compliance documentation automatically across all production."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Control Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Quality Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">8-Week Quality AI Implementation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Control AI Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Perfect Quality Control?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading manufacturers already achieving 99.5% defect detection with AI quality control
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Quality Assessment
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

export default QualityControl;