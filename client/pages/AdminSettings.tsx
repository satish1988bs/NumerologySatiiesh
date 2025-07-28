import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function AdminSettings() {
  const [whatsappNumber, setWhatsappNumber] = useState('9742511764');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  // Load WhatsApp number from localStorage on component mount
  useEffect(() => {
    const savedNumber = localStorage.getItem('admin_whatsapp_number');
    if (savedNumber) {
      setWhatsappNumber(savedNumber);
    }
  }, []);

  const handleLogin = () => {
    // Simple password protection (in production, use better authentication)
    if (adminPassword === 'numerology2024') {
      setIsAuthenticated(true);
      setMessage('✅ Admin access granted');
    } else {
      setMessage('❌ Invalid admin password');
    }
  };

  const handleSaveSettings = () => {
    // Validate WhatsApp number (basic validation)
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (cleanNumber.length !== 10) {
      setMessage('❌ Please enter a valid 10-digit mobile number');
      return;
    }

    // Save to localStorage
    localStorage.setItem('admin_whatsapp_number', cleanNumber);
    setWhatsappNumber(cleanNumber);
    setMessage('✅ WhatsApp number updated successfully');

    // Refresh the page to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const resetToDefault = () => {
    setWhatsappNumber('9742511764');
    localStorage.setItem('admin_whatsapp_number', '9742511764');
    setMessage('✅ Reset to default number');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter admin password"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
              
              {message && (
                <div className="text-center p-2 rounded bg-gray-100">
                  <p className="text-sm">{message}</p>
                </div>
              )}

              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>

              <div className="text-center">
                <Link to="/" className="text-sm text-blue-600 hover:underline">
                  ← Back to Homepage
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                Satiiesh<span className="text-teal-500">🧿</span>Numerology
              </div>
            </Link>
            
            <nav className="flex space-x-4">
              <Link
                to="/register"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                REGISTER APPOINTMENT
              </Link>
              <Link
                to="/admin"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
              >
                ADMIN SETTINGS
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Admin Settings */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Admin Settings
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Configure WhatsApp number for appointment notifications
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="whatsappNumber">WhatsApp Number (Admin)</Label>
                  <div className="flex space-x-2 mt-1">
                    <div className="flex-shrink-0 flex items-center px-3 bg-gray-100 border border-gray-300 rounded-l-md">
                      <span className="text-gray-500">+91</span>
                    </div>
                    <Input
                      id="whatsappNumber"
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="9742511764"
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    All appointment requests will be sent to this WhatsApp number
                  </p>
                </div>

                {message && (
                  <div className="text-center p-3 rounded-lg bg-gray-100">
                    <p className="text-sm">{message}</p>
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button
                    onClick={handleSaveSettings}
                    className="flex-1 bg-teal-600 hover:bg-teal-700"
                  >
                    Save Settings
                  </Button>
                  <Button
                    onClick={resetToDefault}
                    variant="outline"
                    className="flex-1"
                  >
                    Reset to Default
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Current Configuration</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p><strong>WhatsApp Number:</strong> +91 {whatsappNumber}</p>
                    <p><strong>Test WhatsApp:</strong> 
                      <a 
                        href={`https://wa.me/91${whatsappNumber}?text=Test message from admin settings`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2"
                      >
                        Send Test Message
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Instructions</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Enter your 10-digit mobile number without country code</p>
                    <p>• All appointment requests will be forwarded to this number</p>
                    <p>• Use "Send Test Message" to verify the number works</p>
                    <p>• Changes take effect immediately after saving</p>
                    <p>• Default admin password: <code className="bg-gray-200 px-1 rounded">numerology2024</code></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Website */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Website
          </Link>
        </div>
      </section>
    </div>
  );
}
