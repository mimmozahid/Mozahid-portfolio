"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import {
  GitMerge,
  Terminal,
  Cpu,
  Wrench,
  ArrowUpDown,
  Sparkles,
  Link2,
} from "lucide-react";

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string>("C++");
  const [activeTab, setActiveTab] = useState<"clusters" | "matrix">("clusters");

  const { programming, computerScience, tools, clusters } = portfolioData.skills;

  // Interconnected node lookup mapping
  const connectionsMap: Record<string, string[]> = {
    "C++": ["Data Structures", "Algorithms", "Problem Solving"],
    "Java": ["OOP", "Software Development", "DBMS"],
    "C": ["Data Structures", "Algorithms", "Linux"],
    "Data Structures": ["C++", "Algorithms", "Problem Solving", "C"],
    "Algorithms": ["C++", "Data Structures", "Problem Solving"],
    "OOP": ["Java", "Software Development", "DBMS"],
    "Problem Solving": ["C++", "Data Structures", "Algorithms"],
    "DBMS": ["SQL", "Java", "OOP"],
    "SQL": ["DBMS", "Software Development"],
    "Git": ["GitHub", "Linux", "VS Code"],
    "GitHub": ["Git", "VS Code"],
    "Linux": ["Git", "C", "VS Code"],
    "VS Code": ["Git", "GitHub", "C++", "Java"],
  };

  const activeConnections = connectionsMap[selectedSkill] || [];

  return (
    <SectionContainer id="skills" hasBorderBottom>
      <SectionHeading
        eyebrow="03 // SKILLS & ARCHITECTURE"
        eyebrowVariant="dual"
        title="Interactive"
        highlight="Skills & Clusters"
        description="Structured into interconnected computational pipelines and modular systems. No arbitrary percentages."
      />

      {/* View Toggle Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="inline-flex items-center p-1 rounded-xl bg-[#080d1a] border border-white/[0.08]">
          <button
            type="button"
            onClick={() => setActiveTab("clusters")}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
              activeTab === "clusters"
                ? "bg-white/[0.1] text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <GitMerge className="h-3.5 w-3.5 text-purple-400" />
            <span>Connection Clusters (↕)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("matrix")}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
              activeTab === "matrix"
                ? "bg-white/[0.1] text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Category Matrix</span>
          </button>
        </div>

        {/* Dynamic connection feedback pill */}
        <div className="text-xs font-mono text-slate-400 flex items-center gap-2 bg-[#090f1d] px-3.5 py-1.5 rounded-lg border border-white/[0.06]">
          <span className="text-slate-500">Selected Node:</span>
          <span className="text-cyan-300 font-bold">{selectedSkill}</span>
          <ArrowUpDown className="h-3 w-3 text-purple-400" />
          <span className="text-purple-300 font-medium">
            {activeConnections.length} Connected Concepts
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "clusters" ? (
          /* ── CLUSTERS VIEW (Vertical ↕ Pipelines) ── */
          <motion.div
            key="clusters"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {clusters.map((cluster) => {
              const isPurple = cluster.accent === "purple";
              const isCyan = cluster.accent === "cyan";
              const isAmber = cluster.accent === "amber";

              const borderColor = isPurple
                ? "border-purple-500/30 hover:border-purple-500/50"
                : isCyan
                ? "border-cyan-500/30 hover:border-cyan-500/50"
                : isAmber
                ? "border-amber-500/30 hover:border-amber-500/50"
                : "border-emerald-500/30 hover:border-emerald-500/50";

              const titleColor = isPurple
                ? "text-purple-400"
                : isCyan
                ? "text-cyan-400"
                : isAmber
                ? "text-amber-400"
                : "text-emerald-400";

              return (
                <div
                  key={cluster.id}
                  className={`p-6 rounded-2xl bg-[#080d1a]/90 border ${borderColor} backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-xl`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${titleColor}`}>
                        {cluster.title}
                      </span>
                      <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: isPurple ? "#a78bfa" : isCyan ? "#22d3ee" : isAmber ? "#fbbf24" : "#34d399" }} />
                    </div>

                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                      {cluster.description}
                    </p>

                    {/* Vertical Pipeline Nodes with ↕ connectors */}
                    <div className="flex flex-col items-center space-y-2 py-2">
                      {cluster.nodes.map((node, nIdx) => {
                        const isCurrentSelected = selectedSkill === node;
                        const isConnected = activeConnections.includes(node);

                        return (
                          <React.Fragment key={node}>
                            <button
                              type="button"
                              onClick={() => setSelectedSkill(node)}
                              className={`w-full py-2.5 px-3 rounded-xl font-mono text-xs font-semibold flex items-center justify-between transition-all duration-200 border ${
                                isCurrentSelected
                                  ? "bg-white/[0.15] text-white border-white/40 shadow-lg scale-102"
                                  : isConnected
                                  ? "bg-purple-500/20 text-purple-200 border-purple-400/50 shadow-md"
                                  : "bg-[#0c1224] text-slate-300 border-white/[0.08] hover:border-white/20 hover:text-white"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isPurple ? "#c084fc" : isCyan ? "#38bdf8" : isAmber ? "#fcd34d" : "#4ade80" }} />
                                {node}
                              </span>
                              {isCurrentSelected && (
                                <span className="text-[10px] text-cyan-300 uppercase">ACTIVE</span>
                              )}
                            </button>

                            {/* Bidirectional connector ↕ */}
                            {nIdx < cluster.nodes.length - 1 && (
                              <div className="flex items-center justify-center my-0.5">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-xs">
                                  ↕
                                </span>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Flow summary string */}
                  <div className="pt-4 border-t border-white/[0.06] mt-4">
                    <div className="text-[10px] font-mono text-slate-400 text-center truncate">
                      {cluster.flowText}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        ) : (
          /* ── CATEGORY MATRIX VIEW ── */
          <motion.div
            key="matrix"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* 1. Programming */}
            <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-purple-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-sm font-mono font-bold text-purple-300">
                <Terminal className="h-4 w-4 text-purple-400" />
                <span>Programming Languages</span>
                <span className="text-xs text-slate-500 font-normal">({programming.length} core languages)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {programming.map((lang) => {
                  const isSelected = selectedSkill === lang;
                  const isConnected = activeConnections.includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setSelectedSkill(lang)}
                      className={`px-4 py-2.5 rounded-xl font-mono text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-105"
                          : isConnected
                          ? "bg-purple-500/20 text-purple-200 border-purple-400/40"
                          : "bg-[#0b1222] text-slate-200 border-white/[0.08] hover:border-purple-500/30 hover:bg-[#0f182e]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-400" />
                      <span>{lang}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Computer Science */}
            <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-cyan-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-sm font-mono font-bold text-cyan-300">
                <Cpu className="h-4 w-4 text-cyan-400" />
                <span>Computer Science Core</span>
                <span className="text-xs text-slate-500 font-normal">({computerScience.length} competencies)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {computerScience.map((cs) => {
                  const isSelected = selectedSkill === cs;
                  const isConnected = activeConnections.includes(cs);
                  return (
                    <button
                      key={cs}
                      type="button"
                      onClick={() => setSelectedSkill(cs)}
                      className={`px-4 py-2.5 rounded-xl font-mono text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? "bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-600/30 scale-105"
                          : isConnected
                          ? "bg-cyan-500/20 text-cyan-200 border-cyan-400/40"
                          : "bg-[#0b1222] text-slate-200 border-white/[0.08] hover:border-cyan-500/30 hover:bg-[#0f182e]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{cs}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Tools */}
            <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-emerald-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-sm font-mono font-bold text-emerald-300">
                <Wrench className="h-4 w-4 text-emerald-400" />
                <span>Engineering &amp; Developer Tools</span>
                <span className="text-xs text-slate-500 font-normal">({tools.length} environments)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => {
                  const isSelected = selectedSkill === tool;
                  const isConnected = activeConnections.includes(tool);
                  return (
                    <button
                      key={tool}
                      type="button"
                      onClick={() => setSelectedSkill(tool)}
                      className={`px-4 py-2.5 rounded-xl font-mono text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? "bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/30 scale-105"
                          : isConnected
                          ? "bg-emerald-500/20 text-emerald-200 border-emerald-400/40"
                          : "bg-[#0b1222] text-slate-200 border-white/[0.08] hover:border-emerald-500/30 hover:bg-[#0f182e]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{tool}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Node Details Bar */}
      <div className="mt-8 p-4 rounded-xl bg-[#090f1e]/80 border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-cyan-400">
            <Link2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-400">Active Node Traversal</div>
            <div className="text-xs sm:text-sm font-bold text-white font-mono">
              {selectedSkill} →{" "}
              <span className="text-purple-300">
                {activeConnections.join(" • ") || "Autonomous Foundation"}
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Click any skill to trace connected workflows</span>
        </div>
      </div>
    </SectionContainer>
  );
}
