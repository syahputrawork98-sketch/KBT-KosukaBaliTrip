import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { vehicles } from "@/data/landing"

export function VehiclePreview() {
  return (
    <Section id="vehicles" variant="sand">
      <Container>
        <SectionHeading 
          eyebrow="Transportation" 
          title="Comfortable Vehicles" 
          description="Travel safely and comfortably with our well-maintained fleet and experienced drivers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <Card key={i}>
              <div className="h-48 bg-gradient-to-br from-[var(--color-muted)] to-white flex items-center justify-center border-b border-[var(--color-border)]">
                 <span className="text-[var(--color-muted-foreground)]">Vehicle Image</span>
              </div>
              <CardHeader>
                <CardTitle>{v.name}</CardTitle>
                <CardDescription>Capacity: {v.capacity} • {v.useCase}</CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm font-medium text-[var(--color-primary)]">{v.statusLabel}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
