import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

const AIAutomationSprintsRU = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="default" className="mb-6 px-6 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Ограниченное количество слотов - только 3 команды в этом месяце
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              От медленной ручной работы к
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ИИ-автоматизации
              </span>
              За 2-8 недель
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Прекратите терять ₽4 млн/месяц на рутинных задачах. Наши ИИ-спринты доставляют работающие решения, которые экономят 20+ часов в неделю, гарантированно.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => openConsultationPopup()}>
                Забронировать стратегический звонок
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('pricing')}>
                <Play className="mr-2 h-5 w-5" />
                Посмотреть пакеты спринтов
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { metric: "72 часа", label: "Первая автоматизация работает" },
                { metric: "300%", label: "Средний ROI" },
                { metric: "20+ часов", label: "Экономия в неделю" },
                { metric: "100%", label: "Успешность проектов" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section id="vsl" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-primary/20">
                {/* 
                  VIDEO SETUP OPTIONS:
                  
                  1. For RuTube embed, replace this placeholder with:
                  <iframe 
                    src="https://rutube.ru/play/embed/YOUR_VIDEO_ID" 
                    className="w-full h-full"
                    allowFullScreen
                  />
                  
                  2. For local MP4 file, replace with:
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/path-to-thumbnail.jpg"
                  >
                    <source src="/public/your-video.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  
                  3. For YouTube embed (less ideal for Russian market):
                  <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    className="w-full h-full"
                    allowFullScreen
                  />
                  
                  4. For VK Video:
                  <iframe 
                    src="https://vk.com/video_ext.php?oid=YOUR_OID&id=YOUR_ID&hash=YOUR_HASH" 
                    className="w-full h-full"
                    allowFullScreen
                  />
                */}
                
                {/* Video Placeholder - Remove this when you add actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/90 transition-colors">
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
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">2-8 недель</div>
                  <div className="text-sm text-muted-foreground">Время внедрения</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">₽8-12 млн</div>
                  <div className="text-sm text-muted-foreground">Годовая экономия</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Автоматизация процессов</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl font-bold text-primary">2-8 недель</div>
                  <div className="text-sm text-muted-foreground">Окупаемость</div>
                </div>
              </div>
            </div>
            
            {/* CTA Under VSL */}
            <div className="text-center mt-8">
              <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-primary to-accent">
                Получить персональный план автоматизации
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Бесплатная 30-минутная стратегическая сессия • Без обязательств
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                <Card key={i} className="border-destructive/20 bg-destructive/5">
                  <CardHeader>
                    <AlertCircle className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>{pain.title}</CardTitle>
                    <CardDescription>{pain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
          </div>
        </div>
      </section>

      {/* CTA After Problem */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы покончить с кошмаром ручной работы?</h3>
            <p className="text-muted-foreground mb-6">Посмотрите, как мы можем автоматизировать ваши главные болевые точки за 2-8 недель</p>
            <Button size="lg" onClick={() => openConsultationPopup()} className="bg-gradient-to-r from-primary to-accent">
              Получить бесплатный план автоматизации
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Лучший путь: спринт-внедрение ИИ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Не очередной консультант. Не очередной курс. Реальные ИИ-решения, построенные для вас, за недели, а не месяцы.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 1: Быстрое исследование</h3>
                <p className="text-muted-foreground">Мы анализируем ваши рабочие процессы, определяем возможности автоматизации и приоритизируем решения с максимальным ROI</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 2-4: Разработка и запуск</h3>
                <p className="text-muted-foreground">Наши ИИ-инженеры создают, тестируют и развертывают ваши индивидуальные автоматизации с участием вашей команды</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Неделя 4+: Масштабирование и оптимизация</h3>
                <p className="text-muted-foreground">Мы обеспечиваем внедрение, измеряем результаты и постоянно оптимизируем для максимального эффекта</p>
              </div>
            </div>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Почему спринты работают лучше традиционного консалтинга</CardTitle>
              </CardHeader>
              <CardContent>
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
          </div>
        </div>
      </section>

      {/* Our Process and Why It Works */}
      <section id="our-process" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Наш процесс: эксперты по ИИ и продуктам работают в идеальной гармонии
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Мы не исследователи ИИ, экспериментирующие с вашим бюджетом. Мы создатели продуктов, которые используют ИИ как инструмент для решения реальных бизнес-проблем.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Продуктовый подход</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Фокус на конечного пользователя:</strong> Каждая автоматизация создается с учетом ежедневной реальности вашей команды
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Разработка, ориентированная на производительность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <strong>Бизнес-KPI на первом месте:</strong> Успех измеряется вашими результатами, а не нашими технологическими демо
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Правильные ИИ-решения, а не модные словечки</CardTitle>
                <CardDescription className="text-lg">
                  Мы выбираем самую простую технологию, которая дает лучшие результаты для вашего конкретного случая
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                
                <div className="mt-8 space-y-4">
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
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle className="text-destructive">Что мы НЕ делаем</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                  <div className="flex items-start gap-2">
                    <span className="text-destructive text-xl">❌</span>
                    <div>Игнорируем вашу рабочую силу - мы проектируем для сотрудничества человека и ИИ, а не замены</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-primary">Что мы ДЕЛАЕМ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                    <div>Доставляем проверенный ROI, а не впечатляющие технологические демо</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Alert className="mt-8 border-primary bg-primary/10">
              <Sparkles className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Наше обещание:</strong> Каждая автоматизация, которую мы создаем, была проверена в B2B и B2C приложениях. Мы привносим продуктовую экспертизу и дизайн, ориентированный на пользователя, во внедрение ИИ, обеспечивая решения, которые ваша команда действительно примет и полюбит использовать.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Lead Magnet Feature Section with Cover Image */}
      <LeadMagnetFeatureSection onPDFDownload={openPDFDownload} />

      {/* Industries We Work With */}
      <section id="industries" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Отрасли, в которых мы специализируемся
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Мы успешно внедрили ИИ-автоматизацию в этих высокоэффективных отраслях
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                },
                {
                  title: "Профессиональные услуги",
                  description: "Онбординг клиентов, генерация предложений, управление проектами и автоматизация отчетности",
                  icon: "💼",
                  results: "Устранение административных издержек"
                },
                {
                  title: "Технологии",
                  description: "Автоматизация код-ревью, конвейеры тестирования, рабочие процессы успеха клиентов и обработка данных",
                  icon: "💻",
                  results: "Ускорение циклов развертывания"
                },
                {
                  title: "Образование",
                  description: "Оценка студентов, административные задачи, управление учебными программами и автоматизация коммуникаций",
                  icon: "🎓",
                  results: "Освобождение времени от оценивания"
                }
              ].map((industry, i) => (
                <Card key={i} className="h-full">
                  <CardHeader>
                    <div className="text-4xl mb-2">{industry.icon}</div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{industry.description}</p>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {industry.results}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Самые востребованные случаи автоматизации
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Вот что мы автоматизируем для клиентов каждую неделю
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
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
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
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
              
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">⚙️</div>
                    <div className="text-sm">Operations & Quality Control Image</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Операции и контроль качества</h3>
                <div className="space-y-4">
                  {[
                    { task: "Визуальный контроль качества и обнаружение дефектов", time: "99.7% точность" },
                    { task: "Управление запасами и повторный заказ", time: "30% снижение затрат" },
                    { task: "Мониторинг процессов и обработка исключений", time: "24/7 мониторинг" },
                    { task: "Генерация и распространение отчетов", time: "Мгновенные отчеты" },
                    { task: "Проверка соответствия и оповещения", time: "Ноль нарушений" }
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
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm">Analytics & Decision Making Image</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary">Аналитика и принятие решений</h3>
                <div className="space-y-4">
                  {[
                    { task: "Обнаружение мошенничества и оценка рисков", time: "90% снижение ложных срабатываний" },
                    { task: "Планирование предиктивного обслуживания", time: "₽40 млн экономии в год" },
                    { task: "Анализ рынка и выявление трендов", time: "Инсайты в реальном времени" },
                    { task: "Мониторинг производительности и оповещения", time: "Мгновенные уведомления" },
                    { task: "Оптимизация распределения ресурсов", time: "25% рост эффективности" }
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
            
            <Card className="border-primary bg-primary/5">
              <CardContent className="pt-6">
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Выберите ваш спринт трансформации ИИ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Каждый уровень разработан для различной сложности автоматизации и бизнес-потребностей
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Tier */}
              <Card className="relative">
                <CardHeader>
                  <Badge className="w-fit mb-2">2-недельный спринт</Badge>
                  <CardTitle className="text-2xl">Стартовый спринт</CardTitle>
                  <CardDescription>Простая автоматизация промптов для быстрых побед</CardDescription>
                  <div className="text-3xl font-bold mt-4">от ₽299,000</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
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
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => openConsultationPopup('starter')}
                  >
                    Начать со стартового
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Tier */}
              <Card className="relative border-primary">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white hover:bg-green-600">Самый популярный</Badge>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">4-недельный спринт</Badge>
                  <CardTitle className="text-2xl">Профессиональный спринт</CardTitle>
                  <CardDescription>ИИ-агенты и сложная автоматизация</CardDescription>
                  <div className="text-3xl font-bold mt-4">от ₽799,000</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
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
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => openConsultationPopup('professional')}
                  >
                    Выбрать профессиональный
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Tier */}
              <Card className="relative">
                <CardHeader>
                  <Badge className="w-fit mb-2">8-недельный спринт</Badge>
                  <CardTitle className="text-2xl">Корпоративный спринт</CardTitle>
                  <CardDescription>Полная трансформация ИИ</CardDescription>
                  <div className="text-3xl font-bold mt-4">Индивидуально</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
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
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => openConsultationPopup('enterprise')}
                  >
                    Обсудить корпоративный
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Alert className="mt-12 border-primary bg-primary/10">
              <Trophy className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Гарантия ROI:</strong> Если мы не доставим обещанный ROI в течение 90 дней, мы вернем полную стоимость спринта. Никакого риска, только результаты.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Рассчитайте вашу потенциальную экономию
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Посмотрите, сколько времени и денег вы можете сэкономить с ИИ-автоматизацией
            </p>
            
            <Card className="border-primary">
              <CardContent className="pt-6">
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
                
                <div className="bg-primary/10 rounded-lg p-6">
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
                
                <div className="mt-6 text-center">
                  <Button size="lg" onClick={() => openConsultationPopup()}>
                    Получить персонализированную оценку ROI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Познакомьтесь с вашими ИИ-партнерами
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Эксперты ИИ и разработчики продуктов, которые трансформировали 200+ компаний с помощью проверенных решений автоматизации
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Jake McMahon */}
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img 
                        src="/images/jakeprofile.png"
                        alt="Jake McMahon profile photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Jake McMahon</CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    Эксперт по ИИ-стратегии и внедрению
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    С 8+ летним опытом трансформации SaaS-компаний от хаоса данных к движкам роста, Джейк привносит проверенную экспертизу в аналитике, автоматизации и стратегическом внедрении.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Образование:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Высшая школа менеджмента СПбГУ
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Основная экспертиза:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ИИ-стратегия и планирование</Badge>
                      <Badge variant="outline">Автоматизация бизнес-процессов</Badge>
                      <Badge variant="outline">Аналитика данных</Badge>
                      <Badge variant="outline">Рост и масштабирование SaaS</Badge>
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
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Создал системы обнаружения платежного мошенничества и предсказания оттока с использованием продвинутых ML техник
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Vyacheslav */}
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img 
                        src="/images/vyacheslavprofile.PNG"
                        alt="Vyacheslav profile photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Вячеслав Разин</CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    Специалист по ИИ-исследованиям и глубокому обучению
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ведущий исследователь и практик ИИ из ННГУ, Вячеслав Разин специализируется на глубоком обучении, разработке моделей машинного обучения и продвинутых внедрениях ИИ. Регулярный спикер на ведущих ИИ-конференциях в России и Европе.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Образование:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Аспирантура в области ИИ/машинного обучения из ННГУ
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Основная экспертиза:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Глубокое обучение и нейросети</Badge>
                      <Badge variant="outline">Разработка ML моделей</Badge>
                      <Badge variant="outline">ИИ-исследования и инновации</Badge>
                      <Badge variant="outline">Продвинутые ИИ-архитектуры</Badge>
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
                      <li className="flex items-start gap-2">
                        <Trophy className="h-4 w-4 text-primary mt-0.5" />
                        Пионер в продвинутых ИИ-внедрениях
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Почему мы создали эту компанию</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Мы видели слишком много отличных предприятий, страдающих от ручных процессов, в то время как ИИ-решения оставались недоступными, сверхсложными или просто не работали как обещано.
                </p>
                <p className="text-muted-foreground text-center">
                  ИИ-индустрия была полна впечатляющих демо, которые не работали в продакшене, сложных архитектур, которые решали неправильные проблемы, и поставщиков, которые исчезали после внедрения.
                </p>
                <p className="text-lg font-semibold text-center">
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
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
                  className="bg-white text-primary hover:bg-white/90 hover:text-primary text-lg px-8 py-6 border-0"
                  onClick={() => openConsultationPopup()}
                  style={{ backgroundColor: 'white', color: 'hsl(var(--primary))' }}
                >
                  Забронировать стратегический звонок
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-6 bg-white/90"
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
        </div>
      </section>

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
    </div>
  );
};

export default AIAutomationSprintsRU;