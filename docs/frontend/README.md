# KBT Frontend Documentation

This directory contains technical documentation for the frontend client of KBT — Kosuka Bali Trip.

## Frontend Status (F02 Checkpoint)
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + component-based UI
- **Design Direction:** Warm Tropical Premium (Tropical Teal, Sunset Coral, Slate Stone, Warm Sand)
- **Components:** Core UI components established (Button, Badge, Card, Container, Section, etc.)
- **Landing Page:** Visual static shell completed
- **Data:** Typed static mock data (`client/src/data/landing.ts`)

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
