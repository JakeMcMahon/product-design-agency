/**
 * SEO Page Generator Script
 * 
 * This script generates SEO pages using the homepage foundation template.
 * Each page uses the EXACT same components and structure as the homepage,
 * only customizing content for different services/locations/industries.
 */

interface SEOPageConfig {
  service: string;
  location?: string;
  industry?: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  heroContent: {
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
  };
}

// Configuration for different SEO pages
export const seoPageConfigs: SEOPageConfig[] = [
  // Document Automation by City
  {
    service: "Автоматизация документооборота",
    location: "Москва",
    slug: "document-automation-moscow",
    title: "Автоматизация документооборота в Москве | ИИ решения для бизнеса | 72% снижение затрат",
    description: "Профессиональная автоматизация документооборота в Москве. 200+ компаний увеличили эффективность на 300%. Бесплатная консультация по ИИ-решениям.",
    keywords: [
      "автоматизация документооборота москва",
      "ИИ документы москва",
      "цифровизация документов",
      "электронный документооборот москва",
      "автоматизация бизнес процессов москва"
    ],
    heroContent: {
      title: "Автоматизация документооборота в Москве",
      subtitle: "Сократите время обработки документов на 85% и увеличьте прибыль на 300% с помощью ИИ-решений",
      ctaText: "Получить консультацию в Москве"
    }
  },
  
  {
    service: "Автоматизация документооборота", 
    location: "Санкт-Петербург",
    slug: "document-automation-spb",
    title: "Автоматизация документооборота в СПб | ИИ технологии | Экономия до 72%",
    description: "Внедрение ИИ для автоматизации документооборота в Санкт-Петербурге. 24/7 обработка документов, снижение ошибок на 87%.",
    keywords: [
      "автоматизация документооборота санкт-петербург",
      "ИИ документы спб",
      "цифровизация спб",
      "электронный документооборот петербург"
    ],
    heroContent: {
      title: "Автоматизация документооборота в СПб",
      subtitle: "Революционные ИИ-решения для обработки документов. Первые результаты через 2 недели",
      ctaText: "Консультация в СПб"
    }
  },

  // CRM Automation by Industry
  {
    service: "CRM автоматизация",
    industry: "Финансы",
    slug: "crm-automation-finance",
    title: "CRM автоматизация для финансовых компаний | ИИ интеграция | 200% рост конверсии",
    description: "Автоматизация CRM систем для банков и финансовых организаций с помощью ИИ. Увеличение конверсии на 200%, снижение затрат на 45%.",
    keywords: [
      "crm автоматизация финансы",
      "банковская автоматизация",
      "финансовые технологии",
      "ИИ для банков",
      "автоматизация финансовых процессов"
    ],
    heroContent: {
      title: "CRM автоматизация для финансового сектора",
      subtitle: "Увеличьте конверсию на 200% с помощью ИИ-интеграции в CRM системы",
      ctaText: "Демо для финансов"
    },
    customSections: {
      showVSL: false,
      showLeadMagnets: false
    }
  },

  // Analytics by Industry
  {
    service: "ИИ аналитика",
    industry: "Ритейл",
    slug: "ai-analytics-retail", 
    title: "ИИ аналитика для ритейла | Прогнозирование продаж | Оптимизация запасов",
    description: "Внедрение ИИ аналитики в ритейле. Точность прогнозов 96%, оптимизация запасов, рост прибыли на 150%. Консультация экспертов.",
    keywords: [
      "ИИ аналитика ритейл",
      "прогнозирование продаж",
      "оптимизация запасов",
      "аналитика торговли",
      "машинное обучение ритейл"
    ],
    heroContent: {
      title: "ИИ аналитика для ритейла",
      subtitle: "Прогнозируйте продажи с точностью 96% и оптимизируйте запасы с помощью машинного обучения",
      ctaText: "Анализ для ритейла"
    }
  },

  // Manufacturing Automation
  {
    service: "Автоматизация производства",
    industry: "Производство",
    slug: "manufacturing-automation",
    title: "Автоматизация производства с ИИ | Индустрия 4.0 | Снижение затрат на 60%",
    description: "Полная автоматизация производственных процессов с ИИ. Мониторинг 24/7, предиктивная аналитика, снижение затрат на 60%.",
    keywords: [
      "автоматизация производства",
      "индустрия 4.0",
      "ИИ на производстве", 
      "предиктивная аналитика",
      "промышленная автоматизация"
    ],
    heroContent: {
      title: "Автоматизация производства с ИИ",
      subtitle: "Переведите ваше производство в эру Индустрии 4.0 с помощью интеллектуальной автоматизации",
      ctaText: "Консультация по производству"
    }
  },

  // Customer Service Automation
  {
    service: "Автоматизация поддержки",
    slug: "customer-service-automation",
    title: "Автоматизация клиентского сервиса | ИИ чат-боты | 85% автоматизация",
    description: "Автоматизация службы поддержки клиентов с помощью ИИ. Чат-боты, автоответчики, 85% запросов обрабатываются автоматически 24/7.",
    keywords: [
      "автоматизация поддержки",
      "ИИ чат-боты",
      "клиентский сервис", 
      "автоматизация службы поддержки",
      "conversational AI"
    ],
    heroContent: {
      title: "Автоматизация клиентского сервиса",
      subtitle: "85% запросов клиентов обрабатываются автоматически 24/7 с помощью ИИ-ассистентов",
      ctaText: "Демо чат-бота"
    },
    customSections: {
      showVSL: true,
      showClientResults: true,
      showPricing: false,
      showBenefits: true,
      showAbout: false,
      showLeadMagnets: true
    }
  }
];

/**
 * Generate SEO Page Component
 * 
 * This function would be used by a build script to generate
 * actual React components for each SEO configuration
 */
export function generateSEOPageComponent(config: SEOPageConfig): string {
  const componentName = config.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return `import React from "react";
import { SEOProgrammaticTemplate } from "../../templates/SEOProgrammaticTemplate";

/**
 * SEO Page: ${config.service}${config.location ? ' - ' + config.location : ''}${config.industry ? ' - ' + config.industry : ''}
 * 
 * This page uses the exact homepage structure and components,
 * customized for: ${config.service}
 */

const seoData = {
  service: "${config.service}",
  ${config.location ? `location: "${config.location}",` : ''}
  ${config.industry ? `industry: "${config.industry}",` : ''}
  title: "${config.title}",
  description: "${config.description}",
  keywords: ${JSON.stringify(config.keywords, null, 4)},
  heroContent: {
    title: "${config.heroContent.title}",
    subtitle: "${config.heroContent.subtitle}",
    ctaText: "${config.heroContent.ctaText}"
  }${config.customSections ? `,
  customSections: ${JSON.stringify(config.customSections, null, 4)}` : ''}
};

const ${componentName}: React.FC = () => {
  return (
    <>
      {/* SEO Head */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://ai-automation-ru.com/seo/${config.slug}" />
      
      {/* Template with exact homepage structure */}
      <SEOProgrammaticTemplate seoData={seoData} />
    </>
  );
};

export default ${componentName};`;
}

/**
 * Usage Example:
 * 
 * // Generate all SEO pages
 * seoPageConfigs.forEach(config => {
 *   const componentCode = generateSEOPageComponent(config);
 *   const fileName = `${config.slug.charAt(0).toUpperCase() + config.slug.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}.tsx`;
 *   
 *   // Write to file system
 *   writeFileSync(`src/pages/seo/${fileName}`, componentCode);
 * });
 */

export default seoPageConfigs;