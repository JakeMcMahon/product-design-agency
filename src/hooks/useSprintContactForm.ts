import { useState } from "react";

interface SprintContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role?: string;
  company_size?: string;
  sprint_tier?: string;
  current_processes?: string;
  desired_timeline?: string;
}

export const useSprintContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/backend/api';

  const submitContactForm = async (data: SprintContactFormData) => {
    setIsSubmitting(true);
    setError("");
    
    try {
      const payload = {
        ...data,
        submission_type: 'contact_form'
      };

      const response = await fetch(`${API_BASE_URL}/sprint-submission.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit contact form');
      }

      if (result.success) {
        setIsSubmitted(true);
        setSuccessMessage(result.message || 'Thank you! Your requirements have been submitted.');
        
        // Track the conversion event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'sprint_contact_form', {
            'event_category': 'lead_generation',
            'event_label': data.sprint_tier || 'general',
            'value': 1
          });
        }
        
        return result;
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Sprint contact form submission error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
      throw error;
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
    isSubmitting,
    isSubmitted,
    error,
    successMessage,
    submitContactForm,
    reset
  };
};