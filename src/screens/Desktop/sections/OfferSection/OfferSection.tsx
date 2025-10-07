import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const OfferSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1.5 mb-4 sm:mb-6 border-[#4f5bff]/20 bg-[#4f5bff]/5"
          >
            <span className="text-xs sm:text-sm font-normal text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
              OUR OFFER
            </span>
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 sm:mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
            Build Your New App, AI Feature or User Flow<br />
            <span className="text-[#4f5bff]">in 90 Days or Less - Guaranteed</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#666666] leading-relaxed max-w-3xl mx-auto [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
            We deliver complete products with AI integration, analytics setup, and growth systems - not just basic features. Every project comes with our zero-failure guarantee.
          </p>
        </div>

        {/* Main Offer Card */}
        <Card className="rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)] mb-12">
          <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] text-center">
            <div className="text-6xl mb-6">🎯</div>
            
            <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-[0] leading-tight mb-6">
              Complete Product Development
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg mb-2">
                  New Products
                </h4>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm">
                  Complete apps with AI, analytics, and growth systems built from scratch
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg mb-2">
                  AI Features
                </h4>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm">
                  Strategic AI integration with PostHog tracking and performance monitoring
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg mb-2">
                  User Flows
                </h4>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm">
                  Optimized user journeys with Amplitude behavioral analysis and A/B testing
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 mb-8">
              <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-4">
                What's Included in Every Project:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  "Jobs-to-Be-Done research and validation",
                  "AI integration (OpenAI GPT-4, custom models)",
                  "Complete PostHog analytics setup",
                  "Amplitude behavioral tracking",
                  "A/B testing infrastructure",
                  "Growth optimization systems",
                  "Team training and documentation",
                  "90 days post-launch support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl mb-2">
                90 Days or Less
              </div>
              <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-lg mb-6">
                Complete delivery guaranteed, or your money back
              </div>
              
              <Button 
                className="bg-white text-[#4f5bff] hover:bg-gray-100 font-bold text-lg px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Choose Your Framework →
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Guarantee Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-[#111111] mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                90-Day Guarantee
              </h4>
              <p className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                Delivered on time or your money back
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-[#111111] mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                Zero Failures
              </h4>
              <p className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                200+ products built, zero failures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="text-lg font-bold text-[#111111] mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                Unlimited Revisions
              </h4>
              <p className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                We iterate until you're satisfied
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};