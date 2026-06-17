"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const GALLERY_ITEMS = [
  {
    label: "Clinic Interior",
    image: "https://i.pinimg.com/736x/86/3d/cb/863dcb23f4b5578346552a064782e0d8.jpg",
    span: "md:row-span-2",
  },
  {
    label: "Facial Treatment",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    label: "Skin Consultation",
    image: "https://i.pinimg.com/1200x/72/74/8c/72748c312d0e645af787a794640d22bf.jpg",
    span: "",
  },
  {
    label: "Skincare Treatments",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    label: "Luxury Products",
    image: "https://i.pinimg.com/736x/f7/ed/fd/f7edfd5a3231ae90ecd5ed64d48b5be6.jpg",
    span: "",
  },
  {
    label: "Patient Care",
    image: "https://i.pinimg.com/1200x/17/f5/cf/17f5cf346090205073550e5c81849af2.jpg",
    span: "",
  },
];

export default function GallerySection() {
  return (
    <section className="section-pad bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeader
            eyebrow="Our Space"
            title="A clinic that reflects our values"
            subtitle="Luxury, precision, and warmth — designed for your comfort."
            className="max-w-lg"
          />
          <ScrollReveal direction="left" delay={0.2}>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-terracotta transition-colors shrink-0"
            >
              Visit Us
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${
                  i === 0 ? "md:row-span-2" : ""
                } h-full`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <p className="font-body text-sm font-medium text-cream tracking-wide">
                    {item.label}
                  </p>
                </div>

                {/* Subtle always-on gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
