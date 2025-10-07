import { useState } from "react";
import { Button } from "@/components/ui-agency/button";
import { Badge } from "@/components/ui-agency/badge";
import { Card, CardContent } from "@/components/ui-agency/card";
import { CheckCircle2, ArrowRight, Users, Clock, TrendingUp, Zap, Shield, Timer, Building2, ChevronRight, Star, Award, Target, Lightbulb, AlertCircle, ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import PDFDownloadPopupRU from "@/components/PDFDownloadPopupRU";
import { useSprintPDFDownload } from "@/hooks/useSprintPDFDownload";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";
import { FooterSection } from "../screens/Desktop/sections/FooterSection/FooterSection";

const navigationItems = [
  { label: "УСЛУГИ", hasDropdown: true, href: "#services" },
  { label: "КЕЙСЫ", href: "#cases" },
  { label: "РЕЗУЛЬТАТЫ", href: "#results" },
  { label: "О НАС", href: "#team" },
];

const AboutNew = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationConfig, setConsultationConfig] = useState({
    title: "Забронируйте консультацию с нашей командой",
    description: "Запланируйте 30-минутный звонок для обсуждения ваших потребностей в автоматизации"
  });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    ai: false,
    productAnalytics: false,
    growth: false,
    development: false,
    design: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    isSubmitting: isPDFSubmitting,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = useSprintPDFDownload();
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="bg-white min-h-screen w-full" data-model-id="2:4">
      <div className="bg-white w-full flex flex-col px-4 sm:px-6 lg:px-8 xl:px-0">
        
        {/* Header Section - Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <header className="relative w-full h-[1284px] bg-[#111111] overflow-hidden">
            <div className="relative w-full h-full">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
              
              {/* Floating gradient elements */}
              <div className="absolute top-20 left-20 w-72 h-72 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse delay-700"></div>

              {/* Navigation */}
              <nav className="absolute w-full h-[75px] top-0 left-0 z-10">
                <div className="flex items-center justify-between px-4 md:px-[90px] py-[29px]">
                  <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                    <div className="text-white text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                      AI Automation RU
                    </div>
                  </div>

                  <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <nav className="flex items-center gap-2">
                      {navigationItems.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-1.5">
                          <div className="flex items-end gap-1.5">
                            <a 
                              href={item.href || "#"}
                              onClick={(e) => {
                                if (item.href && item.href.startsWith('#')) {
                                  e.preventDefault();
                                  scrollToSection(item.href.substring(1));
                                }
                              }}
                              className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-[13.2px] tracking-[0] leading-[13.5px] whitespace-nowrap cursor-pointer hover:text-[#4f5bff] transition-colors">
                              {item.label}
                            </a>
                            {item.hasDropdown && (
                              <div className="w-3 h-3 md:w-[15px] md:h-[15px] text-white text-xs">▼</div>
                            )}
                          </div>
                          {index < navigationItems.length - 1 && (
                            <div className="w-[37.5px]" />
                          )}
                        </div>
                      ))}
                    </nav>

                    <Button
                      className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[13.2px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                      variant="ghost"
                      onClick={() => openConsultationPopup()}
                    >
                      НАЧАТЬ
                    </Button>
                  </div>
                </div>
              </nav>

              {/* Hero Content */}
              <main className="flex flex-col items-center gap-9 absolute top-[180px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-[1176px] items-center gap-9">
                  
                  {/* Service Badge */}
                  <div className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-lg tracking-[0.36px] leading-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <Badge className="bg-[#4f5bff] text-white px-4 py-2 text-base">
                      Наша команда
                    </Badge>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] tracking-[0] leading-tight lg:leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    Эксперты по ИИ <br />
                    с 15+ летним опытом
                  </h1>

                  {/* Description */}
                  <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl">
                    <span className="text-white tracking-[0.03px]">Мы помогли </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">200+ компаниям</span>
                    <span className="text-white tracking-[0.03px]"> автоматизировать процессы и сэкономить более </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">
                      ₽2 млрд
                    </span>
                    <span className="text-white tracking-[0.03px]"> через внедрение ИИ-решений.</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                    <Button 
                      className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                      onClick={() => openConsultationPopup()}
                    >
                      Познакомиться с командой
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('team')}
                    >
                      Узнать больше
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        15+
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Лет опыта в автоматизации
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        200+
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Успешных проектов
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        ₽2+ млрд
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Сэкономлено клиентами
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Поддержка клиентов
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
                  <div className="w-full h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                    <div className="text-white/60 text-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                      Превью команды экспертов
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </header>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-20">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Команда экспертов
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Опытные специалисты по ИИ и автоматизации бизнес-процессов
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Jake McMahon",
                    role: "ИИ-стратег и основатель",
                    image: "/images/jakeprofile.png",
                    description: "15+ лет опыта в автоматизации. Построил ИИ-решения для 200+ компаний. Эксперт по LLM и агентным системам.",
                    achievements: [
                      "Сэкономил клиентам ₽2+ млрд",
                      "200+ успешных ИИ-проектов",
                      "Эксперт по GPT и Claude"
                    ],
                    quote: "Моя миссия — помочь российским компаниям использовать ИИ для достижения конкурентных преимуществ и значительного роста эффективности."
                  },
                  {
                    name: "Vyacheslav Razin",
                    role: "Технический директор",
                    image: "/images/vyacheslavprofile.PNG",
                    description: "Мастер интеграций и ИИ-архитектуры. Специализируется на сложных корпоративных системах и масштабировании.",
                    achievements: [
                      "Архитектор корпоративных ИИ",
                      "Эксперт по интеграциям",
                      "20+ лет в enterprise"
                    ],
                    quote: "Я создаю надежные ИИ-архитектуры, которые безупречно интегрируются с существующими корпоративными системами и растут вместе с бизнесом."
                  }
                ].map((member, index) => (
                  <Card 
                    key={member.name}
                    className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-1">
                            {member.name}
                          </h3>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#4f5bff] text-sm mb-3">
                            {member.role}
                          </p>
                          <div className="flex items-center mb-3">
                            {Array.from({length: 5}).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-[#ffd700] fill-current" />
                            ))}
                            <span className="ml-2 text-[#666666] text-xs">Топ-эксперт</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6 mb-6">
                        {member.description}
                      </p>

                      <div className="bg-[#4f5bff]/5 rounded-lg p-4 mb-6">
                        <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#111111] text-sm leading-5 italic">
                          "{member.quote}"
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-[#4f5bff] mt-1 mr-3 flex-shrink-0" />
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section - Agency Style */}
        <section id="approach" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Наш подход
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Часто задаваемые вопросы о нашей работе
                </p>
              </div>

              {/* Features with expand/collapse functionality */}
              <div className="space-y-8">
                {/* AI Automation Feature */}
                <div className="border-t border-white/20 pt-6">
                  <div 
                    className="flex items-center justify-between mb-6 cursor-pointer group hover:bg-white/5 rounded-lg p-4 -m-4 transition-all duration-200"
                    onClick={() => toggleSection('ai')}
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-white/90 transition-colors duration-200">
                        ИИ-автоматизация процессов
                      </h3>
                      <p className="text-sm text-white/60 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                        Корпоративные решения на основе машинного обучения и интеллектуальной автоматизации
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        expandedSections.ai 
                          ? 'bg-white text-[#111111]' 
                          : 'bg-white/20 text-white group-hover:bg-white/30'
                      }`}>
                        {expandedSections.ai ? 'Свернуть' : 'Развернуть'}
                      </div>
                      <ChevronDownIcon 
                        className={`w-6 h-6 text-white group-hover:text-white/80 transition-all duration-200 ${
                          expandedSections.ai ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {expandedSections.ai && (
                    <div className="space-y-4 text-white/80">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Машинное обучение</h4>
                          <p className="text-sm">Предиктивная аналитика, рекомендательные системы и интеллектуальный анализ данных</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Автоматизация рабочих процессов</h4>
                          <p className="text-sm">Интеллектуальная обработка документов, автоматизация принятия решений</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">ИИ-агенты</h4>
                          <p className="text-sm">Чатботы, виртуальные ассистенты и интеллектуальные помощники</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Интеграция систем</h4>
                          <p className="text-sm">Бесшовная интеграция с существующими CRM, ERP и корпоративными системами</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Business Analytics Feature */}
                <div className="border-t border-white/20 pt-6">
                  <div 
                    className="flex items-center justify-between mb-6 cursor-pointer group hover:bg-white/5 rounded-lg p-4 -m-4 transition-all duration-200"
                    onClick={() => toggleSection('productAnalytics')}
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-white/90 transition-colors duration-200">
                        Бизнес-аналитика
                      </h3>
                      <p className="text-sm text-white/60 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                        A/B тестирование, воронки конверсии и принятие решений на основе данных
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        expandedSections.productAnalytics 
                          ? 'bg-white text-[#111111]' 
                          : 'bg-white/20 text-white group-hover:bg-white/30'
                      }`}>
                        {expandedSections.productAnalytics ? 'Свернуть' : 'Развернуть'}
                      </div>
                      <ChevronDownIcon 
                        className={`w-6 h-6 text-white group-hover:text-white/80 transition-all duration-200 ${
                          expandedSections.productAnalytics ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {expandedSections.productAnalytics && (
                    <div className="space-y-4 text-white/80">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">A/B тестирование</h4>
                          <p className="text-sm">Систематическое тестирование изменений для улучшения конверсии и продуктовых метрик</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Воронки конверсии</h4>
                          <p className="text-sm">Анализ пользовательского пути и оптимизация точек роста</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Поведенческая аналитика</h4>
                          <p className="text-sm">Глубокий анализ действий пользователей для понимания потребностей</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Дашборды и отчеты</h4>
                          <p className="text-sm">Интерактивные панели управления для мониторинга KPI в реальном времени</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Growth Engineering Feature */}
                <div className="border-t border-white/20 pt-6">
                  <div 
                    className="flex items-center justify-between mb-6 cursor-pointer group hover:bg-white/5 rounded-lg p-4 -m-4 transition-all duration-200"
                    onClick={() => toggleSection('growth')}
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-white/90 transition-colors duration-200">
                        Инженерия роста
                      </h3>
                      <p className="text-sm text-white/60 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                        Системы привлечения пользователей и механики устойчивого роста продукта
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        expandedSections.growth 
                          ? 'bg-white text-[#111111]' 
                          : 'bg-white/20 text-white group-hover:bg-white/30'
                      }`}>
                        {expandedSections.growth ? 'Свернуть' : 'Развернуть'}
                      </div>
                      <ChevronDownIcon 
                        className={`w-6 h-6 text-white group-hover:text-white/80 transition-all duration-200 ${
                          expandedSections.growth ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {expandedSections.growth && (
                    <div className="space-y-4 text-white/80">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Онбординг пользователей</h4>
                          <p className="text-sm">Оптимизированные потоки первого знакомства для быстрого достижения ценности</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Удержание и реактивация</h4>
                          <p className="text-sm">Системы формирования привычек и возвращения неактивных пользователей</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Вирусные механики</h4>
                          <p className="text-sm">Встроенные инструменты для органического роста через рефералы</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Монетизация</h4>
                          <p className="text-sm">Естественные пути обновления и ограничения для роста доходов</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Exact copy from TimelineWrapperSection */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1.5 text-sm font-normal text-black border-[#00000033] mb-6"
              >
                Наш процесс
              </Badge>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] text-center leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                Наш проверенный <br className="sm:hidden" />
                90-дневный процесс
              </h2>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  number: "01",
                  title: "Анализ и валидация (Недели 1-2)",
                  description: "Через семинары с заинтересованными сторонами, анализ конкурентов и 20+ интервью с пользователями мы выявляем реальные проблемы, которые стоит решать.",
                  items: [
                    "Валидированный документ стратегии ИИ-автоматизации",
                    "Синтез исследований пользователей",
                    "Матрица приоритетов функций",
                    "Рекомендация Go/No-Go",
                  ],
                },
                {
                  number: "02",
                  title: "Дизайн и архитектура (Недели 3-4)",
                  description: "Превращаем инсайты в интуитивные опыты. Информационная архитектура, пользовательские потоки, каркасы - каждый экран разработан для ясности и конверсии.",
                  items: [
                    "Полная система дизайна в Figma",
                    "Кликабельный прототип",
                    "Документ технической архитектуры",
                    "План разработки спринтов",
                  ],
                },
                {
                  number: "03",
                  title: "Основная разработка (Недели 5-8)",
                  description: "Основа вашего продукта. Backend API, аутентификация, оптимизация базы данных, платежные системы. Frontend обретает форму с адаптивными компонентами.",
                  items: [
                    "Работающая бета-версия",
                    "Отчет о покрытии тестами",
                    "Документация по развертыванию",
                    "Административная панель",
                  ],
                },
                {
                  number: "04",
                  title: "Инженерия роста (Недели 9-10)",
                  description: "Инженерия успеха пользователя с первого взаимодействия. Прогрессивная онбординг, который не перегружает. Контекстная помощь при необходимости.",
                  items: [
                    "Завершенный продукт MVP",
                    "Система аналитики и метрик",
                    "План непрерывного роста",
                    "Передача и обучение команды",
                  ],
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${
                    index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#4f5bff] rounded-full flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg lg:text-xl font-bold [font-family:'Inter',Helvetica]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-neutral-50 border-0 shadow-sm">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#111111] uppercase tracking-wide mb-2">
                          Результаты:
                        </h4>
                        {step.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4f5bff] rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 sm:mt-16">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                Готовы начать ваш 90-дневный спринт?
              </h3>
              <p className="text-sm sm:text-base text-[#666666] mb-6 max-w-2xl mx-auto px-4">
                Мы гарантируем работающую автоматизацию за 90 дней или работаем бесплатно
              </p>
              <button 
                className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors w-auto max-w-full"
                onClick={() => openConsultationPopup()}
              >
                Получить бесплатную консультацию →
              </button>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Наши ценности
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Принципы, которыми мы руководствуемся в работе
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Target className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Результативность",
                    description: "Фокусируемся на измеримых результатах и ROI для каждого клиента"
                  },
                  {
                    icon: <Lightbulb className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Инновации",
                    description: "Используем передовые ИИ-технологии для решения сложных задач"
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Надежность",
                    description: "Создаем стабильные решения с поддержкой 24/7"
                  },
                  {
                    icon: <Users className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Партнерство",
                    description: "Строим долгосрочные отношения, основанные на доверии"
                  }
                ].map((value, index) => (
                  <Card
                    key={index}
                    className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        {value.icon}
                      </div>
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-4">
                        {value.title}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1260px] items-start gap-4 md:gap-6 mx-auto">
              {[
                {
                  id: "01",
                  value: "₽2B+",
                  description: "Сэкономлено клиентами\nза время работы",
                  valueSize: "text-[52.7px]",
                },
                {
                  id: "02", 
                  value: "200+",
                  description: "Успешных проектов\nавтоматизации", 
                  valueSize: "text-[52.3px]",
                },
                {
                  id: "03",
                  value: "99.7%",
                  description: "Успешность проектов\nи удовлетворенность клиентов",
                  valueSize: "text-[51.6px]",
                },
                {
                  id: "04",
                  value: "15+ лет",
                  description: "Средний опыт экспертов\nкоманды",
                  valueSize: "text-[40.7px]",
                },
                {
                  id: "05",
                  value: "24/7",
                  description: "Техническая поддержка\nна русском языке",
                  valueSize: "text-[40.7px]",
                },
              ].map((stat, index) => (
                <Card
                  key={stat.id}
                  className={`${index >= 3 ? 'md:col-span-2 lg:col-span-1' : ''} w-full min-h-[250px] md:min-h-[300px] rounded-[18px] overflow-hidden bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={
                    {
                      "--animation-delay": `${(index + 1) * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col justify-between h-full p-[30px] pt-[33px] pb-[30px]">
                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0.14px] leading-[17.5px]">
                      / {stat.id}
                    </div>

                    <div className="flex-1 flex items-end">
                      <div
                        className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] ${stat.valueSize} tracking-[0] leading-[54px]`}
                      >
                        {stat.value}
                      </div>
                    </div>

                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-6 whitespace-pre-line">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - White background to match homepage pattern */}
        <section className="w-full bg-white py-20 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="w-full max-w-[1260px] mx-auto px-6">
            
            {/* Header - Same style as homepage sections */}
            <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0] leading-[13.5px] mb-4">
                ГОТОВЫ К СОТРУДНИЧЕСТВУ
              </div>
              <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[46.3px] tracking-[0] leading-[54px] mb-6">
                Готовы работать с лучшими?
              </h2>
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-lg leading-6 max-w-2xl mx-auto">
                Свяжитесь с нашей командой экспертов и получите персональную консультацию по автоматизации вашего бизнеса
              </p>
            </div>

            {/* CTA Buttons - Homepage style */}
            <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => openConsultationPopup()}
                >
                  Забронировать консультацию →
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#4f5bff] text-[#4f5bff] hover:bg-[#4f5bff] hover:text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => window.open('/', '_blank')}
                >
                  Посмотреть услуги
                </Button>
              </div>
            </div>

            {/* Features Grid - Card style like homepage */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  icon: <Clock className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Быстрая консультация",
                  description: "30-минутная персональная сессия с экспертом",
                  highlight: "30 минут"
                },
                {
                  id: "02",
                  icon: <Shield className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Бесплатно", 
                  description: "Первая консультация без оплаты и обязательств",
                  highlight: "₽0"
                },
                {
                  id: "03",
                  icon: <Award className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Экспертная команда",
                  description: "15+ лет опыта в автоматизации бизнес-процессов",
                  highlight: "15+ лет"
                }
              ].map((feature, index) => (
                <Card
                  key={feature.id}
                  className="bg-[#f8f9fa] border-2 border-[#f0f0f0] hover:border-[#4f5bff]/30 transition-colors duration-300 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={{
                    "--animation-delay": `${600 + index * 200}ms`,
                  } as React.CSSProperties}
                >
                  <CardContent className="p-8 pb-10 text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      {feature.icon}
                    </div>
                    
                    {/* Main highlight */}
                    <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-3xl mb-4">
                      {feature.highlight}
                    </div>
                    
                    {/* Title */}
                    <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-4">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6">
                      {feature.description}
                    </p>
                    
                    {/* Card number */}
                    <div className="absolute top-6 right-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px]">
                      /{feature.id}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>


      </div>

      {/* Popups */}
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title={consultationConfig.title}
        description={consultationConfig.description}
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />

      <PDFDownloadPopupRU
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
        isSubmitting={isPDFSubmitting}
        isSubmitted={isPDFSubmitted}
      />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};

export default AboutNew;