# Batch F02 — Client Foundation & Design System

## Feature Summary
Menyiapkan dokumen arah teknis client dan design system awal untuk website public KBT (Kosuka Bali Trip) sebelum setup framework client dilakukan.

## Status
In Progress / F02.1 completed

## Execution Notes (F02.1)
- `client/` directory has been initialized.
- Next.js + TypeScript + Tailwind CSS successfully set up.
- Validated via `npm run lint` and `npm run build` with success.
- Minimal design tokens and placeholder added.
- No backend/database/CMS/auth/payment/deployment/i18n implemented (all remain HOLD).

## Story
Website KBT membutuhkan arah visual dan teknis yang jelas (Warm Tropical Premium) dengan pendekatan component-based UI menggunakan Next.js, TypeScript, dan Tailwind CSS. Ini penting agar saat coding dimulai, struktur token desain, styling, dan hierarki komponen sudah terpusat dan mudah dikelola.

## Current State
- `client/` has been initialized
- Next.js + TypeScript + Tailwind CSS are installed
- lint/build validation succeeded
- Warm Tropical Premium remains the visual direction
- English-first remains the content direction
- i18n remains HOLD
- backend/database/CMS/auth/payment/deployment remain HOLD

## Sub-Batch Roadmap
- F02.0 — Completed
- F02.1 — Completed
- F02.1A — Completed
- F02.2 — Next
- F02.3 — Planned
- F02.4 — Planned
- F02-CP — Planned

## HOLD / Blocked Notes
- Full multilingual/i18n (do not install i18n packages, do not create /en or /id routes).
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.
- No code/framework setup until F02.1 is approved.

## Next Step
Menyiapkan eksekusi F02.2 — Core UI Components.

## Validation Checklist
- [x] F02.0 direction documented
- [x] F02.1 client framework initialized
- [x] Next.js + TypeScript + Tailwind setup completed
- [x] npm run lint succeeded
- [x] npm run build succeeded
- [x] No backend/database/CMS/auth/payment/deployment/i18n implemented

## Notes
Arah teknis client ini memastikan project terkelola dengan baik sejak awal, mencegah styling yang berantakan, dan memastikan kesiapan untuk iterasi berikutnya (client setup & components).
