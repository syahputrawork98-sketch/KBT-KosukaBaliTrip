import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { DestinationHighlights } from "@/components/sections/DestinationHighlights"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function DestinationsPage() {
  const categories = [
    {
      title: "Beach & Sunset",
      icon: "sun-wave",
      description: "Pristine sandy shores, dramatic ocean cliffs, and famous Bali sunsets."
    },
    {
      title: "Culture & Temples",
      icon: "temple",
      description: "Sacred pagodas, ancient water palaces, and rich spiritual heritage."
    },
    {
      title: "Nature & Waterfalls",
      icon: "leaf",
      description: "Lush tropical jungles, hidden canyon waterfalls, and scenic rice terraces."
    },
    {
      title: "Family-Friendly Places",
      icon: "users",
      description: "Comfortable and safe parks, interactive cultural spots, and clean animal sanctuaries."
    },
    {
      title: "Scenic Highlands",
      icon: "mountain",
      description: "Cool mountain breeze, active volcano vistas, and panoramic lake views."
    },
    {
      title: "Hidden Gems",
      icon: "sparkle-pin",
      description: "Quieter, untouched local spots away from the busy main crowds."
    }
  ]

  const recommendations = [
    {
      type: "First-Time Visitors",
      focus: "Ubud (culture, forest) & Uluwatu (cliffs, sunset, temples)"
    },
    {
      type: "Couples & Honeymooners",
      focus: "Scenic sunset locations, cliffside viewpoints, and Nusa islands"
    },
    {
      type: "Families with Kids",
      focus: "Safe beach areas, cultural parks, and gentle nature walks"
    },
    {
      type: "Nature & Adventure Lovers",
      focus: "Kintamani volcano tours, North Bali waterfalls, and Penida hikes"
    },
    {
      type: "Relaxed Sightseers",
      focus: "Easy-to-access temples, local tea/coffee plantations, and scenic dining spots"
    }
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Explore Bali"
        title="Explore Bali by Destination Style"
        description="Discover Bali through beaches, temples, nature, scenic highlands, and local travel moments. Choose the places that match your travel mood."
      />

      {/* Categories Grid */}
      <Section variant="default" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Choose Your Travel Mood</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Bali offers a wide variety of sights. Tell us what style of holiday you prefer, and we can organize the route.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={cat.icon} size={28} />
                </div>
                <CardTitle className="text-xl font-serif text-[var(--color-primary)] font-semibold mb-2">{cat.title}</CardTitle>
                <CardDescription className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{cat.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Destinations (reused highlight block for visual familiarity but placed logically) */}
      <DestinationHighlights />

      {/* Best For Section */}
      <Section variant="default" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Recommendations by Travel Style</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Whether it is your first time or your fifth, here are the general areas that fit your group.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]/50 last:pb-0 last:border-b-0">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--color-secondary)] font-bold text-lg">✓</span>
                  <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)]">{rec.type}</h4>
                </div>
                <p className="text-sm md:text-base text-[var(--color-muted-foreground)] md:max-w-md">{rec.focus}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[var(--color-primary)] text-white text-center py-20">
        <Container className="max-w-2xl">
          <div className="text-[var(--color-accent)] mb-4 inline-flex items-center justify-center p-3 bg-white/5 rounded-full">
            <BrandIcon name="map-pin" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-accent)]">Not sure where to go?</h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            Tell us your travel style, preferred pace, and group size, and we will help you suggest a comfortable and optimized itinerary.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-lg font-semibold"
          >
            Consult Your Travel Style
          </Link>
        </Container>
      </Section>
    </PageShell>
  )
}
