import React, { useEffect } from 'react';
import { SEOProgrammaticTemplate, SEOPageData } from '../../templates/SEOProgrammaticTemplate';

const AIBusinessProcessAuditMoscow: React.FC = () => {
  useEffect(() => {
    document.title = "Аудит бизнес-процессов ИИ в Москве | Бесплатная диагностика + внедрение от ₽89 тыс";
  }, []);

  const seoData: SEOPageData = {
    service: "Аудит бизнес-процессов ИИ",
    location: "Москва",
    title: "Аудит бизнес-процессов ИИ в Москве | Бесплатная диагностика + внедрение от ₽89 тыс",
    description: "Профессиональный аудит бизнес-процессов с применением ИИ в Москве. Бесплатная диагностика готовности, выявление точек роста, roadmap внедрения. 30%+ повышение эффективности за 2-4 недели. Консультация экспертов.",
    keywords: "аудит бизнес-процессов ИИ, консультации по ИИ Москва, внедрение искусственного интеллекта, автоматизация процессов, цифровая трансформация",
    heroContent: {
      title: "Аудит бизнес-процессов с применением ИИ в Москве",
      subtitle: "Получите бесплатную диагностику готовности к ИИ + roadmap внедрения. 30%+ рост эффективности за 2-4 недели с нашими экспертами.",
      ctaText: "Запустить аудит процессов",
      statLine: "200+ успешных аудитов • 400k+ часов автоматизации • Средняя экономия 2.5 млн ₽/год"
    },
    features: [
      {
        title: "Комплексный анализ процессов",
        description: "Детальное изучение текущих бизнес-процессов с выявлением узких мест и возможностей для ИИ-автоматизации"
      },
      {
        title: "Оценка ИИ-готовности",
        description: "Профессиональная оценка технической и организационной готовности компании к внедрению ИИ-решений"
      },
      {
        title: "Roadmap внедрения",
        description: "Поэтапный план внедрения ИИ с приоритизацией проектов, бюджетом и временными рамками"
      },
      {
        title: "ROI прогнозирование",
        description: "Детальный расчет возврата инвестиций для каждого предлагаемого ИИ-решения с реалистичными сроками окупаемости"
      },
      {
        title: "Технологические рекомендации",
        description: "Конкретные рекомендации по выбору ИИ-инструментов, платформ и решений под ваши задачи и бюджет"
      },
      {
        title: "Риск-анализ внедрения",
        description: "Выявление потенциальных рисков и препятствий при внедрении ИИ с планом их минимизации"
      }
    ],
    benefits: [
      "Бесплатный первичный аудит с экспертами",
      "Выявление 3-5 быстрых побед для немедленного внедрения", 
      "Реалистичная оценка ROI и сроков окупаемости",
      "Roadmap на 6-12 месяцев с приоритетами",
      "Рекомендации по интеграции с существующими системами",
      "Анализ конкурентных преимуществ от внедрения ИИ"
    ],
    pricing: {
      title: "Тарифы аудита бизнес-процессов",
      plans: [
        {
          name: "Экспресс-аудит",
          price: "Бесплатно",
          period: "2 часа",
          description: "Быстрая диагностика ИИ-потенциала компании",
          features: [
            "Анализ 1-2 ключевых процессов",
            "Оценка ИИ-готовности",
            "3 быстрые рекомендации",
            "Презентация результатов"
          ],
          isPopular: false
        },
        {
          name: "Стандартный аудит",
          price: "₽89 000",
          period: "1 неделя", 
          description: "Полный аудит с детальными рекомендациями",
          features: [
            "Анализ всех бизнес-процессов",
            "Техническая оценка инфраструктуры",
            "ROI-расчеты для каждого решения",
            "Подробный roadmap внедрения",
            "Риск-анализ и план минимизации"
          ],
          isPopular: true
        },
        {
          name: "Премиум + внедрение",
          price: "₽350 000",
          period: "4 недели",
          description: "Аудит + пилотное внедрение первого ИИ-решения",
          features: [
            "Весь функционал стандартного аудита",
            "Разработка и внедрение пилотного проекта",
            "Обучение команды работе с ИИ",
            "3 месяца поддержки после запуска",
            "Гарантия результата"
          ],
          isPopular: false
        }
      ]
    },
    customSections: {
      showVSL: false,
      showPricing: false,     // Remove - not needed for SEO focus
      showFeatures: false,    // Remove - contains team credentials section
      showAbout: false,       // Remove - focus on service-specific content
      showClientResults: true,
      showBenefits: true,
      showLeadMagnets: true
    },
    metaData: {
      canonical: "https://ai-automation-ru.com/seo/audit-biznes-protsessov-ii-moskva",
      ogImage: "/images/seo/audit-biznes-protsessov-ii-og.png",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Аудит бизнес-процессов с применением ИИ",
        "description": "Профессиональный аудит бизнес-процессов с применением искусственного интеллекта в Москве",
        "provider": {
          "@type": "Organization",
          "name": "AI Automation Russia",
          "url": "https://ai-automation-ru.com"
        },
        "areaServed": "Москва, Россия",
        "offers": {
          "@type": "Offer",
          "price": "89000",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }
    }
  };

  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default AIBusinessProcessAuditMoscow;