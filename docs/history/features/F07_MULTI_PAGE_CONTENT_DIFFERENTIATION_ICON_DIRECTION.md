# Batch F07 — Multi-Page Content Differentiation & Icon Direction

## Feature Summary
Merapikan halaman index (homepage) agar berfungsi sebagai gateway/ringkasan yang bersih. Melakukan diferensiasi konten secara mendalam pada setiap halaman sub-rute agar memiliki struktur, informasi, dan copy yang unik sesuai dengan kegunaannya masing-masing. Mengganti seluruh emoji pada UI dengan pustaka ikon SVG kustom lokal (`BrandIcon.tsx`) bergaya minimalis/outline, currentColor, dengan rounded stroke.

## Status
Completed / Ready for validation

## Story
Setelah membagi website menjadi multi-page, isi dari halaman sub-rute seperti Destinations, Tours, Vehicles, Gallery, About, dan Contact sebelumnya hanya berupa copy-paste mentah dari preview component yang ada di homepage. Agar halaman-halaman tersebut memberikan informasi yang berguna secara terpisah dan profesional bagi wisatawan internasional, strukturnya dirombak agar fokus pada tujuan fungsional masing-masing halaman. Penggunaan emoji juga dibersihkan dan diganti dengan ikon outline SVG kustom agar desain terlihat kasual, luxury, dan premium.

## Current State
- **Homepage (`/`)**: Berfungsi sebagai ringkasan brand (landing summary) dan pintu gerbang navigasi (gateway).
- **Services (`/services`)**: Menjelaskan 3 model bantuan/layanan utama KBT beserta workflow, tabel perbandingan, dan CTA.
- **Destinations (`/destinations`)**: Membagi Bali berdasarkan kategori mood wisata (pantai, budaya, alam, keluarga, dataran tinggi, hidden gem) beserta rekomendasi area.
- **Tours (`/tours`)**: Menyajikan inspirasi trip style, visual timeline alur perjalanan harian standard, dan panduan durasi/pace.
- **Vehicles (`/vehicles`)**: Menjelaskan detail armada kendaraan, kapasitas penumpang & bagasi, serta disclaimer/syarat rental lengkap.
- **Gallery (`/gallery`)**: Berfungsi sebagai visual mood board berdasarkan kategori dan grid foto momen perjalanan.
- **About (`/about`)**: Menyampaikan kisah brand, pilar nilai perjalanan (comfortable, friendly, flexible, local-aware, not rushed), dan kelebihan KBT.
- **Contact (`/contact`)**: Berfungsi sebagai jalur inquiry yang jelas, menyajikan opsi tipe bantuan yang dipilih, dan checklist detail yang perlu disiapkan sebelum chat WhatsApp.
- **BrandIcon Component**: Ikon lokal SVG kustom siap pakai untuk seluruh bagian visual web.

## Execution Notes (F07.0 - BrandIcon Integration)
- Dibuat komponen [BrandIcon.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/ui/BrandIcon.tsx) di `client/src/components/ui/`.
- Ikon menggunakan format inline SVG outline minimalis, stroke width `2`, strokeLinecap `"round"`, strokeLinejoin `"round"`, dan warna dinamis `stroke="currentColor"`.
- Ikon dipasang pada komponen:
  - [TrustStrip.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/TrustStrip.tsx) (message, shield-check, map-pin, clock).
  - [HowItWorks.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/HowItWorks.tsx) (message, checklist, calendar, route).
  - [ServicesOverview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ServicesOverview.tsx) (route, compass, car).
  - [ServicesPreview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ServicesPreview.tsx) (route, compass, car).

## Execution Notes (F07.1 - Multi-Page Content Differentiation)
- **Destinations Page (`/destinations`)**: 
  - Ditambahkan kategori gaya wisata beserta ikon unik.
  - Ditambahkan panduan area rekomendasi berdasarkan segmen wisatawan (first-timers, couples, families, dll).
  - Ditambahkan CTA khusus konsultasi travel style.
- **Tours Page (`/tours`)**:
  - Ditambahkan pilihan trip style beserta deskripsinya.
  - Ditambahkan representasi timeline alur hari trip standard KBT (hotel pickup -> main spot -> lunch -> afternoon sight -> sunset -> hotel return).
  - Ditambahkan informasi panduan durasi trip (half-day vs full-day).
- **Vehicles Page (`/vehicles`)**:
  - Menampilkan jenis armada (standard, MPV, van, airport transfer, luggage-friendly, flexible route).
  - Ditambahkan kapasitas penumpang dan bagasi untuk tiap kategori agar membantu pemilihan kendaraan yang nyaman.
  - Ditambahkan catatan/syarat rental detail (fuel/driver included, overtime, toll/parking info).
- **Gallery Page (`/gallery`)**:
  - Ditambahkan filter kategori visual secara statis.
  - Ditambahkan microcopy "More travel moments coming soon." di bagian bawah grid foto.
- **About Page (`/about`)**:
  - Menyediakan pilar nilai utama KBT beserta ikon outline pendukung.
  - Menjelaskan keuntungan utama memilih model private local support.
- **Contact Page (`/contact`)**:
  - Memberikan petunjuk visual pemilihan tipe bantuan layanan.
  - Menyusun checklist data persiapan sebelum melakukan WhatsApp chat agar proses inquiry berjalan cepat dan terarah.

## Files Touched
- [BrandIcon.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/ui/BrandIcon.tsx) [NEW]
- [TrustStrip.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/TrustStrip.tsx) [MODIFY]
- [HowItWorks.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/HowItWorks.tsx) [MODIFY]
- [ServicesOverview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ServicesOverview.tsx) [MODIFY]
- [ServicesPreview.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/components/sections/ServicesPreview.tsx) [MODIFY]
- [destinations/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/destinations/page.tsx) [MODIFY]
- [tours/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/tours/page.tsx) [MODIFY]
- [vehicles/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/vehicles/page.tsx) [MODIFY]
- [gallery/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/gallery/page.tsx) [MODIFY]
- [about/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/about/page.tsx) [MODIFY]
- [contact/page.tsx](file:///i:/Workspace/Workspace-Syahputrawork/KBT-KosukaBaliTrip/client/src/app/contact/page.tsx) [MODIFY]

## Hold / Blocked Items
- Integrasi pembayaran, pemesanan otomatis online, form submission dengan backend.
- Halaman detail layanan (service detail page) atau detail destinasi per lokasi.
- Ilustrasi visual peta rute/custom map.
- Perapian penuh menu navigasi mobile (direkomendasikan untuk F08).
