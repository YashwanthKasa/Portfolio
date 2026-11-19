"use client";

import React, { useEffect } from "react";
import { X, Film, Volume2 } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";
import { portfolioData } from "../data/portfolioData";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl animate-fade-in"
    >
      {/* Background overlay click to close */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 z-0 cursor-pointer"
        aria-label="Close modal" 
      />

      <div className="relative z-10 w-full max-w-5xl bg-[#0D0D0D] border border-[#252525] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252525] bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-[#86868B]" />
            <span className="text-xs uppercase tracking-widest font-mono text-[#F5F5F7]">
              {portfolioData.showreel.label}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs text-[#86868B]">
              Press <kbd className="px-1.5 py-0.5 bg-[#1C1C1C] border border-[#333333] rounded text-[10px] text-white">ESC</kbd> to exit
            </span>
            <button
              onClick={onClose}
              aria-label="Close showreel"
              className="p-1.5 rounded-full text-[#86868B] hover:text-white hover:bg-[#252525] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="w-full aspect-video bg-black relative">
          <VideoPlayer
            src={portfolioData.showreel.videoUrl}
            poster={portfolioData.showreel.thumbnailUrl}
            title={portfolioData.showreel.title}
            autoPlay={true}
            loop={false}
            className="w-full h-full"
          />
        </div>

        {/* Bottom Metadata Bar */}
        <div className="px-6 py-5 bg-[#0A0A0A] border-t border-[#252525] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-medium text-[#F5F5F7]">
              {portfolioData.showreel.title}
            </h3>
            <p className="text-xs text-[#86868B] mt-0.5 max-w-xl">
              {portfolioData.showreel.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono text-[#86868B] px-3 py-1 bg-[#141414] border border-[#252525] rounded-full">
              Runtime: {portfolioData.showreel.duration}
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-1.5 text-xs uppercase tracking-wider font-medium text-black bg-white hover:bg-[#F5F5F7] rounded-full transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
