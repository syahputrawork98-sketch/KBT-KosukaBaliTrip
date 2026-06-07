import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { destinations } from "@/data/landing"

export function DestinationHighlights() {
  return (
    <Section id="destinations" variant="sand">
      <Container>
        <SectionHeading 
          eyebrow="Top Locations" 
          title="Destination Highlights" 
          description="Discover the most beautiful and iconic spots across the island."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <Card key={i} className={`overflow-hidden border-none shadow-sm ${dest.color}`}>
              <div className="h-40 bg-black/5 flex items-center justify-center">
                <span className="text-[var(--color-muted-foreground)] text-sm">Image Placeholder</span>
              </div>
              <CardHeader>
                <CardTitle>{dest.name}</CardTitle>
                <CardDescription>{dest.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
