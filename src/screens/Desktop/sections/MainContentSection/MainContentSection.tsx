import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    id: "01",
    value: "87%",
    description: "of our products achieve product-market fit",
    width: "w-full",
    valueSize: "text-5xl sm:text-6xl",
  },
  {
    id: "02",
    value: "50+",
    description: "products launched successfully",
    width: "w-full",
    valueSize: "text-5xl sm:text-6xl",
  },
  {
    id: "03",
    value: "90 Days",
    description: "from idea to validated market fit",
    width: "w-full",
    valueSize: "text-4xl sm:text-5xl",
  },
  {
    id: "04",
    value: "$50M+",
    description: "funding raised for our clients",
    width: "w-full",
    valueSize: "text-4xl sm:text-5xl",
  },
  {
    id: "05",
    value: "Complete Framework",
    description: "From validation to scale we cover all stages",
    width: "w-full",
    valueSize: "text-4xl sm:text-5xl",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={stat.id}
              className={`${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''} rounded-lg sm:rounded-xl bg-neutral-100 border-0 translate-y-[-1rem] animate-fade-in opacity-0`}
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col items-start gap-2 sm:gap-3">
                  <div
                    className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-black ${
                      stat.id === '05' 
                        ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' 
                        : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    } tracking-tight leading-tight break-words`}
                  >
                    {stat.value}
                  </div>
                  
                  <p className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-[#666666] text-xs sm:text-sm md:text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};