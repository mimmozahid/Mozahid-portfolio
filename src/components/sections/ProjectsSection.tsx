"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import {
  ExternalLink,
  ChevronDown,
  Layers,
  Cpu,
  Database,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

// ─── Custom Project Visual Previews ───────────────────────────────────────────

function ProjectPreviewArea({ project, isExpanded }: { project: ProjectItem; isExpanded: boolean }) {
  if (project.id === "employee-management-system") {
    return (
      <div className={`w-full rounded-xl bg-[#070b16] border border-cyan-500/20 p-4 font-mono text-xs transition-all duration-300 ${isExpanded ? "h-48" : "h-28"} overflow-hidden flex flex-col justify-between`}>
        <div className="flex items-center justify-between text-[11px] text-cyan-300 pb-2 border-b border-white/[0.08]">
          <span className="flex items-center gap-1.5 font-bold">
            <Database className="h-3.5 w-3.5 text-cyan-400" />
            SQL Schema // employees &amp; departments
          </span>
          <span className="text-[10px] text-slate-500">Python ORM / Raw SQL</span>
        </div>
        <div className="space-y-1 py-1 text-[11px] text-slate-300">
          <div className="text-cyan-400">SELECT id, name, role, dept_id FROM employees;</div>
          <div className="grid grid-cols-4 gap-2 bg-white/[0.03] p-1.5 rounded border border-white/[0.05] text-[10px]">
            <span className="text-purple-300">101</span>
            <span>John Doe</span>
            <span className="text-emerald-400">Engineer</span>
            <span className="text-right text-slate-400">D01</span>
          </div>
          {isExpanded && (
            <div className="grid grid-cols-4 gap-2 bg-white/[0.03] p-1.5 rounded border border-white/[0.05] text-[10px] animate-in fade-in duration-300">
              <span className="text-purple-300">102</span>
              <span>Sarah Smith</span>
              <span className="text-emerald-400">Lead Tech</span>
              <span className="text-right text-slate-400">D02</span>
            </div>
          )}
        </div>
        <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1 border-t border-white/[0.06]">
          <span>ACID Transactions</span>
          <span className="text-cyan-400">Status: Query OK (1 row affected)</span>
        </div>
      </div>
    );
  }

  if (project.id === "ecommerce-web-app") {
    return (
      <div className={`w-full rounded-xl bg-[#06101c] border border-purple-500/20 p-4 font-mono text-xs transition-all duration-300 ${isExpanded ? "h-48" : "h-28"} overflow-hidden flex flex-col justify-between`}>
        <div className="flex items-center justify-between text-[11px] text-purple-300 pb-2 border-b border-white/[0.08]">
          <span className="flex items-center gap-1.5 font-bold">
            <Smartphone className="h-3.5 w-3.5 text-purple-400" />
            Mobile Catalog &amp; Admin Dashboard
          </span>
          <span className="text-[10px] text-slate-500">Mobile-Focused</span>
        </div>
        <div className="flex items-center gap-3 py-1">
          {/* Mock Mobile View */}
          <div className="w-24 h-16 rounded-lg bg-black/40 border border-purple-500/30 p-1 flex flex-col justify-between">
            <div className="h-1.5 w-8 bg-purple-400/40 rounded-full" />
            <div className="grid grid-cols-2 gap-0.5">
              <div className="h-4 rounded bg-white/[0.06]" />
              <div className="h-4 rounded bg-white/[0.06]" />
            </div>
            <div className="h-1.5 w-full bg-cyan-400/40 rounded" />
          </div>
          <div className="flex-1 space-y-1 text-[10px] text-slate-300">
            <div className="text-purple-300 font-semibold">• Product Catalog Management</div>
            <div className="text-slate-400">• Admin Inventory Controls</div>
            {isExpanded && (
              <div className="text-emerald-400">• Responsive Mobile Navigation</div>
            )}
          </div>
        </div>
        <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1 border-t border-white/[0.06]">
          <span>Role: Admin / Consumer</span>
          <span className="text-purple-400">Touch-First UI</span>
        </div>
      </div>
    );
  }

  if (project.id === "esp32-parking-system") {
    return (
      <div className={`w-full rounded-xl bg-[#0a0f18] border border-emerald-500/20 p-4 font-mono text-xs transition-all duration-300 ${isExpanded ? "h-48" : "h-28"} overflow-hidden flex flex-col justify-between`}>
        <div className="flex items-center justify-between text-[11px] text-emerald-300 pb-2 border-b border-white/[0.08]">
          <span className="flex items-center gap-1.5 font-bold">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            ESP32 Circuit &amp; Telemetry
          </span>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">RFID Active</span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1 text-center text-[10px]">
          <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
            <div className="text-slate-500">Servo Gate</div>
            <div className="text-emerald-300 font-bold">{isExpanded ? "OPEN (90°)" : "CLOSED (0°)"}</div>
          </div>
          <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
            <div className="text-slate-500">LCD Display</div>
            <div className="text-cyan-300 font-bold">SLOTS: 04/10</div>
          </div>
          <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
            <div className="text-slate-500">Sensors</div>
            <div className="text-purple-300 font-bold">Proximity OK</div>
          </div>
        </div>
        {isExpanded && (
          <div className="text-[10px] text-slate-400 font-mono bg-black/40 p-1.5 rounded border border-white/[0.05]">
            [ESP32] RFID Tag 0x4B92 verified → Gate Servo triggered → LCD updated.
          </div>
        )}
        <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1 border-t border-white/[0.06]">
          <span>Microcontroller: ESP32</span>
          <span className="text-emerald-400">Automated Slot Allocation</span>
        </div>
      </div>
    );
  }

  // Investigation Management System
  return (
    <div className={`w-full rounded-xl bg-[#0d0d1e] border border-amber-500/20 p-4 font-mono text-xs transition-all duration-300 ${isExpanded ? "h-48" : "h-28"} overflow-hidden flex flex-col justify-between`}>
      <div className="flex items-center justify-between text-[11px] text-amber-300 pb-2 border-b border-white/[0.08]">
        <span className="flex items-center gap-1.5 font-bold">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          Investigation Assignment Grid
        </span>
        <span className="text-[10px] text-slate-500">Case Delegation</span>
      </div>
      <div className="space-y-1.5 py-1 text-[11px]">
        <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded border border-white/[0.05] text-[10px]">
          <span className="text-amber-300 font-semibold">Unit Alpha (Lead: Officer 01)</span>
          <span className="text-emerald-400">Case #402 Assigned</span>
        </div>
        {isExpanded && (
          <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded border border-white/[0.05] text-[10px] animate-in fade-in duration-300">
            <span className="text-slate-300">Unit Beta (Lead: Officer 04)</span>
            <span className="text-cyan-400">Under Review</span>
          </div>
        )}
      </div>
      <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1 border-t border-white/[0.06]">
        <span>Investigator Profiles &amp; Grouping</span>
        <span className="text-amber-400">Audit Logging Enabled</span>
      </div>
    </div>
  );
}

