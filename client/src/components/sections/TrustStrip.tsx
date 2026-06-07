import * as React from "react"
import { Container } from "@/components/layout/Container"
import { trustValues } from "@/data/landing"

export function TrustStrip() {
  return (
    <div className="bg-[var(--color-primary)] text-white py-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustValues.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <h4 className="font-medium text-white/95">{item.title}</h4>
              <p className="text-sm text-white/80 leading-snug max-w-[200px]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
