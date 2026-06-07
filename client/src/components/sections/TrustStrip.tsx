import * as React from "react"
import { Container } from "@/components/layout/Container"
import { trustValues } from "@/data/landing"

export function TrustStrip() {
  return (
    <div className="bg-[var(--color-primary)] text-white py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustValues.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
