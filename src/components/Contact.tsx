"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Short-form Video",
    budget: "$1k - $3k",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [copiedDraft, setCopiedDraft] = useState(false);

  const projectTypeOptions = [
    "Short-form Content (Reels / Shorts / TikTok)",
    "YouTube Long-form Video",
    "Cinematic Teaser / Trailer",
    "Brand & Commercial Video",
    "Full-time Retainer / Consultation",
    "Other Creative Project",
  ];

  const budgetOptions = [
    "Under $1,000",
    "$1,000 – $3,000",
    "$3,000 – $5,000",
    "$5,000 – $10,000+",
    "Flexible / To be discussed",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email format (e.g. name@domain.com).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please include a project description (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmissionStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // Construct genuine mailto draft link
    const subject = encodeURIComponent(
      `[Video Project Inquiry] ${formData.projectType} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello ${portfolioData.personalName},\n\n` +
      `I would like to inquire about a video editing collaboration.\n\n` +
      `CLIENT DETAILS:\n` +
      `- Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Project Type: ${formData.projectType}\n` +
      `- Estimated Budget: ${formData.budget}\n\n` +
      `PROJECT BRIEF:\n${formData.message}\n\n` +
      `Sent via ${portfolioData.personalName} Portfolio Website.`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("success");

      // Trigger mailto intent
      window.location.href = mailtoUrl;
    }, 600);
  };

  const copyDraftToClipboard = () => {
    const draftText = `To: ${contact.email}\nSubject: [Video Inquiry] ${formData.projectType} — ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1C1C]"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
            HAVE A PROJECT IN MIND?
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7]">
          Let's make something worth watching.
        </h2>
        <p className="text-base text-[#86868B] mt-4 leading-relaxed">
          Have an idea, a project or a story that needs to be told? Let's bring it to life.
        </p>
      </div>

      {/* Grid: Contact Methods & Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact Channels (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0D0D0D] border border-[#222222] p-8 rounded-2xl">
            <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-6">
              Direct Channels
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#3E3E3E] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#86868B] block">
                      Email
                    </span>
                    <span className="text-sm font-medium text-[#F5F5F7] group-hover:text-white">
                      {contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#3E3E3E] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#86868B] block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-[#F5F5F7] group-hover:text-white">
                      {contact.whatsapp}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#3E3E3E] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-white">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#86868B] block">
                      Instagram
                    </span>
                    <span className="text-sm font-medium text-[#F5F5F7] group-hover:text-white">
                      {contact.instagram}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#3E3E3E] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#86868B] block">
                      LinkedIn
                    </span>
                    <span className="text-sm font-medium text-[#F5F5F7] group-hover:text-white">
                      {contact.linkedin}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Availability Banner */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#222222]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#F5F5F7]">
                Current Status
              </span>
            </div>
            <p className="text-sm text-[#86868B]">{contact.availability}</p>
            <p className="text-xs text-[#636366] mt-1">{contact.location}</p>
          </div>
        </div>

        {/* Right Column: Functional Contact Form (7 cols on lg) */}
        <div className="lg:col-span-7 bg-[#0D0D0D] border border-[#222222] p-8 md:p-10 rounded-2xl">
          <h3 className="text-xl font-medium text-[#F5F5F7] mb-2">
            Project Inquiry Form
          </h3>
          <p className="text-xs text-[#86868B] mb-8">
            Fill out your project scope below. A detailed inquiry will be generated and routed directly.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider font-mono text-[#86868B] mb-2"
              >
                Your Name / Brand *
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Alex Morgan or Studio Prime"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full px-4 py-3 bg-[#141414] border rounded-xl text-sm text-[#F5F5F7] placeholder-[#555] focus:outline-none transition-colors ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#252525] focus:border-white"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider font-mono text-[#86868B] mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. alex@studio.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 bg-[#141414] border rounded-xl text-sm text-[#F5F5F7] placeholder-[#555] focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#252525] focus:border-white"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Project Type & Budget Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs uppercase tracking-wider font-mono text-[#86868B] mb-2"
                >
                  Project Category
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#141414] border border-[#252525] focus:border-white rounded-xl text-sm text-[#F5F5F7] focus:outline-none transition-colors"
                >
                  {projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#141414] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs uppercase tracking-wider font-mono text-[#86868B] mb-2"
                >
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#141414] border border-[#252525] focus:border-white rounded-xl text-sm text-[#F5F5F7] focus:outline-none transition-colors"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#141414] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider font-mono text-[#86868B] mb-2"
              >
                Project Details & Timeline *
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about the footage volume, visual style, turnaround deadline, and references..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`w-full px-4 py-3 bg-[#141414] border rounded-xl text-sm text-[#F5F5F7] placeholder-[#555] focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#252525] focus:border-white"
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F5F5F7] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Preparing Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Start a Conversation</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Genuine Feedback / Status Card (No deceptive fake success) */}
          {submissionStatus === "success" && (
            <div className="mt-6 p-5 rounded-xl bg-[#141414] border border-[#2E2E2E] animate-fade-in">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white">
                    Inquiry Draft Prepared Successfully
                  </h4>
                  <p className="text-xs text-[#86868B] leading-relaxed">
                    Your email client was triggered to send this inquiry directly to{" "}
                    <strong className="text-white">{contact.email}</strong>. If your email client didn't open automatically, you can copy the draft below:
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={copyDraftToClipboard}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#2A2A2A] text-xs text-white border border-[#333333] transition-colors"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Draft Text</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${contact.email}`}
                      className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-medium hover:bg-[#E5E5EA] transition-colors"
                    >
                      Open Email Again
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
