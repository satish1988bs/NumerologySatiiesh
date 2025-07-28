// Get admin WhatsApp number from localStorage or return default
export const getAdminWhatsAppNumber = (): string => {
  if (typeof window !== 'undefined') {
    const savedNumber = localStorage.getItem('admin_whatsapp_number');
    return savedNumber || '9742511764'; // Default number
  }
  return '9742511764'; // Fallback for server-side rendering
};

// Save admin WhatsApp number to localStorage
export const setAdminWhatsAppNumber = (number: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_whatsapp_number', number);
  }
};

// Format WhatsApp URL with admin number
export const getAdminWhatsAppURL = (message: string): string => {
  const adminNumber = getAdminWhatsAppNumber();
  return `https://wa.me/91${adminNumber}?text=${encodeURIComponent(message)}`;
};
