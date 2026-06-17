import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Clock, Layers, ArrowRight, ArrowLeft, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Treatments } from "@/lib/constants";
import { TREATMENT_DETAILS } from "@/lib/treatment-details";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Treatments.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = Treatments.find((t) => t.id === slug);
  if (!treatment) return { title: "Treatment Not Found" };
  return {
    title: treatment.title,
    description: treatment.shortDesc,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;

  const treatment = Treatments.find((t) => t.id === slug);
  if (!treatment) notFound();

  const extra = TREATMENT_DETAILS[slug];
  const relatedTreatments = Treatments.filter((t) => t.id !== slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className={`relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br ${
          extra?.bgGradient ?? "from-forest to-forest-dark"
        }`}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        {/* Radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.2),transparent_55%)] pointer-events-none" />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-8">
          <span className="font-heading text-[16vw] font-light text-white/[0.04] leading-none">
            {treatment.category.toUpperCase()}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 w-full">
          {/* Breadcrumb */}
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-8">
              <Link
                href="/services"
                className="font-body text-xs font-medium text-cream/40 hover:text-cream/70 transition-colors"
              >
                Treatments
              </Link>
              <span className="text-cream/25 text-xs">/</span>
              <span className="font-body text-xs font-medium text-cream/60">
                {treatment.title}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <span className="inline-block font-body text-[10px] font-bold tracking-[0.3em] uppercase text-terracotta bg-terracotta/15 rounded-full px-4 py-1.5 mb-6">
              {treatment.category}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl text-cream-light leading-tight mb-6 max-w-3xl">
              {treatment.title}
            </h1>
          </ScrollReveal>

          {extra && (
            <ScrollReveal delay={0.18}>
              <p className="font-heading text-xl md:text-2xl font-light italic text-terracotta-light mb-10 max-w-xl">
                {extra.headline}
              </p>
            </ScrollReveal>
          )}

          {/* Session info chips */}
          {extra && (
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Clock, label: extra.sessionDuration },
                  { icon: Layers, label: extra.numSessions },
                  { icon: Zap, label: `Downtime: ${extra.downtime}` },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 glass-dark rounded-full px-4 py-2"
                  >
                    <Icon size={12} className="text-terracotta" />
                    <span className="font-body text-xs font-medium text-cream/75">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── Overview ───────────────────────────────────────── */}
      <section className="section-pad bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Description */}
            <div>
              <ScrollReveal>
                <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
                  Overview
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="font-heading font-light text-4xl md:text-5xl text-forest leading-tight mb-6">
                  What is{" "}
                  <span className="italic text-terracotta">{treatment.title}?</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p className="font-body text-base md:text-lg text-forest/65 leading-relaxed mb-8">
                  {extra?.fullDesc ?? treatment.shortDesc}
                </p>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.2}>
                <ul className="space-y-3">
                  {treatment.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 font-body text-sm text-forest/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-terracotta/15 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-terracotta" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Right: Session info card */}
            {extra && (
              <ScrollReveal delay={0.1} direction="left">
                <div className="bg-cream-light rounded-3xl p-8 border border-cream-dark/25 space-y-6">
                  <p className="font-body text-xs font-semibold tracking-[0.28em] uppercase text-forest/40">
                    Treatment Details
                  </p>

                  {[
                    { label: "Session Duration", value: extra.sessionDuration },
                    { label: "No. of Sessions", value: extra.numSessions },
                    { label: "Downtime", value: extra.downtime },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 pb-5 border-b border-cream-dark/25 last:border-0 last:pb-0"
                    >
                      <span className="font-body text-sm text-forest/50">{label}</span>
                      <span className="font-body text-sm font-semibold text-forest text-right">
                        {value}
                      </span>
                    </div>
                  ))}

                  <Link
                    href="/appointment"
                    className="block w-full text-center py-4 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300 mt-2"
                  >
                    Book This Treatment
                  </Link>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      {extra && (
        <section className="section-pad bg-forest relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,119,90,0.12),transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionHeader
              eyebrow="The Process"
              title="How it works"
              subtitle="A step-by-step look at your treatment experience at Cherish Derma Clinic."
              light
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {extra.process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 0.1}>
                  <div className="relative p-8 rounded-3xl bg-forest-light/30 border border-cream/8 hover:border-terracotta/25 transition-colors duration-300">
                    {/* Step number */}
                    <span className="absolute top-6 right-6 font-heading text-5xl font-light text-cream/[0.07] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mb-6">
                      <span className="font-heading text-lg text-terracotta font-light">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl text-cream-light mb-3">
                      {p.step}
                    </h3>
                    <p className="font-body text-sm text-cream/55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Suitable For ───────────────────────────────────── */}
      {extra && (
        <section className="section-pad bg-cream-light relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sand/20 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionHeader
                  eyebrow="Who It's For"
                  title="Is this right for you?"
                  subtitle="Our doctors confirm suitability during your consultation, but this treatment is ideal for:"
                  className="mb-10"
                />
                <ul className="space-y-4">
                  {extra.suitableFor.map((item, i) => (
                    <ScrollReveal key={item} delay={i * 0.07}>
                      <li className="flex items-start gap-4">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-forest flex items-center justify-center shrink-0">
                          <Check size={11} className="text-cream" />
                        </div>
                        <span className="font-body text-base text-forest/75 leading-snug">
                          {item}
                        </span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>

              {/* Doctor note card */}
              <ScrollReveal delay={0.1} direction="left">
                <div className="bg-forest rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-terracotta/10 blur-2xl pointer-events-none" />
                  <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-5">
                    A Note From Dr. Snehal
                  </p>
                  <blockquote className="font-heading text-2xl font-light text-cream-light leading-snug mb-6">
                    &ldquo;Every patient&rsquo;s skin and hair is unique. I personally
                    review your case to ensure{" "}
                    {treatment.title.toLowerCase()} is the right approach — and
                    that we set realistic, achievable goals together.&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-body text-sm font-semibold text-cream/80">
                      Dr. Snehal Karape
                    </p>
                    <p className="font-body text-xs text-cream/40 mt-0.5">
                      MD Dermatology | Founder, Cherish Derma Clinic
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ── Other Treatments ───────────────────────────────── */}
      <section className="section-pad bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Explore More"
            title="Other treatments you may like"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedTreatments.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <Link
                  href={`/treatments/${t.id}`}
                  className="group block h-full p-7 rounded-3xl bg-cream-light border border-cream-dark/25 hover:border-forest/20 hover:bg-white transition-all duration-300"
                >
                  <span className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-terracotta">
                    {t.category}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-forest mt-3 mb-2 group-hover:text-terracotta transition-colors duration-200">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-forest/55 leading-relaxed mb-5">
                    {t.shortDesc}
                  </p>
                  <span className="flex items-center gap-1.5 text-xs font-body font-medium text-forest/50 group-hover:text-terracotta transition-colors">
                    Learn More
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-cream-light leading-tight mb-6">
              Ready to start your
              <br />
              <em className="italic text-terracotta-light">
                {treatment.title.toLowerCase()} journey?
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="font-body text-base text-cream/50 leading-relaxed mb-10 max-w-md mx-auto">
              Book a consultation with Dr. Snehal Karape and receive a personalised
              treatment plan designed specifically for your skin and hair.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-cream-light font-body font-medium text-sm rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/20 text-cream/70 font-body font-medium text-sm rounded-full hover:border-cream/40 hover:text-cream transition-all duration-300"
              >
                <ArrowLeft size={14} />
                All Treatments
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
