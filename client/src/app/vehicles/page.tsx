import Link from "next/link"
import { PageShell } from "@/components/layout/PageShell"
import { PageHeader } from "@/components/layout/PageHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { BrandIcon } from "@/components/ui/BrandIcon"
import { VehiclePreview } from "@/components/sections/VehiclePreview"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export default function VehiclesPage() {
  const vehicleTypes = [
    {
      title: "Standard Car",
      icon: "car",
      description: "Comfortable air-conditioned private car (e.g., Toyota Avanza, Suzuki Ertiga) ideal for couples and small groups."
    },
    {
      title: "Family Car / MPV",
      icon: "users",
      description: "Spacious multi-purpose vehicle (e.g., Toyota Innova) providing extra legroom and comfort for family journeys."
    },
    {
      title: "Group Van",
      icon: "van",
      description: "Comfortable minibus (e.g., Toyota Hiace) designed for larger groups, family reunions, or heavy luggage transfer."
    },
    {
      title: "Airport Transfer Support",
      icon: "plane",
      description: "Direct one-way pickup or drop-off transfer from/to Ngurah Rai International Airport to your hotel area."
    },
    {
      title: "Luggage-Friendly Rides",
      icon: "luggage",
      description: "Vehicles configured with folded back rows to comfortably fit surfboard bags, golf sets, or heavy suitcases."
    },
    {
      title: "Flexible Route Support",
      icon: "route",
      description: "Custom multi-stop pickup and drop-off coordination optimized based on your daily coordinates."
    }
  ]

  const capacities = [
    {
      capacity: "1–3 Passengers",
      vehicle: "Standard Car",
      bestFor: "Solo travelers, couples, or small groups traveling light."
    },
    {
      capacity: "4–6 Passengers",
      vehicle: "Family Car / MPV",
      bestFor: "Medium families or groups wanting extra cabin space."
    },
    {
      capacity: "7–10 Passengers",
      vehicle: "Group Van",
      bestFor: "Large family trips, group tours, or corporate retreats."
    },
    {
      capacity: "Luggage-Focused",
      vehicle: "Configured Car / Van",
      bestFor: "Airport arrivals, departures, or travelers moving villas with multiple large bags."
    }
  ]

  return (
    <PageShell>
      <PageHeader 
        eyebrow="Fleet & Transport"
        title="Flexible Vehicle Support for Your Bali Days"
        description="Choose transport support based on your group size, luggage needs, pickup area, and route plan."
      />

      {/* Vehicle Types Grid */}
      <Section variant="default" className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Our Fleet Options</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              All vehicles are clean, air-conditioned, and driven by experienced local drivers. Select the vehicle type that matches your group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map((vehicle, i) => (
              <Card key={i} className="flex flex-col hover:shadow-md transition-shadow duration-300 border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={vehicle.icon} size={28} />
                </div>
                <CardTitle className="text-xl font-serif text-[var(--color-primary)] font-semibold mb-2">{vehicle.title}</CardTitle>
                <CardDescription className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{vehicle.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Fleet (reused from index layout for familiar UI visuals) */}
      <VehiclePreview />

      {/* Capacity & Specs Section */}
      <Section variant="default" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Capacity & Use Cases</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Ensure comfort by choosing a vehicle size that leaves enough space for your passengers and luggage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-sand)]/20 border border-[var(--color-border)] rounded-2xl p-6 md:p-8 space-y-6">
            {capacities.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border)]/50 last:pb-0 last:border-b-0">
                <div className="flex flex-col">
                  <span className="text-xs text-[var(--color-secondary)] uppercase tracking-wider font-semibold mb-1">Recommended for</span>
                  <h4 className="font-serif text-lg font-semibold text-[var(--color-primary)]">{item.capacity}</h4>
                </div>
                <div className="flex flex-col md:text-right">
                  <span className="text-sm font-medium text-[var(--color-primary)] mb-1">Vehicle Type: {item.vehicle}</span>
                  <p className="text-sm text-[var(--color-muted-foreground)] md:max-w-md">{item.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Rental Notes & Disclaimers */}
      <Section variant="sand" className="py-16 border-t border-[var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-4">Rental Notes & Conditions</h2>
            <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
              Please review our standard rental conditions. We keep everything clear and transparent with no hidden charges.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-[var(--color-slate)]/90 leading-relaxed">
            <div className="flex gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <p><strong>Private Driver & Fuel Included:</strong> All transport support includes a friendly local driver and fuel for the planned route duration.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <p><strong>Scheduling & Availability:</strong> Vehicle options are subject to availability. We recommend sharing your dates as early as possible.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <p><strong>Route Boundaries:</strong> Standard rates cover central and southern Bali areas. Remote locations in West Bali or far East Bali will be confirmed during inquiry.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <p><strong>Exclusions:</strong> Parking fees, toll charges, entry tickets, meals, and driver overtime beyond standard hours should be confirmed during planning.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <p><strong>Service Model Difference:</strong> Vehicle Rental Only focuses solely on safe and comfortable transport support. It does not include a personal tour guide or custom itinerary planning.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[var(--color-primary)] text-white text-center py-20">
        <Container className="max-w-2xl">
          <div className="text-[var(--color-accent)] mb-4 inline-flex items-center justify-center p-3 bg-white/5 rounded-full">
            <BrandIcon name="car" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[var(--color-accent)]">Need transport support?</h2>
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            Share your travel dates, number of passengers, and general route plans with us, and we will check vehicle availability.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-8 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-lg font-semibold"
          >
            Inquire Vehicle Availability
          </Link>
        </Container>
      </Section>
    </PageShell>
  )
}
