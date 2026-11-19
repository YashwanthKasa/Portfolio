"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { ShowreelModal } from "./ShowreelModal";

export const Hero: React.FC = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center"
    >
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#252525] bg-[#0A0A0A] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
          {portfolioData.eyebrowHero}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#F5F5F7] max-w-5xl leading-[1.08] mb-6">
        {portfolioData.heroHeadline}
      </h1>

      {/* Supporting description */}
      <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl font-normal leading-relaxed mb-10">
        {portfolioData.heroDescription}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20">
        <a
          href="#work"
          onClick={(e) => handleScrollTo(e, "work")}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-[#F5F5F7] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
        >
          <span>Explore My Work</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "contact")}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#252525] bg-[#0A0A0A] text-[#F5F5F7] font-medium text-xs uppercase tracking-wider hover:border-[#383838] hover:bg-[#141414] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>Let's Collaborate</span>
        </a>
      </div>

      {/* Cinematic Showreel Container */}
      <div className="w-full max-w-5xl relative">
        <div className="flex items-center justify-between mb-3 px-1 text-[11px] uppercase font-mono tracking-widest text-[#86868B]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86868B]" />
            {portfolioData.showreel.label}
          </span>
          <span>RUNTIME {portfolioData.showreel.duration}</span>
        </div>

        <div
          onClick={() => setShowreelOpen(true)}
          className="group relative aspect-video w-full rounded-[16px] overflow-hidden bg-[#111111] border border-[#252525] hover:border-[#383838] transition-all duration-500 cursor-pointer shadow-2xl"
        >
          {/* Thumbnail image */}
          <img
            src={portfolioData.showreel.thumbnailUrl}
            alt={portfolioData.showreel.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Minimal Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/50 group-hover:bg-black/90 shadow-2xl">
              <Play className="w-6 h-6 md:w-7 md:h-7 ml-1 fill-white" />
            </div>
          </div>

          {/* Bottom badge info inside showreel */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between z-10 pointer-events-none">
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-[#86868B] mb-1 font-mono">
                Featured Showreel
              </p>
              <h3 className="text-lg md:text-xl font-medium text-white tracking-tight">
                {portfolioData.showreel.title}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] text-[#F5F5F7]">
              <span>4K UHD</span>
              <span>•</span>
              <span>Stereo / Atmos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </section>
  );
};
