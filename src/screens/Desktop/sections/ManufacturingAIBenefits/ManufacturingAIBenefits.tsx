import React from "react";

export const ManufacturingAIBenefits: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-5 py-20 bg-white">
      <div className="flex flex-col items-center max-w-[1260px] w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-[46.3px] font-medium leading-[55.56px] text-[#111111] max-w-[900px] mb-6">
            Как российские производители получают ₽1+ млрд прибыли с ИИ
          </h2>
          <p className="text-[19.4px] leading-[29.1px] text-[#666666] max-w-[800px]">
            ₽0.5 трлн дополнительной выручки получили российские производители в 2024 году. 
            Северсталь — ₽1+ млрд эффекта. Рынок растет на 15% ежегодно.
          </p>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 w-full">
          
          {/* Card 1: Predictive Maintenance */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚙️</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Предиктивная аналитика оборудования
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              Россатом внедрил ИИ-мониторинг на 400+ предприятиях. 
              Прогнозирование поломок за 2-4 недели до отказа.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Снижение простоев на 35-50%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Экономия на ремонтах до 40%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">ROI 300-500% за первый год</span>
              </div>
            </div>
          </div>

          {/* Card 2: Quality Control */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔍</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Компьютерное зрение для контроля качества
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              3B-Fiberglass и другие производители используют ИИ-зрение 
              для автоматического выявления брака в реальном времени.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Точность обнаружения дефектов 99.5%+</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Снижение брака на 60-80%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">24/7 контроль без человеческого фактора</span>
              </div>
            </div>
          </div>

          {/* Card 3: Production Planning */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Планирование и оптимизация производства
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              Система Adeptik APS и аналоги помогают оптимизировать 
              производственные циклы с учетом всех ограничений.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Сокращение времени планирования на 70%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Увеличение загрузки оборудования на 25%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Снижение остатков на складе на 30%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Safety Monitoring */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Безопасность и соблюдение ТБ
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              VizorLabs и Segezha Group используют ИИ-мониторинг 
              для контроля соблюдения техники безопасности.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Автоматическое выявление нарушений ТБ</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Снижение травматизма на 40-60%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Контроль доступа и состояния персонала</span>
              </div>
            </div>
          </div>

          {/* Card 5: Warehouse Automation */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🏭</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Автоматизация складов и логистики
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              Toyota AI Team Logistics и ММК-МЕТИЗ с беспилотными Уралами 
              показывают будущее промышленной логистики.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Оптимизация маршрутов в реальном времени</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Увеличение пропускной способности на 40%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Снижение логистических затрат на 25%</span>
              </div>
            </div>
          </div>

          {/* Card 6: Generative Design */}
          <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#4f5bff] rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-[23.3px] font-medium leading-[27.96px] text-[#111111] mb-4">
              Генеративное проектирование
            </h3>
            <p className="text-[16.2px] leading-[24.3px] text-[#666666] mb-6">
              ИИ создает оптимальные проекты изделий с учетом материалов, 
              стоимости и производственных ограничений.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Сокращение времени проектирования на 60%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Оптимизация расхода материалов на 20-30%</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#4f5bff] rounded-full mr-3"></span>
                <span className="text-[13.5px] text-[#666666]">Улучшение характеристик продукции</span>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="w-full mb-20">
          <h3 className="text-[33.2px] font-medium leading-[39.84px] text-[#111111] text-center mb-12">
            Путь к ₽1 млрд эффекта: этапы внедрения
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4f5bff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-[23.3px] font-medium">1-2</span>
              </div>
              <h4 className="text-[19.4px] font-medium text-[#111111] mb-3">Месяца 1-2</h4>
              <h5 className="text-[16.2px] font-medium text-[#333333] mb-4">Аудит и пилотное внедрение</h5>
              <ul className="space-y-2 text-[13.5px] text-[#666666]">
                <li>• Комплексный аудит производственных процессов</li>
                <li>• Выбор пилотного участка с максимальным ROI</li>
                <li>• Внедрение первого ИИ-решения (предиктивная аналитика)</li>
                <li>• Обучение ключевых сотрудников</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4f5bff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-[23.3px] font-medium">3-6</span>
              </div>
              <h4 className="text-[19.4px] font-medium text-[#111111] mb-3">Месяца 3-6</h4>
              <h5 className="text-[16.2px] font-medium text-[#333333] mb-4">Масштабирование решений</h5>
              <ul className="space-y-2 text-[13.5px] text-[#666666]">
                <li>• Развертывание на смежных участках</li>
                <li>• Добавление компьютерного зрения для качества</li>
                <li>• Интеграция с MES/ERP системами</li>
                <li>• Первые измеримые результаты ROI</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4f5bff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-[23.3px] font-medium">6-12</span>
              </div>
              <h4 className="text-[19.4px] font-medium text-[#111111] mb-3">Месяца 6-12</h4>
              <h5 className="text-[16.2px] font-medium text-[#333333] mb-4">Комплексная цифровизация</h5>
              <ul className="space-y-2 text-[13.5px] text-[#666666]">
                <li>• Полная автоматизация планирования производства</li>
                <li>• Беспилотная логистика и складская автоматизация</li>
                <li>• Генеративное проектирование новых изделий</li>
                <li>• ₽1+ млрд годового эффекта как у Северстали</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Moscow Market Stats */}
        <div className="w-full bg-[#f8f9fa] rounded-2xl p-12 text-center">
          <h3 className="text-[28.5px] font-medium leading-[34.2px] text-[#111111] mb-6">
            Московский промышленный кластер и ИИ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[33.2px] font-medium text-[#4f5bff] mb-2">85%</div>
              <div className="text-[13.5px] text-[#666666]">крупных производителей Москвы планируют внедрение ИИ</div>
            </div>
            <div>
              <div className="text-[33.2px] font-medium text-[#4f5bff] mb-2">₽247млрд</div>
              <div className="text-[13.5px] text-[#666666]">эффект от ИИ в московской промышленности в 2024</div>
            </div>
            <div>
              <div className="text-[33.2px] font-medium text-[#4f5bff] mb-2">15%</div>
              <div className="text-[13.5px] text-[#666666]">ежегодный рост рынка ИИ для производства</div>
            </div>
            <div>
              <div className="text-[33.2px] font-medium text-[#4f5bff] mb-2">3-6</div>
              <div className="text-[13.5px] text-[#666666]">месяцев окупаемость внедрения ИИ</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};