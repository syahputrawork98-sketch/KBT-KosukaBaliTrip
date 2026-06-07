# Batch F02 — Client Foundation & Design System

## Feature Summary
Menyiapkan dokumen arah teknis client dan design system awal untuk website public KBT (Kosuka Bali Trip) sebelum setup framework client dilakukan.

## Status
In Progress

## Execution Notes (F02.1)
- `client/` directory has been initialized.
- Next.js + TypeScript + Tailwind CSS successfully set up.
- Validated via `npm run lint` and `npm run build` with success.
- Minimal design tokens and placeholder added.
- No backend/database/CMS/auth/payment/deployment/i18n implemented (all remain HOLD).

## Story
Website KBT membutuhkan arah visual dan teknis yang jelas (Warm Tropical Premium) dengan pendekatan component-based UI menggunakan Next.js, TypeScript, dan Tailwind CSS. Ini penting agar saat coding dimulai, struktur token desain, styling, dan hierarki komponen sudah terpusat dan mudah dikelola.

## Current State
- KBT adalah greenfield TypeScript web project.
- Visual Direction: Warm Tropical Premium (Tropical Teal, Warm Sand, Sunset Coral).
- Typography: Fraunces (Heading) & Inter (Body).
- English-first content direction. Multi-language/i18n is planned but currently **HOLD**.
- Frontend direction is planned (Next.js, Tailwind, Component-based) but not yet initialized.
- Backend, Database, CMS, Auth, Payment, Deployment are **HOLD**.

## Sub-Batch Roadmap
- F02.0 — Client Technical Direction & Design System Plan
- F02.1 — Client Framework Setup
- F02.2 — Core UI Components
- F02.3 — Landing Page Visual Shell
- F02.4 — Static Mock Data Structure
- F02-CP — Documentation Checkpoint

## HOLD / Blocked Notes
- Full multilingual/i18n (do not install i18n packages, do not create /en or /id routes).
- Backend, Database, CMS, Auth, Payment, Deployment.
- Booking engine & real-time vehicle availability.
- No code/framework setup until F02.1 is approved.

## Next Step
Menunggu persetujuan user untuk melanjutkan ke eksekusi F02.1 — Client Framework Setup.

## Validation Checklist
- [x] Visual direction "Warm Tropical Premium" documented.
- [x] Initial design tokens (colors, typography) documented.
- [x] Component-based UI and centralized styling rule documented.
- [x] English-first content documented, i18n marked as HOLD.
- [x] Sub-batch roadmap structured.
- [x] No dependencies or framework installed.
- [x] No code written.

## Notes
Arah teknis client ini memastikan project terkelola dengan baik sejak awal, mencegah styling yang berantakan, dan memastikan kesiapan untuk iterasi berikutnya (client setup & components).
