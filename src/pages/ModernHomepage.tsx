import { useState } from "react";
import { Button } from "@/components/ui-agency/button";
import { Badge } from "@/components/ui-agency/badge";
import { Card, CardContent } from "@/components/ui-agency/card";
import { Container } from "@/components/ui-agency/container";
import { Section } from "@/components/ui-agency/section";
import { FeatureCard } from "@/components/ui-agency/feature-card";
import { MetricCard } from "@/components/ui-agency/metric-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, Play, Clock, Users, Trophy, Zap, Shield, TrendingUp, Sparkles, Calendar, DollarSign, Building2, ChevronRight, Star, AlertCircle, Gift, Timer, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import PDFDownloadPopupRU from "@/components/PDFDownloadPopupRU";
import LeadMagnetFeatureSection from "@/components/sections/LeadMagnetFeatureSection";
import { useSprintPDFDownload } from "@/hooks/useSprintPDFDownload";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";

const navigationItems = [
  { label: "УСЛУГИ", hasDropdown: true, href: "#solution" },
  { label: "КЕЙСЫ", href: "#use-cases" },
  { label: "РЕЗУЛЬТАТЫ", href: "#pricing" },
  { label: "О НАС", href: "#about" },
];

const ModernHomepage = () => {
  const [email, setEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("professional");
  const [roiInputs, setRoiInputs] = useState({
    hoursPerWeek: 40,
    hourlyRate: 3000, // RUB per hour
    repetitiveTasks: 60,
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationConfig, setConsultationConfig] = useState({
    title: "Забронируйте ИИ-автоматизацию спринт",
    description: "Запланируйте 30-минутный стратегический звонок для обсуждения ваших потребностей в автоматизации"
  });
  
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    isSubmitting: isPDFSubmitting,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = useSprintPDFDownload();
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const calculateROI = () => {
    const weeklyTimeSaved = roiInputs.hoursPerWeek * (roiInputs.repetitiveTasks / 100) * 0.75;
    const weeklySavings = weeklyTimeSaved * roiInputs.hourlyRate;
    const monthlySavings = weeklySavings * 4.33;
    const yearlySavings = monthlySavings * 12;
    return { weeklyTimeSaved, weeklySavings, monthlySavings, yearlySavings };
  };

  const roi = calculateROI();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openConsultationPopup = (tier?: string) => {
    let config = {
      title: "Забронируйте ИИ-автоматизацию спринт",
      description: "Запланируйте 30-минутный стратегический звонок для обсуждения ваших потребностей в автоматизации"
    };
    
    if (tier === 'starter') {
      config = {
        title: "Забронируйте стартовый спринт",
        description: "Давайте обсудим ваши потребности в простой автоматизации промптов и быстрые победы"
      };
    } else if (tier === 'professional') {
      config = {
        title: "Забронируйте профессиональный спринт",
        description: "Запланируйте звонок для обсуждения требований к автоматизации ИИ-агентов"
      };
    } else if (tier === 'enterprise') {
      config = {
        title: "Забронируйте корпоративный спринт",
        description: "Давайте обсудим ваши потребности в полной ИИ-трансформации"
      };
    }
    
    setConsultationConfig(config);
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="bg-white min-h-screen w-full">
      <div className="bg-white w-full flex flex-col">
        
        {/* Hero Section - Modern Agency Style */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <header className="relative w-full min-h-screen bg-[#111111] overflow-hidden">
            <div className="relative w-full h-full">
              {/* Modern Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
              <div className="absolute top-20 left-20 w-72 h-72 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4f5bff]/20 rounded-full blur-3xl animate-pulse delay-700"></div>
              
              {/* Navigation */}
              <nav className="absolute w-full h-[75px] top-0 left-0 z-10">
                <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[90px] py-[29px]">
                  <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                    <div className="text-white text-xl font-bold [font-family:'Inter',Helvetica]">
                      AI Automation RU
                    </div>
                  </div>

                  <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <nav className="hidden md:flex items-center gap-2">
                      {navigationItems.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-1.5">
                          <div className="flex items-end gap-1.5">
                            <a 
                              href={item.href || "#"}
                              onClick={(e) => {
                                if (item.href && item.href.startsWith('#')) {
                                  e.preventDefault();
                                  scrollToSection(item.href.substring(1));
                                }
                              }}
                              className="[font-family:'Inter',Helvetica] font-bold text-white text-[13.2px] tracking-[0] leading-[13.5px] whitespace-nowrap cursor-pointer hover:text-[#4f5bff] transition-colors">
                              {item.label}
                            </a>
                            {item.hasDropdown && (
                              <div className="w-[15px] h-[15px] text-white">▼</div>
                            )}
                          </div>
                          {index < navigationItems.length - 1 && (
                            <div className="w-[37.5px]" />
                          )}
                        </div>
                      ))}
                    </nav>

                    <Button
                      className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[13.2px] font-bold [font-family:'Inter',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                      variant="ghost"
                      onClick={() => openConsultationPopup()}
                    >
                      НАЧАТЬ
                    </Button>
                  </div>
                </div>
              </nav>

              {/* Hero Content */}
              <main className="flex flex-col items-center gap-9 absolute top-[180px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-[1176px] items-center gap-9">
                  
                  {/* Badge */}
                  <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <Badge className="px-6 py-2 text-sm font-medium bg-[#4f5bff]/20 text-white border-[#4f5bff]/50">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Ограниченное количество слотов - только 3 команды в этом месяце
                    </Badge>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] tracking-[0] leading-tight lg:leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    От медленной ручной работы к<br />
                    <span className="bg-gradient-to-r from-[#4f5bff] to-[#8b5cf6] bg-clip-text text-transparent">
                      ИИ-автоматизации
                    </span><br />
                    За 2-8 недель
                  </h1>

                  {/* Subtitle */}
                  <p className="text-center [font-family:'Inter',Helvetica] font-normal text-lg tracking-[0.18px] leading-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl">
                    <span className="text-white tracking-[0.03px]">Прекратите терять ₽4 млн/месяц на рутинных задачах. Наши </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">ИИ-спринты</span>
                    <span className="text-white tracking-[0.03px]"> доставляют работающие решения, которые экономят </span>
                    <span className="text-[#4f5bff] tracking-[0.03px]">20+ часов в неделю</span>
                    <span className="text-white tracking-[0.03px]">, гарантированно.</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                    <Button 
                      size="lg" 
                      className="w-auto px-8 h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                      onClick={() => openConsultationPopup()}
                    >
                      Забронировать стратегический звонок
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-auto px-6 h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-[17.6px] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[21.8px] transition-colors"
                      onClick={() => scrollToSection('pricing')}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Посмотреть пакеты спринтов
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Inter',Helvetica] mb-1">
                        72 часа
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Inter',Helvetica]">
                        Первая автоматизация работает
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Inter',Helvetica] mb-1">
                        300%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Inter',Helvetica]">
                        Средний ROI
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Inter',Helvetica] mb-1">
                        20+ часов
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Inter',Helvetica]">
                        Экономия в неделю
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#4f5bff] text-3xl font-bold [font-family:'Inter',Helvetica] mb-1">
                        100%
                      </div>
                      <div className="text-white/80 text-sm [font-family:'Inter',Helvetica]">
                        Успешность проектов
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
                  <div className="w-full h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                    <div className="text-white/60 text-xl [font-family:'Inter',Helvetica]">
                      Превью ИИ-Панели Управления
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </header>
        </section>

        {/* VSL Section */}
        <Section id="vsl" className="py-20">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Почему 75% предприятий планируют автоматизировать с ИИ
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Узнайте, как автоматизация с ИИ может сэкономить среднему бизнесу от ₽10 млн до ₽50 млн в год
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-[#4f5bff]/10 to-[#8b5cf6]/10 rounded-lg overflow-hidden border border-[#4f5bff]/20">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#4f5bff] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#4f5bff]/90 transition-colors">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                    <p className="text-lg font-semibold">Нажмите для просмотра</p>
                    <p className="text-sm text-muted-foreground">Видео скоро будет добавлено</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Поддержка: RuTube, MP4, VK Video, YouTube
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Video Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <MetricCard
                  value="2-8 недель"
                  label="Время внедрения"
                  description=""
                  color="blue"
                />
                <MetricCard
                  value="₽8-12 млн"
                  label="Годовая экономия"
                  description=""
                  color="green"
                />
                <MetricCard
                  value="70%"
                  label="Автоматизация процессов"
                  description=""
                  color="purple"
                />
                <MetricCard
                  value="2-8 недель"
                  label="Окупаемость"
                  description=""
                  color="orange"
                />
              </div>
            </div>
            
            {/* CTA Under VSL */}
            <div className="text-center mt-8">
              <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-[#4f5bff] to-[#8b5cf6]">
                Получить персональный план автоматизации
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Бесплатная 30-минутная стратегическая сессия • Без обязательств
              </p>
            </div>
          </Container>
        </Section>

        {/* Problem Section */}
        <Section id="problem" className="py-20 bg-destructive/5">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Знакомо?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Каждый день без автоматизации стоит вам денег, времени и конкурентного преимущества
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Тонете в рутинных задачах",
                  description: "Ваша команда тратит 60% времени на копирование данных вместо стратегических инициатив",
                  cost: "₽640,000/месяц на зарплаты впустую"
                },
                {
                  title: "Кошмар ручной обработки данных",
                  description: "Обработка счетов, договоров и документов занимает дни, когда должна занимать минуты",
                  cost: "72 часа/неделю потеряно на ручную обработку"
                },
                {
                  title: "Задержки в ответах клиентам",
                  description: "Заявки накапливаются, клиенты ждут дни ответов, которые ИИ мог бы дать мгновенно",
                  cost: "38% оттока клиентов из-за медленных ответов"
                },
                {
                  title: "Ошибки в ручных процессах",
                  description: "Человеческие ошибки при вводе и обработке данных приводят к дорогостоящим исправлениям",
                  cost: "₽4 млн+ годовые затраты на ошибки"
                }
              ].map((pain, i) => (
                <Card key={i} className="border-destructive/20 bg-destructive/5 p-6">
                  <CardContent>
                    <AlertCircle className="h-8 w-8 text-destructive mb-2" />
                    <h3 className="text-lg font-semibold mb-2">{pain.title}</h3>
                    <p className="text-muted-foreground mb-3">{pain.description}</p>
                    <div className="text-sm font-semibold text-destructive">
                      Скрытые затраты: {pain.cost}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Alert className="border-primary bg-primary/10">
              <TrendingUp className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Реальная цена:</strong> Российские компании теряют в среднем <strong>₽20 млн/год</strong> на неэффективных ручных процессах, в то время как конкуренты, использующие ИИ-автоматизацию, получают 40% преимущество в производительности.
              </AlertDescription>
            </Alert>
          </Container>
        </Section>

        {/* CTA After Problem */}
        <Section className="py-12 bg-primary/5">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы покончить с кошмаром ручной работы?</h3>
              <p className="text-muted-foreground mb-6">Посмотрите, как мы можем автоматизировать ваши главные болевые точки за 2-8 недель</p>
              <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-[#4f5bff] to-[#8b5cf6]">
                Получить бесплатный план автоматизации
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Container>
        </Section>

        {/* Solution Overview */}
        <Section id="solution" className="py-20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Лучший путь: спринт-внедрение ИИ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Не очередной консультант. Не очередной курс. Реальные ИИ-решения, построенные для вас, за недели, а не месяцы.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#4f5bff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-[#4f5bff]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 1: Быстрое исследование</h3>
                <p className="text-muted-foreground">Мы анализируем ваши рабочие процессы, определяем возможности автоматизации и приоритизируем решения с максимальным ROI</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#4f5bff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-[#4f5bff]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 2-4: Разработка и запуск</h3>
                <p className="text-muted-foreground">Наши ИИ-инженеры создают, тестируют и развертывают ваши индивидуальные автоматизации с участием вашей команды</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#4f5bff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-[#4f5bff]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 4+: Масштабирование и оптимизация</h3>
                <p className="text-muted-foreground">Мы обеспечиваем внедрение, измеряем результаты и постоянно оптимизируем для максимального эффекта</p>
              </div>
            </div>
            
            <Card className="border-primary p-6">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Почему спринты работают лучше традиционного консалтинга</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Фиксированные сроки, фиксированный бюджет:</strong> Никаких бесконечных консультационных часов или расширения объема работ
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Рабочие решения за дни:</strong> Увидите вашу первую автоматизацию в действии в течение 72 часов
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Ваша команда учится на практике:</strong> Передача знаний встроена в каждый спринт
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Гарантированные результаты:</strong> Если мы не доставим обещанный ROI, вы не платите
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* Our Process Section with all detailed content */}
        <Section id="our-process" className="py-20 bg-accent/5">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Наш процесс: эксперты по ИИ и продуктам работают в идеальной гармонии
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Мы не исследователи ИИ, экспериментирующие с вашим бюджетом. Мы создатели продуктов, которые используют ИИ как инструмент для решения реальных бизнес-проблем.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <CardContent>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-bold mb-4">Продуктовый подход</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Анализ Jobs-to-be-Done:</strong> Мы определяем, что вашим пользователям действительно нужно выполнить, а не только то, что они говорят
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Карта пользовательских историй:</strong> Мы разбиваем сложные процессы на четкие, действенные пользовательские потоки
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Дизайн человек-в-контуре:</strong> Мы проектируем бесшовную интеграцию и взаимодействие для сотрудничества ИИ и человека
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-bold mb-4">Разработка, ориентированная на производительность</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Двойное отслеживание метрик:</strong> Мы измеряем как бизнес-влияние (экономия времени, снижение затрат), так и производительность ИИ (точность, задержка)
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Мониторинг уровня SaaS:</strong> Панели реального времени, показывающие показатели внедрения, частоту ошибок и метрики ROI
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Непрерывная оптимизация:</strong> Мы итерируем на основе реальных данных использования, а не предположений
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technology Philosophy */}
            <Card className="border-primary mb-12 p-6">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Правильные ИИ-решения, а не модные словечки</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы выбираем самую простую технологию, которая дает лучшие результаты для вашего конкретного случая
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Цепочки промптов</h4>
                    <p className="text-sm text-muted-foreground">Для простых, надежных задач обработки текста</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Оркестрация</h4>
                    <p className="text-sm text-muted-foreground">Для сложных многоэтапных рабочих процессов</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">ИИ-агенты</h4>
                    <p className="text-sm text-muted-foreground">Для принятия решений и адаптивных рабочих процессов</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Компьютерное зрение</h4>
                    <p className="text-sm text-muted-foreground">Для визуальной обработки и контроля качества</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Наша философия технологий:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>BERT против LLM:</strong> Мы используем традиционное NLP, когда это быстрее, дешевле и надежнее больших языковых моделей
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>ML + LLM гибрид:</strong> Мы комбинируем ML-классификацию с LLM, когда ни одного из них недостаточно
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Декомпозиция рабочих процессов:</strong> Мы разбиваем сложные проблемы на простые, тестируемые компоненты
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <strong>Надежность важнее новизны:</strong> Мы выбираем проверенные решения вместо экспериментальных технологий
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent>
                  <Shield className="h-8 w-8 text-destructive mb-2" />
                  <h3 className="text-xl font-bold text-destructive mb-4">Что мы НЕ делаем</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-destructive text-xl">❌</span>
                      <div>Используем ваш проект как учебную возможность для непроверенных ИИ-технологий</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-destructive text-xl">❌</span>
                      <div>Развертываем чрезмерно сложные, вычислительно дорогие агентские системы, когда работают простые решения</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-destructive text-xl">❌</span>
                      <div>Создаем ИИ ради ИИ - каждое решение должно приносить измеримую бизнес-ценность</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary p-6">
                <CardContent>
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <h3 className="text-xl font-bold text-primary mb-4">Что мы ДЕЛАЕМ</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>Создаем автоматизации, которые действительно работают в ваших ежедневных операциях</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>Выбираем наиболее надежное, экономически эффективное решение для каждой конкретной проблемы</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                      <div>Фокусируемся на конечных результатах, которые приносят пользу вашему бизнесу и расширяют возможности вашей рабочей силы</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Lead Magnet Feature Section */}
        <LeadMagnetFeatureSection onPDFDownload={openPDFDownload} />

        {/* Industries Section */}
        <Section id="industries" className="py-20 bg-secondary/20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Отрасли, в которых мы специализируемся
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Мы успешно внедрили ИИ-автоматизацию в этих высокоэффективных отраслях
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Юридические услуги",
                  description: "Анализ договоров, проверка документов, автоматизация юридических исследований и отслеживание соответствия",
                  icon: "⚖️",
                  results: "Ускорение проверки договоров"
                },
                {
                  title: "Здравоохранение",
                  description: "Автоматизация приема пациентов, проверка страховки, планирование встреч и обработка записей",
                  icon: "🏥",
                  results: "Сокращение времени врачей на документацию"
                },
                {
                  title: "Финансовые услуги",
                  description: "Обнаружение мошенничества, оценка рисков, регуляторная отчетность и автоматизация онбординга клиентов",
                  icon: "🏦",
                  results: "Снижение ложных срабатываний"
                },
                {
                  title: "Производство",
                  description: "Контроль качества, оптимизация цепочки поставок, предиктивное обслуживание и управление запасами",
                  icon: "🏭",
                  results: "Предотвращение дорогостоящих дефектов"
                },
                {
                  title: "Недвижимость",
                  description: "Оценка недвижимости, обработка документов, квалификация лидов и автоматизация анализа рынка",
                  icon: "🏢",
                  results: "Генерация квалифицированных лидов"
                },
                {
                  title: "Электронная коммерция",
                  description: "Автоматизация поддержки клиентов, управление запасами, оптимизация цен и обработка заказов",
                  icon: "🛒",
                  results: "Мгновенная поддержка клиентов"
                }
              ].map((industry, i) => (
                <FeatureCard
                  key={i}
                  icon={industry.icon}
                  title={industry.title}
                  description={industry.description}
                  className="h-full"
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Use Cases Section */}
        <Section id="use-cases" className="py-20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Самые востребованные случаи автоматизации
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Вот что мы автоматизируем для клиентов каждую неделю
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-[#4f5bff]/10 to-[#8b5cf6]/10 rounded-lg border border-[#4f5bff]/20 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📄</div>
                    <div className="text-sm">Document Processing Image</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Обработка документов и данных</h3>
                <div className="space-y-4">
                  {[
                    { task: "Обработка и утверждение счетов", time: "Экономия 20 часов/неделю" },
                    { task: "Анализ и извлечение данных из договоров", time: "85% быстрее проверка" },
                    { task: "Сбор документов для онбординга клиентов", time: "3x быстрее обработка" },
                    { task: "Отчетность и документация по соответствию", time: "90% улучшение точности" },
                    { task: "Ввод данных из форм и электронных писем", time: "Ноль ручного ввода" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-[#4f5bff]/10 to-[#8b5cf6]/10 rounded-lg border border-[#4f5bff]/20 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">💬</div>
                    <div className="text-sm">Customer Communication Image</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Клиенты и коммуникация</h3>
                <div className="space-y-4">
                  {[
                    { task: "Маршрутизация и ответы на заявки поддержки", time: "2 мин время ответа" },
                    { task: "Квалификация и скоринг лидов", time: "3x больше квалифицированных лидов" },
                    { task: "Классификация и приоритизация электронной почты", time: "Ноль пропущенных писем" },
                    { task: "Планирование встреч и напоминания", time: "95% явка" },
                    { task: "Анализ отзывов клиентов и отчетность", time: "Инсайты в реальном времени" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium">{item.task}</div>
                        <div className="text-sm text-primary font-semibold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="border-primary bg-primary/5 p-6">
              <CardContent>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Не видите свой случай использования?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Мы автоматизировали процессы в 47 различных отраслях. Если у вас есть повторяющиеся задачи, обработка данных или рабочие процессы принятия решений, мы, вероятно, можем их автоматизировать.
                  </p>
                  <Button size="lg" onClick={() => openConsultationPopup()}>
                    Обсудить ваши конкретные потребности
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Выберите ваш спринт трансформации ИИ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Каждый уровень разработан для различной сложности автоматизации и бизнес-потребностей
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Tier */}
              <Card className="relative p-6">
                <CardContent>
                  <Badge className="w-fit mb-2">2-недельный спринт</Badge>
                  <h3 className="text-2xl font-bold mb-2">Стартовый спринт</h3>
                  <p className="text-muted-foreground mb-4">Простая автоматизация промптов для быстрых побед</p>
                  <div className="text-3xl font-bold mb-6">от ₽299,000</div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "3-5 автоматизированных рабочих процессов",
                      "Обработка документов и данных",
                      "Автоматизация электронной почты",
                      "Базовая поддержка клиентов",
                      "2 недели поддержки после запуска"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => openConsultationPopup('starter')}
                  >
                    Начать со стартового
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Tier */}
              <Card className="relative border-primary p-6">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white hover:bg-green-600">Самый популярный</Badge>
                </div>
                <CardContent className="pt-6">
                  <Badge className="w-fit mb-2">4-недельный спринт</Badge>
                  <h3 className="text-2xl font-bold mb-2">Профессиональный спринт</h3>
                  <p className="text-muted-foreground mb-4">ИИ-агенты и сложная автоматизация</p>
                  <div className="text-3xl font-bold mb-6">от ₽799,000</div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "8-12 автоматизированных рабочих процессов",
                      "Индивидуальные ИИ-агенты",
                      "Интеграция с вашими системами",
                      "Расширенная обработка документов",
                      "1 месяц поддержки после запуска",
                      "Обучение команды включено"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => openConsultationPopup('professional')}
                  >
                    Выбрать профессиональный
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Tier */}
              <Card className="relative p-6">
                <CardContent>
                  <Badge className="w-fit mb-2">8-недельный спринт</Badge>
                  <h3 className="text-2xl font-bold mb-2">Корпоративный спринт</h3>
                  <p className="text-muted-foreground mb-4">Полная трансформация ИИ</p>
                  <div className="text-3xl font-bold mb-6">Индивидуально</div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Неограниченные рабочие процессы",
                      "Корпоративные ИИ-системы",
                      "Компьютерное зрение и ML",
                      "Выделенная команда ИИ",
                      "3 месяца поддержки после запуска",
                      "Полное обучение организации"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => openConsultationPopup('enterprise')}
                  >
                    Обсудить корпоративный
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-12 border-primary bg-primary/10">
              <Trophy className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Гарантия ROI:</strong> Если мы не доставим обещанный ROI в течение 90 дней, мы вернем полную стоимость спринта. Никакого риска, только результаты.
              </AlertDescription>
            </Alert>
          </Container>
        </Section>

        {/* ROI Calculator */}
        <Section id="roi-calculator" className="py-20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Рассчитайте вашу потенциальную экономию
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Посмотрите, сколько времени и денег вы можете сэкономить с ИИ-автоматизацией
            </p>
            
            <Card className="border-primary p-6">
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <Label htmlFor="hours">Часов в неделю на рутинные задачи</Label>
                    <Input
                      id="hours"
                      type="number"
                      value={roiInputs.hoursPerWeek}
                      onChange={(e) => setRoiInputs({...roiInputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rate">Средняя ставка в час (₽)</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={roiInputs.hourlyRate}
                      onChange={(e) => setRoiInputs({...roiInputs, hourlyRate: parseInt(e.target.value) || 0})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tasks">% времени на повторяющиеся задачи</Label>
                    <Input
                      id="tasks"
                      type="number"
                      value={roiInputs.repetitiveTasks}
                      onChange={(e) => setRoiInputs({...roiInputs, repetitiveTasks: parseInt(e.target.value) || 0})}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ваша потенциальная экономия:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Часов сэкономлено в неделю</div>
                      <div className="text-2xl font-bold text-primary">{roi.weeklyTimeSaved.toFixed(1)} часов</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Еженедельная экономия</div>
                      <div className="text-2xl font-bold text-primary">₽{roi.weeklySavings.toLocaleString('ru-RU')}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Ежемесячная экономия</div>
                      <div className="text-2xl font-bold text-primary">₽{roi.monthlySavings.toLocaleString('ru-RU')}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Годовая экономия</div>
                      <div className="text-2xl font-bold text-primary">₽{roi.yearlySavings.toLocaleString('ru-RU')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" onClick={() => openConsultationPopup()}>
                    Получить персонализированную оценку ROI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" className="py-20 bg-secondary/20">
          <Container maxWidth="lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Сколько времени занимает увидеть результаты?</AccordionTrigger>
                <AccordionContent>
                  Вы увидите вашу первую работающую автоматизацию в течение 72 часов после начала спринта. Большинство клиентов сообщают о значительной экономии времени в течение первой недели, а полный ROI обычно достигается в течение 30-60 дней после завершения спринта.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Нужны ли нам технические навыки для использования автоматизаций?</AccordionTrigger>
                <AccordionContent>
                  Нет! Мы проектируем все автоматизации с учетом простоты использования. Ваша команда получит полное обучение, и большинство систем работают за кулисами без необходимости технических знаний. Мы также предоставляем документацию и поддержку для обеспечения плавного внедрения.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Что если у нас уже есть существующие системы?</AccordionTrigger>
                <AccordionContent>
                  Отлично! Наши решения разработаны для интеграции с вашим существующим технологическим стеком. Мы работаем с популярными CRM, ERP, инструментами коммуникации и индивидуальными системами. Часть нашего процесса открытия включает картирование ваших текущих инструментов для обеспечения бесшовной интеграции.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Как вы обеспечиваете безопасность и конфиденциальность данных?</AccordionTrigger>
                <AccordionContent>
                  Безопасность - наш главный приоритет. Все автоматизации построены с шифрованием корпоративного уровня, мы соблюдаем стандарты GDPR и отраслевые требования, и можем развернуть решения локально или в вашей частной облачной среде. Мы также подписываем NDA перед обсуждением любых деталей проекта.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Что происходит после завершения спринта?</AccordionTrigger>
                <AccordionContent>
                  После завершения спринта вы получаете период поддержки после запуска (2 недели до 3 месяцев в зависимости от уровня). Мы также предлагаем текущие пакеты поддержки и оптимизации, если вам нужна постоянная помощь. Многие клиенты переходят к дополнительным спринтам для автоматизации других областей своего бизнеса.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>Действительно ли гарантия ROI реальна?</AccordionTrigger>
                <AccordionContent>
                  Абсолютно. Если мы не доставим согласованный ROI в течение 90 дней, мы вернем полную стоимость спринта. Мы можем предложить это, потому что наш процесс проверен - мы завершили более 200 успешных спринтов с средним ROI 300%. Мы устанавливаем четкие, измеримые цели в начале и отслеживаем их на протяжении всего процесса.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Container>
        </Section>

        {/* About Section */}
        <Section id="about" className="py-20 bg-secondary/20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Познакомьтесь с вашими ИИ-партнерами
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Эксперты ИИ и разработчики продуктов, которые трансформировали 200+ компаний с помощью проверенных решений автоматизации
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Jake McMahon */}
              <Card className="p-6">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img 
                          src="/images/jakeprofile.png"
                          alt="Jake McMahon profile photo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Jake McMahon</h3>
                    <p className="text-lg text-primary font-semibold">
                      Эксперт по ИИ-стратегии и внедрению
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    С 8+ летним опытом трансформации SaaS-компаний от хаоса данных к движкам роста, Джейк привносит проверенную экспертизу в аналитике, автоматизации и стратегическом внедрении.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Образование:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Высшая школа менеджмента СПбГУ
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Основная экспертиза:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ИИ-стратегия и планирование</Badge>
                      <Badge variant="outline">Автоматизация бизнес-процессов</Badge>
                      <Badge variant="outline">Аналитика данных</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Ключевые достижения:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        CPO в B2B EdTech платформе, обслуживающей 6000+ корпоративных пользователей в компаниях как Райффайзен и SemRUSH
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Консультант по продукту и росту для высоконагруженных потребительских приложений с 100K+ ежемесячных пользователей
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Vyacheslav */}
              <Card className="p-6">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img 
                          src="/images/vyacheslavprofile.PNG"
                          alt="Vyacheslav profile photo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Вячеслав Разин</h3>
                    <p className="text-lg text-primary font-semibold">
                      Специалист по ИИ-исследованиям и глубокому обучению
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Ведущий исследователь и практик ИИ из ННГУ, Вячеслав Разин специализируется на глубоком обучении, разработке моделей машинного обучения и продвинутых внедрениях ИИ.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Образование:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Аспирантура в области ИИ/машинного обучения из ННГУ
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Основная экспертиза:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Глубокое обучение и нейросети</Badge>
                      <Badge variant="outline">Разработка ML моделей</Badge>
                      <Badge variant="outline">ИИ-исследования и инновации</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Ключевые достижения:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        100+ опубликованных исследовательских работ
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Спикер на крупных ИИ-конференциях
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Эксперт в передовых ИИ-технологиях
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary p-6">
              <CardContent>
                <h3 className="text-2xl font-bold text-center mb-4">Почему мы создали эту компанию</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Мы видели слишком много отличных предприятий, страдающих от ручных процессов, в то время как ИИ-решения оставались недоступными, сверхсложными или просто не работали как обещано.
                </p>
                <p className="text-lg font-semibold text-center mb-6">
                  Мы преодолеваем этот разрыв с практическими, результативными ИИ-внедрениями, которые действительно работают и приносят измеримую бизнес-ценность.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">ИИ проектов завершено</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">₽8 млрд+</div>
                    <div className="text-sm text-muted-foreground">Операционная экономия клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Уровень удержания клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Клиентов Fortune 500</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="py-20 bg-gradient-to-r from-[#4f5bff] to-[#8b5cf6] text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы трансформировать ваш бизнес с ИИ?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Присоединяйтесь к 500+ компаниям, которые уже автоматизировали свои операции и экономят миллионы рублей ежегодно
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {[
                    { metric: "72 часа", label: "До первой автоматизации" },
                    { metric: "300%", label: "Средний ROI" },
                    { metric: "₽20М+", label: "Сэкономлено клиентами" },
                    { metric: "100%", label: "Гарантия удовлетворенности" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold">{stat.metric}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#4f5bff] hover:bg-white/90 hover:text-[#4f5bff] text-lg px-8 py-6 border-0"
                    onClick={() => openConsultationPopup()}
                    style={{ backgroundColor: 'white', color: 'hsl(221 100% 25%)' }}
                  >
                    Забронировать стратегический звонок
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 bg-white/10"
                    onClick={openPDFDownload}
                  >
                    Скачать бесплатную оценку
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Timer className="h-5 w-5" />
                <p className="text-sm">
                  Ограниченная доступность: только 3 слота спринта остались на этот месяц
                </p>
              </div>
            </div>
          </Container>
        </Section>

      </div>

      {/* Consultation Popup */}
      <ConsultationPopupRU 
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title={consultationConfig.title}
        description={consultationConfig.description}
      />
      
      {/* PDF Download Popup */}
      <PDFDownloadPopupRU
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        isSubmitted={isPDFSubmitted}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
      />
    </main>
  );
};

export default ModernHomepage;