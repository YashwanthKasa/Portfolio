"use client";

import React from "react";
import { Zap, Tv, Film, Sparkles, Check, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-white stroke-[1.5]" />;
      case "Tv":
        return <Tv className="w-5 h-5 text-white stroke-[1.5]" />;
      case "Film":
        return <Film className="w-5 h-5 text-white stroke-[1.5]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-white stroke-[1.5]" />;
      default:
        return <Film className="w-5 h-5 text-white stroke-[1.5]" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1C1C]">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
            WHAT I DO
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7] leading-tight">
          More Than Just Editing.
        </h2>
        <p className="text-base text-[#86868B] mt-4 leading-relaxed">
          Tailored post-production workflows built specifically to elevate your visual brand, maximize audience retention, and articulate high-impact narratives.
        </p>
      </div>

      {/* 4 Distinct Service Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {portfolioData.services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-[#111111] border border-[#252525] hover:border-[#3E3E3E] rounded-2xl p-8 lg:p-10 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-2px]"
          >
            <div>
              {/* Header inside card: Number and Minimal Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#2A2A2A] flex items-center justify-center group-hover:border-white/30 transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] px-2.5 py-1 rounded-full bg-[#161616] border border-[#252525]">
                  SERVICE {service.number}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-medium tracking-tight text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#86868B] leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Deliverables / Scope Checklist */}
              <div className="space-y-2.5 pt-6 border-t border-[#1C1C1C]">
                <p className="text-[11px] uppercase tracking-wider font-mono text-[#86868B] mb-3">
                  Key Deliverables
                </p>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1A6]">
                    <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                    <span className="leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action link */}
            <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
              <span className="text-xs font-mono text-[#86868B]">
                Available for custom packages
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-medium tracking-wider text-white hover:text-[#D4D4D8] transition-colors group/btn"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
