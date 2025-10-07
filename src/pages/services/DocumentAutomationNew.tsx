import { useState } from "react";
import { Button } from "@/components/ui-agency/button";
import { Badge } from "@/components/ui-agency/badge";
import { Card, CardContent } from "@/components/ui-agency/card";
import { CheckCircle2, ArrowRight, FileText, Clock, Users, TrendingUp, Zap, Shield, Timer, Building2, ChevronRight, Download, Star, Award } from "lucide-react";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import PDFDownloadPopupRU from "@/components/PDFDownloadPopupRU";
import { useSprintPDFDownload } from "@/hooks/useSprintPDFDownload";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";
import { FooterSection } from "../../screens/Desktop/sections/FooterSection/FooterSection";

const navigationItems = [
  { label: "УСЛУГИ", hasDropdown: true, href: "#solution" },
  { label: "КЕЙСЫ", href: "#use-cases" },
  { label: "РЕЗУЛЬТАТЫ", href: "#pricing" },
  { label: "О НАС", href: "#about" },
];

const DocumentAutomationNew = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationConfig, setConsultationConfig] = useState({
    title: "Забронируйте консультацию по автоматизации документооборота",
    description: "Запланируйте 30-минутный звонок для обсуждения ваших потребностей в автоматизации документов"
  });
  
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
                      Автоматизация документооборота
                    </Badge>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] tracking-[0] leading-tight lg:leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    Автоматизация <br />
                    документооборота с ИИ
                  </h1>

                  {/* Description */}
                  <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl">
                    <span className="text-white tracking-[0.03px]">Сократите время обработки документов на </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">85%</span>
                    <span className="text-white tracking-[0.03px]"> с помощью ИИ. Автоматическое извлечение данных, классификация и обработка любых документов за секунды вместо часов.</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                    <Button 
                      className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                      onClick={() => openConsultationPopup()}
                    >
                      Получить консультацию
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                      onClick={() => window.open('/pricing', '_blank')}
                    >
                      Посмотреть цены
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        85%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Сокращение времени обработки
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        99.7%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Точность извлечения данных
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Непрерывная обработка
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                        100+
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Типов документов
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
                  <div className="w-full h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                    <div className="text-white/60 text-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                      Превью системы документооборота
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </header>
        </section>

        {/* Pain Points Section - Following exact homepage design patterns */}
        <section className="w-full bg-white py-20 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
          <div className="w-full max-w-[1260px] mx-auto px-6">
            
            {/* Header - Exact same pattern as ClientResultsSection */}
            <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0] leading-[13.5px] mb-4">
                БОЛЬ ВАШЕГО БИЗНЕСА
              </div>
              <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[46.3px] tracking-[0] leading-[54px] mb-6">
                Устали от бумажного хаоса?
              </h2>
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-lg leading-6 max-w-2xl mx-auto">
                Каждый день документооборот съедает часы продуктивности и прибыль. Вот главные проблемы наших клиентов до автоматизации.
              </p>
            </div>

            {/* Pain Points Grid - Exact same structure as ClientResultsSection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  id: "01",
                  title: "Часы потерянного времени",
                  timeframe: "каждый день",
                  mainResult: "3-4 часа впустую",
                  metrics: [
                    { label: "Ручной ввод данных", value: "3-4 ч/день" },
                    { label: "Стоимость времени", value: "₽500k/мес" },
                    { label: "Эффективность", value: "только 20%" }
                  ],
                  quote: "Бухгалтер обрабатывает 20 счетов вместо 200",
                  bgColor: "bg-[#f8f9fa]",
                },
                {
                  id: "02", 
                  title: "Критические ошибки",
                  timeframe: "регулярно",
                  mainResult: "15-20% ошибок",
                  metrics: [
                    { label: "Человеческий фактор", value: "неизбежен" },
                    { label: "Штрафы за ошибки", value: "₽300k за раз" },
                    { label: "Потеря клиентов", value: "критично" }
                  ],
                  quote: "Ошибка в НДС по одному счету = ₽300,000 штрафа",
                  bgColor: "bg-white",
                },
                {
                  id: "03",
                  title: "Хаос с документами", 
                  timeframe: "постоянно",
                  mainResult: "40 минут поиска",
                  metrics: [
                    { label: "Поиск документов", value: "40 мин/день" },
                    { label: "Потерянные файлы", value: "₽200k/мес" },
                    { label: "Версии путаются", value: "всегда" }
                  ],
                  quote: "Не найден договор на проверке = блокировка счетов на неделю",
                  bgColor: "bg-[#f8f9fa]",
                },
                {
                  id: "04",
                  title: "Выгорание команды",
                  timeframe: "каждый год",
                  mainResult: "₽800k на найм",
                  metrics: [
                    { label: "Увольняются из-за рутины", value: "регулярно" },
                    { label: "Найм + обучение", value: "₽800k" },
                    { label: "Период хаоса", value: "2 месяца" }
                  ],
                  quote: "Бухгалтер уволился = 2 месяца хаоса в учете",
                  bgColor: "bg-white",
                }
              ].map((painPoint, index) => (
                <Card
                  key={painPoint.id}
                  className={`${painPoint.bgColor} border-2 border-[#f0f0f0] hover:border-[#ff4444]/30 transition-colors duration-300 translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={{
                    "--animation-delay": `${400 + index * 200}ms`,
                  } as React.CSSProperties}
                >
                  <CardContent className="p-8 pb-10">
                    {/* Header - Exact same as ClientResultsSection */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-1">
                          {painPoint.title}
                        </div>
                        <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                          Проблема • {painPoint.timeframe}
                        </div>
                      </div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px]">
                        /{painPoint.id}
                      </div>
                    </div>

                    {/* Main Result - Same structure */}
                    <div className="mb-6">
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#ff4444] text-3xl mb-4">
                        {painPoint.mainResult}
                      </div>
                      
                      {/* Quote Styling - Exact same as ClientResultsSection */}
                      <div className="relative bg-[#f8f9fa] rounded-lg p-4 mb-3">
                        <div className="absolute -left-2 -top-2 text-[#ff4444] text-4xl font-bold opacity-50">
                          "
                        </div>
                        <blockquote className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#333333] text-base leading-relaxed pl-4">
                          {painPoint.quote}
                        </blockquote>
                        <div className="absolute -right-1 -bottom-1 text-[#ff4444] text-4xl font-bold opacity-50 rotate-180">
                          "
                        </div>
                      </div>
                    </div>

                    {/* Metrics - Exact same structure */}
                    <div className="space-y-3 mb-6">
                      {painPoint.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center">
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                            {metric.label}
                          </span>
                          <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-sm">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section - Exact same as ClientResultsSection */}
            <div className="text-center mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#666666] text-lg mb-6">
                Знакомо? Мы решаем эти проблемы за 30-60 дней с помощью ИИ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => openConsultationPopup()}
                >
                  Узнать, как решить за 30 дней →
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#4f5bff] text-[#4f5bff] hover:bg-[#4f5bff] hover:text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => {
                    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Посмотреть решение
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-20">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Преимущества ИИ-автоматизации документов
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Революционное решение для обработки любых документов
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Clock className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Мгновенная обработка",
                    description: "Документы обрабатываются за секунды вместо часов ручной работы"
                  },
                  {
                    icon: <TrendingUp className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Высокая точность",
                    description: "99.7% точность извлечения данных превосходит человеческие возможности"
                  },
                  {
                    icon: <Zap className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Автоматическая классификация",
                    description: "ИИ самостоятельно определяет тип документа и извлекает нужные данные"
                  },
                  {
                    icon: <FileText className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Любые форматы",
                    description: "PDF, изображения, сканы - обрабатываем документы в любом формате"
                  },
                  {
                    icon: <Building2 className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Интеграция с системами",
                    description: "Прямая интеграция с вашими CRM, ERP и другими бизнес-системами"
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-[#4f5bff]" />,
                    title: "Безопасность данных",
                    description: "Полное соответствие требованиям безопасности и конфиденциальности"
                  }
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className="rounded-[18px] overflow-hidden bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        {benefit.icon}
                      </div>
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-4">
                        {benefit.title}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-gradient-to-br from-[#4f5bff]/10 via-white to-[#8b5cf6]/10">
            <div className="max-w-[1260px] mx-auto">
              <Card className="rounded-[18px] bg-white border-2 border-[#4f5bff]/20 shadow-xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left side - Content */}
                    <div>
                      <Badge className="bg-[#4f5bff] text-white px-4 py-2 text-sm mb-6">
                        🎁 Бесплатный анализ
                      </Badge>
                      
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                        Получите бесплатный аудит вашего документооборота
                      </h3>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-lg leading-7 mb-8">
                        Загрузите образец документа и получите персональный анализ потенциала автоматизации за 24 часа. 
                        Узнайте точно, сколько времени и денег вы сможете сэкономить.
                      </p>

                      <div className="space-y-4 mb-8">
                        {[
                          "Анализ типов ваших документов",
                          "Расчет потенциальной экономии времени", 
                          "Персональные рекомендации по автоматизации",
                          "Готовый план внедрения"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#4f5bff] mt-1 mr-3 flex-shrink-0" />
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className="w-full md:w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                        onClick={() => openPDFDownload()}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Получить бесплатный анализ
                      </Button>
                    </div>

                    {/* Right side - Visual/Form */}
                    <div className="bg-gradient-to-br from-[#4f5bff]/10 to-[#8b5cf6]/10 rounded-2xl p-8 border border-[#4f5bff]/20">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-[#4f5bff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="h-10 w-10 text-[#4f5bff]" />
                        </div>
                        <h4 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-2">
                          Что вы получите:
                        </h4>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <Award className="h-6 w-6 text-[#4f5bff] mr-3" />
                          <div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-sm">
                              Персональный отчет
                            </div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs">
                              Детальный анализ на 15+ страниц
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <TrendingUp className="h-6 w-6 text-[#4f5bff] mr-3" />
                          <div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-sm">
                              ROI расчеты
                            </div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs">
                              Точная экономия в рублях и часах
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <Clock className="h-6 w-6 text-[#4f5bff] mr-3" />
                          <div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-sm">
                              План внедрения
                            </div>
                            <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs">
                              Пошаговый roadmap автоматизации
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-[#4f5bff]/10 rounded-lg text-center">
                        <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-lg">
                          Стоимость: ₽0
                        </div>
                        <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                          Обычно такой анализ стоит ₽50,000
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="py-[60px] px-4 md:px-[90px] bg-[#111111]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Как работает автоматизация
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Простой 4-шаговый процесс внедрения
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Анализ документооборота",
                    description: "Изучаем ваши текущие процессы и типы документов"
                  },
                  {
                    step: "02", 
                    title: "Настройка ИИ-модели",
                    description: "Обучаем ИИ на ваших специфических документах"
                  },
                  {
                    step: "03",
                    title: "Интеграция систем",
                    description: "Подключаем к вашим существующим системам"
                  },
                  {
                    step: "04",
                    title: "Запуск и поддержка",
                    description: "Внедряем решение и обеспечиваем техподдержку"
                  }
                ].map((item, index) => (
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
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-4xl mb-4">
                        {item.step}
                      </div>
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-4">
                        {item.title}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base leading-6">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                    onClick={() => openConsultationPopup()}
                  >
                    Начать автоматизацию
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-auto px-6 md:px-8 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] text-white text-base md:text-[17.6px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors whitespace-nowrap"
                    onClick={() => window.open('/pricing', '_blank')}
                  >
                    Сравнить пакеты
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Сферы применения
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Автоматизация документооборота в различных отраслях
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Финансы и банкинг",
                    items: [
                      "Обработка заявок на кредиты",
                      "Анализ финансовых отчетов", 
                      "Проверка документов клиентов",
                      "Автоматизация KYC процедур"
                    ]
                  },
                  {
                    title: "Логистика и торговля",
                    items: [
                      "Обработка накладных и счетов",
                      "Учет товарных документов",
                      "Автоматизация таможенных деклараций",
                      "Управление договорами"
                    ]
                  },
                  {
                    title: "Здравоохранение",
                    items: [
                      "Обработка медицинских карт",
                      "Анализ результатов анализов",
                      "Управление страховыми случаями",
                      "Ведение документации пациентов"
                    ]
                  },
                  {
                    title: "Юридические услуги",
                    items: [
                      "Анализ договоров и соглашений",
                      "Обработка судебных документов",
                      "Автоматизация compliance процедур",
                      "Управление правовой документацией"
                    ]
                  },
                  {
                    title: "Недвижимость",
                    items: [
                      "Обработка документов на недвижимость",
                      "Анализ технических паспортов",
                      "Автоматизация сделок",
                      "Управление арендными договорами"
                    ]
                  },
                  {
                    title: "Производство",
                    items: [
                      "Обработка технической документации",
                      "Управление сертификатами качества",
                      "Автоматизация закупочных процедур",
                      "Ведение производственной отчетности"
                    ]
                  }
                ].map((useCase, index) => (
                  <Card
                    key={index}
                    className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${(index + 1) * 150}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-8">
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-xl mb-6">
                        {useCase.title}
                      </h3>
                      <div className="space-y-3">
                        {useCase.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#4f5bff] mt-0.5 mr-3 flex-shrink-0" />
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm">
                              {item}
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

        {/* Compact About Us Section */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="py-[60px] px-4 md:px-[90px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-4xl md:text-5xl tracking-[0] leading-tight mb-6">
                  Почему выбирают нас
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-6 max-w-4xl mx-auto">
                  Опытная команда экспертов по ИИ-автоматизации документооборота
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Team highlights */}
                <div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                        200+
                      </div>
                      <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Автоматизированных компаний
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                        15+
                      </div>
                      <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Лет опыта
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                        2.5M+
                      </div>
                      <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Обработанных документов
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                        99.7%
                      </div>
                      <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Успешность проектов
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Сертифицированные эксперты по ИИ и машинному обучению",
                      "Опыт работы с Enterprise системами и интеграциями", 
                      "Полное соответствие требованиям безопасности",
                      "Техническая поддержка 24/7 на русском языке"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#4f5bff] mt-1 mr-3 flex-shrink-0" />
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Team member cards */}
                <div className="space-y-6">
                  <Card className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src="/images/jakeprofile.png" 
                            alt="Jake McMahon"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-base mb-1">
                            Jake McMahon
                          </h3>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#4f5bff] text-sm mb-1">
                            Основатель и ИИ-стратег
                          </p>
                          <div className="flex items-center">
                            {Array.from({length: 5}).map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-[#ffd700] fill-current" />
                            ))}
                            <span className="ml-2 text-[#666666] text-xs">200+ проектов</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm leading-5">
                        "15+ лет опыта в автоматизации. Специализируюсь на документообороте и помог сэкономить клиентам более ₽2 млрд."
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="rounded-[18px] bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src="/images/vyacheslavprofile.PNG" 
                            alt="Vyacheslav Razin"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-base mb-1">
                            Vyacheslav Razin
                          </h3>
                          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] text-[#4f5bff] text-sm mb-1">
                            Технический директор
                          </p>
                          <div className="flex items-center">
                            {Array.from({length: 5}).map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-[#ffd700] fill-current" />
                            ))}
                            <span className="ml-2 text-[#666666] text-xs">20+ лет в enterprise</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-sm leading-5">
                        "Архитектор корпоративных ИИ-систем. Специализируюсь на сложных интеграциях и масштабировании решений."
                      </p>
                    </CardContent>
                  </Card>

                  <Button 
                    variant="ghost"
                    className="w-full h-[44px] bg-[#4f5bff]/10 hover:bg-[#4f5bff]/20 rounded-lg text-[#4f5bff] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] font-normal transition-colors"
                    onClick={() => window.open('/about', '_blank')}
                  >
                    Узнать больше о команде
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - White background to contrast with footer */}
        <section className="w-full bg-white py-20 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="w-full max-w-[1260px] mx-auto px-6">
            
            {/* Header - Same style as other sections */}
            <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-[13.5px] tracking-[0] leading-[13.5px] mb-4">
                ГОТОВЫ К АВТОМАТИЗАЦИИ
              </div>
              <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#111111] text-[46.3px] tracking-[0] leading-[54px] mb-6">
                Готовы автоматизировать документооборот?
              </h2>
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-[#666666] text-lg leading-6 max-w-2xl mx-auto">
                Получите персональную консультацию и узнайте, как сэкономить до 85% времени на обработке документов
              </p>
            </div>

            {/* CTA Buttons - Homepage style */}
            <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => openConsultationPopup()}
                >
                  Получить консультацию бесплатно →
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#4f5bff] text-[#4f5bff] hover:bg-[#4f5bff] hover:text-white px-8 py-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors"
                  onClick={() => window.open('/pricing', '_blank')}
                >
                  Посмотреть цены
                </Button>
              </div>
            </div>

            {/* Features Grid - Card style like homepage */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  icon: <Timer className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Быстрый старт",
                  description: "Первые результаты через 2 недели",
                  highlight: "2 недели"
                },
                {
                  id: "02",
                  icon: <Shield className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Гарантия качества", 
                  description: "99.7% точность обработки документов",
                  highlight: "99.7%"
                },
                {
                  id: "03",
                  icon: <TrendingUp className="h-12 w-12 text-[#4f5bff]" />,
                  title: "Масштабируемость",
                  description: "От 100 до 100,000+ документов в день",
                  highlight: "100,000+"
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

export default DocumentAutomationNew;