import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { GalleryPreview } from "@/components/sections/GalleryPreview"

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Memories"
        title="Bali Moments"
        description="Glimpses of beautiful memories, cultural sights, and the breathtaking scenery that awaits you in Bali."
      />
      <GalleryPreview />
    </PageShell>
  )
}
