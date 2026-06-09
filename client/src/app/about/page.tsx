import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { AboutSection } from "@/components/sections/AboutSection"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function AboutPage() {
  const pillars = [
    {
      title: "Comfortable Support",
      icon: "shield",
      desc: "Travel in clean, air-conditioned private vehicles. We prioritize a relaxed sightseeing pace over rushed checklists."
    },
    {
      title: "Friendly Hospitality",
      icon: "users",
      desc: "Experience warm Balinese hospitality. Our guides and drivers treat you as a friend, ensuring a comfortable atmosphere."
    },
    {
      title: "Flexible Scheduling",
      icon: "sliders",
      desc: "Adjust routes, pickup timings, and stopover durations on the go based on your daily energy and interests."
    },
    {
      title: "Local Route Awareness",
      icon: "compass",
      desc: "Benefit from local shortcuts, optimal timing to avoid heavy traffic, and cultural etiquette guidance."
    },
    {
      title: "Not Rushed Pacing",
      icon: "clock",
      desc: "No forced tourist trap visits or commission-driven shopping stops. We focus entirely on the places you want to see."
    }
  ]

  const advantages = [
    {
      title: "Dedicated Private Support",
      desc: "You get a dedicated private vehicle and local driver-guide for your group only, ensuring privacy and ease."
    },
    {
      title: "Direct WhatsApp Contact",
      desc: "Communicate directly with our local team before and during your trip. Quick replies and easy schedule changes."
    },
    {
      title: "Itinerary Co-Creation",
      desc: "We plan the itinerary with you, offering local advice on routing and logistics while keeping you in full control."
    }
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Who We Are"
        title="Your Local Companion in Bali"
        description="Learn about our team, travel approach, and dedication to creating comfortable travel support for international guests."
      />

      {/* Brand Story (reused about section for visual consistency) */}
      <AboutSection />

      {/* Core Travel Pillars */}
      <Section variant="default" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Our Travel Pillars</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              We focus on comfort, pacing, and clear communication. These core pillars guide how we support our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={pillar.icon} size={28} />
                </div>
                <CardTitle className="text-xl font-serif text-[var(--color-primary)] font-semibold mb-2">{pillar.title}</CardTitle>
                <CardDescription className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{pillar.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why This Approach Section */}
      <Section variant="sand" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Why Travel With Us?</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              We keep our travel support straightforward and customer-first. Here are the advantages of coordinating with KBT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[var(--color-border)]/50 shadow-sm">
                <span className="text-[var(--color-secondary)] font-serif text-3xl font-bold mb-4">0{i + 1}</span>
                <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)] mb-2">{adv.title}</h4>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust CTA Section */}
      <Section className="bg-[var(--color-primary)] text-white text-center py-20">
        <Container className="max-w-2xl">
          <div className="text-[var(--color-accent)] mb-4 inline-flex items-center justify-center p-3 bg-white/5 rounded-full">
            <BrandIcon name="heart" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-accent)]">Ready to experience Bali?</h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            Let us know your travel preferences, and we will coordinate driver, vehicle, or local guide support for your days.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-lg font-semibold"
          >
            Start Planning Your Days
          </Link>
        </Container>
      </Section>
    </PageShell>
  )
}
