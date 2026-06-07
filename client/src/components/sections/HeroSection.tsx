import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <Section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-visible pb-0 pt-0 px-0 mb-32 md:mb-24">
      {/* 
        Background Layer Wrapper 
        To use a real image later, replace the gradient div with an <img /> or next/image 
        while keeping the dark overlay div.
      */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#6FA3A0]">
        {/* Real Prototype Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=2000&q=80")` }}
        />
      </div>
      
      {/* Dark Overlays for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 -z-10" />
      
      <Container className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-32">
        <div className="max-w-3xl space-y-6 bg-black/45 backdrop-blur-md rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight tracking-tight">
            Bali, arranged beautifully around you
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl font-light leading-relaxed">
            Private tours, flexible routes, and easy local support for travelers who want Bali to feel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" size="lg" className="bg-white text-[var(--color-primary)] hover:bg-gray-50 shadow-lg font-medium">Start Planning</Button>
            <Button variant="outline" size="lg" className="border-white border-2 text-white hover:bg-white/20 font-medium">Explore Tours</Button>
          </div>
        </div>
      </Container>

      {/* Floating Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <Container>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
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
