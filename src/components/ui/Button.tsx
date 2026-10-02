import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-swe" | "primary-cp" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "secondary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#060a12] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
      "primary-swe":
        "bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/30",
      "primary-cp":
        "bg-purple-600 text-white font-semibold hover:bg-purple-500 shadow-sm shadow-purple-600/25 hover:shadow-purple-600/35",
      secondary:
        "bg-[#0e1626] text-slate-200 border border-white/[0.08] hover:bg-[#131e33] hover:border-white/20 hover:text-white",
      outline:
        "border border-white/10 text-slate-300 hover:bg-white/[0.05] hover:text-white hover:border-white/20",
      ghost:
        "text-slate-400 hover:text-white hover:bg-white/[0.04]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
