import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { destinations } from "@/data/landing"

export function DestinationHighlights({ showCTA = false }: { showCTA?: boolean }) {
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
            <Card key={i} className={`overflow-hidden border-none shadow-sm ${dest.colorClass}`}>
              <div className="h-48 relative overflow-hidden bg-black/5">
                {dest.imageUrl ? (
                  <img src={dest.imageUrl} alt={dest.imageAlt || dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-[var(--color-muted-foreground)] text-sm">Image Placeholder</span>
                  </div>
                )}
              </div>
              <CardHeader className="pt-6">
                <CardTitle>{dest.name}</CardTitle>
                <CardDescription className="text-base mt-1">{dest.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        {showCTA && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/destinations" 
              className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-md"
            >
              Explore All Destinations
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
