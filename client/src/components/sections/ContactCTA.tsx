import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export function ContactCTA() {
  return (
    <Section id="contact" className="bg-[var(--color-primary)] text-white text-center">
      <Container className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to start planning?</h2>
        <p className="text-lg text-white/85 mb-6">
          Reach out to us directly. Let us know which service type you are interested in:
        </p>
        <div className="flex justify-center mb-8">
          <ul className="text-left text-base text-white/80 space-y-2.5 border border-white/10 rounded-2xl p-5 bg-white/5 w-full max-w-sm">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Complete Bali Trip Package
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Private Local Guide
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Vehicle Rental Only
            </li>
          </ul>
        </div>
        <WhatsAppButton href="#" />
      </Container>
    </Section>
  )
}
