import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050810] relative overflow-hidden text-slate-400 text-sm">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Concept */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2.5 text-slate-100 font-mono tracking-tight"
            >
              <div className="h-7 w-7 rounded-lg bg-[#0e1628] border border-white/10 flex items-center justify-center text-cyan-400">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="font-bold text-base text-white">
                {portfolioData.personal.name}
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm text-xs sm:text-sm leading-relaxed font-sans">
              &quot;{portfolioData.personal.motto}&quot;
            </p>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Bridging the gap between algorithm design under time/memory constraints and building resilient, observable software systems.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for engineering opportunities</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {portfolioData.navLinks.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Profiles & Connect */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://codeforces.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono font-bold text-[10px] text-purple-400">CF</span> Codeforces
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono font-bold text-[10px] text-amber-400">LC</span> LeetCode
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {portfolioData.personal.name}.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Engineered with Next.js & Tailwind</span>
          </div>

          <Link
            href="#hero"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
