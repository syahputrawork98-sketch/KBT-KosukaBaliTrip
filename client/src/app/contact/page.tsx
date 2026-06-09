import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function ContactPage() {
  const options = [
    {
      title: "Complete Bali Trip Package",
      icon: "route",
      desc: "Full travel support including driver, vehicle, and itinerary planning."
    },
    {
      title: "Private Local Guide Only",
      icon: "compass",
      desc: "Local guide accompaniment for your custom plan (no transport)."
    },
    {
      title: "Vehicle Rental Only",
      icon: "car",
      desc: "Private transport support with local driver-guide (no guide/planning)."
    },
    {
      title: "Not Sure Yet / Custom",
      icon: "flag",
      desc: "Consult with us to see which support fits your group style."
    }
  ]

  const checklistItems = [
    "Proposed travel dates & trip duration",
    "Number of travelers in your group",
    "Preferred service type (Full package, Guide only, or Vehicle only)",
    "Hotel or villa pickup area (e.g., Seminyak, Ubud, Jimbaran)",
    "Destination ideas, sights, or travel styles you are interested in",
    "Any special needs (e.g., child safety seat, surfboard rack, senior accessibility)"
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Get In Touch"
        title="Let's Plan Your Bali Journey"
        description="Tell us about your Bali trip, and we will help suggest the right support and coordinate availability."
      />

      {/* Guided Service Options */}
      <Section variant="default" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">1. Select a Service Area</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Choose the general level of support you are looking for during your Bali vacation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((opt, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-2.5 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={opt.icon} size={24} />
                </div>
                <CardTitle className="text-lg font-serif text-[var(--color-primary)] font-semibold mb-1">{opt.title}</CardTitle>
                <CardDescription className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">{opt.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What to Prepare Checklist */}
      <Section variant="sand" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-6">2. Details to Prepare</h2>
              <p className="text-sm sm:text-base text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                To help us provide a quick and accurate quote, please prepare the following details before reaching out:
              </p>
              <ul className="space-y-3">
                {checklistItems.map((item, i) => (
                  <li key={i} className="text-sm sm:text-base text-[var(--color-slate)] flex items-start gap-3 leading-relaxed">
                    <span className="text-[var(--color-secondary)] font-bold text-lg leading-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-white border border-[var(--color-border)] rounded-3xl shadow-sm text-center">
              <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-4 bg-[var(--color-secondary)]/10 rounded-full">
                <BrandIcon name="message" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[var(--color-primary)] mb-3">3. Direct Consultation</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                Connect directly with our local coordinator via WhatsApp. Share your details, ask questions, and design your travel plan with us.
              </p>
              
              <div className="flex justify-center">
                <WhatsAppButton href="#" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Expectation Notes */}
      <Section variant="default" className="py-16 border-t border-[var(--color-border)]">
        <Container className="max-w-2xl text-center">
          <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-full">
            <BrandIcon name="shield" size={28} />
          </div>
          <h4 className="text-lg font-serif font-semibold text-[var(--color-primary)] mb-2">Expectation & Inquiry Notes</h4>
          <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed max-w-lg mx-auto">
            All inquiries are non-binding. Transportation routes, local driver assignments, and exact schedules are confirmed and locked after we verify schedule availability.
          </p>
        </Container>
      </Section>
    </PageShell>
  )
}
