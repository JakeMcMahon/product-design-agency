import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Globe, Target, Heart, Brain, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";
import { usePDFDownload } from "@/hooks/usePDFDownload";

const About = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = usePDFDownload();
  const stats = [
    { label: "AI Projects Completed", value: "200+", icon: Target },
    { label: "Client Operational Savings", value: "$100M+", icon: Zap },
    { label: "Client Retention Rate", value: "95%", icon: Heart },
    { label: "Fortune 500 Clients", value: "50+", icon: Award }
  ];

  const teamMembers = [
    {
      name: "Jake McMahon",
      title: "AI Strategy & Implementation Expert",
      education: [
        "Higher School of Economics (HSE)",
        "St. Petersburg State University Graduate School of Management"
      ],
      experience: "8+ years transforming SaaS companies",
      achievements: [
        "50+ successful AI implementations",
        "$50M+ in client operational savings",
        "95% client retention rate",
        "Trusted by Fortune 500 companies"
      ],
      expertise: [
        "AI Strategy & Planning",
        "Business Process Automation", 
        "Data Analytics & Insights",
        "SaaS Growth & Scaling"
      ],
      description: "With 8+ years transforming SaaS companies from data chaos to growth engines, Jake brings proven expertise in analytics, automation, and strategic implementation."
    },
    {
      name: "Vyacheslav Разин",
      title: "AI Research & Deep Learning Specialist", 
      education: [
        "Аспирантура in AI/Machine Learning from ННГУ",
        "ННГУ (Research Focus)"
      ],
      experience: "Leading AI researcher and practitioner",
      achievements: [
        "100+ published research papers",
        "Speaker at major AI conferences",
        "Expert in cutting-edge AI technologies",
        "Pioneer in advanced AI implementations"
      ],
      expertise: [
        "Deep Learning & Neural Networks",
        "Machine Learning Model Development",
        "AI Research & Innovation",
        "Advanced AI Architectures"
      ],
      description: "Leading AI researcher and practitioner from ННГУ, Vyacheslav Разин specializes in deep learning, machine learning model development, and advanced AI implementations. Regular speaker at top AI conferences across Russia and Europe."
    }
  ];

  const companyValues = [
    {
      title: "Results Over Hype",
      description: "We focus on delivering measurable business improvements, not chasing the latest AI trends.",
      icon: Target
    },
    {
      title: "Practical Innovation",
      description: "Every solution is designed to solve real business problems with proven, reliable technology.",
      icon: Brain
    },
    {
      title: "Partnership Approach",
      description: "We work as an extension of your team, ensuring knowledge transfer and long-term success.",
      icon: Users
    },
    {
      title: "Global Excellence",
      description: "Combining international expertise with local understanding across markets and cultures.",
      icon: Globe
    }
  ];

  const approach = [
    {
      phase: "1. Right-Fit Architecture Assessment",
      description: "We don't force complex solutions where simple ones work better",
      details: [
        "Map your specific requirements and complexity levels",
        "Choose optimal AI architecture for your needs",
        "Design the simplest solution that reliably delivers results",
        "Avoid unnecessary complexity that adds cost without value"
      ]
    },
    {
      phase: "2. Reliability-First Implementation", 
      description: "Focus on solutions that work consistently in production",
      details: [
        "Start with proven technologies and methodologies",
        "Build redundancy and error handling into every system",
        "Prioritize consistency and accuracy over flashy features",
        "Ensure seamless integration with existing workflows"
      ]
    },
    {
      phase: "3. Strength-to-Strength Growth",
      description: "Build on proven foundations rather than experimental features",
      details: [
        "Validate simple automations before scaling complexity",
        "Expand successful patterns to new use cases",
        "Strengthen working systems before adding new capabilities",
        "Create sustainable competitive advantages through AI"
      ]
    }
  ];

  const offices = [
    {
      city: "Moscow",
      country: "Russia",
      focus: "Strategic Operations & Client Relations",
      services: ["AI Strategy Consulting", "Enterprise Implementation", "Client Success Management"]
    },
    {
      city: "Nizhny Novgorod", 
      country: "Russia",
      focus: "AI Research & Development",
      services: ["Advanced AI Research", "Model Development", "Technical Innovation"]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header onConsultationClick={openConsultationPopup} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Your AI Transformation Partners
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We turn AI complexity into business simplicity. Our proven approach transforms manual processes into intelligent automation, delivering measurable results for 200+ companies worldwide.
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
                Get Free AI Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-semibold text-center mb-4">
                  "Data without action is just pretty charts. Our goal is to turn every insight into concrete business improvement."
                </blockquote>
                <p className="text-muted-foreground text-center">
                  We believe AI should solve real problems, not create new complexities. That's why we focus on practical, results-driven implementations that deliver immediate value and long-term competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Started This Company</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                We saw too many great businesses struggling with manual processes while AI solutions remained inaccessible, overcomplicated, or simply didn't work as promised.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The AI industry was full of impressive demos that failed in production, complex architectures that solved the wrong problems, and vendors who disappeared after implementation.
              </p>
              <p className="text-lg font-semibold">
                We bridge that gap with practical, results-driven AI implementations that actually work and deliver measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Profile Image Column */}
                    <div className="flex justify-center">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img 
                          src={member.name === "Jake McMahon" ? "/images/jakeprofile.png" : "/images/vyacheslavprofile.PNG"}
                          alt={`${member.name} profile photo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('Image failed to load:', e.target.src);
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-lg text-primary font-semibold mb-4">{member.title}</p>
                        <p className="text-muted-foreground">{member.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Education:</h4>
                          <ul className="space-y-1">
                            {member.education.map((edu, eduIndex) => (
                              <li key={eduIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Core Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/5 p-6 rounded-lg mt-6">
                        <h4 className="font-semibold mb-4 text-primary">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Methodology</h2>
            <p className="text-xl text-muted-foreground">
              Why our AI solutions actually work (while others fail)
            </p>
          </div>

          <div className="space-y-8">
            {approach.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <CardDescription className="text-lg">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <value.icon className="h-6 w-6 text-primary" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-xl text-muted-foreground">
              Strategic locations combining research excellence with business expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    {office.city}, {office.country}
                  </CardTitle>
                  <CardDescription className="text-lg">{office.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {office.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Results Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Approach Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-center">Average Results Across Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>System Reliability</span>
                    <Badge className="bg-green-500">99%+</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Implementation Speed</span>
                    <Badge className="bg-blue-500">75% Faster</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Return on Investment</span>
                    <Badge className="bg-purple-500">300%</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Client Satisfaction</span>
                    <Badge className="bg-green-500">95%</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-center">What Sets Us Apart</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Right-fit architecture approach vs. one-size-fits-all</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Reliability over complexity - solutions that actually work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Strength-to-strength growth methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Deep technical expertise combined with business acumen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Long-term partnership approach with 95% retention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 200+ companies already achieving measurable results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300" onClick={openConsultationPopup}>
              Schedule Strategy Session
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <ConsultationPopup 
        isOpen={isOpen} 
        onClose={closeConsultationPopup}
        title={popupConfig.title}
        description={popupConfig.description}
      />
      <PDFDownloadPopup
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        isSubmitted={isPDFSubmitted}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
      />
    </div>
  );
};

export default About;