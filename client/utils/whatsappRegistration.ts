interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  service: string;
  additionalNotes: string;
}

// Function to format registration data for WhatsApp message
export const formatWhatsAppMessage = (data: RegistrationData): string => {
  const serviceNames = {
    'name-numerology': 'Name Numerology',
    'birth-date-numerology': 'Birth Date Numerology',
    'kundali-matching': 'Kundali Matching',
    'comprehensive-reading': 'Comprehensive Reading'
  };

  const serviceName = serviceNames[data.service as keyof typeof serviceNames] || data.service;
  
  let message = `🔮 *NEW APPOINTMENT REQUEST* 🔮\n\n`;
  message += `👤 *Name:* ${data.fullName}\n`;
  message += `📧 *Email:* ${data.email}\n`;
  message += `📱 *Phone:* ${data.phone}\n\n`;
  message += `🎂 *Birth Details:*\n`;
  message += `📅 Date: ${data.dateOfBirth}\n`;
  if (data.timeOfBirth) {
    message += `⏰ Time: ${data.timeOfBirth}\n`;
  }
  message += `📍 Place: ${data.placeOfBirth}\n\n`;
  message += `🔍 *Service Required:* ${serviceName}\n\n`;
  if (data.additionalNotes) {
    message += `💬 *Notes:* ${data.additionalNotes}\n\n`;
  }
  message += `📅 *Submitted:* ${new Date().toLocaleString()}\n`;
  message += `\n✨ Please confirm the appointment time! ✨`;
  
  return message;
};

import { getAdminWhatsAppNumber } from './adminSettings';

// Function to send registration to WhatsApp (client-side only)
export const sendToWhatsApp = (data: RegistrationData): string => {
  const adminWhatsAppNumber = getAdminWhatsAppNumber();
  const whatsappMessage = formatWhatsAppMessage(data);
  const whatsappURL = `https://wa.me/91${adminWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp directly
  window.open(whatsappURL, '_blank');

  return whatsappURL;
};

// Validate registration data
export const validateRegistrationData = (data: RegistrationData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.fullName.trim()) errors.push('Full name is required');
  if (!data.email.trim()) errors.push('Email is required');
  if (!data.email.includes('@')) errors.push('Valid email is required');
  if (!data.phone.trim()) errors.push('Phone number is required');
  if (!data.dateOfBirth) errors.push('Date of birth is required');
  if (!data.placeOfBirth.trim()) errors.push('Place of birth is required');
  if (!data.service) errors.push('Service selection is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
