import * as React from "react"
import { Container } from "@/components/layout/Container"

export function PageHeader({ eyebrow, title, description }: { eyebrow: string, title: string, description: string }) {
  return (
    <div className="bg-[var(--color-sand)] py-16 border-b border-[var(--color-border)]">
      <Container className="max-w-4xl text-center">
        <span className="text-xs uppercase tracking-widest text-[var(--color-secondary)] font-semibold mb-2 block">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[var(--color-primary)] mb-4 tracking-tight">{title}</h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed">{description}</p>
      </Container>
    </div>
  )
}
