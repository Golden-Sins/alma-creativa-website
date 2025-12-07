import React, { useState } from 'react';
import Head from 'next/head';
import { Menu, X, Monitor, Cpu, Code, Mail, Phone, MapPin, Send, Zap, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'gaming',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

const handleSubmit = () => {
  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    setFormStatus('❌ Please fill in all required fields');
    return;
  }

  setFormStatus('📤 Sending...');
  
  emailjs.send(
    'service_yrennhv',      // Replace with YOUR Service ID
    'template_0ol3suv',     // Replace with YOUR Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service,
      message: formData.message,
    },
    'WlY19164ZHXNk11Mu'        // Replace with YOUR Public Key
  )
  .then(() => {
    setFormStatus('✅ Message sent! I will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: 'gaming', message: '' });
  })
  .catch((error) => {
    console.error('EmailJS Error:', error);
    setFormStatus('❌ Failed to send. Please email me directly at valtersupenieks@gmail.com');
  });
};

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>V-Tech Bay - Tech Solutions Tenerife</title>
        <meta name="description" content="Premium tech solutions in Tenerife. Gaming PCs and PCs, Business Integration, Developer Support." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo & Title */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-400 flex items-center justify-center">
                    <div className="text-white font-bold text-xl">AC</div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Alma Creativa del Mar</div>
                  <div className="text-cyan-300 text-xs">Tech Solutions Tenerife</div>
                </div>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-orange-400 transition">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-400 transition">Services</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-400 transition">Contact</button>
              </div>
              {/* Mobile menu toggle */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-orange-500/20">
              <div className="px-4 py-3 space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-orange-400">Home</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-orange-400">Services</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-orange-400">About</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-orange-400">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Alma Creativa del Mar
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">Premium Tech Solutions in Tenerife</p>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Gaming PCs • Business Integration • Developer Support • English-Speaking Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
                >
                  View Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tech Services by <span className="text-cyan-400">Valters</span>
              </h2>
              <p className="text-xl text-gray-400 mb-2">Integration Support Engineer | Former Yggdrasil Gaming</p>
              <p className="text-gray-400">Expert in APIs, Cloud Systems, Gaming PCs & Business Integration</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Gaming & Custom PCs</h3>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>• Custom gaming PC builds</li>
                  <li>• Performance optimization</li>
                  <li>• Thermal management</li>
                  <li>• Hardware upgrades</li>
                  <li>• Emergency repairs</li>
                </ul>
                <div className="text-cyan-400 font-semibold text-lg">From €60/hour</div>
                <div className="text-gray-500 text-sm mt-1">PC builds: €1,500-3,500</div>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Business Solutions</h3>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>• API integrations</li>
                  <li>• Payment gateway setup</li>
                  <li>• Database optimization</li>
                  <li>• POS system support</li>
                  <li>• Network optimization</li>
                </ul>
                <div className="text-orange-400 font-semibold text-lg">From €80/hour</div>
                <div className="text-gray-500 text-sm mt-1">Projects: €1,500-5,000</div>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Developer Support</h3>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>• Technical documentation</li>
                  <li>• Integration troubleshooting</li>
                  <li>• Performance analysis</li>
                  <li>• AWS cloud management</li>
                  <li>• Training workshops</li>
                </ul>
                <div className="text-blue-400 font-semibold text-lg">From €100/hour</div>
                <div className="text-gray-500 text-sm mt-1">Projects: €3,000-10,000</div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Alma Creativa del Mar?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                {/* Feature 1 */}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">Professional Gaming Industry Experience</div>
                    <p>Integration Support Engineer at Yggdrasil Gaming with proven track record of resolving 100+ technical issues monthly</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">Cutting-Edge Expertise</div>
                    <p>Expert in APIs, distributed systems, AWS cloud, databases, and modern tech stack</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">English-Speaking Service</div>
                    <p>Perfect for expats, digital nomads, and international businesses in Tenerife</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-cyan-400 mb-1">Thermodynamics Advantage</div>
                    <p>Advanced knowledge in thermal optimization for high-performance systems and cooling solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 md:p-12 border border-orange-500/20">
              <div className="flex items-center justify-center mb-6">
                <Zap className="text-orange-400" size={48} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">About Valters</h2>
              <div className="text-gray-300 space-y-4 text-lg">
                <p>
                  With a background as an Integration Support Engineer at Yggdrasil Gaming, I bring professional-grade technical expertise to Tenerife&apos;s growing tech community. My experience includes resolving complex technical challenges, optimizing system performance, and delivering exceptional customer satisfaction.
                </p>
                <p>
                  I specialize in the complete tech spectrum: from building high-performance gaming PCs with advanced thermal management, to implementing sophisticated API integrations for businesses, to providing expert developer support for startups and established companies.
                </p>
                <p>
                  Based in Tenerife with a professional remote setup, I offer English-speaking tech services that bridge the gap between cutting-edge technology and practical business needs. Whether you&apos;re a gamer seeking the ultimate custom build, a business needing reliable tech infrastructure, or a developer requiring expert consultation, I deliver solutions that work.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Certifications & Skills</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-400">
                  <div>• Python 3 Certified (Codecademy)</div>
                  <div>• Postman API Fundamentals Expert</div>
                  <div>• ISC² Certified in Cybersecurity</div>
                  <div>• AWS Cloud Infrastructure</div>
                  <div>• SQL & Database Optimization</div>
                  <div>• Linux System Administration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-400">Let&apos;s discuss your tech needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Mail size={24} className="text-cyan-400 flex-shrink-0" />
                    <a href="mailto:valtersupenieks@gmail.com" className="hover:text-cyan-400 transition">valtersupenieks@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={24} className="text-cyan-400 flex-shrink-0" />
                    <a href="tel:+34624421807" className="hover:text-cyan-400 transition">+34 624 421 807</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={24} className="text-cyan-400 flex-shrink-0" />
                    <span>Tenerife, Spain</span>
                  </div>
                </div>
                {/* Business Hours */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-400">Emergency support available</p>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  {/* Service Needed */}
                  <div>
                    <label className="block text-gray-300 mb-2">Service Needed *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="gaming">Gaming & Custom PCs</option>
                      <option value="business">Business Solutions</option>
                      <option value="developer">Developer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 mb-2">Message *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                  {/* Status Message */}
                  {formStatus && (
                    <div className="text-center text-green-400 font-semibold">
                      {formStatus}
                    </div>
                  )}
                  {/* Note */}
                  <div className="text-center text-gray-500 text-xs mt-2">
                    Demo form - Connect to EmailJS to enable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-orange-500/20">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p className="mb-2">© 2025 Alma Creativa del Mar SL - All rights reserved</p>
            <p className="text-sm">Premium Tech Solutions in Tenerife, Spain</p>
          </div>
        </footer>
      </div>
    </>
  );
}