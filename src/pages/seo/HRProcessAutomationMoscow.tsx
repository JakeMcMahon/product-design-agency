import React, { useEffect } from 'react';
import { SEOProgrammaticTemplate, SEOPageData } from '../../templates/SEOProgrammaticTemplate';

const HRProcessAutomationMoscow: React.FC = () => {
  useEffect(() => {
    document.title = "Автоматизация HR процессов в Москве | ИИ решения для HR отделов от ₽150 тыс";
  }, []);

  const seoData: SEOPageData = {
    service: "Автоматизация HR процессов",
    location: "Москва",
    title: "Автоматизация HR процессов в Москве | ИИ решения для HR отделов от ₽150 тыс",
    description: "Профессиональная автоматизация HR процессов в Москве. Ускорьте найм в 2 раза, снизьте текучесть на 40%, экономьте 300 тыс ₽/месяц на операторах. ATS, скрининг резюме, адаптация с ИИ.",
    keywords: "автоматизация HR процессов, ATS система Москва, ИИ для HR, автоматизация найма, скрининг резюме, HR платформа, рекрутмент автоматизация",
    heroContent: {
      title: "Автоматизация HR процессов с ИИ в Москве",
      subtitle: "Ускорьте найм в 2 раза и снизьте текучесть на 40% с ИИ-платформой для HR. Автоматический скрининг резюме, адаптация сотрудников, аналитика вовлеченности.",
      ctaText: "Автоматизировать HR",
      statLine: "550+ компаний автоматизировали HR • 40% снижение текучести • 2x ускорение найма"
    },
    benefits: [
      "ИИ-скрининг резюме с точностью 85%+",
      "Автоматизация найма от заявки до оформления", 
      "Геймифицированная адаптация новых сотрудников",
      "Опросы вовлеченности и пульс-аналитика",
      "Интеграция с 1С, CRM и кадровыми системами",
      "Соответствие 152-ФЗ и хранение данных в России"
    ],
    customSections: {
      showVSL: false,           // Remove - not relevant for B2B HR focus
      showPricing: false,       // Remove - not needed for SEO focus  
      showFeatures: false,      // Remove - contains team credentials section
      showAbout: false,         // Remove - focus on service-specific content
      showClientResults: true,  // Keep - essential for B2B credibility
      showBenefits: true,       // Keep - critical HR automation benefits
      showLeadMagnets: true     // Keep - valuable for HR lead generation
    },
    metaData: {
      canonical: "https://ai-automation-ru.com/seo/avtomatizatsiya-hr-protsessov-moskva",
      ogImage: "/images/seo/hr-automation-og.png",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service", 
        "name": "Автоматизация HR процессов с ИИ",
        "description": "Профессиональная автоматизация HR процессов с применением искусственного интеллекта в Москве",
        "provider": {
          "@type": "Organization",
          "name": "AI Automation Russia",
          "url": "https://ai-automation-ru.com"
        },
        "areaServed": "Москва, Россия",
        "offers": {
          "@type": "Offer", 
          "price": "150000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }
    }
  };

  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default HRProcessAutomationMoscow;