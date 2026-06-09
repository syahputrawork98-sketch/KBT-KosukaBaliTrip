import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { ServicesOverview } from "@/components/sections/ServicesOverview"
import { ServiceComparison } from "@/components/sections/ServiceComparison"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Services"
        title="Choose the Bali Travel Support That Fits Your Trip"
        description="Whether you need a local guide, a complete trip arrangement, or simply a private vehicle, Kosuka Bali helps you explore Bali with comfort, clarity, and local support."
      />
      
      <ServicesOverview />
      <ServiceComparison />
      <HowItWorks />

      <Section className="bg-[var(--color-primary)] text-white text-center py-20 border-t border-white/10">
        <Container className="max-w-2xl">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-accent)]">Not sure which service fits your trip?</h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            Send us your travel plan and we will help you choose the most suitable support for your Bali journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-lg font-semibold"
          >
            Start Planning With Us
          </Link>
        </Container>
      </Section>
    </PageShell>
  )
}
