import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

interface ContactPageProps {
  onBackClick?: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBackClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Film/TV Production',
    'Exhibition',
    'Theater Production',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 px-6 relative text-center animate-fade-in"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/1200x/e1/b7/d9/e1b7d907d114e6d3a921ca2cfdc7c11c.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6 animate-slide-down text-white">
            Get Your <span className="text-[#f15483]">Custom Quote</span>
          </h1>
          <p className="text-[#958f89] text-lg max-w-2xl mx-auto mb-4 animate-slide-up">
            Transform your vision into reality with India's premier wedding stage manufacturers and event decoration specialists. Connect with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-8 border-l-8 border-[#940242] pl-6 animate-slide-right">Quick Quote Request</h2>
          
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-400 rounded-sm p-12 text-center animate-scale-in">
              <div className="text-5xl text-green-500 mb-4">✓</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
              <p className="text-green-600 text-lg">Your quote request has been received. Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-sm shadow-lg animate-slide-up hover:shadow-2xl transition-shadow">
              <div className="animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-bold uppercase tracking-wider text-[#010101] mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#010101]/20 rounded-sm focus:outline-none focus:border-[#940242] transition-colors transform hover:scale-105"
                  placeholder="Your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-bold uppercase tracking-wider text-[#010101] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#010101]/20 rounded-sm focus:outline-none focus:border-[#940242] transition-colors transform hover:scale-105"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="animate-slide-right" style={{ animationDelay: '0.3s' }}>
                  <label className="block text-sm font-bold uppercase tracking-wider text-[#010101] mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#010101]/20 rounded-sm focus:outline-none focus:border-[#940242] transition-colors transform hover:scale-105"
                    placeholder="+91 9000000000"
                  />
                </div>
              </div>

              <div className="animate-slide-right" style={{ animationDelay: '0.4s' }}>
                <label className="block text-sm font-bold uppercase tracking-wider text-[#010101] mb-2">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#010101]/20 rounded-sm focus:outline-none focus:border-[#940242] transition-colors bg-white transform hover:scale-105"
                >
                  <option value="">Select event type...</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="animate-slide-right" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-bold uppercase tracking-wider text-[#010101] mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#010101]/20 rounded-sm focus:outline-none focus:border-[#940242] transition-colors resize-none transform hover:scale-105"
                  placeholder="Tell us about your event, venue, guest count, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#940242] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#010101] transition-all flex items-center justify-center gap-2 group transform hover:scale-105 animate-pulse-slow"
              >
                Send Quote Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-[#958f89] text-center">
                We'll respond to your inquiry within 24 hours. Your information is secure and never shared.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 px-6 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-12 border-l-8 border-[#940242] pl-6 animate-slide-right">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-[#940242] p-4 rounded-full flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm text-[#010101] mb-2 tracking-wider">Phone</p>
                  <a href="tel:+919000000000" className="text-[#940242] hover:text-[#010101] transition-colors text-lg font-semibold">
                    +91 90000 00000
                  </a>
                  <p className="text-[#958f89] text-sm mt-2">Available Mon - Sat: 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                <div className="bg-[#940242] p-4 rounded-full flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm text-[#010101] mb-2 tracking-wider">Email</p>
                  <a href="mailto:info@shreeevents.com" className="text-[#940242] hover:text-[#010101] transition-colors text-lg font-semibold">
                    info@shreeevents.com
                  </a>
                  <p className="text-[#958f89] text-sm mt-2">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[#e7e8e2] rounded-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold uppercase mb-4 text-[#010101]">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="transform hover:scale-105 transition-transform">
                <p className="text-3xl font-black text-[#940242] mb-2">10+</p>
                <p className="font-bold uppercase text-sm tracking-wider text-[#010101] mb-1">Years of Excellence</p>
                <p className="text-[#958f89] text-sm">Proven track record in event staging</p>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <p className="text-3xl font-black text-[#940242] mb-2">1000+</p>
                <p className="font-bold uppercase text-sm tracking-wider text-[#010101] mb-1">Projects Completed</p>
                <p className="text-[#958f89] text-sm">From intimate to grand celebrations</p>
              </div>
              <div className="transform hover:scale-105 transition-transform">
                <p className="text-3xl font-black text-[#940242] mb-2">95%</p>
                <p className="font-bold uppercase text-sm tracking-wider text-[#010101] mb-1">On-Time Delivery</p>
                <p className="text-[#958f89] text-sm">Reliable scheduling and execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#e7e8e2]  animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase mb-6 animate-slide-down">Ready to Discuss Your Project?</h2>
          <p className="text-[#958f89] text-lg max-w-2xl mx-auto mb-8 animate-slide-up">
            Our team of expert designers and project managers are ready to help bring your vision to life. Connect with us today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+919000000000"
              className="bg-[#940242] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#f15483] transition-all transform hover:scale-105 animate-slide-right"
            >
              Call Now
            </a>
            <a
              href="mailto:info@shreeevents.com"
              className="border-2 border-[#f15483] text-[#f15483] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#f15483] hover:text-white transition-all transform hover:scale-105 animate-slide-left"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ContactPage;
