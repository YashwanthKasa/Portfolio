"use client";

import React, { useEffect } from "react";
import { X, Play, CheckCircle2, Award, Wrench, Layers, ExternalLink } from "lucide-react";
import { Project } from "../types/portfolio";
import { VideoPlayer } from "./VideoPlayer";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/95 backdrop-blur-xl animate-fade-in overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-0 cursor-pointer"
        aria-label="Close project modal"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0F0F0F] border border-[#252525] rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252525] bg-[#0A0A0A] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#86868B]">
              {project.category}
            </span>
            <span className="text-[#383838]">•</span>
            <span className="text-xs font-mono text-[#86868B]">
              {project.year}
            </span>
            {project.isPlaceholder && (
              <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 bg-[#1C1C1C] text-[#86868B] border border-[#333333] rounded">
                Placeholder Specimen
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-full text-[#86868B] hover:text-white hover:bg-[#252525] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Video Player */}
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-[#252525] shadow-lg">
            <VideoPlayer
              src={project.videoUrl}
              poster={project.thumbnailUrl}
              title={project.title}
              autoPlay={true}
              className="w-full h-full"
            />
          </div>

          {/* Title & Metadata header */}
          <div className="border-b border-[#202020] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#F5F5F7]">
                {project.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161616] text-[#86868B] border border-[#252525]">
                  {project.clientLabel}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161616] text-[#86868B] border border-[#252525]">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-base text-[#86868B] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Detailed sections grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left 2 cols: Overview & Approach */}
            <div className="md:col-span-2 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-white" />
                  Project Overview
                </h3>
                <p className="text-sm md:text-base text-[#D4D4D8] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Editing Approach */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#86868B] font-mono mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  Editing Approach & Craft
                </h3>
                <ul className="space-y-3">
                  {project.editingApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#86868B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span className="leading-relaxed text-[#D4D4D8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 1 col: Role, Tools, Results */}
            <div className="space-y-6 bg-[#141414] border border-[#252525] p-5 rounded-xl">
              {/* My Role */}
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#86868B] font-mono mb-2">
                  My Role
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.role.map((r, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-[#1A1A1A] text-[#F5F5F7] border border-[#333333] rounded-md font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-[#86868B] font-mono mb-2 flex items-center gap-1.5">
                  <Wrench className="w-3 h-3" />
                  Software / Pipeline
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.toolsUsed.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-[#1F1F1F] text-[#86868B] rounded text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Results */}
              {project.results && (
                <div className="border-t border-[#252525] pt-4">
                  <h4 className="text-[11px] uppercase tracking-wider text-[#86868B] font-mono mb-2 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-white" />
                    Impact / Performance
                  </h4>
                  <p className="text-xs text-[#F5F5F7] leading-relaxed font-normal bg-[#1B1B1B] p-3 rounded-lg border border-[#2B2B2B]">
                    {project.results}
                  </p>
                </div>
              )}

              {/* Editorial placeholder note */}
              <div className="text-[10px] text-[#86868B] pt-2 border-t border-[#222222]">
                Tip: Edit this project's data, video stream, and copy inside{" "}
                <code className="text-[#F5F5F7] bg-[#222] px-1 py-0.5 rounded">
                  src/data/portfolioData.ts
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions inside modal */}
        <div className="px-6 py-4 bg-[#0A0A0A] border-t border-[#252525] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#86868B] font-mono">
            {project.clientLabel} • {project.year}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#86868B] hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-black bg-white hover:bg-[#F5F5F7] rounded-full transition-colors flex items-center gap-1.5"
            >
              <span>Discuss Similar Edit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
