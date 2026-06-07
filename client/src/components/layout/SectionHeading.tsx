import * as React from "react"
import { cn } from "@/lib/cn"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, eyebrow, description, align = "left", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 mb-8 md:mb-12", align === "center" ? "items-center text-center mx-auto" : "items-start text-left", className)}
        {...props}
      >
        {eyebrow && (
          <span className="text-sm font-bold tracking-wider text-[var(--color-coral)] uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[var(--color-primary)]">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mt-2">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }
