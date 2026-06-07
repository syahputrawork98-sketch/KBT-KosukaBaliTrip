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
          <div className="aspect-video relative bg-[var(--color-slate)] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
            <img src="https://images.unsplash.com/photo-1516483638261-f40af5ba3227?auto=format&fit=crop&w=1200&q=80" alt="Traveler overlooking beautiful Bali landscape" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
