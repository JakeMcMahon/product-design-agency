import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const guarantees = [
  {
    icon: "🎯",
    title: "Zero Failure Guarantee",
    description: "If your product doesn't achieve measurable traction within 6 months of launch, we'll rebuild it for free.",
    details: "200+ products built, zero failures. We're confident because we've never had a product fail to find its market.",
    riskFree: "Complete rebuild at no cost"
  },
  {
    icon: "⏰",
    title: "90-Day Delivery Promise",
    description: "Your complete product with AI, analytics, and growth systems delivered on time, or you get your money back.",
    details: "Every framework is designed for exactly 90 days. We've streamlined our process to hit this timeline consistently.",
    riskFree: "Full refund if we're late"
  },
  {
    icon: "🔄",
    title: "Unlimited Revisions",
    description: "We iterate until you're completely satisfied with every aspect of your product. No limits, no additional cost.",
    details: "Your vision matters. We'll refine and perfect until your product matches exactly what you need.",
    riskFree: "Revisions until perfect"
  },
  {
    icon: "📊",
    title: "Analytics Performance Guarantee",
    description: "PostHog and Amplitude will be fully configured and tracking actionable insights, or we'll extend support.",
    details: "Analytics that actually help you make decisions. If the data isn't actionable, we'll fix it.",
    riskFree: "Extended support included"
  }
];

export const GuaranteesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* 90-Day Guarantee Statement */}
        <Card 
          className="rounded-xl border border-solid border-[#00000014]"
          style={{
            background: "linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(16, 185, 129, 0.8) 100%)"
          }}>
          <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] text-center">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1.5 mb-6 border-white/20 bg-white/10"
            >
              <span className="text-xs sm:text-sm font-normal text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                ZERO RISK
              </span>
            </Badge>

            <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-[0] leading-tight mb-6">
              90-Day Complete Product Guarantee
            </h3>
            
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] font-normal text-[#ffffffb8] text-lg sm:text-xl tracking-[0] leading-[22.4px] mb-6 max-w-3xl mx-auto">
              We'll deliver your complete product in 90 days or less - guaranteed. You don't pay until we deliver everything below, exactly as promised.
            </p>

            {/* What's Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8 max-w-4xl mx-auto">
              {[
                "Complete AI integration with LLMs or custom AI/ML/DL models",
                "Full PostHog analytics setup with custom events",
                "Amplitude behavioral tracking and cohort analysis",
                "A/B testing infrastructure with automated reporting",
                "Growth optimization systems and monitoring",
                "Team training and comprehensive documentation",
                "90 days post-launch support and optimization",
                "Market-ready product deployed to production"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffffb8] text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#ffffff99] text-sm mb-8">
              That's how confident we are that you'll love your complete product.
            </div>
            
            <Button 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold text-lg px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Risk-Free Project →
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};