// ─── Main Projects Section ───────────────────────────────────────────────────

export function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("employee-management-system");

  const toggleSelect = (id: string) => {
    setSelectedProjectId((curr) => (curr === id ? "" : id));
  };

  return (
    <SectionContainer id="projects" hasBorderBottom>
      <SectionHeading
        eyebrow="04 // ENGINEERING SHOWCASE"
        eyebrowVariant="swe"
        title="Featured"
        highlight="Engineering Projects"
        description="Applied systems demonstrating object-oriented modeling, database persistence, and hardware-software integration."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
        {portfolioData.projects.map((project) => {
          const isSelected = selectedProjectId === project.id;

          return (
            <motion.div
              layout
              key={project.id}
              onClick={() => toggleSelect(project.id)}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-[#090e1f] border-cyan-500/40 shadow-2xl shadow-cyan-950/30 ring-1 ring-cyan-500/20"
                  : "bg-[#080c18]/90 border-white/[0.08] hover:border-white/20 hover:bg-[#0a0f20]"
              }`}
            >
              <div>
                {/* Header with category and links */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-white/[0.05] border border-white/[0.08] text-slate-300">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white hover:bg-white/[0.1] hover:border-white/25 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                    {/* Live Demo only when a real URL exists */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-500/20"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight flex items-center justify-between">
                  <span>{project.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                      isSelected ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-cyan-300 font-mono mb-4 font-normal">
                  {project.tagline}
                </p>

                {/* Interactive Preview Area (grows when selected) */}
                <div className="mb-5">
                  <ProjectPreviewArea project={project} isExpanded={isSelected} />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                  {project.description}
                </p>

                {/* Expanded Architectural Details */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 mb-5 pt-3 border-t border-white/[0.08]"
                    >
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-cyan-400" />
                        Key Engineering Highlights
                      </div>
                      <div className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Technologies Animated Tag Cluster */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={false}
                      animate={isSelected ? { scale: [1, 1.05, 1], y: [0, -2, 0] } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-colors ${
                        isSelected
                          ? "bg-cyan-500/15 text-cyan-200 border border-cyan-500/30"
                          : "bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
