import * as React from "react"
import { cn } from "@/lib/cn"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "sand" | "dark";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[var(--color-background)]",
      sand: "bg-[var(--color-sand)]",
      dark: "bg-[var(--color-slate)] text-[var(--color-sand)]",
    };

    return (
      <section
        ref={ref}
        className={cn("py-12 md:py-16 lg:py-24", variants[variant], className)}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
