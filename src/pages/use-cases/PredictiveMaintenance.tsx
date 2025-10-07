import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Settings, Zap, Clock, TrendingUp, Eye, AlertTriangle, Activity, Wrench } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const PredictiveMaintenance = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Downtime Reduction", value: "80%", icon: Clock },
    { label: "Maintenance Savings", value: "45%", icon: TrendingUp },
    { label: "Failure Prediction", value: "95%", icon: Eye },
    { label: "Equipment Lifespan", value: "+30%", icon: Settings }
  ];

  const problems = [
    {
      title: "Unexpected Equipment Failures",
      items: [
        "Critical equipment failures cost $50K+ per hour in lost production",
        "Unplanned downtime disrupts entire supply chain and customer deliveries",
        "Emergency repairs cost 3-5x more than planned maintenance",
        "Equipment failures create safety risks for workers and operations"
      ]
    },
    {
      title: "Inefficient Maintenance Practices",
      items: [
        "Scheduled maintenance performed too early wastes resources and parts",
        "Maintenance teams reactive instead of proactive in approach",
        "Equipment condition unknown until visible signs of failure appear",
        "Maintenance schedules based on time, not actual equipment health"
      ]
    },
    {
      title: "Lack of Equipment Intelligence",
      items: [
        "Sensor data collected but not analyzed for actionable insights",
        "Equipment health status invisible to operations and management",
        "No early warning system for impending equipment problems",
        "Historical data underutilized for failure pattern recognition"
      ]
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Failure Prediction",
      description: "Computer vision and sensor data analysis that predicts equipment failures weeks before they occur",
      features: [
        "Real-time equipment monitoring with computer vision",
        "Vibration, temperature, and acoustic analysis",
        "Machine learning models trained on failure patterns",
        "Early warning alerts with failure probability scoring",
        "Root cause analysis and recommended actions"
      ]
    },
    {
      title: "Condition-Based Maintenance",
      description: "Intelligent maintenance scheduling based on actual equipment condition rather than time intervals",
      features: [
        "Real-time equipment health dashboards",
        "Optimal maintenance timing recommendations",
        "Parts inventory optimization and forecasting",
        "Maintenance crew scheduling and workload balancing",
        "Performance trend analysis and reporting"
      ]
    },
    {
      title: "Visual Equipment Inspection",
      description: "Computer vision systems that automatically detect equipment wear, damage, and anomalies",
      features: [
        "Automated visual inspection of equipment components",
        "Wear pattern recognition and progression tracking",
        "Defect detection and severity assessment",
        "Comparative analysis with baseline conditions",
        "Integration with maintenance management systems"
      ]
    }
  ];

  const equipmentTypes = [
    {
      equipment: "Rotating Machinery",
      examples: ["Motors", "Pumps", "Compressors", "Turbines"],
      commonFailures: ["Bearing failure", "Misalignment", "Imbalance", "Cavitation"],
      predictionAccuracy: "95%",
      avgSavings: "$500K/year"
    },
    {
      equipment: "Manufacturing Equipment",
      examples: ["CNC Machines", "Conveyors", "Robots", "Presses"],
      commonFailures: ["Tool wear", "Belt failure", "Hydraulic leaks", "Control issues"],
      predictionAccuracy: "92%",
      avgSavings: "$350K/year"
    },
    {
      equipment: "Power Generation",
      examples: ["Generators", "Transformers", "Switchgear", "Boilers"],
      commonFailures: ["Insulation breakdown", "Corrosion", "Thermal stress", "Contact wear"],
      predictionAccuracy: "97%",
      avgSavings: "$1.2M/year"
    },
    {
      equipment: "HVAC Systems",
      examples: ["Chillers", "Air Handlers", "Cooling Towers", "Boilers"],
      commonFailures: ["Refrigerant leaks", "Fan failure", "Heat exchanger fouling", "Control drift"],
      predictionAccuracy: "89%",
      avgSavings: "$200K/year"
    }
  ];

  const detectionMethods = [
    {
      method: "Computer Vision Analysis",
      description: "Visual inspection using AI-powered cameras to detect wear, corrosion, and damage",
      applications: [
        "Surface wear and corrosion detection",
        "Bolt loosening and structural damage",
        "Fluid leaks and contamination",
        "Component alignment and positioning"
      ],
      accuracy: "94%"
    },
    {
      method: "Vibration Monitoring",
      description: "Analysis of equipment vibration patterns to identify mechanical issues",
      applications: [
        "Bearing wear and failure prediction",
        "Motor and pump imbalance detection", 
        "Gear tooth damage identification",
        "Coupling misalignment analysis"
      ],
      accuracy: "96%"
    },
    {
      method: "Thermal Imaging Analysis",
      description: "Computer vision analysis of thermal patterns to detect overheating and inefficiencies",
      applications: [
        "Electrical connection overheating",
        "Motor and bearing temperature monitoring",
        "Insulation degradation detection",
        "Heat exchanger efficiency analysis"
      ],
      accuracy: "91%"
    },
    {
      method: "Acoustic Signature Analysis",
      description: "AI analysis of equipment sound patterns to identify developing problems",
      applications: [
        "Gear and bearing noise analysis",
        "Cavitation detection in pumps",
        "Motor and fan imbalance identification",
        "Compressed air system leak detection"
      ],
      accuracy: "88%"
    }
  ];

  const useCaseScenarios = [
    {
      company: "Steel Manufacturing Plant",
      scenario: "Critical Furnace Failure Prevention",
      challenge: "Unexpected furnace failures costing $2M+ per incident in lost production",
      solution: "AI monitoring of furnace conditions with thermal and visual analysis",
      results: [
        "95% accuracy in predicting furnace issues 2-3 weeks early",
        "80% reduction in unplanned downtime",
        "$8M annual savings from prevented failures",
        "30% improvement in equipment lifespan"
      ]
    },
    {
      company: "Chemical Processing Facility",
      scenario: "Pump System Reliability Program",
      challenge: "Critical pumps failing unexpectedly, causing production shutdowns",
      solution: "Vibration monitoring and computer vision analysis of pump systems",
      results: [
        "92% prediction accuracy for pump failures",
        "60% reduction in emergency maintenance costs",
        "45% decrease in unplanned production interruptions",
        "$1.5M annual operational cost savings"
      ]
    },
    {
      company: "Power Generation Company",
      scenario: "Turbine Predictive Maintenance",
      challenge: "Gas turbine failures threatening power grid reliability",
      solution: "Multi-sensor AI monitoring with thermal, vibration, and visual analysis",
      results: [
        "97% accuracy in turbine failure prediction",
        "50% reduction in maintenance costs",
        "99.8% power generation reliability achieved",
        "$3M savings in avoided outages"
      ]
    }
  ];

  const implementation = [
    {
      phase: "Equipment Assessment & Sensor Installation (Week 1-3)",
      tasks: [
        "Critical equipment identification and prioritization",
        "Sensor and camera installation planning",
        "Baseline equipment condition assessment", 
        "Data collection infrastructure setup"
      ]
    },
    {
      phase: "AI Model Training & Development (Week 4-8)",
      tasks: [
        "Historical failure data analysis and pattern identification",
        "Computer vision model training for equipment inspection",
        "Predictive algorithm development and validation",
        "Alert threshold calibration and testing"
      ]
    },
    {
      phase: "System Integration & Deployment (Week 9-12)",
      tasks: [
        "Integration with maintenance management systems",
        "Real-time monitoring dashboard development",
        "Maintenance team training and workflow optimization",
        "Performance monitoring and continuous improvement"
      ]
    }
  ];

  const pricing = [
    {
      name: "Maintenance Starter",
      price: "$15,000/month",
      description: "Perfect for monitoring critical equipment in small facilities",
      features: [
        "Up to 10 pieces of equipment",
        "Basic failure prediction models",
        "Visual inspection AI for key components",
        "Email and dashboard alerts",
        "Monthly performance reports"
      ],
      popular: false
    },
    {
      name: "Maintenance Professional",
      price: "$40,000/month",
      description: "Comprehensive predictive maintenance for medium facilities",
      features: [
        "Up to 50 pieces of equipment",
        "Advanced multi-sensor analysis",
        "Custom computer vision models",
        "Real-time monitoring dashboards",
        "Priority support and optimization",
        "CMMS integration"
      ],
      popular: true
    },
    {
      name: "Maintenance Enterprise",
      price: "Custom",
      description: "Large-scale predictive maintenance for industrial facilities",
      features: [
        "Unlimited equipment monitoring",
        "Custom AI model development",
        "Multi-facility deployment",
        "Dedicated engineering support",
        "Advanced analytics platform",
        "Enterprise system integrations"
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
              Stop Equipment Failures Before They Happen - AI Predictive Maintenance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform reactive maintenance into proactive intelligence with computer vision and AI that predicts equipment failures weeks in advance, reducing downtime by 80%.
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
                Get Predictive Maintenance Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Equipment We Monitor with AI</h2>
            <p className="text-xl text-muted-foreground">Predictive maintenance across all critical industrial equipment</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{equipment.equipment}</CardTitle>
                    <div className="flex gap-2 flex-col items-end">
                      <Badge className="bg-green-500">{equipment.predictionAccuracy}</Badge>
                      <Badge variant="outline">{equipment.avgSavings}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Equipment Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {equipment.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Common Failures Predicted:</h4>
                    <div className="flex flex-wrap gap-2">
                      {equipment.commonFailures.map((failure, failureIndex) => (
                        <Badge key={failureIndex} variant="secondary" className="text-xs">
                          {failure}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
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
              The Hidden Costs of Reactive Maintenance
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

      {/* Detection Methods Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Detection Methods</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {detectionMethods.map((method, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      {method.method}
                    </CardTitle>
                    <Badge className="bg-green-500">{method.accuracy}</Badge>
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {method.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{app}</span>
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Predictive Maintenance Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Activity className="h-6 w-6 text-primary" />
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
                      <h4 className="font-semibold mb-2 text-primary">Operational Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Predict equipment failures 2-4 weeks in advance, allowing planned maintenance instead of emergency repairs."}
                        {index === 1 && "Optimize maintenance schedules based on actual equipment health, not arbitrary time intervals."}
                        {index === 2 && "Automate equipment inspections with 24/7 computer vision monitoring for continuous assessment."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Predictive Maintenance Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Maintenance Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">12-Week Predictive Maintenance Implementation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Predictive Maintenance Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Eliminate Unplanned Downtime?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join manufacturers already saving millions with AI-powered predictive maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Predictive Maintenance
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

export default PredictiveMaintenance;