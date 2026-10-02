"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Dual Identity", href: "#dual-identity" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "CP", href: "#cp" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#060a12]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-slate-100 font-mono tracking-tight"
            onClick={() => setActiveSection("hero")}
          >
            <div className="h-8 w-8 rounded-lg bg-[#0e1628] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base">
                <span>{portfolioData.personal.shortName}</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                <span className="text-xs text-slate-400 font-normal">dev</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#0a0f1d]/60 border border-white/[0.07] px-3 py-1.5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-sm" />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: GitHub button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0d1424] hover:bg-[#121c32] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-slate-200 transition-all duration-200 group"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0e1628] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#060a12]/95 backdrop-blur-xl border-t border-white/[0.08] z-40 overflow-y-auto px-6 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2 px-3">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white/[0.08] text-white border border-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#0e1628] border border-white/10 text-sm font-mono text-slate-200 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Explore GitHub</span>
            </a>
            <div className="text-center text-xs text-slate-500 font-mono mt-2">
              From solving problems to building systems.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
