import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { 
  CONTACT_EMAIL, 
  CONTACT_WHATSAPP_DISPLAY, 
  CONTACT_WHATSAPP_URL 
} from "@/lib/contact"

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
              <li><Link href="/destinations" className="hover:text-[var(--color-accent)] transition-colors">Destinations</Link></li>
              <li><Link href="/tours" className="hover:text-[var(--color-accent)] transition-colors">Tours</Link></li>
              <li><Link href="/vehicles" className="hover:text-[var(--color-accent)] transition-colors">Vehicles</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li>
                WhatsApp:{" "}
                <a 
                  href={CONTACT_WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {CONTACT_WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                Email:{" "}
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Kosuka Bali. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
