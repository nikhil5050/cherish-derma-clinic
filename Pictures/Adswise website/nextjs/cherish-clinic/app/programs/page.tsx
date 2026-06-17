import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProgramsHero from "@/components/programs/ProgramsHero";
import { PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Treatment Programs",
  description:
    "Discover Cherish Derma Clinic's signature treatment programs — personalised skin and hair journeys designed for lasting results.",
};

const PROGRAM_COLORS = [
  { bg: "bg-terracotta", text: "text-cream-light", dot: "bg-cream/60" },
  { bg: "bg-forest", text: "text-cream-light", dot: "bg-terracotta" },
  { bg: "bg-sand", text: "text-forest", dot: "bg-terracotta" },
  { bg: "bg-forest-light", text: "text-cream-light", dot: "bg-sand" },
  { bg: "bg-cream-dark", text: "text-forest", dot: "bg-terracotta" },
];

export default function ProgramsPage() {
  return (
    <div id="programs">
      <ProgramsHero />

      {/* Programs */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {PROGRAMS.map((program, i) => {
              const colors = PROGRAM_COLORS[i % PROGRAM_COLORS.length];
              return (
                <ScrollReveal key={program.id} delay={i * 0.08}>
                  <div
                    id={program.id}
                    className="group rounded-3xl overflow-hidden border border-cream-dark/20 hover:border-forest/15 transition-colors duration-300"
                  >
                    <div className="grid lg:grid-cols-[1fr_2fr] min-h-[400px]">
                      {/* Left — color panel */}
                      <div
                        className={`${colors.bg} relative p-8 md:p-10 flex flex-col justify-between overflow-hidden`}
                      >
                        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div>
                          <p
                            className={`font-body text-xs font-semibold tracking-[0.3em] uppercase opacity-60 ${colors.text} mb-3`}
                          >
                            {program.subtitle}
                          </p>
                          <h2
                            className={`font-heading text-3xl md:text-4xl font-medium ${colors.text} leading-tight mb-4`}
                          >
                            {program.title}
                          </h2>
                          <p
                            className={`font-body text-base italic ${colors.text} opacity-75`}
                          >
                            "{program.tagline}"
                          </p>
                        </div>
                        <div
                          className={`flex items-center gap-2 ${colors.text}`}
                        >
                          <Clock size={14} className="opacity-60" />
                          <span className="font-body text-sm font-medium opacity-80">
                            Duration: {program.duration}
                          </span>
                        </div>
                      </div>

                      {/* Right — content */}
                      <div className="bg-cream p-8 md:p-10 flex flex-col">
                        <p className="font-body text-base text-forest/65 leading-relaxed mb-8">
                          {program.desc}
                        </p>

                        {/* Timeline */}
                        <div className="flex-1">
                          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-5">
                            Treatment Timeline
                          </p>
                          <div className="relative">
                            {/* Connector line */}
                            <div className="absolute left-3 top-3 bottom-3 w-px bg-sand/40" />

                            <div className="space-y-5">
                              {program.steps.map((step, si) => (
                                <div
                                  key={si}
                                  className="relative pl-10 flex items-start gap-4"
                                >
                                  {/* Dot */}
                                  <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-cream border-2 border-sand flex items-center justify-center z-10">
                                    <div
                                      className={`w-2 h-2 rounded-full ${colors.dot === "bg-terracotta" ? "bg-terracotta" : colors.dot === "bg-sand" ? "bg-sand" : "bg-cream/60"}`}
                                    />
                                  </div>

                                  <div>
                                    <span className="font-body text-xs font-semibold text-terracotta">
                                      {step.week}
                                    </span>
                                    <p className="font-body text-sm font-medium text-forest mt-0.5">
                                      {step.label}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 pt-8 border-t border-cream-dark/20">
                          <Link
                            href="/appointment"
                            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300"
                          >
                            Start This Program
                            <ArrowRight
                              size={14}
                              className="group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad bg-cream-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Process"
            title="How our programs work"
            center
            className="mb-14"
          />

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Book a consultation. Dr. Snehal analyses your skin and hair concerns in depth.",
              },
              {
                step: "02",
                title: "Personalised Plan",
                desc: "A customised program is designed specifically for your goals, timeline, and lifestyle.",
              },
              {
                step: "03",
                title: "Guided Journey",
                desc: "You're supported every step of the way. Regular check-ins, adjustments, and progress tracking.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.12}>
                <div className="text-center p-7 rounded-3xl bg-cream border border-cream-dark/20">
                  <span className="font-heading text-5xl font-light text-terracotta/30">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-forest mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-forest/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-cream mb-6">
              Ready to begin your transformation?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="font-body text-base text-cream/60 mb-10">
              Book your first consultation and let Dr. Snehal design the perfect
              program for you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-forest text-sm font-body font-medium rounded-full hover:bg-terracotta hover:text-cream transition-all duration-300 hover:scale-105"
            >
              Book Consultation
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
