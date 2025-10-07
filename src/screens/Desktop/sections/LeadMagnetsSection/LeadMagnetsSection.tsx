import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { useSprintPDFDownload } from "../../../../hooks/useSprintPDFDownload";
import PDFDownloadPopupRU from "../../../../components/PDFDownloadPopupRU";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";

interface LeadMagnetsSectionProps {
  service?: string;
  isCompact?: boolean;  // For SEO pages with reduced spacing
}

const getLeadMagnets = (service?: string) => {
  if (service === "Product-Market Fit Guide") {
    return [
      {
        id: "product-market-fit-playbook",
        icon: "📈",
        title: "Product-Market Fit Guide",
        subtitle: "65-page guide to achieving market fit in 90 days",
        description: "Step-by-step methodology to validate your product idea with real users and achieve market fit with proven case studies",
        features: [
          "Market validation audit",
          "90-day PMF roadmap",
          "Case studies from successful launches",
          "ROI and metrics framework",
          "User research integration"
        ],
        cta: "Download Free",
        value: "Worth $3500",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }
  
  if (service === "UX Research Guide") {
    return [
      {
        id: "ux-research-playbook",
        icon: "🔍",
        title: "User Research Guide",
        subtitle: "45-page guide to understanding user needs",
        description: "Complete methodology for conducting user research and validation to build products users love",
        features: [
          "User research planning framework",
          "Interview techniques and templates",
          "Validation testing methods",
          "ROI and user feedback metrics",
          "Research implementation checklist"
        ],
        cta: "Download Free",
        value: "Worth $2000",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }
  
  if (service === "MVP Development Guide") {
    return [
      {
        id: "mvp-development-playbook",
        icon: "🚀",
        title: "MVP Development Guide",
        subtitle: "60-page guide to building your first product in 90 days",
        description: "Complete methodology for building and validating your MVP with real users. Templates, checklists, and case studies from successful product launches",
        features: [
          "MVP development frameworks",
          "User validation testing",
          "Feature prioritization methods",
          "Growth and engagement metrics",
          "Launch and iteration strategies"
        ],
        cta: "Download Free",
        value: "Worth $3000",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }

  if (service === "Аудит бизнес-процессов ИИ") {
    return [
      {
        id: "ai-audit-playbook",
        icon: "🔍",
        title: "Руководство по аудиту бизнес-процессов с ИИ",
        subtitle: "55-страничное руководство как найти 30% скрытых возможностей",
        description: "Полная методология проведения аудита готовности к ИИ с шаблонами, чек-листами и реальными кейсами российских компаний",
        features: [
          "Шаблоны аудита ИИ-готовности",
          "Методология оценки процессов",
          "Калькуляторы ROI для ИИ-проектов",
          "Roadmap внедрения на 12 месяцев",
          "Риск-анализ и план минимизации"
        ],
        cta: "Скачать бесплатно",
        value: "Стоимость 180 тыс ₽",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }
  
  if (service === "ИИ для финансовых организаций") {
    return [
      {
        id: "banking-ai-playbook",
        icon: "🏦",
        title: "Руководство по внедрению ИИ в банках",
        subtitle: "70-страничное руководство как получить ₽450+ млрд эффекта",
        description: "Полная методология внедрения ИИ в финансовых организациях с соблюдением требований ЦБ РФ и реальными кейсами Сбербанка, ВТБ",
        features: [
          "5 принципов этического кодекса ИИ ЦБ РФ",
          "Roadmap внедрения банковского ИИ на 12 месяцев",
          "Кейсы Сбербанка, ВТБ и других лидеров",
          "Шаблоны для соблюдения требований регулятора",
          "Интеграция с core banking системами"
        ],
        cta: "Скачать бесплатно",
        value: "Стоимость 300 тыс ₽",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }

  if (service === "Автоматизация в здравоохранении") {
    return [
      {
        id: "healthcare-automation-playbook",
        icon: "🏥",
        title: "Руководство по цифровизации здравоохранения",
        subtitle: "55-страничное руководство как автоматизировать медучреждение",
        description: "Полная методология внедрения МИС и ИИ в здравоохранении с соблюдением требований Минздрава РФ и интеграцией с ЕГИСЗ",
        features: [
          "Выбор и внедрение медицинских ИС (МИС)",
          "Интеграция с ЕГИСЗ и федеральными сервисами",
          "Телемедицина и удаленный мониторинг",
          "Автоматизация лабораторных процессов",
          "Кейсы ArchiMed+, Medesk и других лидеров"
        ],
        cta: "Скачать бесплатно",
        value: "Стоимость 180 тыс ₽",
        bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
      }
    ];
  }
  
  return [
    {
      id: "mvp-playbook",
      icon: "📚",
      title: "Product-Market Fit Guide",
      subtitle: "50-page guide to building products users actually want",
      description: "Complete methodology for achieving product-market fit with templates, checklists, and real case studies of successful product launches",
      features: [
        "Market validation templates",
        "User research methodologies",
        "MVP development framework",
        "Product-market fit checklist",
        "User feedback integration guide"
      ],
      cta: "Download Free",
      value: "Worth $2500",
      bgColor: "bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5"
    }
  ];
};

const freeAudit = {
  title: "Free Product-Market Fit Audit",
  subtitle: "Get professional insights in 48 hours",
  description: "Our team of experts will analyze your product idea, market opportunities, and user validation strategy",
  benefits: [
    "45-minute strategic call with founders",
    "Current state analysis and gap identification",
    "3 quick wins you can implement today",
    "Market opportunity assessment",
    "Clear roadmap with next steps",
    "No sales pressure - just valuable insights"
  ],
  stats: [
    { value: "87%", label: "implement our recommendations" },
    { value: "3x", label: "average PMF achievement" },
    { value: "48h", label: "turnaround time" }
  ],
  cta: "Get Free Audit",
  guarantee: ""
};

export const LeadMagnetsSection = ({ service, isCompact = false }: LeadMagnetsSectionProps = {}): JSX.Element => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  const {
    isOpen: isPDFOpen,
    formData: pdfFormData,
    isSubmitted: isPDFSubmitted,
    openPDFDownload,
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = useSprintPDFDownload();

  const handleLeadMagnetClick = (magnetId: string) => {
    if (magnetId === "mvp-playbook" || magnetId === "manufacturing-ai-playbook" || magnetId === "chatbot-implementation-playbook" || magnetId === "ai-audit-playbook" || magnetId === "hr-automation-playbook" || magnetId === "banking-ai-playbook" || magnetId === "healthcare-automation-playbook") {
      // Open PDF download for the playbook resources
      openPDFDownload();
    } else {
      // Open consultation for other resources
      setIsConsultationOpen(true);
    }
  };

  const handleFreeAuditClick = () => {
    setIsConsultationOpen(true);
  };

  return (
    <>
      <section className={`w-full ${isCompact ? 'py-8' : 'py-24'} bg-white`}>
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 mb-6 border-[#4f5bff]/20 bg-[#4f5bff]/5"
          >
            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#4f5bff] text-[14px] tracking-[0] leading-[13.5px]">
              FREE RESOURCES
            </span>
          </Badge>
          
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[56px] tracking-[0] leading-[58px] mb-6">
            Start without risk
          </h2>
          
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-xl leading-7 max-w-3xl mx-auto">
            Whether you're validating an idea or optimizing an existing product, these free resources will accelerate your path to product-market fit
          </p>
        </div>

        {/* Lead Magnets Grid */}
        <div className={`grid grid-cols-1 gap-8 mb-20 ${getLeadMagnets(service).length === 1 ? 'max-w-md mx-auto' : 'lg:grid-cols-3'}`}>
          {getLeadMagnets(service).map((magnet, index) => (
            <Card
              key={magnet.id}
              className={`${magnet.bgColor} border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-all duration-300 translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{
                "--animation-delay": `${200 + index * 200}ms`,
              } as React.CSSProperties}
            >
              <CardContent className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{magnet.icon}</div>
                  <Badge className="bg-white/80 text-[#4f5bff] border-0 px-3 py-1">
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-xs">
                      {magnet.value}
                    </span>
                  </Badge>
                </div>

                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-2xl mb-2">
                    {magnet.title}
                  </h3>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] text-[#4f5bff] text-sm mb-3">
                    {magnet.subtitle}
                  </p>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm leading-relaxed">
                    {magnet.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {magnet.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#4f5bff] rounded-full mt-2 flex-shrink-0" />
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-[#111111] hover:bg-[#4f5bff] text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-sm py-3 transition-colors"
                  onClick={() => handleLeadMagnetClick(magnet.id)}
                >
                  {magnet.cta} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Audit Section */}
        <Card className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-12">
                <Badge className="bg-[#4f5bff] text-white mb-6">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-xs">
                    MOST POPULAR
                  </span>
                </Badge>

                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl mb-3">
                  {freeAudit.title}
                </h3>
                
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] text-[#4f5bff] text-lg mb-4">
                  {freeAudit.subtitle}
                </p>
                
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-base mb-8 leading-relaxed">
                  {freeAudit.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {freeAudit.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-3xl mb-1">
                        {stat.value}
                      </div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-xs">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={handleFreeAuditClick}
                >
                  <span className="block sm:hidden">Бесплатный аудит →</span>
                  <span className="hidden sm:block">{freeAudit.cta} →</span>
                </Button>

              </div>

              {/* Right Content - Benefits */}
              <div className="bg-[#4f5bff]/10 p-12">
                <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-8">
                  Что вы получите:
                </h4>
                
                <div className="space-y-4">
                  {freeAudit.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#4f5bff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-base leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/10 rounded-xl">
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm italic">
                    "The audit alone saved us 3 months of building the wrong features. Their insights on our user onboarding were groundbreaking."
                  </p>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm mt-3">
                    - Sarah Chen, Founder of MedTechPlus
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] text-[#666666] text-lg mb-2">
            Join 50+ founders who accelerated their product launches with our resources
          </p>
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#999999] text-sm">
            No spam, no fluff. Just actionable insights from 30+ successful product launches.
          </p>
        </div>
      </div>
    </section>

    {/* PDF Download Popup */}
    <PDFDownloadPopupRU
      isOpen={isPDFOpen}
      onClose={closePDFDownload}
      formData={pdfFormData}
      isSubmitted={isPDFSubmitted}
      onFormChange={handlePDFFormChange}
      onSubmit={handlePDFSubmit}
    />

    {/* Consultation Popup */}
    <ConsultationPopupRU
      isOpen={isConsultationOpen}
      onClose={() => setIsConsultationOpen(false)}
      title="Schedule your free consultation"
      description="Discuss your product development needs with our experts"
    />
  </>
  );
};