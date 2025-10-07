/**
 * Domain utilities for dynamic domain detection
 * This ensures the app works regardless of the actual domain name
 */

/**
 * Get the current domain name from the browser
 */
export const getCurrentDomain = (): string => {
  // Check for environment variable first (allows override)
  const envDomain = import.meta.env.VITE_DOMAIN;
  if (envDomain) {
    return envDomain;
  }

  // In browser environment, get from window.location
  if (typeof window !== 'undefined') {
    return window.location.hostname;
  }

  // Fallback for SSR or build time
  return 'localhost';
};

/**
 * Get the full site URL with protocol
 */
export const getSiteUrl = (): string => {
  const envSiteUrl = import.meta.env.VITE_SITE_URL;
  if (envSiteUrl) {
    return envSiteUrl;
  }

  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  // Fallback
  return 'http://localhost:8080';
};

/**
 * Generate contact email for current domain
 */
export const getContactEmail = (): string => {
  const envEmail = import.meta.env.VITE_CONTACT_EMAIL;
  if (envEmail) {
    return envEmail;
  }

  const domain = getCurrentDomain();
  return `contact@${domain}`;
};

/**
 * Generate office emails for current domain
 */
export const getOfficeEmails = () => {
  const domain = getCurrentDomain();
  return {
    moscow: `moscow@${domain}`,
    nizhnyNovgorod: `nn@${domain}`,
    general: `contact@${domain}`
  };
};

/**
 * Check if we're in development mode
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV || getCurrentDomain().includes('localhost');
};