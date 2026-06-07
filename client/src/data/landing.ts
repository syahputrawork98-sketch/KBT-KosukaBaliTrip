// Static mock data for the public landing page.
// This is intentionally separated from UI components so it can later be replaced by CMS/database data.

import {
  LandingPageData,
  TrustValue,
  DestinationItem,
  TourPackageItem,
  VehicleItem,
  GalleryItem
} from "@/types/landing";

export const trustValues: TrustValue[] = [
  { title: "Easy WhatsApp Booking", description: "Direct and fast communication with our local team.", iconLabel: "message" },
  { title: "Comfortable Transport", description: "Clean, air-conditioned vehicles for your journey.", iconLabel: "shield" },
  { title: "Curated Destinations", description: "Handpicked locations for the best experience.", iconLabel: "map" },
  { title: "Friendly Assistance", description: "Warm Balinese hospitality throughout your trip.", iconLabel: "clock" }
];

// Images are remote prototype URLs from free-to-use stock photo sources and should be replaced with owned/curated project assets before production.

export const destinations: DestinationItem[] = [
  { name: "Ubud", description: "Cultural heart, waterfalls, and rice terraces.", colorClass: "bg-teal-50", region: "Central Bali", imageUrl: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=800&q=80", imageAlt: "Rice terraces in Ubud, Bali" },
  { name: "Uluwatu", description: "Stunning cliffs and beautiful beaches.", colorClass: "bg-orange-50", region: "South Bali", imageUrl: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80", imageAlt: "Ocean cliffs in Uluwatu, Bali" },
  { name: "Nusa Penida", description: "Epic landscapes and pristine waters.", colorClass: "bg-slate-50", region: "Offshore", imageUrl: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80", imageAlt: "Beach and cliffs in Nusa Penida" },
  { name: "Kintamani", description: "Volcano views and cool mountain breeze.", colorClass: "bg-stone-50", region: "North Bali", imageUrl: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80", imageAlt: "Mountain landscape in Kintamani, Bali" }
];

export const tourPackages: TourPackageItem[] = [
  { name: "Half-day Bali Tour", description: "A quick glimpse into Bali's beauty.", durationLabel: "4-6 Hours", highlights: ["Flexible duration", "Perfect for quick trips"], priceLabel: "Custom quote", imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", imageAlt: "Traditional Balinese temple gate" },
  { name: "Full-day Bali Tour", description: "Explore the island's best spots in a day.", durationLabel: "8-10 Hours", highlights: ["Comprehensive exploration", "Customizable spots"], priceLabel: "From inquiry", imageUrl: "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=800&q=80", imageAlt: "Scenic view of Bali" },
  { name: "Nusa Penida Trip", description: "An adventurous island hopping experience.", durationLabel: "Full Day", highlights: ["Island crossing", "Iconic landmarks"], priceLabel: "Contact for details", imageUrl: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80", imageAlt: "Nusa Penida coastal view" },
  { name: "Custom Bali Trip", description: "Design your perfect day in Bali.", durationLabel: "Flexible", highlights: ["You decide the route", "Full day flexibility"], priceLabel: "Custom quote", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", imageAlt: "Balinese cultural offerings" }
];

export const vehicles: VehicleItem[] = [
  { name: "Car with driver", capacity: "1-4 Passengers", useCase: "Couples & small groups", statusLabel: "Available by request", imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80", imageAlt: "Comfortable car ride" },
  { name: "Family car / Van", capacity: "5-10 Passengers", useCase: "Families & large groups", statusLabel: "Available by request", imageUrl: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=800&q=80", imageAlt: "Family van on a road trip" },
  { name: "Airport pickup", capacity: "Flexible", useCase: "Arrivals & departures", statusLabel: "Contact for schedule", imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", imageAlt: "Airplane landing at airport" }
];

export const galleryItems: GalleryItem[] = [
  { title: "Bali Temple", colorClass: "bg-slate-200", imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", imageAlt: "Balinese Temple Architecture" },
  { title: "Rice Terrace", colorClass: "bg-slate-300", imageUrl: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=800&q=80", imageAlt: "Lush Green Rice Terraces" },
  { title: "Sunset Beach", colorClass: "bg-slate-200", imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80", imageAlt: "Sunset at Bali Beach" },
  { title: "Waterfall", colorClass: "bg-slate-300", imageUrl: "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?auto=format&fit=crop&w=800&q=80", imageAlt: "Waterfall surrounded by tropical jungle in Bali" },
  { title: "Culture", colorClass: "bg-slate-200", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", imageAlt: "Balinese Offerings and Culture" },
  { title: "Ocean Cliff", colorClass: "bg-slate-300", imageUrl: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80", imageAlt: "Dramatic Ocean Cliffs at Uluwatu" }
];

export const landingPageData: LandingPageData = {
  trustValues,
  destinations,
  tourPackages,
  vehicles,
  galleryItems,
};
