import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Heart,
  Shield,
  Sparkles,
  Star,
  UserCheck,
  Eye,
  Layers,
  MessageCircle,
  ClipboardList,
  Search,
  ListChecks,
  FileText,
  RefreshCw,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AboutHero from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About Cherish Derma Clinic Pune | Consultation‑Led Skin & Hair Clinic",
  description:
    "Learn about Cherish Derma Clinic, a consultation‑led skin and hair clinic in Pune focused on safe, personalized, evidence‑based care. Discover our mission, values, process and patient‑first environment.",
};

const CORE_VALUES = [
  {
    icon: Heart,
    title: "Patient-First Care",
    desc: "Every decision starts with one question: is this genuinely in the patient's best interest? We avoid pushing unnecessary add-ons or building fear around conditions just to sell treatments.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Eye,
    title: "Honesty & Transparency",
    desc: "We are upfront about what a treatment can and cannot achieve — sessions required, possible discomfort, downtime and costs. Where a simpler option is enough, we say so clearly.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Sparkles,
    title: "Evidence-Based Care",
    desc: "Our approach is guided by clinical reasoning and updated knowledge, not trends alone. We choose protocols carefully for a sensible balance of safety and practicality for Indian skin.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Layers,
    title: "Personalization Over Packages",
    desc: "No two people have the same skin history, habits or expectations. We create plans tailored to your concerns, skin type, hair type, budget and timeline — not one-size packages.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: UserCheck,
    title: "Respect & Comfort",
    desc: "Coming to a clinic about appearance-related concerns can feel vulnerable. Our team maintains a non-judgmental, respectful environment where all questions are welcome.",
    color: "bg-purple-50 text-purple-600",
  },
];

const FOCUS_AREAS = [
  "Acne and post‑acne marks",
  "Acne scars and uneven texture",
  "Pigmentation, tanning and melasma",
  "Hair fall, hair thinning and scalp concerns",
  "Open pores, dullness and early ageing changes",
  "Bridal and pre‑event skin preparation",
];

const CARE_STEPS = [
  {
    icon: MessageCircle,
    title: "Understanding Your Concern",
    desc: "Your visit begins with a conversation. We ask about your main concerns, how long they have been present, what has been tried before and what your goals are. You are encouraged to share photos, previous prescriptions or reports if you have them.",
  },
  {
    icon: ClipboardList,
    title: "Detailed Consultation",
    desc: "A detailed consultation reviews your medical history, lifestyle, diet, sleep patterns, stress levels and current skincare or hair‑care routine. Many skin and hair issues are connected to daily habits, so this step is essential.",
  },
  {
    icon: Search,
    title: "Clinical Assessment",
    desc: "Your skin or scalp is examined to understand the type, severity and pattern of the concern. For acne we look at whether it is inflammatory, comedonal or hormonal; with hair fall we check density, distribution and scalp condition.",
  },
  {
    icon: ListChecks,
    title: "Discussing Options",
    desc: "Based on consultation and assessment, we discuss suitable options in simple language — clinic‑based procedures, home‑care changes, lifestyle adjustments or a combination. Each option is explained with sessions, timelines and expected improvement.",
  },
  {
    icon: FileText,
    title: "Personalized Plan",
    desc: "Once you are comfortable with the approach, a personalized plan is created. This is designed to be practical — matching your schedule, comfort level and budget — rather than ideal on paper but difficult to follow in real life.",
  },
  {
    icon: RefreshCw,
    title: "Follow‑Up & Support",
    desc: "Skin and hair concerns often need time and consistency. Follow‑up visits are planned to track progress, adjust the plan if required and answer new questions as they come up. This ongoing support is a key part of how we work.",
  },
];

const SAFETY_POINTS = [
  "Sterile or single‑use instruments wherever appropriate",
  "Regular disinfection of procedure areas and waiting spaces",
  "Careful skin and hair assessment before any procedure",
  "Patch testing or staged approaches for suitable treatments",
  "Clear pre‑ and post‑care instructions in writing and verbally",
];

