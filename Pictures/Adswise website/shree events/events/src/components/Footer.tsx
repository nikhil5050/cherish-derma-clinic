import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const locations = [
    { name: 'Mumbai', path: '/locations/mumbai' },
    { name: 'Bangalore', path: '/locations/bangalore' },
    { name: 'Pune', path: '/locations/pune' },
    { name: 'Delhi NCR', path: '/locations/delhi' },
    { name: 'Hyderabad', path: '/locations/hyderabad' },
    { name: 'Chennai', path: '/locations/chennai' },
  ];

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#010101] text-white py-20 px-6 mt-auto overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img 
          src="https://mediumaquamarine-quetzal-462306.hostingersite.com/ChatGPT_Image_Feb_10__2026__08_54_29_PM-removebg-preview.png" 
          alt="Footer Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Content Layer (z-10 ensures it stays above the image) */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-16">
          <div>
            <h2 className="text-4xl font-bold uppercase mb-8 leading-tight">
              Ready to create <br />
              something <span className="text-[#f15483]">extraordinary</span>?
            </h2>
            <p className="text-[#958f89] mb-8 leading-relaxed text-base">
              Whether it's a wedding celebration, corporate event, film production, or exhibition, 
              our manufacturing expertise and creative capabilities are at your service.
            </p>
            <button 
              onClick={handleContactClick}
              className="border-2 border-[#f15483] text-[#f15483] px-10 py-4 rounded-full uppercase font-bold text-sm hover:bg-[#f15483] hover:text-white transition-all cursor-pointer"
            >
              Get Custom Quote
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-12 text-[#958f89]">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Pan-India Locations</h4>
              <ul className="space-y-3 text-sm">
                {locations.map((location) => (
                  <li key={location.name} className="hover:text-[#f15483] transition-colors">
                    <Link to={location.path}>{location.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Get in Touch</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:info@shreeevents.com" className="hover:text-[#f15483]">info@shreeevents.com</a></li>
                <li><a href="tel:+919000000000" className="hover:text-[#f15483]">+91 90000 00000</a></li>
                <li className="text-[#958f89] mt-4">Mon - Sat: 9AM - 6PM</li>
                <li className="text-[#958f89]">Sunday: By Appointment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="py-8 border-y border-white/10">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider text-center">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-[#f15483] transition-colors text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4">
          <p className="text-white text-sm">© 2024-2025 Shree Events - Premier Wedding Stage Manufacturers & Event Decoration Specialists in India. All rights reserved.</p>
          <p className="text-white font-bold text-xs mt-4">Export Quality Standards | Pan-India Service | Manufacturing Excellence Since 2013</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;