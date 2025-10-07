import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Logistics",
      company: "Fortune 500 Company",
      metric: "300% ROI in first year",
      quote: "The AI automation transformed our entire operation. We went from manual chaos to streamlined excellence.",
      duration: "4:32",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Operations Manager",
      company: "Global Manufacturing Corp",
      metric: "75% time savings on document processing",
      quote: "What used to take our team weeks now happens in hours. The accuracy is incredible.",
      duration: "3:18",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "Quality Manager",
      company: "Precision Industries",
      metric: "99% defect detection accuracy",
      quote: "We've eliminated human error in quality control. Our customers have never been happier.",
      duration: "2:45",
      rating: 5
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses sharing their transformation stories and the measurable results they achieved
          </p>
        </div>

        {/* Video Testimonial Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-muted to-secondary rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                      <Play className="h-6 w-6 text-primary ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {testimonial.duration}
                  </div>
                  
                  {/* Metric overlay */}
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="h-5 w-5 text-primary/40 mb-2" />
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/case-studies">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300">
              See More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;