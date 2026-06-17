import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const eventImages = [
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
      title: 'Luxury Wedding Stage',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
      title: 'Corporate Event Setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1528366521314-d67b3927061d?auto=format&fit=crop&q=80',
      title: 'Traditional Mandap',
    },
    {
      url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
      title: 'Grand Reception Decor',
    },
    {
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
      title: 'Theme Decoration Event',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-0 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1]">
          Premier Wedding <br />
          <span className="text-[#940242]">Stage Manufacturers</span> <br />
          & Event Decoration
        </h1>
        <p className="text-[#958f89] text-base max-w-md font-medium leading-relaxed">
          India's most trusted wedding stage manufacturers & event decoration specialists. Transform your vision into reality with custom mandaps, film sets, and exhibition solutions across Mumbai, Bangalore, Pune, Delhi NCR, and beyond. Over a decade of manufacturing excellence in traditional and contemporary event staging.
        </p>
        <div className="flex gap-4 pt-4">
          <button 
            onClick={onContactClick}
            className="bg-[#010101] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#940242] transition-all cursor-pointer"
          >
            Get Custom Quote <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
            alt="Event Stage"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 hidden md:block opacity-20">
            {/* Dot pattern from image */}
            <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#940242]" />
                ))}
            </div>
        </div>
      </div>
    </section>

    {/* Events Image Slider - Continuous Scroll */}
    <section className="pb-10 pt-20 px-6">
      

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-slider {
          animation: scroll-left 30s linear infinite;
        }
        .scrolling-slider:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="scrolling-slider flex gap-4">
          {[...eventImages, ...eventImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-48 w-72  overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer relative group/card"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;