import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <Container className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-medium text-[var(--color-primary)] tracking-tight">Kosuka Bali Trip</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-foreground)]">
          <a href="#destinations" className="hover:text-[var(--color-coral)] transition-colors">Destinations</a>
          <a href="#tours" className="hover:text-[var(--color-coral)] transition-colors">Tours</a>
          <a href="#vehicles" className="hover:text-[var(--color-coral)] transition-colors">Vehicles</a>
          <a href="#gallery" className="hover:text-[var(--color-coral)] transition-colors">Gallery</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="rounded-full px-6 shadow-sm">Plan Your Trip</Button>
        </div>
      </Container>
    </header>
  )
}
