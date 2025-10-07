import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Clock, TrendingUp, Eye, AlertTriangle, Target, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const FraudDetection = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Detection Accuracy", value: "99.8%", icon: Target },
    { label: "False Positives", value: "< 0.5%", icon: CheckCircle },
    { label: "Detection Speed", value: "< 100ms", icon: Zap },
    { label: "Fraud Prevented", value: "$50M+", icon: Shield }
  ];

  const problems = [
    {
      title: "Traditional Rule-Based Limitations",
      items: [
        "Static rules quickly become outdated as fraud patterns evolve",
        "High false positive rates disrupt legitimate customer transactions",
        "Manual rule updates are slow and require extensive analysis",
        "Sophisticated fraudsters easily circumvent simple rule-based systems"
      ]
    },
    {
      title: "Real-Time Detection Challenges",
      items: [
        "Transaction processing delays frustrate customers and reduce conversions",
        "Manual review processes create bottlenecks in payment flows",
        "Limited ability to detect complex, multi-step fraud schemes",
        "Inconsistent fraud detection across different channels and systems"
      ]
    },
    {
      title: "Evolving Fraud Sophistication",
      items: [
        "AI-powered fraud attacks becoming more sophisticated and harder to detect",
        "Social engineering and identity theft techniques constantly evolving",
        "Cross-channel fraud patterns difficult to detect with isolated systems",
        "New fraud schemes emerge faster than detection systems can adapt"
      ]
    }
  ];

  const solutions = [
    {
      title: "Real-Time Computer Vision Fraud Detection",
      description: "AI-powered visual analysis of documents, IDs, and user behavior for instant fraud identification",
      features: [
        "Document authenticity verification using computer vision",
        "ID and passport fraud detection with deepfake analysis",
        "Biometric verification and liveness detection",
        "Visual behavior pattern analysis",
        "Real-time image and video content analysis"
      ]
    },
    {
      title: "Behavioral Pattern Recognition",
      description: "Machine learning models that identify fraudulent behavior patterns in real-time transactions",
      features: [
        "Transaction velocity and pattern analysis",
        "Device fingerprinting and geolocation verification",
        "User behavior anomaly detection",
        "Cross-channel activity correlation",
        "Historical pattern comparison and scoring"
      ]
    },
    {
      title: "Adaptive AI Fraud Models",
      description: "Self-learning systems that continuously adapt to new fraud patterns and techniques",
      features: [
        "Continuous model training on new fraud patterns",
        "Automated threshold adjustment and optimization",
        "Ensemble model techniques for improved accuracy",
        "Feedback loop integration for model improvement",
        "Explainable AI for regulatory compliance"
      ]
    }
  ];

  const fraudTypes = [
    {
      type: "Identity Fraud",
      description: "Stolen or synthetic identity used to open accounts or make transactions",
      detectionMethods: ["Document verification", "Biometric analysis", "Identity cross-referencing"],
      accuracy: "99.2%",
      avgLoss: "$15,000"
    },
    {
      type: "Payment Card Fraud",
      description: "Unauthorized use of credit/debit cards for purchases or cash advances",
      detectionMethods: ["Transaction pattern analysis", "Geolocation verification", "Merchant risk assessment"],
      accuracy: "98.9%",
      avgLoss: "$1,200"
    },
    {
      type: "Account Takeover",
      description: "Criminals gaining unauthorized access to existing customer accounts",
      detectionMethods: ["Behavioral biometrics", "Device fingerprinting", "Login pattern analysis"],
      accuracy: "97.8%",
      avgLoss: "$12,000"
    },
    {
      type: "Application Fraud",
      description: "Fraudulent applications using fake or stolen information",
      detectionMethods: ["Document authenticity", "Data consistency checks", "Identity verification"],
      accuracy: "99.5%",
      avgLoss: "$25,000"
    }
  ];

  const visualDetectionCapabilities = [
    {
      capability: "Document Authenticity",
      description: "Computer vision analysis of ID documents, passports, and certificates",
      techniques: [
        "Security feature verification (holograms, watermarks)",
        "Font and layout consistency analysis",
        "Photo tampering and manipulation detection",
        "Document template matching and validation"
      ]
    },
    {
      capability: "Deepfake Detection",
      description: "AI-powered detection of synthetic and manipulated facial images",
      techniques: [
        "Facial inconsistency analysis",
        "Micro-expression pattern recognition",
        "Lighting and shadow anomaly detection",
        "Temporal consistency verification in videos"
      ]
    },
    {
      capability: "Behavioral Biometrics",
      description: "Analysis of user interaction patterns and behavioral signatures",
      techniques: [
        "Keystroke dynamics and typing patterns",
        "Mouse movement and clicking behavior",
        "Mobile touch patterns and swipe gestures",
        "Navigation and interaction sequence analysis"
      ]
    },
    {
      capability: "Visual Content Analysis",
      description: "Computer vision analysis of uploaded images and documents",
      techniques: [
        "Metadata analysis and manipulation detection",
        "Image quality and authenticity assessment",
        "Content consistency verification",
        "Reverse image search and duplicate detection"
      ]
    }
  ];

  const useCaseScenarios = [
    {
      company: "Regional Bank",
      scenario: "Online Account Opening Fraud Prevention",
      challenge: "30% of new account applications contained fraudulent information",
      solution: "AI document verification and behavioral analysis during application process",
      results: [
        "99.8% accuracy in detecting fraudulent applications",
        "95% reduction in manual review time",
        "75% decrease in fraud losses on new accounts",
        "$5M annual savings from prevented fraud"
      ]
    },
    {
      company: "E-commerce Platform",
      scenario: "Payment Fraud Detection System",
      challenge: "Sophisticated fraud schemes bypassing traditional rule-based detection",
      solution: "Real-time AI analysis of transaction patterns and user behavior",
      results: [
        "98.5% fraud detection accuracy",
        "60% reduction in false positive rates",
        "90% decrease in chargebacks",
        "$15M prevented in fraudulent transactions"
      ]
    },
    {
      company: "Financial Services Company",
      scenario: "Multi-Channel Identity Verification",
      challenge: "Coordinated fraud attacks across mobile, web, and in-person channels",
      solution: "Unified AI fraud detection with cross-channel behavioral analysis",
      results: [
        "97% accuracy in cross-channel fraud detection",
        "80% reduction in account takeover incidents",
        "50% improvement in customer experience scores",
        "$8M annual fraud prevention savings"
      ]
    }
  ];

  const implementation = [
    {
      phase: "Fraud Pattern Analysis & Model Design (Week 1-3)",
      tasks: [
        "Historical fraud data analysis and pattern identification",
        "Current detection system assessment and gap analysis",
        "AI model architecture design and feature selection",
        "Integration planning with existing fraud systems"
      ]
    },
    {
      phase: "AI Model Development & Training (Week 4-8)",
      tasks: [
        "Computer vision model training for document verification",
        "Behavioral pattern recognition model development",
        "Real-time processing pipeline implementation",
        "Model validation and accuracy testing"
      ]
    },
    {
      phase: "System Integration & Deployment (Week 9-12)",
      tasks: [
        "Integration with payment and transaction systems",
        "Real-time monitoring dashboard implementation",
        "Fraud team training and workflow optimization",
        "Performance monitoring and continuous improvement"
      ]
    }
  ];

  const pricing = [
    {
      name: "Fraud Detection Starter",
      price: "$12,000/month",
      description: "Essential fraud protection for small to medium businesses",
      features: [
        "Up to 100K transactions/month",
        "Basic document verification AI",
        "Real-time transaction monitoring",
        "Standard fraud detection models",
        "Email and dashboard alerts"
      ],
      popular: false
    },
    {
      name: "Fraud Detection Professional",
      price: "$35,000/month",
      description: "Advanced fraud protection for growing businesses",
      features: [
        "Up to 1M transactions/month",
        "Advanced computer vision document analysis",
        "Behavioral biometrics and pattern recognition",
        "Custom fraud model training",
        "Priority support and optimization",
        "API integration and customization"
      ],
      popular: true
    },
    {
      name: "Fraud Detection Enterprise",
      price: "Custom",
      description: "Enterprise-scale fraud prevention for large organizations",
      features: [
        "Unlimited transaction processing",
        "Custom AI model development",
        "Multi-channel fraud detection",
        "Dedicated fraud prevention team",
        "Advanced analytics and reporting",
        "White-label fraud prevention solutions"
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
              Stop Fraud in Real-Time - AI Detection with 99.8% Accuracy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protect your business from sophisticated fraud with AI-powered computer vision and behavioral analysis that detects threats in under 100ms with minimal false positives.
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
                Get Fraud Detection Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fraud Types We Detect with AI</h2>
            <p className="text-xl text-muted-foreground">Comprehensive protection against all major fraud categories</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {fraudTypes.map((fraud, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{fraud.type}</CardTitle>
                    <div className="flex gap-2 flex-col items-end">
                      <Badge className="bg-green-500">{fraud.accuracy}</Badge>
                      <Badge variant="destructive">{fraud.avgLoss}</Badge>
                    </div>
                  </div>
                  <CardDescription>{fraud.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Detection Methods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {fraud.detectionMethods.map((method, methodIndex) => (
                      <Badge key={methodIndex} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
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
              Why Traditional Fraud Detection Fails
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

      {/* Visual Detection Capabilities */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Computer Vision Fraud Detection</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visualDetectionCapabilities.map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    {capability.capability}
                  </CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.techniques.map((technique, techniqueIndex) => (
                      <li key={techniqueIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{technique}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Fraud Detection Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Shield className="h-6 w-6 text-primary" />
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
                        {index === 0 && "Instantly verify document authenticity and detect sophisticated identity fraud using advanced computer vision analysis."}
                        {index === 1 && "Identify fraudulent behavior patterns in real-time while maintaining excellent user experience for legitimate customers."}
                        {index === 2 && "Stay ahead of evolving fraud techniques with AI that continuously learns and adapts to new threat patterns."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fraud Detection Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Fraud Prevention Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">12-Week Fraud Detection Implementation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fraud Detection AI Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stop Fraud Before It Happens?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join financial institutions already preventing millions in fraud losses with AI detection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Fraud Protection
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

export default FraudDetection;