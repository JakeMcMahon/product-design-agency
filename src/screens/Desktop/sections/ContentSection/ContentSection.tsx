import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../../../hooks/useSprintContactForm";

const pricingPlans = [
  {
    id: "startup-mvp",
    title: "Product Strategy",
    description: "Validate your idea before building",
    price: "$4,997",
    buttonText: "Get Started",
    buttonStyle:
      "bg-[linear-gradient(180deg,rgba(16,16,17,1)_0%,rgba(43,43,44,1)_100%)] border-[#101011]",
    features: [
      "Market Research & Validation (3-week sprint)",
      "User persona development",
      "Competitor analysis",
      "Product requirements document",
      "2 strategy sessions",
      "Roadmap creation",
      "Risk assessment",
      "30 days post-launch support",
    ],
  },
  {
    id: "growth-ready",
    title: "MVP Development",
    description: "From concept to working product",
    price: "$19,997",
    buttonText: "Get Started",
    buttonStyle:
      "bg-[linear-gradient(180deg,rgba(82,53,239,1)_0%,rgba(135,113,255,1)_100%)] border-[#5235ef]",
    isPopular: true,
    features: [
      "Complete MVP development (8-week sprint)",
      "All from 'Product Strategy' package",
      "Advanced analytics & reporting",
      "User testing & feedback integration",
      "Technical architecture planning",
      "API documentation",
      "Deployment & hosting setup",
      "60 days post-launch support",
    ],
  },
  {
    id: "scale-mvp",
    title: "Product-Market Fit",
    description: "Scale to 100K+ users",
    price: "$39,997",
    buttonText: "Get Started",
    buttonStyle:
      "bg-[linear-gradient(180deg,rgba(16,16,17,1)_0%,rgba(43,43,44,1)_100%)] border-[#101011]",
    features: [
      "Complete product development (12-week sprint)",
      "All from 'MVP Development' package",
      "A/B testing & growth experiments",
      "Growth dashboard",
      "Advanced ML features",
      "Scalable architecture implementation",
      "Security & compliance setup",
      "Automated testing",
      "Growth & retention features",
      "Advanced onboarding",
      "90 days post-launch support",
    ],
  },
];

const enterprisePlans = [
  {
    id: "enterprise",
    title: "Full Product Suite",
    description: "Complex multi-platform products",
    price: "Custom Quote",
    buttonText: "Get Started",
    buttonStyle:
      "bg-[linear-gradient(180deg,rgba(16,16,17,1)_0%,rgba(43,43,44,1)_100%)] border-[#101011]",
    features: [
      "Complete product ecosystem",
      "Mobile applications (iOS and Android)",
      "Advanced AI/ML pipelines",
      "Real-time features",
      "Microservices architecture",
      "Enterprise integrations",
      "Custom data storage",
      "Advanced monitoring",
      "Compliance standards",
      "Dedicated team for 6 months",
    ],
  },
  {
    id: "equity",
    title: "Equity Partnership",
    description: "We invest $50K+ for 5-10% equity",
    price: "Equity",
    buttonText: "Discuss Partnership",
    buttonStyle:
      "bg-[linear-gradient(180deg,rgba(16,16,17,1)_0%,rgba(43,43,44,1)_100%)] border-[#101011]",
    features: [
      "Complete product development & launch",
      "Continuous optimization & growth",
      "Weekly growth experiments",
      "Advanced product analytics",
      "12-month active partnership",
    ],
  },
];

export const ContentSection = (): JSX.Element => {
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

  return (
    <>
    <section className="flex flex-col w-full items-center gap-[73px] relative px-4 sm:px-6 lg:px-8">
      <header className="relative w-full max-w-[1280px] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex justify-center mb-[37px]">
          <Badge
            variant="outline"
            className="rounded-3xl border-[#00000033] px-3 py-1.5"
          >
            <span className="[font-family:'Geist',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[16.1px]">
              PRODUCT PACKAGES
            </span>
          </Badge>
        </div>

        <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#111111] text-[56px] text-center tracking-[0] leading-[53.8px] max-w-[753px] mx-auto">
          Every package includes <br />
          a working product
        </h2>
      </header>

      <div className="flex flex-col gap-[23px] w-full max-w-[1260px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`rounded-2xl border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 flex flex-col relative ${
                (plan as any).isPopular 
                  ? 'bg-gradient-to-b from-[#5235ef]/10 to-[#f7f8fa] ring-2 ring-[#5235ef]/20' 
                  : 'bg-[#f7f8fa]'
              }`}
              style={{ "--animation-delay": `${400 + index * 200}ms` }}
            >
              {(plan as any).isPopular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#5235ef] text-white border-0 px-3 py-1 text-xs font-medium">
                    Популярный выбор
                  </Badge>
                </div>
              )}
              <CardContent className="p-8 flex flex-col h-full">
                {/* Header Section - Fixed Height */}
                <div className="mb-8">
                  <div className="flex flex-col gap-4 min-h-24 lg:min-h-28">
                    <div>
                      <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#101011] text-[24px] tracking-[-0.48px] leading-[28px] mb-2">
                        {plan.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#606266] text-[15px] tracking-[-0.3px] leading-[20px]">
                        {plan.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#101011] text-[36px] tracking-[-1.44px] leading-[40px]">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features Section - Flexible Height with minimum */}
                <div className="flex-1 mb-8">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-[14px] tracking-[0] leading-[18px] mb-5 uppercase">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.slice(0, 8).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4f5bff] to-[#3d47cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2b2b2c] text-[15px] tracking-[-0.3px] leading-[20px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <Button
                  className={`w-full h-12 lg:h-14 rounded-xl text-white text-base font-medium tracking-[-0.32px] leading-[20px] [font-family:'Inter',Helvetica] ${plan.buttonStyle} hover:opacity-90 transition-opacity`}
                  onClick={openConsultationPopup}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          {enterprisePlans.map((plan, index) => (
            <Card
              key={plan.id}
              className="bg-[#f7f8fa] rounded-2xl border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 flex flex-col"
              style={{ "--animation-delay": `${1200 + index * 200}ms` }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Header Section - Fixed Height */}
                <div className="mb-8">
                  <div className="flex flex-col gap-4 min-h-24 lg:min-h-28">
                    <div>
                      <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#101011] text-[24px] tracking-[-0.48px] leading-[28px] mb-2">
                        {plan.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#606266] text-[15px] tracking-[-0.3px] leading-[20px]">
                        {plan.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#101011] text-[36px] tracking-[-1.44px] leading-[40px]">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features Section - Flexible Height */}
                <div className="flex-1 mb-8">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-[14px] tracking-[0] leading-[18px] mb-5 uppercase">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4f5bff] to-[#3d47cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2b2b2c] text-[15px] tracking-[-0.3px] leading-[20px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <Button
                  className={`w-full h-12 lg:h-14 rounded-xl text-white text-base font-medium tracking-[-0.32px] leading-[20px] [font-family:'Inter',Helvetica] ${plan.buttonStyle} hover:opacity-90 transition-opacity`}
                  onClick={openConsultationPopup}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <ConsultationPopupRU
      isOpen={isConsultationOpen}
      onClose={closeConsultationPopup}
      title="Book your free product consultation"
      description="Discuss your product development needs with our experts"
      onSubmit={submitContactForm}
      isSubmitting={isContactSubmitting}
      isSubmitted={isContactSubmitted}
      error={contactError}
      successMessage={contactSuccessMessage}
    />
    </>
  );
};
