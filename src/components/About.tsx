"use client";

import React from "react";
import { Film, Sliders, Sparkles, Check, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const About: React.FC = () => {
  const { about, personalName } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1C1C]"
    >
      {/* Section Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
          {about.eyebrow}
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7] mb-16 max-w-3xl">
        {about.headline}
      </h2>

      {/* Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Film Identity (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#252525] bg-[#111111] group">
            {/* Portrait Image */}
            <div className="aspect-[4/5] w-full overflow-hidden relative">
              <img
                src={about.portraitPlaceholderUrl}
                alt={personalName}
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Film Slate Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span>PORTRAIT SPECIMEN</span>
                <span>24FPS / 35MM</span>
              </div>

              {/* Bottom Portrait Info */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-1">
                  Lead Video Editor
                </p>
                <h3 className="text-lg font-medium text-white tracking-tight">
                  {personalName}
                </h3>
              </div>
            </div>
          </div>

          {/* Software Toolkit Grid */}
          <div className="p-6 rounded-2xl border border-[#202020] bg-[#0D0D0D]">
            <h4 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-4 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-white" />
              Software & Master Pipeline
            </h4>
            <div className="flex flex-wrap gap-2">
              {about.softwareToolkit.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-[#D4D4D8] bg-[#161616] border border-[#252525] rounded-full hover:border-[#3E3E3E] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Text & Narrative (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-10">
          {/* Professional Introduction */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-3">
              Introduction
            </h3>
            <p className="text-xl sm:text-2xl text-[#F5F5F7] font-light leading-relaxed">
              "{about.introduction}"
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-[#252525] relative">
            <h3 className="text-xs uppercase tracking-widest text-white font-mono mb-3 flex items-center gap-2">
              <Film className="w-4 h-4 text-white" />
              {about.philosophyTitle}
            </h3>
            <p className="text-base text-[#D4D4D8] leading-relaxed italic">
              "{about.philosophyText}"
            </p>
          </div>

          {/* Creative Approach */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-4">
              {about.approachTitle}
            </h3>
            <div className="space-y-4">
              {about.approachPoints.map((point, idx) => {
                const [title, desc] = point.split(": ");
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#202020] bg-[#0A0A0A] hover:border-[#333333] transition-colors"
                  >
                    <h4 className="text-sm font-medium text-[#F5F5F7] mb-1">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Digital Marketing Experience */}
          <div className="pt-6 border-t border-[#1C1C1C]">
            <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-3">
              {about.experienceTitle}
            </h3>
            <p className="text-sm text-[#86868B] leading-relaxed">
              {about.experienceText}
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-[#F5F5F7] transition-all"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
