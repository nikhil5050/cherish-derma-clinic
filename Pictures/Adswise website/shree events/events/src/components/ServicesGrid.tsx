import React from 'react';
import { Star, Film, Briefcase, Sparkles, Package, Wrench } from 'lucide-react';

const services = [
  {
    title: "Wedding Mandaps & Stages",
    desc: "Hand-carved traditional mandaps to contemporary geometric stages with acrylic, crystal elements, and custom backdrops.",
    icon: <Star size={32} />,
    link: "/services/wedding-stage-manufacturing"
  },
  {
    title: "Film Set & Theater Production",
    desc: "Precision-engineered sets for television, theater, films, and advertising with authentic period or futuristic designs.",
    icon: <Film size={32} />,
    link: "/services/film-set-production"
  },
  {
    title: "Exhibition & Corporate Stages",
    desc: "Exhibition stall manufacturing and corporate event stages designed to enhance visibility, engagement, and ROI.",
    icon: <Briefcase size={32} />,
    link: "/services/exhibition-stalls"
  },
  {
    title: "Wedding Decoration & Theming",
    desc: "Comprehensive wedding decor packages with entrance arches, aisle decor, reception stages, and photo booths.",
    icon: <Sparkles size={32} />,
    link: "/packages/wedding-decoration"
  },
  {
    title: "Stage Decoration Excellence",
    desc: "Complete stage decoration services with structural design, draping, floral arrangements, lighting, and decoration.",
    icon: <Package size={32} />,
    link: "/services/stage-decoration"
  },
  {
    title: "Pan-India Installation",
    desc: "Full-service solutions from design to installation across Mumbai, Bangalore, Pune, Delhi NCR, and major cities.",
    icon: <Wrench size={32} />,
    link: "/locations/mumbai"
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6  bg-[#e7e8e2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#958f89] mb-4">Comprehensive Services</h2>
          <h3 className="text-3xl font-bold uppercase tracking-tighter text-[#010101]">Wedding Stage Manufacturing & Event Solutions</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <a key={i} href={item.link} className="p-10 border border-[#010101]/10 hover:border-[#940242] hover:shadow-xl transition-all group rounded-sm bg-white">
              <div className="text-[#940242] mb-6 group-hover:scale-125 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-[#010101]">{item.title}</h3>
              <p className="text-[#958f89] text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-[#940242] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;