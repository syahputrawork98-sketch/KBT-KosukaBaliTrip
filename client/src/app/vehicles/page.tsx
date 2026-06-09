import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { VehiclePreview } from "@/components/sections/VehiclePreview"

export default function VehiclesPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Fleet & Transport"
        title="Comfortable Vehicles"
        description="Travel safely and comfortably with our well-maintained fleet and experienced local driver-guides."
      />
      <VehiclePreview />
    </PageShell>
  )
}
