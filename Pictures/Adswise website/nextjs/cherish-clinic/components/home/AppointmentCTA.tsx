import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Logo from "@/components/ui/Logo";
import { CLINIC } from "@/lib/constants";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-sand/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-sand/10 blur-3xl pointer-events-none" />

      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[18vw] font-light text-forest/[0.04] leading-none tracking-widest">
          GLOW
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <Logo size="md" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
            Ready to Begin?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <h2 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-forest leading-tight mb-8">
            Start Your Skin & Hair Care Journey Today

            
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <p className="font-body text-base md:text-lg text-forest/70 max-w-xl mx-auto leading-relaxed mb-12">
            Book a consultation to discuss acne, pigmentation, hair fall, dull skin or anti‑ageing concerns and receive a personalized plan designed around your needs and comfort.

          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.34}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="group relative flex items-center gap-2 px-10 py-5 bg-forest text-cream-light text-sm font-body font-medium rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-0 bg-terracotta translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10">Book Your Appointment</span>
              <ArrowRight
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-5 border border-forest/20 text-forest text-sm font-body font-medium rounded-full hover:bg-forest/5 hover:border-forest/40 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>

        {/* Trust line */}
        <ScrollReveal delay={0.42}>
          <p className="mt-10 font-body text-xs text-forest/35 tracking-wide">
            No hidden charges. No unnecessary treatments. Just honest dermatology.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
