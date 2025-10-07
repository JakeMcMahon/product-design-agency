import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, FileText, Zap, Clock, Shield, Users, Database, Upload } from "lucide-react";
import ConsultationPopupRU from "../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../hooks/useSprintContactForm";

const DocumentAutomation = () => {
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
    { label: "Скорость обработки", value: "1000+ док/час", icon: Zap },
    { label: "Точность извлечения", value: "99.5%", icon: CheckCircle },
    { label: "Экономия времени", value: "до 85%", icon: Clock },
    { label: "Типов документов", value: "50+", icon: FileText }
  ];

  const problems = [
    {
      title: "Документооборот замедляет бизнес",
      items: [
        "Ручная обработка документов занимает 60% рабочего времени",
        "Ошибки при вводе данных достигают 15-20%",
        "Поиск нужного документа может занять часы",
        "Согласование документов растягивается на недели"
      ]
    },
    {
      title: "Скрытые потери от неэффективности",
      items: [
        "Простои из-за потерянных документов",
        "Штрафы за несвоевременную подачу отчетов",
        "Переработки сотрудников из-за ручной работы",
        "Невозможность масштабирования процессов"
      ]
    }
  ];

  const automationSteps = [
    {
      phase: "Этап 1: Анализ и планирование (1 неделя)",
      items: [
        "Аудит текущих документооборотов",
        "Классификация типов документов",
        "Анализ интеграций с системами",
        "Разработка архитектуры решения"
      ],
      result: "Техническое задание и план внедрения"
    },
    {
      phase: "Этап 2: Настройка ИИ-системы (2 недели)",
      items: [
        "Обучение моделей распознавания",
        "Настройка извлечения данных",
        "Интеграция с учетными системами",
        "Создание workflow автоматизации"
      ],
      result: "Работающая система автоматизации"
    },
    {
      phase: "Этап 3: Тестирование и запуск (1 неделя)",
      items: [
        "Тестирование на реальных документах",
        "Обучение сотрудников",
        "Настройка мониторинга качества",
        "Запуск в промышленную эксплуатацию"
      ],
      result: "Полностью автоматизированный документооборот"
    }
  ];

  const documentTypes = [
    {
      category: "Финансовые документы",
      icon: Database,
      types: [
        "Счета и накладные",
        "Договора и соглашения",
        "Банковские выписки",
        "Отчеты и справки"
      ]
    },
    {
      category: "HR документы",
      icon: Users,
      types: [
        "Резюме и анкеты",
        "Трудовые договора",
        "Заявления сотрудников",
        "Табели и отчеты"
      ]
    },
    {
      category: "Операционные документы",
      icon: FileText,
      types: [
        "Заявки и заказы",
        "Акты выполненных работ",
        "Протоколы и отчеты",
        "Техническая документация"
      ]
    }
  ];

  const features = [
    "Автоматическое распознавание текста (OCR)",
    "Интеллектуальное извлечение данных",
    "Классификация документов по типам",
    "Автоматическая маршрутизация",
    "Интеграция с CRM/ERP системами",
    "Контроль версий и аудит изменений",
    "Электронная подпись документов",
    "Уведомления и напоминания"
  ];

  const industries = [
    "Банки и финансы",
    "Страхование",
    "Государственные учреждения",
    "Производство",
    "Логистика",
    "Здравоохранение"
  ];

  const packages = [
    {
      name: "Базовая автоматизация",
      price: "400 тыс ₽",
      duration: "4 недели",
      features: [
        "До 5 типов документов",
        "Базовое OCR и извлечение данных",
        "Интеграция с 1-2 системами",
        "Обучение персонала",
        "Поддержка 1 месяц"
      ],
      popular: false
    },
    {
      name: "Профессиональная система",
      price: "850 тыс ₽",
      duration: "6-8 недель",
      features: [
        "До 15 типов документов",
        "Продвинутый ИИ-анализ",
        "Интеграция с 5+ системами",
        "Workflow автоматизация",
        "Аналитика и отчеты",
        "Поддержка 3 месяца"
      ],
      popular: true
    },
    {
      name: "Корпоративное решение",
      price: "от 1.5 млн ₽",
      duration: "3-4 месяца",
      features: [
        "Неограниченные типы документов",
        "Кастомные ИИ-модели",
        "Полная интеграция экосистемы",
        "Продвинутая аналитика",
        "Мобильные приложения",
        "Поддержка 12 месяцев"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      title: "Банк: автоматизация кредитного документооборота",
      description: "Сократили время обработки кредитных заявок с 5 дней до 2 часов, увеличив пропускную способность в 20 раз"
    },
    {
      title: "Логистическая компания: цифровизация документов",
      description: "Автоматизировали обработку накладных и актов, уменьшив количество ошибок на 90%"
    },
    {
      title: "Производственный холдинг: единый документооборот",
      description: "Объединили документооборот 12 предприятий в единую систему, сократив административные расходы на 40%"
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
                Автоматизация документооборота
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Освободите команду<br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  от рутинной работы с документами
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ИИ-система автоматизации документооборота, которая обрабатывает, 
                анализирует и маршрутизирует документы без участия человека
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-gray-700 bg-[#1a1a1a] shadow-sm">
                    <CardContent className="p-4">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-green-400" />
                      <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={openConsultationPopup}
                >
                  Автоматизировать документооборот
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Посмотреть демо
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
                Документооборот тормозит ваш бизнес?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ручная обработка документов — это главный тормоз роста современных компаний
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
                Этапы автоматизации документооборота
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                От анализа текущих процессов до полностью автоматизированной системы
              </p>
            </div>

            <div className="space-y-8">
              {automationSteps.map((step, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{step.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-600/10 p-4 rounded-lg border border-green-500/20">
                        <strong className="text-green-400">Результат: </strong>
                        <span className="italic text-gray-300">{step.result}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Какие документы мы автоматизируем
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {documentTypes.map((category, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <category.icon className="h-5 w-5 text-green-400" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.types.map((type, typeIndex) => (
                        <li key={typeIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-[#0f0f0f]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Возможности системы
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-sm text-center bg-gray-700 text-gray-300 hover:bg-gray-600">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Отрасли применения
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center p-6 border-gray-700 bg-[#1a1a1a] shadow-sm hover:shadow-md transition-shadow hover:bg-[#222222]">
                  <Shield className="h-8 w-8 mx-auto mb-4 text-green-400" />
                  <h3 className="font-semibold text-white">{industry}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-[#0f0f0f]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Пакеты автоматизации документооборота
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                От базовой автоматизации до корпоративных решений
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative border-gray-700 bg-[#1a1a1a] shadow-sm ${pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                      РЕКОМЕНДУЕМ
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-green-400">{pkg.price}</CardDescription>
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
                      className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-gray-600 text-gray-300 hover:bg-gray-800'}`}
                      variant={pkg.popular ? "default" : "outline"}
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
        <section className="py-20 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Успешные кейсы автоматизации
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-gray-700 bg-[#1a1a1a] shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">{study.title}</CardTitle>
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
              Готовы автоматизировать документооборот?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Получите персональное предложение по автоматизации для вашей компании
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={openConsultationPopup}
            >
              Обсудить проект
            </Button>
          </div>
        </section>
      </div>

      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Автоматизация документооборота"
        description="Обсудите с экспертом возможности автоматизации документооборота в вашей компании"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default DocumentAutomation;