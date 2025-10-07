import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, X, Star, ArrowLeft } from "lucide-react";
import ConsultationPopupRU from "../components/ConsultationPopupRU";
import { useSprintContactForm } from "../hooks/useSprintContactForm";

const pricingData = [
  {
    id: "startup",
    name: "Стартовая автоматизация",
    description: "Быстрый старт с ИИ",
    price: "500 тыс ₽",
    originalPrice: null,
    timeline: "2-4 недели",
    popular: false,
    features: {
      "Базовые возможности": {
        "ИИ-процессы": "2-3 процесса",
        "Анализ процессов": true,
        "Интеграция с системами": true,
        "Обучение команды": true,
        "Аналитика": "Базовая",
        "Поддержка после запуска": "2 недели",
        "Исходный код": true,
        "API документация": false,
        "CI/CD настройка": false
      },
      "Продвинутые функции": {
        "Кастомные метрики": false,
        "Сегментация пользователей": false,
        "A/B тестирование": false,
        "ML функции": false,
        "Мультитенантность": false,
        "Автотестирование": false
      },
      "Поддержка и гарантии": {
        "24/7 поддержка": false,
        "SLA гарантии": false,
        "Выделенный менеджер": false,
        "Регулярные обновления": false
      }
    }
  },
  {
    id: "growth",
    name: "Комплексная автоматизация",
    description: "Готовность к масштабированию",
    price: "1.5 млн ₽",
    originalPrice: "2 млн ₽",
    timeline: "6-12 недель",
    popular: true,
    features: {
      "Базовые возможности": {
        "ИИ-процессы": "5-7 процессов",
        "Анализ процессов": true,
        "Интеграция с системами": true,
        "Обучение команды": true,
        "Аналитика": "Продвинутая",
        "Поддержка после запуска": "30 дней",
        "Исходный код": true,
        "API документация": true,
        "CI/CD настройка": true
      },
      "Продвинутые функции": {
        "Кастомные метрики": "50+ событий",
        "Сегментация пользователей": true,
        "A/B тестирование": true,
        "ML функции": "Базовые",
        "Мультитенантность": false,
        "Автотестирование": true
      },
      "Поддержка и гарантии": {
        "24/7 поддержка": true,
        "SLA гарантии": "99.9%",
        "Выделенный менеджер": true,
        "Регулярные обновления": true
      }
    }
  },
  {
    id: "scale",
    name: "Масштабируемое ИИ",
    description: "Корпоративный уровень",
    price: "2.5 млн ₽",
    originalPrice: null,
    timeline: "3-6 месяцев",
    popular: false,
    features: {
      "Базовые возможности": {
        "ИИ-процессы": "10+ процессов",
        "Анализ процессов": true,
        "Интеграция с системами": true,
        "Обучение команды": true,
        "Аналитика": "Продвинутая",
        "Поддержка после запуска": "90 дней",
        "Исходный код": true,
        "API документация": true,
        "CI/CD настройка": true
      },
      "Продвинутые функции": {
        "Кастомные метрики": "Неограниченно",
        "Сегментация пользователей": true,
        "A/B тестирование": "Продвинутое",
        "ML функции": "Полные",
        "Мультитенантность": true,
        "Автотестирование": true
      },
      "Поддержка и гарантии": {
        "24/7 поддержка": true,
        "SLA гарантии": "99.99%",
        "Выделенный менеджер": true,
        "Регулярные обновления": true
      }
    }
  },
  {
    id: "enterprise",
    name: "Корпоративная платформа",
    description: "Мультиплатформенные продукты",
    price: "от 5 млн ₽",
    originalPrice: null,
    timeline: "6+ месяцев",
    popular: false,
    features: {
      "Базовые возможности": {
        "ИИ-процессы": "Неограниченно",
        "Анализ процессов": true,
        "Интеграция с системами": true,
        "Обучение команды": true,
        "Аналитика": "Корпоративная",
        "Поддержка после запуска": "6 месяцев",
        "Исходный код": true,
        "API документация": true,
        "CI/CD настройка": true
      },
      "Продвинутые функции": {
        "Кастомные метрики": "Неограниченно",
        "Сегментация пользователей": true,
        "A/B тестирование": "Корпоративное",
        "ML функции": "Полные + кастом",
        "Мультитенантность": true,
        "Автотестирование": true
      },
      "Поддержка и гарантии": {
        "24/7 поддержка": true,
        "SLA гарантии": "99.99%",
        "Выделенный менеджер": "Команда",
        "Регулярные обновления": true
      }
    }
  }
];

const featureCategories = Object.keys(pricingData[0].features);

export const PricingComparisonPage = (): JSX.Element => {
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

  const goBack = () => {
    window.history.back();
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" />
      );
    }
    return <span className="text-sm text-center">{value}</span>;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={goBack}
              className="mb-4 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Сравнение пакетов ИИ-автоматизации
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите пакет, который лучше всего подходит для ваших потребностей в автоматизации
              </p>
            </div>
          </div>

          {/* Pricing Cards Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingData.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    {plan.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">{plan.originalPrice}</div>
                    )}
                    <div className="text-sm text-gray-500 mt-1">{plan.timeline}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    onClick={openConsultationPopup}
                  >
                    Начать работу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Comparison Table */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Детальное сравнение функций</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-gray-900 bg-gray-50 min-w-[250px]">
                        Возможности
                      </th>
                      {pricingData.map((plan) => (
                        <th key={plan.id} className="text-center p-4 min-w-[180px] bg-gray-50">
                          <div className="font-semibold text-gray-900">{plan.name}</div>
                          <div className="text-sm text-gray-600 mt-1">{plan.price}</div>
                          {plan.popular && (
                            <Badge className="bg-blue-500 text-white mt-2">Популярный</Badge>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureCategories.map((category) => (
                      <React.Fragment key={category}>
                        <tr className="bg-gray-100">
                          <td colSpan={pricingData.length + 1} className="p-4 font-semibold text-gray-800">
                            {category}
                          </td>
                        </tr>
                        {Object.entries(pricingData[0].features[category]).map(([featureName]) => (
                          <tr key={featureName} className="border-b hover:bg-gray-50">
                            <td className="p-4 text-gray-700 font-medium">{featureName}</td>
                            {pricingData.map((plan) => (
                              <td key={plan.id} className="p-4 text-center">
                                {renderFeatureValue(plan.features[category][featureName])}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Не знаете, какой пакет выбрать?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Получите бесплатную консультацию от наших экспертов по ИИ-автоматизации. 
              Мы поможем определить оптимальное решение для ваших задач.
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={openConsultationPopup}
            >
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </div>

      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Консультация по выбору пакета"
        description="Наши эксперты помогут выбрать оптимальный пакет автоматизации для ваших задач"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default PricingComparisonPage;