"use client";

import React, { useEffect, useRef, useState } from "react";
import { Info, TrendingUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface StatCounterProps {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  isInView: boolean;
}

const StatCounter: React.FC<StatCounterProps> = ({
  numericValue,
  suffix,
  label,
  description,
  isInView,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = easeProgress * numericValue;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    const animId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animId);
  }, [isInView, numericValue]);

  const formattedDisplay =
    numericValue % 1 !== 0
      ? displayValue.toFixed(1)
      : Math.floor(displayValue).toString();

  return (
    <div className="flex flex-col justify-between p-8 md:p-10 bg-[#0A0A0A] border border-[#202020] rounded-2xl hover:border-[#383838] transition-colors">
      <div>
        {/* Oversized Number */}
        <div className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#F5F5F7] font-sans mb-3 flex items-baseline">
          <span>{isInView ? formattedDisplay : "0"}</span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl font-light">
            {suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-sm uppercase tracking-widest text-[#F5F5F7] font-mono mb-2">
          {label}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs text-[#86868B] leading-relaxed pt-4 border-t border-[#1C1C1C]">
        {description}
      </p>
    </div>
  );
};

export const Impact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1C1C]"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
            THE IMPACT
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7]">
          Creative Work. Measurable Impact.
        </h2>
        <p className="text-base text-[#86868B] mt-4 leading-relaxed">
          High-end cinematography fused with audience psychology. Pacing and visual design calculated to hold attention across the entire timeline.
        </p>
      </div>

      {/* 4 Stat Boxes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.stats.map((stat) => (
          <StatCounter
            key={stat.id}
            value={stat.value}
            numericValue={stat.numericValue}
            suffix={stat.suffix}
            label={stat.label}
            description={stat.description}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="mt-10 p-5 rounded-xl border border-[#222222] bg-[#0D0D0D]/60 flex items-start gap-3.5">
        <Info className="w-4 h-4 text-[#86868B] shrink-0 mt-0.5" />
        <p className="text-xs text-[#86868B] leading-relaxed">
          <strong className="text-[#D4D4D8] font-medium">Context & Integrity:</strong>{" "}
          These statistics represent historical achievements achieved across specific creator collaborations and commercial productions. They illustrate editing efficiency and potential retention uplift, not guaranteed universal metrics for every campaign.
        </p>
      </div>
    </section>
  );
};
