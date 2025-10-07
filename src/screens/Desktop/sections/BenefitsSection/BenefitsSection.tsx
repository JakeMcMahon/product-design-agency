import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";

const benefitTimeline = [
  {
    phase: "Immediate Benefits",
    timeline: "Week 1",
    number: "01",
    color: "bg-[#4f5bff]",
    benefits: [
      {
        title: "Market Validation Clarity",
        description: "No more guessing. You know exactly which product features to build, for whom, and why they'll work.",
        metric: "100% clarity on product strategy"
      },
      {
        title: "Realistic Timeline & Budget",
        description: "A week-by-week plan showing exactly when your product will launch and what it will take to get there.",
        metric: "No timeline surprises"
      },
      {
        title: "Risk Mitigation",
        description: "No unexpected costs. No scope creep. You know exactly what you're spending and getting.",
        metric: "Fixed price, guaranteed"
      }
    ]
  },
  {
    phase: "Short-Term Benefits",
    timeline: "Month 1-3",
    number: "02",
    color: "bg-[#0da34e]",
    benefits: [
      {
        title: "Working MVP",
        description: "Not a prototype. Not a beta. A real product that users engage with and love.",
        metric: "In production and working"
      },
      {
        title: "Product-Market Fit Validation",
        description: "Data proving that users actually want what you've built, not just polite feedback.",
        metric: "87% achieve product-market fit"
      },
      {
        title: "Early Traction",
        description: "Users engage with your product, retention metrics show promise, real traction builds. Real results, not vanity metrics.",
        metric: "40% average activation rate"
      },
      {
        title: "Investor-Ready Metrics",
        description: "Dashboards showing user engagement, retention and growth. Everything investors want to see.",
        metric: "Ready for presentation"
      }
    ]
  },
  {
    phase: "Long-Term Benefits",
    timeline: "Month 3+",
    number: "03",
    color: "bg-[#111111]",
    benefits: [
      {
        title: "Competitive Advantage",
        description: "While competitors guess, you know. Every decision backed by user data and behavior analytics.",
        metric: "Data-driven decisions"
      },
      {
        title: "Scalable Foundation",
        description: "Product architecture that handles 10x growth without rewrite. Add features without breaking existing ones.",
        metric: "Built for 1M+ users"
      },
      {
        title: "Continuous Improvement",
        description: "Analytics identify opportunities. Growth experiments are ready to run. Continuous improvement is built in.",
        metric: "20% monthly improvements"
      },
      {
        title: "Team Empowerment",
        description: "Your team is trained in product-first thinking. Processes are documented. No dependency on us.",
        metric: "Full autonomy achieved"
      }
    ]
  }
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1.5 mb-4 sm:mb-6 border-[#4f5bff]/20 bg-[#4f5bff]/5"
          >
            <span className="text-xs sm:text-sm font-normal text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
              OUTCOMES
            </span>
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 sm:mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
            What You Actually Get
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#666666] leading-relaxed max-w-3xl mx-auto [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
            Beyond the product and design, here's the transformation you'll experience working with us - from day one to long-term success
          </p>
        </div>

        {/* Timeline Benefits */}
        <div className="space-y-8 sm:space-y-12">
          {benefitTimeline.map((phase, phaseIndex) => (
            <div key={phase.phase}>
              {/* Phase Header */}
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${phase.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm sm:text-base lg:text-lg font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    {phase.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    {phase.phase}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                    {phase.timeline}
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {phase.benefits.map((benefit, benefitIndex) => (
                  <Card
                    key={benefitIndex}
                    className="bg-neutral-100 border-0 hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-3 sm:mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        {benefit.description}
                      </p>
                      <div className="text-sm sm:text-base font-bold text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                        {benefit.metric}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};