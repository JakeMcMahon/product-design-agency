import { useState } from "react";

interface SprintPDFDownloadForm {
  name: string;
  email: string;
  company?: string;
  industry?: string;
}

export const useSprintPDFDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<SprintPDFDownloadForm>({
    name: "",
    email: "",
    company: "",
    industry: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/backend/api';

  const openPDFDownload = () => {
    setIsOpen(true);
    setError("");
    setIsSubmitted(false);
  };

  const closePDFDownload = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setError("");
    setSuccessMessage("");
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: ""
    });
  };

  const handleFormChange = (field: keyof SprintPDFDownloadForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // For development/testing: skip API and go straight to PDF download
      if (import.meta.env.DEV || !API_BASE_URL || API_BASE_URL.includes('/backend/api')) {
        console.log('Development mode: skipping API call and downloading PDF directly');
        
        setIsSubmitted(true);
        setSuccessMessage('Success! Your PDF is ready for download.');
        
        // Direct PDF download
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/AI-Automation-Readiness-Assessment.pdf';
          link.download = 'AI-Automation-Readiness-Assessment.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 500);

        // Auto-close after successful submission
        setTimeout(() => {
          closePDFDownload();
        }, 3000);
        
        setIsSubmitting(false);
        return;
      }

      // Production API call
      const payload = {
        ...formData,
        submission_type: 'pdf_download'
      };

      const response = await fetch(`${API_BASE_URL}/ai-pdf-download.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to process PDF download');
      }

      if (result.success) {
        setIsSubmitted(true);
        setSuccessMessage(result.message || 'Success! Your PDF is ready for download.');
        
        // Handle the PDF download
        if (result.download_url) {
          // If we have a download URL, trigger the download
          const link = document.createElement('a');
          link.href = result.download_url;
          link.download = 'AI-Automation-Readiness-Assessment.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Fallback: create a placeholder PDF link
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/AI-Automation-Readiness-Assessment.pdf';
            link.download = 'AI-Automation-Readiness-Assessment.pdf';
            link.click();
          }, 1000);
        }

        // Track the conversion event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'sprint_pdf_download', {
            'event_category': 'lead_generation',
            'event_label': 'ai_automation_readiness_assessment',
            'value': 1
          });
        }

        // Auto-close after successful submission
        setTimeout(() => {
          closePDFDownload();
        }, 3000);

      } else {
        throw new Error(result.error || 'Download failed');
      }
    } catch (error) {
      console.error('Sprint PDF download error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSubmitted(false);
    setError("");
    setSuccessMessage("");
  };

  return {
    isOpen,
    formData,
    isSubmitted,
    isSubmitting,
    error,
    successMessage,
    openPDFDownload,
    closePDFDownload,
    handleFormChange,
    handleSubmit,
    reset
  };
};