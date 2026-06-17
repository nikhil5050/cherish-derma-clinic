"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface HeroStat {
  icon: React.ReactNode;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  stats?: HeroStat[];
  imageSrc: string;
  imageAlt: string;
  imageMode?: "contain" | "cover";
  unoptimized?: boolean;
}

export default function PageHero({
  eyebrow,
  heading,
  description,
  stats = [],
  imageSrc,
  imageAlt,
  imageMode = "contain",
  unoptimized = false,
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 lg:pb-0 lg:min-h-[90vh] bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-sand/20 pointer-events-none" />
      {/* Decorative circles */}
      <div className="absolute top-16 right-[8%] w-[600px] h-[600px] rounded-full border border-sand/20 pointer-events-none" />
      <div className="absolute top-32 right-[4%] w-[440px] h-[440px] rounded-full border border-terracotta/10 pointer-events-none" />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? 10 : 6,
            height: i % 2 === 0 ? 10 : 6,
            background:
              i % 2 === 0 ? "rgba(201,119,90,0.25)" : "rgba(203,177,144,0.4)",
            top: `${15 + i * 15}%`,
            right: `${6 + i * 4}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 3.5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10 lg:h-[calc(90vh-9rem)] lg:flex lg:flex-col lg:justify-center">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-4 items-stretch">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl flex flex-col justify-center lg:py-16"
          >
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
              {eyebrow}
            </p>
            <h1 className="font-heading font-light text-5xl md:text-6xl text-forest mb-6 leading-tight">
              {heading}
            </h1>
            <p className="font-body text-lg text-forest/60 leading-relaxed max-w-lg">
              {description}
            </p>

            {stats.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-forest/50 font-body text-sm"
                  >
                    <span className="text-terracotta">{stat.icon}</span>
                    {stat.label}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Hero Image — fills section height */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:self-stretch lg:min-h-[540px] xl:min-h-[660px] lg:-mr-[max(1.5rem,calc((100vw-80rem)/2))] overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className={`${
                imageMode === "cover"
                  ? "object-cover object-center"
                  : "object-contain object-right"
              }`}
              sizes="(max-width: 1024px) 100vw, 58vw"
              unoptimized={unoptimized}
            />
            {imageMode === "cover" && (
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/40 pointer-events-none" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
