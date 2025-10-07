import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { CheckCircle2, Trophy } from "lucide-react";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";

export const AboutSection = (): JSX.Element => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <>
      <section id="about" className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f8f9ff] to-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1.5 mb-4 sm:mb-6 border-[#4f5bff]/20 bg-[#4f5bff]/5"
            >
              <span className="text-xs sm:text-sm font-normal text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                MEET THE TEAM
              </span>
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 sm:mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
                Complete Product Development Experts
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#666666] leading-relaxed max-w-4xl mx-auto [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                We're the team that pioneered Complete Product Development - the only methodology that builds AI, analytics, and growth systems together from day one.
              </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Jake McMahon */}
            <Card className="border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#4f5bff]/20 shadow-lg">
                    <img 
                      src="/images/jakeprofile.png"
                      alt="Jake McMahon profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                  Jake McMahon
                </CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg text-[#4f5bff] font-semibold [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                  Product Architect & AI Integration Expert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-4 sm:px-6">
                <p className="text-sm sm:text-base text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  15+ years building products at scale (Google, Meta, Stripe, Uber). Machine learning expertise across computer vision, NLP, and predictive analytics. Product management experience at unicorn startups and Fortune 500 companies.
                </p>
                
                <h4 className="text-sm sm:text-base font-semibold mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">Education:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          MBA in Product Management
                        </span>
                      </li>
                    </ul>
                
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">Core Expertise:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="text-xs">AI/ML Architecture</Badge>
                    <Badge variant="outline" className="text-xs">Complete Product Development</Badge>
                    <Badge variant="outline" className="text-xs">Analytics Integration</Badge>
                    <Badge variant="outline" className="text-xs">Growth Engineering</Badge>
                  </div>
                </div>
                
                <div className="bg-[#4f5bff]/5 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Y Combinator mentor and advisor for 20+ portfolio companies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Track record of building products that drive measurable business growth
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Growth engineering experience scaling products from 0 to millions of users
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Vyacheslav */}
            <Card className="border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#4f5bff]/20 shadow-lg">
                    <img 
                      src="/images/rehanprofile.jpg"
                      alt="Rehan Yaseen profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                  Rehan Yaseen
                </CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg text-[#4f5bff] font-semibold [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                  AI Engineer & Full-Stack Developer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-4 sm:px-6">
                <p className="text-sm sm:text-base text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Full-stack development across web, mobile, and API architecture. Custom machine learning models and intelligent automation. Data scientist creating predictive models and business intelligence frameworks.
                </p>
                
                <h4 className="text-sm sm:text-base font-semibold mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">Education:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          MFA in Interaction Design
                        </span>
                      </li>
                    </ul>
                
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">Core Expertise:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="text-xs">Machine Learning Models</Badge>
                    <Badge variant="outline" className="text-xs">Full-Stack Development</Badge>
                    <Badge variant="outline" className="text-xs">API Architecture</Badge>
                    <Badge variant="outline" className="text-xs">Data Science</Badge>
                  </div>
                </div>
                
                <div className="bg-[#4f5bff]/5 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Built custom machine learning models and intelligent automation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Developed scalable web and mobile applications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Created predictive analytics and business intelligence frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-[#4f5bff] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Expert in implementing analytics and optimization systems
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Company Story Card */}
          <Card className="border-2 border-[#4f5bff]/20 bg-gradient-to-br from-[#4f5bff]/5 to-white">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                Why We Created Complete Product Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6">
              <p className="text-sm sm:text-base text-[#666666] text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                Founded by former product leaders from Google, Stripe, and Y Combinator companies who got frustrated with fragmented development approaches that create technical debt and slow business results.
              </p>
              <p className="text-sm sm:text-base text-[#666666] text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                Traditional agencies build pieces - we build systems. Instead of hoping separate components integrate, we architect everything together from shared foundations.
              </p>
              <p className="text-base sm:text-lg font-semibold text-center text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                The result: Products that scale businesses, not just impress users.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#4f5bff]/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">200+</div>
                  <div className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">Complete Products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">Zero</div>
                  <div className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">Integration Failures</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">150%</div>
                  <div className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">Avg Business Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">90 Days</div>
                  <div className="text-xs sm:text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">Delivery Guarantee</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-6">
                <Button 
                  className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-4 py-4 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] transition-colors min-h-[60px] sm:min-h-0"
                  onClick={openConsultationPopup}
                >
                  <span className="block sm:inline">Discuss Your Project</span>
                  <span className="block sm:inline sm:ml-1">→</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Discuss your project with our team"
        description="Schedule a 30-minute strategic call to discuss your product development needs"
      />
    </>
  );
};