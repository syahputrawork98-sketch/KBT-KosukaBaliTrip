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
            <Card key={i} className="group overflow-hidden border-none shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-black/5">
                {v.imageUrl ? (
                  <img src={v.imageUrl} alt={v.imageAlt || v.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-[var(--color-muted-foreground)] text-sm">Vehicle Image</span>
                  </div>
                )}
              </div>
              <CardHeader className="pt-6">
                <CardTitle>{v.name}</CardTitle>
                <CardDescription className="text-base mt-1">Capacity: {v.capacity} • {v.useCase}</CardDescription>
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
