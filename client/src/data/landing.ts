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
  { title: "Private Tours", description: "Personalized experiences for you and your group.", iconLabel: "shield" },
  { title: "Local Guidance", description: "Expert local drivers and guides.", iconLabel: "map" },
  { title: "Flexible Itinerary", description: "Adjust your trip to your preferences.", iconLabel: "clock" },
  { title: "WhatsApp Support", description: "Easy and direct communication.", iconLabel: "message" }
];

export const destinations: DestinationItem[] = [
  { name: "Ubud", description: "Cultural heart, waterfalls, and rice terraces.", colorClass: "bg-teal-50", region: "Central Bali" },
  { name: "Uluwatu", description: "Stunning cliffs and beautiful beaches.", colorClass: "bg-orange-50", region: "South Bali" },
  { name: "Nusa Penida", description: "Epic landscapes and pristine waters.", colorClass: "bg-slate-50", region: "Offshore" },
  { name: "Kintamani", description: "Volcano views and cool mountain breeze.", colorClass: "bg-stone-50", region: "North Bali" }
];

export const tourPackages: TourPackageItem[] = [
  { name: "Half-day Bali Tour", description: "A quick glimpse into Bali's beauty.", durationLabel: "4-6 Hours", highlights: ["Flexible duration", "Perfect for quick trips"], priceLabel: "Custom quote" },
  { name: "Full-day Bali Tour", description: "Explore the island's best spots in a day.", durationLabel: "8-10 Hours", highlights: ["Comprehensive exploration", "Customizable spots"], priceLabel: "From inquiry" },
  { name: "Nusa Penida Trip", description: "An adventurous island hopping experience.", durationLabel: "Full Day", highlights: ["Island crossing", "Iconic landmarks"], priceLabel: "Contact for details" },
  { name: "Custom Bali Trip", description: "Design your perfect day in Bali.", durationLabel: "Flexible", highlights: ["You decide the route", "Full day flexibility"], priceLabel: "Custom quote" }
];

export const vehicles: VehicleItem[] = [
  { name: "Car with driver", capacity: "1-4 Passengers", useCase: "Couples & small groups", statusLabel: "Available by request" },
  { name: "Family car / Van", capacity: "5-10 Passengers", useCase: "Families & large groups", statusLabel: "Available by request" },
  { name: "Airport pickup", capacity: "Flexible", useCase: "Arrivals & departures", statusLabel: "Contact for schedule" }
];

export const galleryItems: GalleryItem[] = [
  { title: "Bali Temple", colorClass: "bg-slate-200" },
  { title: "Rice Terrace", colorClass: "bg-slate-300" },
  { title: "Sunset Beach", colorClass: "bg-slate-200" },
  { title: "Waterfall", colorClass: "bg-slate-300" },
  { title: "Culture", colorClass: "bg-slate-200" },
  { title: "Ocean Cliff", colorClass: "bg-slate-300" }
];

export const landingPageData: LandingPageData = {
  trustValues,
  destinations,
  tourPackages,
  vehicles,
  galleryItems,
};
