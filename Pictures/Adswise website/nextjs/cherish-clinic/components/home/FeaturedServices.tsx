"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Treatments } from "@/lib/constants";

const DISPLAY_SERVICES = Treatments.slice(0, 6);

const IMAGE_MAP: Record<string, string> = {
  "hair-regrowth-prp":
    "https://i.pinimg.com/736x/ad/ed/1d/aded1dcfd02dfc6dc99a52d0a8b6f2e2.jpg",
  "acne-treatment":
    "https://i.pinimg.com/736x/f0/33/59/f033598d2beac5ea72fc5370358c85bf.jpg",
  "pigmentation-treatment":
    "https://i.pinimg.com/736x/1d/cd/d3/1dcdd3ac654bd57037b71cb368d6b99d.jpg",
  "anti-ageing":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErKQ1Ob_7IlnHfqgBmoLqyvycLn9gKtp7aA&s",
  "laser-hair-reduction":
    "https://i.pinimg.com/236x/d8/9b/a2/d89ba27271dc583c3252d32233f34826.jpg",
  "skin-rejuvenation":
    "https://i.pinimg.com/736x/77/d2/0f/77d20f9210b8654361e3df8c07fc2c55.jpg",
};

export default function FeaturedServices() {
  return (
    <section className="section-pad bg-cream relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <SectionHeader
            eyebrow="What We Treat"
            title={`Treatments \n tailored for you`}
            subtitle="From advanced laser technologies to regenerative therapies — all under one roof, all led by Dr. Snehal Karape."
            className="max-w-xl [white-space:pre-line] text-bold"
          />
          <ScrollReveal delay={0.2} direction="left">
            <Link
              href="/services"
              className="group flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-terracotta transition-colors shrink-0"
            >
              View All Treatments
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISPLAY_SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-full"
              >
                <Link href={`/treatments/${service.id}`} className="block h-full">
                  <div className="relative min-h-[300px] h-full">
                    <Image
                      src={
                        IMAGE_MAP[service.id] ??
                        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/85" />

                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <div className="relative z-10 p-7 flex flex-col min-h-[300px]">
                      <span className="inline-block font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-white/55 mb-auto">
                        {service.category}
                      </span>

                      {/* <div className="absolute top-6 right-6 font-heading text-5xl opacity-10 text-white">
                        {service.emoji}
                      </div> */}

                      <div className="mt-auto pt-8">
                        <h3 className="font-heading text-2xl font-medium text-cream-light mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed mb-5 text-white/55 line-clamp-2">
                          {service.shortDesc}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-body font-semibold text-terracotta-light tracking-wide">
                          Learn More
                          <ArrowRight
                            size={12}
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-forest/20 text-forest text-sm font-body font-medium rounded-full hover:bg-forest hover:text-cream-light hover:border-forest transition-all duration-300"
            >
              Explore All Treatments
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
