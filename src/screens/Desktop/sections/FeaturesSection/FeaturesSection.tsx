import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";

const aiAutomationServiceTags = [
  "PRODUCT STRATEGY",
  "USER RESEARCH", 
  "PRODUCT DESIGN",
  "NEURAL NETWORKS",
  "CHATBOTS AND AI ASSISTANTS",
  "DATA ANALYSIS",
  "PREDICTIVE ANALYTICS",
  "COMPUTER VISION",
  "LANGUAGE PROCESSING",
  "SMART AUTOMATION",
  "AI CONSULTING",
  "DEEP LEARNING",
  "MLOPS SYSTEMS",
  "AI INTEGRATION",
  "RECOMMENDATION ALGORITHMS",
];

const implementationServiceTags = [
  "PRODUCT DEVELOPMENT",
  "SYSTEM INTEGRATION",
  "API DEVELOPMENT",
  "DATA ARCHITECTURE",
  "CLOUD SOLUTIONS",
  "DEVOPS AUTOMATION",
  "WEB APPLICATIONS",
  "MOBILE SOLUTIONS",
  "TECHNICAL CONSULTING",
  "SYSTEM AUDIT",
  "PERFORMANCE OPTIMIZATION",
  "CYBERSECURITY",
  "SCALING",
  "TECHNOLOGY SELECTION",
  "SYSTEM INTEGRATION",
];

const businessGrowthServiceTags = [
  "АВТОМАТИЗАЦИЯ РОСТА",
  "АНАЛИТИКА БИЗНЕСА",
  "A/B ТЕСТИРОВАНИЕ",
  "ОПТИМИЗАЦИЯ КОНВЕРСИЙ",
  "ОНБОРДИНГ ПОЛЬЗОВАТЕЛЕЙ",
  "СТРАТЕГИИ УДЕРЖАНИЯ",
  "ВИРУСНАЯ МЕХАНИКА",
  "РОСТОВЫЕ АЛГОРИТМЫ",
  "ВОРОНКИ ПРОДАЖ",
  "ПРИВЛЕЧЕНИЕ КЛИЕНТОВ",
  "ПРОДУКТОВЫЙ РОСТ",
  "ПОВЕДЕНЧЕСКАЯ АНАЛИТИКА",
  "КОГОРТНЫЙ АНАЛИЗ",
  "ОПТИМИЗАЦИЯ МЕТРИК",
  "АВТОМАТИЗАЦИЯ ПРОДАЖ",
];

const advancedAIServiceTags = [
  "PRODUCT STRATEGY",
  "USER RESEARCH", 
  "UX/UI DESIGN",
  "MVP DEVELOPMENT",
  "DESIGN SYSTEMS",
  "USER TESTING",
  "PRODUCT ANALYTICS",
  "GROWTH ENGINEERING",
  "USER ONBOARDING",
  "RETENTION STRATEGIES",
  "PRODUCT CONSULTING",
  "DESIGN SPRINTS",
  "SYSTEM DESIGN",
  "PRODUCT INTEGRATION",
  "RECOMMENDER SYSTEMS",
];

const businessAnalyticsServiceTags = [
  "A/B ТЕСТИРОВАНИЕ",
  "ЭКСПЕРИМЕНТАЛЬНАЯ СИСТЕМА",
  "СТАТИСТИЧЕСКИЙ АНАЛИЗ",
  "ОПТИМИЗАЦИЯ ВОРОНОК",
  "КОГОРТНЫЙ АНАЛИЗ",
  "ПОВЕДЕНЧЕСКАЯ АНАЛИТИКА",
  "ОТСЛЕЖИВАНИЕ КОНВЕРСИЙ",
  "АНАЛИЗ УДЕРЖАНИЯ",
  "ПРОДУКТОВЫЕ МЕТРИКИ",
  "КАРТА ПОЛЬЗОВАТЕЛЬСКОГО ПУТИ",
  "ДИАГНОСТИКА РОСТА",
  "ДИЗАЙН ЭКСПЕРИМЕНТОВ",
  "ТЕСТИРОВАНИЕ ЗНАЧИМОСТИ",
  "ВНЕДРЕНИЕ АНАЛИТИКИ",
  "ДИЗАЙН ДАШБОРДОВ",
];

