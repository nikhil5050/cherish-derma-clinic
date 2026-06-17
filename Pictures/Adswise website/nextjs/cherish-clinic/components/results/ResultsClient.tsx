"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Play, X, Clock, ChevronDown, Award, Users, Sparkles, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BeforeAfterSlider from "@/components/results/BeforeAfterSlider";

const CATEGORY_TABS = ["All", "Hair", "Acne", "Skin", "Anti-Ageing"];

const CASES = [
  {
    id: 1,
    category: "Hair",
    tag: "Hair Regrowth",
    treatment: "PRP + GFC Therapy",
    duration: "4 months",
    patient: "Female, 32",
    result: "80% density increase",
    beforeImg:
      "https://images.unsplash.com/photo-1522337360826-0a3fc7cf9dba?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Acne",
    tag: "Acne & Scars",
    treatment: "Medical Acne Protocol",
    duration: "3 months",
    patient: "Female, 24",
    result: "95% breakout reduction",
    beforeImg:
      "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Skin",
    tag: "Pigmentation",
    treatment: "Q-Switch + Chemical Peels",
    duration: "2 months",
    patient: "Female, 38",
    result: "Visibly even skin tone",
    beforeImg:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Anti-Ageing",
    tag: "Anti-Ageing",
    treatment: "RF Microneedling + Fillers",
    duration: "6 weeks",
    patient: "Female, 45",
    result: "Lifted & volumized",
    beforeImg:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Hair",
    tag: "Men's Hair",
    treatment: "Exosome + Mesotherapy",
    duration: "5 months",
    patient: "Male, 29",
    result: "Hairline restored",
    beforeImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Skin",
    tag: "Bridal Glow",
    treatment: "Bridal Confidence Program",
    duration: "6 months",
    patient: "Female, 27",
    result: "Radiant bridal skin",
    beforeImg:
      "https://images.unsplash.com/photo-1571512599285-9cb4bea884d2?auto=format&fit=crop&w=600&q=80",
    afterImg:
      "https://images.unsplash.com/photo-1594736797933-d0e20b17d530?auto=format&fit=crop&w=600&q=80",
  },
];



const WRITTEN_TESTIMONIALS = [
  {
    name: "Priya S.",
    location: "Koregaon Park, Pune",
    text: "I've tried multiple clinics before, but Cherish Derma is in a different league. Dr. Snehal's approach is incredibly thorough — she found the root cause of my melasma when others didn't. After 3 months, my skin is the clearest it's been in years.",
    rating: 5,
    treatment: "Pigmentation Treatment",
  },
  {
    name: "Rahul M.",
    location: "Baner, Pune",
    text: "Skeptical about hair loss clinics — but Cherish Derma completely changed my perspective. The PRP + GFC combination they designed for me showed results by month 2. Dr. Snehal explains everything so clearly. Worth every penny.",
    rating: 5,
    treatment: "Hair Regrowth Program",
  },
  {
    name: "Sneha D.",
    location: "Aundh, Pune",
    text: "The Bridal Confidence Program was the best investment I made for my wedding. 5 months in and my skin transformed completely. I didn't need heavy makeup on my big day because my skin was glowing on its own.",
    rating: 5,
    treatment: "Bridal Confidence Program",
  },
  {
    name: "Aditya K.",
    location: "Viman Nagar, Pune",
    text: "As a corporate professional, I needed efficient results. The Corporate Skin Confidence program was exactly that. No fluff, just results. My colleagues keep asking what changed. I'd never felt this confident in meetings.",
    rating: 5,
    treatment: "Corporate Skin Confidence",
  },
];



