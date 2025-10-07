import React from "react";
import { Badge } from "../../../../components/ui/badge";

/**
 * ChatbotBenefits Component
 * 
 * Specialized benefits section for business chatbot services.
 * Uses EXACT homepage styling patterns with chatbot-specific content.
 * Based on competitor research and market data from Moscow chatbot providers.
 */
export const ChatbotBenefits = (): JSX.Element => {
  const chatbotApplications = [
    {
      icon: "💬",
      title: "Автоматизация поддержки клиентов",
      description: "Обработка до 80% стандартных запросов без участия операторов",
      timeline: "Результат за 2-4 недели",
      metrics: ["До 70% экономии на поддержке", "24/7 доступность", "Мгновенные ответы"]
    },
    {
      icon: "🛍️",
      title: "Автоматизация продаж и заказов",
      description: "Ведение клиентов через воронку продаж с интеграцией в CRM",
      timeline: "Запуск за 3 недели",
      metrics: ["До +35% конверсии", "Автоматический прием заказов", "Персонализация предложений"]
    },
    {
      icon: "📱",
      title: "Омниканальная интеграция",
      description: "Единая система в WhatsApp, Telegram, VK, на сайте и в мобильном приложении",
      timeline: "Подключение за 1-2 недели",
      metrics: ["5+ платформ одновременно", "Единая база клиентов", "Синхронизация диалогов"]
    },
    {
      icon: "📊",
      title: "Лидогенерация и квалификация",
      description: "Сбор контактов потенциальных клиентов с автоматической квалификацией",
      timeline: "Настройка за 2 недели",
      metrics: ["До 200% больше лидов", "Автоматическая сегментация", "Интеграция с CRM"]
    },
    {
      icon: "🔄",
      title: "Интеграция с бизнес-системами",
      description: "Подключение к 1С, Битрикс24, AmoCRM, Mindbox и другим российским системам",
      timeline: "Интеграция за 1-3 недели", 
      metrics: ["20+ готовых интеграций", "API подключения", "Синхронизация данных"]
    },
    {
      icon: "🎯",
      title: "Маркетинговые рассылки",
      description: "Персонализированные рассылки с открываемостью до 80% в мессенджерах",
      timeline: "Настройка за 1 неделю",
      metrics: ["До 80% открываемость", "Сегментация аудитории", "A/B тестирование"]
    }
  ];

  return (
    <section className="w-full py-20 bg-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Badge 
            variant="outline" 
            className="rounded-full px-4 py-1.5 mb-6 border-[#4f5bff]/20 bg-[#4f5bff]/5"
          >
            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#4f5bff] text-[14px] tracking-[0] leading-[13.5px]">
              ЧАТ-БОТЫ ДЛЯ БИЗНЕСА
            </span>
          </Badge>
          
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[46.3px] tracking-[0] leading-[54px] mb-6">
            Автоматизируйте бизнес-процессы<br />с помощью ИИ-чат-ботов
          </h2>
          
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[19.4px] leading-[26px] max-w-4xl mx-auto">
            Внедряем корпоративные чат-боты для московских компаний с интеграцией в WhatsApp, Telegram, CRM системы. 
            До 70% экономии на поддержке клиентов и 24/7 автоматизация ключевых процессов.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chatbotApplications.map((app, index) => (
            <div 
              key={index}
              className="bg-[#f8f9fa] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-[#f0f0f0] hover:border-[#4f5bff]/20 translate-y-[-1rem] animate-fade-in opacity-0"
              style={{
                "--animation-delay": `${400 + index * 150}ms`,
              } as React.CSSProperties}
            >
              {/* Icon and Timeline */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{app.icon}</div>
                <Badge className="bg-[#4f5bff]/10 text-[#4f5bff] border-0 text-xs px-2 py-1">
                  {app.timeline}
                </Badge>
              </div>

              {/* Title and Description */}
              <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-3">
                {app.title}
              </h3>
              
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm leading-relaxed mb-4">
                {app.description}
              </p>

              {/* Metrics */}
              <div className="space-y-2">
                {app.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#4f5bff] rounded-full flex-shrink-0" />
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] text-[#4f5bff] text-xs font-medium">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Moscow Market Stats */}
        <div className="bg-gradient-to-r from-[#111111] to-[#1c1c1c] rounded-2xl p-8 md:p-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              <Badge className="bg-[#4f5bff] text-white mb-4 px-3 py-1">
                <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-xs">
                  МОСКОВСКИЙ РЫНОК
                </span>
              </Badge>
              
              <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl md:text-3xl mb-4">
                Лидеры рынка выбирают<br />чат-боты для роста бизнеса
              </h3>
              
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-base leading-relaxed mb-6">
                Московские компании активно внедряют чат-боты для автоматизации поддержки клиентов, 
                продаж и маркетинга. Рынок растёт на 40% ежегодно.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-2xl mb-1">
                    2M+
                  </div>
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                    пользователей мессенджеров в Москве
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-2xl mb-1">
                    85%
                  </div>
                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                    компаний планируют внедрение ботов
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Popular Platforms */}
            <div>
              <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg mb-6">
                Популярные платформы в Москве:
              </h4>
              
              <div className="space-y-4">
                {[
                  { platform: "Telegram", usage: "65%", desc: "Молодая аудитория, IT-сектор" },
                  { platform: "WhatsApp", usage: "45%", desc: "B2B коммуникации, услуги" },
                  { platform: "VK Мессенджер", usage: "35%", desc: "Широкая аудитория" },
                  { platform: "Viber", usage: "25%", desc: "Региональные клиенты" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-white text-sm">
                        {item.platform}
                      </span>
                      <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-xs ml-2">
                        {item.desc}
                      </span>
                    </div>
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] text-[#4f5bff] text-sm">
                      {item.usage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};