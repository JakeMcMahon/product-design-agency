import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";
import { CheckCircle, Target, Settings, Zap, TrendingUp, Brain, AlertTriangle } from "lucide-react";

const CustomAISolutions = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
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
    { label: "Кастомных решений", value: "150+" },
    { label: "Успешность внедрения", value: "98%" },
    { label: "Средний ROI", value: "350%" },
    { label: "Довольных клиентов", value: "96%" }
  ];

  const problems = [
    {
      title: "Ограничения готовых решений",
      items: [
        "Готовые ИИ-решения не подходят под уникальные бизнес-процессы",
        "Универсальные инструменты заставляют менять рабочие процессы",
        "Критические требования бизнеса не учитываются в стандартных функциях",
        "Конкурентное преимущество теряется при использовании одинаковых инструментов"
      ]
    },
    {
      title: "Сложность выбора архитектуры ИИ",
      items: [
        "Неясно, нужна простая автоматизация или сложные ИИ-агенты",
        "Поставщики навязывают дорогие, избыточные решения для простых задач",
        "Неопределенность в выборе подходящего ИИ-подхода",
        "Страх выбрать неправильную архитектуру и потратить инвестиции впустую"
      ]
    },
    {
      title: "Проблемы интеграции и масштабирования",
      items: [
        "Существующие системы не приспособлены для современных ИИ-решений",
        "Нужны решения, которые растут вместе с бизнесом",
        "Данные разбросаны по системам без централизованного интеллекта",
        "Уникальные требования к соответствию и безопасности"
      ]
    }
  ];

  const solutions = [
    {
      title: "Отраслевые ИИ-решения",
      description: "Решения, адаптированные под уникальные требования и регуляции вашей отрасли",
      features: [
        "Обработка с учетом соответствия требованиям",
        "Отраслевые языковые модели",
        "Автоматизация регулятивной отчетности",
        "Специализированная интеграция рабочих процессов"
      ]
    },
    {
      title: "Интеграция с устаревшими системами",
      description: "Мостик между современными ИИ-возможностями и существующими корпоративными системами",
      features: [
        "Разработка и интеграция API",
        "Трансформация и миграция данных",
        "Постепенная модернизация систем",
        "Поддержка обратной совместимости"
      ]
    },
    {
      title: "Гибридные человеко-ИИ процессы",
      description: "Оптимизация сотрудничества между экспертами и ИИ-системами",
      features: [
        "Интеллектуальное делегирование задач",
        "Человеческий надзор и процессы утверждения",
        "ИИ-поддержанное принятие решений",
        "Непрерывное обучение на человеческой обратной связи"
      ]
    },
    {
      title: "Масштабируемые ИИ-платформы",
      description: "Создание ИИ-инфраструктуры, которая растет вместе с вашим бизнесом",
      features: [
        "Модульный дизайн архитектуры",
        "Мультитенантные возможности",
        "Мониторинг и оптимизация производительности",
        "Готовый к будущему технологический стек"
      ]
    }
  ];

  const process = [
    {
      step: "1. Анализ и планирование (1-3 недели)",
      title: "Глубокий анализ требований и проектирование оптимального ИИ-подхода",
      activities: [
        "Анализ бизнес-процессов и сбор требований",
        "Техническая оценка архитектуры и планирование",
        "Выбор ИИ-подхода (от простого к сложному)",
        "Моделирование метрик успеха и ROI"
      ]
    },
    {
      step: "2. Разработка прототипа (4-6 недель)",
      title: "Создание и валидация основного функционала с быстрым прототипированием",
      activities: [
        "Разработка и тестирование основных ИИ-возможностей",
        "Proof-of-concept интеграций",
        "Бенчмаркинг производительности и оптимизация",
        "Обратная связь заинтересованных сторон и итерации"
      ]
    },
    {
      step: "3. Полная разработка (7-12 недель)",
      title: "Полная разработка с надежными функциями для продакшна",
      activities: [
        "Полная разработка и тестирование функций",
        "Обеспечение безопасности, соответствия и надежности",
        "Дизайн пользовательского интерфейса и опыта",
        "Комплексное тестирование и обеспечение качества"
      ]
    },
    {
      step: "4. Внедрение и развитие (13+ недель)",
      title: "Запуск решения и установление процессов непрерывного улучшения",
      activities: [
        "Продакшн развертывание и поддержка запуска",
        "Обучение пользователей и управление изменениями",
        "Мониторинг производительности и оптимизация",
        "Постоянное улучшение и расширение возможностей"
      ]
    }
  ];

  const packages = [
    {
      name: "Кастомный ИИ Стартер",
      price: "от 2 млн ₽",
      description: "Простые кастомные решения и proof-of-concept",
      includes: [
        "Анализ требований и проектирование архитектуры",
        "Простая ИИ-реализация (цепочки промптов/маршрутизация)",
        "Базовая интеграция с 1-2 системами",
        "3 месяца поддержки и оптимизации",
        "Документация и обучение"
      ],
      timeline: "4-8 недель",
      popular: false
    },
    {
      name: "Кастомный ИИ Профессионал",
      price: "от 5 млн ₽",
      description: "Комплексные кастомные ИИ-решения",
      includes: [
        "Сложная интеграция с несколькими системами",
        "Продвинутые ИИ-системы оркестрации",
        "Кастомное обучение и оптимизация моделей",
        "6 месяцев поддержки и развития",
        "Продвинутый мониторинг и аналитика",
        "Выделенная проектная команда"
      ],
      timeline: "8-16 недель",
      popular: true
    },
    {
      name: "Корпоративный ИИ",
      price: "от 10 млн ₽",
      description: "Корпоративная ИИ-трансформация",
      includes: [
        "Мульти-агентные ИИ-архитектуры",
        "Корпоративная разработка ИИ-платформы",
        "Продвинутые функции безопасности и соответствия",
        "12+ месяцев партнерства и развития",
        "Выделенная инженерная команда",
        "Разработка стратегической ИИ-дорожной карты"
      ],
      timeline: "16+ недель",
      popular: false
    }
  ];



  return (
    <>
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#111111] overflow-hidden min-h-[120vh] sm:min-h-[110vh] md:min-h-screen">
        <div className="relative w-full h-full pb-20 md:pb-16">
          <img
            className="absolute w-full h-[456px] top-[-252px] left-1/2 transform -translate-x-1/2 scale-[1.16] max-w-none"
            alt="Ellipse"
            src="https://c.animaapp.com/meoanmv4HLBh9Z/img/ellipse-1.svg"
          />
          
          {/* Navigation */}
          <nav className="relative z-20 w-full px-4 md:px-[90px] py-[29px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Logo"
                  src="https://c.animaapp.com/meoanmv4HLBh9Z/img/logo.svg"
                />
                <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-sm md:text-base">
                  AI Автоматизация
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                {[
                  { text: "Услуги", href: "/#process" },
                  { text: "Кейсы", href: "/#cases" },
                  { text: "Результаты", href: "/#outcomes" },
                  { text: "Цены", href: "/#pricing" },
                  { text: "О нас", href: "/#about" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white/90 text-xs md:text-sm tracking-[0] leading-[13.5px] cursor-pointer hover:text-white hover:bg-[#4f5bff]/20 hover:shadow-[0_0_10px_rgba(79,91,255,0.3)] px-2 md:px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              
              <Button 
                className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[14px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                onClick={openConsultationPopup}
              >
                Консультация
              </Button>
            </div>
          </nav>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 md:px-[90px] text-center">
            <div className="max-w-[900px] mx-auto">
              <h1 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight md:leading-[48px] mb-6 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                Кастомные ИИ-решения под ваш бизнес
              </h1>
              
              <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed mb-8 md:mb-12 max-w-[600px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                От простых автоматизаций до сложных мульти-агентных систем. Находим идеальный ИИ-подход для ваших уникальных потребностей.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                {stats.map((stat, index) => (
                  <Card key={index} className="rounded-lg sm:rounded-xl bg-neutral-100 border-0">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#3d3d3d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight mb-1">
                        {stat.value}
                      </div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-[#666666] text-xs md:text-sm tracking-[0.18px] leading-[18px]">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-[10.8px] justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                <Button
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
                  onClick={openConsultationPopup}
                >
                  <span className="block sm:hidden">Обсудить проект</span>
                  <span className="hidden sm:block">Обсудить кастомное решение</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative w-full bg-[#111111] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
              Почему готовые ИИ-решения не работают
            </h2>
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
              Универсальные инструменты не подходят под уникальные бизнес-процессы
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="rounded-lg sm:rounded-xl bg-[#1c1c1c] border border-white/10 translate-y-[-1rem] animate-fade-in opacity-0" style={{ '--animation-delay': `${400 + index * 100}ms` } as React.CSSProperties}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                    <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg">
                      {problem.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {problem.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative w-full bg-[#111111] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
              Типы кастомных ИИ-решений
            </h2>
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
              От отраслевых решений до масштабируемых платформ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="rounded-lg sm:rounded-xl bg-[#1c1c1c] border border-white/10 translate-y-[-1rem] animate-fade-in opacity-0" style={{ '--animation-delay': `${400 + index * 100}ms` } as React.CSSProperties}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Settings className="h-5 w-5 text-[#4f5bff] mt-1 flex-shrink-0" />
                    <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-lg">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-sm mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative w-full bg-[#111111] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
              Процесс разработки кастомных решений
            </h2>
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
              От анализа требований до полного внедрения и поддержки
            </p>
          </div>

          <div className="space-y-6">
            {process.map((phase, index) => (
              <Card key={index} className="rounded-lg sm:rounded-xl bg-[#1c1c1c] border border-white/10 translate-y-[-1rem] animate-fade-in opacity-0" style={{ '--animation-delay': `${400 + index * 100}ms` } as React.CSSProperties}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#4f5bff] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-2">
                        {phase.step}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base mb-4">
                        {phase.title}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/80 text-sm leading-relaxed">
                              {activity}
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



      {/* Pricing Section */}
      <section className="relative w-full bg-[#111111] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-3">
              Пакеты кастомных ИИ-решений
            </h2>
            <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg">
              Прозрачные цены на основе сложности и масштаба проекта
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`rounded-lg sm:rounded-xl border transition-all duration-300 relative translate-y-[-1rem] animate-fade-in opacity-0 ${
                pkg.popular
                  ? 'border-2 border-[#4f5bff] bg-gradient-to-br from-[#4f5bff]/10 to-[#4f5bff]/5 shadow-[0_0_30px_rgba(79,91,255,0.2)]'
                  : 'border border-gray/20 bg-[#1c1c1c] hover:border-[#4f5bff]/30'
              }`} style={{ '--animation-delay': `${400 + index * 100}ms` } as React.CSSProperties}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-[#4f5bff] to-[#3d47cc] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                      ⭐ РЕКОМЕНДУЕМЫЙ
                    </span>
                  </div>
                )}
                
                <CardContent className="p-6 sm:p-8 pb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xl mb-1">
                        {pkg.name}
                      </h3>
                      <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right ml-0 sm:ml-6 w-full sm:w-auto">
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-[#4f5bff] text-2xl">
                        {pkg.price}
                      </div>
                      <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/60 text-sm">
                        {pkg.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 sm:mb-8 pb-4">
                    {pkg.includes.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#4f5bff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-[#4f5bff] rounded-full" />
                        </div>
                        <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/90 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full h-10 sm:h-12 rounded-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-sm transition-colors ${
                      pkg.popular
                        ? 'bg-[#4f5bff] text-white hover:bg-[#4f5bff]/90'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                    onClick={openConsultationPopup}
                  >
                    Получить предложение
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#111111] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-4xl tracking-[0] leading-tight md:leading-[48px] mb-6">
            Готовы создать идеальное ИИ-решение?
          </h2>
          <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] text-white/70 text-base sm:text-lg mb-8">
            Найдем правильный ИИ-подход, который подходит вашим уникальным потребностям и растет вместе с бизнесом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
              onClick={openConsultationPopup}
            >
              Запланировать ИИ-стратегию
            </Button>
            <Button
              className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-transparent hover:bg-[#ffffff1a] rounded-[10.8px] border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal tracking-[0] leading-tight transition-all duration-200 text-center"
              onClick={openConsultationPopup}
            >
              Скачать руководство по ИИ
            </Button>
          </div>
        </div>
      </section>
    </div>
    
    <ConsultationPopupRU
      isOpen={isConsultationOpen}
      onClose={closeConsultationPopup}
      title="Обсудите ваш кастомный ИИ-проект"
      description="Получите персональное предложение и детальную консультацию по вашим уникальным потребностям в кастомных ИИ-решениях"
      onSubmit={submitContactForm}
      isSubmitting={isContactSubmitting}
      isSubmitted={isContactSubmitted}
      error={contactError}
      successMessage={contactSuccessMessage}
    />
    </>
  );
};

export default CustomAISolutions;