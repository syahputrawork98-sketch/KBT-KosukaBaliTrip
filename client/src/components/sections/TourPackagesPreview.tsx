import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { tourPackages } from "@/data/landing"

export function TourPackagesPreview({ showCTA = false }: { showCTA?: boolean }) {
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
              {/* Image Placeholder or Real Image */}
              <div className="h-48 w-full bg-[var(--color-muted)] relative overflow-hidden">
                {tour.imageUrl ? (
                  <img src={tour.imageUrl} alt={tour.imageAlt || tour.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent mix-blend-multiply" />
                )}
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
                  <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider font-semibold mb-0.5">Trip style</span>
                  <span className="font-medium text-[var(--color-foreground)]">{tour.priceLabel}</span>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-9 px-6 text-sm bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-sm">
                  Inquire
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {showCTA && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-md"
            >
              Explore All Tours
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
