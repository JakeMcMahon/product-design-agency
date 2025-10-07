import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Clock, TrendingUp, Eye, AlertTriangle, Users, MessageSquare, Video } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const ContentModeration = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Detection Accuracy", value: "99.2%", icon: Eye },
    { label: "Processing Speed", value: "Real-time", icon: Zap },
    { label: "Cost Reduction", value: "80%", icon: TrendingUp },
    { label: "Content Reviewed", value: "24/7", icon: Clock }
  ];

  const problems = [
    {
      title: "Content Volume Overwhelm",
      items: [
        "Millions of posts, comments, and media uploads require constant monitoring",
        "Human moderators can't keep pace with user-generated content volume",
        "Content backlogs grow exponentially with platform growth",
        "Harmful content goes undetected for hours or days"
      ]
    },
    {
      title: "Consistency & Bias Challenges",
      items: [
        "Moderation decisions vary dramatically between different human moderators",
        "Cultural context and language nuances affect moderation quality",
        "Moderator fatigue leads to decreased accuracy over time",
        "Subjective content policies create inconsistent enforcement"
      ]
    },
    {
      title: "Safety & Compliance Risks",
      items: [
        "Toxic content damages user experience and platform reputation",
        "Legal compliance requires immediate response to harmful content",
        "Child safety content requires specialized detection capabilities",
        "Brand safety concerns affect advertising revenue and partnerships"
      ]
    }
  ];

  const solutions = [
    {
      title: "Intelligent Content Analysis",
      description: "AI-powered analysis of text, images, and video content that detects harmful material with human-level accuracy",
      features: [
        "Multi-modal content analysis (text, image, video, audio)",
        "Context-aware toxicity and hate speech detection",
        "Nudity, violence, and inappropriate content identification",
        "Spam and fake account detection",
        "Real-time content scoring and classification"
      ]
    },
    {
      title: "Automated Moderation Actions",
      description: "Smart content moderation that takes appropriate actions based on content risk levels and platform policies",
      features: [
        "Automatic content removal and user warnings",
        "Graduated response system based on severity",
        "User account restrictions and suspensions",
        "Content quarantine and human review escalation",
        "Appeal process automation and tracking"
      ]
    },
    {
      title: "Compliance & Safety Monitoring",
      description: "Comprehensive monitoring and reporting system that ensures regulatory compliance and user safety",
      features: [
        "Real-time safety dashboard and alerts",
        "Regulatory compliance reporting (COPPA, GDPR, etc.)",
        "Threat detection and law enforcement collaboration",
        "Brand safety monitoring for advertisers",
        "Community guidelines enforcement tracking"
      ]
    }
  ];

  const contentTypes = [
    { type: "Text Posts & Comments", icon: "💬", riskLevel: "Medium", volume: "Very High" },
    { type: "Images & Photos", icon: "🖼️", riskLevel: "High", volume: "High" },
    { type: "Videos & Live Streams", icon: "📹", riskLevel: "Very High", volume: "Medium" },
    { type: "Audio & Voice Messages", icon: "🎵", riskLevel: "Medium", volume: "Medium" },
    { type: "User Profiles & Bios", icon: "👤", riskLevel: "Medium", volume: "High" },
    { type: "Direct Messages", icon: "💌", riskLevel: "High", volume: "Very High" }
  ];

  const moderationCategories = [
    {
      category: "Hate Speech & Harassment",
      description: "Targeted harassment, bullying, threats, and discriminatory content",
      detectionRate: "98.5%",
      falsePositiveRate: "0.8%"
    },
    {
      category: "Adult & Explicit Content",
      description: "Nudity, sexual content, and age-inappropriate material",
      detectionRate: "99.7%",
      falsePositiveRate: "0.3%"
    },
    {
      category: "Violence & Graphic Content",
      description: "Violent imagery, gore, self-harm, and dangerous activities",
      detectionRate: "97.8%",
      falsePositiveRate: "1.2%"
    },
    {
      category: "Spam & Fake Accounts",
      description: "Automated spam, fake profiles, and inauthentic behavior",
      detectionRate: "99.1%",
      falsePositiveRate: "0.5%"
    },
    {
      category: "Misinformation & Fraud",
      description: "False information, scams, and deceptive practices",
      detectionRate: "95.6%",
      falsePositiveRate: "2.1%"
    },
    {
      category: "Intellectual Property",
      description: "Copyright infringement, trademark violations",
      detectionRate: "92.4%",
      falsePositiveRate: "3.2%"
    }
  ];

  const useCaseScenarios = [
    {
      platform: "Social Media Platform",
      scenario: "Large-Scale Content Moderation",
      challenge: "Moderate 50M+ daily posts across multiple languages and cultures",
      solution: "AI system processes all content in real-time, removing harmful material instantly",
      results: [
        "99.2% harmful content detection accuracy",
        "95% reduction in human moderation workload",
        "Response time reduced from hours to seconds",
        "85% improvement in user safety scores"
      ]
    },
    {
      platform: "Online Gaming Community",
      scenario: "Chat & Voice Moderation",
      challenge: "Monitor toxic behavior in real-time gaming communications",
      solution: "AI analyzes text chat and voice communications for harassment and toxicity",
      results: [
        "90% reduction in toxic behavior incidents",
        "Player retention increased by 30%",
        "Automated action on 95% of violations",
        "Community health scores improved 2.5x"
      ]
    },
    {
      platform: "E-commerce Marketplace",
      scenario: "Product Listing & Review Moderation",
      challenge: "Ensure product listings and reviews comply with policies and laws",
      solution: "AI screens all product content, reviews, and seller communications",
      results: [
        "99.5% accuracy in policy violation detection",
        "Fake review detection rate of 96%",
        "Seller compliance improved by 80%",
        "Customer trust scores increased 40%"
      ]
    },
    {
      platform: "Educational Platform",
      scenario: "Child Safety & Age-Appropriate Content",
      challenge: "Protect minors from inappropriate content and predatory behavior",
      solution: "Specialized AI models detect child safety risks and inappropriate interactions",
      results: [
        "100% child safety incident detection",
        "Zero tolerance policy enforcement",
        "Parent satisfaction increased to 98%",
        "Platform safety certification achieved"
      ]
    }
  ];

  const implementation = [
    {
      phase: "Content Audit & Policy Analysis (Week 1-2)",
      tasks: [
        "Analyze existing content types and moderation challenges",
        "Define content policies and violation categories",
        "Assess current moderation workflow and team capacity",
        "Identify integration requirements and technical constraints"
      ]
    },
    {
      phase: "AI Model Training & Development (Week 3-6)",
      tasks: [
        "Train AI models on your content and policies",
        "Develop automated action workflows",
        "Set up real-time processing infrastructure",
        "Configure escalation and appeal processes"
      ]
    },
    {
      phase: "Testing & Deployment (Week 7-8)",
      tasks: [
        "Conduct thorough testing with historical content",
        "Train moderation team on AI-assisted workflows",
        "Deploy with monitoring and quality assurance",
        "Establish continuous improvement processes"
      ]
    }
  ];

  const pricing = [
    {
      name: "Moderation Starter",
      price: "$5,000/month",
      description: "Perfect for smaller communities and platforms",
      features: [
        "Up to 100K content items/month",
        "Basic text and image moderation",
        "Standard policy templates",
        "Email support",
        "Basic reporting dashboard"
      ],
      popular: false
    },
    {
      name: "Moderation Professional",
      price: "$18,000/month",
      description: "Ideal for growing platforms and communities",
      features: [
        "Up to 10M content items/month",
        "Advanced multi-modal content analysis",
        "Custom policy configuration",
        "Real-time monitoring dashboard",
        "Priority support and training",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Moderation Enterprise",
      price: "Custom",
      description: "For large platforms with complex needs",
      features: [
        "Unlimited content processing",
        "Custom AI model development",
        "White-label solutions",
        "Dedicated support team",
        "Advanced compliance features",
        "Multi-region deployment"
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
              Stop Toxic Content - Protect Your Community with 99.2% AI Moderation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform content moderation from reactive cleanup to proactive protection with AI that detects harmful content instantly and maintains safe communities 24/7.
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
                Get Free Content Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Types We Monitor</h2>
            <p className="text-xl text-muted-foreground">Comprehensive moderation across all content formats</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{content.icon}</div>
                    <h3 className="font-semibold text-lg">{content.type}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Risk Level:</span>
                    <Badge variant={content.riskLevel === 'Very High' ? 'destructive' : content.riskLevel === 'High' ? 'destructive' : 'secondary'}>
                      {content.riskLevel}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Volume:</span>
                    <Badge variant="outline">{content.volume}</Badge>
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
              Content Moderation Challenges Threatening Your Platform
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

      {/* Moderation Categories Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Harmful Content We Detect</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {moderationCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Detection Rate:</span>
                      <Badge className="ml-2 bg-green-500">{category.detectionRate}</Badge>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">False Positives:</span>
                      <Badge variant="outline" className="ml-2">{category.falsePositiveRate}</Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Content Moderation Solutions</h2>
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
                      <h4 className="font-semibold mb-2 text-primary">Community Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Instantly identify and classify harmful content across all formats, protecting users from exposure to toxic material."}
                        {index === 1 && "Take appropriate action immediately based on content severity, maintaining community standards consistently."}
                        {index === 2 && "Ensure regulatory compliance and user safety with comprehensive monitoring and transparent reporting."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Moderation Success Stories</h2>
          </div>

          <div className="space-y-8">
            {useCaseScenarios.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="mb-2">{useCase.platform}</Badge>
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
                      <h4 className="font-semibold mb-3 text-green-800">Safety Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">8-Week Moderation AI Implementation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Moderation AI Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Safer Community?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join platforms already protecting millions of users with 99.2% accurate AI content moderation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Content Analysis
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

export default ContentModeration;