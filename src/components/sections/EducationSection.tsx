"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, BookOpen, Building2, CheckCircle2, UserCheck } from "lucide-react";

export function EducationSection() {
  const prefersReduced = useReducedMotion();
  const { education } = portfolioData;

  return (
    <SectionContainer id="education" hasBorderBottom>
      <SectionHeading
        eyebrow="07 // ACADEMIC FOUNDATION"
        eyebrowVariant="swe"
        title="Formal"
        highlight="Education"
        description="Core undergraduate studies providing foundational discipline in computing and software construction."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Education Card */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080d1a]/90 border border-cyan-500/25 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300">
            {/* Header Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Undergraduate Degree
                </span>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                <UserCheck className="h-3.5 w-3.5" />
                {education.status}
              </span>
            </div>

            {/* Institution & Major */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {education.degree}
            </h3>

            <div className="flex items-center gap-2 text-base font-semibold text-cyan-300 mb-6">
              <Building2 className="h-4 w-4 shrink-0" />
              <span>{education.institution}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
              Pursuing a comprehensive curriculum in Software Engineering at Daffodil International University. The degree balances theoretical foundations of computing, complexity analysis, and algorithms with practical software construction, database systems, and collaborative development.
            </p>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Program: Department of Software Engineering</span>
              <span className="text-cyan-400">Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Foundational Coursework */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="p-6 rounded-2xl bg-[#080d1a]/80 border border-white/[0.08] backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold font-mono text-white">
              <BookOpen className="h-4 w-4 text-purple-400" />
              <span>Core Coursework &amp; Theory</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Rigorous coursework establishing competencies in computational problem-solving and software architecture:
            </p>

            <div className="space-y-2.5">
              {education.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 flex items-center gap-2.5 text-xs text-slate-200 font-mono transition-colors"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
