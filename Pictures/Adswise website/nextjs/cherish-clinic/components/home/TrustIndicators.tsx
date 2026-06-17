"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function TrustIndicators() {
  return (
    <section className="relative bg-forest py-16 md:py-20 overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-center relative group"
            >
              {/* Divider (not last on md+) */}
              {i < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-cream/10" />
              )}

              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-cream-light mb-2 leading-none">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="font-body text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-sand/70">
                {stat.label}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-terracotta rounded-full group-hover:w-12 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
