import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { galleryItems } from "@/data/landing"

export function GalleryPreview({ showCTA = false }: { showCTA?: boolean }) {
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
            <div key={i} className={`relative aspect-square ${item.colorClass} rounded-2xl overflow-hidden shadow-sm group`}>
              {item.imageUrl ? (
                <>
                  <img src={item.imageUrl} alt={item.imageAlt || item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-medium drop-shadow-md">{item.title}</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center w-full h-full p-4 text-center">
                  <span className="text-[var(--color-muted-foreground)] font-medium">{item.title}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {showCTA && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-md"
            >
              Explore Full Gallery
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
