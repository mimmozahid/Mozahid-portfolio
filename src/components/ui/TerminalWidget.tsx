"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal as TerminalIcon, Check, Copy, RefreshCw } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function TerminalWidget() {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // show all by default
  const prefersReduced = useReducedMotion();

  const commands = portfolioData.terminal.commands;

  const copyCommands = () => {
    const text = commands
      .map((c) => `$ ${c.cmd}\n${c.output}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const replay = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (activeStep < commands.length) {
      const timer = setTimeout(() => {
        setActiveStep((s) => s + 1);
      }, prefersReduced ? 0 : 500);
      return () => clearTimeout(timer);
    }
  }, [activeStep, commands.length, prefersReduced]);

  return (
    <div className="w-full rounded-2xl border border-white/[0.1] bg-[#070b16]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/70 border border-rose-400/40" />
            <span className="h-3 w-3 rounded-full bg-amber-500/70 border border-amber-400/40" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70 border border-emerald-400/40" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 text-slate-400 text-[11px]">
            <TerminalIcon className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-slate-200 font-semibold">{portfolioData.terminal.path}</span>
            <span className="text-slate-600">git:(</span>
            <span className="text-purple-400">main</span>
            <span className="text-slate-600">)</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={replay}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors hover:bg-white/[0.05]"
            title="Replay terminal execution"
            aria-label="Replay terminal"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={copyCommands}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors hover:bg-white/[0.05]"
            title="Copy commands"
            aria-label="Copy terminal text"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-3.5 text-slate-300">
        {commands.map((item, idx) => {
          const isVisible = idx < activeStep;
          if (!isVisible) return null;

          return (
            <motion.div
              key={item.cmd}
              initial={prefersReduced ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-1"
            >
              {/* Command line */}
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-semibold">{item.cmd}</span>
              </div>
              {/* Output line */}
              <div className="pl-4 text-xs font-mono">
                {item.cmd === "whoami" && (
                  <span className="text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 inline-block">
                    {item.output}
                  </span>
                )}
                {item.cmd === "focus" && (
                  <span className="text-cyan-300 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 inline-block">
                    {item.output}
                  </span>
                )}
                {item.cmd === "build" && (
                  <span className="text-indigo-300 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 inline-block">
                    {item.output}
                  </span>
                )}
                {item.cmd === "status" && (
                  <span className="text-amber-300 font-semibold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                    </span>
                    {item.output}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Blinking cursor on active terminal */}
        {activeStep >= commands.length && (
          <div className="flex items-center gap-2 text-slate-500 pt-1">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="inline-block w-2 h-4 bg-cyan-400/80 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
