import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cherish Derma Clinic | care. heal. glow",
    template: "%s | Cherish Derma Clinic",
  },
  description:
    "Pune's most trusted dermatology clinic. Expert doctor-led skin & hair treatments — Acne, Pigmentation, PRP Hair Regrowth, Laser, Anti-Ageing & Bridal Programs.",
  keywords: [
    "dermatology clinic Pune",
    "skin clinic Pune",
    "hair regrowth Pune",
    "PRP treatment Pune",
    "acne treatment Pune",
    "anti ageing Pune",
    "laser hair reduction Pune",
    "best dermatologist Pune",
    "Dr Snehal Karape",
    "Cherish Derma Clinic",
  ],
  authors: [{ name: "Cherish Derma Clinic" }],
  creator: "Cherish Derma Clinic",
  metadataBase: new URL("https://cherishdermaclinic.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cherishdermaclinic.com",
    title: "Cherish Derma Clinic | care. heal. glow",
    description:
      "Expert dermatology care for healthy, radiant skin. Book your appointment today.",
    siteName: "Cherish Derma Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherish Derma Clinic | care. heal. glow",
    description:
      "Expert dermatology care for healthy, radiant skin. Book your appointment today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
