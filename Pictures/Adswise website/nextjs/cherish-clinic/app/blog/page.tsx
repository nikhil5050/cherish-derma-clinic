"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { BLOG_POSTS } from "@/lib/constants";

const CATEGORIES = ["All", "Hair Care", "Skincare", "Acne", "Anti-Ageing", "Bridal", "Laser", "Lifestyle"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  
  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS.filter((p) => !p.featured)
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
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
              background: i % 2 === 0 ? "rgba(201,119,90,0.25)" : "rgba(203,177,144,0.4)",
              top: `${15 + i * 15}%`,
              right: `${6 + i * 4}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3.5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10 lg:h-[calc(90vh-9rem)] lg:flex lg:flex-col lg:justify-center">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-4 items-stretch">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl flex flex-col justify-center lg:py-16"
            >
              <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
                Skin & Hair Insights
              </p>
              <h1 className="font-heading font-light text-5xl md:text-6xl  text-forest mb-6">
                Expert Skin & Hair <span className=" text-terracotta">Blog</span>
              </h1>
              <p className="font-body text-lg text-forest/60 leading-relaxed max-w-lg">
                Science-backed advice on skin, hair, and wellness — curated by
                Dr. Snehal Karape and the Cherish Derma team.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-2 mt-12">
                {[
                  { icon: <BookOpen size={14} />, label: `${BLOG_POSTS.length} Articles` },
                  { icon: <Clock size={14} />, label: "Expert Authored" },
                  { icon: <Calendar size={14} />, label: "Updated Monthly" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 text-forest/50 font-body text-sm">
                    <span className="text-terracotta">{stat.icon}</span>
                    {stat.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Hero Image — fills section height */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:self-stretch lg:min-h-[540px] xl:min-h-[660px] lg:-mr-[max(1.5rem,calc((100vw-80rem)/2))] overflow-hidden"
            >
              <Image
                src="https://cherishdermaclinic.com/bloghero.png"
                alt="Cherish Derma Clinic Insights"
                fill
                priority
                className="object-contain object-right"
                sizes="(max-width: 1024px) 100vw, 58vw"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className="sticky top-[68px] z-40 bg-cream/95 backdrop-blur-md border-b border-sand/25">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-forest text-cream-light shadow-md"
                    : "bg-cream-dark/40 text-forest hover:bg-forest/10"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Post ── */}
      {featuredPost && activeCategory === "All" && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden aspect-[4/3]"
                  >
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 90vw, 55vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 bg-terracotta text-cream-light text-xs font-body font-semibold rounded-full tracking-wide">
                        Featured
                      </span>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-body font-semibold rounded-full tracking-wide">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-body text-forest/40">
                        <Clock size={11} />
                        {featuredPost.readTime}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-body text-forest/40">
                        <Calendar size={11} />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="font-heading font-light text-3xl md:text-4xl lg:text-5xl text-forest leading-tight mb-5 group-hover:text-terracotta transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="font-body text-forest/60 text-base leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-body font-medium text-forest group-hover:text-terracotta transition-colors duration-200">
                      Read Article
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Blog Grid ── */}
      <section className="pb-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {activeCategory !== "All" && (
            <ScrollReveal>
              <h2 className="font-heading font-light text-3xl text-forest mb-10">
                {activeCategory}
              </h2>
            </ScrollReveal>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group bg-cream-light rounded-3xl overflow-hidden border border-sand/30 hover:border-terracotta/40 hover:shadow-xl hover:shadow-terracotta/8 transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-600 ease-out"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-cream/90 backdrop-blur-sm text-terracotta text-[10px] font-body font-semibold rounded-full tracking-wider uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1 text-[11px] font-body text-forest/40">
                          <Clock size={10} />
                          {post.readTime}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-forest/20" />
                        <span className="text-[11px] font-body text-forest/40">{post.date}</span>
                      </div>

                      <h3 className="font-heading font-light text-xl leading-snug text-forest mb-3 group-hover:text-terracotta transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-forest/55 leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-body text-forest/40">{post.author}</span>
                        <span className="flex items-center gap-1.5 text-xs font-body font-medium text-terracotta group-hover:gap-2.5 transition-all duration-200">
                          Read More
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="font-heading text-2xl text-forest/30 mb-3">
                No posts in this category yet.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="text-sm font-body text-terracotta hover:underline"
              >
                View all articles →
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="section-pad bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.18),transparent_55%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-light/15 rounded-full blur-3xl pointer-events-none" />

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-terracotta/30 pointer-events-none"
            style={{ top: `${20 + i * 20}%`, right: `${5 + i * 6}%` }}
            animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Stay Informed"
              title="Expert skin & hair tips in your inbox"
              subtitle="Join 2,000+ readers who receive monthly dermatology insights from Dr. Snehal Karape — no spam, just science."
              light
              center
              className="mb-10"
            />

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder-cream/35 font-body text-sm focus:outline-none focus:border-terracotta focus:bg-cream/15 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-terracotta text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta-light transition-colors duration-300 shrink-0"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="mt-4 text-xs font-body text-cream/30 tracking-wide">
              No spam. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}