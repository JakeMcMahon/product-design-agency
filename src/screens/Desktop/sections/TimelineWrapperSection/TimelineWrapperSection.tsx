import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const timelineSteps = [
  {
    number: "01",
    title: "Research & Validation (Weeks 1-2)",
    description: "Through stakeholder workshops, competitor analysis, and 20+ user interviews we uncover real problems worth solving.",
    items: [
      "Validated product strategy document",
      "User research synthesis",
      "Feature prioritization matrix",
      "Go/No-Go recommendation",
    ],
  },
  {
    number: "02",
    title: "Design & Architecture (Weeks 3-4)",
    description: "Transform insights into intuitive experiences. Information architecture, user flows, wireframes - every screen designed for clarity and conversion.",
    items: [
      "Complete design system in Figma",
      "Clickable prototype",
      "Technical architecture document",
      "Sprint development plan",
    ],
  },
  {
    number: "03",
    title: "Core Development (Weeks 5-8)",
    description: "The foundation of your product. Backend API, authentication, database optimization, payment systems. Frontend takes shape with responsive components.",
    items: [
      "Working beta version",
      "Test coverage report",
      "Deployment documentation",
      "Admin dashboard",
    ],
  },
  {
    number: "04",
    title: "Growth Engineering (Weeks 9-10)",
    description: "Engineer user success from first interaction. Progressive onboarding that doesn't overwhelm. Contextual help when needed.",
    items: [
      "Completed MVP product",
      "Analytics and metrics system",
      "Continuous growth plan",
      "Handoff and team training",
    ],
  },
];

export const TimelineWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1.5 text-sm font-normal text-black border-[#00000033] mb-6"
          >
            OUR PROCESS
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] text-center leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
            Our proven <br className="sm:hidden" />
            90-day process
          </h2>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8 sm:space-y-12">
          {timelineSteps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${
                index % 2 === 1 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#4f5bff] rounded-full flex items-center justify-center">
                <span className="text-white text-base sm:text-lg lg:text-xl font-bold [font-family:'Inter',Helvetica]">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <Card className="flex-1 bg-neutral-50 border-0 shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#111111] uppercase tracking-wide mb-2">
                      Results:
                    </h4>
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4f5bff] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            Ready to start your 90-day sprint?
          </h3>
          <p className="text-sm sm:text-base text-[#666666] mb-6 max-w-2xl mx-auto px-4">
            We guarantee a working product with PMF in 90 days or we work for free
          </p>
          <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors w-auto max-w-full">
            Get free consultation →
          </button>
        </div>
      </div>
    </section>
  );
};