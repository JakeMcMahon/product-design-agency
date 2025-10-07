import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainWrapperSection = (): JSX.Element => {
  const testimonials = [
  {
    id: "01",
    quote:
      "From idea to $500K seed round in 90 days. Their product audit revealed opportunities we never would have found ourselves.",
    name: "Sarah Mitchell",
    company: "HealthTech Solutions",
  },
  {
    id: "02",
    quote:
      "Spent 8 months with freelance developers. Nothing worked. These guys rebuilt everything in 6 weeks with perfect product-market fit.",
    name: "Michael Rodriguez",
    company: "FinScale",
  },
  {
    id: "03",
    quote:
      "Their user research approach was brilliant. They talked us out of complex features and built something simple that users actually wanted.",
    name: "Jennifer Thompson",
    company: "EduGrowth",
  },
  {
    id: "04",
    quote:
      "The growth mechanisms they built changed the game. Our product now attracts 40% new customers organically every month.",
    name: "David Chen",
    company: "RetailBoost",
  },
];

  return (
    <section className="w-full bg-[#111111] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Header Section */}
          <div className="w-full lg:w-5/12">
            <div className="mb-4">
              <span className="text-xs sm:text-sm text-white/60 uppercase tracking-wider [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                CLIENT TESTIMONIALS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
              Don't take our word for it
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-relaxed">
              See how we've helped founders turn ideas into profitable,
              user-loved products with perfect product-market fit.
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="w-full bg-[#1f1f1f] border-none rounded-lg sm:rounded-2xl"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="text-xs text-white/40 mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                    / {testimonial.id}
                  </div>

                  <blockquote className="text-sm sm:text-base lg:text-lg xl:text-xl text-white mb-4 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarFallback className="bg-white/10 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="text-sm sm:text-base text-white [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-white/60 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};