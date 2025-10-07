import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = ({ onConsultationClick }: { onConsultationClick: () => void }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Watch: How AI Automation Transforms{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Businesses in 90 Days
            </span>
          </h2>
          
          {/* Video Placeholder */}
          <div className="relative mb-8 group">
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              {/* Placeholder background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              
              {/* Play button */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-xl">
                <Play className="h-12 w-12 text-primary ml-1" fill="currentColor" />
              </div>
              
              {/* Video info overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">3:42 - AI Transformation Demo</div>
                <div className="text-xs text-muted-foreground">Before/After • ROI Analysis • Client Success</div>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See real businesses transform their operations with our proven AI automation methodology. 
            Watch actual before/after scenarios, client testimonials, and live ROI calculations.
          </p>

          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300" onClick={onConsultationClick}>
            Book Strategy Call After Watching
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;