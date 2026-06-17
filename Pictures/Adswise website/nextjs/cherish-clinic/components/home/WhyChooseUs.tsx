"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Zap, Heart, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHY_CHOOSE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  zap: Zap,
  heart: Heart,
};

// const STATS = [
//   { n: "12+", l: "Years of Trust" },
//   { n: "1K+", l: "Happy Patients" },
//   { n: "96%", l: "Success Rate" },
// ];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white relative overflow-hidden py-10 lg:py-12">
      {/* Editorial Decorative Lines */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-sand/20 to-transparent" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sand/10 hidden lg:block -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Context, Branding, & Fast Stats (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeader
                eyebrow="Why Cherish Derma"
                title="Where scientific expertise meets raw confidence"
                subtitle="We built Cherish Derma on a simple, uncompromising belief: you deserve transparent, medical-grade dermatology — not over-hyped skincare routines dressed up as treatments."
              />

              {/* Bento-Style Minimalist Stats Strip */}
              {/* <div className="grid grid-cols-3 gap-4 mt-12 p-2 bg-cream-light rounded-2xl border border-sand/20">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="text-center py-4 bg-white rounded-xl shadow-sm border border-sand/10">
                    <p className="font-heading text-xl lg:text-2xl font-semibold text-forest">
                      {stat.n}
                    </p>
                    <p className="font-body text-[10px] text-forest/50 tracking-wider uppercase mt-1">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Premium Ambient Visual Placeholder */}
            <div className="relative mt-12 rounded-3xl overflow-hidden aspect-[16/10] bg-cream border border-sand/30 shadow-md group hidden lg:block">
              <Image
                src="https://i.pinimg.com/1200x/e7/73/4f/e7734f6cc7fde33779389ee62e0de05d.jpg" // Replace with a crisp photo of your premium clinic setup or high-end equipment
                alt="Cherish Derma Clinic Luxury Care Suite"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
              <p className="absolute bottom-4 left-5 font-body text-xs text-cream/80 flex items-center gap-2">
                Premium Doctor-Led Care Environment <ArrowRight size={12} className="text-terracotta" />
              </p>
            </div>
          </div>

          {/* Right Column: Premium Numbered Track Cards (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex gap-6 p-6 lg:p-8 rounded-[2rem] bg-cream-light/60 hover:bg-cream border border-sand/10 hover:border-sand/40 transition-all duration-300"
                >
                  {/* Big Stylized Index Tracker Background */}
                  <span className="absolute top-4 right-6 font-heading text-5xl lg:text-6xl font-extralight text-sand/15 select-none transition-colors duration-300 group-hover:text-terracotta/10">
                    0{i + 1}
                  </span>

                  {/* Elegant Icon Presentation */}
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sand/20 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-forest group-hover:text-cream group-hover:border-transparent">
                    <Icon size={20} className="text-forest transition-colors duration-300 group-hover:text-cream" />
                  </div>

                  {/* Content Layout */}
                  <div className="flex-1 pr-8">
                    <h3 className="font-heading text-lg lg:text-xl font-medium text-forest mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-forest/70 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}