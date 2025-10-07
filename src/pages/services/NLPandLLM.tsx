import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, MessageSquare, Zap, Brain, Clock, TrendingUp, ArrowRight, Star, Users, Target, BarChart3 } from "lucide-react";
import ConsultationPopupRU from "../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../hooks/useSprintContactForm";
import { useIsMobile } from "../../hooks/use-mobile";

const NLPandLLM = () => {
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

  const stats = [
    { value: "98%", label: "Точность понимания" },
    { value: "<2 сек", label: "Время ответа" },
    { value: "70%", label: "Снижение затрат" },
    { value: "24/7", label: "Доступность" }
  ];

  const problems = [
    {
      title: "Кошмар клиентского сервиса",
      items: [
        "Заявки накапливаются часами, пока клиенты ждут ответа",
        "Простые вопросы требуют дорогого человеческого вмешательства",
        "Клиенты отказываются от покупок из-за медленного ответа",
        "Лучшие агенты выгорают от повторяющихся задач низкой ценности"
      ]
    },
    {
      title: "Узкое место анализа контента",
      items: [
        "Тысячи документов требуют ручного обзора и анализа",
        "Отзывы и обратная связь клиентов остаются неанализированными",
        "Критические инсайты похоронены в неструктурированных текстовых данных",
        "Языковые барьеры ограничивают глобальную коммуникацию"
      ]
    }
  ];

  const solutions = [
    {
      title: "Интеллектуальные разговоры",
      description: "Естественные, контекстно-осведомленные диалоги, которые понимают нюансы и намерения",
      benefits: [
        "Понимание контекста и намерений клиентов",
        "Естественная разговорная манера общения",
        "Многоуровневая обработка сложных запросов",
        "Персонализированные ответы на основе истории",
        "Эмоциональный интеллект в коммуникации"
      ]
    },
    {
      title: "Понимание контента",
      description: "Глубокий анализ документов, электронных писем и неструктурированных текстовых данных",
      benefits: [
        "Автоматическое извлечение ключевой информации",
        "Суммирование больших объемов текста",
        "Классификация и категоризация контента",
        "Выявление трендов и паттернов в данных",
        "Обработка многоформатных документов"
      ]
    },
    {
      title: "Многоязычная поддержка",
      description: "Коммуникация и анализ на 100+ языках с учетом культурного контекста",
      benefits: [
        "Перевод в реальном времени",
        "Сохранение тона и стиля сообщения",
        "Культурная адаптация контента",
        "Поддержка редких языков и диалектов",
        "Автоматическое определение языка"
      ]
    }
  ];

  const process = [
    {
      phase: "Языковая оценка (1-2 неделя)",
      items: [
        "Аудит контента и коммуникаций",
        "Приоритизация случаев использования",
        "Анализ требований к данным",
        "Планирование интеграции с существующими системами"
      ]
    },
    {
      phase: "Разработка модели (3-5 неделя)",
      items: [
        "Кастомное обучение и дообучение LLM",
        "Разработка разговорного ИИ",
        "Интеграция базы знаний",
        "Настройка многоязычной поддержки"
      ]
    },
    {
      phase: "Интеграция и оптимизация (6-8 неделя)",
      items: [
        "Интеграция систем и тестирование",
        "Настройка производительности и оптимизация",
        "Обучение команды и передача проекта",
        "Настройка непрерывного обучения"
      ]
    }
  ];

  const pricing = {
    startingPrice: "600 тыс ₽",
    packages: [
      {
        name: "NLP Старт",
        price: "600 тыс ₽",
        description: "Базовые возможности обработки языка",
        features: [
          "До 10,000 запросов/месяц",
          "Базовая интеграция чатбота",
          "Стандартная языковая поддержка",
          "Email поддержка",
          "Базовая аналитическая панель"
        ],
        popular: false
      },
      {
        name: "NLP Профессиональный",
        price: "1.5 млн ₽",
        description: "Продвинутые языковые возможности",
        features: [
          "До 100,000 запросов/месяц",
          "Продвинутый разговорный ИИ",
          "Многоязычная поддержка",
          "Кастомные интеграции",
          "Приоритетная поддержка",
          "Продвинутая аналитика и отчетность"
        ],
        popular: true
      },
      {
        name: "NLP Корпоративный",
        price: "от 3 млн ₽",
        description: "Решения корпоративного уровня",
        features: [
          "Неограниченные запросы",
          "Кастомное обучение LLM",
          "Выделенная команда поддержки",
          "SLA гарантии",
          "White-label решения",
          "Продвинутые кастомизации"
        ],
        popular: false
      }
    ]
  };

  const caseStudies = [
    {
      client: "E-commerce ритейлер",
      result: "80% сокращение заявок в службу поддержки с автоматическим ИИ-ассистентом",
      metric: "80%"
    },
    {
      client: "Финансовая компания",
      result: "Автоматизированная система анализа документов экономит 200+ часов еженедельно",
      metric: "200ч"
    },
    {
      client: "Медицинская организация",
      result: "Многоязычная коммуникация с пациентами на 15+ языках",
      metric: "15+"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Обработка естественного языка и LLM - AI Automation RU</title>
        <meta name="description" content="Внедряйте передовые NLP и большие языковые модели. Автоматизируйте клиентский сервис, анализ контента и коммуникации с точностью 98%." />
        <meta name="keywords" content="NLP, обработка естественного языка, большие языковые модели, LLM, чатботы, ИИ коммуникации" />
      </head>

      <main className="bg-[#111111] min-h-screen w-full overflow-x-hidden">
        <div className="bg-[#111111] w-full flex flex-col">
          
          {/* Hero Section - Matching Homepage Header Style */}
          <section className="relative w-full bg-[#111111] overflow-hidden min-h-[120vh] sm:min-h-[110vh] md:min-h-screen">
            <div className="relative w-full h-full pb-20 md:pb-16">
              <img
                className="absolute w-full h-[456px] top-[-252px] left-1/2 transform -translate-x-1/2 scale-[1.16] max-w-none"
                alt="Ellipse"
                src="https://c.animaapp.com/meoanmv4HLBh9Z/img/ellipse-1.svg"
              />

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
                      {"  "}Обработка естественного языка
                    </span>
                  </div>

                  {/* Hero Title */}
                  <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    <span className="block sm:hidden">Обработка языка<br />и большие<br />языковые модели</span>
                    <span className="hidden sm:block">Обработка естественного языка и большие языковые модели</span>
                  </h1>

                  {/* Hero Subtitle */}
                  <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-sm md:text-base lg:text-lg tracking-[0.18px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl px-4">
                    <span className="text-white tracking-[0.03px]">Трансформируйте клиентскую поддержку, анализ контента и коммуникационные процессы с помощью больших языковых моделей, которые понимают контекст, эмоции и намерения как человеческие эксперты</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                    <Button 
                      className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
                      onClick={openConsultationPopup}
                    >
                      <span className="block sm:hidden">Получить предложение</span>
                      <span className="hidden sm:block">Получить персональное предложение</span>
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

                  {/* Stats Grid - Homepage Style */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-8 md:mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                          {stat.value}
                        </div>
                        <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Preview Section */}
                  <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] mb-8">
                    <div className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                      <div className="text-white/60 text-base sm:text-lg md:text-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] px-4 text-center">
                        Превью NLP и LLM решений
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>

          {/* Problems Section - Homepage Style Cards */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
                Проблемы, которые мы решаем
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {problems.map((problem, index) => (
                  <Card
                    key={problem.title}
                    className="rounded-lg sm:rounded-xl bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${200 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col items-start gap-2 sm:gap-3">
                        <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                          {problem.title}
                        </h3>
                        
                        <ul className="space-y-2">
                          {problem.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="text-red-500 mt-1 flex-shrink-0">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              </div>
                              <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
                Возможности ИИ-обработки языка
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {solutions.map((solution, index) => (
                  <Card
                    key={solution.title}
                    className="rounded-lg sm:rounded-xl bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${400 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col items-start gap-2 sm:gap-3">
                        <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                          {solution.title}
                        </h3>
                        
                        <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                          {solution.description}
                        </p>

                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3">
                              <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-4 h-4" />
                              <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
                Процесс внедрения NLP и LLM
              </h2>
              
              <div className="space-y-6">
                {process.map((phase, index) => (
                  <Card
                    key={phase.phase}
                    className="rounded-lg sm:rounded-xl bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${600 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#4f5bff] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-4">
                            {phase.phase}
                          </h3>
                          
                          <ul className="space-y-2">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <ArrowRight className="text-[#4f5bff] mt-1 flex-shrink-0 w-4 h-4" />
                                <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section - Homepage Style */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
                  Пакеты NLP и LLM интеграции
                </h2>
                <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
                  Начиная от {pricing.startingPrice}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricing.packages.map((pkg, index) => (
                  <Card
                    key={pkg.name}
                    className={`rounded-lg sm:rounded-xl border-0 translate-y-[-1rem] animate-fade-in opacity-0 relative ${
                      pkg.popular 
                        ? 'bg-[#1c1c1c] border-2 border-[#4f5bff] shadow-[0_0_20px_rgba(79,91,255,0.3)]' 
                        : 'bg-neutral-100'
                    }`}
                    style={
                      {
                        "--animation-delay": `${800 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#4f5bff] text-white px-4 py-1 text-sm">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="text-center mb-6">
                        <h3 className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mb-2 ${
                          pkg.popular ? 'text-white' : 'text-black'
                        }`}>
                          {pkg.name}
                        </h3>
                        
                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 ${
                          pkg.popular ? 'text-[#4f5bff]' : 'text-[#4f5bff]'
                        }`}>
                          {pkg.price}
                        </div>
                        
                        <p className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-xs sm:text-sm md:text-base ${
                          pkg.popular ? 'text-white/70' : 'text-[#666666]'
                        }`}>
                          {pkg.description}
                        </p>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-4 h-4" />
                            <span className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-xs sm:text-sm md:text-base leading-relaxed ${
                              pkg.popular ? 'text-white/80' : 'text-[#666666]'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full h-[48px] rounded-[10.8px] text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 ${
                          pkg.popular
                            ? 'bg-[#4f5bff] hover:bg-[#3d47cc] text-white shadow-[0px_4px_16px_rgba(79,91,255,0.3)] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)]'
                            : 'bg-[#4f5bff] hover:bg-[#3d47cc] text-white shadow-[0px_4px_16px_rgba(79,91,255,0.3)] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)]'
                        }`}
                        onClick={openConsultationPopup}
                      >
                        Выбрать пакет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-12">
                Кейсы клиентов
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {caseStudies.map((study, index) => (
                  <Card
                    key={study.client}
                    className="rounded-lg sm:rounded-xl bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${1000 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                      <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                        {study.metric}
                      </div>
                      
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black text-lg sm:text-xl tracking-tight leading-tight mb-2">
                        {study.client}
                      </h3>
                      
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed">
                        {study.result}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-6">
                Готовы внедрить умные языковые технологии?
              </h2>
              
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                Получите персональное предложение и начните автоматизацию коммуникаций уже через 72 часа
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[10.8px]">
                <Button 
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
                  onClick={openConsultationPopup}
                >
                  Получить предложение
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

        </div>
      </main>

      {/* Consultation Popup */}
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Получите предложение по NLP и LLM"
        description="Запланируйте 30-минутный стратегический звонок для обсуждения ваших потребностей в языковых технологиях"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default NLPandLLM;