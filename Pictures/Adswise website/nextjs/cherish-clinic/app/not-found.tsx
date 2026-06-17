import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Large decorative number */}
        <div className="font-heading text-[160px] font-light text-forest/8 leading-none select-none mb-0">
          404
        </div>
        <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-5">
          Page Not Found
        </p>
        <h1 className="font-heading text-4xl font-light text-forest mb-5">
          This page doesn't exist yet.
        </h1>
        <p className="font-body text-sm text-forest/55 mb-10 leading-relaxed">
          But your skin care journey can start right now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-7 py-3.5 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105"
          >
            Go Home
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/appointment"
            className="flex items-center gap-2 px-7 py-3.5 border border-forest/20 text-forest text-sm font-body font-medium rounded-full hover:border-forest/40 hover:bg-forest/5 transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
