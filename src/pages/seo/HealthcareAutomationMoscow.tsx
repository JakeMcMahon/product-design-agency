import { SEOProgrammaticTemplate } from "../../templates/SEOProgrammaticTemplate";
import { SEOPageData } from "../../types/seo";

const HealthcareAutomationMoscow = () => {
  const seoData: SEOPageData = {
    service: "Автоматизация в здравоохранении",
    location: "Москва",
    industry: "HealthTech",
    title: "Автоматизация в здравоохранении в Москве | МИС и цифровизация клиник от ₽500 тыс",
    description: "Автоматизация медицинских процессов в Москве. 94% клиник уже используют МИС - получите конкурентное преимущество с ИИ интеграцией. Телемедицина, электронные медкарты, ЕГИСЗ.",
    heroContent: {
      title: "Автоматизация медицинских процессов с ИИ в Москве",
      subtitle: "94% российских клиник используют МИС — получите конкурентное преимущество с ИИ интеграцией. Телемедицина, электронные медкарты, ЕГИСЗ соответствие и 80% экономия времени врачей.",
      ctaText: "Цифровизировать клинику",
      statLine: "1,988 медцентров используют ArchiMed+ • 94% клиник внедрили МИС • 80% экономия времени врачей • ЕГИСЗ соответствие"
    },
    sections: {
      showClientResults: true,
      showBenefits: true,
      showLeadMagnets: true,
      showVSL: false,
      showPricing: false,
      showFeatures: false,
      showAbout: false
    }
  };

  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default HealthcareAutomationMoscow;