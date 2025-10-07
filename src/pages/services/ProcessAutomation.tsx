import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, Zap, Shield, Clock, TrendingUp, ArrowRight, Star, Users, Target, BarChart3 } from "lucide-react";
import ConsultationPopupRU from "../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../hooks/useSprintContactForm";
import { useIsMobile } from "../../hooks/use-mobile";

const ProcessAutomation = () => {
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
    { value: "400%", label: "Ускорение процессов" },
    { value: "95%", label: "Снижение ошибок" },
    { value: "70%", label: "Экономия затрат" },
    { value: "24/7", label: "Работа без остановок" }
  ];

  const problems = [
    {
      title: "Узкие места в ручных процессах",
      items: [
        "Команды тратят 40+ часов в неделю на повторяющиеся ручные задачи",
        "Критические бизнес-процессы застревают в цепочках email и таблицах",
        "Выгорание сотрудников от монотонной повторяющейся работы",
        "Рост бизнеса ограничен пропускной способностью ручных процессов"
      ]
    },
    {
      title: "Проблемы несогласованности процессов",
      items: [
        "Разные члены команды следуют разным процедурам",
        "Знания о процессах заперты в головах отдельных сотрудников",
        "Качество сильно варьируется в зависимости от исполнителя",
        "Адаптация новых сотрудников занимает месяцы из-за сложности процессов"
      ]
    },
    {
      title: "Операционная неэффективность",
      items: [
        "Информационные силосы препятствуют плавному потоку процессов",
        "Ручные передачи создают задержки и ошибки",
        "Нет видимости производительности процессов или узких мест",
        "Масштабирование требует найма людей вместо повышения эффективности"
      ]
    }
  ];

  const solutions = [
    {
      title: "Автоматизация рабочих потоков",
      description: "Сквозная автоматизация бизнес-процессов от триггера до завершения с интеллектуальным принятием решений",
      benefits: [
        "Интеграция нескольких систем и поток данных",
        "Условная логика и деревья решений",
        "Обработка исключений и восстановление после ошибок",
        "Мониторинг процессов в реальном времени и оповещения",
        "Аудиторские следы и отслеживание соответствия"
      ]
    },
    {
      title: "Интеллектуальная маршрутизация задач",
      description: "Умное назначение и приоритизация задач на основе сложности, срочности и экспертизы членов команды",
      benefits: [
        "Назначение задач на основе навыков",
        "Балансировка рабочей нагрузки между командами",
        "Оценка приоритетов и срочная эскалация",
        "Автоматический мониторинг SLA и соответствие",
        "Отслеживание производительности и оптимизация"
      ]
    },
    {
      title: "Интеграция и синхронизация данных",
      description: "Беспрепятственный поток данных между системами, исключающий ручной ввод данных и уменьшающий ошибки",
      benefits: [
        "Синхронизация данных в реальном времени",
        "Мультиплатформенная интеграция (CRM, ERP, базы данных)",
        "Валидация и очистка данных",
        "Автоматизированная отчетность и дашборды",
        "Управление основными данными"
      ]
    }
  ];

  const process = [
    {
      phase: "Обнаружение и картирование процессов (1-2 неделя)",
      items: [
        "Документирование текущих рабочих потоков",
        "Выявление узких мест и неэффективности",
        "ROI анализ и приоритизация",
        "Проектирование будущего состояния процессов"
      ]
    },
    {
      phase: "Разработка автоматизации (3-6 неделя)",
      items: [
        "Разработка автоматизации рабочих потоков",
        "Системные интеграции и потоки данных",
        "Тестирование и обеспечение качества",
        "Создание пользовательского интерфейса и дашбордов"
      ]
    },
    {
      phase: "Развертывание и оптимизация (7-8 неделя)",
      items: [
        "Продуктивное развертывание и запуск",
        "Обучение пользователей и управление изменениями",
        "Настройка мониторинга производительности",
        "Процессы непрерывного улучшения"
      ]
    }
  ];

  const pricing = {
    startingPrice: "500 тыс ₽",
    packages: [
      {
        name: "Базовая автоматизация",
        price: "500 тыс ₽",
        description: "Автоматизация ключевых процессов",
        features: [
          "До 3 автоматизированных рабочих потоков",
          "Базовые системные интеграции",
          "Стандартные шаблоны процессов",
          "Email поддержка",
          "Ежемесячные отчеты о производительности"
        ],
        popular: false
      },
      {
        name: "Профессиональная автоматизация",
        price: "1.2 млн ₽",
        description: "Комплексная автоматизация процессов",
        features: [
          "До 10 автоматизированных рабочих потоков",
          "Продвинутые системные интеграции",
          "Кастомная разработка рабочих потоков",
          "Дашборд мониторинга в реальном времени",
          "Приоритетная поддержка и обучение",
          "API доступ и кастомизация"
        ],
        popular: true
      },
      {
        name: "Корпоративная автоматизация",
        price: "от 2.5 млн ₽",
        description: "Трансформация процессов масштаба предприятия",
        features: [
          "Неограниченные автоматизированные рабочие потоки",
          "Корпоративные интеграции",
          "Кастомная разработка и архитектура",
          "Выделенная команда поддержки",
          "Продвинутая аналитика и отчетность",
          "Мульти-арендное развертывание"
        ],
        popular: false
      }
    ]
  };

  const caseStudies = [
    {
      client: "Производственная компания",
      result: "Сокращение времени обработки заказов с 5 дней до 2 часов",
      metric: "95%"
    },
    {
      client: "Профессиональные услуги",
      result: "Время настройки клиента сокращено с 3 дней до 30 минут",
      metric: "90%"
    },
    {
      client: "E-commerce ритейлер",
      result: "Сокращение времени обработки возвратов на 85%",
      metric: "85%"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Автоматизация процессов - AI Automation RU</title>
        <meta name="description" content="Автоматизируйте бизнес-процессы с помощью ИИ. Ускорьте работу в 4 раза, снизьте ошибки на 95%. Комплексные решения для российского бизнеса." />
        <meta name="keywords" content="автоматизация процессов, роботизация, цифровая трансформация, ИИ автоматизация, бизнес процессы" />
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
                      {"  "}Автоматизация процессов
                    </span>
                  </div>

                  {/* Hero Title */}
                  <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    <span className="block sm:hidden">Автоматизация<br />бизнес-процессов<br />с помощью ИИ</span>
                    <span className="hidden sm:block">Автоматизация бизнес-процессов с помощью ИИ</span>
                  </h1>

                  {/* Hero Subtitle */}
                  <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-sm md:text-base lg:text-lg tracking-[0.18px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl px-4">
                    <span className="text-white tracking-[0.03px]">Превратите ручные повторяющиеся процессы в интеллектуальную автоматизацию, которая работает 24/7, снижает ошибки на 95% и освобождает вашу команду для стратегической работы</span>
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
                        Превью автоматизации процессов
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                Наши ИИ-решения для автоматизации
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
                Процесс внедрения автоматизации
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
                  Пакеты автоматизации процессов
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
                Готовы автоматизировать ваши процессы?
              </h2>
              
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                Получите персональное предложение и начните автоматизацию уже через 72 часа
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
        title="Получите предложение по автоматизации процессов"
        description="Запланируйте 30-минутный стратегический звонок для обсуждения ваших потребностей в автоматизации"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default ProcessAutomation;