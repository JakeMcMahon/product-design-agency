import React from "react";
import { SEOProgrammaticTemplate } from "../../templates/SEOProgrammaticTemplate";

/**
 * Example SEO Page: Document Automation Moscow
 * 
 * This demonstrates how to use the SEO Programmatic Template
 * that follows the homepage structure exactly.
 */

const seoData = {
  service: "Автоматизация документооборота",
  location: "Москва",
  title: "Автоматизация документооборота в Москве | СЭД системы | Снижение затрат на 72%",
  description: "Внедрение современных СЭД систем в Москве. 72% московских компаний уже используют электронный документооборот. Ускорьте согласование на 50-70% с ИИ-решениями.",
  keywords: [
    "автоматизация документооборота москва",
    "СЭД системы москва",
    "электронный документооборот москва", 
    "цифровизация документов москва",
    "системы электронного документооборота",
    "внедрение СЭД москва",
    "автоматизация бизнес процессов документооборот"
  ],
  heroContent: {
    title: "Автоматизация документооборота в Москве",
    subtitle: "Присоединяйтесь к 72% московских компаний, которые ускорили согласование документов на 50-70% с помощью СЭД систем и ИИ-технологий",
    ctaText: "Получить консультацию по СЭД",
    statLine: "₽2.5 млн средняя экономия/год • 50-70% ускорение согласований • 87% снижение ошибок"
  },
  customSections: {
    showVSL: false,         // Remove VSL - not relevant for B2B document automation
    showClientResults: true, // Keep - essential for credibility 
    showPricing: false,     // Remove - first pricing section not needed for SEO focus
    showBenefits: true,     // Keep - critical for document automation benefits
    showAbout: false,       // Remove - focus on service-specific content
    showLeadMagnets: true,  // Keep - valuable for lead generation in B2B
    showFeatures: false     // Remove - contains team credentials section
  }
};

const DocumentAutomationMoscow: React.FC = () => {
  // SEO metadata would be handled by React Helmet or similar in production
  // For now, we'll just render the template
  
  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default DocumentAutomationMoscow;