"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Software Engineering Opportunity",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      subject: "Software Engineering Opportunity",
      message: "",
    });
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow="08 // INITIATE CONNECTION"
        eyebrowVariant="dual"
        title="Let's Build or"
        highlight="Collaborate"
        description="Whether you have an internship opportunity, a systems engineering challenge, or an algorithmic puzzle to discuss."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] backdrop-blur-sm space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              Direct Communication Channel
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              I respond promptly to discussions regarding software engineering roles, distributed systems design, and competitive programming initiatives.
            </p>

            {/* Email Copy Card */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {portfolioData.personal.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-300 hover:text-white transition-colors shrink-0"
                aria-label="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Context Details */}
            <div className="space-y-3 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>{portfolioData.personal.location} (UTC+6)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-300">
                  Target: Summer &amp; Fall 2025/2026 Internships
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://codeforces.com/profile/mim_mozahid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-xs font-mono text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
              >
                Codeforces
              </a>
              <a
                href="https://leetcode.com/u/mim_mozahid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 text-xs font-mono text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] backdrop-blur-sm">
            <h3 className="text-base font-bold text-white mb-2 font-mono">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-sans">
              Have a question or role in mind? Drop a note below.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2 animate-in fade-in duration-300">
                <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-emerald-300">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-400">
                  Thank you for reaching out! I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors font-sans"
                  >
                    <option value="Software Engineering Opportunity" className="bg-[#090e1b]">
                      Software Engineering Opportunity / Internship
                    </option>
                    <option value="Algorithmic / CP Collaboration" className="bg-[#090e1b]">
                      Algorithmic / CP Collaboration
                    </option>
                    <option value="Project Collaboration / Open Source" className="bg-[#090e1b]">
                      Project Collaboration / Open Source
                    </option>
                    <option value="General Technical Inquiry" className="bg-[#090e1b]">
                      General Technical Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Details about your team, problem space, or role..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors font-sans resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary-swe"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
