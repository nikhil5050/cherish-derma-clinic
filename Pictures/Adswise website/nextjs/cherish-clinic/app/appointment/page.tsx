import type { Metadata } from "next";
import { Clock, Phone, Shield, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingWizard from "@/components/appointment/BookingWizard";
import Logo from "@/components/ui/Logo";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book an appointment with Dr. Snehal Karape at Cherish Derma Clinic. Quick, easy, and confirmed within 2 hours.",
};

export default function AppointmentPage() {
  return (
    <div className="pt-20 min-h-screen bg-cream">

      {/* ── BOOKING SECTION (unchanged) ── */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-sand/10 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-heading text-[16vw] font-light text-forest/[0.03] leading-none">
            BOOK
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Left Sidebar */}
            <div className="hidden lg:block sticky top-32">
              <ScrollReveal>
                <div className="space-y-6">
                  <Logo size="md" />
                  <div>
                    <h1 className="font-heading text-4xl font-light text-forest leading-tight mt-6 mb-4">
                      Book your
                      <br />
                      <span className="italic text-terracotta">consultation</span>
                    </h1>
                    <p className="font-body text-sm text-forest/60 leading-relaxed">
                      5 simple steps to your first appointment with Dr. Snehal Karape.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    {[
                      { icon: <Shield size={14} />, text: "No upfront payment required" },
                      { icon: <Clock size={14} />, text: "Confirmation within 2 hours" },
                      { icon: <Phone size={14} />, text: "WhatsApp reminder sent" },
                    ].map((p) => (
                      <div key={p.text} className="flex items-center gap-3 text-sm font-body text-forest/65">
                        <div className="w-7 h-7 rounded-xl bg-terracotta/12 flex items-center justify-center text-terracotta shrink-0">
                          {p.icon}
                        </div>
                        {p.text}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-cream-dark/30">
                    <p className="font-body text-xs text-forest/40 mb-3">Prefer to call?</p>
                    <a
                      href={`tel:${CLINIC.phone}`}
                      className="flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-terracotta transition-colors"
                    >
                      <Phone size={14} />
                      {CLINIC.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Mobile header */}
            <div className="lg:hidden">
              <Logo size="sm" />
              <h1 className="font-heading text-4xl font-light text-forest mt-6 mb-2">
                Book Your{" "}
                <span className="italic text-terracotta">Appointment</span>
              </h1>
              <p className="font-body text-sm text-forest/55">
                5 easy steps. Confirmed within 2 hours.
              </p>
            </div>

            {/* Wizard */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="bg-white rounded-3xl p-7 md:p-10 shadow-sm shadow-forest/5 border border-cream-dark/15">
                <BookingWizard />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="relative bg-cream">
        {/* Address badge overlay */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-cream/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-sand/25 text-center">
          <p className="font-body text-[10px] text-forest/50 uppercase tracking-widest mb-1">Find Us At</p>
          <p className="font-body text-sm font-medium text-forest">{CLINIC.address}</p>
        </div>

        <div className="h-[420px] lg:h-[500px] w-full overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Koregaon+Park,+Pune,+Maharashtra+411001&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Cherish Derma Clinic Location"
            className="w-full h-full grayscale-[20%]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom CTA strip */}
        <div className="bg-forest py-5 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-cream/70">
              <MapPin size={16} className="text-terracotta shrink-0" />
              <span className="font-body text-sm">{CLINIC.address}</span>
            </div>
            <a
              href={CLINIC.map}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-2.5 bg-terracotta text-cream text-sm font-body font-medium rounded-full hover:bg-terracotta-light transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
