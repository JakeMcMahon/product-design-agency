import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, CheckCircle, FileText, Gift, BookOpen, Target, TrendingDown, BarChart3, Map, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

interface PDFDownloadPopupRUProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    company: string;
    industry: string;
  };
  isSubmitted: boolean;
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PDFDownloadPopupRU = ({ 
  isOpen, 
  onClose, 
  formData,
  isSubmitted,
  onFormChange,
  onSubmit
}: PDFDownloadPopupRUProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  
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

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setCurrentStep(2);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  const goBackToStep1 = () => {
    setCurrentStep(1);
  };

  const handleClose = () => {
    setCurrentStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-2xl leading-tight">
              <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <span className="block sm:hidden">Руководство по внедрению ИИ</span>
              <span className="hidden sm:block">Получите руководство по внедрению ИИ, которое помогло 50+ компаниям достичь 30% роста продуктивности</span>
            </DialogTitle>
            {!isSubmitted && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</span>
                <div className={`w-8 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</span>
              </div>
            )}
          </div>
          <DialogDescription className="text-sm sm:text-lg leading-snug">
            <span className="block sm:hidden">5 паттернов автоматизации LLM</span>
            <span className="hidden sm:block">Бесплатная загрузка: 5 паттернов автоматизации LLM, которые действительно работают</span>
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Скачивание началось!</h3>
            <p className="text-muted-foreground mb-4">
              Ваше руководство по внедрению ИИ скачивается. Проверьте папку загрузок.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-blue-800 mb-2">
                <FileText className="h-4 w-4" />
                <span className="font-semibold">Что вы получите:</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Точный фреймворк для выбора правильного ИИ-подхода</li>
                <li>• Как достичь 72% снижения затрат с простыми паттернами маршрутизации</li>
                <li>• Реальные примеры с фактическими метриками из рабочих систем</li>
                <li>• 4-этапная дорожная карта внедрения от основ до продвинутого уровня</li>
              </ul>
            </div>
          </div>
        ) : currentStep === 1 ? (
          /* Step 1: Email Capture */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-4 sm:gap-6">
              {/* Lead Magnet Cover Image */}
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="w-40 sm:w-60 md:w-full h-48 sm:h-72 md:h-80 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/images/lead-magnet-cover.png" 
                    alt="Руководство по внедрению ИИ - 5 паттернов автоматизации LLM"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Benefits Section */}
              <div className="bg-primary/5 p-3 sm:p-4 rounded-lg order-1 md:order-2">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <FileText className="h-4 w-4 text-primary" />
                  Что вы изучите:
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-start gap-2">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-tight">Точный фреймворк для выбора правильного ИИ-подхода</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-tight">72% снижение затрат с простыми паттернами</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-tight">Реальные примеры с фактическими метриками</span>
                  </div>
                  <div className="flex items-start gap-2 sm:hidden">
                    <Map className="h-3 w-3 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs leading-tight">4-этапная дорожная карта</span>
                  </div>
                  <div className="hidden sm:flex items-start gap-2">
                    <Map className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-tight">4-этапная дорожная карта внедрения от основ до продвинутого уровня</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                    <CheckCircle className="h-4 w-4" />
                    <span>1000+ загрузок за последний месяц</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleStep1Submit} className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold mb-2">Получить мгновенный доступ</h3>
                <p className="text-sm text-muted-foreground">Введите ваш email для скачивания руководства</p>
              </div>
              
              <div>
                <Label htmlFor="pdf-email-step1-ru">Email адрес *</Label>
                <Input 
                  id="pdf-email-step1-ru"
                  type="email"
                  value={formData.email}
                  onChange={(e) => onFormChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required 
                  className="text-center sm:text-left"
                />
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-sm sm:text-base h-12"
                  disabled={!formData.email}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Получить мгновенный доступ
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="w-full text-sm sm:text-base"
                >
                  Отмена
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Бесплатно • Без спама • Отписка в один клик
              </p>
            </form>
          </div>
        ) : (
          /* Step 2: Profile Details */
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Почти готово!</h3>
              <p className="text-sm text-muted-foreground">Несколько деталей для персонализации контента</p>
            </div>

            <form onSubmit={handleStep2Submit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="pdf-name-step2-ru">Полное имя *</Label>
                  <Input 
                    id="pdf-name-step2-ru"
                    value={formData.name}
                    onChange={(e) => onFormChange("name", e.target.value)}
                    placeholder="Ваше полное имя"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="pdf-company-step2-ru">Название компании *</Label>
                  <Input 
                    id="pdf-company-step2-ru"
                    value={formData.company}
                    onChange={(e) => onFormChange("company", e.target.value)}
                    placeholder="Ваша компания"
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="pdf-industry-step2-ru">Отрасль</Label>
                  <Select value={formData.industry} onValueChange={(value) => onFormChange("industry", value)}>
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
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-sm sm:text-base h-12"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Скачать руководство
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={goBackToStep1}
                  className="w-full text-sm sm:text-base"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Назад
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Мы уважаем вашу приватность. Ваша информация будет использоваться только для отправки соответствующих материалов по ИИ-автоматизации.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFDownloadPopupRU;