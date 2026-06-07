export interface TrustValue {
  title: string;
  description: string;
  iconLabel?: string;
}

export interface DestinationItem {
  name: string;
  description: string;
  region?: string;
  tag?: string;
  colorClass: string;
}

export interface TourPackageItem {
  name: string;
  description: string;
  durationLabel: string;
  highlights: string[];
  priceLabel: string;
  badge?: string;
}

export interface VehicleItem {
  name: string;
  capacity: string;
  useCase: string;
  statusLabel: string;
}

export interface GalleryItem {
  title: string;
  location?: string;
  colorClass: string;
}

export interface LandingPageData {
  trustValues: TrustValue[];
  destinations: DestinationItem[];
  tourPackages: TourPackageItem[];
  vehicles: VehicleItem[];
  galleryItems: GalleryItem[];
}
