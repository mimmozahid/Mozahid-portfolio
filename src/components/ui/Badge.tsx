import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cp" | "swe" | "dual" | "outline" | "success";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-medium rounded-md tracking-tight transition-colors";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs md:text-sm px-3 py-1",
  };

  const variantStyles = {
    default:
      "bg-white/[0.05] text-slate-300 border border-white/[0.08] hover:border-white/20",
    cp: "bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/40",
    swe: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/40",
    dual: "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-slate-200 border border-purple-500/20",
    outline: "border border-slate-700/80 text-slate-400 bg-transparent",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
