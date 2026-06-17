import React, { useState } from 'react';
import { Maximize2, ArrowUpRight } from 'lucide-react';

// Define the event categories based on your manufacturing expertise
type Category = 'All' | 'Wedding Mandaps' | 'Film Sets' | 'Corporate Expo';

interface Project {
  id: number;
  category: Category;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Wedding Mandaps',
    title: 'Traditional Carved Mandap',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'Film Sets',
    title: 'Period Drama Backdrop',
    location: 'Film City, Hyderabad',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    category: 'Corporate Expo',
    title: 'Tech Summit Main Stage',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    category: 'Wedding Mandaps',
    title: 'Geometric Crystal Stage',
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    category: 'Film Sets',
    title: 'Futuristic Sci-Fi Set',
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    category: 'Corporate Expo',
    title: 'Automobile Launch Pavilion',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="/gallery" className="py-24 px-6 bg-[#e7e8e2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#010101] leading-none">
              Project <br />
              <span className="text-[#940242]">Galleries</span>
            </h2>
            <p className="text-[#958f89] mt-4 max-w-sm font-medium uppercase text-[10px] tracking-widest">
              A decade of magnificent manufacturing across India
            </p>
          </div>

          {/* Filter System */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Wedding Mandaps', 'Film Sets', 'Corporate Expo'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                    ? 'bg-[#940242] border-[#940242] text-white shadow-lg' 
                    : 'bg-transparent border-[#010101]/10 text-[#010101] hover:border-[#f15483]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-[4/5] bg-[#010101] overflow-hidden cursor-pointer"
            >
              {/* Image with grayscale effect from palette image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#010101]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[#f15483] text-[10px] font-black uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold uppercase tracking-tighter leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#958f89] text-[10px] font-bold uppercase tracking-widest mt-1">
                      {project.location}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-[#940242] rounded-full flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Minimal Border Frame on hover */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-4 group">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#010101]">Explore Complete Portfolio</span>
                <div className="w-10 h-10 border border-[#940242] rounded-full flex items-center justify-center group-hover:bg-[#940242] transition-colors">
                    <Maximize2 size={16} className="text-[#940242] group-hover:text-white" />
                </div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;