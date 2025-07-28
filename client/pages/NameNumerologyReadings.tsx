import React from 'react';
import { Link } from 'react-router-dom';

const MeditationIcon = () => (
  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
    <svg 
      width="60" 
      height="60" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal-500"
    >
      <path 
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5L13.5 6L10.5 6L9 7.5L3 7V9L9 8.5V11.5C9 12.33 9.67 13 10.5 13H13.5C14.33 13 15 12.33 15 11.5V8.5L21 9ZM7.5 17.5C7.5 18.88 8.62 20 10 20S12.5 18.88 12.5 17.5C12.5 16.12 11.38 15 10 15S7.5 16.12 7.5 17.5ZM11.5 17.5C11.5 18.88 12.62 20 14 20S16.5 18.88 16.5 17.5C16.5 16.12 15.38 15 14 15S11.5 16.12 11.5 17.5Z" 
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <path d="M9 21C9 19.9 9.9 19 11 19H13C14.1 19 15 19.9 15 21H9Z" fill="currentColor"/>
    </svg>
  </div>
);

const SunIcon = () => (
  <svg 
    width="24" 
    height="24" 
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

export default function NameNumerologyReadings() {
  const navigationItems = [
    { name: 'ABOUT', href: '#' },
    { name: 'AKASHIC RECORD READING', href: '#' },
    { name: 'READINGS', href: '#' },
    { name: 'HEALINGS', href: '#' },
    { name: 'COURSES', href: '#' },
    { name: 'BLOGS', href: '#' },
    { name: 'FREE', href: '/' }
  ];

  const benefits = [
    {
      title: "Career Success:",
      description: "Align your name's vibrations with your professional goals to attract better job opportunities, promotions, and financial growth."
    },
    {
      title: "Financial Stability:",
      description: "Discover your name's numerical value to understand financial potential and attract wealth through informed decisions."
    },
    {
      title: "Improved Relationships:",
      description: "Enhance communication and harmony in personal and professional relationships by understanding name compatibility."
    },
    {
      title: "Health and Well-being:",
      description: "Correct imbalances in your name's energy to contribute to better health and overall wellness."
    },
    {
      title: "Business Growth:",
      description: "Entrepreneurs can select business names based on numerology to enhance brand recognition and customer engagement."
    },
    {
      title: "Personal Development:",
      description: "Gain insights into your strengths, weaknesses, and life path, empowering you to grow and succeed."
    }
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
          {/* Meditation Icon */}
          <div className="flex justify-center mb-8">
            <MeditationIcon />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            You live in the mind.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
            You are the universe in motion.
          </h2>
          
          <div className="flex justify-center mb-4">
            <SunIcon />
          </div>
          
          <h3 className="text-xl md:text-2xl font-light text-white">
            Name Numerology
          </h3>
        </div>
      </section>

      {/* Mystical Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img 
              src="/api/placeholder/800/400" 
              alt="Mystical cosmic hands over divination board with candles and crystals"
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='400' fill='%23667eea'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23667eea'/%3E%3Cstop offset='1' stop-color='%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23a)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3EMystical Cosmic Hands%3C/text%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Name Numerology: Decode the Power of Your Name
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">
              <strong className="text-gray-800">Name Numerology</strong> is the study of names and their vibrational meanings. It's a powerful tool to understand how a name influences various aspects of life, including personality, destiny, and success. Whether you're choosing a name for a newborn or considering a name change for personal or professional reasons, <strong className="text-gray-800">Name Numerology</strong> offers insights to help you make a meaningful choice.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              How Can Name Numerology Benefit You?
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-teal-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Master Sanskriti Sethi for Name Numerology?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Master Sanskriti Sethi brings years of experience and deep understanding of numerological principles to help you unlock the power of your name. With personalized consultations and expert guidance, she provides comprehensive name numerology readings that can transform your life's trajectory.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors duration-200"
              >
                Try Our Free Name Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
