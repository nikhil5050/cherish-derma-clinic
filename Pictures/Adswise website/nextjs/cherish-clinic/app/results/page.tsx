import type { Metadata } from "next";
import ResultsClient from "@/components/results/ResultsClient";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description:
    "Real patient before & after results, video testimonials, and success stories from Cherish Derma Clinic, Pune — led by Dr. Snehal Karape.",
};

export default function ResultsPage() {
  return <ResultsClient />;
}
