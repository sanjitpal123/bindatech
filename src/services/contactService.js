/**
 * Contact Submission Service
 * Isolated contact form handler with input validation and mock API payload routing
 */

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (formData.phone && !/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!formData.service) {
    errors.service = "Please select a service requirement.";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Please describe your project or inquiry (at least 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const submitContactForm = async (formData) => {
  // Validate input client-side first
  const validation = validateContactForm(formData);
  if (!validation.isValid) {
    throw { status: 'validation_error', errors: validation.errors };
  }

  // Simulate server latency (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Generate mock reference code
  const referenceId = `BT-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    referenceId,
    message: "Thank you for reaching out! A BindaTech technology specialist will get back to you within 24 hours.",
    submittedData: {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone?.trim() || "N/A",
      company: formData.company?.trim() || "N/A",
      service: formData.service,
      timestamp: new Date().toISOString()
    }
  };
};
