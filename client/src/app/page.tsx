import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { DestinationHighlights } from "@/components/sections/DestinationHighlights";
import { TourPackagesPreview } from "@/components/sections/TourPackagesPreview";
import { VehiclePreview } from "@/components/sections/VehiclePreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--color-slate)] bg-[var(--color-background)]">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <DestinationHighlights />
        <TourPackagesPreview />
        <VehiclePreview />
        <GalleryPreview />
        <AboutSection />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
