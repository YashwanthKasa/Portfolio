import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Impact } from "@/components/Impact";
import { About } from "@/components/About";
import { Workflow } from "@/components/Workflow";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-[#F5F5F7] min-h-screen relative selection:bg-white selection:text-black">
      {/* SECTION 01 — NAVIGATION BAR */}
      <Navbar />

      <main className="relative z-10 flex flex-col gap-0">
        {/* SECTION 02 — HERO SECTION */}
        <Hero />

        {/* SECTION 03 — SELECTED WORK */}
        <SelectedWork />

        {/* SECTION 04 — SERVICES */}
        <Services />

        {/* SECTION 05 — RESULTS & IMPACT */}
        <Impact />

        {/* SECTION 06 — ABOUT ME */}
        <About />

        {/* SECTION 07 — MY WORKFLOW */}
        <Workflow />

        {/* SECTION 08 — CONTACT / FINAL CTA */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
