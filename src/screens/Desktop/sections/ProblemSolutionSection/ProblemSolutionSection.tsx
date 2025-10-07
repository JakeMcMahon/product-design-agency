import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";

export const ProblemSolutionSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1.5 mb-4 sm:mb-6 border-[#ff6b6b]/20 bg-[#ff6b6b]/5"
            >
              <span className="text-xs sm:text-sm font-normal text-[#ff6b6b] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                THE PROBLEM
              </span>
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-[#111111] mb-6">
              Building Products That Don't Scale
            </h2>
            <p className="text-lg md:text-xl text-[#666666] max-w-4xl mx-auto [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-relaxed">
              You need products with AI capabilities that actually drive business results, but building them takes 18+ months and requires expertise you don't have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
            <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)]">
              <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] mb-4">
                  What's Happening Right Now
                </h3>
                <div className="space-y-3">
                  {[
                    "Development teams building basic features without AI intelligence or growth systems",
                    "Product managers struggling to prioritize features that drive measurable business results", 
                    "Leadership watching competitors launch AI-enabled products faster",
                    "Users experiencing fragmented features that don't work together seamlessly"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)]">
              <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] mb-4">
                  The Hidden Costs
                </h3>
                <div className="space-y-3">
                  {[
                    "Technical debt from features built without AI integration planning",
                    "Lost market opportunities while competitors launch complete products",
                    "User confusion from disconnected features and inconsistent experiences", 
                    "Resource waste building features twice when growth requirements discovered later"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)]">
            <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] mb-4">
                Why This Happens
              </h3>
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] font-normal text-[#ffffffb8] text-base sm:text-[17px] tracking-[0] leading-[22.4px] max-w-4xl mx-auto">
                Most companies build features in isolation - product features first, then try to add AI, then bolt on analytics, then attempt growth optimization. This creates fragmented products that don't scale and users that don't convert.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1.5 mb-4 sm:mb-6 border-[#0da34e]/20 bg-[#0da34e]/5"
            >
              <span className="text-xs sm:text-sm font-normal text-[#0da34e] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                THE SOLUTION
              </span>
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-[#111111] mb-6">
              Complete Product Development
            </h2>
            <p className="text-lg md:text-xl text-[#666666] max-w-4xl mx-auto [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-relaxed">
              Instead of building pieces separately and hoping they work together, we architect complete products where AI, analytics, and growth systems are integrated from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
            <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)]">
              <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] mb-4">
                  How Complete Development Works
                </h3>
                <div className="space-y-3">
                  {[
                    "Week 1-2: Strategic foundation with Jobs-to-Be-Done research and AI readiness assessment",
                    "Week 3-8: Integrated development building product features with AI capabilities and analytics",
                    "Week 9-10: Growth system implementation with A/B testing and behavioral automation",
                    "Week 11-12: Complete product deployment with team training and optimization setup"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)]">
              <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] mb-4">
                  Why Integration Beats Isolation
                </h3>
                <div className="space-y-3">
                  {[
                    "AI features improve with analytics insights from user behavior and business data",
                    "Analytics systems reveal optimization opportunities that enhance AI effectiveness",
                    "Growth tools scale AI-enhanced user experiences for sustainable business results",
                    "Product architecture supports rapid iteration and competitive positioning"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};