import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Users, Award, Shield, Truck, CheckCircle2 } from 'lucide-react';

interface ManufacturerPageProps {
  onContactClick?: () => void;
}

const ManufacturerPage: React.FC<ManufacturerPageProps> = ({ onContactClick }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const capabilities = [
    { icon: <Wrench size={32} />, title: 'Custom Manufacturing', description: 'Bespoke stage structures and event setups tailored to your specific requirements.' },
    { icon: <Zap size={32} />, title: 'Advanced Technology', description: 'State-of-the-art manufacturing equipment and techniques for precision.' },
    { icon: <Users size={32} />, title: 'Expert Team', description: 'Skilled engineers and technicians with decades of experience.' },
    { icon: <Award size={32} />, title: 'Quality Assurance', description: 'Rigorous testing and quality checks at every stage of manufacturing.' },
    { icon: <Shield size={32} />, title: 'Safety Standards', description: 'All structures comply with international safety and building regulations.' },
    { icon: <Truck size={32} />, title: 'Logistics', description: 'Full-service delivery and professional installation at your venue.' },
  ];

  const products = [
    {
      name: 'Wedding Mandaps',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
      description: 'Beautifully crafted mandaps with traditional and modern designs.',
      details: ['Customizable dimensions', 'Premium materials', 'Intricate detailing'],
    },
    {
      name: 'Stage Structures',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800',
      description: 'Professional stages for events, concerts, and theatrical productions.',
      details: ['Modular design', 'Quick assembly', 'Load capacity up to 500 kg/sqm'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9f5] font-sans selection:bg-[#940242] selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeIn} className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Industrial <br />
            <span className="text-[#940242]">Excellence</span>
          </h1>
          <p className="text-[#958f89] text-xl max-w-lg font-medium">
            Engineering the future of events with precision manufacturing and world-class structural design.
          </p>
          <div className="flex gap-4">
            <button onClick={onContactClick} className="bg-[#940242] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Get Quote
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Manufacturing Facility" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#940242]/40 to-transparent" />
        </motion.div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl font-bold uppercase tracking-tight mb-16 text-center">
            Our Core Capabilities
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-[#f8f9f5] border border-transparent hover:border-[#940242]/20 transition-all"
              >
                <div className="text-[#940242] mb-6">{cap.icon}</div>
                <h3 className="text-xl font-bold mb-3 uppercase">{cap.title}</h3>
                <p className="text-[#958f89]">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight - Image Left */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 mb-24 items-center`}>
            <motion.div 
              whileInView={{ x: i % 2 === 0 ? [-50, 0] : [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-4xl font-black uppercase text-[#940242]">{product.name}</h3>
              <p className="text-lg text-[#958f89]">{product.description}</p>
              <ul className="grid grid-cols-1 gap-3">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-[#010101]">
                    <CheckCircle2 className="text-[#940242]" size={20} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Stats/Specs - Dark Section */}
      <section className="py-24 px-6 bg-[#010101] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <h4 className="text-5xl font-black text-[#940242]">500+</h4>
            <p className="uppercase tracking-widest text-sm text-gray-400">Monthly Capacity</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-5xl font-black text-[#940242]">10yr</h4>
            <p className="uppercase tracking-widest text-sm text-gray-400">Experience</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-5xl font-black text-[#940242]">ISO</h4>
            <p className="uppercase tracking-widest text-sm text-gray-400">Certified</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-5xl font-black text-[#940242]">24/7</h4>
            <p className="uppercase tracking-widest text-sm text-gray-400">Technical Support</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter">Start Your Build Today</h2>
          <p className="text-[#958f89] text-xl">Join the elite event planners who trust our structures for their biggest moments.</p>
          <button 
             onClick={onContactClick}
             className="inline-block bg-[#940242] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black transition-colors"
          >
            Request Factory Tour
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default ManufacturerPage;