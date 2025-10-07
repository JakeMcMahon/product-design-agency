import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";

const benefitTimeline = [
  {
    phase: "Немедленные преимущества",
    timeline: "Неделя 1",
    number: "01",
    color: "bg-[#4f5bff]",
    benefits: [
      {
        title: "Анализ документооборота",
        description: "Полная карта ваших документальных процессов с выявлением узких мест и возможностей автоматизации.",
        metric: "100% ясность процессов"
      },
      {
        title: "Стратегия внедрения СЭД",
        description: "Подробный план поэтапного внедрения системы электронного документооборота с конкретными сроками.",
        metric: "Пошаговый план на 3 месяца"
      },
      {
        title: "Бюджет и ROI",
        description: "Точный расчет затрат на внедрение и ожидаемой экономии от автоматизации документооборота.",
        metric: "Гарантированная экономия 50-70%"
      }
    ]
  },
  {
    phase: "Краткосрочные преимущества",
    timeline: "Месяц 1-3",
    number: "02",
    color: "bg-[#0da34e]",
    benefits: [
      {
        title: "Работающая СЭД система",
        description: "Полностью настроенная система электронного документооборота с интеграцией ИИ для автоматической обработки.",
        metric: "В продакшене и работает"
      },
      {
        title: "Автоматизация согласований",
        description: "Процессы согласования документов ускорены в 3-5 раз благодаря автоматическим маршрутам и ИИ-анализу.",
        metric: "50-70% ускорение согласований"
      },
      {
        title: "Цифровой архив",
        description: "Все документы структурированы, доступны для поиска и защищены от потери с помощью ИИ-классификации.",
        metric: "100% сохранность документов"
      },
      {
        title: "Сокращение ошибок",
        description: "Ручные ошибки в документообороте сведены к минимуму благодаря автоматической проверке и валидации.",
        metric: "87% снижение ошибок"
      }
    ]
  },
  {
    phase: "Долгосрочные преимущества",
    timeline: "Месяц 3-12",
    number: "03",
    color: "bg-[#ff5b4f]",
    benefits: [
      {
        title: "Масштабируемая система",
        description: "СЭД система готова к росту компании и может обрабатывать увеличивающиеся объемы документов.",
        metric: "До 500% рост без доп. персонала"
      },
      {
        title: "Аналитика и отчетность",
        description: "Полная видимость процессов документооборота с ИИ-аналитикой для принятия стратегических решений.",
        metric: "Реальная экономия времени 40-60%"
      },
      {
        title: "Соответствие требованиям",
        description: "Автоматическое соблюдение законодательных требований к документообороту и архивированию.",
        metric: "100% соответствие нормам"
      },
      {
        title: "Конкурентное преимущество",
        description: "Ваша компания работает быстрее и эффективнее конкурентов благодаря полностью автоматизированному документообороту.",
        metric: "Лидерство на рынке"
      }
    ]
  }
];

export const DocumentAutomationBenefits = (): JSX.Element => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-[1260px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 text-[#4f5bff] border-[#4f5bff]/20 bg-[#4f5bff]/5 px-4 py-2 text-sm font-medium"
          >
            Результаты автоматизации документооборота
          </Badge>
          
          <h2 className="text-[46.3px] font-bold text-[#111111] mb-6 leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            Что вы получите от внедрения<br />
            <span className="text-[#4f5bff]">СЭД системы с ИИ</span>
          </h2>
          
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            Пошаговые результаты внедрения системы электронного документооборота от первой недели до полной трансформации бизнес-процессов
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {benefitTimeline.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-16 h-16 ${phase.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-1">
                    {phase.phase}
                  </h3>
                  <p className="text-[#666666] font-medium">
                    {phase.timeline}
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6 ml-22">
                {phase.benefits.map((benefit, benefitIndex) => (
                  <Card key={benefitIndex} className="border border-[#e5e7eb] hover:border-[#4f5bff]/20 transition-colors">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-[#111111] mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-[#666666] mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="text-sm font-semibold text-[#4f5bff]">
                        {benefit.metric}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Connection Line */}
              {phaseIndex < benefitTimeline.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-[#e5e7eb]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#f8f9ff] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              Готовы трансформировать ваш документооборот?
            </h3>
            <p className="text-[#666666] mb-6">
              Присоединяйтесь к 72% московских компаний, которые уже ускорили согласование документов на 50-70%
            </p>
            <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Получить консультацию по СЭД
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentAutomationBenefits;