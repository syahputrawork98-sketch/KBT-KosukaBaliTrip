import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { GalleryPreview } from "@/components/sections/GalleryPreview"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function GalleryPage() {
  const categories = [
    {
      title: "Beaches & Sunset",
      icon: "sun-wave",
      desc: "Captured moments of warm sand, dramatic ocean waves, and Bali sunset vistas."
    },
    {
      title: "Culture & Temples",
      icon: "temple",
      desc: "Detailed architectural highlights of Balinese temples, gates, and water palaces."
    },
    {
      title: "Nature & Scenic Routes",
      icon: "leaf",
      desc: "Lush green rice terraces, hidden jungle waterfalls, and mountain roads."
    },
    {
      title: "Vehicles & Travel Moments",
      icon: "car",
      desc: "Comfortable drives and scenic transport snapshots from daily journeys."
    }
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Memories"
        title="A Glimpse of Bali Travel Moments"
        description="Glimpses of beautiful memories, cultural sights, and the breathtaking scenery that awaits you in Bali."
      />

      {/* Visual Mood Categories */}
      <Section variant="default" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Bali Experiences</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Explore the general visual mood of our travel moments. These capture the atmosphere of daily trips in Bali.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-2.5 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={cat.icon} size={24} />
                </div>
                <CardTitle className="text-lg font-serif text-[var(--color-primary)] font-semibold mb-1">{cat.title}</CardTitle>
                <CardDescription className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">{cat.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mood Grid */}
      <GalleryPreview />

      {/* Coming Soon Notice */}
      <Section variant="default" className="py-12 border-t border-[var(--color-border)]">
        <Container className="text-center">
          <div className="text-[var(--color-secondary)] mb-3 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-full">
            <BrandIcon name="camera" size={28} />
          </div>
          <p className="text-sm font-medium text-[var(--color-muted-foreground)]">
            More travel moments coming soon. All photos represent curated memories from private Bali routes.
          </p>
        </Container>
      </Section>
    </PageShell>
  )
}
