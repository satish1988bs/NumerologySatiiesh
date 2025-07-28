import { RequestHandler } from "express";

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  service: string;
  additionalNotes: string;
  submittedAt: string;
}

// Function to format registration data for WhatsApp message
const formatWhatsAppMessage = (data: RegistrationData): string => {
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
  message += `📅 *Submitted:* ${new Date(data.submittedAt).toLocaleString()}\n`;
  message += `\n✨ Please confirm the appointment time! ✨`;

  return message;
};

export const handleRegisterAppointment: RequestHandler = (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      service,
      additionalNotes,
      submittedAt
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !dateOfBirth || !placeOfBirth || !service) {
      return res.status(400).json({
        error: 'Missing required fields: fullName, email, phone, dateOfBirth, placeOfBirth, service'
      });
    }

    // Create registration object
    const registration: RegistrationData = {
      fullName,
      email,
      phone,
      dateOfBirth,
      timeOfBirth: timeOfBirth || '',
      placeOfBirth,
      service,
      additionalNotes: additionalNotes || '',
      submittedAt: submittedAt || new Date().toISOString()
    };

    // Format message for WhatsApp
    const whatsappMessage = formatWhatsAppMessage(registration);
    const adminWhatsAppNumber = "9742511764";
    const whatsappURL = `https://wa.me/91${adminWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    console.log(`New appointment registration: ${fullName} (${email}) - ${service}`);
    console.log(`WhatsApp URL: ${whatsappURL}`);

    res.status(200).json({
      success: true,
      message: 'Registration successful! Please confirm on WhatsApp.',
      whatsappURL: whatsappURL,
      registrationData: registration
    });

  } catch (error) {
    console.error('Error processing registration:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};

// Remove the get registrations endpoint since we're not storing data
export const handleGetRegistrations: RequestHandler = (req, res) => {
  res.status(200).json({
    message: 'Registrations are sent directly to WhatsApp: +91 9742511764',
    whatsappLink: 'https://wa.me/919742511764'
  });
};
