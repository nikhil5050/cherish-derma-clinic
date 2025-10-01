import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden flex items-center">
      {/* Background video - replace src and poster with your actual files */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/*
          Mobile-friendly: video is hidden under md to save data and ensure fast load.
          Replace `1st.mp4` and poster paths with your hosted files.
        */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="hidden md:block w-full h-full object-cover min-h-[60vh]"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/hero-poster.jpg"
          >
            <source src="1st.mp4" type="video/mp4" />
          </video>

          {/* dark overlay to make the whole hero darker for legibility */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/45 pointer-events-none" />
        </div>

        {/* Static background fallback for mobile (shows the poster) */}
        <div
          className="md:hidden w-full h-full bg-cover bg-center min-h-[60vh]"
          style={{ backgroundImage: `url('/videos/hero-poster.jpg')` }}
          aria-hidden="true"
        />

        {/* Subtle dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-amber-50/85" />
      </motion.div>

      <main className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Center everything horizontally and vertically within the hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Left Shoe (md+) */}
            <div className="hidden md:flex md:justify-end md:pr-6 order-1 md:order-1"></div>

            {/* Center Content - force center alignment */}
            <div className="order-2 md:order-2 text-center px-4 md:px-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="mx-auto max-w-2xl"
              >

                <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
                  FORMAL SHOES
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-script text-gray-100/95 mb-2 justify-center drop-shadow-md">
                  Manufacturer , Wholesaler & Retailer of Leather Shoes
                </p>

                
              </motion.div>
            </div>

            {/* Right Shoe (md+) */}
            <div className="hidden md:flex md:justify-start md:pl-6 order-3 md:order-3"></div>
          </div>
        </div>

        {/* Decorative shapes (subtle, behind content) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-12 left-12 w-28 h-28 bg-amber-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-20 right-12 w-36 h-36 bg-orange-200 rounded-full opacity-18 blur-3xl" />
        </div>
      </main>
    </div>
  );
}
