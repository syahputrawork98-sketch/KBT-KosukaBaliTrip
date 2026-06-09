import * as React from "react"
import { Container } from "@/components/layout/Container"

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8 mb-8">
          <div>
            <span className="text-2xl font-serif font-medium text-[var(--color-accent)] mb-4 inline-block tracking-tight">Kosuka Bali</span>
            <p className="text-base text-white/90 max-w-xs leading-relaxed">
              Warm, premium, and personalized Bali travel and tour experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li><a href="#destinations" className="hover:text-[var(--color-accent)] transition-colors">Destinations</a></li>
              <li><a href="#tours" className="hover:text-[var(--color-accent)] transition-colors">Tours</a></li>
              <li><a href="#vehicles" className="hover:text-[var(--color-accent)] transition-colors">Vehicles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li>WhatsApp: Contact for details</li>
              <li>Email: Inquiries welcomed</li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Kosuka Bali. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
