import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <Section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-visible pb-0 pt-0 px-0">
      {/* Visual Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8eb3a6] via-[#c2d6cd] to-[#e8ded1] -z-20" />
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30 -z-10" />
      
      <Container className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight tracking-tight drop-shadow-md">
            Bali, arranged beautifully around you
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-sm leading-relaxed">
            Private tours, flexible routes, and easy local support for travelers who want Bali to feel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button variant="primary" size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-50 shadow-lg">Start Planning</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Explore Tours</Button>
          </div>
        </div>
      </Container>

      {/* Floating Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <Container>
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
            <div className="flex-1 text-center px-4 w-full pt-4 md:pt-0 first:pt-0">
              <p className="font-medium text-[var(--color-foreground)] text-lg">Private Tours</p>
              <p className="text-sm text-[var(--color-muted-foreground)] mt-1">Exclusive experiences</p>
            </div>
            <div className="flex-1 text-center px-4 w-full pt-4 md:pt-0">
              <p className="font-medium text-[var(--color-foreground)] text-lg">Flexible Routes</p>
              <p className="text-sm text-[var(--color-muted-foreground)] mt-1">Tailored to your pace</p>
            </div>
            <div className="flex-1 text-center px-4 w-full pt-4 md:pt-0">
              <p className="font-medium text-[var(--color-foreground)] text-lg">Local Support</p>
              <p className="text-sm text-[var(--color-muted-foreground)] mt-1">Always available</p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}