const PREMIUM_POINTS = [
  "Time given for proper consultation",
  "Honest, well‑explained recommendations",
  "Carefully chosen procedures and products",
  "Reliable follow‑up and support",
  "Respectful, professional communication at every step",
];

const SERVICES = [
  { label: "Acne Treatment in Pune", href: "/treatments/acne-treatment" },
  { label: "Acne Scar Treatment in Pune", href: "/treatments/acne-treatment" },
  { label: "Pigmentation Treatment in Pune", href: "/treatments/pigmentation-treatment" },
  { label: "Hair Fall Treatment in Pune", href: "/treatments/hair-regrowth-prp" },
  { label: "PRP Therapy in Pune", href: "/treatments/hair-regrowth-prp" },
  { label: "Anti‑Ageing Treatment in Pune", href: "/treatments/anti-ageing" },
  { label: "Bridal Skin Care in Pune", href: "/programs" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── 1. Hero ── */}
      <AboutHero />

      {/* ── 2. Who We Are ── */}
      <section className="section-pad bg-cream relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <ScrollReveal>
                <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-4">
                  Who We Are
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="font-heading font-light text-4xl md:text-5xl text-forest leading-tight mb-6">
                  Your partner in a long‑term skin & hair journey
                </h2>
              </ScrollReveal>
              <div className="space-y-5 mt-2">
                <ScrollReveal delay={0.15}>
                  <p className="font-body text-base text-forest/65 leading-relaxed">
                    Cherish Derma Clinic is a consultation‑led skin, hair and aesthetic care clinic
                    in Pune that focuses on planned, personalized treatment instead of quick fixes.
                    Our clinic is designed for people who want clarity about their concerns,
                    practical guidance and steady, realistic improvement in skin and hair health.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.22}>
                  <p className="font-body text-base text-forest/65 leading-relaxed">
                    We see ourselves not just as a &ldquo;treatment centre&rdquo;, but as a partner
                    in your long‑term journey. From the first visit, the focus is on understanding
                    your story, explaining what is happening in simple language and deciding the
                    next steps together.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Visual */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-forest aspect-square flex items-center justify-center p-6 text-center">
                    <div className="text-cream/80">
                      <p className="font-heading text-5xl font-light">12+</p>
                      <p className="font-body text-xs tracking-wide uppercase mt-2 opacity-60">Years of Excellence</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-terracotta aspect-square flex items-center justify-center p-6 text-center">
                    <div className="text-cream/90">
                      <p className="font-heading text-5xl font-light">1K+</p>
                      <p className="font-body text-xs tracking-wide uppercase mt-2 opacity-70">Patients Helped</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-cream-dark/40 p-8">
                  <p className="font-heading text-xl md:text-2xl font-light italic text-forest leading-snug">
                    &ldquo;Great skin is not a luxury. It&rsquo;s what happens when science meets
                    self‑care.&rdquo;
                  </p>
                  <p className="font-body text-sm text-forest/50 mt-4">— Dr. Snehal Karape</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. Our Mission ── */}
      <section className="section-pad bg-forest relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.15),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
              Our Mission
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-light text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
              Safe, honest and structured care that respects your{" "}
              <em className="italic text-terracotta">individuality</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-base md:text-lg text-cream/60 leading-relaxed">
              We aim to combine clinic‑based treatments with clear education and home‑care guidance,
              so that every patient who walks into Cherish Derma Clinic leaves with a better
              understanding of their skin or hair — and a plan they can realistically follow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. Core Values ── */}
      <section className="section-pad bg-cream-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our core values"
            center
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={i * 0.08}>
                  <div className="group p-7 rounded-3xl bg-cream hover:bg-forest transition-colors duration-400 border border-cream-dark/20 hover:border-forest h-full">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${val.color} group-hover:bg-terracotta group-hover:text-cream`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-xl font-medium text-forest group-hover:text-cream transition-colors mb-3">
                      {val.title}
                    </h3>
                    <p className="font-body text-sm text-forest/60 group-hover:text-cream/60 leading-relaxed transition-colors">
                      {val.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. What We Focus On ── */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Visual card */}
            <ScrollReveal direction="right">
              <div className="relative rounded-3xl bg-forest p-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.2),transparent_60%)] pointer-events-none" />
                <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6 relative z-10">
                  Our Focus Areas
                </p>
                <h3 className="font-heading text-3xl font-light text-cream leading-snug mb-8 relative z-10">
                  Building a foundation of good daily care, then adding clinic procedures where
                  genuinely helpful.
                </h3>
                <div className="space-y-3 relative z-10">
                  {FOCUS_AREAS.map((area, i) => (
                    <ScrollReveal key={area} delay={i * 0.06}>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={15} className="text-terracotta shrink-0" />
                        <span className="font-body text-sm text-cream/70">{area}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div>
              <ScrollReveal>
                <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-4">
                  What We Focus On
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="font-heading font-light text-4xl md:text-5xl text-forest leading-tight mb-6">
                  Concerns we help you address
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body text-base text-forest/65 leading-relaxed mb-6">
                  Cherish Derma Clinic primarily focuses on skin and hair concerns that respond
                  well to a structured, consultation‑led approach. We work on both the visible
                  concern and the underlying factors contributing to it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.22}>
                <p className="font-body text-base text-forest/65 leading-relaxed">
                  For each concern, we first build a foundation of good daily care, then add
                  clinic‑based procedures where they are genuinely helpful and appropriate to
                  your individual situation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Care Process ── */}
      <section className="section-pad bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,119,90,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#EDE2D3_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            eyebrow="Our Process"
            title="How care works at Cherish Derma Clinic"
            light
            center
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARE_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 0.08}>
                  <div className="group relative p-7 rounded-3xl border border-cream/8 bg-white/[0.04] hover:bg-white/[0.08] hover:border-terracotta/30 transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-terracotta/15 group-hover:bg-terracotta flex items-center justify-center transition-colors duration-300 shrink-0">
                        <Icon size={16} className="text-terracotta group-hover:text-cream transition-colors duration-300" />
                      </div>
                      <span className="font-heading text-3xl font-light text-cream/15 group-hover:text-terracotta/30 transition-colors duration-300 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-medium text-cream mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-cream/55 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Safety & Hygiene + Clinic Environment ── */}
      <section className="section-pad bg-cream-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Safety card */}
            <ScrollReveal>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-forest text-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.2),transparent_65%)] pointer-events-none" />
                <div className="w-12 h-12 rounded-2xl bg-terracotta/20 flex items-center justify-center mb-6 relative z-10">
                  <Shield size={20} className="text-terracotta" />
                </div>
                <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-3 relative z-10">
                  Safety & Hygiene
                </p>
                <h3 className="font-heading text-3xl font-light text-cream leading-tight mb-6 relative z-10">
                  Safety & hygiene you can trust
                </h3>
                <div className="space-y-3 relative z-10">
                  {SAFETY_POINTS.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-terracotta shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-cream/65 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-cream/50 leading-relaxed mt-6 relative z-10">
                  If at any stage we feel a procedure is not suitable for your skin type or
                  medical history, we are transparent about it and suggest alternative routes.
                  Your safety is always given priority over doing &ldquo;more&rdquo; in a single visit.
                </p>
              </div>
            </ScrollReveal>

            {/* Clinic environment card */}
            <ScrollReveal delay={0.1}>
              <div className="h-full p-8 md:p-10 rounded-3xl bg-cream border border-cream-dark/30">
                <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center mb-6">
                  <Star size={20} className="text-forest" />
                </div>
                <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-3">
                  Clinic Environment
                </p>
                <h3 className="font-heading text-3xl font-light text-forest leading-tight mb-6">
                  A calm, professional space for your skin & hair care
                </h3>
                <p className="font-body text-sm text-forest/60 leading-relaxed mb-5">
                  Cherish Derma Clinic has been set up to feel clean, calm and welcoming rather
                  than intimidating. From the reception area to the consultation room and
                  procedure spaces, the aim is to give you enough privacy, time and comfort to
                  speak openly and ask what you need to ask.
                </p>
                <p className="font-body text-sm text-forest/60 leading-relaxed">
                  We keep the environment organized and minimal so that the focus remains on you,
                  your questions and your care plan. Our staff is trained to assist you politely
                  and to help you feel at ease during each visit.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 8. Premium Care + Our Place in Pune ── */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Premium */}
            <div>
              <ScrollReveal>
                <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-4">
                  Our Approach
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="font-heading font-light text-4xl md:text-5xl text-forest leading-tight mb-6">
                  Premium care, not over‑promise
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body text-base text-forest/65 leading-relaxed mb-8">
                  When we speak of &ldquo;premium&rdquo; care, we are not talking about only
                  high‑end treatments or luxury packages. For us, premium means delivering
                  a thorough, thoughtful and fair experience — serious attention to your
                  concern, not just a quick sales pitch.
                </p>
              </ScrollReveal>
              <div className="space-y-3">
                {PREMIUM_POINTS.map((point, i) => (
                  <ScrollReveal key={point} delay={0.2 + i * 0.06}>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream-light border border-cream-dark/15 hover:border-terracotta/30 transition-colors duration-300">
                      <div className="w-7 h-7 rounded-lg bg-terracotta/12 flex items-center justify-center shrink-0">
                        <ChevronRight size={12} className="text-terracotta" />
                      </div>
                      <span className="font-body text-sm text-forest/70">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Pune Landscape */}
            <div>
              <ScrollReveal delay={0.1}>
                <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-4">
                  Our Place in Pune
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <h2 className="font-heading font-light text-4xl md:text-5xl text-forest leading-tight mb-6">
                  A trusted skin clinic in Pune
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="font-body text-base text-forest/65 leading-relaxed mb-6">
                  Pune has many options for skin and hair care, from large chains to small local
                  clinics. Cherish Derma Clinic positions itself as a trusted,
                  consultation‑driven clinic where you can expect detailed assessment,
                  personalized planning and realistic expectations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.32}>
                <p className="font-body text-base text-forest/65 leading-relaxed mb-8">
                  Patients visit us from different parts of Pune seeking help for acne,
                  pigmentation, melasma, hair fall, dullness and early ageing changes — often
                  after trying multiple quick‑fix solutions. Our role is to offer a calmer, more
                  structured path with clear reasoning behind each step.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.38}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "1K+", label: "Patients Helped" },
                    { num: "12+", label: "Years in Practice" },
                    { num: "30+", label: "Treatment Options" },
                    { num: "96%", label: "Satisfaction Rate" },
                  ].map(({ num, label }) => (
                    <div key={label} className="p-5 rounded-2xl bg-cream-light border border-cream-dark/15 text-center">
                      <p className="font-heading text-3xl font-light text-forest">{num}</p>
                      <p className="font-body text-xs text-forest/50 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Explore Services ── */}
      <section className="section-pad bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,119,90,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionHeader
            eyebrow="What We Treat"
            title="Explore our services"
            light
            center
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.label} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-2 px-5 py-4 rounded-2xl border border-cream/10 bg-white/[0.04] hover:bg-terracotta hover:border-terracotta transition-all duration-300"
                >
                  <span className="font-body text-sm text-cream/70 group-hover:text-cream transition-colors leading-snug">
                    {service.label}
                  </span>
                  <ArrowRight size={13} className="text-terracotta group-hover:text-cream shrink-0 transition-colors group-hover:translate-x-0.5 duration-200" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.5}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-body font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
              >
                View All Services
                <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="section-pad bg-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,119,90,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-terracotta mb-6">
              Visit Cherish Derma Clinic
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-heading font-light text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Ready for honest, structured guidance on your skin & hair?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-body text-base text-forest/60 mb-10 leading-relaxed">
              Book a consultation to discuss acne, pigmentation, hair fall, dull skin, early ageing
              or bridal skin preparation. Together we will create a plan that respects your skin,
              your time and your comfort.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105"
              >
                Book Consultation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-forest/20 text-forest text-sm font-body font-medium rounded-full hover:bg-forest hover:text-cream transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
