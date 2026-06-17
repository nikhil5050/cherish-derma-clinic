"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SERVICE_OPTIONS, TIME_SLOTS } from "@/lib/constants";
import emailjs from "@emailjs/browser";

type BookingData = {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const STEPS = [
  { id: 1, label: "Service", icon: <CheckCircle2 size={16} /> },
  { id: 2, label: "Date", icon: <Calendar size={16} /> },
  { id: 3, label: "Time", icon: <Clock size={16} /> },
  { id: 4, label: "Details", icon: <User size={16} /> },
  { id: 5, label: "Confirm", icon: <Check size={16} /> },
];

const getTomorrowDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

const getMaxDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().split("T")[0];
};

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, watch, handleSubmit, trigger, formState: { errors } } = useForm<BookingData>();

  const data = watch();

  const inputClass =
    "w-full bg-cream-light border border-cream-dark/40 rounded-2xl px-5 py-3.5 font-body text-sm text-forest placeholder-forest/35 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/8 transition-all duration-200";

  const next = async () => {
    let valid = true;
    if (step === 1) valid = await trigger("service");
    if (step === 2) valid = await trigger("date");
    if (step === 3) valid = await trigger("time");
    if (step === 4) valid = await trigger(["name", "email", "phone"]);
    if (valid) setStep((s) => Math.min(s + 1, 5));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (formData: BookingData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_APPOINTMENT!,
        {
          service: formData.service,
          appointment_date: formData.date,
          appointment_time: formData.time,
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          notes: formData.notes || "None",
          to_name: "Dr. Snehal Karape",
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15, delay: 0.1 }}
          className="w-24 h-24 rounded-full bg-terracotta/15 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 size={44} className="text-terracotta" />
        </motion.div>
        <h2 className="font-heading text-4xl font-light text-forest mb-4">
          You're all set!
        </h2>
        <p className="font-body text-base text-forest/60 max-w-sm mx-auto leading-relaxed mb-4">
          Your appointment request has been sent. Dr. Snehal's team will confirm
          your booking within 2 hours.
        </p>
        <div className="inline-block bg-cream-light border border-cream-dark/30 rounded-2xl p-5 mb-8 text-left">
          <div className="space-y-2">
            <p className="font-body text-sm text-forest">
              <span className="text-forest/50">Treatment:</span> {data.service}
            </p>
            <p className="font-body text-sm text-forest">
              <span className="text-forest/50">Date:</span>{" "}
              {new Date(data.date).toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="font-body text-sm text-forest">
              <span className="text-forest/50">Time:</span> {data.time}
            </p>
            <p className="font-body text-sm text-forest">
              <span className="text-forest/50">Name:</span> {data.name}
            </p>
          </div>
        </div>
        <p className="font-body text-xs text-forest/40">
          A confirmation will be sent to {data.email}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-10">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                  step > s.id
                    ? "bg-terracotta text-cream"
                    : step === s.id
                    ? "bg-forest text-cream"
                    : "bg-cream-dark/40 text-forest/40"
                }`}
              >
                {step > s.id ? <Check size={15} /> : s.icon}
              </div>
              <span
                className={`font-body text-[10px] font-medium mt-1.5 ${
                  step >= s.id ? "text-forest" : "text-forest/35"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-5 transition-all duration-500 ${
                  step > s.id ? "bg-terracotta" : "bg-cream-dark/40"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait" custom={1}>
        {/* Step 1 — Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <h3 className="font-heading text-2xl font-medium text-forest mb-2">
              Choose a Treatment
            </h3>
            <p className="font-body text-sm text-forest/55 mb-6">
              What are you looking to address?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_OPTIONS.map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    data.service === s
                      ? "border-forest bg-forest text-cream"
                      : "border-cream-dark/30 bg-cream-light hover:border-forest/30"
                  }`}
                >
                  <input
                    type="radio"
                    value={s}
                    {...register("service", { required: true })}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      data.service === s
                        ? "border-cream bg-cream"
                        : "border-forest/30"
                    }`}
                  >
                    {data.service === s && (
                      <div className="w-1.5 h-1.5 rounded-full bg-forest" />
                    )}
                  </div>
                  <span
                    className={`font-body text-sm ${
                      data.service === s ? "text-cream font-medium" : "text-forest"
                    }`}
                  >
                    {s}
                  </span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="mt-3 text-xs text-red-500 font-body flex items-center gap-1">
                <AlertCircle size={11} />
                Please select a treatment
              </p>
            )}
          </motion.div>
        )}

        {/* Step 2 — Date */}
        {step === 2 && (
          <motion.div
            key="step2"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <h3 className="font-heading text-2xl font-medium text-forest mb-2">
              Select a Date
            </h3>
            <p className="font-body text-sm text-forest/55 mb-6">
              Choose your preferred appointment date.
            </p>
            <div className="max-w-xs">
              <input
                type="date"
                {...register("date", { required: "Please select a date" })}
                min={getTomorrowDate()}
                max={getMaxDate()}
                className={inputClass}
              />
              {errors.date && (
                <p className="mt-2 text-xs text-red-500 font-body flex items-center gap-1">
                  <AlertCircle size={11} />
                  {errors.date.message}
                </p>
              )}
            </div>
            {data.date && (
              <div className="mt-5 p-4 bg-cream-light rounded-2xl inline-block">
                <p className="font-body text-sm text-forest">
                  <span className="text-forest/50">Selected:</span>{" "}
                  <strong>
                    {new Date(data.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </strong>
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 3 — Time */}
        {step === 3 && (
          <motion.div
            key="step3"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <h3 className="font-heading text-2xl font-medium text-forest mb-2">
              Choose a Time
            </h3>
            <p className="font-body text-sm text-forest/55 mb-6">
              Select your preferred time slot.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {TIME_SLOTS.map((t) => (
                <label
                  key={t}
                  className={`flex items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all duration-200 text-sm font-body ${
                    data.time === t
                      ? "border-forest bg-forest text-cream font-medium"
                      : "border-cream-dark/30 bg-cream-light text-forest hover:border-forest/30"
                  }`}
                >
                  <input
                    type="radio"
                    value={t}
                    {...register("time", { required: true })}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
            {errors.time && (
              <p className="mt-3 text-xs text-red-500 font-body flex items-center gap-1">
                <AlertCircle size={11} />
                Please select a time slot
              </p>
            )}
          </motion.div>
        )}

        {/* Step 4 — Patient Details */}
        {step === 4 && (
          <motion.div
            key="step4"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-5"
          >
            <div>
              <h3 className="font-heading text-2xl font-medium text-forest mb-2">
                Your Information
              </h3>
              <p className="font-body text-sm text-forest/55 mb-6">
                We'll use this to confirm your appointment.
              </p>
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wide uppercase text-forest/50 mb-2">
                Full Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Priya Sharma"
                className={`${inputClass} ${errors.name ? "border-red-300" : ""}`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 font-body">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wide uppercase text-forest/50 mb-2">
                Email *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email" },
                })}
                type="email"
                placeholder="priya@email.com"
                className={`${inputClass} ${errors.email ? "border-red-300" : ""}`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 font-body">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wide uppercase text-forest/50 mb-2">
                Phone *
              </label>
              <input
                {...register("phone", { required: "Phone is required" })}
                type="tel"
                placeholder="+91 98765 43210"
                className={`${inputClass} ${errors.phone ? "border-red-300" : ""}`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500 font-body">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wide uppercase text-forest/50 mb-2">
                Additional Notes
              </label>
              <textarea
                {...register("notes")}
                rows={3}
                placeholder="Any specific concerns or questions for Dr. Snehal..."
                className={`${inputClass} resize-none`}
              />
            </div>
          </motion.div>
        )}

        {/* Step 5 — Confirmation */}
        {step === 5 && (
          <motion.div
            key="step5"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <h3 className="font-heading text-2xl font-medium text-forest mb-2">
              Confirm Your Booking
            </h3>
            <p className="font-body text-sm text-forest/55 mb-8">
              Review your appointment details before confirming.
            </p>

            <div className="bg-cream-light rounded-3xl p-7 space-y-4 mb-8">
              {[
                { label: "Treatment", value: data.service },
                {
                  label: "Date",
                  value: data.date
                    ? new Date(data.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "",
                },
                { label: "Time", value: data.time },
                { label: "Name", value: data.name },
                { label: "Email", value: data.email },
                { label: "Phone", value: data.phone },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 pb-4 border-b border-cream-dark/20 last:border-0 last:pb-0"
                >
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-forest/40 shrink-0">
                    {row.label}
                  </span>
                  <span className="font-body text-sm text-forest text-right">
                    {row.value || "—"}
                  </span>
                </div>
              ))}
            </div>

            {status === "error" && (
              <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-sm text-red-600 font-body">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}

            <p className="font-body text-xs text-forest/40 mb-6">
              By confirming, you agree to allow Dr. Snehal's team to contact you
              for appointment confirmation.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-8 border-t border-cream-dark/20">
        <button
          type="button"
          onClick={prev}
          disabled={step === 1}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-forest/20 text-sm font-body text-forest hover:bg-forest/5 transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        {step < 5 ? (
          <button
            type="button"
            onClick={next}
            className="flex items-center gap-2 px-8 py-3 bg-forest text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta transition-all duration-300"
          >
            Continue
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center gap-2 px-8 py-3.5 bg-terracotta text-cream-light text-sm font-body font-medium rounded-full hover:bg-terracotta-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Confirming...
              </>
            ) : (
              <>
                Confirm Appointment
                <Check size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
