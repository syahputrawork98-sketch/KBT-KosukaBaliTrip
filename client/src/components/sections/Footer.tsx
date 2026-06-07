import * as React from "react"
import { Container } from "@/components/layout/Container"

export function Footer() {
  return (
    <footer className="bg-[var(--color-slate)] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8 mb-8">
          <div>
            <span className="text-xl font-serif font-bold text-[var(--color-sand)] mb-4 inline-block">Kosuka Bali Trip</span>
            <p className="text-sm text-white/70 max-w-xs">
              Warm, premium, and personalized Bali travel and tour experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Tours</a></li>
              <li><a href="#vehicles" className="hover:text-white transition-colors">Vehicles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>WhatsApp: Contact for details</li>
              <li>Email: Inquiries welcomed</li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Kosuka Bali Trip. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
