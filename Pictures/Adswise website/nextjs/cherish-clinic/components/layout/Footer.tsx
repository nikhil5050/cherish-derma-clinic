import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";
import { CLINIC } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Hair Regrowth & PRP", href: "/services#hair-regrowth-prp" },
  { label: "Acne Treatment", href: "/services#acne-treatment" },
  { label: "Pigmentation Treatment", href: "/services#pigmentation-treatment" },
  { label: "Anti-Ageing", href: "/services#anti-ageing" },
  { label: "Laser Hair Reduction", href: "/services#laser-hair-reduction" },
  { label: "Bridal Programs", href: "/services#bridal-programs" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-forest-light/20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-cream/10">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Logo size="md" variant="light" />
            <p className="font-body text-sm leading-relaxed text-cream/60 max-w-xs">
              Premium dermatology clinic in Pune. Doctor-led skin & hair care
              for your most confident self.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/8 flex items-center justify-center hover:bg-terracotta/30 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={CLINIC.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/8 flex items-center justify-center hover:bg-terracotta/30 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={15} />
              </a>
            </div>
            <p className="font-heading text-2xl font-light italic text-cream/30 select-none">
              care. heal. glow
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-cream tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-terracotta-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-sand/30 group-hover:bg-terracotta group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-cream tracking-wide">
              Treatments
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-body text-sm text-cream/60 hover:text-terracotta-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-sand/30 group-hover:bg-terracotta group-hover:w-6 transition-all duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-cream tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-start gap-3 text-sm font-body text-cream/60 hover:text-terracotta-light transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-terracotta" />
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-start gap-3 text-sm font-body text-cream/60 hover:text-terracotta-light transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-terracotta" />
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-body text-cream/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-terracotta" />
                {CLINIC.address}
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm font-body text-cream/60">
                  <Clock size={14} className="mt-0.5 shrink-0 text-terracotta" />
                  <div className="space-y-1">
                    {CLINIC.hours.map((h) => (
                      <div key={h.day}>
                        <span className="text-cream/80">{h.day}:</span>{" "}
                        {h.time}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-cream/30">
          <p>
            © {new Date().getFullYear()} Cherish Derma Clinic. All rights
            reserved.
          </p>
          <p>
            Designed with care in Pune.{" "}
            <span className="text-terracotta/60">care. heal. glow.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
