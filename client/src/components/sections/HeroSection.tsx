import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sand)] via-[var(--color-background)] to-[var(--color-sand)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-coral)]/10 via-transparent to-transparent -z-10" />
      
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-primary)] leading-tight">
            Explore Bali with a trip that feels personal
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-muted-foreground)]">
            Experience the beauty of Bali with private tours, local guidance, and flexible plans tailored to your pace. Reach out easily via WhatsApp to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" size="lg">Plan Your Trip</Button>
            <Button variant="outline" size="lg">View Destinations</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
