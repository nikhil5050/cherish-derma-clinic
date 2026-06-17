"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="section-pad bg-cream-light relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sand/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />

      {/* Quote mark decoration */}
      <div className="absolute top-16 left-10 font-heading text-[220px] text-forest/[0.03] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Patient Stories"
          title="Real results, real confidence"
          center
          className="mb-16"
        />

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative bg-cream rounded-3xl p-8 md:p-12 shadow-sm shadow-forest/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-terracotta text-terracotta"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                size={28}
                className="text-sand mb-4 fill-sand/40"
              />

              <blockquote className="font-heading text-2xl md:text-3xl font-light text-forest leading-snug mb-8">
                "{TESTIMONIALS[active].text}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-body text-sm font-semibold text-forest">
                    {TESTIMONIALS[active].name}
                  </p>
                  <p className="font-body text-xs text-forest/50 mt-0.5">
                    {TESTIMONIALS[active].location}
                  </p>
                </div>
                <div className="px-3 py-1.5 bg-terracotta/10 rounded-full">
                  <p className="font-body text-xs font-medium text-terracotta">
                    {TESTIMONIALS[active].treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-forest"
                      : "w-2 h-2 bg-forest/20 hover:bg-forest/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini cards below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl transition-all duration-200 border ${
                i === active
                  ? "bg-forest text-cream border-forest"
                  : "bg-cream text-forest border-cream-dark/30 hover:border-forest/20"
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={10}
                    className={
                      i === active
                        ? "fill-terracotta text-terracotta"
                        : "fill-terracotta/50 text-terracotta/50"
                    }
                  />
                ))}
              </div>
              <p
                className={`font-body text-xs font-semibold ${
                  i === active ? "text-cream" : "text-forest"
                }`}
              >
                {t.name}
              </p>
              <p
                className={`font-body text-[10px] mt-0.5 ${
                  i === active ? "text-cream/50" : "text-forest/40"
                }`}
              >
                {t.treatment}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
