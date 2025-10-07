import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";
import ConsultationPopupRU from "../components/ConsultationPopupRU";
import { useSprintContactForm } from "../hooks/useSprintContactForm";
import { useIsMobile } from "../hooks/use-mobile";

interface SimpleSEOTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  heroTitle: string;
  breadcrumb: string;
  keywords: string[];
  heroSubtitle: string;
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutionDescription: string;
  benefits: string[];
  basePrice: string;
  professionalPrice: string;
  enterprisePrice: string;
  location: string;
  industry: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  ctaText: string;
  consultationTitle: string;
}

const SimpleSEOTemplate: React.FC<SimpleSEOTemplateProps> = ({
  title,
  metaDescription,
  h1,
  heroTitle,
  breadcrumb,
  keywords,
  heroSubtitle,
  problemTitle,
  problems,
  solutionTitle,
  solutionDescription,
  benefits,
  basePrice,
  professionalPrice,
  enterprisePrice,
  location,
  industry,
  faq,
  relatedServices,
  ctaText,
  consultationTitle,
}) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  // Update document meta tags
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescription);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(", "));
  }, [title, metaDescription, keywords]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Modern Design */}
      <section className="relative w-full bg-[#111111] overflow-hidden min-h-[120vh] sm:min-h-[110vh] md:min-h-screen">
        <div className="relative w-full h-full pb-20 md:pb-16">
          {/* Modern Background with Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse delay-700"></div>

          {/* Navigation Bar */}
          <nav className="absolute w-full h-[75px] top-0 left-0 z-10">
            <div className="flex items-center justify-between px-4 md:px-[90px] py-[29px]">
              <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] px-2">
                <div className="text-white text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] truncate">
                  AI Automation RU
                </div>
              </div>

              <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <Button
                  className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[14px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                  variant="ghost"
                  onClick={() => window.location.href = '/'}
                >
                  ГЛАВНАЯ
                </Button>
                <Button
                  className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[14px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                  variant="ghost"
                  onClick={openConsultationPopup}
                >
                  НАЧАТЬ
                </Button>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <main className="flex flex-col items-center gap-6 md:gap-9 absolute top-[80px] md:top-[180px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
            <div className="flex flex-col w-full max-w-[1176px] items-center gap-6 md:gap-9">
              
              {/* Breadcrumb */}
              <div className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-base md:text-lg tracking-[0.36px] leading-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <span className="text-neutral-100 tracking-[0.06px]">
                  ИИ Автоматизация для Бизнеса /
                </span>
                <span className="text-[#666666] tracking-[0.06px]">/</span>
                <span className="text-[#3d3d3d] tracking-[0.06px]">/</span>
                <span className="text-neutral-100 tracking-[0.06px]">
                  {"  "}{breadcrumb}
                </span>
              </div>

              {/* Hero Title */}
              <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                <span className="block sm:hidden">{heroTitle.split(' ').slice(0, 3).join(' ')}<br />{heroTitle.split(' ').slice(3).join(' ')}</span>
                <span className="hidden sm:block">{heroTitle}</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-sm md:text-base lg:text-lg tracking-[0.18px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl px-4">
                <span className="text-white tracking-[0.03px]">{heroSubtitle}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                <Button 
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
                  onClick={openConsultationPopup}
                >
                  <span className="block sm:hidden">{ctaText}</span>
                  <span className="hidden sm:block">{ctaText}</span>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-transparent hover:bg-[#ffffff1a] rounded-[10.8px] border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal tracking-[0] leading-tight transition-all duration-200 text-center"
                  onClick={openConsultationPopup}
                >
                  <span className="block sm:hidden">Кейсы</span>
                  <span className="hidden sm:block">Посмотреть кейсы</span>
                </Button>
              </div>

              {/* Stats Grid - Enhanced with Cards */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-8 md:mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    500+
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Компаний
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    80%
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Экономия времени
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    300%
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    ROI
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    24/7
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Поддержка
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Problems Section - Modern gradient background */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-4">
              {problemTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#333] text-sm md:text-base leading-relaxed group-hover:text-black transition-colors">
                      {problem}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced with modern styling */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-4">
              {solutionTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] mx-auto rounded-full mb-6"></div>
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              {solutionDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc]"></div>
                  <div className="flex items-start gap-4 mt-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                    </div>
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#333] text-sm md:text-base leading-relaxed group-hover:text-black transition-colors">
                      {benefit}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Modern design */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-4">
              Стоимость услуг
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 lg:p-8 text-center">
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                  Базовый
                </h3>
                <div className="text-3xl md:text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-6 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] bg-clip-text text-transparent">
                  {basePrice}
                </div>
                <Button
                  className="w-full h-[48px] bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] hover:from-[#3d47cc] hover:to-[#4f5bff] text-white rounded-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={openConsultationPopup}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white border-2 border-[#4f5bff] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc]"></div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] text-white px-6 py-2 text-sm rounded-full shadow-lg">
                  ⭐ Популярный
                </div>
              </div>
              <CardContent className="p-6 lg:p-8 text-center pt-8">
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                  Профессиональный
                </h3>
                <div className="text-3xl md:text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-6 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] bg-clip-text text-transparent">
                  {professionalPrice}
                </div>
                <Button
                  className="w-full h-[48px] bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] hover:from-[#3d47cc] hover:to-[#4f5bff] text-white rounded-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={openConsultationPopup}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 lg:p-8 text-center">
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                  Корпоративный
                </h3>
                <div className="text-3xl md:text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-6 bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] bg-clip-text text-transparent">
                  {enterprisePrice}
                </div>
                <Button
                  className="w-full h-[48px] bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] hover:from-[#3d47cc] hover:to-[#4f5bff] text-white rounded-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={openConsultationPopup}
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="rounded-lg sm:rounded-xl bg-neutral-100 border-0">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl tracking-tight leading-tight mb-3">
                    {item.question}
                  </h3>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
            Связанные услуги
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {relatedServices.map((service, index) => (
              <Card key={index} className="rounded-lg bg-neutral-100 border-0 hover:bg-neutral-200 transition-colors cursor-pointer">
                <CardContent className="p-3 sm:p-4 text-center">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm leading-relaxed">
                    {service}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-6">
            {consultationTitle}
          </h2>
          
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-base sm:text-lg leading-relaxed mb-8">
            Получите персональное предложение и начните автоматизацию уже через 72 часа
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[10.8px]">
            <Button 
              className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
              onClick={openConsultationPopup}
            >
              {ctaText}
            </Button>

            <Button
              variant="ghost"
              className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-transparent hover:bg-[#ffffff1a] rounded-[10.8px] border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal tracking-[0] leading-tight transition-all duration-200 text-center"
              onClick={() => window.location.href = '/'}
            >
              Вернуться на главную
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Popup */}
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title={consultationTitle}
        description="Запланируйте 30-минутный стратегический звонок для обсуждения ваших потребностей в автоматизации"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </div>
  );
};

export default SimpleSEOTemplate;