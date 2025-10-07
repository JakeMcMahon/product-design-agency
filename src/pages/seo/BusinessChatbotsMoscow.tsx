import React from 'react';
import { SEOProgrammaticTemplate } from '../../templates/SEOProgrammaticTemplate';
import type { SEOPageData } from '../../templates/SEOProgrammaticTemplate';

const seoData: SEOPageData = {
  service: "Чат-боты для бизнеса",
  location: "Москва",
  title: "Чат-боты для бизнеса в Москве | ИИ автоматизация поддержки 24/7 от ₽99 тыс",
  description: "Профессиональные чат-боты для бизнеса в Москве. До 70% экономии на поддержке клиентов. Интеграция с WhatsApp, Telegram, CRM. 2-4 недели внедрения.",
  keywords: [
    "чат-боты для бизнеса москва",
    "разработка чат-ботов москва", 
    "автоматизация поддержки чат-ботами",
    "чат-боты WhatsApp Telegram",
    "ИИ боты для клиентской поддержки",
    "внедрение чат-ботов бизнес москва"
  ],
  heroContent: {
    title: "Чат-боты для бизнеса в Москве",
    subtitle: "Автоматизируйте поддержку клиентов 24/7 с экономией до 70% на операционных расходах. Интеграция с WhatsApp, Telegram, CRM за 2-4 недели",
    ctaText: "Автоматизировать поддержку",
    statLine: "70% экономия на поддержке • 24/7 доступность • 2-4 недели внедрения • 95% удовлетворенность клиентов"
  },
  customSections: {
    showVSL: false,           // Remove video section for B2B focus
    showPricing: false,       // Remove - not needed for SEO focus
    showFeatures: false,      // Remove - contains team credentials section
    showAbout: false,         // Remove - focus on service-specific content
    showClientResults: true,  // Keep social proof
    showBenefits: true,       // Keep value proposition
    showLeadMagnets: true     // Keep for lead capture
  }
};

/**
 * Business Chatbots Moscow SEO Page
 * 
 * Service focus: Chat-bot development and automation for business
 * Location: Moscow
 * Target audience: SMB + Enterprise companies needing customer support automation
 * Key differentiators:
 * - 24/7 automated customer support
 * - Up to 70% cost savings on support operations  
 * - Multi-platform integration (WhatsApp, Telegram, VK, CRM)
 * - 2-4 week implementation timeline
 * - Industry-specific customization capabilities
 * - Russian messaging platform expertise
 */
const BusinessChatbotsMoscow: React.FC = () => {
  return <SEOProgrammaticTemplate seoData={seoData} />;
};

export default BusinessChatbotsMoscow;