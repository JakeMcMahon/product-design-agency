import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

const frameworkCards = [
  {
    icon: "🚀",
    title: "RAPID Framework",
    subtitle: "Complete Product Development",
    description: "Build your entire product from concept to market with AI, analytics, and growth systems.",
    perfectFor: "Startups, new product launches, market entry",
    process: "Research & Strategy → Architect & Build → Produce & Deploy → Iterate & Optimize → Deliver Results",
    deliverables: [
      "Complete new product with AI integration",
      "Analytics and growth systems built-in",
      "Market-ready in 90 days",
      "Team trained on all systems"
    ]
  },
  {
    icon: "📈",
    title: "SCALE Process",
    subtitle: "Growth Optimization",
    description: "Transform your existing product into a growth engine with optimization, analytics, and enhancement.",
    perfectFor: "Product improvement, user growth, revenue scaling",
    process: "Strategic Analysis → Complete Enhancement → Activate Systems → Launch Growth → Expand Results",
    deliverables: [
      "Existing product optimized for growth",
      "User flows and conversion improved",
      "Analytics insights for scaling",
      "Revenue and engagement increase"
    ]
  },
  {
    icon: "🤖",
    title: "SMART Development",
    subtitle: "Strategic AI Integration",
    description: "Add intelligent capabilities to your existing product with analytics and optimization systems.",
    perfectFor: "Competitive positioning, AI capabilities, intelligent features",
    process: "Strategic AI Assessment → Modular Implementation → Activate Features → Refine & Optimize → Transform Capabilities",
    deliverables: [
      "AI features integrated seamlessly",
      "Business metrics improved measurably",
      "Competitive positioning enhanced",
      "Analytics tracking AI performance"
    ]
  },
];

export const FrameworksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] mx-auto items-start gap-10 px-4 md:px-20 py-12 relative">
      <header className="relative w-full h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] z-10 flex flex-col items-center justify-center">
        <div className="flex justify-center w-full">
          <Badge
            variant="outline"
            className="rounded-3xl px-3 py-1.5 border-[#00000033] bg-transparent"
          >
            <span className="[font-family:'Geist',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[16.1px]">
              CHOOSE YOUR PATH
            </span>
          </Badge>
        </div>

        <h2 className="mt-6 sm:mt-8 w-full [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#111111] text-3xl sm:text-4xl md:text-[56px] text-center tracking-[0] leading-tight md:leading-[53.8px] px-4">
          3 Proven Frameworks<br />
          (90 Days Each)
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 w-full relative z-0">
        {frameworkCards.map((card, index) => (
          <Card
            key={index}
            className={`rounded-xl border border-solid border-[#00000014] bg-[linear-gradient(141deg,rgba(0,0,0,1)_0%,rgba(79,91,255,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms]`}
          >
            <CardContent className="p-6 sm:p-[31px] pb-8 sm:pb-[40px] h-full flex flex-col">
              <div className="text-4xl mb-4">
                {card.icon}
              </div>

              <div className="flex flex-col items-start gap-3">
                <div>
                  <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl tracking-[0] leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-medium text-[#4f5bff] text-lg">
                    "{card.subtitle}"
                  </p>
                </div>

                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Roman',Helvetica] font-normal text-[#ffffffb8] text-base sm:text-[17px] tracking-[0] leading-[22.4px]">
                  {card.description}
                </p>

                <div className="w-full">
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm mb-1">
                    Perfect for:
                  </p>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm">
                    {card.perfectFor}
                  </p>
                </div>

                <div className="w-full">
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm mb-2">
                    How It Works:
                  </p>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm mb-4">
                    {card.process}
                  </p>
                </div>

                {/* Results Section */}
                <div className="w-full">
                  <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm mb-2">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {card.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#4f5bff] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full mt-4">
                  <Button className="w-full bg-[#4f5bff] hover:bg-[#3d47cc] text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Choose {card.title}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Assessment CTA */}
      <div className="w-full text-center mt-8">
        <Card className="bg-gray-100 border-gray-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
              Not Sure Which Framework?
            </h3>
            <p className="text-gray-600 mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
              Take our 30-second assessment to get a custom framework recommendation
            </p>
            <Button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white font-bold py-3 px-8 rounded-lg">
              Take Our 30-Second Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};