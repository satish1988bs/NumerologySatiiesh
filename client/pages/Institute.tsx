import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CourseCard = ({ title, skills, icon, color }: { title: string; skills: string[]; icon: string; color: string }) => (
  <Card className={`hover:shadow-lg transition-shadow duration-300 border-l-4 ${color}`}>
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-lg">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
  <Card className="bg-blue-50 border-blue-200">
    <CardContent className="p-6">
      <p className="italic text-gray-700 mb-4">"{text}"</p>
      <p className="font-semibold text-blue-800">– {name}</p>
    </CardContent>
  </Card>
);

export default function Institute() {
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      title: "Basic Computer Training",
      skills: ["Windows", "MS Office", "Internet", "Typing", "Digital Literacy"],
      icon: "💻",
      color: "border-l-blue-500"
    },
    {
      title: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "PHP", "Kotlin", "Swift"],
      icon: "🧑‍💻",
      color: "border-l-green-500"
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Full Stack", "WordPress"],
      icon: "🌐",
      color: "border-l-purple-500"
    },
    {
      title: "Data Science & AI",
      skills: ["Python", "ML", "Deep Learning", "NLP", "Computer Vision", "ChatGPT"],
      icon: "🧠",
      color: "border-l-orange-500"
    },
    {
      title: "Database & Backend",
      skills: ["SQL", "MySQL", "MongoDB", "REST APIs", "GraphQL"],
      icon: "📊",
      color: "border-l-cyan-500"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Git", "Docker", "AWS", "Azure", "CI/CD"],
      icon: "☁️",
      color: "border-l-indigo-500"
    },
    {
      title: "Mobile Development",
      skills: ["Android", "iOS", "Flutter", "React Native"],
      icon: "📱",
      color: "border-l-pink-500"
    },
    {
      title: "Special Programs",
      skills: ["Full Stack", "Testing", "Cybersecurity", "UI/UX", "Tally ERP"],
      icon: "🎓",
      color: "border-l-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Akshay",
      text: "The Python course helped me crack a job in Bengaluru. Great teaching with real-world examples!"
    },
    {
      name: "Rutuja",
      text: "They guided me from basic computers to getting a job as a web developer."
    },
    {
      name: "Manoj",
      text: "Best institute in Belgaum for software training and placements."
    }
  ];

  const features = [
    { icon: "👨‍🏫", title: "Industry-experienced faculty" },
    { icon: "🛠️", title: "Project-based learning" },
    { icon: "💼", title: "Internship + Job assistance" },
    { icon: "📅", title: "Weekend & weekday batches" },
    { icon: "🔄", title: "Flexible online + offline classes" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-800">
                Engineers<span className="text-orange-500">Software</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Courses', 'Placement', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to <span className="text-orange-400">Engineers Software</span> Training Institute
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Empowering the Next Generation of Developers, Designers & Digital Experts.
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Whether you're new to computers or aiming for mastery in high-end software development, AI, or data science, 
                we have the perfect course for you. Join thousands of learners who've launched successful careers in tech 
                through our hands-on, real-world focused training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  View Courses
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                  Contact Us
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Belgaum, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>info@engineerssoftware.in</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">🚀 Why Choose Us?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-lg">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📖 About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Building India's Most Practical Software Education Platform
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At Engineers Software Training Institute, we aim to build India's most practical software education platform. 
                Founded by software engineers with over a decade of real-world experience, we focus on bridging the gap 
                between academic knowledge and industry needs.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to provide affordable, job-oriented, and future-ready training programs in software development, 
                web design, cloud computing, and artificial intelligence — from basic computer skills to advanced programming and AI.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700">Students Trained</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-700">Placement Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-700">Courses Offered</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">💻 Courses Offered</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide structured training from beginner to expert levels in the following categories:
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Batches & Schedule */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📅 Batches & Schedule</h2>
            <p className="text-lg text-gray-600">We offer both online and offline classes with flexible scheduling</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">📆</div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-gray-600">Morning / Evening / Weekend batches</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🧑‍🏫</div>
                <h3 className="font-semibold mb-2">Live Sessions</h3>
                <p className="text-gray-600">Live instructor-led sessions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">📽️</div>
                <h3 className="font-semibold mb-2">Recordings</h3>
                <p className="text-gray-600">Class recordings provided</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🧪</div>
                <h3 className="font-semibold mb-2">Practical Work</h3>
                <p className="text-gray-600">Mini projects & live assignments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification & Placement */}
      <section id="placement" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🎓 Certification & Placement</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
                <p className="text-gray-600">Get industry-recognized certificates after each course</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Interview Prep</h3>
                <p className="text-gray-600">Dedicated interview preparation & mock sessions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Company Partnerships</h3>
                <p className="text-gray-600">Partnered with local and national IT companies for placement drives</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-green-100 border border-green-300 rounded-lg p-6 inline-block">
              <div className="text-3xl font-bold text-green-600 mb-2">80%+</div>
              <div className="text-green-800">Placement Success Rate for Job-Ready Candidates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🧑‍🏫 Our Faculty</h2>
            <p className="text-lg text-gray-600">Learn from industry experts and certified professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-semibold mb-3">Industry Veterans</h3>
                <p className="text-gray-600">5–15+ years of real-world experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">🎖️</div>
                <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
                <p className="text-gray-600">AWS, Google, Oracle certified experts</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-xl font-semibold mb-3">Friendly Mentors</h3>
                <p className="text-gray-600">Guiding you throughout your learning journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📢 Student Testimonials</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📍 Contact Us</h2>
            <p className="text-xl text-blue-200">Ready to start your tech journey? Get in touch with us!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Engineers Software Training Institute</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p className="text-blue-200">#123, XYZ Building, Tilakwadi, Belgaum – 590006, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p className="text-blue-200">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-blue-200">info@engineerssoftware.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="font-semibold">Website:</p>
                    <p className="text-blue-200">www.engineerssoftware.in</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <span className="mr-2">💬</span>
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <span className="mr-2">📍</span>
                  View on Map
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">💼 Career Opportunities</h3>
              <p className="text-blue-200 mb-6">
                Looking for internships or job roles? We help you:
              </p>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-center gap-2">
                  <span>✓</span> Build your resume & portfolio
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Work on real-time projects
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Get internship experience certificates
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Prepare for tech interviews with mock rounds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Engineers<span className="text-orange-500">Software</span>
            </div>
            <p className="text-gray-400 mb-4">Empowering the Next Generation of Tech Professionals</p>
            <div className="flex justify-center gap-6">
              <span>📘 Facebook</span>
              <span>📸 Instagram</span>
              <span>🐦 Twitter</span>
              <span>💼 LinkedIn</span>
              <span>📺 YouTube</span>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400">© 2024 Engineers Software Training Institute. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
