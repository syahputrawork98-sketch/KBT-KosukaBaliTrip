import * as React from "react"
import { cn } from "@/lib/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "soft";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "bg-[var(--color-primary)] text-white hover:bg-[#0d645d]",
    accent: "bg-[var(--color-coral)] text-white hover:bg-[#e06512]",
    soft: "bg-[var(--color-sand)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[#faeede]",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }
