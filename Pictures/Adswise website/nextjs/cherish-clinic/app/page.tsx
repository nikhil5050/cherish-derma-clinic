import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedServices from "@/components/home/FeaturedServices";
import DoctorSection from "@/components/home/DoctorSection";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <WhyChooseUs />
      <FeaturedServices />
      <DoctorSection />
      <Testimonials />
      <GallerySection />
      <AppointmentCTA />
    </>
  );
}
