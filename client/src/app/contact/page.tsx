import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Get In Touch"
        title="Ready to start planning?"
        description="Reach out directly and we'll help you organize the perfect custom itinerary."
      />
      <ContactCTA />
    </PageShell>
  )
}
