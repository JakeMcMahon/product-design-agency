import React from "react";
import { ContentSection } from "../screens/Desktop/sections/ContentSection/ContentSection";
import { FeaturesSection } from "../screens/Desktop/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "../screens/Desktop/sections/FooterSection/FooterSection";
import { HeaderSectionRU } from "../screens/Desktop/sections/HeaderSection/HeaderSectionRU";
import { InfoSection } from "../screens/Desktop/sections/InfoSection/InfoSection";
import { MainContentSection } from "../screens/Desktop/sections/MainContentSection/MainContentSection";
import { MainWrapperSection } from "../screens/Desktop/sections/MainWrapperSection/MainWrapperSection";
import { PricingSection } from "../screens/Desktop/sections/PricingSection/PricingSection";
import { SectionWrapper } from "../screens/Desktop/sections/SectionWrapper/SectionWrapper";
import { TimelineSection } from "../screens/Desktop/sections/TimelineSection/TimelineSection";
import { TimelineWrapperSection } from "../screens/Desktop/sections/TimelineWrapperSection/TimelineWrapperSection";
import { VSLSection } from "../screens/Desktop/sections/VSLSection/VSLSection";
import { ClientResultsSection } from "../screens/Desktop/sections/ClientResultsSection/ClientResultsSection";
import { LeadMagnetsSection } from "../screens/Desktop/sections/LeadMagnetsSection/LeadMagnetsSection";
import { BenefitsSection } from "../screens/Desktop/sections/BenefitsSection/BenefitsSection";
import { DocumentAutomationBenefits } from "../screens/Desktop/sections/DocumentAutomationBenefits/DocumentAutomationBenefits";
import { ManufacturingAIBenefits } from "../screens/Desktop/sections/ManufacturingAIBenefits/ManufacturingAIBenefits";
import { ChatbotBenefits } from "../screens/Desktop/sections/ChatbotBenefits/ChatbotBenefits";
import { HRAutomationBenefits } from "../screens/Desktop/sections/HRAutomationBenefits/HRAutomationBenefits";
import { ProcessAuditBenefits } from "../screens/Desktop/sections/ProcessAuditBenefits/ProcessAuditBenefits";
import { BankingAIBenefits } from "../screens/Desktop/sections/BankingAIBenefits/BankingAIBenefits";
import { HealthcareAutomationBenefits } from "../screens/Desktop/sections/HealthcareAutomationBenefits/HealthcareAutomationBenefits";
import { AboutSection } from "../screens/Desktop/sections/AboutSection/AboutSection";
import { ServiceFAQSection } from "../screens/Desktop/sections/ServiceFAQSection/ServiceFAQSection";

interface SEOPageData {
  service: string;           // e.g., "Документооборот", "CRM", "Аналитика"
  location?: string;         // e.g., "Москва", "СПб", "Екатеринбург"
  industry?: string;         // e.g., "Производство", "Финансы", "Ритейл"
  title: string;            // Custom page title
  description: string;      // Custom page description
  keywords: string[];       // SEO keywords
  heroContent?: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  customSections?: {
    showVSL?: boolean;
    showClientResults?: boolean;
    showPricing?: boolean;
    showBenefits?: boolean;
    showAbout?: boolean;
    showLeadMagnets?: boolean;
    showFeatures?: boolean;
  };
}

interface SEOProgrammaticTemplateProps {
  seoData: SEOPageData;
}

/**
 * SEO Programmatic Template
 * 
 * This template uses the EXACT same structure as the homepage (AIAutomationRussiaAgency.tsx)
 * but allows for customization of content through props. All styling, components, and 
 * design patterns are copied exactly from the homepage.
 * 
 * Usage:
 * - Copy homepage structure exactly
 * - Use same components in same order
 * - Customize only content, never styling
 * - Maintain exact animation delays and spacing
 */
export const SEOProgrammaticTemplate: React.FC<SEOProgrammaticTemplateProps> = ({ seoData }) => {
  // Set default sections if not specified
  const sections = {
    showVSL: true,
    showClientResults: true,
    showPricing: true,
    showBenefits: true,
    showAbout: true,
    showLeadMagnets: true,
    showFeatures: true,
    ...seoData.customSections
  };

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden" data-model-id="2:4">
      {/* SEO Head section would go here in actual implementation */}
      
      <div className="bg-white w-full flex flex-col">
        
        {/* Header Section - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <HeaderSectionRU 
            customTitle={seoData.heroContent?.title}
            customSubtitle={seoData.heroContent?.subtitle}
            customCTA={seoData.heroContent?.ctaText}
            isCompact={true}
          />
        </section>

        {/* VSL Section - EXACT COPY from homepage */}
        {sections.showVSL && (
          <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] mt-20">
            <VSLSection />
          </section>
        )}

        {/* Benefits Section - MOVED UP for immediate value communication */}
        {sections.showBenefits && (
          <section id="outcomes" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-8 md:mt-12">
            {seoData.service === "Автоматизация документооборота" ? (
              <DocumentAutomationBenefits />
            ) : seoData.service === "Внедрение ИИ в производство" ? (
              <ManufacturingAIBenefits />
            ) : seoData.service === "Чат-боты для бизнеса" ? (
              <ChatbotBenefits />
            ) : seoData.service === "Автоматизация HR процессов" ? (
              <HRAutomationBenefits />
            ) : seoData.service === "Аудит бизнес-процессов ИИ" ? (
              <ProcessAuditBenefits />
            ) : seoData.service === "ИИ для финансовых организаций" ? (
              <BankingAIBenefits />
            ) : seoData.service === "Автоматизация в здравоохранении" ? (
              <HealthcareAutomationBenefits />
            ) : (
              <BenefitsSection />
            )}
          </section>
        )}

        {/* Client Results Section - Social proof after value prop */}
        {sections.showClientResults && (
          <section id="cases" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] mt-12">
            <ClientResultsSection isCompact={true} />
          </section>
        )}

        {/* Lead Magnets Section - MOVED UP for early lead capture */}
        {sections.showLeadMagnets && (
          <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:250ms] mt-12">
            <LeadMagnetsSection service={seoData.service} isCompact={true} />
          </section>
        )}

        {/* Main Content Section - Process explanation */}
        <section id="process" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms] mt-12">
          <MainContentSection />
        </section>

        {/* Timeline Section - Implementation steps */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <TimelineSection />
        </section>

        {/* Section Wrapper - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-20">
          <SectionWrapper />
        </section>

        {/* Pricing Section - EXACT COPY from homepage */}
        {sections.showPricing && (
          <section id="pricing" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <PricingSection />
          </section>
        )}

        {/* Features Section - EXACT COPY from homepage */}
        {sections.showFeatures && (
          <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <FeaturesSection />
          </section>
        )}

        {/* Timeline Wrapper Section - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <TimelineWrapperSection />
        </section>

        {/* Main Wrapper Section - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <MainWrapperSection />
        </section>

        {/* Content Section - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1500ms] mt-20">
          <ContentSection />
        </section>

        {/* About Section - EXACT COPY from homepage */}
        {sections.showAbout && (
          <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1650ms]">
            <AboutSection />
          </section>
        )}

        {/* Service-Specific FAQ Section - Customized for each service */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1700ms]">
          <ServiceFAQSection service={seoData.service} />
        </section>

        {/* Footer Section - EXACT COPY from homepage */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <FooterSection />
        </section>

      </div>
    </main>
  );
};

/**
 * Example Usage:
 * 
 * // For Document Automation in Moscow
 * const documentAutomationMoscow: SEOPageData = {
 *   service: "Автоматизация документооборота",
 *   location: "Москва", 
 *   title: "Автоматизация документооборота в Москве | ИИ решения для бизнеса",
 *   description: "Профессиональная автоматизация документооборота в Москве. 72% снижение затрат, 300% рост эффективности.",
 *   keywords: ["автоматизация документооборота москва", "ИИ документы", "цифровизация москва"],
 *   heroContent: {
 *     title: "Автоматизация документооборота в Москве",
 *     subtitle: "Сократите время обработки документов на 85% с помощью ИИ",
 *     ctaText: "Получить консультацию"
 *   }
 * };
 * 
 * // For CRM automation in Finance
 * const crmFinance: SEOPageData = {
 *   service: "CRM автоматизация",
 *   industry: "Финансы",
 *   title: "CRM автоматизация для финансовых компаний | ИИ интеграция",
 *   description: "Автоматизация CRM систем для банков и финансовых организаций. Увеличьте конверсию на 200%.",
 *   keywords: ["crm автоматизация финансы", "банковская автоматизация", "финансовые технологии"],
 *   customSections: {
 *     showVSL: false,
 *     showLeadMagnets: false
 *   }
 * };
 */

export default SEOProgrammaticTemplate;