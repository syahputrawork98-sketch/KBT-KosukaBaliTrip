import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/Card"
import { BrandIcon } from "@/components/ui/BrandIcon"

export function ServicesOverview() {
  const services = [
    {
      title: "Complete Bali Trip Package",
      icon: "route",
      description: "From airport pickup to daily trip arrangements, this service helps you enjoy Bali with a clearer plan, local support, and a smoother travel flow.",
      bestFor: "First-time visitors, couples, families, honeymoon trips, and small groups who want a more organized Bali experience.",
      includes: [
        "Airport pickup and final drop-off arrangement",
        "Basic itinerary planning based on your trip style",
        "Transport support during agreed trip days",
        "Local support during selected activities",
        "Destination, restaurant, and activity recommendations"
      ],
      excludes: [
        "Hotel or villa booking unless agreed separately",
        "Entrance tickets, meals, parking, or activity fees unless stated",
        "Travel insurance, medical, legal, or personal security services",
        "Guaranteed weather, traffic, or destination conditions"
      ],
      ctaText: "Request a Custom Trip",
      ctaLink: "/contact"
    },
    {
      title: "Private Local Guide",
      icon: "compass",
      description: "Explore Bali with a friendly local guide who can help you understand the places you visit, communicate more easily, and enjoy a more personal travel experience.",
      bestFor: "Travelers who already have destinations in mind but want local guidance, cultural context, and smoother communication during the day.",
      includes: [
        "Guidance during agreed destination visits",
        "Basic explanation about places, local culture, and travel etiquette",
        "Simple communication help with local staff or vendors",
        "Light itinerary suggestions based on your planned destinations",
        "Casual photo assistance using your own phone or camera"
      ],
      excludes: [
        "Vehicle rental unless combined with another service",
        "Entrance tickets, meals, parking, donations, or activity fees",
        "Professional photography",
        "Guaranteed priority access or special access",
        "Licensed guide service for destinations that require official licensed guides unless confirmed separately"
      ],
      ctaText: "Ask for a Private Guide",
      ctaLink: "/contact"
    },
    {
      title: "Vehicle Rental Only",
      icon: "car",
      description: "For travelers who already have their own plan, our vehicle rental option gives you simple and flexible transportation support during your stay in Bali.",
      bestFor: "Travelers who know where they want to go and only need transport support without a guide or trip planning.",
      includes: [
        "Vehicle rental based on availability",
        "Agreed pickup and drop-off area",
        "Use of vehicle for agreed duration and route",
        "Basic information about vehicle capacity and rental terms"
      ],
      excludes: [
        "Tour guide service",
        "Itinerary planning",
        "Entrance tickets, meals, parking, fuel, overtime, or extra charges unless agreed",
        "Photo assistance or destination explanation",
        "Activity coordination"
      ],
      ctaText: "Check Vehicle Availability",
      ctaLink: "/contact"
    }
  ]

  return (
    <Section id="services-list" variant="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="flex flex-col h-full bg-[var(--color-card)] hover:shadow-lg transition-all duration-300 border border-[var(--color-border)]">
              <CardHeader className="pb-4">
                <div className="text-[var(--color-secondary)] mb-4 inline-flex items-center justify-center p-3 bg-[var(--color-secondary)]/10 rounded-2xl w-fit">
                  <BrandIcon name={service.icon} size={32} />
                </div>
                <CardTitle className="text-2xl font-serif text-[var(--color-primary)] font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-base text-[var(--color-slate)]/90 mt-2 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 space-y-6 pt-0">
                {/* Best For Section */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)] mb-2">Best For</h4>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{service.bestFor}</p>
                </div>
                
                {/* Includes Section */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)] mb-2">Includes</h4>
                  <ul className="space-y-2">
                    {service.includes.map((inc, j) => (
                      <li key={j} className="text-sm text-[var(--color-slate)] flex items-start gap-2 leading-relaxed">
                        <span className="text-[var(--color-secondary)] font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Excludes Section */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-red-700/80 mb-2">Does Not Include</h4>
                  <ul className="space-y-2">
                    {service.excludes.map((exc, j) => (
                      <li key={j} className="text-sm text-[var(--color-muted-foreground)]/80 flex items-start gap-2 leading-relaxed">
                        <span className="text-red-500/70 font-semibold">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="pt-6 border-t border-[var(--color-border)]/50 mt-auto">
                <Link 
                  href={service.ctaLink} 
                  className="w-full inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 py-2 px-6 text-base bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)]/90 shadow-sm font-semibold"
                >
                  {service.ctaText}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
