"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  {
    label: "Treatments",
    href: "/services",
    mega: [
      { label: "Hair Regrowth & PRP", href: "/treatments/hair-regrowth-prp" },
      { label: "Acne Treatment", href: "/treatments/acne-treatment" },
      { label: "Pigmentation", href: "/treatments/pigmentation-treatment" },
      { label: "Anti-Ageing", href: "/treatments/anti-ageing" },
      { label: "Laser Hair Reduction", href: "/treatments/laser-hair-reduction" },
      { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
      { label: "Exosome Therapy", href: "/treatments/exosome-therapy" },
      { label: "Bridal Programs", href: "/treatments/bridal-programs" },
      { label: "Men's Skin & Hair", href: "/treatments/mens-skin-hair" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/appointment" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [pathname]);

  const handleMegaEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(label);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm shadow-sand/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo size="md" variant={scrolled ? "dark" : "dark"} />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.mega ? handleMegaEnter(link.label) : undefined
                }
                onMouseLeave={link.mega ? handleMegaLeave : undefined}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-body font-medium tracking-wide transition-all duration-200 ${
                    pathname === link.href
                      ? "text-terracotta bg-terracotta/8"
                      : "text-forest hover:text-terracotta hover:bg-forest/5"
                  }`}
                >
                  {link.label}
                  {link.mega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        megaOpen === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.mega && (
                  <AnimatePresence>
                    {megaOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass rounded-3xl shadow-xl shadow-forest/10 p-4 overflow-hidden"
                        onMouseEnter={() => handleMegaEnter(link.label)}
                        onMouseLeave={handleMegaLeave}
                      >
                        <div className="grid grid-cols-1 gap-0.5">
                          {link.mega.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="px-3 py-2.5 rounded-xl text-sm font-body text-forest hover:text-terracotta hover:bg-terracotta/8 transition-colors duration-150"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-terracotta transition-colors"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>
            <Link
              href="/appointment"
              className="px-5 py-2.5 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-forest hover:bg-forest/8 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-forest/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[95] w-[85vw] max-w-sm bg-cream shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cream-dark/40">
                <Logo size="sm" />
                <button
                  className="p-2 rounded-xl text-forest hover:bg-forest/8"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 rounded-2xl text-base font-body font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-forest text-cream-light"
                          : "text-forest hover:bg-forest/8"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.mega && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.mega.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 rounded-xl text-sm font-body text-forest/70 hover:text-terracotta hover:bg-terracotta/8 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-cream-dark/40 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm font-body text-forest"
                >
                  <Phone size={14} />
                  +91 98765 43210
                </a>
                <Link
                  href="/appointment"
                  className="block w-full text-center py-3.5 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
