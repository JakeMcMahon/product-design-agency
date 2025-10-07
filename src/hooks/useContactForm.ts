import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  challenge: string;
  budget: string;
  message: string;
  contact_preference: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
  lead_id?: string;
  score?: number;
  error?: string;
  details?: string[];
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/backend/api';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
    budget: "",
    message: "",
    contact_preference: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError("");
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.company.trim()) errors.push("Company is required");
    if (!formData.industry) errors.push("Industry is required");
    if (!formData.challenge) errors.push("Challenge is required");
    if (!formData.message.trim()) errors.push("Message is required");
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/contact-form.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ContactFormResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      if (data.success) {
        setIsSubmitted(true);
        // Optional: Reset form after successful submission
        // setFormData({ name: "", email: "", company: "", phone: "", industry: "", challenge: "", budget: "", message: "", contact_preference: "" });
        return true;
      } else {
        if (data.details && Array.isArray(data.details)) {
          setValidationErrors(data.details);
        } else {
          setError(data.error || "An error occurred while submitting the form");
        }
        return false;
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Unable to connect to server. Please check your internet connection and try again.");
      } else {
        setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      challenge: "",
      budget: "",
      message: "",
      contact_preference: ""
    });
    setIsSubmitted(false);
    setError("");
    setValidationErrors([]);
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    validationErrors,
    handleInputChange,
    submitForm,
    resetForm
  };
};