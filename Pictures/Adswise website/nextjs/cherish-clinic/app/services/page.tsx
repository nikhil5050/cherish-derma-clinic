import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Treatments } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Treatments & Services",
  description:
    "Explore Cherish Derma Clinic's full range of advanced skin and hair treatments — from Hair Regrowth & PRP to Anti-Ageing and Bridal Programs.",
};

const CATEGORY_FILTERS = ["All", "Hair", "Skin", "Laser", "Advanced", "Programs", "Men"];

export default function ServicesPage() {
  const featured = Treatments.filter((s) => s.featured);
  const secondary = Treatments.filter((s) => !s.featured);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-sand/20 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-heading text-[20vw] font-light text-forest/[0.04] leading-none">
            TREAT
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <ScrollReveal>
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
              Our Treatments
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-forest leading-tight mb-8 max-w-3xl">
              Advanced treatments,
              <br />
              <span className="italic text-terracotta">proven results</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-base md:text-lg text-forest/60 max-w-xl leading-relaxed">
              Every treatment at Cherish Derma Clinic is doctor-led, evidence-based,
              and personalised to your unique skin and hair needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-pad bg-cream-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Priority Treatments"
            title="Our signature services"
            subtitle="The treatments our patients trust most — designed for lasting, visible results."
            className="mb-14"
          />

          <div className="space-y-6">
            {featured.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div
                  id={service.id}
                  className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-cream-dark/20 hover:border-forest/20 transition-colors duration-300"
                >
                  {/* Visual */}
                  <div
                    className={`relative min-h-[240px] md:min-h-[320px] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    } overflow-hidden`}
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #2B403C, #1E2E2B)"
                          : i === 1
                          ? "linear-gradient(135deg, #C9775A, #A85C3F)"
                          : "linear-gradient(135deg, #CBB190, #B89A76)",
                    }}
                  >
                    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-[8rem] text-white/10 font-light leading-none select-none">
                        {service.emoji}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-cream p-8 md:p-10 flex flex-col justify-center ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-forest mb-4">
                      {service.title}
                    </h2>
                    <p className="font-body text-base text-forest/65 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm font-body text-forest/70">
                          <div className="w-5 h-5 rounded-full bg-terracotta/15 flex items-center justify-center shrink-0">
                            <Check size={10} className="text-terracotta" />
                          </div>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/appointment"
                      className="group/btn inline-flex items-center gap-2 w-fit px-6 py-3 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300"
                    >
                      Book This Treatment
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Services Grid */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="More Treatments"
            title="Our full treatment menu"
            subtitle="Comprehensive care for every skin and hair concern."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondary.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <div
                  id={service.id}
                  className="group h-full p-7 rounded-3xl bg-cream-light border border-cream-dark/25 hover:border-forest/20 hover:bg-white transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-terracotta">
                      {service.category}
                    </span>
                    <span className="font-heading text-3xl text-forest/15 group-hover:text-terracotta/20 transition-colors">
                      {service.emoji}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-medium text-forest mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-forest/60 leading-relaxed mb-5 flex-1">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-xs font-body text-forest/60">
                        <div className="w-1 h-1 rounded-full bg-terracotta shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/appointment"
                    className="flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-terracotta transition-colors group/link mt-auto"
                  >
                    Enquire Now
                    <ArrowRight
                      size={13}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-cream mb-6">
              Not sure which treatment is right for you?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="font-body text-base text-cream/60 mb-10">
              Book a consultation and Dr. Snehal Karape will design the perfect
              treatment plan for your skin and hair goals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-forest text-sm font-body font-medium rounded-full hover:bg-terracotta hover:text-cream transition-all duration-300 hover:scale-105"
            >
              Book a Consultation
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
