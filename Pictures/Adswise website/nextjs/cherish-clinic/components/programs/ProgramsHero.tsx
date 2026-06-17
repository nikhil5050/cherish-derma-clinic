"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Users, CheckCircle } from "lucide-react";

const CHIPS = [
  { icon: Sparkles, label: "5 Signature Programs" },
  { icon: Clock, label: "4–24 Week Journeys" },
  { icon: Users, label: "Fully Personalised" },
];

const PROGRAM_NAMES = [
  { name: "Acne Confidence", tag: "Skin" },
  { name: "Hair Regrowth", tag: "Hair" },
  { name: "Bridal Glow", tag: "Bridal" },
  { name: "Men's Skin & Hair", tag: "Men's" },
  { name: "Corporate Radiance", tag: "Lifestyle" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function ProgramsHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(203,177,144,0.2),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,50,44,0.65),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[5%] left-[10%] w-[380px] h-[380px] rounded-full bg-sand/10 blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[320px] h-[320px] rounded-full bg-terracotta/10 blur-[70px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <span className="font-heading text-[18vw] font-light text-cream/[0.03] leading-none tracking-[0.12em]">
          JOURNEY
        </span>
      </motion.div>

      {/* Floating particles */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? 7 : 4,
            height: i % 2 === 0 ? 7 : 4,
            background:
              i % 3 === 0 ? "rgba(201,119,90,0.4)" : "rgba(203,177,144,0.25)",
            top: `${8 + i * 12}%`,
            right: `${3 + i * 2}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.65, 0.15] }}
          transition={{
            duration: 3 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.div className="flex items-center gap-3 mb-8" {...fadeUp(0)}>
              <motion.div
                className="h-px bg-terracotta origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ width: 48 }}
              />
              <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-terracotta">
                Treatment Journeys
              </p>
            </motion.div>

            <motion.h1
              className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6"
              {...fadeUp(0.1)}
            >
              Programs built
              <br />
              for{" "}
              <em className="italic text-terracotta">transformation</em>
            </motion.h1>
            
<motion.div
  initial={{ scaleX: 0, opacity: 0 }}
  animate={{ scaleX: 1, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.25 }} // <-- Removed transformOrigin from here
  style={{ transformOrigin: "left" }}          // <-- This is the correct place for it
/>

            <motion.p
              className="font-body text-base md:text-lg text-cream/55 max-w-lg leading-relaxed mb-10"
              {...fadeUp(0.28)}
            >
              Our signature programs are comprehensive treatment journeys that
              address root causes and deliver visible, lasting results.
            </motion.p>

            {/* Chips */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              {CHIPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 glass-dark rounded-full px-4 py-2.5"
                >
                  <Icon size={13} className="text-terracotta shrink-0" />
                  <span className="font-body text-[12px] text-cream/70">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.48)}>
              <Link
                href="/appointment"
                className="group flex items-center gap-2 px-7 py-3.5 bg-terracotta text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#programs"
                className="flex items-center gap-2 px-7 py-3.5 border border-cream/20 text-cream text-sm font-body font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
              >
                View All Programs
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Program list card ── */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header card */}
            <div className="relative rounded-3xl border border-cream/10 bg-white/[0.05] backdrop-blur-sm p-7 mb-4 overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sand/10 rounded-full blur-2xl pointer-events-none" />
              <p className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-terracotta mb-3">
                Signature Programs
              </p>
              <p className="font-heading text-xl font-light text-cream/80 leading-snug mb-6">
                Each program is a complete, doctor-designed journey — not just a
                one-off treatment.
              </p>

              {/* Program list */}
              <div className="space-y-3">
                {PROGRAM_NAMES.map(({ name, tag }, i) => (
                  <motion.div
                    key={name}
                    className="flex items-center justify-between py-2.5 border-b border-cream/8 last:border-0"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-terracotta shrink-0" />
                      <span className="font-body text-sm text-cream/75">{name}</span>
                    </div>
                    <span className="font-body text-[10px] font-semibold tracking-wider uppercase text-terracotta/70 bg-terracotta/10 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom mini cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "5", label: "Programs" },
                { num: "3–6", label: "Month Journeys" },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={num}
                  className="rounded-2xl border border-cream/10 bg-white/[0.04] backdrop-blur-sm p-5 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(201,119,90,0.3)" }}
                >
                  <p className="font-heading text-3xl font-light text-cream">{num}</p>
                  <p className="font-body text-[11px] text-cream/40 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-5 -right-3 bg-terracotta rounded-2xl px-4 py-2.5 shadow-xl shadow-terracotta/20"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-cream/90">
                Doctor-Led
              </p>
            </motion.div>

            {/* Floating clock badge */}
            <motion.div
              className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-forest-light/60 border border-cream/10 flex items-center justify-center shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Clock size={18} className="text-terracotta" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-forest/60 to-transparent pointer-events-none" />
    </section>
  );
}
