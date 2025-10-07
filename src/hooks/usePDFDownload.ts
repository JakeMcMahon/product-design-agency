import { useState } from "react";

interface PDFDownloadForm {
  name: string;
  email: string;
  company: string;
  industry: string;
}

export const usePDFDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<PDFDownloadForm>({
    name: "",
    email: "",
    company: "",
    industry: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openPDFDownload = () => {
    setIsOpen(true);
  };

  const closePDFDownload = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: ""
    });
  };

  const handleFormChange = (field: keyof PDFDownloadForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("PDF download form submitted:", formData);
    setIsSubmitted(true);
    
    // Simulate PDF download
    setTimeout(() => {
      // Create a dummy PDF download link
      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,'; // This would be your actual PDF data
      link.download = 'AI-Automation-Opportunities-Analysis.pdf';
      link.click();
      
      // Close the modal after download
      setTimeout(() => {
        closePDFDownload();
      }, 2000);
    }, 1000);
  };

  return {
    isOpen,
    formData,
    isSubmitted,
    openPDFDownload,
    closePDFDownload,
    handleFormChange,
    handleSubmit
  };
};