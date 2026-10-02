"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import {
  Binary,
  Layers,
  Database,
  Cpu,
  Workflow,
  Network,
} from "lucide-react";

// ─── Competitive Programmer Interactive Visual System ─────────────────────────

function CpVisualSystem({ isHovered }: { isHovered: boolean }) {
  const prefersReduced = useReducedMotion();
  const [arrayIdx, setArrayIdx] = useState(2);

  React.useEffect(() => {
    if (!isHovered || prefersReduced) return;
    const interval = setInterval(() => {
      setArrayIdx((i) => (i + 1) % 6);
    }, 600);
    return () => clearInterval(interval);
  }, [isHovered, prefersReduced]);

  const arrayValues = [4, 9, 17, 28, 42, 65];

  return (
    <div className="w-full rounded-xl bg-[#090b1c]/90 border border-purple-500/20 p-4 font-mono text-xs overflow-hidden relative">
      {/* Background glowing graph lines and nodes */}
      <div className="flex items-center justify-between mb-3 text-[11px] text-purple-300 font-semibold border-b border-purple-500/20 pb-2">
        <span className="flex items-center gap-1.5">
          <Binary className="h-3.5 w-3.5 text-purple-400" />
          Algorithmic Engine
        </span>
        <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
          {isHovered ? "TRAVERSAL ACTIVE" : "IDLE STATE"}
        </span>
      </div>

      {/* 1. Graph Nodes & Algorithmic Lines */}
      <div className="relative h-20 mb-3 bg-purple-950/20 rounded-lg border border-purple-500/10 p-2 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 320 70">
          <defs>
            <linearGradient id="cpLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Graph Edges */}
          <line x1="30" y1="35" x2="90" y2="20" stroke={isHovered ? "#a78bfa" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} strokeDasharray={isHovered ? "4 2" : undefined} />
          <line x1="30" y1="35" x2="90" y2="50" stroke={isHovered ? "#a78bfa" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />
          <line x1="90" y1="20" x2="160" y2="35" stroke={isHovered ? "#c084fc" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2.5 : 1} />
          <line x1="90" y1="50" x2="160" y2="35" stroke={isHovered ? "#c084fc" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />
          <line x1="160" y1="35" x2="230" y2="20" stroke={isHovered ? "#a78bfa" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />
          <line x1="160" y1="35" x2="230" y2="50" stroke={isHovered ? "#a78bfa" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />
          <line x1="230" y1="20" x2="290" y2="35" stroke={isHovered ? "#c084fc" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />
          <line x1="230" y1="50" x2="290" y2="35" stroke={isHovered ? "#c084fc" : "rgba(167,139,250,0.3)"} strokeWidth={isHovered ? 2 : 1} />

          {/* Animated Pulse Packet */}
          {isHovered && !prefersReduced && (
            <circle cx="160" cy="35" r="4" fill="#f472b6">
              <animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Nodes */}
          {[
            { cx: 30, cy: 35, label: "u" },
            { cx: 90, cy: 20, label: "v1" },
            { cx: 90, cy: 50, label: "v2" },
            { cx: 160, cy: 35, label: "root" },
            { cx: 230, cy: 20, label: "w1" },
            { cx: 230, cy: 50, label: "w2" },
            { cx: 290, cy: 35, label: "target" },
          ].map((n, i) => (
            <g key={i}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r={n.label === "root" ? 11 : 8}
                fill="#0f1129"
                stroke={isHovered ? "#c084fc" : "#7c3aed"}
                strokeWidth={isHovered ? 2 : 1.2}
              />
              <text
                x={n.cx}
                y={n.cy + 3}
                fill="#e9d5ff"
                fontSize="8"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* 2. Visual Array with Pointer */}
      <div className="mb-3 space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Array State (binary_search)</span>
          <span className="text-purple-300">ptr = arr[{arrayIdx}]</span>
        </div>
        <div className="grid grid-cols-6 gap-1 text-center">
          {arrayValues.map((val, idx) => {
            const isTarget = idx === arrayIdx;
            return (
              <div
                key={idx}
                className={`py-1.5 rounded border transition-all duration-300 font-mono text-[11px] ${
                  isTarget
                    ? "bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-500/40 scale-105"
                    : "bg-white/[0.03] text-slate-300 border-white/[0.08]"
                }`}
              >
                {val}
                <div className="text-[8px] text-slate-500 mt-0.5">i={idx}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Code Fragment */}
      <div className="rounded-lg bg-black/40 border border-purple-500/15 p-2.5 text-[11px] text-slate-300 space-y-0.5 overflow-x-auto">
        <div className="text-purple-400 font-semibold">{"// Complexity: O(log N)"}</div>
        <div>
          <span className="text-cyan-400">while</span> (low &lt;= high) &#123;
        </div>
        <div className={`pl-3 transition-colors duration-200 ${isHovered ? "bg-purple-500/20 text-purple-200 rounded px-1" : ""}`}>
          <span className="text-indigo-300">int</span> mid = low + (high - low) / <span className="text-amber-300">2</span>;
        </div>
        <div className="pl-3">
          <span className="text-cyan-400">if</span> (check(mid)) ans = mid, low = mid + <span className="text-amber-300">1</span>;
        </div>
        <div>&#125;</div>
      </div>
    </div>
  );
}

// ─── Software Engineering Interactive Visual System ───────────────────────────

function SweVisualSystem({ isHovered }: { isHovered: boolean }) {
  const prefersReduced = useReducedMotion();
  const [pulseStep, setPulseStep] = useState(0);

  React.useEffect(() => {
    if (!isHovered || prefersReduced) return;
    const interval = setInterval(() => {
      setPulseStep((s) => (s + 1) % 4);
    }, 700);
    return () => clearInterval(interval);
  }, [isHovered, prefersReduced]);

  const modules = [
    { name: "Client UI", type: "Component", icon: Layers },
    { name: "API Route", type: "Gateway", icon: Network },
    { name: "Service", type: "Business Logic", icon: Cpu },
    { name: "SQL DB", type: "Persistence", icon: Database },
  ];

  return (
    <div className="w-full rounded-xl bg-[#06101c]/90 border border-cyan-500/20 p-4 font-mono text-xs overflow-hidden relative">
      <div className="flex items-center justify-between mb-3 text-[11px] text-cyan-300 font-semibold border-b border-cyan-500/20 pb-2">
        <span className="flex items-center gap-1.5">
          <Workflow className="h-3.5 w-3.5 text-cyan-400" />
          Modular Architecture
        </span>
        <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          {isHovered ? "FLOW SYNCHRONIZED" : "STABLE STATE"}
        </span>
      </div>

      {/* 1. Modules & Connected Components */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {modules.map((m, idx) => {
          const Icon = m.icon;
          const isActive = isHovered && pulseStep === idx;
          return (
            <div
              key={m.name}
              className={`p-2.5 rounded-lg border transition-all duration-300 flex flex-col items-center text-center ${
                isActive
                  ? "bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/30 scale-105"
                  : "bg-white/[0.02] border-white/[0.08] text-slate-300"
              }`}
            >
              <Icon className={`h-4 w-4 mb-1 ${isActive ? "text-cyan-300 animate-bounce" : "text-cyan-400"}`} />
              <div className="font-semibold text-[11px]">{m.name}</div>
              <div className="text-[9px] text-slate-400">{m.type}</div>
            </div>
          );
        })}
      </div>

      {/* 2. API Flow Simulation */}
      <div className="relative mb-3 bg-cyan-950/20 rounded-lg border border-cyan-500/15 p-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
          <span>API Request Pipeline</span>
          <span className="text-cyan-300 font-mono">POST /api/v1/dispatch</span>
        </div>
        <div className="h-1.5 w-full bg-cyan-950/60 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-24"
            animate={
              isHovered && !prefersReduced
                ? { x: ["-100%", "350%"] }
                : { x: "50%" }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 pt-1 font-mono">
          <span>auth</span>
          <span>validate</span>
          <span>execute</span>
          <span>commit</span>
        </div>
      </div>

      {/* 3. Database Node & Schema View */}
      <div className="rounded-lg bg-black/40 border border-cyan-500/15 p-2.5 space-y-1.5">
        <div className="flex items-center justify-between text-[10px] text-cyan-300 font-semibold">
          <span className="flex items-center gap-1">
            <Database className="h-3 w-3" />
            TABLE schema_entities
          </span>
          <span className="text-slate-400 text-[9px]">ENGINE=InnoDB</span>
        </div>
        <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-300 font-mono bg-white/[0.02] p-1.5 rounded">
          <div className="text-cyan-400">id: BIGINT PK</div>
          <div>status: VARCHAR</div>
          <div className="text-right text-emerald-400">INDEXED</div>
        </div>
        <div className="text-[10px] text-slate-400 flex items-center justify-between pt-0.5">
          <span>Transactions: ACID Compliant</span>
          <span className="text-cyan-400 text-[9px]">Normalized 3NF</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function DualIdentitySection() {
  const [hoveredPanel, setHoveredPanel] = useState<"cp" | "swe" | null>(null);
  const prefersReduced = useReducedMotion();

  const { cp, swe } = portfolioData.dualIdentity;

  return (
    <SectionContainer id="dual-identity" hasBorderBottom>
      <SectionHeading

        title="TWO SIDES OF"
        highlight="MY JOURNEY"
        description="Balancing asymptotic precision and competitive contest problem-solving with scalable, clean software engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* ── Panel 1: COMPETITIVE PROGRAMMER ── */}
        <motion.div
          onMouseEnter={() => setHoveredPanel("cp")}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-[#0a0c1a] ${
            hoveredPanel === "cp"
              ? "border-purple-500/50 shadow-2xl shadow-purple-950/40"
              : "border-purple-500/25 shadow-lg shadow-purple-950/10"
          }`}
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top ambient highlight */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                PANEL 01 // VIOLET SPECTRUM
              </span>
              <span className="text-xs font-mono text-purple-400">Time &amp; Space Bounds</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-1">
              COMPETITIVE<br />
              <span className="text-purple-400">PROGRAMMER</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
              {cp.subtitle}
            </p>

            {/* Interactive Visual System */}
            <div className="mb-6">
              <CpVisualSystem isHovered={hoveredPanel === "cp"} />
            </div>

            {/* Show Pillars: Algorithms, Data Structures, Problem Solving, Contest Practice */}
            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Core Domains
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cp.coreAspects.map((aspect) => (
                  <div
                    key={aspect.name}
                    className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      {aspect.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      {aspect.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Language Indicators */}
          <div className="pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-slate-400">Visual Language:</span>
            <div className="flex flex-wrap gap-1.5">
              {cp.visualNodes.map((vn) => (
                <span
                  key={vn}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25"
                >
                  {vn}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Panel 2: SOFTWARE ENGINEERING ── */}
        <motion.div
          onMouseEnter={() => setHoveredPanel("swe")}
          onMouseLeave={() => setHoveredPanel(null)}
          className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden bg-[#06101c] ${
            hoveredPanel === "swe"
              ? "border-cyan-500/50 shadow-2xl shadow-cyan-950/40"
              : "border-cyan-500/25 shadow-lg shadow-cyan-950/10"
          }`}
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Top ambient highlight */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                PANEL 02 // CYAN SPECTRUM
              </span>
              <span className="text-xs font-mono text-cyan-400">Architecture &amp; Resilience</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-1">
              SOFTWARE<br />
              <span className="text-cyan-400">ENGINEERING</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
              {swe.subtitle}
            </p>

            {/* Interactive Visual System */}
            <div className="mb-6">
              <SweVisualSystem isHovered={hoveredPanel === "swe"} />
            </div>

            {/* Show Pillars: OOP, Software Development, Databases, Projects, System Thinking */}
            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Core Domains
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {swe.coreAspects.map((aspect) => (
                  <div
                    key={aspect.name}
                    className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {aspect.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      {aspect.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Language Indicators */}
          <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-slate-400">Visual Language:</span>
            <div className="flex flex-wrap gap-1.5">
              {swe.visualNodes.map((vn) => (
                <span
                  key={vn}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25"
                >
                  {vn}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </SectionContainer>
  );
}