export default function ResultsClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filteredCases =
    activeTab === "All" ? CASES : CASES.filter((c) => c.category === activeTab);

  const prev = () =>
    setActiveTestimonial((a) => (a - 1 + WRITTEN_TESTIMONIALS.length) % WRITTEN_TESTIMONIALS.length);
  const next = () =>
    setActiveTestimonial((a) => (a + 1) % WRITTEN_TESTIMONIALS.length);

  return (
    <div className="pt-20">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.2),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,50,44,0.65),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        {/* Animated blobs */}
        <motion.div
          className="absolute top-[6%] right-[10%] w-[400px] h-[400px] rounded-full bg-terracotta/10 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[8%] left-[4%] w-[300px] h-[300px] rounded-full bg-forest-light/25 blur-[70px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <span className="font-heading text-[22vw] font-light text-cream/[0.03] leading-none tracking-[0.14em]">
            RESULTS
          </span>
        </motion.div>

        {/* Floating particles */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: i % 2 === 0 ? 8 : 5,
              height: i % 2 === 0 ? 8 : 5,
              background: i % 3 === 0 ? "rgba(201,119,90,0.42)" : "rgba(203,177,144,0.26)",
              top: `${10 + i * 12}%`,
              left: `${4 + i * 2}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.15, 0.68, 0.15] }}
            transition={{ duration: 3.2 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <div className="  gap-14 items-center">

            {/* Left: Content */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="h-px bg-terracotta"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ width: 48, transformOrigin: "left" }}
                />
                <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-terracotta">
                  Patient Transformations
                </p>
              </motion.div>

              <motion.h1
                className="font-heading font-light text-5xl md:text-7xl lg:text-7xl text-cream-light leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Real stories, <em className="italic text-terracotta">real results.</em>
              </motion.h1>

              

              <motion.p
                className="font-body text-base md:text-lg text-cream/55 max-w-lg leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28 }}
              >
                Every transformation at Cherish Derma Clinic is a testament to
                doctor-led, personalised care. See the difference for yourself.
              </motion.p>

              {/* Stat chips */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38 }}
              >
                {[
                  { icon: Users, label: "1000+ patients transformed" },
                  { icon: Award, label: "96% satisfaction rate" },
                  { icon: TrendingUp, label: "Proven clinical results" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 glass-dark rounded-full px-4 py-2.5"
                  >
                    <Icon size={13} className="text-terracotta shrink-0" />
                    <span className="font-body text-xs font-medium text-cream/80 tracking-wide">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48 }}
              >
                <a
                  href="#transformations"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-terracotta text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  See Transformations
                  <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="/appointment"
                  className="flex items-center gap-2 px-7 py-3.5 border border-cream/20 text-cream text-sm font-body font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
                >
                  Book Consultation
                </a>
              </motion.div>
            </div>

            {/* Right: Stat visual cards */}
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Main stat card */}
              
              {/* Smaller stat cards */}
              

              {/* Floating badge */}
              

              {/* Floating TrendingUp badge */}
             
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35">
          <span className="font-body text-[10px] text-cream tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-cream" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-forest/60 to-transparent pointer-events-none" />
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="bg-cream-light border-b border-cream-dark/30">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-cream-dark/30">
            {[
              { value: 1000, suffix: "+", label: "Happy Patients", icon: Users },
              { value: 12, suffix: "+", label: "Years of Excellence", icon: Award },
              { value: 30, suffix: "+", label: "Advanced Treatments", icon: Sparkles },
              { value: 96, suffix: "%", label: "Patient Satisfaction", icon: TrendingUp },
            ].map(({ value, suffix, label, icon: Icon }) => (
              <ScrollReveal key={label}>
                <div className="text-center md:px-8">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={15} className="text-terracotta" />
                    <span className="font-heading text-4xl md:text-5xl font-light text-forest">
                      <AnimatedCounter value={value} suffix={suffix} />
                    </span>
                  </div>
                  <p className="font-body text-xs font-medium text-forest/50 tracking-wide uppercase">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before/After Section ──────────────────────────────── */}
      <section className="section-pad bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sand/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            eyebrow="Visual Evidence"
            title={`Before & after\ntransformations`}
            subtitle="Drag the slider on each photo to reveal the transformation. All results are from real Cherish Derma patients."
            center
            className="mb-12"
          />

          {/* Category filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-forest text-cream-light shadow-sm"
                      : "bg-cream-light text-forest/60 hover:text-forest hover:bg-cream-dark/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Cases grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCases.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="bg-cream-light rounded-3xl overflow-hidden shadow-sm shadow-forest/5 hover:shadow-md hover:shadow-forest/8 transition-shadow duration-300"
                >
                  <div className="p-3">
                    <BeforeAfterSlider
                      beforeImg={c.beforeImg}
                      afterImg={c.afterImg}
                    />
                  </div>
                  <div className="px-5 pb-5">
                    {/* Tag + result */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-block font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-terracotta bg-terracotta/10 rounded-full px-3 py-1">
                        {c.tag}
                      </span>
                      <span className="font-body text-[10px] font-semibold text-forest/50 bg-cream rounded-full px-3 py-1 whitespace-nowrap">
                        {c.result}
                      </span>
                    </div>
                    <p className="font-heading text-xl font-light text-forest mt-3 mb-1">
                      {c.treatment}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 font-body text-[11px] text-forest/45">
                        <Clock size={10} />
                        {c.duration}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-forest/20" />
                      <span className="font-body text-[11px] text-forest/45">{c.patient}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <p className="text-center font-body text-forest/40 py-16">
              No cases in this category yet.
            </p>
          )}

          <ScrollReveal>
            <p className="text-center font-body text-xs text-forest/35 mt-10 max-w-lg mx-auto">
              *Photos shown with patient consent. Individual results may vary based on skin type and treatment adherence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      
      

      {/* ── Written Testimonials ──────────────────────────────── */}
      <section className="section-pad bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sand/15 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />
        <div className="absolute top-16 left-8 font-heading text-[200px] text-forest/[0.03] leading-none select-none pointer-events-none">
          "
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            eyebrow="Patient Stories"
            title="Words that warm our hearts"
            center
            className="mb-14"
          />

          {/* Main testimonial card */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative bg-cream-light rounded-3xl p-8 md:p-12 shadow-sm shadow-forest/5 border border-cream-dark/20"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(WRITTEN_TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-terracotta text-terracotta" />
                  ))}
                </div>
                <Quote size={26} className="text-sand mb-4 fill-sand/40" />
                <blockquote className="font-heading text-2xl md:text-3xl font-light text-forest leading-snug mb-8">
                  {WRITTEN_TESTIMONIALS[activeTestimonial].text}
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-body text-sm font-semibold text-forest">
                      {WRITTEN_TESTIMONIALS[activeTestimonial].name}
                    </p>
                    <p className="font-body text-xs text-forest/45 mt-0.5">
                      {WRITTEN_TESTIMONIALS[activeTestimonial].location}
                    </p>
                  </div>
                  <span className="font-body text-xs font-medium text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full">
                    {WRITTEN_TESTIMONIALS[activeTestimonial].treatment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="flex gap-2">
                {WRITTEN_TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? "w-6 h-2 bg-forest"
                        : "w-2 h-2 bg-forest/20 hover:bg-forest/40"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-forest/15 flex items-center justify-center text-forest hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mini cards */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {WRITTEN_TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 border ${
                  i === activeTestimonial
                    ? "bg-forest text-cream border-forest"
                    : "bg-cream-light text-forest border-cream-dark/30 hover:border-forest/20"
                }`}
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={9}
                      className={
                        i === activeTestimonial
                          ? "fill-terracotta text-terracotta"
                          : "fill-terracotta/50 text-terracotta/50"
                      }
                    />
                  ))}
                </div>
                <p className={`font-body text-xs font-semibold ${i === activeTestimonial ? "text-cream" : "text-forest"}`}>
                  {t.name}
                </p>
                <p className={`font-body text-[10px] mt-0.5 ${i === activeTestimonial ? "text-cream/50" : "text-forest/40"}`}>
                  {t.treatment}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust badges ──────────────────────────────────────── */}
      <section className="bg-cream-light border-t border-cream-dark/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-center font-body text-xs font-semibold tracking-[0.3em] uppercase text-forest/30 mb-8">
              Why patients trust us
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "USFDA Approved", desc: "All devices and lasers are USFDA certified" },
              { icon: Users, title: "Doctor-Led", desc: "Every treatment supervised by Dr. Snehal Karape" },
              { icon: Sparkles, title: "Zero Upselling", desc: "Only what your skin actually needs" },
              { icon: TrendingUp, title: "Evidence-Based", desc: "Protocols backed by clinical research" },
            ].map(({ icon: Icon, title, desc }) => (
              <ScrollReveal key={title}>
                <div className="text-center p-6 rounded-2xl bg-cream border border-cream-dark/20 hover:border-terracotta/20 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={18} className="text-terracotta" />
                  </div>
                  <p className="font-body text-sm font-semibold text-forest mb-1">{title}</p>
                  <p className="font-body text-xs text-forest/45 leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-terracotta mb-6">
              Your Turn
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-light text-4xl md:text-5xl lg:text-6xl text-cream-light leading-tight mb-6">
              Your transformation
              <br />
              <em className="italic text-terracotta-light">starts here.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-base text-cream/55 leading-relaxed mb-10 max-w-md mx-auto">
              Join 1000+ patients who trusted Dr. Snehal Karape to transform their
              skin and hair — and never looked back.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-cream-light font-body font-medium text-sm rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-cream/20 text-cream/70 font-body font-medium text-sm rounded-full hover:border-cream/40 hover:text-cream transition-all duration-300"
              >
                Explore Treatments
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Video Modal ───────────────────────────────────────── */}
      
    </div>
  );
}
