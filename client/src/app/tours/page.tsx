import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { TourPackagesPreview } from "@/components/sections/TourPackagesPreview"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function ToursPage() {
  const tripStyles = [
    {
      title: "Cultural Bali Day",
      icon: "temple",
      description: "Traditional dance, historical water temples, and local artisan galleries."
    },
    {
      title: "Beach & Sunset Escape",
      icon: "sun-wave",
      description: "Clifftop lookouts, white sand beaches, and fresh seafood by the ocean."
    },
    {
      title: "Ubud Nature & Culture",
      icon: "leaf",
      description: "Scenic rice terraces, monkey forests, and lush jungle waterfalls."
    },
    {
      title: "Family-Friendly Bali",
      icon: "users",
      description: "Comfortable zoo visits, shallow swimming lagoons, and easy-walking sights."
    },
    {
      title: "Couple & Honeymoon Day",
      icon: "heart",
      description: "Breathtaking viewpoints, quiet hideaways, and romantic dining spots."
    },
    {
      title: "Flexible Custom Day Trip",
      icon: "sliders",
      description: "Tell us the places you want to visit, and we will optimize the route."
    }
  ]

  const timelineSteps = [
    {
      time: "08:30 AM",
      title: "Hotel Pickup",
      desc: "Private air-conditioned vehicle picks you up at your hotel lobby."
    },
    {
      time: "10:00 AM",
      title: "First Major Destination",
      desc: "Visit the main cultural or natural sight of the day while temperatures are fresh."
    },
    {
      time: "12:30 PM",
      title: "Lunch & Rest Break",
      desc: "Unwind at a curated local restaurant with scenic views of rice fields or mountains."
    },
    {
      time: "03:00 PM",
      title: "Afternoon Sightseeing",
      desc: "Continue to a second scenic spot, waterfall, or local market."
    },
    {
      time: "05:30 PM",
      title: "Sunset Lookout",
      desc: "Conclude the tour by catching the sunset over cliffs, temples, or beaches."
    },
    {
      time: "07:30 PM",
      title: "Return to Hotel",
      desc: "Safe and comfortable transfer back to your accommodation."
    }
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Tours & Inspiration"
        title="Bali Trip Styles & Tour Inspiration"
        description="Use these tour ideas as starting points. Each trip style can be adjusted based on your time, interests, pickup area, and travel pace."
      />

      {/* Trip Styles Grid */}
      <Section variant="default" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Choose Your Tour Style</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              We focus on flexible, personalized travel rather than rigid itineraries. Pick a starting style to begin your planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tripStyles.map((style, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={style.icon} size={28} />
                </div>
                <CardTitle className="text-xl font-serif text-[var(--color-primary)] font-semibold mb-2">{style.title}</CardTitle>
                <CardDescription className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{style.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Tours */}
      <TourPackagesPreview />

      {/* Typical Day Timeline Flow */}
      <Section variant="sand" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Typical Day Trip Flow</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              This is a standard day layout. The timing is completely flexible and can be customized according to your pace.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-2 border-[var(--color-secondary)]/30 pl-6 space-y-8 ml-4 sm:ml-auto">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-secondary)] border-2 border-white shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wider bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded w-fit">
                    {step.time}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)]">{step.title}</h4>
                </div>
                <p className="text-sm text-[var(--color-muted-foreground)] mt-2 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Duration Guidance */}
      <Section variant="default" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Duration & Travel Pace</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              We adapt to how long you want to travel and how fast you want to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl">
              <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-2">Half-Day Trips (4–6 Hours)</h4>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Best for quick sightseeing, airport drop-off days, or travelers who prefer short outings. Focuses on 1-2 close locations.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl">
              <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-2">Full-Day Trips (8–10 Hours)</h4>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Our standard service. Ideal for visiting multiple sights within a specific region (e.g. Ubud loop, Bedugul loop, or South Bali coast).
              </p>
            </div>
            <div className="p-6 bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl">
              <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-2">Multi-Day Assistance</h4>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                For travelers looking to arrange guide and transport support across multiple consecutive days for a consistent experience.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl">
              <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-2">Custom Itinerary Pace</h4>
              <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Have specific pickup timings, late starts, or special destinations? We coordinate routes based on your requests.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[var(--color-primary)] text-white text-center py-20">
        <Container className="max-w-2xl">
          <div className="text-[var(--color-accent)] mb-4 inline-flex items-center justify-center p-3 bg-white/5 rounded-full">
            <BrandIcon name="calendar" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-accent)]">Found a tour style you like?</h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            Let us know which tour style inspires you, and we will help you suggest a customized itinerary.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-lg font-semibold"
          >
            Customize Your Tour Style
          </Link>
        </Container>
      </Section>
    </PageShell>
  )
}
