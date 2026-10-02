"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { Trophy, Calendar, Building2, CheckCircle2 } from "lucide-react";

export function AchievementsSection() {
  const prefersReduced = useReducedMotion();
  const achievements = portfolioData.achievements;

  return (
    <SectionContainer id="achievements" hasBorderBottom>
      <SectionHeading
        eyebrow="06 // HONORS & RECOGNITION"
        eyebrowVariant="cp"
        title="Distinguished"
        highlight="Achievements"
        highlightColor="cp"
        description="Verified competitive milestones and competitive programming tournament achievements."
      />

      <div className="max-w-3xl mx-auto">
        {/* Timeline Track */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-8">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              initial={prefersReduced ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-9 w-9 rounded-full bg-[#080d1a] border-2 border-purple-400 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Trophy className="h-4 w-4 text-purple-400" />
              </div>

              {/* Achievement Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#080c1a]/90 border border-purple-500/25 hover:border-purple-500/50 backdrop-blur-xl shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 border border-purple-500/30 text-purple-200">
                    {item.award}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-purple-300">
                    <Calendar className="h-3.5 w-3.5 text-purple-400" />
                    {item.term}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.event}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-300 mb-4">
                  <Building2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{item.organization}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  <span>Verified Departmental Tournament Recognition</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
