import React from 'react';
import { SEOProgrammaticTemplate } from '../../templates/SEOProgrammaticTemplate';
import type { SEOPageData } from '../../templates/SEOProgrammaticTemplate';

const seoData: SEOPageData = {
  service: "Внедрение ИИ в производство",
  location: "Москва",
  industry: "Производство",
  title: "Внедрение ИИ в производство в Москве | Увеличьте прибыль на ₽1 млрд+ как Северсталь",
  description: "Профессиональное внедрение ИИ в производство в Москве. ₽0.5 трлн доп. выручки российских компаний в 2024. Industry 4.0, предиктивная аналитика, качество контроль.",
  keywords: [
    "внедрение ИИ в производство москва",
    "искусственный интеллект производство",
    "автоматизация производства ИИ",
    "industry 4.0 москва",
    "предиктивная аналитика производство",
    "компьютерное зрение производство",
    "цифровизация производства москва"
  ],
  
  heroContent: {
    title: "Внедрение ИИ в производство в Москве",
    subtitle: "Получите ₽1+ млрд дополнительной выручки как Северсталь. 15% ежегодный рост рынка. Industry 4.0 решения для российского производства.",
    ctaText: "Запустить Industry 4.0",
    statLine: "₽0.5 трлн доп. выручка рынка 2024 • 25% сокращение брака • 30% рост производительности • 15% снижение простоев"
  },
  
  customSections: {
    showVSL: false,           // Remove VSL for B2B manufacturing focus
    showPricing: false,       // Remove pricing - custom enterprise solutions
    showFeatures: false,      // Remove generic features
    showAbout: false,         // Remove team section for manufacturing focus
    showClientResults: true,  // Keep social proof - critical for B2B
    showBenefits: true,       // Keep value proposition
    showLeadMagnets: true     // Keep lead capture with manufacturing-specific magnet
  }
};

const AIImplementationManufacturingMoscow: React.FC = () => {
  // Set document title and meta description for SEO
  React.useEffect(() => {
    document.title = seoData.title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords.join(', '));
    }
  }, []);

  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default AIImplementationManufacturingMoscow;