import * as React from "react"
import { cn } from "@/lib/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "soft";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    default: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90",
    soft: "bg-[var(--color-sand)] text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-sand)]/80",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }
