# Batch F03 — Casual Luxury Visual Refactor

## Feature Summary
Melakukan refactor visual awal pada landing page KBT berdasarkan feedback user menuju arah "Casual Luxury". Fokus tahap ini adalah pada Hero Section dan Card Packages sebagai proof of concept.

## Status
Completed / Checkpoint ready

## Story
F03 was created after user review found F02 visual too heavy, flat, and not fresh enough. Target market is Australia and Europe travelers, thus requiring a new direction.
New accepted visual direction: Casual Luxury Bali Travel UI.

## Current State
- Landing page uses Casual Luxury direction.
- Hero is readable and accepted.
- Navbar, sections, cards, vehicles, gallery, about, CTA, and footer are present.
- Remote prototype images are used.
- Images must be replaced with owned/curated assets before production.
- Backend/database/CMS/auth/payment/deployment/i18n remain HOLD.

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

## Execution Notes (F03.1B)
- Hero readability hard fix applied.
- Text panel added behind headline, subtitle, and CTA (`bg-black/45 backdrop-blur-md rounded-3xl`).
- CTA contrast improved (Solid white background and high-contrast border variant).
- Hero overlay adjusted to provide balanced global background dimming.
- No backend/database/CMS/auth/payment/deployment/i18n implemented.

## Execution Notes (F03.1C)
- Removed F03.1B large text panel after user feedback.
- Restored cleaner hero layout feel with open imagery.
- Applied minimal font/CTA readability fix (dark text over a light gradient overlay).
- CTA buttons adjusted to prominent primary teal (`bg-[var(--color-primary)]` and outline).
- No broad section refactor.
- No backend/database/CMS/auth/payment/deployment/i18n implemented.

## Execution Notes (F03.1D)
- Fixed broken Waterfall gallery image URL.
- Fixed broken About section image URL.
- No layout/design refactor.
- No backend/database/CMS/auth/payment/deployment/i18n implemented.

## Execution Notes (F03-CP)
- Hero readability was fixed with a minimal approach after rejecting the heavy glass panel.
- Open-source/remote prototype images were added.
- Broken image URLs were fixed.
- User accepted the current visual state with feedback: "ok segini sudah bagus".

## Sub-Batch Roadmap
- F03.0 — Completed
- F03.0A — Completed
- F03.1 — Completed
- F03.1A — Completed
- F03.1B — Rejected / Reworked
- F03.1C — Completed
- F03.1D — Completed
- F03-CP — Completed

## HOLD / Blocked Notes
- Full multilingual/i18n (do not install i18n packages).
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.

## Next Step
Recommended next step:
User decision for next feature:
- F04 — Mobile Responsiveness & Cross-Device Polish
OR
- F04 — Content/Copywriting Refinement
OR HOLD

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