const aiAutomationPhilosophyItems = [
  {
    title: "User-Centered Design, Always",
    description:
      'Every design solution starts with the question: "How will this help the user?" We study real needs, not assumptions.',
    statistic: "87% of our products achieve product-market fit"
  },
  {
    title: "Progressive Implementation",
    description: "Product features unfold naturally as needed. No overloaded panels on day one.",
    statistic: "3x higher user activation vs industry average"
  },
  {
    title: "Emotional Engagement",
    description:
      "Micro-interactions that delight, success states that celebrate, empty states that guide.",
    statistic: "45% higher retention metrics on average"
  },
];

const implementationPhilosophyItems = [
  {
    title: "Right Tool for the Job",
    description: "We choose technologies based on your needs, not our preferences. Sometimes simple beats complex.",
    statistic: "Save 40% development costs vs agencies pushing latest frameworks"
  },
  {
    title: "Thoughtful Product Implementation",
    description:
      "From simple if/then rules to complex ML - we implement what actually drives your metrics.",
    statistic: "Average client saves $50K avoiding product over-engineering"
  },
  {
    title: "Build for Scale, Launch Economically",
    description: "Architecture for 1M users, but launch MVP for first 100. No premature optimization.",
    statistic: "Zero painful rewrites when scaling client products"
  },
];

const businessGrowthEngineeringItems = [
  {
    title: "Онбординг, ускоряющий время до ценности",
    description: "Постепенное раскрытие и контекстное руководство, которое быстро приводит пользователей к первой победе. Никаких перегружающих туров по функциям.",
    statistic: "Сокращение времени до первой ценности на 40-60% через оптимизированные потоки"
  },
  {
    title: "Удержание через формирование привычек",
    description: "Создаем функции, которые формируют пользовательские привычки и предотвращают отток. Вехи успеха, празднования побед и реактивация, которая действительно работает.",
    statistic: "Снижение оттока на 20-40% через систематическую инженерию удержания"
  },
  {
    title: "Механика расширения и монетизации",
    description: "Естественные пути обновления, ограничения функций, направляющие рост, и вирусные петли, встроенные в основные рабочие процессы. Инженерия роста, а не ростхакинг.",
    statistic: "Увеличение доходов от расширения на 30-80% через продуктовую монетизацию"
  },
];

const advancedAIEngineeringItems = [
  {
    title: "Products That Users Actually Want",
    description: "We build products based on user needs, not assumptions. From simple prototypes to complex systems - everything that best solves your users' problems.",
    statistic: "87% of products achieve product-market fit"
  },
  {
    title: "Design Systems from Day One",
    description: "Production-ready products with monitoring, testing and automated deployment. Built for reliability and scale.",
    statistic: "99.9% uptime for products serving 1M+ users monthly"
  },
  {
    title: "Custom Product Solutions",
    description: "Enterprise design systems, predictive analytics, recommendation engines and intelligent automation tailored to your needs.",
    statistic: "Serve clients including Monday.com, 8fig and Hacking HR"
  },
];

const businessAnalyticsItems = [
  {
    title: "Найти узкое место, доказать решение",
    description: "Перестаньте гадать, что движет рост. Мы систематически тестируем ваши самые большие возможности по активации, принятию, обновлению и удержанию со статистической строгостью и четкими решениями выиграть/убить.",
    statistic: "2-5 ориентированных на доходы экспериментов ежемесячно с 95% статистической уверенностью"
  },
  {
    title: "Системный фреймворк экспериментирования",
    description: "Правильный дизайн экспериментов без докторской степени. Мы обрабатываем расчеты размера выборки, контрольные группы и тестирование значимости - вы получаете четкие бизнес-решения.",
    statistic: "20-40% улучшение коэффициентов активации через контролируемые эксперименты"
  },
  {
    title: "Диагностика роста на основе данных",
    description: "От 'никакой аналитики' до 'сложного тестирования' за 90 дней. Полный анализ воронки, выявление узких мест и приоритетная дорожная карта экспериментов на основе реального поведения пользователей.",
    statistic: "Клиенты достигают 25-100% улучшения конверсии через систематическое тестирование"
  },
];

