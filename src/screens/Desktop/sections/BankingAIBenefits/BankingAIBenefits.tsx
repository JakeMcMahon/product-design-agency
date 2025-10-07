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
        title: "ИИ-готовность аудит банка",
        description: "Комплексная оценка текущих систем, данных и процессов банка на готовность к внедрению ИИ с учетом требований ЦБ РФ.",
        metric: "100% соответствие ЦБ РФ"
      },
      {
        title: "Roadmap внедрения ИИ",
        description: "Детальный план поэтапного внедрения ИИ-решений с учетом банковских рисков, бюджета и регуляторных требований.",
        metric: "План на 12 месяцев"
      },
      {
        title: "Compliance framework ИИ",
        description: "Готовая методология соблюдения этического кодекса ИИ ЦБ РФ и управления рисками ИИ-систем.",
        metric: "5 принципов ЦБ РФ покрыты"
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
        title: "ИИ-скоринг и андеррайтинг",
        description: "Автоматизированная система оценки кредитных рисков с точностью 95%+ и мгновенным принятием решений по займам.",
        metric: "95% точность скоринга"
      },
      {
        title: "Фрод-мониторинг с ИИ",
        description: "Система выявления мошеннических операций в реальном времени с анализом транзакционного поведения клиентов.",
        metric: "99.2% выявление фрода"
      },
      {
        title: "Автоматизация AML/KYC",
        description: "ИИ-система соблюдения требований 115-ФЗ с автоматической проверкой клиентов и подозрительных операций.",
        metric: "80% сокращение время проверки"
      },
      {
        title: "Персонализация продуктов",
        description: "Рекомендательная ИИ-система для предложения банковских продуктов с учетом потребностей и поведения клиентов.",
        metric: "35% рост cross-sell"
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
        title: "Предиктивная банковская аналитика",
        description: "ИИ-система прогнозирования рыночных трендов, оттока клиентов и оптимизации портфеля для стратегических решений.",
        metric: "₽2 трлн потенциальный эффект"
      },
      {
        title: "Робо-эдвайзинг и инвестиции",
        description: "Автоматизированные инвестиционные советы с ИИ-управлением портфелями и персонализированными стратегиями.",
        metric: "24/7 управление портфелями"
      },
      {
        title: "Операционная эффективность",
        description: "Полная автоматизация 70% банковских операций с ИИ-оптимизацией процессов и сокращением операционных расходов.",
        metric: "₽450 млрд как у Сбера"
      },
      {
        title: "Конкурентное преимущество",
        description: "Ваш банк работает как технологический лидер с передовыми ИИ-решениями, привлекая клиентов и инвестиции.",
        metric: "Топ-3 банк по инновациям"
      }
    ]
  }
];

export const BankingAIBenefits = (): JSX.Element => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-[1260px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 text-[#4f5bff] border-[#4f5bff]/20 bg-[#4f5bff]/5 px-4 py-2 text-sm font-medium"
          >
            Результаты внедрения ИИ в банке
          </Badge>
          
          <h2 className="text-[46.3px] font-bold text-[#111111] mb-6 leading-tight [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            Что вы получите от внедрения<br />
            <span className="text-[#4f5bff]">ИИ в финансовой организации</span>
          </h2>
          
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            Пошаговые результаты внедрения ИИ в банковские процессы: от соблюдения требований ЦБ РФ до получения ₽450+ млрд эффекта как у Сбербанка
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
              Готовы получить ₽2+ трлн эффекта от ИИ в банке?
            </h3>
            <p className="text-[#666666] mb-6">
              Присоединяйтесь к лидерам как Сбербанк, которые уже получают ₽450+ млрд ежегодного эффекта от ИИ
            </p>
            <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Запустить ИИ в банке
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingAIBenefits;