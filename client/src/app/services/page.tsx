import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Services"
        title="Our Premium Services"
        description="We are preparing comprehensive services to elevate your Bali travel experience."
      />
      <div className="py-24 text-center">
        <p className="text-xl text-[var(--color-muted-foreground)]">
          Kosuka Bali services are being prepared.
        </p>
      </div>
    </PageShell>
  )
}
