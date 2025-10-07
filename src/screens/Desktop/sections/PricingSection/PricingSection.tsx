import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../../../hooks/useSprintContactForm";

const pricingPackages = [
  {
    name: "RAPID Framework",
    price: "$39,997",
    description: "Complete new product development in 90 days",
    timeline: "90 Days",
    features: [
      "Jobs-to-Be-Done research with PostHog implementation",
      "Complete product built with AI integration (OpenAI GPT-4)",
      "Amplitude analytics setup with behavioral tracking",
      "Growth systems and A/B testing infrastructure",
      "User onboarding optimization with conversion tracking",
      "Mobile-responsive design with analytics integration",
      "Team training on all systems and processes",
      "90 days post-launch optimization support"
    ],
    popular: false
  },
  {
    name: "SCALE Framework", 
    price: "$29,997",
    description: "Transform existing product into growth engine",
    timeline: "90 Days",
    features: [
      "Existing product audit with PostHog event mapping",
      "AI feature integration with performance monitoring", 
      "Amplitude behavioral analysis and optimization",
      "Conversion funnel improvement with A/B testing",
      "User journey optimization with analytics tracking",
      "Growth automation systems implementation",
      "Analytics dashboard with business intelligence",
      "60 days post-launch growth monitoring"
    ],
    popular: true
  },
  {
    name: "SMART Framework",
    price: "$24,997", 
    description: "Add AI capabilities to existing product",
    timeline: "90 Days",
    features: [
      "AI readiness assessment with current product analysis",
      "Strategic AI feature integration (GPT-4, ML models)",
      "PostHog events for AI feature tracking and optimization",
      "Amplitude setup for AI performance measurement",
      "AI-enhanced user experience design and implementation",
      "Performance monitoring and optimization systems",
      "Team training on AI systems and analytics",
      "45 days post-launch AI optimization support"
    ],
    popular: false
  },
  {
    name: "Enterprise Complete Product",
    price: "Custom Quote",
    description: "Full enterprise product ecosystem",
    timeline: "6-12 Months",
    features: [
      "Complete product ecosystem development with AI",
      "Advanced PostHog and Amplitude enterprise setup",
      "Custom AI model development and deployment",
      "Enterprise-grade analytics and business intelligence",
      "Multi-platform development (web, iOS, Android)",
      "Advanced security and compliance implementation",
      "Dedicated team with weekly strategic sessions",
      "12 months ongoing optimization and support"
    ],
    popular: false
  }
];

export const PricingSection = (): JSX.Element => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  const handlePricingDetailsClick = () => {
    window.location.href = '/pricing';
  };

  return (
    <>
    <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <Card className="w-full max-w-[1260px] mx-auto bg-[#ffffff01] rounded-[26.81px] shadow-[0px_32.39px_13.4px_#6c718003,0px_18.99px_11.17px_#6c71800a,0px_7.82px_7.82px_#6c718012,0px_2.23px_4.47px_#6c718014] border-[6.7px] border-solid border-[#f8f8f8]">
        <CardContent className="p-0 h-auto rounded-[26.81px] relative overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 bg-black rounded-[20.11px] -z-10" />

          <div className="flex flex-col h-full">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <img
                className="w-full h-full object-cover rounded-t-[20.11px]"
                alt="Pricing background"
                src="https://c.animaapp.com/meoanmv4HLBh9Z/img/ticker.svg"
              />
            </div>

            <div className="flex-1 bg-[#1c1c1c] rounded-b-[17.87px] relative overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="h-full p-6 sm:p-8 md:p-10 overflow-y-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                  <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
                    Complete Product Development
                  </h2>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
                    Choose your framework - each includes AI integration, analytics setup, and growth systems
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="space-y-6 mb-8">
                  {pricingPackages.map((pkg, index) => (
                    <div
                      key={pkg.name}
                      className={`p-6 sm:p-8 pb-8 border rounded-xl transition-all duration-300 relative translate-y-[-1rem] animate-fade-in opacity-0 ${
                        pkg.popular
                          ? 'border-2 border-[#4f5bff] bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5 shadow-[0_0_30px_rgba(79,91,255,0.2)]'
                          : 'border border-white/10 hover:border-[#4f5bff]/30'
                      }`}
                      style={{
                        '--animation-delay': `${700 + index * 100}ms`,
                      } as React.CSSProperties}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-6">
                          <span className="bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                            ⭐ MOST POPULAR
                          </span>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-1">
                            {pkg.name}
                          </h3>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                            {pkg.description}
                          </p>
                          {pkg.timeline && (
                            <div className="mt-2">
                              <span className="inline-block bg-[#4f5bff]/20 text-[#4f5bff] px-2 py-1 rounded-md text-xs font-medium">
                                {pkg.timeline}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-left sm:text-right ml-0 sm:ml-6 w-full sm:w-auto">
                          <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-2xl">
                            {pkg.price}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6 sm:mb-8 pb-4">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#4f5bff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-[#4f5bff] rounded-full" />
                            </div>
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full h-10 sm:h-12 rounded-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-sm transition-colors ${
                          pkg.popular
                            ? 'bg-[#4f5bff] text-white hover:bg-[#4f5bff]/90'
                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        Choose Package
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Equity Partnership */}
                <div className="mb-6 sm:mb-8 p-6 sm:p-8 pb-8 border border-white/10 rounded-xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:950ms]">
                  <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-1">
                      Equity Partnership
                    </h3>
                    <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                      We invest $50K+ in development for 5-10% equity. Perfect for growing startups.
                    </p>

                  <div className="space-y-3 mb-6 sm:mb-8">
                    {[
                      "Complete product development & launch",
                      "Continuous optimization & growth", 
                      "Weekly growth experiments",
                      "Advanced product analytics",
                      "12-month active partnership"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#4f5bff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-[#4f5bff] rounded-full" />
                        </div>
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full h-10 sm:h-12 rounded-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-sm transition-colors bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    onClick={openConsultationPopup}
                  >
                    Discuss Partnership
                  </Button>
                </div>

                {/* CTA */}
                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                  <Button
                    className="w-full min-h-[60px] sm:min-h-[60px] py-3 bg-white text-black rounded-[25px] sm:rounded-[30px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-sm sm:text-lg leading-[18px] sm:leading-[24px] hover:bg-gray-100 transition-colors"
                    size="lg"
                    onClick={handlePricingDetailsClick}
                  >
                    <span className="block sm:hidden">
                      Package details &<br />personalized quote
                    </span>
                    <span className="hidden sm:block">
                      View package details and get personalized quote
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Discuss Your Product Project"
        description="Get a personalized quote and detailed consultation for your product development needs"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};
