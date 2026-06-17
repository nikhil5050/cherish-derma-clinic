import React from 'react';
import { Crown, Film, Building2, Sparkles, Package, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Crown size={24} />,
    title: "Wedding Stage & Mandap",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    desc: "Traditional hand-carved wooden mandaps, contemporary geometric stages with acrylic and crystal elements."
  },
  {
    icon: <Film size={24} />,
    title: "Film Set & Theater",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    desc: "Precision-engineered sets for film and theater. Authentic, historically accurate, or futuristic environments."
  },
  {
    icon: <Building2 size={24} />,
    title: "Exhibition & Corporate",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    desc: "Exhibition stall manufacturing and corporate event stage design that enhances brand visibility."
  },
  {
    icon: <Sparkles size={24} />,
    title: "Wedding Theming",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive decor packages including entrance arches, aisle decor, and thematic design narratives."
  },
  {
    icon: <Package size={24} />,
    title: "Design Excellence",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800",
    desc: "Complete stage decoration services with structural design, premium draping, and floral arrangements."
  },
  {
    icon: <Wrench size={24} />,
    title: "Pan-India Installation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    desc: "Full-service solutions from design to installation with seamless coverage across all major Indian metros."
  }
];

const Services = () => {
  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
              Our Core <span className="text-[#940242]">Manufacturing</span> Expertise
            </h2>
            <div className="h-2 w-24 bg-[#940242] mb-6"></div>
            <p className="text-[#958f89] text-lg leading-relaxed">
              Combining traditional craftsmanship with advanced technology to provide premium quality event structures.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#940242] font-bold uppercase tracking-widest hover:gap-4 transition-all">
            View Gallery <ArrowRight size={20} />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-black shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Background */}
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#940242] text-white transform transition-transform duration-500 group-hover:rotate-[360deg]">
                  {s.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white uppercase mb-3 tracking-tight">
                  {s.title}
                </h3>
                
                {/* Expandable Description */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[#940242] font-bold text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore Service <ArrowRight size={14} />
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/5 transition-all duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;