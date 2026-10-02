import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: "default" | "cp" | "swe" | "dual";
  title: string;
  highlight?: string;
  highlightColor?: "cp" | "swe" | "gradient";
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "default",
  title,
  highlight,
  highlightColor = "gradient",
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const highlightStyles = {
    cp: "text-purple-400",
    swe: "text-cyan-400",
    gradient: "bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent",
  };

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3">
          <Badge variant={eyebrowVariant} size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
        {title}{" "}
        {highlight && (
          <span className={cn("inline-block", highlightStyles[highlightColor])}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}

      <div
        className={cn(
          "mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-purple-500/80 to-cyan-500/80",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
