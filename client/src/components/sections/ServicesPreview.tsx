import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function ServicesPreview() {
  const previews = [
    {
      title: "Complete Bali Trip Package",
      description: "Daily trip arrangements, transport, planning, and on-ground local support for a hassle-free vacation."
    },
    {
      title: "Private Local Guide",
      description: "Explore destinations with a friendly local guide for cultural context, translations, and personal support."
    },
    {
      title: "Vehicle Rental Only",
      description: "Comfortable and private transport support with experienced driver-guides for travelers with their own plan."
    }
  ]

  return (
    <Section id="services-preview" variant="default" className="border-b border-[var(--color-border)]">
      <Container>
        <SectionHeading
          eyebrow="Our Support"
          title="Available Services"
          description="Find the right type of transport and guide assistance for your Bali trip."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {previews.map((item, i) => (
            <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-sand)]/20">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-serif text-[var(--color-primary)] font-semibold">{item.title}</CardTitle>
                <CardDescription className="text-sm mt-2 text-[var(--color-muted-foreground)] leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-md font-semibold"
          >
            Explore Our Services <span className="text-lg">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
