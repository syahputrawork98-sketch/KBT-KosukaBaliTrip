import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { TourPackagesPreview } from "@/components/sections/TourPackagesPreview"

export default function ToursPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Tours & Experiences"
        title="Popular Tour Packages"
        description="Choose one of our popular pre-designed itineraries or reach out to customize a unique path tailored entirely to you."
      />
      <TourPackagesPreview />
    </PageShell>
  )
}
