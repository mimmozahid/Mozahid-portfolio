"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Easing } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface GraphNode {
  id: string;
  x: number;
  y: number;
  r: number;
  label?: string;
  color: string;
  glowColor: string;
}

interface GraphEdge {
  from: string;
  to: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const IDENTITIES = ["Competitive Programmer", "Problem Solver", "Software Builder"];

const GRAPH_NODES: GraphNode[] = [
  { id: "A", x: 180, y: 65,  r: 14, color: "#a78bfa", glowColor: "#7c3aed" },
  { id: "B", x: 80,  y: 160, r: 12, color: "#818cf8", glowColor: "#4f46e5" },
  { id: "C", x: 280, y: 160, r: 12, color: "#22d3ee", glowColor: "#0891b2" },
  { id: "D", x: 130, y: 255, r: 13, color: "#34d399", glowColor: "#059669" },
  { id: "E", x: 230, y: 255, r: 11, color: "#f472b6", glowColor: "#db2777" },
  { id: "F", x: 180, y: 330, r: 14, color: "#fb923c", glowColor: "#ea580c" },
];

const GRAPH_EDGES: GraphEdge[] = [
  { from: "A", to: "B" },
  { from: "A", to: "C" },
  { from: "B", to: "D" },
  { from: "C", to: "E" },
  { from: "D", to: "E" },
  { from: "D", to: "F" },
  { from: "E", to: "F" },
];

const SYSTEM_NODES: GraphNode[] = [
  { id: "A", x: 180, y: 65,  r: 14, label: "Frontend",  color: "#22d3ee", glowColor: "#0891b2" },
  { id: "B", x: 180, y: 150, r: 13, label: "API",       color: "#a78bfa", glowColor: "#7c3aed" },
  { id: "C", x: 180, y: 235, r: 13, label: "Backend",   color: "#34d399", glowColor: "#059669" },
  { id: "D", x: 180, y: 320, r: 14, label: "Database",  color: "#fb923c", glowColor: "#ea580c" },
  { id: "E", x: 80,  y: 150, r: 7,  color: "#818cf8",   glowColor: "#4f46e5" },
  { id: "F", x: 280, y: 150, r: 7,  color: "#818cf8",   glowColor: "#4f46e5" },
];

const SYSTEM_EDGES: GraphEdge[] = [
  { from: "A", to: "B" },
  { from: "B", to: "C" },
  { from: "C", to: "D" },
  { from: "E", to: "B" },
  { from: "F", to: "B" },
];

const GRAPH_PATHS = [
  ["A", "B", "D", "F"],
  ["A", "C", "E", "F"],
  ["A", "B", "D", "E", "F"],
];

const SYSTEM_PATHS = [["A", "B", "C", "D"]];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getNode(nodes: GraphNode[], id: string) {
  return nodes.find((n) => n.id === id);
}

function eKey(from: string, to: string) {
  return `${from}->${to}`;
}

// ─── SVG Graph ────────────────────────────────────────────────────────────────

function GraphSVG({
  phase,
  prefersReduced,
}: {
  phase: "graph" | "system";
  prefersReduced: boolean;
}) {
  const nodes = phase === "graph" ? GRAPH_NODES : SYSTEM_NODES;
  const edges = phase === "graph" ? GRAPH_EDGES : SYSTEM_EDGES;
  const paths = phase === "graph" ? GRAPH_PATHS : SYSTEM_PATHS;

  const [activeEdges, setActiveEdges] = useState<Set<string>>(new Set());
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const [pulse, setPulse] = useState<{ x: number; y: number; id: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathIdx = useRef(0);
  const stepIdx = useRef(0);

  const run = useCallback(() => {
    if (prefersReduced) return;
    const path = paths[pathIdx.current % paths.length];
    const step = stepIdx.current;

    if (step < path.length - 1) {
      const fId = path[step];
      const tId = path[step + 1];
      setActiveEdges((p) => new Set([...Array.from(p), eKey(fId, tId)]));
      setActiveNodes((p) => new Set([...Array.from(p), fId, tId]));

      const fNode = getNode(nodes, fId);
      const tNode = getNode(nodes, tId);
      if (fNode && tNode) {
        let t = 0;
        const uid = Date.now();
        const tick = () => {
          if (t > 1) { setPulse(null); return; }
          setPulse({
            x: fNode.x + (tNode.x - fNode.x) * t,
            y: fNode.y + (tNode.y - fNode.y) * t,
            id: uid,
          });
          t += 0.045;
          timer.current = setTimeout(tick, 16);
        };
        tick();
      }

      stepIdx.current++;
      timer.current = setTimeout(run, 420);
    } else {
      timer.current = setTimeout(() => {
        setActiveEdges(new Set());
        setActiveNodes(new Set());
        stepIdx.current = 0;
        pathIdx.current = (pathIdx.current + 1) % paths.length;
        timer.current = setTimeout(run, 600);
      }, 1400);
    }
  }, [nodes, paths, prefersReduced]);

  useEffect(() => {
    setActiveEdges(new Set());
    setActiveNodes(new Set());
    stepIdx.current = 0;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(run, 900);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [phase, run]);

  return (
    <svg viewBox="0 0 360 400" className="w-full h-full" style={{ overflow: "visible" }} aria-hidden="true">
      <defs>
        {nodes.map((n) => (
          <radialGradient key={`g${n.id}${phase}`} id={`g${n.id}${phase}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={n.glowColor} stopOpacity="0.3" />
          </radialGradient>
        ))}
        <filter id="glo2"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="glo4"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Edges */}
      {edges.map((edge) => {
        const f = getNode(nodes, edge.from);
        const t = getNode(nodes, edge.to);
        if (!f || !t) return null;
        const active = activeEdges.has(eKey(edge.from, edge.to));
        return (
          <motion.line
            key={eKey(edge.from, edge.to)}
            x1={f.x} y1={f.y} x2={t.x} y2={t.y}
            stroke={active ? "#a78bfa" : "rgba(148,163,184,0.1)"}
            strokeWidth={active ? 2.5 : 1.5}
            strokeLinecap="round"
            filter={active ? "url(#glo2)" : undefined}
            animate={{ opacity: active ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
        );
      })}

      {/* Pulse */}
      {pulse && (
        <motion.circle
          key={pulse.id}
          cx={pulse.x} cy={pulse.y} r={5}
          fill="#c4b5fd"
          filter="url(#glo4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.35 }}
        />
      )}

      {/* Nodes */}
      {nodes.map((node) => {
        const active = activeNodes.has(node.id);
        return (
          <g key={node.id}>
            {active && (
              <motion.circle
                cx={node.x} cy={node.y} r={node.r + 10}
                fill="none"
                stroke={node.color}
                strokeWidth="1"
                strokeOpacity="0.35"
                animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.08, 0.35] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            )}
            <motion.circle
              cx={node.x} cy={node.y}
              r={node.r}
              fill={`url(#g${node.id}${phase})`}
              stroke={active ? node.color : "rgba(255,255,255,0.1)"}
              strokeWidth={active ? 2 : 1}
              filter={active ? "url(#glo2)" : undefined}
              animate={{ r: active ? node.r * 1.15 : node.r }}
              transition={{ duration: 0.3 }}
            />
            {node.label && (
              <motion.text
                x={node.x} y={node.y + node.r + 16}
                textAnchor="middle"
                fill={active ? node.color : "rgba(148,163,184,0.6)"}
                fontSize="11" fontFamily="monospace"
                fontWeight={active ? "600" : "400"}
              >
                {node.label}
              </motion.text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Visual Panel ─────────────────────────────────────────────────────────────

function VisualPanel({ prefersReduced }: { prefersReduced: boolean }) {
  const [phase, setPhase] = useState<"graph" | "system">("graph");
  const [fading, setFading] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const cycle = () => {
      t.current = setTimeout(() => {
        setFading(true);
        t.current = setTimeout(() => {
          setPhase("system");
          setFading(false);
          t.current = setTimeout(() => {
            setFading(true);
            t.current = setTimeout(() => {
              setPhase("graph");
              setFading(false);
              cycle();
            }, 650);
          }, 5500);
        }, 650);
      }, 6500);
    };
    cycle();
    return () => { if (t.current) clearTimeout(t.current); };
  }, [prefersReduced]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[10px] text-slate-400 tracking-widest uppercase">
        <span className="h-1.5 w-1.5 rounded-full transition-colors duration-700" style={{ background: phase === "graph" ? "#a78bfa" : "#22d3ee" }} />
        {phase === "graph" ? "Algorithm Graph" : "Software System"}
      </div>

      {/* SVG canvas */}
      <motion.div
        animate={{ opacity: fading ? 0.15 : 1, scale: fading ? 0.95 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-[260px] h-[330px] sm:w-[320px] sm:h-[390px] max-w-full"
      >
        <div
          className="absolute inset-0 rounded-3xl blur-3xl opacity-20 transition-colors duration-700"
          style={{
            background: phase === "graph"
              ? "radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, #0891b2 0%, transparent 70%)",
          }}
        />
        <GraphSVG phase={phase} prefersReduced={prefersReduced} />
      </motion.div>
    </div>
  );
}

// ─── Cursor Spotlight ─────────────────────────────────────────────────────────

function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{
          left: pos.x,
          top: pos.y,
          width: 450,
          height: 450,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "left 80ms linear, top 80ms linear",
        }}
      />
    </div>
  );
}

// ─── Magnetic Button ──────────────────────────────────────────────────────────

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setDelta({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.22,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.22,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setDelta({ x: 0, y: 0 })}
      animate={{ x: delta.x, y: delta.y }}
      transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Identity Rotator ─────────────────────────────────────────────────────────

function IdentityRotator() {
  const [idx, setIdx] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % IDENTITIES.length), 2800);
    return () => clearInterval(id);
  }, [prefersReduced]);

  return (
    <div className="relative h-[1.3em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={IDENTITIES[idx]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center"
          style={{
            background: "linear-gradient(90deg, #a78bfa 0%, #22d3ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {IDENTITIES[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ─── Hero Background ──────────────────────────────────────────────────────────

function HeroBg({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
        }}
      />

      {/* Glows */}
      <motion.div
        className="absolute top-[22%] left-[18%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
        animate={prefersReduced ? {} : { scale: [1, 1.09, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-[38%] right-[5%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)" }}
        animate={prefersReduced ? {} : { scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        aria-hidden="true"
      />

      {/* Moving streak */}
      {!prefersReduced && (
        <motion.div
          className="absolute top-0 w-[1.5px] rounded-full pointer-events-none"
          style={{
            height: "28vh",
            background: "linear-gradient(to bottom, transparent, rgba(167,139,250,0.25), transparent)",
          }}
          animate={{ x: ["0vw", "100vw"], opacity: [0, 0.4, 0], y: ["-10vh", "10vh"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 4 }}
          aria-hidden="true"
        />
      )}
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const prefersReduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "-8%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReduced ? 0 : 0.11, delayChildren: 0.08 } },
  };

  const EASE: Easing = [0.22, 1, 0.36, 1] as unknown as Easing;
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      <HeroBg prefersReduced={prefersReduced} />
      <CursorSpotlight />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ── Left ── */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            style={{ y: contentY, opacity: contentOpacity }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-0">
              <div className="font-mono text-sm sm:text-base text-slate-400 tracking-wide mb-1">
                Hi, I&apos;m
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                MIM MOZAHID
              </h1>
            </motion.div>

            {/* Identity */}
            <motion.div variants={item} className="space-y-1">
              <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.15em]">
                Software Engineering Student
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                <IdentityRotator />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              I solve algorithmic problems, build software projects, and
              continuously improve my engineering skills.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton>
                <Link href="#projects">
                  <button
                    id="hero-explore-btn"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-[0.97]"
                  >
                    Explore My Work
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  id="hero-github-btn"
                  href="https://github.com/mimmozahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 active:scale-[0.97]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub
                  <svg className="h-3 w-3 opacity-40 group-hover:opacity-80 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            style={{ y: visualY }}
            initial={{ opacity: 0, x: prefersReduced ? 0 : 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            <motion.div
              className="relative rounded-2xl border border-white/[0.07] bg-[#07091a]/80 backdrop-blur-xl p-4 sm:p-8 max-w-full overflow-hidden shadow-2xl"
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      borderColor: "rgba(255,255,255,0.13)",
                      boxShadow: "0 0 70px -20px rgba(124,58,237,0.22)",
                    }
              }
              transition={{ duration: 0.3 }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-purple-500/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/30 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-purple-500/20 rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/20 rounded-br-2xl pointer-events-none" />

              <VisualPanel prefersReduced={prefersReduced} />

              <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
                <span>Algorithms</span>
                <span className="text-slate-700">→</span>
                <span>Systems</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-slate-600" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
