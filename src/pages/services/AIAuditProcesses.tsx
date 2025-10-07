import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, Search, TrendingUp, Clock, Shield, FileText, Users, Zap } from "lucide-react";
import ConsultationPopupRU from "../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../hooks/useSprintContactForm";

const AIAuditProcesses = () => {
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
    { label: "Время анализа", value: "72 часа", icon: Clock },
    { label: "Точность оценки", value: "95%+", icon: CheckCircle },
    { label: "Потенциал экономии", value: "до 70%", icon: TrendingUp },
    { label: "Процессов анализируем", value: "50+", icon: Search }
  ];

  const problems = [
    {
      title: "Скрытые проблемы процессов",
      items: [
        "Неэффективные операции съедают до 40% рабочего времени",
        "Дублирование задач увеличивает затраты на 25%",
        "Ручные процессы создают узкие места",
        "Отсутствие данных о реальной эффективности"
      ]
    },
    {
      title: "Упущенные возможности",
      items: [
        "Неиспользованный потенциал автоматизации",
        "Отсутствие интеграции между системами",
        "Неоптимизированные рабочие потоки",
        "Потери от человеческих ошибок"
      ]
    }
  ];

  const auditPhases = [
    {
      phase: "Этап 1: Анализ текущих процессов (1-2 дня)",
      items: [
        "Интервью с ключевыми сотрудниками",
        "Картирование существующих процессов",
        "Анализ систем и инструментов",
        "Выявление узких мест и проблем"
      ],
      result: "Полная карта текущих процессов"
    },
    {
      phase: "Этап 2: ИИ-анализ и оценка (1 день)",
      items: [
        "Применение ИИ для анализа данных",
        "Оценка потенциала автоматизации",
        "Расчет ROI для каждого процесса",
        "Приоритизация возможностей"
      ],
      result: "Детальный план автоматизации"
    },
    {
      phase: "Этап 3: Рекомендации и дорожная карта (1 день)",
      items: [
        "Презентация результатов анализа",
        "Конкретные рекомендации по внедрению",
        "Дорожная карта автоматизации",
        "Финансовое обоснование проектов"
      ],
      result: "Готовый план трансформации"
    }
  ];

  const auditAreas = [
    {
      title: "Операционные процессы",
      icon: Users,
      items: [
        "Обработка заказов и заявок",
        "Управление запасами",
        "Логистика и доставка",
        "Контроль качества"
      ]
    },
    {
      title: "Административные процессы",
      icon: FileText,
      items: [
        "Документооборот",
        "Отчетность и аналитика",
        "HR-процессы",
        "Финансовые операции"
      ]
    },
    {
      title: "Клиентские процессы",
      icon: Users,
      items: [
        "Обработка обращений",
        "Продажи и маркетинг",
        "Послепродажное обслуживание",
        "Управление отношениями"
      ]
    }
  ];

  const industries = [
    "Производство",
    "Финансы и банки",
    "Ритейл и e-commerce",
    "Логистика",
    "Здравоохранение",
    "Образование"
  ];

  const packages = [
    {
      name: "Экспресс-аудит",
      price: "150 тыс ₽",
      duration: "3 дня",
      features: [
        "Анализ 5-10 ключевых процессов",
        "Базовая оценка потенциала ИИ",
        "Краткий отчет с рекомендациями",
        "1 час консультации"
      ],
      popular: false
    },
    {
      name: "Полный аудит",
      price: "350 тыс ₽",
      duration: "1-2 недели",
      features: [
        "Анализ всех бизнес-процессов",
        "Детальная оценка ROI",
        "Подробная дорожная карта",
        "3 часа консультаций",
        "Приоритизация проектов"
      ],
      popular: true
    },
    {
      name: "Стратегический аудит",
      price: "650 тыс ₽",
      duration: "3-4 недели",
      features: [
        "Комплексный анализ компании",
        "Стратегия цифровой трансформации",
        "План внедрения на 12 месяцев",
        "Еженедельные консультации",
        "Поддержка внедрения"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      title: "Производственная компания: +40% эффективности",
      description: "Выявили 15 процессов для автоматизации, что позволило увеличить производительность на 40%"
    },
    {
      title: "Логистическая компания: -60% времени обработки",
      description: "Оптимизировали процессы обработки заказов, сократив время с 4 часов до 1.5 часов"
    },
    {
      title: "Финансовая организация: -80% ошибок",
      description: "Автоматизировали проверку документов, снизив количество ошибок с 20% до 4%"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-[#111111]">
        
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-gray-600 text-gray-300">
                ИИ-аудит процессов
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Найдите скрытые возможности<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  автоматизации за 72 часа
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Комплексный анализ ваших бизнес-процессов с применением ИИ для выявления 
                возможностей автоматизации и роста эффективности
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-gray-700 bg-[#1a1a1a] shadow-sm">
                    <CardContent className="p-4">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={openConsultationPopup}
                >
                  Заказать ИИ-аудит
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Примеры аудитов
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ваши процессы работают против вас?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Большинство компаний теряют до 40% эффективности из-за неоптимизированных процессов
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="border-red-500/30 bg-[#1a1a1a]">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-400">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {problem.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-[#0f0f0f]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Как проходит ИИ-аудит процессов
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Структурированный подход к анализу и выявлению возможностей автоматизации
              </p>
            </div>

            <div className="space-y-8">
              {auditPhases.map((phase, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-400">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
                        <strong className="text-blue-400">Результат: </strong>
                        <span className="italic text-gray-300">{phase.result}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Areas Section */}
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Что мы анализируем
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {auditAreas.map((area, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <area.icon className="h-5 w-5 text-blue-400" />
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-[#0f0f0f]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Отрасли нашей экспертизы
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center p-6 border-gray-700 bg-[#1a1a1a] shadow-sm hover:shadow-md transition-shadow hover:bg-[#222222]">
                  <Shield className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold text-white">{industry}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Пакеты ИИ-аудита
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Выберите подходящий уровень анализа для вашей компании
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative border-gray-700 bg-[#1a1a1a] shadow-sm ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      ПОПУЛЯРНЫЙ
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-blue-400">{pkg.price}</CardDescription>
                    <div className="text-sm text-gray-400">{pkg.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-600 text-gray-300 hover:bg-gray-800'}`}
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={openConsultationPopup}
                    >
                      Заказать аудит
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 bg-[#0f0f0f]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Результаты наших аудитов
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Узнайте потенциал автоматизации вашей компании
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Получите персональное предложение по ИИ-аудиту ваших процессов
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={openConsultationPopup}
            >
              Заказать консультацию
            </Button>
          </div>
        </section>
      </div>

      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="ИИ-аудит процессов"
        description="Обсудите с экспертом возможности автоматизации в вашей компании"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default AIAuditProcesses;