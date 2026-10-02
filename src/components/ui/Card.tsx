import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "cp" | "swe" | "subtle";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const baseStyles =
    "relative rounded-xl p-6 transition-all duration-300 border overflow-hidden";

  const variantStyles = {
    default:
      "bg-[#0a0f1d]/80 border-white/[0.07] backdrop-blur-sm",
    cp:
      "bg-[#0c0d1c]/80 border-purple-500/20 backdrop-blur-sm",
    swe:
      "bg-[#07131f]/80 border-cyan-500/20 backdrop-blur-sm",
    subtle:
      "bg-[#080d18]/50 border-white/[0.05]",
  };

  const hoverStyles = hoverEffect
    ? "hover:border-white/20 hover:bg-[#0e1628] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
    : "";

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-400 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props}>{children}</div>;
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 flex items-center pt-4 border-t border-white/[0.05]", className)} {...props}>
      {children}
    </div>
  );
}
