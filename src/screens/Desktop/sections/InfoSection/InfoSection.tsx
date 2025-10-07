import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const InfoSection = (): JSX.Element => {
  const faqData = [
    {
    id: "item-1",
    number: "01",
    question: "How can your product design agency help my business?",
    answer:
      "We support your business at every stage of development - from early-stage ideation to scaling. From rapid prototypes to long-term strategies, our product design experts create customized solutions based on your business goals. On average, our clients achieve 87% product-market fit and save 20+ hours per week by focusing on strategic tasks instead of building the wrong features.",
    isExpanded: true,
  },
    {
    id: "item-2",
    number: "02",
    question: "What specific results can I expect from product design services?",
    answer: "Our clients typically see: • 87% product-market fit rate • 40% increase in user engagement • Reduction of time to market by 50% • Decrease in user churn by 20-40% • 30-80% increase in revenue through product monetization • 25-100% improvement in conversion rates through systematic testing",
    isExpanded: false,
  },
    {
    id: "item-3",
    number: "03",
    question: "Which industries and business types do you serve?",
    answer: "We specialize in various industries: • SaaS (user onboarding, feature adoption) • Fintech (financial dashboards, risk analysis) • E-commerce (shopping experiences, conversion optimization) • Healthtech (patient interfaces, telemedicine) • EdTech (learning platforms, student engagement) • Enterprise software (workflow optimization, productivity tools)",
    isExpanded: false,
  },
    {
    id: "item-4",
    number: "04",
    question: "What design methodologies and tools do you use?",
    answer: "We work with cutting-edge methodologies: • User-centered design principles • Design thinking and design sprints • Rapid prototyping with Figma and Adobe XD • User research and usability testing • Design systems and component libraries • Tools: Figma, Sketch, Adobe Creative Suite, Zeplin, InVision. We choose methodologies based on your specific project needs and timeline.",
    isExpanded: false,
  },
    {
    id: "item-5",
    number: "05",
    question: "How long does the entire product design process take?",
    answer: "Timelines depend on project scope: • Product strategy phase (research & validation) — 2-4 weeks • MVP development — 6-12 weeks • Full product-market fit — 3-6 months • We work iteratively with weekly demos, so you can see progress and test functionality within 1-2 weeks after project kickoff.",
    isExpanded: false,
  },
    {
    id: "item-6",
    number: "06",
    question: "How much do product design services cost?",
    answer: "Cost depends on project scope and complexity: • Product strategy packages — from $4,997 • MVP development — $19,997-$39,997 • Full product suite — custom quote • Monthly retainer — from $5,000 • We also offer equity partnerships for innovative startups. All projects begin with a free product audit and accurate estimate.",
    isExpanded: false,
  },
    {
    id: "item-7",
    number: "07",
    question: "How do you ensure product security and user privacy?",
    answer: "Security is our top priority: • All user data remains in secure environments • We use encryption for data at rest and in transit • Comply with GDPR, CCPA and industry standards • Sign NDAs and confidentiality agreements • Conduct regular security audits • Implement privacy-by-design principles from day one",
    isExpanded: false,
  },
    {
    id: "item-8",
    number: "08",
    question: "Do you provide team training and post-launch support?",
    answer: "Yes, we provide full-cycle support: • Training your team on design principles and user research • Detailed documentation and style guides • Technical support for critical issues • Regular updates and enhancements • Performance monitoring and optimization • Scaling solutions as your business grows • Knowledge transfer for internal design teams",
    isExpanded: false,
  },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full space-y-4"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-none bg-transparent"
            >
              <AccordionTrigger className="flex items-start justify-between w-full py-3 sm:py-6 px-0 hover:no-underline [&[data-state=open]>svg]:rotate-180]">
                <div className="flex flex-col sm:flex-row items-start w-full gap-2 sm:gap-8 pr-6 sm:pr-8">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-[#00000066] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                      {faq.number}
                    </span>
                  </div>
                  <div className="flex-1 text-left pr-2 sm:pr-4">
                    <span className="text-sm sm:text-base lg:text-xl text-[#595959] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-tight sm:leading-relaxed break-words">
                      {faq.question}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex-shrink-0 hidden sm:block sm:w-12"></div>
                  <div className="flex-1">
                    <div className="text-sm sm:text-base text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-relaxed">
                      {(() => {
                        const parts = faq.answer.split('•');
                        if (parts.length === 1) {
                          return faq.answer;
                        }
                        
                        const beforeBullets = parts[0].trim();
                        const bulletPoints = parts.slice(1).filter(point => point.trim());
                        
                        return (
                          <div className="space-y-3">
                            {beforeBullets && (
                              <p className="mb-3">{beforeBullets}</p>
                            )}
                            <ul className="space-y-2">
                              {bulletPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                                  <span>{point.trim()}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};