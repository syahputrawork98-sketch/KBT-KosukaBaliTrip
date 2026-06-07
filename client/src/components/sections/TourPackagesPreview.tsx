import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { tourPackages } from "@/data/landing"

export function TourPackagesPreview() {
  return (
    <Section id="tours">
      <Container>
        <SectionHeading 
          eyebrow="Our Tours" 
          title="Popular Tour Packages" 
          description="Choose a pre-designed itinerary or customize your own path."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPackages.map((tour, i) => (
            <Card key={i} className="flex flex-col group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-300">
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-[var(--color-muted)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent mix-blend-multiply" />
                <div className="absolute top-4 left-4">
                  <Badge variant="soft" className="bg-white/90 backdrop-blur-sm text-[var(--color-primary)] border-none shadow-sm">
                    {tour.durationLabel}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl group-hover:text-[var(--color-coral)] transition-colors">{tour.name}</CardTitle>
                <CardDescription className="text-base mt-2 line-clamp-2">{tour.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 pb-6">
                <ul className="space-y-3 mt-4">
                  {tour.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-[var(--color-muted-foreground)] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex flex-row items-center justify-between gap-4 border-t border-[var(--color-border)]/50 pt-6 pb-6 mt-auto">
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold mb-0.5">Starting from</span>
                  <span className="font-medium text-[var(--color-foreground)]">{tour.priceLabel}</span>
                </div>
                <Button variant="primary" size="sm" className="rounded-full px-6">Inquire</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
