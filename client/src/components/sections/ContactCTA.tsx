import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { 
  CONTACT_EMAIL, 
  CONTACT_WHATSAPP_URL, 
  DEFAULT_INQUIRY_SUBJECT, 
  DEFAULT_EMAIL_BODY 
} from "@/lib/contact"

export function ContactCTA() {
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEFAULT_INQUIRY_SUBJECT)}&body=${encodeURIComponent(DEFAULT_EMAIL_BODY)}`

  return (
    <Section id="contact" className="bg-[var(--color-primary)] text-white text-center">
      <Container className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to start planning?</h2>
        <p className="text-lg text-white/85 mb-6">
          Reach out to us directly. Let us know which service type you are interested in:
        </p>
        <div className="flex justify-center mb-8">
          <ul className="text-left text-base text-white/80 space-y-2.5 border border-white/10 rounded-2xl p-5 bg-white/5 w-full max-w-sm">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Complete Bali Trip Package
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Private Local Guide
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)] font-bold">✓</span> Vehicle Rental Only
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton href={CONTACT_WHATSAPP_URL} className="w-full sm:w-auto" />
          
          <a 
            href={mailtoUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md font-medium transition-all active:scale-[0.98] h-11 px-8 text-base bg-white/10 text-white hover:bg-white/20 border border-white/20 shadow-md font-semibold"
          >
            Send Email
          </a>

          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] h-11 px-8 text-base text-[var(--color-accent)] hover:underline font-semibold"
          >
            Detailed Inquiry Details →
          </Link>
        </div>
        
        <p className="text-xs text-white/50 mt-6 leading-relaxed">
          Note: WhatsApp number is currently a development placeholder.
        </p>
      </Container>
    </Section>
  )
}
