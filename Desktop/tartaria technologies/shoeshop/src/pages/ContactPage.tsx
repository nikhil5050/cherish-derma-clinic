import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🌟 *NEW CONTACT INQUIRY*

👤 *Customer Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

📋 *Inquiry Details:*
• Subject: ${formData.subject}
• Message: ${formData.message}

Please respond to this inquiry at your earliest convenience.

Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/+9765758830?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['Shop No 3, near Gavane Hospital,', 'Gujar Nagar, Laxman Nagar,Thergaon,',' Pimpri-Chinchwad, Maharashtra-411033'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 97657 58830', '+91 90212 20354'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxuryshoes.com', 'orders@luxuryshoes.com', 'support@luxuryshoes.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 11:00 AM - 5:00 PM', 'Holidays: Closed'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-amber-900 mb-6">Contact Us</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              We're here to help with any questions about our handcrafted luxury footwear. 
              Reach out to our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Have a question about our products or need assistance? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Size & Fit">Size & Fit</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Returns & Exchange">Returns & Exchange</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-4 px-6 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>
                    By submitting this form, you agree to our privacy policy and terms of service.
                    We typically respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">More Ways to Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-amber-50 p-6 rounded-xl">
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-amber-900 mb-2">WhatsApp Support</h4>
                <p className="text-gray-600 text-sm mb-3">Get instant support via WhatsApp</p>
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Start Chat
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-amber-900 mb-2">Email Support</h4>
                <p className="text-gray-600 text-sm mb-3">Detailed inquiries and support</p>
                <a
                  href="mailto:info@luxuryshoes.com"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <Phone className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-bold text-amber-900 mb-2">Phone Support</h4>
                <p className="text-gray-600 text-sm mb-3">Speak with our experts directly</p>
                <a
                  href="tel:+15551234567"
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;