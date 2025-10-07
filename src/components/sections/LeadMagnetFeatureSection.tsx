import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, BookOpen, ArrowRight, Gift } from "lucide-react";

interface LeadMagnetFeatureSectionProps {
  onPDFDownload: () => void;
}

const LeadMagnetFeatureSection = ({ onPDFDownload }: LeadMagnetFeatureSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-6 py-2">
              <Gift className="mr-2 h-4 w-4" />
              Бесплатный ресурс
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Руководство по внедрению ИИ{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                с обложкой вашего lead magnet
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              5 паттернов автоматизации LLM, которые действительно работают
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Cover Image Placeholder */}
            <div className="text-center lg:text-left">
              <div className="relative">
                {/* Lead Magnet Cover Image */}
                <div className="w-96 h-[500px] mx-auto rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src="/images/lead-magnet-cover.png" 
                    alt="Руководство по внедрению ИИ - 5 паттернов автоматизации LLM"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  БЕСПЛАТНО
                </div>
                <div className="absolute -bottom-3 -left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  50+ компаний
                </div>
              </div>
            </div>

            {/* Right Column - Benefits and CTA */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Что вы получите:
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Точный фреймворк для выбора ИИ-подхода</div>
                    <div className="text-sm text-muted-foreground">Больше никаких догадок</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">72% снижение затрат</div>
                    <div className="text-sm text-muted-foreground">С простыми паттернами маршрутизации</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Реальные примеры</div>
                    <div className="text-sm text-muted-foreground">С фактическими метриками</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">4-этапная дорожная карта</div>
                    <div className="text-sm text-muted-foreground">От основ до продвинутого уровня</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white/80 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Компаний</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Рост продуктивности</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-lg py-6"
                onClick={onPDFDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Скачать руководство бесплатно
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                ✓ Мгновенная загрузка ✓ Без спама ✓ 1000+ компаний
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetFeatureSection;