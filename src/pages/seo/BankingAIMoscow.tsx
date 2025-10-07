import React, { useEffect } from 'react';
import { SEOProgrammaticTemplate, SEOPageData } from '../../templates/SEOProgrammaticTemplate';

const BankingAIMoscow: React.FC = () => {
  useEffect(() => {
    document.title = "ИИ для финансовых организаций в Москве | Банковские ИИ-решения от ₽1 млн";
  }, []);

  const seoData: SEOPageData = {
    service: "ИИ для финансовых организаций",
    location: "Москва",
    industry: "FinTech",
    title: "ИИ для финансовых организаций в Москве | Банковские ИИ-решения от ₽1 млн",
    description: "Профессиональное внедрение ИИ в банки и финансовые организации в Москве. Соблюдение ЦБ РФ, фрод-мониторинг, скоринг с точностью 95%+. ₽450 млрд эффект как у Сбербанка.",
    keywords: [
      "ИИ для банков Москва",
      "искусственный интеллект финансовые организации",
      "банковские ИИ решения Москва",
      "автоматизация банка ИИ",
      "фрод мониторинг ИИ",
      "банковский скоринг ИИ",
      "ЦБ РФ требования ИИ банки",
      "внедрение ИИ в банке Москва"
    ],
    
    heroContent: {
      title: "ИИ для финансовых организаций в Москве",
      subtitle: "Получите ₽450+ млрд ежегодного эффекта как Сбербанк. Полное соблюдение этического кодекса ИИ ЦБ РФ. Фрод-мониторинг, скоринг, AML/KYC автоматизация.",
      ctaText: "Запустить ИИ в банке",
      statLine: "₽2 трлн потенциальный эффект • 95% точность скоринга • 99.2% выявление фрода • 5 принципов ЦБ РФ"
    },
    
    benefits: [
      "Соблюдение этического кодекса ИИ ЦБ РФ",
      "ИИ-скоринг с точностью 95%+ и мгновенные решения",
      "Фрод-мониторинг в реальном времени 99.2%",
      "Автоматизация AML/KYC и соблюдение 115-ФЗ",
      "Персонализация банковских продуктов +35% cross-sell",
      "Интеграция с российскими банковскими системами"
    ],
    
    customSections: {
      showVSL: false,           // Remove - not relevant for enterprise banking
      showPricing: false,       // Remove - enterprise custom pricing
      showFeatures: false,      // Remove - contains team credentials section
      showAbout: false,         // Remove - focus on banking-specific content
      showClientResults: true,  // Keep - essential for banking credibility
      showBenefits: true,       // Keep - will use BankingAIBenefits component
      showLeadMagnets: true     // Keep - banking-specific lead magnet
    },
    
    metaData: {
      canonical: "https://ai-automation-ru.com/seo/ii-dlya-finansovyh-organizatsiy-moskva",
      ogImage: "/images/seo/banking-ai-moscow-og.png",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "ИИ решения для финансовых организаций",
        "description": "Профессиональное внедрение искусственного интеллекта в банки и финансовые организации в Москве",
        "provider": {
          "@type": "Organization",
          "name": "AI Automation Russia",
          "url": "https://ai-automation-ru.com"
        },
        "areaServed": "Москва, Россия",
        "serviceType": "Банковские ИИ-технологии",
        "offers": {
          "@type": "Offer",
          "price": "1000000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Banks, Financial Institutions"
        }
      }
    }
  };

  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default BankingAIMoscow;