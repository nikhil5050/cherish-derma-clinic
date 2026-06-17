"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/constants";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          service: data.service,
          message: data.message,
          to_name: "Dr. Snehal Karape",
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-cream border border-cream-dark/40 rounded-2xl px-5 py-3.5 font-body text-sm text-forest placeholder-forest/35 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/8 transition-all duration-200";

  const labelClass = "block font-body text-xs font-semibold tracking-wide uppercase text-forest/50 mb-2";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-terracotta/15 flex items-center justify-center mb-6"
            >
              <CheckCircle2 size={36} className="text-terracotta" />
            </motion.div>
            <h3 className="font-heading text-3xl font-light text-forest mb-3">
              Message Received!
            </h3>
            <p className="font-body text-sm text-forest/60 max-w-xs leading-relaxed mb-8">
              Thank you for reaching out. Dr. Snehal's team will get back to you
              within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-3 border border-forest/20 rounded-full text-sm font-body text-forest hover:bg-forest hover:text-cream transition-all duration-200"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Priya Sharma"
                  className={`${inputClass} ${errors.name ? "border-red-300 focus:border-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-body flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="priya@email.com"
                  className={`${inputClass} ${errors.email ? "border-red-300" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-body flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  {...register("phone", { required: "Phone number is required" })}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={`${inputClass} ${errors.phone ? "border-red-300" : ""}`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 font-body flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass}>Interested In</label>
                <select
                  {...register("service")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select a treatment...</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Your Message *</label>
              <textarea
                {...register("message", { required: "Please write a message" })}
                rows={5}
                placeholder="Tell us about your skin concerns, goals, or any questions you have..."
                className={`${inputClass} resize-none ${errors.message ? "border-red-300" : ""}`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500 font-body flex items-center gap-1">
                  <AlertCircle size={11} />
                  {errors.message.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-sm text-red-600 font-body">
                <AlertCircle size={16} />
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group w-full flex items-center justify-center gap-2 py-4 bg-forest text-cream-light text-sm font-body font-medium rounded-2xl hover:bg-terracotta transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
