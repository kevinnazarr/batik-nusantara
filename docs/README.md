# Batik-Nusantara Documentation

Documentation package v2.0 untuk project ecommerce **Batik-Nusantara**, sebuah single-store ecommerce untuk UMKM/toko batik yang menjual berbagai olahan batik: kemeja, dress, kain, tas, scarf, sarung, dan produk terkait.

## Tujuan

Dokumen ini menjadi sumber kebenaran bersama untuk product, UX/UI, engineering, QA, deployment, dan operasional.

## Status

- Product direction: Draft baseline, siap divalidasi.
- Architecture: Proposed baseline.
- Database/API: Proposed contract, belum diimplementasikan.
- Deployment: Target VPS + Docker + Cloudflare.
- Payment: Midtrans.
- Shipping: Biteship sebagai aggregator multi-courier.
- Object storage: Cloudflare R2.

## Stack baseline

- Frontend: Next.js + React + TypeScript
- Styling/UI: Tailwind CSS + shadcn/ui
- Animation: GSAP + Framer Motion + Lenis
- Backend: Laravel REST API + Sanctum
- Database: PostgreSQL
- Cache/queue: Redis
- Payment: Midtrans Snap
- Shipping: Biteship
- Storage: Cloudflare R2
- Infrastructure: Docker + VPS + Cloudflare

## Struktur dokumentasi

Dokumen dikelompokkan per domain. Nomor file mempertahankan penomoran asli paket v2.0.

### `guides/` — Product & proses

| File | Isi |
|---|---|
| 00-PROJECT-BRIEF.md | Ringkasan project |
| 00-IMPLEMENTATION-GUIDE.md | Panduan implementasi end-to-end |
| 01-PRD.md | Product Requirements Document |
| 02-SCOPE.md | Scope, MVP, out-of-scope |
| 03-USER-STORIES.md | User stories + acceptance criteria |
| 04-UX-FLOWS.md | User flow dan checkout flow |
| 11-TEST-PLAN.md | Strategi testing |
| 13-BACKLOG.md | Epic, milestone, backlog |
| 36-E2E-SCENARIOS.md | E2E scenarios |
| 37-DOFR-DOD.md | Definition of Ready/Done |
| 38-SPRINT-PLAN.md | Sprint plan |
| 20-RELEASE-CHECKLIST.md | Checklist rilis |
| 45-PROJECT-ASSUMPTIONS.md | Assumptions/open decisions |

### `architecture/` — Backend & infrastruktur

| File | Isi |
|---|---|
| 05-SYSTEM-ARCHITECTURE.md | Arsitektur aplikasi |
| 06-ERD.md | Model data dan ERD |
| 08-STATE-MACHINES.md | State order/payment/shipment |
| 09-SECURITY.md | Security baseline |
| 10-NFR.md | Non-functional requirements |
| 12-DEPLOYMENT.md | Deployment dan operasi |
| 15-ADR.md | Architecture Decision Records |
| ADR-TEMPLATE.md | Template ADR baru |
| 16-DATA-DICTIONARY.md | Kamus data tabel inti |
| 18-OPERATIONS-RUNBOOK.md | Runbook operasional |
| 19-ENVIRONMENT.md | Environment variables |
| 28-AUTH-SESSION-ARCHITECTURE.md | Auth/session |
| 29-ERROR-CONTRACT.md | API error contract |
| 30-MIGRATION-SPEC.md | PostgreSQL migration rules |
| 31-QUEUE-JOBS.md | Queue/job design |
| 32-OBSERVABILITY.md | Logging/metrics |
| 34-GIT-CI-CD.md | Git + CI/CD |
| 35-SECURITY-TEST-CASES.md | Security test cases |
| 39-PERFORMANCE-BUDGET.md | Performance budget |
| 40-LEGAL-COMPLIANCE.md | Legal/operational checklist |
| 41-SEED-DATA-PLAN.md | Seed/fixture plan |
| diagrams/ | 6 diagram Mermaid (system context, checkout sequence, order state, deployment, checkout flow, domain model) |

### `api/` — Kontrak API

| File | Isi |
|---|---|
| 07-API-SPEC.md | Kontrak REST API |
| 17-WEBHOOKS.md | Integrasi webhook + idempotency |
| 42-API-CONVENTIONS.md | API conventions |

### `frontend/` — UI/UX

| File | Isi |
|---|---|
| 14-DESIGN-SYSTEM.md | UI/UX design direction |
| 21-SITEMAP.md | Sitemap dan navigation |
| 22-SCREEN-INVENTORY.md | Inventory seluruh screen |
| 23-WIREFRAME-SPEC.md | Wireframe/layout specification |
| 24-RESPONSIVE-SPEC.md | Responsive + accessibility |
| 25-COMPONENT-SPEC.md | Component inventory |
| 26-DESIGN-TOKENS.md | Design tokens |
| 27-MOTION-SPEC.md | Motion specification |
| 33-SEO-ANALYTICS.md | SEO + analytics |
| 43-CONTENT-MODEL.md | Content/editorial model |
| 44-ACCESSIBILITY-QA.md | Accessibility QA |

Template issue/PR ada di `.github/` (bug.md, feature.md, PULL_REQUEST_TEMPLATE.md).

## Documentation status

- v2.0: implementation-ready baseline with UX, responsive, component, auth/session, API errors, migrations, queues, observability, SEO/analytics, CI/CD, security cases, E2E, DoR/DoD, sprint plan, performance, and compliance checklists.

## Prinsip kerja

1. Dokumentasi v2.0 menjadi source of truth sebelum implementasi.
2. Backend adalah source of truth untuk harga, stok, order, payment, dan shipment.
3. Guest checkout adalah first-class flow.
4. Order menyimpan snapshot transaksi agar histori immutable secara bisnis.
5. Payment dan shipment memiliki state machine terpisah dari order.
6. Webhook wajib idempotent dan diverifikasi.
7. Jangan menambah kompleksitas yang belum diperlukan untuk UMKM.
