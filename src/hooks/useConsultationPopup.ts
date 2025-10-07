import { useState } from "react";

export const useConsultationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    title: "Schedule Your Free AI Strategy Consultation",
    description: "Get expert guidance on your AI transformation journey. Our team will analyze your needs and provide actionable recommendations."
  });

  const openConsultationPopup = (config?: {
    title?: string;
    description?: string;
  }) => {
    if (config) {
      setPopupConfig({
        title: config.title || popupConfig.title,
        description: config.description || popupConfig.description
      });
    }
    setIsOpen(true);
  };

  const closeConsultationPopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    popupConfig,
    openConsultationPopup,
    closeConsultationPopup
  };
};