# KBT Frontend Documentation

This directory contains technical documentation for the frontend client of KBT — Kosuka Bali Trip.

## Frontend Status (F03 Checkpoint)
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + component-based UI
- **Design Direction:** Casual Luxury Bali Travel UI (F03 visual refactor accepted by user)
- **Components:** Core UI components established (Button, Badge, Card, Container, Section, etc.)
- **Landing Page:** Visual static shell completed and accepted. Current page is still static/prototype.
- **Data:** Typed static mock data (`client/src/data/landing.ts`) with remote prototype image assets.
- **Note:** Replace remote stock images with owned/curated assets before production.

## Local Development & Validation
```bash
cd client
npm run dev
npm run lint
npm run build
```

## HOLD Items
The following are explicitly **NOT** implemented yet:
- Backend / API
- Database integration
- CMS for content management
- Authentication / Login
- Payment gateway
- Booking engine logic
- Real-time vehicle availability
- Multilingual / i18n routes (`/en` or `/id`)
- Production deployment configuration
