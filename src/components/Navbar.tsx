"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section for subtle active styling
      const sections = ["home", "work", "services", "impact", "about", "workflow", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/90 backdrop-blur-md border-b border-[#252525] py-3.5"
            : "bg-[#000000] border-b border-[#1c1c1c] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LEFT: Personal brand / logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-2 text-decoration-none"
          >
            <span className="font-semibold text-sm md:text-base tracking-wider text-[#F5F5F7] group-hover:text-white transition-colors uppercase font-mono">
              {portfolioData.personalName}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-[#86868B] px-2 py-0.5 border border-[#252525] rounded-full">
              Editor
            </span>
          </a>

          {/* CENTRE: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#F5F5F7]"
                      : "text-[#86868B] hover:text-[#F5F5F7]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-white transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#F5F5F7] border border-[#383838] hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
            >
              Let's Talk
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#86868B] hover:text-[#F5F5F7] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-12 px-8">
          <div className="flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-widest text-[#86868B] border-b border-[#252525] pb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-light text-[#F5F5F7] hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#86868B]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-[#252525] pt-6">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-full text-center py-3.5 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-[#F5F5F7] transition-colors rounded-full"
            >
              Let's Talk
            </a>
            <p className="text-[11px] text-[#86868B] text-center">
              {portfolioData.contact.availability}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
