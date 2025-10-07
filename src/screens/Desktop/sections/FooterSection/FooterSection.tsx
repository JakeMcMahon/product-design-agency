import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Data for services columns
  const shapingExperiencesServices = [
  "Product Strategy",
  "User Research",
  "UI/UX Design",
  "MVP Development",
];

const whereWeShineServices = [
  "SaaS",
  "Fintech",
  "E-commerce",
  "Healthtech",
];

  const behindTheScreensLinks = [
    { text: "OUR STORY", isBold: true },
    { text: "CAREERS", isBold: true },
    { text: "TERMS OF USE", isBold: true },
    { text: "PRIVACY POLICY", isBold: true },
  ];

  const socialButtons = [
    "LINKEDIN",
    "TWITTER",
    "DRIBBBLE",
    "BEHANCE",
    "MEDIUM",
  ];

  const industriesData = [
    { items: ["Производство", "Банки и финансы"] },
    { items: ["Ритейл", "Логистика"] },
    { items: ["Недвижимость"] },
  ];

  const processServices = ["Пилотный проект", "Масштабирование"];

  const servicesData = [
    {
      column: 0,
      items: [
        "Product Strategy",
        "Market Research",
        "User Research",
        "UX/UI Design",
        "MVP Development",
        "Product Analytics",
        "Growth Engineering",
        "Product Discovery",
        "Design Systems",
        "User Testing",
        "Product Validation",
      ],
    },
    {
      column: 1,
      items: [
        "Process Discovery",
        "User Journey Mapping",
        "Prototyping",
        "Design Thinking",
        "Design Sprints",
        "User Onboarding",
        "Conversion Optimization",
        "Retention Strategies",
        "Digital Transformation",
        "Product Leadership",
        "Healthtech Solutions",
      ],
    },
    {
      column: 2,
      items: [
        "SaaS Product Design",
        "Digital Product Solutions",
        "B2B Product Design",
        "System Architecture",
        "Web Design Consulting",
        "Product Strategy",
        "Brand Identity",
        "Growth Marketing",
        "Startup Automation",
        "E-commerce Design",
        "Hospitality Solutions",
      ],
    },
    {
      column: 3,
      items: [
        "Web Applications",
        "System Modernization",
        "Design Automation",
        "Process Redesign",
        "Pilot Projects",
        "Logo Design",
        "No-code Solutions",
        "Rapid Prototyping",
        "Creative Solutions",
        "Hospitality Design",
      ],
    },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-8 sm:gap-12 lg:gap-16 pt-8 sm:pt-12 lg:pt-16 pb-6 px-4 sm:px-6 lg:px-8 bg-[#111111] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="flex w-full max-w-7xl mx-auto items-start justify-between flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex flex-col w-full lg:w-1/2 items-start relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
            Ready to launch your product?
          </h2>
          
          <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-[#6b7bff] text-base sm:text-lg">📧</div>
              <a href="mailto:hello@productdesign.agency" className="text-white text-sm sm:text-base lg:text-lg hover:text-[#8b9bff] transition-colors break-all [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                hello@productdesign.agency
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-[#6b7bff] text-base sm:text-lg">📱</div>
              <a href="tel:+15551234567" className="text-white text-sm sm:text-base lg:text-lg hover:text-[#8b9bff] transition-colors [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-[#6b7bff] text-base sm:text-lg">💬</div>
              <a href="https://calendly.com/product-design-agency" className="text-white text-sm sm:text-base lg:text-lg hover:text-[#8b9bff] transition-colors [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica]">
                Schedule a free consultation
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col w-full lg:w-1/2 items-start">
          <div className="flex flex-col w-full items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
              <div className="text-[#666666] text-xs sm:text-sm font-bold uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                LET'S CONNECT:
              </div>

              <Button
                variant="outline"
                className="w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 rounded-full border border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white hover:text-black text-xs sm:text-sm text-center whitespace-normal sm:whitespace-nowrap">
                  VIEW OUR PRESENTATION
                </span>
              </Button>
            </div>

            <div className="flex flex-col items-start gap-2 sm:gap-3 w-full">
              <div className="text-[#666666] text-xs sm:text-sm font-bold uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                OUR LOCATION:
              </div>

              <div className="flex flex-col items-start w-full">
                <address className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-base sm:text-lg lg:text-2xl xl:text-3xl leading-relaxed not-italic">
                  San Francisco Design District
                  <br />
                  123 Innovation Street,
                  <br />
                  San Francisco, CA 94107
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#666666] uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
              OUR SERVICES:
            </h3>

            {shapingExperiencesServices.map((service, index) => (
              <div key={index} className="text-sm sm:text-base text-white hover:text-gray-300 cursor-pointer transition-colors [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                {service}
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#666666] uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
              INDUSTRIES WE SERVE:
            </h3>

            {whereWeShineServices.map((service, index) => (
              <div key={index} className="text-sm sm:text-base text-white hover:text-gray-300 cursor-pointer transition-colors [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                {service}
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#666666] uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
              ABOUT US:
            </h3>

            <div className="flex flex-col gap-2 sm:gap-3">
              {behindTheScreensLinks.map((link, index) => (
                <div key={index} className="text-xs sm:text-sm font-bold text-white hover:text-gray-300 cursor-pointer transition-colors uppercase [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                  {link.text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-bold text-[#666666] uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
              FOLLOW US:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
              {socialButtons.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="py-2 px-3 rounded-full border border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors"
                >
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white hover:text-black text-xs sm:text-sm text-center whitespace-nowrap">
                    {social}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>


        <div className="flex flex-col w-full items-start justify-center pt-8 sm:pt-12 lg:pt-16 mt-8 sm:mt-12">
          <div className="flex w-full items-start justify-center">
            <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
              <h3 className="text-xs sm:text-sm font-bold text-[#666666] uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                FULL SERVICE LIST:
              </h3>

              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {servicesData.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col gap-2 sm:gap-3">
                      {column.items.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-xs sm:text-sm text-white hover:text-gray-300 cursor-pointer transition-colors [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                          {service}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-7xl mx-auto items-start pt-8 sm:pt-12 relative border-t border-[#3d3d3d]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-6">
          <div className="text-xs sm:text-sm text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
            Jake McMahon & Rehan Yaseen — Product Design Agency.
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <div className="text-xs sm:text-sm text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
              All rights reserved
            </div>

            <div className="text-xs sm:text-sm text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
              © 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
