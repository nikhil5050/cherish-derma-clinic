"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-dark"
    >
      {/* Background Video */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays — cream gradient left (text area) fades to transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60 pointer-events-none" />

      {/* Logo watermark */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[22vw] font-light text-forest/[0.025] leading-none tracking-widest whitespace-nowrap">
          CHERISH
        </span>
      </div> */}

      {/* Floating decorative dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-terracotta/30 pointer-events-none"
          style={{ top: `${20 + i * 18}%`, right: `${4 + i * 5}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-sand/50 pointer-events-none"
          style={{ top: `${30 + i * 20}%`, left: `${4 + i * 3}%` }}
          animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-4 mt-4">
            Cherish Skin Clinic Pune
          </p>

          {/* Heading - Structured optimally for Search Engines */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.90] text-forest mb-8 tracking-tight"
          >
            Pune's Trusted 
            <br /> <span className="text-terracotta font-normal">Skin & Hair Care Clinic</span> 
          </motion.h1>

          {/* Subheading - Contextual secondary keywords */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-body text-lg md:text-xl text-forest/70 max-w-2xl leading-relaxed mb-12"
          >
            
            <strong>Cherish Derma Clinic</strong> is a consultation‑based skin clinic in Pune focused on acne, pigmentation, hair fall, dull skin and aesthetic skin concerns. Every treatment plan begins with careful assessment, honest guidance and personalized recommendations designed around your needs, skin type and long‑term goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/appointment"
              className="group relative flex items-center gap-2 px-8 py-4 bg-forest text-cream-light text-sm font-body font-medium rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-0 bg-terracotta translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 px-8 py-4 border border-forest/30 text-forest text-sm font-body font-medium rounded-full hover:border-terracotta hover:text-terracotta hover:bg-terracotta/5 transition-all duration-300 backdrop-blur-sm bg-cream/20"
            >
              Explore Treatments
              <ArrowRight size={15} className="opacity-60" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-forest/50">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-forest/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}