import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div>
              <img
                className="h-12 w-40 mb-4"
                src="https://www.dtkfootwear.com/logo.png"
                alt="DTK Footwear Logo"
              />
            </div>
                       
            <p className="text-amber-100 mb-4 leading-relaxed">
              Crafting exceptional footwear since 1985. Each pair tells a story of 
              dedication, precision, and timeless elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-amber-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-amber-100 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Formal Shoes</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Casual Shoes</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Boots</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-amber-100 text-sm">
                  Shop No 3, near Gavane Hospital, Gujar Nagar, Laxman Nagar, Thergaon, Pimpri-Chinchwad, Maharashtra-411033
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-300 mr-2 flex-shrink-0" />
                <span className="text-amber-100 text-sm">+91 9765758830 /+91 9021220354</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-300 mr-2 flex-shrink-0" />
                <span className="text-amber-100 text-sm">info@luxuryshoes.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-amber-100 text-sm">Mon-Sat: 9AM-7PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          
          <p className="text-amber-200 text-sm">
            <span >© 2024 Luxury Shoes. All rights reserved. Crafted with precision and passion.</span>{" "}
            <span className="text-gray-400">Powered By</span>{" "}
            <span className="text-gray-400 font-bold">ads</span>
            <span className="text-cyan-400 font-bold">wise</span>{" "}
            <span className="text-gray-400 font-bold">marke</span>
            <span className="text-cyan-400 font-bold">ting</span>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;