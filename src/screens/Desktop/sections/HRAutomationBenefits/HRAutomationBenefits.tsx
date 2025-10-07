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
        title: "HR Process Audit",
        description: "Полный анализ текущих HR-процессов с выявлением узких мест в найме, адаптации и удержании сотрудников.",
        metric: "100% ясность HR-процессов"
      },
      {
        title: "ATS Strategy & Setup",
        description: "Стратегия внедрения системы управления кандидатами с автоматическим скринингом и ИИ-оценкой резюме.",
        metric: "План автоматизации найма"
      },
      {
        title: "ROI Calculator",
        description: "Точный расчет экономии на HR-операторах, ускорении найма и снижении текучести персонала.",
        metric: "₽300k+ экономия/месяц"
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
        title: "Работающая ATS система",
        description: "Полностью настроенная система управления кандидатами с ИИ-скринингом резюме и автоматическими воронками найма.",
        metric: "2x ускорение найма"
      },
      {
        title: "Автоматизация скрининга",
        description: "ИИ автоматически оценивает кандидатов по критериям, освобождая HR от рутинного просмотра резюме.",
        metric: "80% сокращение времени скрининга"
      },
      {
        title: "Адаптация с ИИ",
        description: "Автоматизированный онбординг новых сотрудников с персонализированными планами адаптации и трекингом прогресса.",
        metric: "40% снижение текучести"
      },
      {
        title: "HR Analytics Dashboard",
        description: "Панель с метриками найма, текучести, вовлеченности и прогнозами для принятия данных решений.",
        metric: "Полная видимость HR-метрик"
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
        title: "Масштабируемый найм",
        description: "HR-платформа готова к росту команды в 5-10 раз без увеличения HR-персонала благодаря ИИ-автоматизации.",
        metric: "10x рост без доп. HR"
      },
      {
        title: "Predictive HR Analytics",
        description: "ИИ предсказывает риски увольнения, успешность кандидатов и потребности в обучении для проактивного управления.",
        metric: "85% точность прогнозов"
      },
      {
        title: "Employee Experience Platform",
        description: "Комплексная платформа с ИИ-чатботом для сотрудников, автоматизацией опросов и персонализированным развитием.",
        metric: "4.8/5 satisfaction score"
      },
      {
        title: "Конкурентное преимущество",
        description: "Ваша компания привлекает лучшие таланты быстрее конкурентов благодаря современному HR-процессу с ИИ.",
        metric: "Топ-3 работодатель в отрасли"
      }
    ]
  }
];

export const HRAutomationBenefits = (): JSX.Element => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-[1260px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 text-[#4f5bff] border-[#4f5bff]/20 bg-[#4f5bff]/5 px-4 py-2 text-sm font-medium"
          >
            Результаты автоматизации HR процессов
          </Badge>
          
          <h2 className="text-[46.3px] font-bold text-[#111111] mb-6 leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            Что вы получите от внедрения<br />
            <span className="text-[#4f5bff]">ИИ в HR процессы</span>
          </h2>
          
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            Пошаговые результаты автоматизации найма, адаптации и управления персоналом от первой недели до трансформации HR-отдела
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
              Готовы трансформировать ваши HR процессы?
            </h3>
            <p className="text-[#666666] mb-6">
              Присоединяйтесь к 550+ компаниям, которые уже ускорили найм в 2 раза и снизили текучесть на 40%
            </p>
            <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Получить HR решение
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRAutomationBenefits;