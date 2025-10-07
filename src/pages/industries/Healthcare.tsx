import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, FileText, Shield, Clock, TrendingUp, Play, Search, AlertTriangle, Users, Activity } from "lucide-react";
import Header from "@/components/layout/Header";

const Healthcare = () => {
  const stats = [
    { label: "Healthcare Clients", value: "150+", icon: Heart },
    { label: "Processing Time Reduction", value: "85%", icon: Clock },
    { label: "Accuracy Improvement", value: "99%", icon: TrendingUp },
    { label: "HIPAA Compliance", value: "100%", icon: Shield }
  ];

  const problems = [
    {
      title: "Medical Documentation Overload",
      items: [
        "Physicians spend 60% of their time on documentation instead of patient care",
        "Medical records processing creates administrative bottlenecks",
        "Insurance claims require extensive manual review and verification",
        "Clinical notes and discharge summaries take hours to complete"
      ]
    },
    {
      title: "Regulatory Compliance Challenges",
      items: [
        "HIPAA compliance monitoring requires constant vigilance and resources",
        "FDA regulation changes impact multiple departments simultaneously",
        "Clinical trial documentation needs meticulous accuracy and traceability",
        "Quality assurance processes slow down critical healthcare delivery"
      ]
    },
    {
      title: "Patient Data Analysis Bottlenecks",
      items: [
        "Electronic health records contain unstructured data that's hard to analyze",
        "Clinical research requires extensive manual data extraction and analysis",
        "Diagnostic imaging analysis limited by radiologist availability",
        "Predictive analytics for patient outcomes requires specialized expertise"
      ]
    },
    {
      title: "Operational Inefficiencies",
      items: [
        "Appointment scheduling and patient flow management consume staff resources",
        "Medical equipment monitoring requires 24/7 human oversight",
        "Inventory management for medical supplies relies on manual tracking",
        "Staff scheduling complexity impacts patient care quality"
      ]
    }
  ];

  const solutions = [
    {
      title: "Medical Document Processing",
      icon: FileText,
      description: "Automated processing of medical records, insurance claims, and clinical documentation with HIPAA compliance",
      features: [
        "Electronic health record (EHR) data extraction and analysis",
        "Insurance claims processing and verification automation",
        "Clinical notes transcription and summarization",
        "Medical coding and billing automation",
        "Discharge summary generation"
      ]
    },
    {
      title: "Diagnostic Imaging AI",
      icon: Search,
      description: "AI-powered analysis of medical imaging including X-rays, MRIs, CT scans, and ultrasounds",
      features: [
        "Automated radiology report generation",
        "Abnormality detection and flagging",
        "Comparative analysis with historical images",
        "Priority scheduling for urgent cases",
        "Quality assurance for imaging protocols"
      ]
    },
    {
      title: "Patient Monitoring & Safety",
      icon: Activity,
      description: "Continuous patient monitoring with predictive analytics for early intervention and safety protocols",
      features: [
        "Real-time vital signs monitoring and alerts",
        "Fall risk assessment and prevention",
        "Medication adherence tracking",
        "Infection control monitoring",
        "Emergency response automation"
      ]
    },
    {
      title: "Clinical Research Support",
      icon: Users,
      description: "Streamlined clinical trial management and research data analysis with regulatory compliance",
      features: [
        "Clinical trial participant matching and recruitment",
        "Adverse event reporting and analysis",
        "Research data collection and validation",
        "Regulatory submission preparation",
        "Statistical analysis and reporting"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Regional Hospital: 80% Reduction in Documentation Time",
      stats: "500-bed hospital, $3M annual savings",
      description: "Multi-specialty hospital implemented AI-powered documentation system across all departments, dramatically reducing physician administrative burden while improving patient care quality.",
      results: [
        "80% reduction in documentation time",
        "40% increase in patient face-time",
        "$3M annual operational savings",
        "99.8% HIPAA compliance maintenance"
      ]
    },
    {
      title: "Imaging Center: Automated Radiology Workflow",
      stats: "Radiology practice, 90% faster reporting",
      description: "Independent imaging center deployed AI radiology assistance, enabling faster diagnosis and improved patient outcomes with 24/7 automated preliminary readings.",
      results: [
        "90% faster preliminary report generation",
        "95% accuracy in abnormality detection",
        "60% increase in daily case capacity",
        "85% improvement in urgent case prioritization"
      ]
    },
    {
      title: "Research Hospital: Clinical Trial Optimization",
      stats: "Academic medical center, 75% efficiency gain",
      description: "Teaching hospital automated clinical trial management and patient matching, accelerating research timelines and improving participant outcomes.",
      results: [
        "75% faster patient enrollment",
        "90% reduction in protocol deviations",
        "50% improvement in data quality",
        "3x increase in successful trial completions"
      ]
    }
  ];

  const complianceFeatures = [
    {
      title: "HIPAA Compliance",
      description: "Complete healthcare data protection with encrypted processing, access controls, and audit trails"
    },
    {
      title: "FDA 21 CFR Part 11",
      description: "Electronic records and signatures compliance for clinical research and pharmaceutical applications"
    },
    {
      title: "HITECH Act",
      description: "Enhanced security measures for protected health information (PHI) and breach notification"
    },
    {
      title: "SOC 2 Type II",
      description: "Rigorous security, availability, and confidentiality controls for healthcare data processing"
    },
    {
      title: "HL7 FHIR Standards",
      description: "Healthcare interoperability standards compliance for seamless EHR integration"
    },
    {
      title: "Clinical Data Standards",
      description: "CDISC, ICD-10, CPT, and other medical coding standards compliance"
    }
  ];

  const pricing = [
    {
      name: "Healthcare Starter",
      price: "$12,000/month",
      description: "Perfect for small practices and clinics",
      features: [
        "Up to 2,000 patient records/month",
        "Basic medical document processing",
        "Standard EHR integrations",
        "HIPAA compliance monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Healthcare Professional",
      price: "$35,000/month",
      description: "Ideal for hospitals and healthcare systems",
      features: [
        "Up to 25,000 patient records/month",
        "Advanced diagnostic AI assistance",
        "Clinical research support tools",
        "Real-time patient monitoring",
        "Priority support and training",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Healthcare Enterprise",
      price: "Custom",
      description: "For large healthcare networks and research institutions",
      features: [
        "Unlimited patient data processing",
        "Custom AI model development",
        "Multi-facility deployment",
        "Dedicated support team",
        "Advanced analytics platform",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const specialties = [
    { name: "Cardiology", icon: "❤️" },
    { name: "Radiology", icon: "📷" },
    { name: "Emergency Medicine", icon: "🚑" },
    { name: "Oncology", icon: "🎗️" },
    { name: "Pathology", icon: "🔬" },
    { name: "Dermatology", icon: "👨‍⚕️" },
    { name: "Neurology", icon: "🧠" },
    { name: "Psychiatry", icon: "🧘" },
    { name: "Pediatrics", icon: "👶" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revolutionize Healthcare with AI - From Administrative Burden to Patient-Focused Care
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join 150+ healthcare organizations using AI to reduce documentation time by 85%, improve diagnostic accuracy, and let clinicians focus on what matters most - patient care.
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
                Get Free Healthcare AI Assessment
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
              Healthcare Challenges That AI Can Solve
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

      {/* Medical Specialties Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Medical Specialties We Serve</h2>
            <p className="text-xl text-muted-foreground">AI solutions tailored to your specialty's unique needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="font-semibold text-lg">{specialty.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Solutions for Healthcare</h2>
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
                      <h4 className="font-semibold mb-2 text-primary">Clinical Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && "Reduce administrative burden by up to 80%, allowing clinicians to spend more time with patients and improve care quality."}
                        {index === 1 && "Accelerate diagnostic workflows and improve accuracy with AI-assisted imaging analysis and automated reporting."}
                        {index === 2 && "Enhance patient safety with continuous monitoring and predictive analytics for early intervention."}
                        {index === 3 && "Streamline research processes and accelerate clinical trials with automated data collection and analysis."}
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare AI Success Stories</h2>
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
                      <h4 className="font-semibold mb-3 text-green-800">Clinical Outcomes:</h4>
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Compliance & Security</h2>
            <p className="text-xl text-muted-foreground">Patient privacy and regulatory compliance are our highest priorities</p>
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare AI Solutions Pricing</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Patient Care with AI?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading healthcare organizations improving patient outcomes with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
              Get Free Healthcare AI Assessment
            </Button>
            <Button size="lg" variant="outline">
              Download Healthcare AI Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;