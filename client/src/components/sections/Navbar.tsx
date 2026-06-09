import Image from "next/image"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <Container className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/kosuka-bali-logo.png"
            alt="Kosuka Bali logo"
            width={48}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl sm:text-2xl font-serif font-medium text-[var(--color-primary)] tracking-tight">Kosuka Bali</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-foreground)]">
          <a href="#destinations" className="hover:text-[var(--color-accent)] transition-colors">Destinations</a>
          <a href="#tours" className="hover:text-[var(--color-accent)] transition-colors">Tours</a>
          <a href="#vehicles" className="hover:text-[var(--color-accent)] transition-colors">Vehicles</a>
          <a href="#gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="rounded-full px-6 shadow-sm">Plan Your Trip</Button>
        </div>
      </Container>
    </header>
  )
}
