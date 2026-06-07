# Batch F03 — Casual Luxury Visual Refactor

## Feature Summary
Melakukan refactor visual awal pada landing page KBT berdasarkan feedback user menuju arah "Casual Luxury". Fokus tahap ini adalah pada Hero Section dan Card Packages sebagai proof of concept.

## Status
In Progress / Proof of concept

## Story
Berdasarkan ulasan atas hasil fondasi visual F02, skema warna yang digunakan sebelumnya dirasa terlalu berat/vintage dan struktur antarmukanya dirasa kaku seperti panel admin. Karena target pasar utamanya adalah wisatawan Australia dan Eropa, KBT membutuhkan arah visual yang lebih elegan, modern, luas (*spacious*), bersih, namun tetap terkesan mewah tapi kasual (*casual luxury*). Perbaikan pada batch ini menggeser *tone* desain agar lebih premium namun *approachable*, layaknya liburan santai yang terkurasi.

## Current State
- `globals.css` telah diubah dengan palet yang lebih terang (*muted sage*, *soft background*, *sand/terracotta accent*).
- `HeroSection` telah diubah menjadi layar penuh (*min-height 90vh*) dengan efek *overlay* dan *floating info bar*.
- `TourPackagesPreview` telah disesuaikan agar bergaya kartu sudut membulat (*rounded-3xl*) dengan bayangan transparan tipis (*soft floating shadow*).
- Komponen *Button* telah disegarkan menggunakan gaya kapsul (*rounded-full*).

## Execution Notes (F03.0)
- `globals.css` updated with Casual Luxury palette.
- `HeroSection` refactored (full-height, gradient overlay, floating info bar).
- `TourPackagesPreview` refactored (rounded cards, soft shadow, image placeholder).
- Button/Card base UI refined.

## Execution Notes (F03.0A)
- POC polish applied.
- Package card no-price copy refined (from "Starting from" to "Trip style").
- Hero background structure prepared for future real image (wrapper added, scenic gradient improved).
- Mobile overlap spacing reviewed (bottom margin added to hero).

## Execution Notes (F03.1A)
- Hero readability fixed with stronger dark gradient overlay (Option A).
- Remaining placeholders replaced: `VehicleItem` updated to support `imageUrl`, real transport and travel Unsplash images added for Vehicles and About section.
- Typography/contrast improved: Navbar text sizing, footer readability, card descriptions set to `text-base`.
- Navbar/footer polished: Larger logo, adjusted spacing, rounded buttons, and hover states.
- Value proposition duplication resolved: TrustStrip values changed to complementary points (Booking, Transport, Destinations, Assistance).
- Section spacing refined and validated.
- No backend/database/CMS/auth/payment/deployment/i18n implemented.

## Sub-Batch Roadmap
- F03.0 — Completed
- F03.0A — Completed
- F03.1 — Completed
- F03.1A — Completed
- F03.2 — Planned / Broader visual polish after user review

## HOLD / Blocked Notes
- Full multilingual/i18n (do not install i18n packages).
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.

## Next Step
User review of polished image-enhanced landing page.

## Validation Checklist
- [x] Refactor *Hero Section* dengan tata ruang visual penuh dan *overlay*.
- [x] Menambahkan *floating info bar* pada *Hero*.
- [x] Penyesuaian bentuk *Tour Package Card* dengan struktur hierarki baru.
- [x] Pembaruan skema warna pada `globals.css` menjauhi gaya *vintage* berat.
- [x] Penggunaan *soft dropshadows* dan *rounded corners* di *Card* & *Button*.
- [x] npm run lint succeeded
- [x] npm run build succeeded
- [x] Tidak ada instalasi dependensi atau pembuatan fitur non-UI (HOLD).

## Notes
Pendekatan proof of concept memastikan pergeseran gaya visual telah disetujui tanpa harus merombak seluruh halaman sekaligus.
