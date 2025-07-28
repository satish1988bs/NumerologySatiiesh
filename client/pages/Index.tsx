import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAdminWhatsAppNumber } from '@/utils/adminSettings';

// Chaldean Numerology calculation functions
const chaldeanValues: { [key: string]: number } = {
  'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
  'B': 2, 'K': 2, 'R': 2,
  'C': 3, 'G': 3, 'L': 3, 'S': 3,
  'D': 4, 'M': 4, 'T': 4,
  'E': 5, 'H': 5, 'N': 5, 'X': 5,
  'U': 6, 'V': 6, 'W': 6, 'Z': 6,
  'O': 7, 'P': 7,
  'F': 8
  // Note: Number 9 is not assigned to any letter in Chaldean system
};

const calculateNameNumber = (name: string): number => {
  let sum = 0;
  for (const char of name.toUpperCase().replace(/[^A-Z]/g, '')) {
    sum += chaldeanValues[char] || 0;
  }

  // Reduce to single digit (except master numbers 11, 22, 33)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const calculateSoulNumber = (name: string): number => {
  const vowels = 'AEIOU';

  let sum = 0;
  for (const char of name.toUpperCase().replace(/[^A-Z]/g, '')) {
    if (vowels.includes(char)) {
      sum += chaldeanValues[char] || 0;
    }
  }

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const calculatePersonalityNumber = (name: string): number => {
  const vowels = 'AEIOU';

  let sum = 0;
  for (const char of name.toUpperCase().replace(/[^A-Z]/g, '')) {
    if (!vowels.includes(char)) {
      sum += chaldeanValues[char] || 0;
    }
  }

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
};

const calculateCompoundNameNumber = (name: string): number => {
  let sum = 0;
  for (const char of name.toUpperCase().replace(/[^A-Z]/g, '')) {
    sum += chaldeanValues[char] || 0;
  }

  // Return direct sum without reducing to single digit
  return sum;
};

const getCharacterBreakdown = (name: string): string => {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  const letters = [];
  const values = [];

  for (const char of cleanName) {
    const value = chaldeanValues[char] || 0;
    letters.push(char);
    values.push(value);
  }

  return `[${letters.join('')}] : [${values.join(',')}]`;
};

const SunIcon = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Index() {
  const [name, setName] = useState('');
  const [adminWhatsApp, setAdminWhatsApp] = useState('9742511764');
  const [results, setResults] = useState<{
    nameNumber: number | null;
    soulNumber: number | null;
    personalityNumber: number | null;
    compoundNameNumber: number | null;
    calculation: string;
    characterBreakdown: string;
  }>({
    nameNumber: null,
    soulNumber: null,
    personalityNumber: null,
    compoundNameNumber: null,
    calculation: '',
    characterBreakdown: ''
  });

  const handleCalculate = () => {
    if (!name.trim()) return;

    const nameNumber = calculateNameNumber(name);
    const soulNumber = calculateSoulNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const compoundNameNumber = calculateCompoundNameNumber(name);
    const characterBreakdown = getCharacterBreakdown(name);

    const calculation = `Name: ${name}\nCalculating numerological values...\nName Number: ${nameNumber}\nSoul Number: ${soulNumber}\nPersonality Number: ${personalityNumber}\nCompound Name Number: ${compoundNameNumber}`;

    setResults({
      nameNumber,
      soulNumber,
      personalityNumber,
      compoundNameNumber,
      calculation,
      characterBreakdown
    });
  };

  // Load admin WhatsApp number from localStorage
  useEffect(() => {
    setAdminWhatsApp(getAdminWhatsAppNumber());
  }, []);

  const navigationItems = [
    { name: 'REGISTER APPOINTMENT', href: '/register' },
    { name: 'ADMIN', href: '/admin' }
  ];

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
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Name Numerology Calculator
          </h1>
          <div className="flex justify-center">
            <SunIcon />
          </div>
        </div>
      </section>

      {/* Top Ad Banner */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-6683668028356246"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Input and Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
                Name Numerology Calculator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-700 mb-3">
                    Enter Your Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg py-4 px-4 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                
                <Button
                  onClick={handleCalculate}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                  disabled={!name.trim()}
                >
                  Calculate
                </Button>
              </div>
            </div>

            <div className="text-gray-600 leading-relaxed">
              <p>
                Hello! Our Name Numerology Calculation is the secret to 
                revealing the unknown elements in your name. Have you ever 
                wondered what it means if your name has a hidden 
                significance? Why is it vibrating and what effect may it have 
                on your life? You're in the right place!
              </p>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="grid grid-cols-1 gap-6">
            {/* Calculation Card */}
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-600 min-h-[100px] flex items-center justify-center">
                  {results.calculation ? (
                    <pre className="whitespace-pre-wrap text-sm">{results.calculation}</pre>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Character Breakdown Card */}
            <Card className="border-2 border-indigo-200 bg-indigo-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Character Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-700 min-h-[60px] flex items-center justify-center px-4">
                  {results.characterBreakdown ? (
                    <div className="text-sm font-mono break-all">
                      {results.characterBreakdown}
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Name Number Card */}
            <Card className="border-2 border-pink-200 bg-pink-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Name Number</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-4xl font-bold text-gray-800 py-8">
                  {results.nameNumber ?? '-'}
                </div>
              </CardContent>
            </Card>

            {/* Soul Number Card */}
            <Card className="border-2 border-teal-200 bg-teal-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Soul Number</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-4xl font-bold text-gray-800 py-8">
                  {results.soulNumber ?? '-'}
                </div>
              </CardContent>
            </Card>

            {/* Personality Number Card */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Personality Number</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-4xl font-bold text-gray-800 py-8">
                  {results.personalityNumber ?? '-'}
                </div>
              </CardContent>
            </Card>

            {/* Compound Name Number Card */}
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">Compound Name Number</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-4xl font-bold text-gray-800 py-8">
                  {results.compoundNameNumber ?? '-'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Middle Ad Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-6683668028356246"
               data-ad-slot="9876543210"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
            Professional Consultation
          </h2>
          <p className="text-gray-600 mb-8">
            Get personalized readings and consultations directly via WhatsApp
          </p>

          <div className="space-y-4">
            <a
              href={`https://wa.me/91${adminWhatsApp}?text=Hi,%20I%20would%20like%20to%20book%20a%20consultation%20for%20numerology%20reading.`}
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
              <p className="font-semibold">Our Expert Services:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <span className="bg-white px-3 py-1 rounded-full">🔢 Name Numerology</span>
                <span className="bg-white px-3 py-1 rounded-full">📅 Birth Date Numerology</span>
                <span className="bg-white px-3 py-1 rounded-full">💑 Kundali Matching</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
