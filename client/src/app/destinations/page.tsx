import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { DestinationHighlights } from "@/components/sections/DestinationHighlights"

export default function DestinationsPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Explore Bali"
        title="Our Destination Highlights"
        description="Explore the most scenic landscapes, pristine beaches, sacred temples, and beautiful waterfalls across Bali."
      />
      <DestinationHighlights />
    </PageShell>
  )
}
