import * as React from "react"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--color-slate)] bg-[var(--color-background)]">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
