import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  hasBorderBottom?: boolean;
}

export function SectionContainer({
  id,
  className,
  children,
  hasBorderBottom = false,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 w-full scroll-mt-20",
        hasBorderBottom && "border-b border-white/[0.05]",
        className
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  );
}
