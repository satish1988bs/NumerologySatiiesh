import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sendToWhatsApp, validateRegistrationData } from '@/utils/whatsappRegistration';
import { getAdminWhatsAppNumber } from '@/utils/adminSettings';

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

export default function RegisterAppointment() {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    service: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [adminWhatsApp, setAdminWhatsApp] = useState('9742511764');

  // Load admin WhatsApp number from localStorage
  useEffect(() => {
    setAdminWhatsApp(getAdminWhatsAppNumber());
  }, []);

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Validate form data
      const validation = validateRegistrationData(formData);

      if (!validation.isValid) {
        setSubmitMessage(`❌ Please fix the following errors:\n${validation.errors.join('\n')}`);
        setIsSubmitting(false);
        return;
      }

      // Send to WhatsApp directly
      setSubmitMessage('✅ Opening WhatsApp to send your appointment request...');

      setTimeout(() => {
        sendToWhatsApp(formData);

        setSubmitMessage('✅ WhatsApp opened! Please send the message to confirm your appointment.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          timeOfBirth: '',
          placeOfBirth: '',
          service: '',
          additionalNotes: ''
        });

        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      setSubmitMessage('❌ Error opening WhatsApp. Please try again.');
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hi, I would like to book an appointment for numerology consultation.");
  const whatsappUrl = `https://wa.me/91${adminWhatsApp}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                Satiiesh<span className="text-teal-500">🧿</span>Numerology
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/register"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
              >
                REGISTER APPOINTMENT
              </Link>
              <Link
                to="/admin"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                ADMIN
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Book Your Consultation
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover the power of your name and numbers
          </p>
        </div>
      </section>

      {/* Top Ad Banner */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-6683668028356246"
               data-ad-slot="1111111111"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Register for Appointment
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Fill in your details to book a consultation
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Birth Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeOfBirth">Time of Birth</Label>
                      <Input
                        id="timeOfBirth"
                        type="time"
                        value={formData.timeOfBirth}
                        onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="placeOfBirth">Place of Birth *</Label>
                    <Input
                      id="placeOfBirth"
                      type="text"
                      value={formData.placeOfBirth}
                      onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Service Required</h3>
                  
                  <div>
                    <Label htmlFor="service">Select Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name-numerology">Name Numerology</SelectItem>
                        <SelectItem value="birth-date-numerology">Birth Date Numerology</SelectItem>
                        <SelectItem value="kundali-matching">Kundali Matching</SelectItem>
                        <SelectItem value="comprehensive-reading">Comprehensive Reading</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      className="mt-1"
                      placeholder="Any specific questions or requirements..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div className="text-center p-3 rounded-lg bg-gray-100">
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Register Appointment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pre-Contact Ad Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-6683668028356246"
               data-ad-slot="2222222222"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us directly on WhatsApp for quick consultation
          </p>
          
          <div className="space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp: +91 {adminWhatsApp}
            </a>
            
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Our Services:</p>
              <p>• Kundali Matching • Name Numerology • Birth Date Numerology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Calculator */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Name Calculator
          </Link>
        </div>
      </section>
    </div>
  );
}
