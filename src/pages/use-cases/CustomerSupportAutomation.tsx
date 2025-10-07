import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, Zap, Clock, TrendingUp, Users, AlertTriangle, Brain, Phone, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";

const CustomerSupportAutomation = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const stats = [
    { label: "Response Time", value: "< 5 seconds", icon: Zap },
    { label: "Resolution Rate", value: "90%", icon: CheckCircle },
    { label: "Cost Reduction", value: "70%", icon: TrendingUp },
    { label: "Availability", value: "24/7/365", icon: Clock }
  ];

  const problems = [
    {
      title: "Customer Service Bottlenecks",
      items: [
        "Average wait times of 8+ minutes frustrate customers and drive abandonment",
        "Support agents overwhelmed with repetitive, low-value inquiries",
        "After-hours customer needs go completely unaddressed",
        "Peak hour demand surges create massive service delays"
      ]
    },
    {
      title: "Inconsistent Service Quality",
      items: [
        "Service quality varies dramatically between agents and shifts",
        "New agents require months of training to reach proficiency",
        "Complex product knowledge scattered across multiple systems",
        "Escalation processes unclear, leading to customer frustration"
      ]
    },
    {
      title: "Operational Inefficiencies",
      items: [
        "80% of support tickets are routine questions that could be automated",
        "Agents spend more time searching for answers than helping customers",
        "Customer data fragmented across multiple systems and channels",
        "No intelligent routing leads to mismatched agent expertise"
      ]
    }
  ];

  const solutions = [
    {
      title: "Intelligent AI Chatbots",
      description: "Advanced conversational AI that handles customer inquiries with human-like understanding and responses",
      features: [
        "Natural language understanding and context awareness",
        "Multi-turn conversation handling",
        "Seamless escalation to human agents",
        "Integration with knowledge bases and CRM systems",
        "Multi-language support (40+ languages)"
      ]
    },
    {
      title: "Smart Ticket Routing & Prioritization",
      description: "AI-powered system that automatically categorizes, prioritizes, and routes tickets to the best-qualified agents",
      features: [
        "Automatic ticket classification and tagging",
        "Intelligent priority scoring based on urgency and customer value",
        "Skills-based routing to appropriate agents",
        "Workload balancing across support teams",
        "SLA compliance monitoring and alerts"
      ]
    },
    {
      title: "AI-Powered Agent Assistance",
      description: "Real-time AI assistance that helps human agents resolve issues faster with suggested responses and solutions",
      features: [
        "Real-time response suggestions",
        "Knowledge base integration and search",
        "Customer history and context analysis",
        "Sentiment analysis and escalation alerts",
        "Performance analytics and coaching insights"
      ]
    }
  ];

  const supportChannels = [
    { channel: "Live Chat", icon: "💬", automation: "90%", responseTime: "< 5 sec" },
    { channel: "Email Support", icon: "📧", automation: "80%", responseTime: "< 1 hour" },
    { channel: "Phone Support", icon: "📞", automation: "60%", responseTime: "< 30 sec" },
    { channel: "Social Media", icon: "📱", automation: "85%", responseTime: "< 2 min" },
    { channel: "Help Center", icon: "❓", automation: "95%", responseTime: "Instant" },
    { channel: "Mobile App", icon: "📲", automation: "88%", responseTime: "< 10 sec" }
  ];

  const useCaseScenarios = [
    {
      company: "E-commerce Retailer",
      scenario: "Order Status & Returns Automation",
      challenge: "Handle 10,000+ daily inquiries about orders, shipping, and returns",
      solution: "AI chatbot handles order lookups, status updates, and initiates return processes",
      results: [
        "85% of inquiries resolved without human intervention",
        "Customer satisfaction increased to 4.8/5",
        "Support costs reduced by 65%",
        "Average response time under 10 seconds"
      ]
    },
    {
      company: "SaaS Company",
      scenario: "Technical Support & Onboarding",
      challenge: "Support complex software with varying user skill levels",
      solution: "AI provides contextual help, troubleshooting guidance, and onboarding assistance",
      results: [
        "90% reduction in tier-1 support tickets",
        "User onboarding completion rate increased 40%",
        "Support agent productivity improved 2.5x",
        "Customer retention increased by 25%"
      ]
    },
    {
      company: "Financial Services",
      scenario: "Account Management & Compliance",
      challenge: "Provide secure, compliant customer service for financial products",
      solution: "AI handles account inquiries, transactions, and compliance-sensitive interactions",
      results: [
        "99.9% accuracy in account information retrieval",
        "100% compliance with financial regulations",
        "60% reduction in call center volume",
        "$3M annual operational savings"
      ]
    },
    {
      company: "Healthcare Provider",
      scenario: "Appointment Scheduling & Patient Support",
      challenge: "Manage appointment scheduling and patient inquiries across multiple locations",
      solution: "AI handles scheduling, insurance verification, and basic medical inquiries",
      results: [
        "95% of appointments scheduled automatically",
        "Patient satisfaction scores increased 30%",
        "Staff workload reduced by 50%",
        "No-show rates decreased by 20%"
      ]
    }
  ];

  const automationCapabilities = [
    {
      capability: "FAQ & Knowledge Base",
      description: "Instant answers to common questions",
      automationRate: "95%",
      avgSavings: "$50K/year"
    },
    {
      capability: "Order Status & Tracking",
      description: "Real-time order information and updates",
      automationRate: "90%",
      avgSavings: "$75K/year"
    },
    {
      capability: "Account Management",
      description: "Balance inquiries, transaction history, updates",
      automationRate: "85%",
      avgSavings: "$100K/year"
    },
    {
      capability: "Appointment Scheduling",
      description: "Booking, rescheduling, cancellations",
      automationRate: "88%",
      avgSavings: "$60K/year"
    },
    {
      capability: "Technical Troubleshooting",
      description: "Step-by-step problem resolution guides",
      automationRate: "70%",
      avgSavings: "$200K/year"
    },
    {
      capability: "Billing & Payment Support",
      description: "Payment processing, billing inquiries",
      automationRate: "80%",
      avgSavings: "$90K/year"
    }
  ];

  const implementation = [
    {
      phase: "Discovery & Strategy (Week 1-2)",
      tasks: [
        "Analyze current support volume and ticket types",
        "Identify top automation opportunities",
        "Define success metrics and KPIs",
        "Plan integration with existing systems"
      ]
    },
    {
      phase: "AI Development & Training (Week 3-6)",
      tasks: [
        "Train AI models on your knowledge base and FAQs",
        "Develop conversational flows and responses",
        "Set up ticket routing and prioritization logic",
        "Integrate with CRM, helpdesk, and other systems"
      ]
    },
    {
      phase: "Testing & Deployment (Week 7-8)",
      tasks: [
        "Conduct thorough testing with real customer scenarios",
        "Train support team on new AI-assisted workflows",
        "Deploy gradually with monitoring and optimization",
        "Establish ongoing improvement processes"
      ]
    }
  ];

  const pricing = [
    {
      name: "Support Starter",
      price: "$3,000/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5,000 conversations/month",
        "Basic chatbot with FAQ automation",
        "Email and chat channel support",
        "Standard knowledge base integration",
        "Basic analytics and reporting"
      ],
      popular: false
    },
    {
      name: "Support Professional",
      price: "$10,000/month",
      description: "Ideal for growing customer service teams",
      features: [
        "Up to 50,000 conversations/month",
        "Advanced AI with sentiment analysis",
        "Multi-channel support (chat, email, phone)",
        "CRM and helpdesk integrations",
        "Priority support and training",
        "Advanced analytics and insights"
      ],
      popular: true
    },
    {
      name: "Support Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited conversations and channels",
        "Custom AI model development",
        "White-label solutions available",
        "Dedicated support team",
        "Advanced compliance and security",
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
              Stop Overwhelming Support Teams - Automate 90% of Customer Inquiries with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform customer support from reactive to proactive with AI that provides instant, accurate responses 24/7 while reducing costs by 70%.
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
                Get Free Support Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Automation Across All Channels</h2>
            <p className="text-xl text-muted-foreground">Provide consistent, intelligent support wherever your customers are</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="font-semibold text-lg mb-4">{channel.channel}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Automation:</span>
                    <Badge className="bg-green-500">{channel.automation}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Response Time:</span>
                    <Badge variant="outline">{channel.responseTime}</Badge>
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
              Customer Support Challenges Hurting Your Business
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

      {/* Automation Capabilities Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Tasks We Automate</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationCapabilities.map((capability, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{capability.capability}</CardTitle>
                    <Badge className="bg-green-500">{capability.automationRate}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{capability.description}</p>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Annual Savings:</span>
                    <Badge variant="outline" className="text-green-600">{capability.avgSavings}</Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Customer Support Solutions</h2>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MessageSquare className="h-6 w-6 text-primary" />
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
                      <h4 className="font-semibold mb-2 text-primary">Customer Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Provide instant, accurate responses to customer inquiries 24/7, dramatically improving satisfaction while reducing wait times."}
                        {index === 1 && "Ensure every ticket gets to the right agent quickly, reducing resolution time and improving first-contact resolution rates."}
                        {index === 2 && "Empower human agents with AI insights and suggestions, enabling them to resolve complex issues faster and more effectively."}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Support Automation Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Support Results:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">8-Week Support AI Implementation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Support AI Packages</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Customer Support?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join companies already providing 24/7 instant support while reducing costs by 70%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Get Free Support Assessment
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

export default CustomerSupportAutomation;