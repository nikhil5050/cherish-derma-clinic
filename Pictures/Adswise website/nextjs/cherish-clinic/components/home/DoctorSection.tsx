import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLINIC } from "@/lib/constants";

const CERTIFICATES = [
  { src: "/certificate1.jpeg", label: "Certificate of Excellence" },
  { src: "/certificate2.jpeg", label: "Specialisation Certificate" },
  { src: "/certificate3.jpeg", label: "Professional Certification" },
];

const CREDENTIALS = [
  { icon: <GraduationCap size={16} />, text: "MD Dermatology, Venereology & Leprosy" },
  { icon: <Award size={16} />, text: "12+ Years Clinical Excellence" },
  { icon: <Users size={16} />, text: "1000+ Patients Treated" },
];

export default function DoctorSection() {
  return (
    <section className="section-pad bg-forest relative overflow-hidden">
      {/* BG Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,119,90,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Doctor visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main portrait frame */}
              <div className="relative rounded-3xl overflow-hidden bg-forest-light aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <Image
                  src="https://cherishdermaclinic.com/ownerimg.png"
                  alt="Dr. Snehal Karape — Dermatologist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 384px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-heading text-2xl text-cream font-light">
                    Dr. Snehal Karape
                  </p>
                  <p className="font-body text-xs text-cream/60 mt-1">
                    MD Dermatology | Founder
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 lg:-right-8 bg-terracotta text-cream-light rounded-2xl p-4 shadow-xl">
                <p className="font-heading text-3xl font-light leading-none">12+</p>
                <p className="font-body text-[10px] font-medium tracking-wider uppercase mt-1 opacity-80">
                  Years of<br />Excellence
                </p>
              </div>

              {/* Credentials card */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-cream rounded-2xl p-4 shadow-xl max-w-[200px]">
                <p className="font-body text-[10px] font-semibold text-forest tracking-wider uppercase mb-2">
                  Specialisations
                </p>
                <div className="space-y-1">
                  {["Hair Loss", "Acne & Scars", "Pigmentation", "Anti-Ageing"].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-terracotta" />
                      <span className="font-body text-xs text-forest/70">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="Meet The Doctor"
              title="Led by Dr. Snehal Karape"
              light
              className="mb-8"
            />
            <ScrollReveal delay={0.2}>
              <p className="font-body text-base text-cream/65 leading-relaxed mb-4">
                {CLINIC.doctorBio}
              </p>
              <p className="font-body text-base text-cream/65 leading-relaxed mb-8">
                She founded Cherish Derma Clinic with a vision to bring world-class
                dermatology to Pune — where every patient is treated as an
                individual, not a skin type.
              </p>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-3 mb-10">
                {CREDENTIALS.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-cream/70"
                  >
                    <div className="w-8 h-8 rounded-xl bg-terracotta/20 flex items-center justify-center text-terracotta shrink-0">
                      {c.icon}
                    </div>
                    <span className="font-body text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-cream text-forest text-sm font-body font-medium rounded-full hover:bg-terracotta hover:text-cream transition-all duration-300"
                >
                  Our Story
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/appointment"
                  className="flex items-center gap-2 px-7 py-3.5 border border-cream/20 text-cream text-sm font-body font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Certificates Strip ── */}
        <div className="mt-20 border-t border-cream/10 pt-14">
          <ScrollReveal>
            <p className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-terracotta text-center mb-2">
              Certifications &amp; Achievements
            </p>
            <h3 className="font-heading text-2xl lg:text-3xl text-cream font-light text-center mb-10">
              Qualified. Certified. Trusted.
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
            {CERTIFICATES.map((cert, i) => (
              <ScrollReveal key={cert.src} delay={0.15 * i}>
                <div className="group relative rounded-2xl overflow-hidden bg-cream/95 p-3 shadow-xl hover:shadow-2xl hover:shadow-terracotta/20 transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={cert.src}
                      alt={cert.label}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 380px"
                    />
                  </div>
                  <p className="font-body text-[11px] text-forest/55 text-center mt-2.5 pb-0.5 tracking-wide">
                    {cert.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
