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
        title: "Полный процессный аудит",
        description: "Детальное картирование всех бизнес-процессов с выявлением скрытых неэффективностей и узких мест.",
        metric: "100% видимость процессов"
      },
      {
        title: "3-5 быстрых побед",
        description: "Конкретные возможности для немедленного внедрения ИИ с минимальными затратами и максимальным эффектом.",
        metric: "Готовы к внедрению завтра"
      },
      {
        title: "ROI расчеты",
        description: "Точные финансовые модели окупаемости каждого предлагаемого ИИ-решения с реалистичными сроками.",
        metric: "Гарантированная окупаемость"
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
        title: "Roadmap внедрения",
        description: "Пошаговый план автоматизации на 6-12 месяцев с приоритизацией проектов по критичности и ROI.",
        metric: "План на год вперед"
      },
      {
        title: "Pilot проекты запущены",
        description: "Первые ИИ-решения уже работают и приносят измеримые результаты, доказывая эффективность подхода.",
        metric: "30% рост эффективности"
      },
      {
        title: "Process Mining результаты",
        description: "Данные о реальном выполнении процессов выявляют отклонения от стандартов и возможности оптимизации.",
        metric: "Скрытые узкие места найдены"
      },
      {
        title: "Команда обучена",
        description: "Ключевые сотрудники понимают принципы работы с ИИ и готовы к дальнейшему внедрению решений.",
        metric: "95% готовность к изменениям"
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
        title: "Автономная оптимизация",
        description: "ИИ-системы самостоятельно выявляют неэффективности и предлагают улучшения без вмешательства человека.",
        metric: "20% ежемесячные улучшения"
      },
      {
        title: "Predictive процессы",
        description: "Прогнозирование узких мест до их возникновения позволяет предотвращать проблемы проактивно.",
        metric: "85% точность прогнозов"
      },
      {
        title: "Цифровой двойник",
        description: "Полная цифровая модель бизнес-процессов позволяет симулировать изменения до их внедрения.",
        metric: "100% безрисковое тестирование"
      },
      {
        title: "Конкурентное преимущество",
        description: "Ваши процессы работают быстрее, дешевле и качественнее конкурентов благодаря ИИ-оптимизации.",
        metric: "Лидерство в эффективности"
      }
    ]
  }
];

export const ProcessAuditBenefits = (): JSX.Element => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-[1260px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 text-[#4f5bff] border-[#4f5bff]/20 bg-[#4f5bff]/5 px-4 py-2 text-sm font-medium"
          >
            Результаты аудита бизнес-процессов
          </Badge>
          
          <h2 className="text-[46.3px] font-bold text-[#111111] mb-6 leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            Что вы получите от<br />
            <span className="text-[#4f5bff]">ИИ-аудита процессов</span>
          </h2>
          
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            Пошаговые результаты профессионального аудита от выявления неэффективностей до создания самооптимизирующихся процессов
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
              Готовы получить полную видимость ваших процессов?
            </h3>
            <p className="text-[#666666] mb-6">
              Присоединяйтесь к 200+ компаниям, которые уже нашли скрытые возможности экономии 2.5+ млн ₽/год
            </p>
            <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Получить бесплатный аудит
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAuditBenefits;