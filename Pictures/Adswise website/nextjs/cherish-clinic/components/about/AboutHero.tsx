"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap, Users } from "lucide-react";

const CHIPS = [
  { icon: GraduationCap, number: "MD", label: "Dermatology, Venereology & Leprosy" },
  { icon: Award, number: "12+", label: "Years of Clinical Excellence" },
  { icon: Users, number: "1K+", label: "Patients Transformed" },
];

const STAT_CARDS = [
  { num: "12+", label: "Years" },
  { num: "1K+", label: "Patients" },
  { num: "100%", label: "Consultation-Led" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function AboutHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.22),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,50,44,0.7),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Animated glow blobs */}
      <motion.div
        className="absolute top-[8%] right-[12%] w-[420px] h-[420px] rounded-full bg-terracotta/12 blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[2%] w-[340px] h-[340px] rounded-full bg-forest-light/25 blur-[70px] pointer-events-none"
        animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* Watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <span className="font-heading text-[22vw] font-light text-cream/[0.03] leading-none tracking-[0.15em]">
          ABOUT
        </span>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? 8 : 5,
            height: i % 2 === 0 ? 8 : 5,
            background: i % 3 === 0 ? "rgba(201,119,90,0.45)" : "rgba(203,177,144,0.28)",
            top: `${12 + i * 13}%`,
            left: `${3 + i * 2.5}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 3.2 + i * 0.9, repeat: Infinity, ease: "easeInOut", delay: i * 0.55 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-22 relative z-10 w-full">
        <div className="grid  gap-14 lg:gap-20 items-center">

          {/* Left: Content */}
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
                Consultation-Led Care · Pune
              </p>
            </motion.div>

            <motion.h1
              className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6"
              {...fadeUp(0.1)}
            >
              A Skin & Hair Clinic{" "}
              <em className="italic text-terracotta">Built on Honesty</em>
            </motion.h1>

            <motion.div
              className="w-16 h-px bg-cream/15 mb-6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="font-body text-base md:text-lg text-cream/55 max-w-lg leading-relaxed mb-10"
              {...fadeUp(0.28)}
            >
              Cherish Derma Clinic is a consultation‑led skin, hair and aesthetic care clinic
              in Pune — focused on planned, personalized treatment and steady, realistic
              improvement, not quick fixes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              {CHIPS.map(({ icon: Icon, number, label }) => (
                <div
                  key={number}
                  className="flex items-center gap-2.5 glass-dark rounded-full px-4 py-2.5"
                >
                  <Icon size={13} className="text-terracotta shrink-0" />
                  <span className="font-heading text-sm font-light text-cream">{number}</span>
                  <span className="font-body text-[11px] text-cream/45 leading-tight">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.48)}>
              <Link
                href="/appointment"
                className="group flex items-center gap-2 px-7 py-3.5 bg-terracotta text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book Consultation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-7 py-3.5 border border-cream/20 text-cream text-sm font-body font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual panel */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Mission card */}
            {/* <div className="relative rounded-3xl border border-cream/10 bg-white/[0.05] backdrop-blur-sm p-8 mb-4 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-terracotta/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center mb-6">
                <span className="font-heading text-2xl text-terracotta leading-none select-none">&ldquo;</span>
              </div>
              <p className="font-heading text-xl md:text-2xl font-light text-cream-light leading-snug mb-6 relative z-10">
                To provide safe, honest and structured skin and hair care that respects each
                patient&rsquo;s individuality, time and trust.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-9 h-9 rounded-full bg-terracotta/25 border border-terracotta/40 flex items-center justify-center shrink-0">
                  <span className="font-heading text-sm text-terracotta">SK</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-cream/80">Dr. Snehal Karape</p>
                  <p className="font-body text-xs text-cream/38">Our Mission</p>
                </div>
              </div>
            </div> */}

            {/* Stat mini-cards */}
            {/* <div className="grid grid-cols-3 gap-3">
              {STAT_CARDS.map(({ num, label }, i) => (
                <motion.div
                  key={num}
                  className="rounded-2xl border border-cream/10 bg-white/[0.04] backdrop-blur-sm p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(201,119,90,0.35)" }}
                >
                  <p className="font-heading text-2xl font-light text-cream">{num}</p>
                  <p className="font-body text-[11px] text-cream/40 mt-1 tracking-wide">{label}</p>
                </motion.div>
              ))}
            </div> */}

            {/* Floating badge */}
            {/* <motion.div
              className="absolute -top-5 -right-3 bg-terracotta rounded-2xl px-4 py-2.5 shadow-xl shadow-terracotta/20"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-cream/90">
                care. heal. glow.
              </p>
            </motion.div> */}

            {/* Floating award dot */}
            {/* <motion.div
              className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-forest-light/60 border border-cream/10 flex items-center justify-center shadow-lg"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <Award size={18} className="text-terracotta" />
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-forest/60 to-transparent pointer-events-none" />
    </section>
  );
}
