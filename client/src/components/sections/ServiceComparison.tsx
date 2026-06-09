import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeading } from "@/components/layout/SectionHeading"

export function ServiceComparison() {
  const headers = [
    "Feature",
    "Complete Bali Trip Package",
    "Private Local Guide",
    "Vehicle Rental Only"
  ]

  const rows = [
    {
      label: "Guide Included",
      col1: "Available during selected activities",
      col2: "Yes, focused guidance",
      col3: "No"
    },
    {
      label: "Vehicle Included",
      col1: "Yes, based on agreed package",
      col2: "No, unless combined with transport",
      col3: "Yes"
    },
    {
      label: "Itinerary Help",
      col1: "Yes, basic trip planning included",
      col2: "Light suggestions only",
      col3: "No"
    },
    {
      label: "Best For",
      col1: "Travelers who want a smoother end-to-end Bali trip",
      col2: "Travelers with their own plan who want local support",
      col3: "Travelers who only need transportation"
    }
  ]

  const ctas = [
    { text: "Request a Custom Trip", link: "/contact" },
    { text: "Ask for a Private Guide", link: "/contact" },
    { text: "Check Vehicle Availability", link: "/contact" }
  ]

  return (
    <Section id="compare-services" variant="sand" className="border-t border-b border-[var(--color-border)]">
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title="Compare Our Services"
          description="Find the right balance of planning, transport, and local assistance for your Bali visit."
          align="center"
        />

        <div className="w-full overflow-x-auto rounded-2xl shadow-sm border border-[var(--color-border)] bg-[var(--color-card)] mt-8">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm text-[var(--color-slate)]">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white border-b border-[var(--color-border)]">
                {headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 font-serif font-medium text-base tracking-wide first:w-1/5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-[var(--color-muted)]/20 transition-colors">
                  <td className="px-6 py-5 font-semibold text-[var(--color-primary)] bg-[var(--color-sand)]/30">
                    {row.label}
                  </td>
                  <td className="px-6 py-5 leading-relaxed">{row.col1}</td>
                  <td className="px-6 py-5 leading-relaxed">{row.col2}</td>
                  <td className="px-6 py-5 leading-relaxed">{row.col3}</td>
                </tr>
              ))}
              <tr className="bg-[var(--color-sand)]/10">
                <td className="px-6 py-6 font-semibold text-[var(--color-primary)]">
                  Actions
                </td>
                {ctas.map((cta, i) => (
                  <td key={i} className="px-6 py-6">
                    <Link
                      href={cta.link}
                      className="inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-10 px-5 text-sm bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 shadow-sm font-semibold"
                    >
                      {cta.text}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  )
}
