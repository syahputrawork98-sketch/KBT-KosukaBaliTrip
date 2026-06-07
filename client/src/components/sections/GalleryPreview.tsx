import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { galleryItems } from "@/data/landing"

export function GalleryPreview() {
  return (
    <Section id="gallery">
      <Container>
        <SectionHeading 
          eyebrow="Memories" 
          title="Bali Moments" 
          description="Glimpses of the beautiful experiences awaiting you."
          align="center"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className={`aspect-square ${item.color} rounded-lg flex items-center justify-center p-4 text-center shadow-sm`}>
               <span className="text-[var(--color-muted-foreground)] font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
