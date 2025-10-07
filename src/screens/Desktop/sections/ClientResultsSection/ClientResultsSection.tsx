import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

interface ClientResultsSectionProps {
  isCompact?: boolean;  // For SEO pages with reduced spacing
}

const clientResults = [
  {
    id: "01",
    company: "HealthFlow",
    industry: "Healthcare AI",
    founder: "Dr. Sarah Chen",
    timeframe: "90 days",
    mainResult: "3M+ patients served",
    metrics: [
      { label: "PostHog events tracked", value: "500K+/day" },
      { label: "AI diagnostic accuracy", value: "94%" },
      { label: "Provider adoption", value: "89%" }
    ],
    quote: "We built a complete AI diagnostic platform with PostHog analytics that providers actually use. The integrated approach was game-changing.",
    bgColor: "bg-[#f8f9fa]",
  },
  {
    id: "02", 
    company: "RetailBoost",
    industry: "E-commerce",
    founder: "Marcus Johnson",
    timeframe: "90 days",
    mainResult: "87% revenue increase",
    metrics: [
      { label: "Amplitude conversions", value: "340%" },
      { label: "AI personalization lift", value: "156%" },
      { label: "Customer LTV", value: "$2,400" }
    ],
    quote: "Complete product redesign with AI recommendations and Amplitude tracking doubled our conversion rates in 90 days.",
    bgColor: "bg-white",
  },
  {
    id: "03",
    company: "ProjectPro", 
    industry: "SaaS",
    founder: "Lisa Rodriguez",
    timeframe: "90 days",
    mainResult: "$1.2M ARR achieved",
    metrics: [
      { label: "User growth", value: "450%" },
      { label: "Feature adoption", value: "78%" },
      { label: "Customer satisfaction", value: "96%" }
    ],
    quote: "From zero to $1.2M ARR with complete product development including AI features, PostHog analytics, and growth optimization.",
    bgColor: "bg-[#f8f9fa]",
  }
];

export const ClientResultsSection = ({ isCompact = false }: ClientResultsSectionProps = {}): JSX.Element => {
  return (
    <section className={`w-full bg-white ${isCompact ? 'py-8' : 'py-20'} relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]`}>
      <div className="w-full max-w-[1260px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0] leading-[13.5px] mb-4">
            200+ PRODUCTS BUILT
          </div>
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[46.3px] tracking-[0] leading-[54px] mb-6">
            Complete products that scale
          </h2>
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-lg leading-6 max-w-2xl mx-auto">
            Each client gets a complete product with AI integration, analytics setup, and growth systems - built for long-term success.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clientResults.map((result, index) => (
            <Card
              key={result.id}
              className={`${result.bgColor} border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-colors duration-300 translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{
                "--animation-delay": `${400 + index * 200}ms`,
              } as React.CSSProperties}
            >
              <CardContent className="p-8 pb-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-1">
                      {result.company}
                    </div>
                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                      {result.industry} • {result.timeframe}
                    </div>
                  </div>
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px]">
                    /{result.id}
                  </div>
                </div>

                {/* Main Result */}
                <div className="mb-6">
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-3xl mb-4">
                    {result.mainResult}
                  </div>
                  
                  {/* Enhanced Quote Styling */}
                  <div className="relative bg-[#f8f9fa] rounded-lg p-4 mb-3">
                    <div className="absolute -left-2 -top-2 text-[#4f5bff] text-4xl font-bold opacity-50">
                      "
                    </div>
                    <blockquote className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#333333] text-base leading-relaxed pl-4">
                      {result.quote}
                    </blockquote>
                    <div className="absolute -right-1 -bottom-1 text-[#4f5bff] text-4xl font-bold opacity-50 rotate-180">
                      "
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {result.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                        {metric.label}
                      </span>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-sm">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Attribution */}
                <div className="pt-4 border-t border-[#e5e7eb]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4f5bff]/10 rounded-full flex items-center justify-center">
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-[#4f5bff] text-sm font-bold">
                        {result.founder.split(' ')[0][0]}{result.founder.split(' ')[1] ? result.founder.split(' ')[1][0] : ''}
                      </span>
                    </div>
                    <div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#333333] text-sm">
                        {result.founder}
                      </div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs">
                        Founder, {result.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666] text-lg mb-6">
            Ready for similar results for your product?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Pricing →
            </Button>
            <Button 
              variant="outline"
              className="border-[#4f5bff] text-[#4f5bff] hover:bg-[#4f5bff] hover:text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meet the team
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};