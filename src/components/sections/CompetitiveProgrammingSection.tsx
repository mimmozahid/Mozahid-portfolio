"use client";

import { useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import {
  ExternalLink,
  Flame,
  Binary,
  GitBranch,
  Timer,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

// ─── Animated Convergence Diagram ─────────────────────────────────────────────

function AlgorithmicConvergenceFlow() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="w-full rounded-2xl bg-[#080c1a] border border-purple-500/25 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-2">
            <Binary className="h-4 w-4" />
            Convergence Architecture
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            Platforms Feeding Into Problem Solving
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
          CodeChef + Codeforces + LeetCode ──→ Core Intuition
        </div>
      </div>

      {/* SVG Canvas for Desktop and Tablets */}
      <div className="relative w-full py-4">
        <svg
          viewBox="0 0 760 220"
          className="w-full h-auto hidden sm:block overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <filter id="flowGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Connecting Lines ── */}
          {/* CodeChef -> bus: (190, 40) -> (380, 40) -> (380, 110) */}
          <path
            d="M 190 40 L 380 40 L 380 110"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2.5"
            strokeDasharray={prefersReduced ? undefined : "6 4"}
            className={prefersReduced ? "" : "animate-[dash_15s_linear_infinite]"}
            filter="url(#flowGlow)"
            opacity="0.8"
          />

          {/* Codeforces -> bus: (190, 110) -> (450, 110) */}
          <path
            d="M 190 110 L 450 110"
            fill="none"
            stroke="#c084fc"
            strokeWidth="3"
            strokeDasharray={prefersReduced ? undefined : "6 4"}
            filter="url(#flowGlow)"
            opacity="0.9"
          />

          {/* LeetCode -> bus: (190, 180) -> (380, 180) -> (380, 110) */}
          <path
            d="M 190 180 L 380 180 L 380 110"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeDasharray={prefersReduced ? undefined : "6 4"}
            filter="url(#flowGlow)"
            opacity="0.8"
          />

          {/* Bus to Problem Solving core: (380, 110) -> (480, 110) */}
          <path
            d="M 380 110 L 470 110"
            fill="none"
            stroke="url(#coreGlow)"
            strokeWidth="4"
            filter="url(#flowGlow)"
          />
          {/* Arrowhead */}
          <polygon points="475,110 465,104 465,116" fill="#22d3ee" />

          {/* Animated Traveling Packets */}
          {!prefersReduced && (
            <>
              <circle r="4" fill="#f472b6" filter="url(#flowGlow)">
                <animateMotion
                  path="M 190 40 L 380 40 L 380 110 L 470 110"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="5" fill="#c084fc" filter="url(#flowGlow)">
                <animateMotion
                  path="M 190 110 L 470 110"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#22d3ee" filter="url(#flowGlow)">
                <animateMotion
                  path="M 190 180 L 380 180 L 380 110 L 470 110"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}

          {/* ── Left Platform Nodes ── */}
          {/* 1. CodeChef Node */}
          <g transform="translate(15, 18)">
            <rect
              width="175"
              height="44"
              rx="8"
              fill="#0f1129"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
            <text x="12" y="22" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
              CodeChef
            </text>
            <text x="12" y="36" fill="#c084fc" fontSize="10" fontFamily="monospace">
              2 Star • Rating: 1442
            </text>
            <circle cx="160" cy="22" r="4" fill="#a78bfa" />
          </g>

          {/* 2. Codeforces Node */}
          <g transform="translate(15, 88)">
            <rect
              width="175"
              height="44"
              rx="8"
              fill="#0f1129"
              stroke="#c084fc"
              strokeWidth="2"
            />
            <text x="12" y="22" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
              Codeforces
            </text>
            <text x="12" y="36" fill="#a78bfa" fontSize="10" fontFamily="monospace">
              Max Rating: 1299
            </text>
            <circle cx="160" cy="22" r="4" fill="#c084fc" />
          </g>

          {/* 3. LeetCode Node */}
          <g transform="translate(15, 158)">
            <rect
              width="175"
              height="44"
              rx="8"
              fill="#0f1129"
              stroke="#22d3ee"
              strokeWidth="1.5"
            />
            <text x="12" y="22" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
              LeetCode
            </text>
            <text x="12" y="36" fill="#67e8f9" fontSize="10" fontFamily="monospace">
              70+ Problems Solved
            </text>
            <circle cx="160" cy="22" r="4" fill="#22d3ee" />
          </g>

          {/* ── Right Target Core: Problem Solving ── */}
          <g transform="translate(485, 65)">
            <rect
              width="250"
              height="90"
              rx="16"
              fill="#080e24"
              stroke="#22d3ee"
              strokeWidth="2"
              filter="url(#flowGlow)"
            />
            <circle cx="28" cy="45" r="14" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="28" y="50" fill="#22d3ee" fontSize="14" textAnchor="middle">★</text>

            <text x="54" y="38" fill="#a78bfa" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="2">
              TARGET DESTINATION
            </text>
            <text x="54" y="58" fill="#ffffff" fontSize="16" fontWeight="extrabold" fontFamily="monospace">
              PROBLEM SOLVING
            </text>
            <text x="54" y="74" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              Algorithms • Data Structures • Rigor
            </text>
          </g>
        </svg>

        {/* Mobile Fallback Layout */}
        <div className="block sm:hidden space-y-3">
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-[#0f1129] border border-purple-500/30 font-mono text-xs">
              <div className="font-bold text-white">CodeChef</div>
              <div className="text-purple-300">2 Star • Rating: 1442</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0f1129] border border-purple-500/30 font-mono text-xs">
              <div className="font-bold text-white">Codeforces</div>
              <div className="text-purple-300">Max Rating: 1299</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0f1129] border border-cyan-500/30 font-mono text-xs">
              <div className="font-bold text-white">LeetCode</div>
              <div className="text-cyan-300">70+ Problems Solved</div>
            </div>
          </div>
          <div className="py-2 text-center text-xs font-mono text-purple-400">
            ↓ Converging into ↓
          </div>
          <div className="p-4 rounded-xl bg-[#080e24] border border-cyan-400 font-mono text-center">
            <div className="text-[10px] text-purple-400 uppercase tracking-widest font-bold">Target Concept</div>
            <div className="text-base font-extrabold text-white mt-1">PROBLEM SOLVING</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function CompetitiveProgrammingSection() {
  const { platforms } = portfolioData.competitiveProgramming;

  return (
    <SectionContainer id="cp" hasBorderBottom>
      <SectionHeading
        eyebrow="05 // COMPETITIVE PROGRAMMING"
        eyebrowVariant="cp"
        title="MY ALGORITHMIC"
        highlight="JOURNEY"
        highlightColor="cp"
        description="Developing mathematical rigor, time-complexity discipline, and edge-case paranoia through hundreds of hours on competitive platforms."
      />

      {/* 1. Platforms Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {platforms.map((p) => {
          const isCodeChef = p.platform === "CodeChef";
          const isCodeforces = p.platform === "Codeforces";

          return (
            <div
              key={p.platform}
              className={`p-6 sm:p-7 rounded-2xl border bg-[#080c1a]/90 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-xl ${
                isCodeChef
                  ? "border-purple-500/30 hover:border-purple-500/60"
                  : isCodeforces
                  ? "border-purple-500/30 hover:border-purple-500/60"
                  : "border-cyan-500/30 hover:border-cyan-500/60"
              }`}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-white">
                    {p.platform}
                  </span>
                  <a
                    href={p.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label={`View ${p.platform} Profile`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Rating / Stat highlight */}
                <div className="py-4 space-y-1">
                  {p.rating && (
                    <div className="text-3xl font-extrabold font-mono text-purple-300">
                      {p.rating}
                    </div>
                  )}
                  {p.solvedCount && (
                    <div className="text-3xl font-extrabold font-mono text-cyan-300">
                      {p.solvedCount}
                    </div>
                  )}
                  <div className="text-xs font-mono text-slate-400">
                    {p.rankInfo}
                  </div>
                </div>
              </div>

              {/* Bottom platform indicator */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Active Profile</span>
                <span className="text-purple-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  @{p.handle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Visual Convergence Diagram */}
      <div className="mb-10">
        <AlgorithmicConvergenceFlow />
      </div>

      {/* 3. Core Pillars & GitHub Repository Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contest Practice */}
        <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-purple-500/20 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Timer className="h-4 w-4" />
            Contest Practice
          </div>
          <h4 className="text-base font-bold text-white">Timed Contest Simulations</h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            Consistent participation in live, timed algorithmic contests on CodeChef, Codeforces, and LeetCode — training to dissect constraints and eliminate edge-case vulnerabilities under the clock.
          </p>
        </div>

        {/* Problem Solving */}
        <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Flame className="h-4 w-4" />
            Problem Solving
          </div>
          <h4 className="text-base font-bold text-white">Mathematical &amp; Algorithmic Discipline</h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            Deconstructing complex problems into fundamental paradigms: asymptotic complexity bounds, graph connectivity, dynamic states, and optimal data structure selection.
          </p>
        </div>

        {/* GitHub Contest Repository Area */}
        <div className="p-6 rounded-2xl bg-[#090b1c]/90 border border-white/[0.1] hover:border-purple-500/40 backdrop-blur-md space-y-4 flex flex-col justify-between transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <GitBranch className="h-4 w-4" />
                Contest Repository
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25">
                GitHub Archive
              </span>
            </div>
            <h4 className="text-base font-bold text-white">Problem Solutions &amp; Templates</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Organized repository containing tested C++ templates, contest round solutions, and notes across algorithmic problem patterns.
            </p>
          </div>

          <a
            href={portfolioData.personal.cpRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-mono text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 border border-purple-500/30 hover:border-purple-500/50 transition-all shadow-md shadow-purple-950/20"
          >
            <GithubIcon className="h-4 w-4 text-purple-300" />
            <span>Explore Contest Repository</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
