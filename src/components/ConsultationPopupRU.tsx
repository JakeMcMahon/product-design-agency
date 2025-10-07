import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Clock, CheckCircle, X, AlertCircle, Loader2 } from "lucide-react";

interface ConsultationPopupRUProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const ConsultationPopupRU = ({ 
  isOpen, 
  onClose, 
  title = "Забронируйте бесплатную ИИ-консультацию",
  description = "Получите экспертное руководство по вашему ИИ-преобразованию. Наша команда проанализирует ваши потребности и предоставит практические рекомендации."
}: ConsultationPopupRUProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
    message: "",
    contactPreference: "",
    budget: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/backend/api';

  const industries = [
    "Юридические услуги",
    "Здравоохранение", 
    "Производство",
    "Финансовые услуги",
    "Недвижимость",
    "Электронная коммерция",
    "Логистика",
    "Технологии",
    "Образование",
    "Государственный сектор",
    "Другое"
  ];

  const challenges = [
    "Автоматизация обработки документов",
    "Анализ и проверка договоров", 
    "Контроль качества и инспекция",
    "Автоматизация поддержки клиентов",
    "Модерация контента",
    "Предиктивное обслуживание",
    "Обнаружение мошенничества",
    "Оптимизация процессов",
    "Анализ данных и аналитика",
    "Индивидуальное ИИ-решение",
    "Не уверен - нужна консультация"
  ];

  const budgetRanges = [
    "Менее ₽800K/месяц",
    "от ₽800K - ₽2M/месяц",
    "от ₽2M - ₽4M/месяц",
    "от ₽4M - ₽8M/месяц", 
    "от ₽8M+ /месяц",
    "Корпоративное решение"
  ];

  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push("Имя обязательно");
    if (!formData.email.trim()) errors.push("Email обязателен");
    if (!formData.company.trim()) errors.push("Название компании обязательно");
    if (!formData.industry) errors.push("Отрасль обязательна");
    if (!formData.challenge) errors.push("Вызов обязателен");
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Пожалуйста, введите корректный email адрес");
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/ai-consultation-booking.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success) {
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            industry: "",
            challenge: "",
            message: "",
            contactPreference: "",
            budget: ""
          });
          setError("");
          setValidationErrors([]);
          onClose();
        }, 4000);
      } else {
        if (data.details && Array.isArray(data.details)) {
          setValidationErrors(data.details);
        } else {
          setError(data.error || "Произошла ошибка при отправке запроса на консультацию");
        }
      }
    } catch (err) {
      console.error('Consultation booking error:', err);
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Не удается подключиться к серверу. Проверьте интернет-соединение и попробуйте снова.");
      } else {
        setError(err instanceof Error ? err.message : "Произошла неожиданная ошибка. Пожалуйста, попробуйте снова.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError("");
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl sm:text-2xl leading-tight">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <span className="block sm:hidden">ИИ-консультация</span>
            <span className="hidden sm:block">{title}</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-lg leading-snug">
            <span className="block sm:hidden">Получите экспертное руководство по ИИ-автоматизации</span>
            <span className="hidden sm:block">{description}</span>
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
            <p className="text-muted-foreground mb-4">
              Ваш запрос на консультацию успешно отправлен.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-green-800 mb-2">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">Что дальше?</span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Мы рассмотрим вашу информацию в течение 2 часов</li>
                <li>• Старший ИИ-стратег свяжется с вами в течение 24 часов</li>
                <li>• Мы запланируем вашу 30-минутную консультацию в удобное для вас время</li>
              </ul>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}
            
            {validationErrors.length > 0 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <ul className="list-disc list-inside">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
            {/* Mobile Essential Fields Only */}
            <div className="block sm:hidden space-y-4">
              <div>
                <Label htmlFor="popup-name-mobile-ru">Полное имя *</Label>
                <Input 
                  id="popup-name-mobile-ru"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ваше полное имя"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="popup-email-mobile-ru">Email адрес *</Label>
                <Input 
                  id="popup-email-mobile-ru"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="popup-company-mobile-ru">Название компании *</Label>
                <Input 
                  id="popup-company-mobile-ru"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Ваша компания"
                  required 
                />
              </div>
              <div>
                <Label htmlFor="popup-challenge-mobile-ru">Главная задача *</Label>
                <Select value={formData.challenge} onValueChange={(value) => handleInputChange("challenge", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Что хотите автоматизировать?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="document-processing">Обработка документов</SelectItem>
                    <SelectItem value="customer-support">Поддержка клиентов</SelectItem>
                    <SelectItem value="data-analysis">Анализ данных</SelectItem>
                    <SelectItem value="quality-control">Контроль качества</SelectItem>
                    <SelectItem value="custom-solution">Индивидуальное решение</SelectItem>
                    <SelectItem value="consultation-needed">Нужна консультация</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Desktop Full Form */}
            <div className="hidden sm:block space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="popup-name-ru">Полное имя *</Label>
                  <Input 
                    id="popup-name-ru"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Ваше полное имя"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="popup-email-ru">Email адрес *</Label>
                  <Input 
                    id="popup-email-ru"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="popup-company-ru">Название компании *</Label>
                  <Input 
                    id="popup-company-ru"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Ваша компания"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="popup-phone-ru">Номер телефона</Label>
                  <Input 
                    id="popup-phone-ru"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="popup-industry-ru">Отрасль *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вашу отрасль" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="popup-budget-ru">Бюджетный диапазон</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите бюджетный диапазон" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget} value={budget.toLowerCase().replace(/[₽\s+/-]/g, '')}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="popup-challenge-ru">Главный вызов *</Label>
                <Select value={formData.challenge} onValueChange={(value) => handleInputChange("challenge", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="В чем ваш главный вызов?" />
                  </SelectTrigger>
                  <SelectContent>
                    {challenges.map((challenge) => (
                      <SelectItem key={challenge} value={challenge.toLowerCase().replace(/\s+/g, '-')}>
                        {challenge}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="popup-message-ru">Детали проекта</Label>
                <Textarea 
                  id="popup-message-ru"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Расскажите больше о вашем проекте, текущих вызовах и том, чего вы хотите достичь с помощью ИИ-автоматизации..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="popup-contact-preference-ru">Предпочтительный способ связи</Label>
                <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange("contactPreference", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Как бы вы хотели, чтобы мы с вами связались?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Телефонный звонок</SelectItem>
                    <SelectItem value="video">Видеозвонок</SelectItem>
                    <SelectItem value="any">Любой способ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Планируем...
                  </>
                ) : (
                  <>
                    <span className="block sm:hidden">Забронировать консультацию</span>
                    <span className="hidden sm:block">Забронировать бесплатную консультацию</span>
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="w-full text-sm sm:text-base"
              >
                Отмена
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopupRU;