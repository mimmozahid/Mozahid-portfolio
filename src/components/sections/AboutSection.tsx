"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWidget } from "@/components/ui/TerminalWidget";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Binary, CodeXml, Sparkles } from "lucide-react";

export function AboutSection() {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer id="about" hasBorderBottom>
      <SectionHeading
        eyebrow="01 // ABOUT"
        eyebrowVariant="dual"
        title="Engineering Mindset &"
        highlight="Focus"
        description="Software Engineering undergraduate grounded in algorithmic problem solving and structured software design."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Narrative Column */}
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
          {/* Main Statement Box */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#080d1a]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Core Philosophy</span>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-normal">
              &ldquo;I am a Software Engineering student with a strong interest in competitive programming, algorithms, problem solving, and software development. I enjoy understanding how things work, solving challenging problems, and turning ideas into software.&rdquo;
            </p>

            <div className="pt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Currently pursuing Software Engineering at Daffodil International University, I combine algorithmic discipline with modern development workflows to build robust, predictable, and maintainable systems.
            </div>
          </div>

          {/* Quick Context Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-[#090f1e]/60 border border-purple-500/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Institution</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {portfolioData.education.institution}
                </div>
                <div className="text-[11px] text-purple-300 font-mono">
                  {portfolioData.education.degree} ({portfolioData.education.status})
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#090f1e]/60 border border-cyan-500/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {portfolioData.personal.location}
                </div>
                <div className="text-[11px] text-cyan-300 font-mono">
                  Software Engineering Student
                </div>
              </div>
            </div>
          </div>

          {/* Dual focus bullets */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300">
              <Binary className="h-3.5 w-3.5" />
              Algorithms &amp; Problem Solving
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <CodeXml className="h-3.5 w-3.5" />
              Software Architecture &amp; Development
            </span>
          </div>
        </motion.div>

        {/* Right Column: Terminal Component (Item 8) */}
        <motion.div variants={itemVariants} className="lg:col-span-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Developer Session</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Environment
              </span>
            </div>
            <TerminalWidget />
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
