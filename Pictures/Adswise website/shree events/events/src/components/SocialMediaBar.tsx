import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
}

const SocialMediaBar: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      url: 'https://instagram.com/shreeevents',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      url: 'https://facebook.com/shreeevents',
      color: 'bg-blue-600',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" fill="none" />
          <path d="M12 6v6m0 4v.01M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" strokeLinecap="round" />
        </svg>
      ),
      label: 'Pinterest',
      url: 'https://pinterest.com/shreeevents',
      color: 'bg-red-600',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .social-label {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(148, 2, 66, 0.3);
          }
        }
        .social-icon-base {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {socialLinks.map((social, index) => (
        <div key={index} className="flex items-center justify-end gap-3 group">
          {hoveredId === social.label && (
            <div className="social-label flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-xl">
              <span className="text-gray-800 font-semibold whitespace-nowrap text-sm">
                {social.label}
              </span>
            </div>
          )}

          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(social.label)}
            onMouseLeave={() => setHoveredId(null)}
            className={`social-icon-base ${social.color} text-white rounded-full p-4 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 shadow-lg hover:shadow-2xl transform hover:-translate-x-2`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaBar;
