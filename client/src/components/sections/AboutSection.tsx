import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"

export function AboutSection() {
  return (
    <Section variant="sand">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              eyebrow="About Us" 
              title="Your Local Friend in Bali" 
            />
            <div className="space-y-4 text-lg text-[var(--color-muted-foreground)]">
              <p>
                At Kosuka Bali Trip, we believe your holiday should be stress-free, personalized, and deeply memorable. We are a team of passionate locals dedicated to showing you the true beauty of our island.
              </p>
              <p>
                Whether you&apos;re looking for serene temples, hidden waterfalls, or just a reliable driver for the day, we provide friendly local experience and flexible trip planning for international visitors.
              </p>
            </div>
          </div>
          <div className="aspect-video bg-[var(--color-slate)] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white/50">Team / Vibe Image Placeholder</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
