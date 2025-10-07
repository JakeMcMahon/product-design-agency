import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Helper function to render text with bold formatting
const renderTextWithBold = (text: string) => {
  const parts = text.split('\n\n');
  return parts.map((part, index) => {
    if (index === 1) {
      // Second part (after double newline) should be bold
      return (
        <span key={index} className="font-bold text-[#111111]">
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  }).reduce((acc, curr, index) => {
    if (index === 0) return [curr];
    return [...acc, <br key={`br-${index}`} />, <br key={`br2-${index}`} />, curr];
  }, [] as React.ReactNode[]);
};

const problemStatements = [
  {
    label: "🤯 I HAVE AN IDEA BUT DON'T KNOW WHERE TO START",
    description: "You have a business. You know that product design can transform everything. But every specialist quotes millions and timelines in years. Every solution seems critical. You're paralyzed by choice - Should I build a mobile app or web app? Which tech stack to choose?\n\nWe've guided 50+ companies through this maze. Our free audit gives you a clear roadmap in 48 hours.",
    labelColor: "text-[#4f5bff]",
  },
  {
    label: "💸 SPENDING MONEY ON IT BUT SEEING NO RESULTS",
    description: "Three months ago you hired developers. They seemed like good people. Send weekly reports. But you still don't see a working product. Budget evaporating. Stakeholders asking tough questions. You're starting to panic.\n\nWe've rescued 12 projects this year alone. Our process guarantees a working product with PMF in 90 days or we work for free.",
    labelColor: "text-[#4f5bff]",
  },
  {
    label: "😰 DEVELOPERS DISAPPEARED WITH MY PRODUCT",
    description: "Freelancers seemed professional. Price was right. Then communication broke down. Now they're gone. You're not even sure if you own the code or how to access it. Starting over feels like a disaster.\n\nEvery line of code we write belongs to you from day one. We've helped founders recover from this nightmare.",
    labelColor: "text-[#4f5bff]",
  },
  {
    label: "🎯 LAUNCHED MY PRODUCT BUT NO ONE IS USING IT",
    description: "You followed the advice. Launched your product with fanfare. Got a few likes. Then... silence. Your beautiful solution sits idle. You have no idea why users aren't engaging with it.\n\nThat's why we validate with real users before launching. 87% of our products achieve daily active usage.",
    labelColor: "text-[#4f5bff]",
  },
  {
    label: "🔄 STUCK IN ENDLESS REVISIONS",
    description: "Version 14 of the interface. Fifth redesign of the workflow. Your team keeps iterating but never ships. Perfection has become the enemy of progress. Meanwhile competitors are capturing your market.\n\nOur 90-day sprint structure forces movement. Ship fast, learn faster, iterate based on data.",
    labelColor: "text-[#4f5bff]",
  },
  {
    label: "🤖 EVERYONE TALKS ABOUT DESIGN BUT I DON'T UNDERSTAND HOW",
    description: "Your investors expect great design. Competitors claim amazing UX. But nobody can explain what design really means for YOUR product. You're afraid of looking outdated but even more afraid of wasting money on buzzwords.\n\nWe've launched 50+ successful products. We'll honestly tell you if you need design help (many don't) and implement it properly if you do.",
    labelColor: "text-[#4f5bff]",
  },
];

const costCards = [
  {
    title: "$500K-$1M",
    description: "Lost revenue without product-market fit",
    number: "/001",
  },
  {
    title: "Daily",
    description: "Competitors pulling ahead",
    number: "/002",
  },
  {
    title: "Harder",
    description: "Attracting investment without design strategy",
    number: "/003",
  },
  {
    title: "Personal",
    description: "Sleepless nights & stress from falling behind",
    number: "/004",
  },
];

export const SectionWrapper = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Heading */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] leading-tight">
              We know exactly what you're going through
            </h2>
          </div>

          {/* Problem Statements */}
          <div className="w-full lg:w-2/3 space-y-8 sm:space-y-12">
            {problemStatements.map((statement, index) => (
              <div
                key={index}
                className={`space-y-4 translate-y-[-1rem] animate-fade-in opacity-0`}
                style={{ "--animation-delay": `${200 + index * 100}ms` } as React.CSSProperties}
              >
                <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${statement.labelColor} [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-wide`}>
                  {statement.label}
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-[#111111] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-relaxed">
                  {renderTextWithBold(statement.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Cards Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] text-center mb-8 sm:mb-12 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
            The real cost of these problems
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costCards.map((card, index) => (
              <Card
                key={index}
                className="bg-neutral-100 border-0 rounded-lg"
              >
                <CardContent className="p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3 [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                    {card.title}
                  </div>
                  <p className="text-sm text-[#666666] mb-2 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] leading-relaxed whitespace-pre-line">
                    {card.description}
                  </p>
                  <div className="text-xs text-neutral-400 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                    {card.number}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl lg:text-2xl text-[#111111] mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
            We understand. Let's fix this together.
          </p>
          <button className="bg-[#4f5bff] hover:bg-[#3d47cc] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold transition-colors">
            Get Free Audit →
          </button>
        </div>
      </div>
    </section>
  );
};