export const FeaturesSection = (): JSX.Element => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    ai: false,
    productAnalytics: false,
    growth: false,
    development: false,
    design: false,
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };
  return (
    <section className="w-full py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left sidebar with CTA button */}
        <aside className="flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="pt-24 sticky top-24">
            <Button 
              onClick={openConsultationPopup}
              className="bg-[#0da34e] hover:bg-[#0da34e]/90 hover:shadow-xl text-black font-bold text-[14px] h-[60px] px-8 rounded-full [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              BECOME A CLIENT
              <img
                className="ml-4 w-[13.5px] h-[13.5px] transition-transform duration-300 group-hover:translate-x-1"
                alt="Arrow"
                src="https://c.animaapp.com/meoanmv4HLBh9Z/img/container-3.svg"
              />
            </Button>
            
            {/* Additional CTA Context */}
            <div className="mt-6 text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-48">
              <div className="mb-3">
                <div className="text-xs text-[#4f5bff] font-semibold mb-1">FAST START</div>
                <div>Free 30-min consultation</div>
              </div>
              <div className="mb-3">
                <div className="text-xs text-[#4f5bff] font-semibold mb-1">GUARANTEE</div>
                <div>100% refund if we don't hit KPIs</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 max-w-4xl">
          {/* Header section */}
          <header className="mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h1 className="text-[52px] leading-[56px] font-bold text-[#111111] mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] max-w-[569px]">
              Team Behind 50+ Successful Product Launches
            </h1>
            <p className="text-[18px] leading-[28px] text-[#4f5bff] [font-family:'Neue_Haas_Grotesk_Display_Pro-Medium',Helvetica] mb-6 font-semibold max-w-[500px]">
              Product design experts who build products users love
            </p>
            <p className="text-lg leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] mb-8 max-w-[600px]">
              We are <strong>product designers</strong> who think like <strong>founders</strong>, code like
              <strong>engineers</strong>, design like <strong>artists</strong> and optimize like <strong>growth hackers</strong>.
              This rare combination means your product doesn't just look good or
              work well - it <strong>achieves product-market fit</strong>.
            </p>

            {/* Credibility Markers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-[#f8f9fa] rounded-2xl border border-[#e5e7eb]">
              <div className="text-center">
                <div className="text-[#4f5bff] text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                  50+
                </div>
                <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Products Launched
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#4f5bff] text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                  $50M+
                </div>
                <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Funding Raised for Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#4f5bff] text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                  87%
                </div>
                <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  PMF Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#4f5bff] text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                  5+ Years
                </div>
                <div className="text-[#666666] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Avg. Team Experience
                </div>
              </div>
            </div>

            {/* Case Study Highlight */}
            <div className="bg-[#111111] rounded-2xl p-6 text-white mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                    Latest Success: EduGrowth
                  </h3>
                  <p className="text-[#cccccc] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    EdTech startup → $500K funding raised
                  </p>
                </div>
                <div className="text-[#4f5bff] text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                  90 days
                </div>
              </div>
              <p className="text-[#cccccc] text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-relaxed">
                "In 90 days we went from idea to product-market fit. Their user research revealed pain points we never knew existed. The result exceeded all expectations." - Jennifer T., Founder
              </p>
            </div>

            {/* Team Expertise Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4f5bff]/20 shadow-lg flex-shrink-0">
                    <img 
                      src="/images/jakeprofile.png"
                      alt="Jake McMahon profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">Jake McMahon</h4>
                    <p className="text-[#4f5bff] font-semibold text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                      Founder & Product Strategy Expert
                    </p>
                    <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] mb-3">
                      CPO at Hacking HR (2M+ users) • Ex-Queue/DemandVolt (Product for Monday.com, 8fig)
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • MBA in Product Management
                      </p>
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • 8+ years building products users love
                      </p>
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • Led platforms with 99.9% uptime for Fortune 500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4f5bff]/20 shadow-lg flex-shrink-0">
                    <img 
                      src="/images/rehanprofile.jpg"
                      alt="Rehan Yaseen profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">Rehan Yaseen</h4>
                    <p className="text-[#4f5bff] font-semibold text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2">
                      Lead Product Designer & UX Researcher
                    </p>
                    <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] mb-3">
                      Senior product designer with expertise in user-centered design and design systems
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • Specializes in user experience design and NLP
                      </p>
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • Expert in creating custom design systems
                      </p>
                      <p className="text-xs text-[#999999] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        • Proven experience implementing design at enterprise scale
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Philosophy sections */}
          <div className="space-y-16">
            {/* Advanced AI & Machine Learning */}
            <section className="border-t border-black pt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <div 
                className="flex items-center justify-between mb-9 cursor-pointer group hover:bg-gray-50/50 rounded-lg p-4 -m-4 transition-all duration-200"
                onClick={() => toggleSection('ai')}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[40px] lg:leading-[50px] font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-[#4f5bff] transition-colors duration-200">
                    Advanced Product Design & User Research
                  </h2>
                  <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                    Corporate solutions based on user-centered design, product analytics and design systems
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 order-1 sm:order-2 ${
                    expandedSections.ai 
                      ? 'bg-[#4f5bff] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#4f5bff]/10 group-hover:text-[#4f5bff]'
                  }`}>
                    {expandedSections.ai ? 'Collapse' : 'Expand'}
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black group-hover:text-[#4f5bff] transition-all duration-200 ${
                      expandedSections.ai ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedSections.ai && (
              <>
              <div className="flex flex-wrap gap-1 mb-9 max-w-[769px]">
                {advancedAIServiceTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full px-4 py-2.5 text-[13px] leading-4 border-[#dddddd] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                {advancedAIEngineeringItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] pr-6">
                          {item.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p className="text-[15px] leading-[20px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          <span className="text-black tracking-[0.02px]">
                            {item.description}
                            <br />
                            <br />
                          </span>
                          <span className="text-[#4f5bff] tracking-[0.02px] font-semibold">
                            {item.statistic}
                          </span>
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <img
                          className="w-32 lg:w-44 h-2 lg:h-3"
                          alt="Margin"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin.svg"
                        />
                      </div>
                    </div>
                    {index < advancedAIEngineeringItems.length - 1 && (
                      <Separator className="bg-black h-px" />
                    )}
                  </div>
                ))}
              </div>
              </>
              )}
            </section>

            {/* Business Analytics */}
            <section className="border-t border-black pt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <div 
                className="flex items-center justify-between mb-9 cursor-pointer group hover:bg-gray-50/50 rounded-lg p-4 -m-4 transition-all duration-200"
                onClick={() => toggleSection('productAnalytics')}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[40px] lg:leading-[50px] font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-[#4f5bff] transition-colors duration-200">
                    <span className="block sm:inline">Product Analytics and</span>
                    <span className="block sm:inline sm:ml-1">A/B Testing</span>
                  </h2>
                  <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                    A/B testing, conversion funnels and experimentation systems for data-driven decision making
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 order-1 sm:order-2 ${
                    expandedSections.productAnalytics 
                      ? 'bg-[#4f5bff] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#4f5bff]/10 group-hover:text-[#4f5bff]'
                  }`}>
                    {expandedSections.productAnalytics ? 'Collapse' : 'Expand'}
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black group-hover:text-[#4f5bff] transition-all duration-200 ${
                      expandedSections.productAnalytics ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedSections.productAnalytics && (
              <>
              <div className="flex flex-wrap gap-1 mb-9 max-w-[769px]">
                {businessAnalyticsServiceTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full px-4 py-2.5 text-[13px] leading-4 border-[#dddddd] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                {businessAnalyticsItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] pr-6">
                          {item.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p className="text-[15px] leading-[20px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          <span className="text-black tracking-[0.02px]">
                            {item.description}
                            <br />
                            <br />
                          </span>
                          <span className="text-[#4f5bff] tracking-[0.02px] font-semibold">
                            {item.statistic}
                          </span>
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <img
                          className="w-32 lg:w-44 h-2 lg:h-3"
                          alt="Margin"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin.svg"
                        />
                      </div>
                    </div>
                    {index < businessAnalyticsItems.length - 1 && (
                      <Separator className="bg-black h-px" />
                    )}
                  </div>
                ))}
              </div>
              </>
              )}
            </section>

            {/* Business Growth Engineering */}
            <section className="border-t border-black pt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <div 
                className="flex items-center justify-between mb-9 cursor-pointer group hover:bg-gray-50/50 rounded-lg p-4 -m-4 transition-all duration-200"
                onClick={() => toggleSection('growth')}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[40px] lg:leading-[50px] font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-[#4f5bff] transition-colors duration-200">
                    Business Growth Engineering
                  </h2>
                  <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                    User acquisition systems, onboarding and retention mechanics for sustainable product growth
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 order-1 sm:order-2 ${
                    expandedSections.growth 
                      ? 'bg-[#4f5bff] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#4f5bff]/10 group-hover:text-[#4f5bff]'
                  }`}>
                    {expandedSections.growth ? 'Collapse' : 'Expand'}
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black group-hover:text-[#4f5bff] transition-all duration-200 ${
                      expandedSections.growth ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedSections.growth && (
              <>
              <div className="flex flex-wrap gap-1 mb-9 max-w-[769px]">
                {businessGrowthServiceTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full px-4 py-2.5 text-[13px] leading-4 border-[#dddddd] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                {businessGrowthEngineeringItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] pr-6">
                          {item.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p className="text-[15px] leading-[20px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          <span className="text-black tracking-[0.02px]">
                            {item.description}
                            <br />
                            <br />
                          </span>
                          <span className="text-[#4f5bff] tracking-[0.02px] font-semibold">
                            {item.statistic}
                          </span>
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <img
                          className="w-32 lg:w-44 h-2 lg:h-3"
                          alt="Margin"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin.svg"
                        />
                      </div>
                    </div>
                    {index < businessGrowthEngineeringItems.length - 1 && (
                      <Separator className="bg-black h-px" />
                    )}
                  </div>
                ))}
              </div>
              </>
              )}
            </section>

            {/* Implementation Philosophy */}
            <section className="border-t border-black pt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
              <div 
                className="flex items-center justify-between mb-9 cursor-pointer group hover:bg-gray-50/50 rounded-lg p-4 -m-4 transition-all duration-200"
                onClick={() => toggleSection('development')}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[40px] lg:leading-[50px] font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-[#4f5bff] transition-colors duration-200">
                    Implementation Philosophy
                  </h2>
                  <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                    Technology selection, architectural design and integration methodologies for maximum effectiveness
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 order-1 sm:order-2 ${
                    expandedSections.development 
                      ? 'bg-[#4f5bff] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#4f5bff]/10 group-hover:text-[#4f5bff]'
                  }`}>
                    {expandedSections.development ? 'Collapse' : 'Expand'}
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black group-hover:text-[#4f5bff] transition-all duration-200 ${
                      expandedSections.development ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedSections.development && (
              <>
              <div className="flex flex-wrap gap-1 mb-9 max-w-[769px]">
                {implementationServiceTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full px-4 py-2.5 text-[13px] leading-4 border-[#dddddd] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                {implementationPhilosophyItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] pr-6">
                          {item.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p className="text-[15px] leading-[20px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          <span className="text-black tracking-[0.02px]">
                            {item.description}
                            <br />
                            <br />
                          </span>
                          <span className="text-[#4f5bff] tracking-[0.02px] font-semibold">
                            {item.statistic}
                          </span>
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <img
                          className="w-32 lg:w-44 h-2 lg:h-3"
                          alt="Margin"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin.svg"
                        />
                      </div>
                    </div>
                    {index < implementationPhilosophyItems.length - 1 && (
                      <Separator className="bg-black h-px" />
                    )}
                  </div>
                ))}
              </div>
              </>
              )}
            </section>

            {/* AI Automation Philosophy */}
            <section className="border-t border-black pt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
              <div 
                className="flex items-center justify-between mb-9 cursor-pointer group hover:bg-gray-50/50 rounded-lg p-4 -m-4 transition-all duration-200"
                onClick={() => toggleSection('design')}
              >
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[40px] lg:leading-[50px] font-bold text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-2 group-hover:text-[#4f5bff] transition-colors duration-200">
                    Product Design Philosophy
                  </h2>
                  <p className="text-sm text-[#666666] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] max-w-2xl">
                    User-centered approach to product design with emphasis on practicality and emotional engagement
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 order-1 sm:order-2 ${
                    expandedSections.design 
                      ? 'bg-[#4f5bff] text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-[#4f5bff]/10 group-hover:text-[#4f5bff]'
                  }`}>
                    {expandedSections.design ? 'Collapse' : 'Expand'}
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-black group-hover:text-[#4f5bff] transition-all duration-200 ${
                      expandedSections.design ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>

              {expandedSections.design && (
              <>
              <div className="flex flex-wrap gap-1 mb-9 max-w-[769px]">
                {aiAutomationServiceTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full px-4 py-2.5 text-[13px] leading-4 border-[#dddddd] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                {aiAutomationPhilosophyItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
                      <div className="lg:col-span-4">
                        <h3 className="text-2xl leading-[30px] text-black [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] pr-6">
                          {item.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5">
                        <p className="text-[15px] leading-[20px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          <span className="text-black tracking-[0.02px]">
                            {item.description}
                            <br />
                            <br />
                          </span>
                          <span className="text-[#4f5bff] tracking-[0.02px] font-semibold">
                            {item.statistic}
                          </span>
                        </p>
                      </div>
                      <div className="lg:col-span-3">
                        <img
                          className="w-32 lg:w-44 h-2 lg:h-3"
                          alt="Margin"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin.svg"
                        />
                      </div>
                    </div>
                    {index < aiAutomationPhilosophyItems.length - 1 && (
                      <Separator className="bg-black h-px" />
                    )}
                  </div>
                ))}
              </div>
              </>
              )}
            </section>

          </div>
        </main>
        </div>
      </div>

      {/* Consultation Popup */}
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Book your free product consultation"
        description="Get expert evaluation of your product and personalized strategy for achieving product-market fit. We'll show you how to save 30+ hours per week."
      />
    </section>
  );
};
