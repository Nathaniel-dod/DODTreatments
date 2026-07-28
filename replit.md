# Doc of Detox Treatments

Marketing website (production domain docofdetoxtreatments.com) unifying Doc of Detox & BraveHeart Nation treatments, clinics, consultations, and Personal Treatment & Training into one home, with inquiry forms stored for manual follow-up.

## Run & Operate

- Workflows: `artifacts/dod-treatments: web` (site) and `artifacts/api-server: API Server` — restart via workflows, never run dev manually
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, wouter, TanStack Query, shadcn/Tailwind
- API: Express 5; DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`; API codegen: Orval (from OpenAPI spec)

## Where things live

- Site pages: `artifacts/dod-treatments/src/pages/` (home, treatments x4, consultations, clinics x3, personal-treatment, practitioners)
- SEO head/JSON-LD manager: `artifacts/dod-treatments/src/components/Seo.tsx`; robots.txt + sitemap.xml in `artifacts/dod-treatments/public/`
- Inquiry form: `artifacts/dod-treatments/src/components/InquiryForm.tsx` → `POST /api/inquiries` (`artifacts/api-server/src/routes/inquiries.ts`) → `inquiries` table (`lib/db/src/schema/inquiries.ts`)
- API contract source of truth: `lib/api-spec/openapi.yaml`
- Harvested copy from the three legacy sites: `artifacts/dod-treatments/source-content/*.md`

## Architecture decisions

- No payments and no CMS by design — inquiry forms only, stored in Postgres for manual follow-up
- Practitioner directory is an iframe embed of https://app.braveheartnation.com (with outbound fallback + app store links)
- Product JSON-LD omits Offer price where no real price exists (only the $450 Dr. Wolfe consultation has a price) — never invent prices

## Product

Treatments catalog (Wolfe Non-Surgical, CellSonic Regeneration ESWT, Cardio MedBed EECP), consultations ($450 Dr. Wolfe + practitioner options with Sandra & Rita), clinic pages (Ixtapa-Zihuatanejo MX, Penticton BC), Personal Treatment & Training with 2 elite in-home practitioners, BraveHeartNation practitioner finder.

## User preferences

- Brand brief in `attached_assets/WEBSITES_-_NEW_2026_1785267326598.md` is authoritative: Inter font, exact gold ramp (#f4be45 etc.), glassmorphism, never nest backdrop-blur, strict SEO/AEO rules (unique titles ≤60 / descriptions 140–160, canonicals to https://docofdetoxtreatments.com, per-route JSON-LD, answer-first copy)
- No emojis in the UI; canonical product names used exactly: "Wolfe Non-Surgical", "CellSonic Regeneration ESWT", "Cardio MedBed EECP"

## Gotchas

- In `lib/api-spec/openapi.yaml`, use `type: number` (not `integer`) — Orval emits zod-v4-only `zod.int()` against the zod v3 root import and codegen typecheck fails
- Real contact numbers matter: Cinthia 1-855-900-4544 ext. 1 / 1-469-861-9872; Dr. Wolfe 1-469-861-9454 / ext. 5 — don't paraphrase or drop them

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
