import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/portfolio' },
    { label: 'Manufacturer', href: '/manufacturer' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleContactClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#e7e8e2]/95 backdrop-blur-sm px-6 py-4 shadow-sm mt-[67px]" style={{ marginTop: 0 }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="font-black text-2xl tracking-tighter uppercase">
            Shree<span className="text-[#940242]">Events</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs font-bold uppercase tracking-widest text-[#010101] hover:text-[#940242] transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#940242] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <button 
            onClick={handleContactClick}
            className="bg-[#940242] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#010101] transition-all"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-[#010101]/10 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#e7e8e2] border-t border-[#010101]/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-sm font-bold uppercase tracking-widest text-[#010101] hover:text-[#940242] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={handleContactClick}
            className="w-full bg-[#940242] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#010101] transition-all"
          >
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;