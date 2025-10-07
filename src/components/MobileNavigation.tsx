import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ConsultationPopupRU from "@/components/ConsultationPopupRU";
import { useSprintContactForm } from "@/hooks/useSprintContactForm";

const navigationItems = [
  { label: "SERVICES", hasDropdown: true, href: "#process" },
  { label: "CASES", href: "#cases" },
  { label: "RESULTS", href: "#outcomes" },
  { label: "PRICING", href: "#pricing" },
  { label: "ABOUT", href: "#about" },
];

const MobileNavigation = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  const {
    isSubmitting: isContactSubmitting,
    isSubmitted: isContactSubmitted,
    error: contactError,
    successMessage: contactSuccessMessage,
    submitContactForm
  } = useSprintContactForm();

  const openConsultationPopup = () => {
    setIsConsultationOpen(true);
    onClose(); // Close mobile menu when opening consultation
  };

  const closeConsultationPopup = () => {
    setIsConsultationOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#111111] shadow-xl">
            <div className="flex h-full flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <div className="text-white text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                  AI Automation Solutions
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href || "#"}
                      onClick={(e) => {
                        if (item.href && item.href.startsWith('#')) {
                          e.preventDefault();
                          onClose(); // Close menu when navigating
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      }}
                      className="flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      {item.hasDropdown && (
                        <span className="text-white/50">▼</span>
                      )}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* CTA Button at bottom */}
              <div className="border-t border-gray-800 p-6">
                <Button
                  className="w-full h-[48px] bg-[#4f5bff] hover:bg-[#3d47cc] rounded-full text-white text-[16px] font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] transition-colors"
                  onClick={openConsultationPopup}
                >
                  START
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ConsultationPopupRU
        isOpen={isConsultationOpen}
        onClose={closeConsultationPopup}
        title="Book Your AI Automation Sprint"
        description="Schedule a 30-minute strategic call to discuss your automation needs"
        onSubmit={submitContactForm}
        isSubmitting={isContactSubmitting}
        isSubmitted={isContactSubmitted}
        error={contactError}
        successMessage={contactSuccessMessage}
      />
    </>
  );
};

export default MobileNavigation;