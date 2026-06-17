import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${center ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <ScrollReveal delay={0}>
          <p
            className={`font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4 ${
              light ? "text-sand" : "text-terracotta"
            }`}
          >
            {eyebrow}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2
          className={`font-heading font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 ${
            light ? "text-cream-light" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.16}>
          <p
            className={`font-body text-base md:text-lg leading-relaxed max-w-2xl ${
              center ? "mx-auto" : ""
            } ${light ? "text-cream/70" : "text-forest/65"}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
