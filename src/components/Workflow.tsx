"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Workflow: React.FC = () => {
  const { workflow } = portfolioData;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section
      id="workflow"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1C1C]"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
            {workflow.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7]">
          {workflow.headline}
        </h2>
        <p className="text-base text-[#86868B] mt-4 leading-relaxed">
          A disciplined, collaborative post-production methodology designed to eliminate friction, respect deadlines, and guarantee creative alignment from ingest to master delivery.
        </p>
      </div>

      {/* =========================================================================
          DESKTOP VIEW: Clean 5-Step Horizontal Timeline (Hidden on small screens)
         ========================================================================= */}
      <div className="hidden lg:block relative">
        {/* Continuous Horizontal Connecting Line */}
        <div className="absolute top-6 left-8 right-8 h-[1px] bg-[#222222] z-0" />

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-5 gap-6 relative z-10">
          {workflow.steps.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStepIndex(index)}
                className={`flex flex-col text-left group cursor-pointer transition-all duration-300 p-4 rounded-xl border ${
                  isActive
                    ? "bg-[#111111] border-[#3E3E3E]"
                    : "bg-[#0A0A0A] border-[#1E1E1E] hover:border-[#2C2C2C]"
                }`}
              >
                {/* Step indicator circle */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                        : "bg-[#141414] text-[#86868B] border border-[#282828] group-hover:border-white/40 group-hover:text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#86868B]">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-medium text-[#F5F5F7] mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Step Summary */}
                <p className="text-xs text-[#86868B] leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* In-depth detail */}
                <div className="mt-auto pt-3 border-t border-[#1C1C1C] text-[11px] text-[#A1A1A6] leading-normal font-light">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW: Vertical Timeline (Hidden on large screens)
         ========================================================================= */}
      <div className="block lg:hidden relative pl-6 sm:pl-8 border-l border-[#252525] ml-4 sm:ml-6 space-y-10">
        {workflow.steps.map((step) => (
          <div key={step.number} className="relative group">
            {/* Step Node Marker on the Line */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center text-[11px] font-mono font-medium text-white shadow-md">
              {step.number}
            </div>

            {/* Content card */}
            <div className="bg-[#0D0D0D] border border-[#222222] p-6 rounded-2xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#86868B] block mb-1">
                {step.step}
              </span>
              <h3 className="text-xl font-medium text-[#F5F5F7] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed mb-3">
                {step.description}
              </p>
              <p className="text-xs text-[#86868B] leading-relaxed pt-3 border-t border-[#1C1C1C]">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
