import * as React from "react"
import { cn } from "@/lib/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-sm focus-visible:ring-[var(--color-accent)]",
      secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-sm focus-visible:ring-[var(--color-secondary)]",
      outline: "border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-sand)] focus-visible:ring-[var(--color-primary)]",
      ghost: "bg-transparent hover:bg-[var(--color-muted)] text-[var(--color-foreground)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 py-2 px-6 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
