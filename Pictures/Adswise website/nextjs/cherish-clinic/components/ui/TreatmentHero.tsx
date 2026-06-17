"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Layers, Zap } from "lucide-react";

interface TreatmentHeroProps {
  category: string;
  title: string;
  headline?: string;
  sessionDuration?: string;
  numSessions?: string;
  downtime?: string;
  heroImg: string;
}

export default function TreatmentHero({
  category,
  title,
  headline,
  sessionDuration,
  numSessions,
  downtime,
  heroImg,
}: TreatmentHeroProps) {
  const chips = [
    sessionDuration && { icon: <Clock size={12} />, label: sessionDuration },
    numSessions && { icon: <Layers size={12} />, label: numSessions },
    downtime && { icon: <Zap size={12} />, label: `Downtime: ${downtime}` },
  ].filter(Boolean) as { icon: React.ReactNode; label: string }[];

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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/services"
                className="font-body text-xs font-medium text-forest/40 hover:text-forest/70 transition-colors"
              >
                Treatments
              </Link>
              <span className="text-forest/25 text-xs">/</span>
              <span className="font-body text-xs font-medium text-forest/60">
                {title}
              </span>
            </div>

            <span className="inline-block font-body text-[10px] font-bold tracking-[0.3em] uppercase text-terracotta bg-terracotta/10 rounded-full px-4 py-1.5 mb-6 w-fit">
              {category}
            </span>

            <h1 className="font-heading font-light text-5xl md:text-6xl text-forest mb-4 leading-tight">
              {title}
            </h1>

            {headline && (
              <p className="font-heading text-xl md:text-2xl font-light italic text-terracotta mb-10 max-w-xl">
                {headline}
              </p>
            )}

            {chips.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {chips.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-forest/5 border border-forest/10 rounded-full px-4 py-2"
                  >
                    <span className="text-terracotta">{icon}</span>
                    <span className="font-body text-xs font-medium text-forest/70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:self-stretch lg:min-h-[540px] xl:min-h-[660px] lg:-mr-[max(1.5rem,calc((100vw-80rem)/2))] overflow-hidden rounded-l-3xl lg:rounded-none"
          >
            <Image
              src={heroImg}
              alt={title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
