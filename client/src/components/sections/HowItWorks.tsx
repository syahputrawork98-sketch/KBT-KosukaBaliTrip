import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { BrandIcon } from "@/components/ui/BrandIcon"

export function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: "message",
      title: "Share your plan",
      description: "Share your travel date, group size, pickup location, and places you want to visit."
    },
    {
      step: "2",
      icon: "checklist",
      title: "Choose service type",
      description: "Pick the support that fits your trip: full package, private guide, or vehicle only."
    },
    {
      step: "3",
      icon: "calendar",
      title: "Confirm route & schedule",
      description: "We check the schedule, route, vehicle, and support needed before confirming details."
    },
    {
      step: "4",
      icon: "route",
      title: "Enjoy Bali trip",
      description: "Travel with clearer planning, local support, and a smoother flow."
    }
  ]

  return (
    <Section id="how-it-works" variant="default" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Workflow"
          title="How It Works"
          description="A simple, personal process to arrange your transportation and guidance support in Bali."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-[var(--color-sand)]/40 rounded-2xl border border-[var(--color-border)]/50 relative hover:translate-y-[-4px] transition-all duration-300">
              {/* Step Icon & Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center shadow-sm">
                  <BrandIcon name={s.icon} size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs flex items-center justify-center shadow-sm border border-white">
                  {s.step}
                </div>
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-3">{s.title}</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
