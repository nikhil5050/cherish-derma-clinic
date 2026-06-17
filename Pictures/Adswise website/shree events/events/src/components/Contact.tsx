import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface ContactProps {
  onContactClick?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#e7e8e2] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6 leading-tight">
              Ready to transform <br />
              your <span className="text-[#f15483]">vision</span>?
            </h2>
            <p className="text-[#958f89] text-lg leading-relaxed mb-8">
              Whether it's a grand wedding celebration, corporate event, film production, or exhibition, our manufacturing expertise and creative capabilities are ready to bring your vision to life.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#940242] p-3 rounded-full flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm tracking-wider mb-2">Phone</p>
                  <a href="tel:+919000000000" className="text-[#f15483] hover:text-white transition-colors text-lg">
                    +91 90000 00000
                  </a>
                  <p className="text-[#958f89] text-sm mt-1">Available Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#940242] p-3 rounded-full flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm tracking-wider mb-2">Email</p>
                  <a href="mailto:info@shreeevents.com" className="text-[#f15483] hover:text-white transition-colors text-lg">
                    info@shreeevents.com
                  </a>
                  <p className="text-[#958f89] text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#940242] p-3 rounded-full flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm tracking-wider mb-2">Pan-India Presence</p>
                  <p className="text-[#f15483] text-lg">Mumbai, Bangalore, Pune, Delhi NCR, Hyderabad, Chennai</p>
                  <p className="text-[#958f89] text-sm mt-1">Regional expertise with local presence</p>
                </div>
              </div>
            </div>

            <a
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-[#940242] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#f15483] transition-all group cursor-pointer"
            >
              Get Custom Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Quick Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-[#940242] transition-colors">
              <p className="text-4xl font-black text-[#f15483] mb-2">10+</p>
              <p className="font-bold uppercase text-sm tracking-wider mb-2">Years of Excellence</p>
              <p className="text-[#958f89] text-sm">Proven track record in event staging</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-[#940242] transition-colors">
              <p className="text-4xl font-black text-[#f15483] mb-2">1000+</p>
              <p className="font-bold uppercase text-sm tracking-wider mb-2">Projects Completed</p>
              <p className="text-[#958f89] text-sm">From 50 to 5000+ guest weddings</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-[#940242] transition-colors">
              <p className="text-4xl font-black text-[#f15483] mb-2">6</p>
              <p className="font-bold uppercase text-sm tracking-wider mb-2">Pan-India Locations</p>
              <p className="text-[#958f89] text-sm">With local warehousing & delivery</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-[#940242] transition-colors">
              <p className="text-4xl font-black text-[#f15483] mb-2">95%</p>
              <p className="font-bold uppercase text-sm tracking-wider mb-2">On-Time Delivery</p>
              <p className="text-[#958f89] text-sm">Reliable scheduling and execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
