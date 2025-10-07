import React from 'react';

const HealthcareAutomationBenefits = () => {
  const benefitTimeline = [
    {
      phase: "Немедленные преимущества",
      timeline: "Неделя 1",
      number: "01",
      color: "bg-[#4f5bff]",
      benefits: [
        {
          title: "Healthcare Process Audit",
          description: "Полный анализ текущих медицинских процессов с выявлением узких мест в документообороте, записи пациентов и МИС интеграции.",
          metric: "100% ясность медпроцессов"
        },
        {
          title: "МИС Integration Assessment",
          description: "Оценка совместимости существующих медицинских информационных систем и планирование интеграций с федеральными сервисами.",
          metric: "94% клиник уже используют МИС"
        },
        {
          title: "Regulatory Compliance Check",
          description: "Проверка соответствия медицинского учреждения требованиям Минздрава и ЕГИСЗ для цифровой трансформации.",
          metric: "Полное соблюдение 54-ФЗ"
        }
      ]
    },
    {
      phase: "Операционная эффективность",
      timeline: "Месяц 1-2",
      number: "02",
      color: "bg-[#7c3aed]",
      benefits: [
        {
          title: "Patient Flow Automation",
          description: "Автоматизация записи пациентов, электронные медкарты и интеграция с региональными ЕГИСЗ системами для оптимального потока пациентов.",
          metric: "50% сокращение времени записи"
        },
        {
          title: "Electronic Medical Records",
          description: "Внедрение юридически значимого электронного документооборота с автоматическим заполнением медицинской документации.",
          metric: "80% экономия времени врачей"
        },
        {
          title: "Laboratory Integration",
          description: "Полная автоматизация цикла работы с лабораториями через ЛИС интеграцию и автоматическую обработку результатов анализов.",
          metric: "70% ускорение получения результатов"
        }
      ]
    },
    {
      phase: "Стратегический рост",
      timeline: "Месяц 3-6",
      number: "03",
      color: "bg-[#06b6d4]",
      benefits: [
        {
          title: "Telemedicine Platform",
          description: "Запуск телемедицинских консультаций с интеграцией в существующую МИС и соответствием требованиям Минздрава РФ.",
          metric: "40% увеличение охвата пациентов"
        },
        {
          title: "Predictive Analytics",
          description: "Анализ медицинских данных с использованием ИИ для прогнозирования заболеваемости и оптимизации ресурсов больницы.",
          metric: "35% улучшение планирования ресурсов"
        },
        {
          title: "Revenue Optimization",
          description: "Автоматизация биллинга, интеграция с ОМС/ДМС системами и аналитика для максимизации доходов медучреждения.",
          metric: "25% рост выручки от оптимизации"
        }
      ]
    }
  ];

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Как МИС автоматизация трансформирует ваше медучреждение
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            94% российских клиник уже используют МИС. Следующий шаг — интеллектуальная автоматизация с ИИ для максимальной эффективности и соответствия требованиям Минздрава
          </p>
        </div>

        {/* Benefits Timeline */}
        <div className="space-y-8 lg:space-y-16">
          {benefitTimeline.map((phase, index) => (
            <div key={index} className="relative">
              {/* Phase Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className={`${phase.color} text-white px-4 py-2 rounded-lg font-bold text-lg lg:text-xl`}>
                  {phase.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 font-semibold">
                    {phase.timeline}
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {phase.benefits.map((benefit, benefitIndex) => (
                  <div 
                    key={benefitIndex} 
                    className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className={`${phase.color} text-white px-3 py-1 rounded-full text-sm font-semibold inline-block`}>
                      {benefit.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline connector line (except for last item) */}
              {index < benefitTimeline.length - 1 && (
                <div className="hidden lg:block absolute left-[42px] top-[120px] w-0.5 h-16 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareAutomationBenefits;
export { HealthcareAutomationBenefits };