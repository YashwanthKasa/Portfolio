"use client";

import React from "react";
import { ArrowUp, Video, Youtube, Instagram, Linkedin, Film } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Impact", href: "#impact" },
    { name: "About", href: "#about" },
    { name: "Workflow", href: "#workflow" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#1C1C1C] py-16 px-6 md:px-12 text-[#86868B]">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier: Logo, Navigation, Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#181818]">
          <div>
            <span className="font-semibold text-lg tracking-wider text-[#F5F5F7] uppercase font-mono">
              {portfolioData.personalName}
            </span>
            <p className="text-xs text-[#86868B] mt-1">
              {portfolioData.brandTagline}
            </p>
          </div>

          {/* Footer Navigation Jump Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#86868B] hover:text-[#F5F5F7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#86868B] hover:text-white px-4 py-2 rounded-full border border-[#222222] hover:border-white transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tier: Copyright, Statement, Social Icons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono">
          <div className="space-y-1">
            <p className="text-[#86868B]">
              © {new Date().getFullYear()} {portfolioData.personalName}. All rights reserved.
            </p>
            <p className="text-[11px] text-[#55555A]">
              Crafted with Apple-inspired minimalism for narrative video editors.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-[#86868B] hover:text-white hover:border-[#444] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimeo"
              className="w-9 h-9 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-[#86868B] hover:text-white hover:border-[#444] transition-colors"
            >
              <Film className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-[#86868B] hover:text-white hover:border-[#444] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-[#86868B] hover:text-white hover:border-[#444] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
