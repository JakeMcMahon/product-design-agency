import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "WHAT WE DO", hasDropdown: true, href: "#process" },
  { label: "CASES", href: "#cases" },
  { label: "OUTCOMES", href: "#outcomes" },
  { label: "NEWS", href: "#news" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full min-h-[100vh] bg-[#111111] overflow-hidden">
      <div className="relative w-full min-h-[100vh] pb-8 sm:pb-12 md:pb-16">
        <img
          className="absolute w-full h-[456px] top-[-252px] left-1/2 transform -translate-x-1/2 scale-[1.16] max-w-none"
          alt="Ellipse"
          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/ellipse-1.svg"
        />

        <nav className="relative w-full h-[75px] top-0 left-0 z-10">
          <div className="flex items-center justify-between px-4 md:px-[90px] py-[29px]">
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
              <img
                className="w-24 md:w-[126px] h-3 md:h-4"
                alt="Link lazarev logo"
                src="https://c.animaapp.com/meoanmv4HLBh9Z/img/link---lazarev-logo.svg"
              />
            </div>

            <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <nav className="flex items-center gap-2">
                {navigationItems.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className="flex items-end gap-1.5">
                      <a 
                        href={item.href || "#"}
                        onClick={(e) => {
                          if (item.href && item.href.startsWith('#')) {
                            e.preventDefault();
                            const element = document.querySelector(item.href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }
                        }}
                        className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-xs md:text-sm tracking-[0] leading-[13.5px] cursor-pointer hover:text-[#4f5bff] transition-colors">
                        {item.label}
                      </a>
                      {item.hasDropdown && (
                        <img
                          className="w-3 h-3 md:w-[15px] md:h-[15px]"
                          alt="Dropdown"
                          src="https://c.animaapp.com/meoanmv4HLBh9Z/img/margin-5.svg"
                        />
                      )}
                    </div>
                    {index < navigationItems.length - 1 && (
                      <div className="w-[37.5px]" />
                    )}
                  </div>
                ))}
              </nav>

              <Button
                className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[13.2px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                variant="ghost"
                onClick={() => {
                  const footer = document.querySelector('#contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                LET'S TALK
              </Button>
            </div>
          </div>
        </nav>

        <main className="flex flex-col items-center gap-6 sm:gap-8 md:gap-9 relative top-[100px] sm:top-[120px] md:top-[140px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-[1176px] items-center gap-6 sm:gap-8 md:gap-9">
            <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <span className="block sm:hidden">Build Your New App, AI Feature<br />or User Flow in 90 Days or Less<br /><span className="text-[#4f5bff]">- Guaranteed</span></span>
              <span className="hidden sm:block">Build Your New App, AI Feature or User Flow<br />in 90 Days or Less <span className="text-[#4f5bff]">- Guaranteed</span></span>
            </h1>

            <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-sm md:text-base lg:text-lg tracking-[0.18px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] max-w-4xl px-4">
              <span className="text-white tracking-[0.03px]">Complete product development with AI integration, PostHog & Amplitude analytics, and growth systems. From concept to market in exactly 90 days.</span>
            </p>

            {/* Framework Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-4 sm:mt-6 md:mt-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <div className="text-center p-3 sm:p-4">
                <div className="text-[#4f5bff] text-xl sm:text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  🚀 RAPID
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  New products with AI & growth
                </div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-[#4f5bff] text-xl sm:text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  📈 SCALE
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Optimize existing products
                </div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-[#4f5bff] text-xl sm:text-2xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  🤖 SMART
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                  Add AI strategically
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <Button className="w-auto px-4 md:px-6 h-12 md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal tracking-[0] leading-tight transition-colors text-center">
                <span className="block sm:hidden">Choose Your Framework</span>
                <span className="hidden sm:block">Choose Your Framework: RAPID, SCALE, or SMART</span>
              </Button>

              <Button
                variant="ghost"
                className="w-auto px-4 md:px-6 h-12 md:h-[54px] bg-[#ffffff0f] hover:bg-[#ffffff1a] rounded-[10.8px] shadow-[0px_2.7px_8.1px_#00000040] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal tracking-[0] leading-tight transition-colors text-center"
              >
                <span className="block sm:hidden">Free Assessment</span>
                <span className="hidden sm:block">Take Our 30-Second Assessment</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] w-full">
              <div className="text-center p-2 sm:p-4">
                <div className="text-[#4f5bff] text-2xl sm:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  200+
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-tight">
                  complete products delivered
                </div>
              </div>
              <div className="text-center p-2 sm:p-4">
                <div className="text-[#4f5bff] text-2xl sm:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  150%
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-tight">
                  average business improvement
                </div>
              </div>
              <div className="text-center p-2 sm:p-4">
                <div className="text-[#4f5bff] text-2xl sm:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  Zero
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-tight">
                  integration failures
                </div>
              </div>
              <div className="text-center p-2 sm:p-4">
                <div className="text-[#4f5bff] text-2xl sm:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1 sm:mb-2">
                  90 Days
                </div>
                <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] leading-tight">
                  delivery guarantee
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 sm:mt-8 md:mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <img
              className="w-full max-w-[1200px] mx-auto"
              alt="Container"
              src="https://c.animaapp.com/meoanmv4HLBh9Z/img/container-5.svg"
            />
          </div>
        </main>
      </div>
    </header>
  );
};
