import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu } from "lucide-react";
import ConsultationPopupRU from "../../../../components/ConsultationPopupRU";
import { useSprintContactForm } from "../../../../hooks/useSprintContactForm";
import MobileNavigation from "../../../../components/MobileNavigation";
import { useIsMobile } from "../../../../hooks/use-mobile";

const navigationItems = [
  { label: "SERVICES", hasDropdown: true, href: "#process" },
  { label: "CASES", href: "#cases" },
  { label: "RESULTS", href: "#outcomes" },
  { label: "PRICING", href: "#pricing" },
  { label: "ABOUT", href: "#about" },
];

interface HeaderSectionRUProps {
  customTitle?: string;
  customSubtitle?: string;
  customCTA?: string;
  isCompact?: boolean;  // For SEO pages with reduced mobile spacing
}

export const HeaderSectionRU = ({ customTitle, customSubtitle, customCTA, isCompact = false }: HeaderSectionRUProps = {}): JSX.Element => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="relative w-full bg-[#111111] overflow-hidden min-h-[120vh] sm:min-h-[110vh] md:min-h-screen">
        <div className={`relative w-full h-full ${isCompact ? 'pb-8 md:pb-12' : 'pb-20 md:pb-16'}`}>
          <img
            className="absolute w-full h-[456px] top-[-252px] left-1/2 transform -translate-x-1/2 scale-[1.16] max-w-none"
            alt="Ellipse"
            src="https://c.animaapp.com/meoanmv4HLBh9Z/img/ellipse-1.svg"
          />

          <nav className="absolute w-full h-[75px] top-0 left-0 z-10">
            <div className="flex items-center justify-between px-4 md:px-[90px] py-[29px]">
              <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] px-2">
                <div className="text-white text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] truncate">
                  Product Design Agency
                </div>
              </div>

              {/* Desktop Navigation */}
              {!isMobile && (
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
                            className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white/90 text-xs md:text-sm tracking-[0] leading-[13.5px] cursor-pointer hover:text-white hover:bg-[#4f5bff]/20 hover:shadow-[0_0_10px_rgba(79,91,255,0.3)] px-2 md:px-3 py-2 rounded-md transition-all duration-200 ease-in-out">
                            {item.label}
                          </a>
                          {item.hasDropdown && (
                            <div className="w-3 h-3 md:w-[15px] md:h-[15px] text-white text-xs">▼</div>
                          )}
                        </div>
                        {index < navigationItems.length - 1 && (
                          <div className="w-6 md:w-[37.5px]" />
                        )}
                      </div>
                    ))}
                  </nav>

                  <Button
                    className="h-9 md:h-[38px] px-4 md:px-6 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm md:text-[14px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors whitespace-nowrap"
                    variant="ghost"
                    onClick={openConsultationPopup}
                  >
                    START
                  </Button>
                </div>
              )}

              {/* Mobile Navigation */}
              {isMobile && (
                <div className="flex items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                  <Button
                    className="h-9 px-4 bg-[#ffffff14] hover:bg-[#ffffff20] rounded-full text-white text-sm font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] tracking-[0] leading-[13.5px] transition-colors mr-2 whitespace-nowrap"
                    variant="ghost"
                    onClick={openConsultationPopup}
                  >
                    START
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    onClick={toggleMobileMenu}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>
          </nav>

          <main className="flex flex-col items-center gap-6 md:gap-9 absolute top-[80px] md:top-[180px] left-1/2 transform -translate-x-1/2 w-full max-w-[1260px] px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
            <div className="flex flex-col w-full max-w-[1176px] items-center gap-6 md:gap-9">
              <div className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-base md:text-lg tracking-[0.36px] leading-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <span className="text-neutral-100 tracking-[0.06px]">
                  Product Design Agency /
                </span>
                <span className="text-[#666666] tracking-[0.06px]">/</span>
                <span className="text-[#3d3d3d] tracking-[0.06px]">/</span>
                <span className="text-neutral-100 tracking-[0.06px]">
                  {"  "}Global
                </span>
              </div>

              <h1 className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                {customTitle || (
                  <>
                    <span className="block sm:hidden">Transform Your Product<br />Vision into Market Reality</span>
                    <span className="hidden sm:block">Transform Your Product <br />Vision into Market Reality</span>
                  </>
                )}
              </h1>

              <p className="text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal text-sm md:text-base lg:text-lg tracking-[0.18px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] max-w-4xl px-4">
                {customSubtitle ? (
                  <span className="text-white tracking-[0.03px]">{customSubtitle}</span>
                ) : (
                  <>
                    <span className="block sm:hidden text-white">
                      From idea to validated <span className="text-[#4f5bff]">product-market fit</span> in 90 days. <span className="text-[#4f5bff]">Here's the transformation</span> you'll experience working with us.
                    </span>
                    <span className="hidden sm:block">
                      <span className="text-white tracking-[0.03px]">From idea to validated </span>
                      <span className="text-[#4f5bff] tracking-[0.03px]">product-market fit in 90 days</span>
                      <span className="text-white tracking-[0.03px]">. Here's the transformation you'll experience working with us - from initial </span>
                      <span className="text-[#4f5bff] tracking-[0.03px]">validation</span>
                      <span className="text-white tracking-[0.03px]"> to </span>
                      <span className="text-[#4f5bff] tracking-[0.03px]">scaled success</span>
                      <span className="text-white tracking-[0.03px]">.</span>
                    </span>
                  </>
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[10.8px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                <Button 
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-[#4f5bff] hover:bg-[#3d47cc] hover:shadow-[0_0_20px_rgba(79,91,255,0.4)] rounded-[10.8px] shadow-[0px_4px_16px_rgba(79,91,255,0.3)] text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold tracking-[0] leading-tight transition-all duration-200 transform hover:scale-105 text-center"
                  onClick={openConsultationPopup}
                >
                  {customCTA || (
                    <>
                      <span className="block sm:hidden">Free Audit</span>
                      <span className="hidden sm:block">Book Your Free Product Audit</span>
                    </>
                  )}
                </Button>

                <Button
                  variant="ghost"
                  className="w-full sm:w-auto px-4 md:px-6 h-[48px] md:h-[54px] bg-transparent hover:bg-[#ffffff1a] rounded-[10.8px] border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm md:text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-normal tracking-[0] leading-tight transition-all duration-200 text-center"
                  onClick={openConsultationPopup}
                >
                  <span className="block sm:hidden">Guide</span>
                  <span className="hidden sm:block">Download Product Strategy Guide</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-8 md:mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                <div className="text-center">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    50+
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Products Launched
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    $50M+
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Funding Raised for Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    87%
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    PMF Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[#4f5bff] text-2xl md:text-3xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] mb-1">
                    5+ Years
                  </div>
                  <div className="text-white/80 text-xs md:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                    Avg. Team Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] mb-8">
              <div className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-r from-[#4f5bff]/20 to-[#3d47cc]/20 rounded-2xl border border-[#4f5bff]/30 flex items-center justify-center">
                <div className="text-white/60 text-base sm:text-lg md:text-xl [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] px-4 text-center">
                  Product Vision Preview
                </div>
              </div>
            </div>
          </main>
        </div>
      </header>

      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Book Your Free Product Audit"
        description="Schedule a 30-minute strategic call to discuss your product development needs"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
      
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};