import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { AboutSection } from "@/components/sections/AboutSection"

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader 
        eyebrow="Who We Are"
        title="Your Local Friend in Bali"
        description="Learn about our vision, team of local guides, and passion for creating stress-free experiences for visitors."
      />
      <AboutSection />
    </PageShell>
  )
}
