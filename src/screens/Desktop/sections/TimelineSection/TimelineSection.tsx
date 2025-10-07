import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "https://c.animaapp.com/meoanmv4HLBh9Z/img/small-image.svg",
    title: "AI Engineering Experts",
    description: "Specialists in building AI into apps with complete product integration",
    deliverables: [
      "OpenAI GPT-4 integration with custom training",
      "Machine Learning models deployed with monitoring",
      "Natural Language Processing with PostHog event tracking",
      "Computer Vision solutions with Amplitude analytics",
      "Custom AI algorithms with performance dashboards",
      "AI optimization based on user behavior data"
    ]
  },
  {
    icon: "https://c.animaapp.com/meoanmv4HLBh9Z/img/small-image-1.svg",
    title: "Analytics & Growth Experts",
    description: "Experts in complete analytics setup with PostHog, Amplitude, and growth optimization",
    deliverables: [
      "Complete PostHog installation with custom events",
      "Amplitude behavioral cohort analysis setup",
      "Jobs-to-be-Done research with analytics tracking",
      "A/B testing infrastructure with automated reporting",
      "Growth monitoring dashboards with real-time alerts",
      "Conversion funnel optimization with AI insights"
    ]
  },
  {
    icon: "https://c.animaapp.com/meoanmv4HLBh9Z/img/small-image-2.svg",
    title: "Complete Product Design Experts",
    description: "Experts in building products where design, AI, and analytics work together seamlessly",
    deliverables: [
      "User Interface with integrated analytics tracking",
      "User Experience optimized for AI feature adoption",
      "Design Systems with PostHog event components",
      "Interactive Prototypes with A/B testing built-in",
      "Usability Testing with Amplitude behavioral analysis",
      "Growth-oriented design with conversion optimization"
    ]
  },
];

export const TimelineSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] mx-auto items-start gap-10 px-4 md:px-20 py-0 relative">
      <header className="relative w-full h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] z-10 flex flex-col items-center justify-center">
        <div className="flex justify-center w-full">
          <Badge
            variant="outline"
            className="rounded-3xl px-3 py-1.5 border-[#00000033] bg-transparent"
          >
            <span className="[font-family:'Geist',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[16.1px]">
              OUR EXPERTISE
            </span>
          </Badge>
        </div>

        <h2 className="mt-6 sm:mt-8 w-full [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#111111] text-3xl sm:text-4xl md:text-[56px] text-center tracking-[0] leading-tight md:leading-[53.8px] px-4">
          How our expertise <br />
          delivers product-market fit success
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full relative z-0">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className={`rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms]`}
          >
            <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
                alt="Feature icon"
                src={card.icon}
              />

              <div className="flex flex-col items-start gap-3">
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-xl sm:text-xl tracking-[0] leading-[22.4px] whitespace-normal">
                  {card.title}
                </h3>

                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] font-normal text-[#ffffffb8] text-base sm:text-[17px] tracking-[0] leading-[22.4px]">
                  {card.description}
                </p>

                {/* Deliverables Section */}
                <div className="w-full mt-4">
                  <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm mb-2">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {card.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-xs sm:text-sm">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
