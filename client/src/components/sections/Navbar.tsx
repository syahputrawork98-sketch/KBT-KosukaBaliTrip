import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/layout/Container"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/brand/kosuka-bali-logo.png"
            alt="Kosuka Bali logo"
            width={48}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl sm:text-2xl font-serif font-medium text-[var(--color-primary)] tracking-tight">Kosuka Bali</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-foreground)]">
          <Link href="/destinations" className="hover:text-[var(--color-accent)] transition-colors">Destinations</Link>
          <Link href="/tours" className="hover:text-[var(--color-accent)] transition-colors">Tours</Link>
          <Link href="/vehicles" className="hover:text-[var(--color-accent)] transition-colors">Vehicles</Link>
          <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-9 px-6 text-sm bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-sm">
            Plan Your Trip
          </Link>
        </div>
      </Container>
    </header>
  )
}
