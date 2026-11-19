"use client";

import React, { useState } from "react";
import { Play, ArrowUpRight, Filter } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Project, ProjectCategory } from "../types/portfolio";
import { ProjectModal } from "./ProjectModal";

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "Short-form Content",
    "YouTube Long-form",
    "Cinematic Teasers",
    "Brand & Promotional Videos",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252525] bg-[#0A0A0A] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#86868B]">
              SELECTED PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F5F5F7] max-w-2xl">
            Different Stories. One Vision.
          </h2>
          <p className="text-base text-[#86868B] max-w-xl mt-3">
            A collection of visual stories, experiments and creative collaborations.
          </p>
        </div>

        {/* Category count indicator */}
        <div className="text-xs font-mono text-[#86868B] self-start md:self-end">
          SHOWING {filteredProjects.length} OF {portfolioData.projects.length} PROJECTS
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                isActive
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-[#0D0D0D] text-[#86868B] border border-[#222222] hover:text-[#F5F5F7] hover:border-[#333333]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Responsive 2-column Grid (desktop & tablet: 2 cols, mobile: 1 col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group cursor-pointer flex flex-col bg-[#111111] border border-[#252525] hover:border-[#3E3E3E] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/[0.02]"
          >
            {/* Visual focus: Large Video Thumbnail with 16:9 ratio */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Category pill on thumbnail top left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-black/70 backdrop-blur-md text-[#F5F5F7] border border-white/10 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Duration and placeholder tag on top right */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                {project.isPlaceholder && (
                  <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 bg-black/60 text-[#86868B] border border-white/10 rounded">
                    Sample Data
                  </span>
                )}
                <span className="text-[11px] font-mono px-2 py-0.5 bg-black/70 backdrop-blur-md text-[#86868B] border border-white/10 rounded">
                  {project.duration}
                </span>
              </div>

              {/* Center Play Button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-black/90">
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                </div>
              </div>

              {/* Bottom bar preview label */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#86868B] font-mono">
                <span>{project.clientLabel}</span>
                <span className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Open Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Project Details Footer */}
            <div className="p-6 flex flex-col justify-between flex-grow bg-[#111111]">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-medium tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-[#252525] group-hover:border-[#444] flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#86868B] line-clamp-2 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tags / Roles */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[#1E1E1E]">
                {project.role.map((r, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 bg-[#171717] text-[#86868B] rounded border border-[#242424]"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
