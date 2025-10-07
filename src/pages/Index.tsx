import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import PDFDownloadPopup from "@/components/PDFDownloadPopup";
import { useConsultationPopup } from "@/hooks/useConsultationPopup";
import { usePDFDownload } from "@/hooks/usePDFDownload";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import LeadMagnetFeatureSection from "@/components/sections/LeadMagnetFeatureSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyItWorksSection from "@/components/sections/WhyItWorksSection";
import ServicesPreviewSection from "@/components/sections/ServicesPreviewSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  const { isOpen, popupConfig, openConsultationPopup, closeConsultationPopup } = useConsultationPopup();
  const { 
    isOpen: isPDFOpen, 
    formData: pdfFormData, 
    isSubmitted: isPDFSubmitted,
    openPDFDownload, 
    closePDFDownload,
    handleFormChange: handlePDFFormChange,
    handleSubmit: handlePDFSubmit
  } = usePDFDownload();

  return (
    <div className="min-h-screen">
      <Header onConsultationClick={openConsultationPopup} />
      <main>
        <HeroSection onConsultationClick={openConsultationPopup} />
        <VideoSection onConsultationClick={openConsultationPopup} />
        <ProblemSection />
        <SolutionSection />
        <IndustriesSection />
        <TestimonialsSection />
        <LeadMagnetFeatureSection onPDFDownload={openPDFDownload} />
        <LeadMagnetSection onPDFDownload={openPDFDownload} />
        <ProcessSection />
        <WhyItWorksSection />
        <ServicesPreviewSection />
        <PricingPreviewSection onConsultationClick={openConsultationPopup} />
        <FinalCTASection onConsultationClick={openConsultationPopup} onPDFDownload={openPDFDownload} />
      </main>
      <Footer />
      <ConsultationPopup 
        isOpen={isOpen} 
        onClose={closeConsultationPopup}
        title={popupConfig.title}
        description={popupConfig.description}
      />
      <PDFDownloadPopup
        isOpen={isPDFOpen}
        onClose={closePDFDownload}
        formData={pdfFormData}
        isSubmitted={isPDFSubmitted}
        onFormChange={handlePDFFormChange}
        onSubmit={handlePDFSubmit}
      />
    </div>
  );
};

export default Index;
