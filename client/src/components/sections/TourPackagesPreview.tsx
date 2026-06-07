import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
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
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tour.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-4">
                  {tour.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-[var(--color-muted-foreground)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 border-t border-[var(--color-border)] pt-6 mt-auto">
                <Badge variant="soft">{tour.priceLabel}</Badge>
                <Button variant="outline" className="w-full">Inquire Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
