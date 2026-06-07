import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export function ContactCTA() {
  return (
    <Section id="contact" className="bg-[var(--color-primary)] text-white text-center">
      <Container className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to start planning?</h2>
        <p className="text-lg text-white/80 mb-8">
          Reach out to us directly. We&apos;ll help you organize the perfect itinerary based on your schedule and preferences.
        </p>
        <WhatsAppButton href="#" />
      </Container>
    </Section>
  )
}
