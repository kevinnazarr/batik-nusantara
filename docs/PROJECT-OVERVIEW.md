# Batik Nusantara — Ringkasan Project (Detail)

> Dokumen ini menjelaskan project **Batik Nusantara** secara menyeluruh: identitas, arsitektur, tech stack, struktur repository, status implementasi, desain, dan konvensi pengembangan.
> Sumber fakta: README.md, AGENTS.md, DESIGN.md, `docs/`, konfigurasi repository (`package.json`, `composer.lock`, `compose.yaml`).

---

## 1. Identitas Project

| Item | Detail |
|---|---|
| Nama | **Batik Nusantara** |
| Tipe | Platform e-commerce **single-store** untuk toko batik Indonesia |
| Produk | Kemeja, dress, blouse, kain batik, sarung, tas, dompet, dan produk olahan batik lainnya |
| Tujuan | Production-ready sekaligus project portfolio fullstack |
| Status | **In Development** |
| Author | [kevinnazarr](https://github.com/kevinnazarr) |
| Lisensi | Belum ditentukan |
| Branch utama | `main` (23 commits, inisialisasi awal September 2026) |
| Pendekatan | **Docs-driven development** — dokumentasi adalah source of truth sebelum implementasi |

---

## 2. Tech Stack (versi aktual dari lockfile)

### Frontend — `apps/web` (Next.js)

| Teknologi | Versi (package-lock.json) | Peran |
|---|---|---|
| Next.js | **16.3.4** | Framework React — App Router & Server Components |
| React | **19.2.8** | Library UI |
| TypeScript | **5.9.3** | Type-safe JavaScript |
| Tailwind CSS | **4.3.3** (via `@tailwindcss/postcss` ^4) | Utility-first styling utama |
| GSAP | **3.15.0** | Timeline / complex / scroll animation |
| Motion | **13.2.0** | UI interaction / micro-interaction |
| Lenis | **1.3.26** | Smooth scrolling |
| ESLint | ^9 + `eslint-config-next` | Lint |

### Backend — `apps/api` (Laravel)

| Teknologi | Versi | Peran |
|---|---|---|
| Laravel Framework | **v13.30.1** (composer.lock) | REST API utama |
| PHP | ^8.3 (requirement composer.json) | Bahasa backend |
| Laravel Sanctum | **v4.3.3** | Auth SPA & token |
| PHPUnit | ^12.5.12 | Testing |
| Laravel Pint / Pao / Pail | dev | Code style & tooling |
| Laravel Tinker | ^3.0 | REPL artisan |

### Database, Cache & Infrastruktur

| Teknologi | Detail |
|---|---|
| PostgreSQL | **16-alpine** (Docker, port `5432`) — database transaksional |
| Redis | **7-alpine** (Docker, port `6380`) — cache & queue |
| Docker Compose | `compose.yaml` — hanya 2 service: `postgres` + `redis`, keduanya dengan healthcheck |
| Cloudflare | CDN & DNS (target deployment) |
| VPS | Target deployment server |

### Integrasi Pihak Ketiga (terdokumentasi, belum terimplementasi)

| Service | Peran |
|---|---|
| **Midtrans** | Payment gateway (Snap, VA, metode lain) |
| **Biteship** | Shipping aggregator multi-courier (tarif & tracking) |
| **Cloudflare R2** | Object storage S3-compatible (gambar produk) |
| **Google OAuth** | Login sosial |

> Catatan: integrasi di atas sudah dirancang di dokumentasi (kontrak interface, webhook, env) tetapi **belum ada kode implementasinya** di repository.

---

## 3. Arsitektur

### 3.1 Bentuk umum

**Modular monolith backend + frontend Next.js terpisah** — sederhana untuk satu developer/UMKM, tetapi boundary domain tetap jelas.

```text
Internet
   |
Cloudflare
   |
   +---------------------------+
   |                           |
Next.js                      Laravel API
   |                           |
   |            +--------------+-------------+
   |            |              |             |
   |        PostgreSQL       Redis       R2 Storage
   |            |
   |      +-----+------+------+
   |      |     |      |      |
   |   Catalog Order Customer Content
   |             |
   |        Payment/Shipping
   |
   +---- Midtrans / Biteship / Google OAuth
```

### 3.2 Pembagian tanggung jawab

**Frontend (Next.js):**
- Route/page rendering, SEO metadata, customer UI
- Local guest cart/session state, form UX, animation
- Memanggil REST API + payment UI handoff
- *Business truth tidak boleh hanya di frontend*

**Backend (Laravel) — source of truth untuk:**
- Harga (price), stok (stock), diskon (discount)
- Shipping, order total, payment state
- Auth, authorization, validasi cart/checkout, inventori
- Lifecycle order, integrasi payment/shipping, webhook, admin API

### 3.3 Struktur repository

```text
batik-nusantara/
├── apps/
│   ├── web/                # Frontend Next.js (App Router)
│   └── api/                # Backend Laravel REST API
├── docs/                   # Dokumentasi lengkap (package v2.0)
│   ├── guides/             # Product, PRD, scope, user stories, test plan, sprint
│   ├── architecture/       # Arsitektur, ERD, state machines, deployment, ADR
│   ├── api/                # Kontrak REST API & webhooks
│   ├── frontend/           # Design system, sitemap, wireframe, SEO
│   ├── decisions/          # ADR
│   └── logs/               # Change history (LOG-N.md)
├── infra/                  # Infrastruktur/deployment (masih kosong, .gitkeep)
├── scripts/                # Otomasi (validate-pages.mjs)
├── proto/                  # Prototype HTML statis (preview desain)
├── .github/                # Issue templates, PR template, workflows (.gitkeep)
├── compose.yaml            # PostgreSQL 16 + Redis 7 (development)
├── DESIGN.md               # Design system source of truth (style reference)
├── AGENTS.md               # Aturan kerja untuk AI agent / developer
└── README.md               # Entry point
```

---

## 4. Frontend (`apps/web`) — Detail

### 4.1 Status saat ini

- **Scaffold `create-next-app`** dengan Next.js 16 App Router; `src/app/layout.tsx` dan `src/app/page.tsx` masih boilerplate bawaan.
- **Struktur route sudah dibuat** (semua halaman masih *placeholder* berisi teks statis, misal `<main className="container py-16">Shop — catalog</main>`).
- Direktori `src/components/*` (foundations, navigation, commerce, feedback, admin) dan `src/lib/api/` **masih kosong** — komponen dan lapisan akses API belum diimplementasikan.

### 4.2 Route structure yang direncanakan

**Storefront** `(storefront)`:
- `/` — home
- `/shop` — katalog
- `/search` — pencarian
- `/cart` — keranjang
- `/checkout` — checkout
- `/category/[slug]` — kategori
- `/product/[slug]` — detail produk
- `/order/[orderNumber]` — tracking pesanan
- `/order/success` — konfirmasi sukses
- `/stories` & `/stories/[slug]` — konten/cerita editorial

**Auth** `(auth)`: `/login`, `/register`, `/forgot-password`

**Akun** `account/`: dashboard, orders, orders/[orderNumber], addresses, wishlist

**Admin** `admin/`: dashboard, orders (+detail), products (list/create/edit), categories, inventory, customers, promotions, banners, stories, settings

### 4.3 Konvensi pengembangan frontend

- **Server Components secara default**; Client Components hanya untuk state/interaksi/browser API/animation.
- API access dipusatkan di `apps/web/src/lib/api/`.
- Reusable components, hindari component raksasa & abstraction prematur.
- Tailwind sebagai styling utama.
- Animasi: GSAP (timeline/complex/scroll), Motion (interaction/micro), Lenis (smooth scroll); hormati `prefers-reduced-motion`.

---

## 5. Backend (`apps/api`) — Detail

### 5.1 Status saat ini

- **Fresh Laravel 13 scaffold** + Sanctum terpasang.
- Model: hanya `User.php` (Authenticatable).
- Migrasi: hanya default Laravel — `users`, `cache`, `jobs`, `personal_access_tokens` (+ `database/database.sqlite` untuk dev).
- Route: `api.php` hanya endpoint `/user` (auth:sanctum); `web.php` default welcome; `console.php` default inspire.
- Struktur direktori domain sudah disiapkan namun **hanya berisi `.gitkeep`**:
  - `app/Domain/` → Catalog, Customer, Commerce, Payment, Shipping, Content
  - `app/Actions/` → Cart, Checkout
  - `app/Http/Controllers/` → Auth, Admin (kosong, hanya base `Controller.php`)
  - `app/Services/` → Media, Payment, Shipping
  - plus `Jobs/`, `Events/`, `Listeners/`, `Policies/`, `Http/Resources/`

### 5.2 Struktur backend yang direncanakan

```text
app/
  Actions/        # Cart, Checkout, Orders, Payments, Shipping
  Domain/         # Catalog, Customer, Commerce, Payment, Shipping, Content
  Http/
    Controllers/  # tipis — logic bisnis tidak menumpuk di controller
    Requests/     # Form Request untuk validasi kompleks
    Resources/    # API Resources untuk response standard
  Jobs/ Events/ Listeners/ Policies/ Services/ Enums/
```

### 5.3 Domain rules (aturan bisnis)

```text
Product
→ Product Variant
→ SKU
→ Inventory
```

- Stock & pricing berbasis **variant/SKU**; jangan hard-code `size`, `color`, atau atribut tertentu di tabel `products`.
- **Order Status, Payment Status, Shipment Status dipisahkan** — masing-masing punya state machine sendiri.
- Order menyimpan **snapshot data transaksi penting** agar histori immutable secara bisnis.
- **Guest checkout adalah first-class flow** — tidak memerlukan login.
- Backend adalah source of truth untuk price, stock, discount, shipping, order total, payment state.

### 5.4 Integrasi boundary (kontrak interface — desain)

| Interface | Method | Implementasi awal |
|---|---|---|
| `PaymentGatewayInterface` | `createTransaction()`, `getTransactionStatus()`, `handleNotification()` | `MidtransPaymentGateway` |
| `ShippingProviderInterface` | `calculateRates()`, `createShipment()`, `getTracking()`, `handleWebhook()` | `BiteshipShippingProvider` |
| `MediaStorageInterface` | `put()`, `delete()`, `temporaryUrl()` | S3-compatible Cloudflare R2 |

**Async jobs** (queue) untuk: email notification, image processing, webhook side effects, shipment sync, cleanup expired reservation.

**Caching candidates**: categories, active banners, product listing, public story pages. Jangan cache inventory/order tanpa strategi invalidation jelas.

---

## 6. Desain (`DESIGN.md`) — Design System

`DESIGN.md` adalah **satu-satunya sumber kebenaran desain** (keputusan dicatat di `docs/decisions/ADR-001-design-md-adoption.md` setelah konflik dengan brief `docs/frontend` versi "warm" diselesaikan).

**Theme:** *editorial* — "warisan yang dipakai hari ini · heritage woven into everyday" (referensi: COS, ARKET, Sejauh Mata Memandang, Aritzia, Everlane).

### Tokens utama

- **Warna core:** ink `#181d26` (primary absolut, bukan aksen), canvas `#ffffff`, surface-soft `#f8fafc`, surface-strong `#e0e2e6`, stone-gray `#9297a0`, body `#333840`, muted `#41454d`, hairline `#dddddd`, link blue `#1b61c9` (**hanya untuk text link, bukan tombol**).
- **Signature colors** (hanya untuk full-bleed brand-voltage bands): coral `#aa2d00`, forest `#0a2e0e`, cream `#f5e9d4` (+ pastel peach/mint/yellow/mustard).
- **Tipografi:** satu family — Inter Display variable (substitusi Inter → system-ui). Display weight **400–500 saja** (600/700 hanya untuk legal 13.12px); harga selalu weight **475 + tabular-nums**.
- **Spacing:** base 4px; section rhythm **96px** antar band; breathing horizontal 48px (16px mobile); page max-width 1280px.
- **Radius:** 2px (legal/tag) / 6px (input, chips) / 10px (card produk) / 12px (CTA & signature) / pill **hanya untuk harga/badge pricing**.
- **Elevasi:** hampir flat — depth dari border 1px `#dddddd` + kontras surface, bukan shadow tebal.

### Prinsip penting

- Satu primary button (near-black) per viewport; secondary = outline hairline.
- Batik diperlakukan sebagai **material story** (crop ketat motif, macro canting, foto on-model natural), bukan wallpaper motif berulang.
- Jangan percaya status pembayaran dari frontend — Midtrans webhook adalah source of truth.
- Jangan buat guest checkout second-class.
- Verifikasi stok/harga/diskon di backend — frontend hanya display.

### Halaman yang dirancang

Homepage, katalog/shop, PDP (gallery + variant selector + CTA sticky di mobile), cart drawer, checkout (single column 640px, stepper: Keranjang → Informasi → Pengiriman → Pembayaran), order tracking, filter bar, signature campaign band, footer dark.

---

## 7. Prototype HTML (`proto/`)

Preview desain statis berbasis **satu page = satu file HTML mandiri** (HTML + CSS + JS di-inline, tanpa framework):

| File | Isi |
|---|---|
| `proto/index.html` | Home |
| `proto/shop.html` | Katalog + filter/search/sort |
| `proto/product.html` | Detail produk (render dari `?id=`) |
| `proto/cart.html` | Keranjang + checkout demo |

Karakteristik (dari LOG-4):
- Hasil refactor dari **SPA hash-routing** menjadi multi-page file nyata; link internal konversi penuh, redirect polyfill untuk `#/...` lama.
- Blok GLOBAL (design tokens, chrome: header/drawer/wishlist modal/cookie banner/toast/footer, cart & wishlist store localStorage, renderer product card) **di-inline verbatim di setiap page** agar self-contained (konsekuensi duplikasi fisik ~1.700 baris CSS + ~530 baris JS per page — keputusan yang diminta, bukan drift).
- Konten contoh (harga/produk demo, URL Unsplash) — **bukan toko aktif**, tidak untuk production.
- Validasi otomatis via `scripts/validate-pages.mjs` (node): sintaks JS inline, brace balance CSS, chrome IDs, internal links + anchors, getElementById targets, CSS class coverage, isolasi CSS per-page, konsistensi generated product pages.
- Riwayat: LOG-2 (preview homepage), LOG-3 (upgrade v2: motion layer + ritme band), LOG-4 (refactor per-page).

---

## 8. Dokumentasi (`docs/`) — Package v2.0

Dokumentasi lengkap (±37 file) dengan source of truth: product, UX/UI, engineering, QA, deployment, operasional.

| Folder | Isi utama |
|---|---|
| `docs/guides/` | 00-PROJECT-BRIEF, 00-IMPLEMENTATION-GUIDE, 01-PRD, 02-SCOPE, 03-USER-STORIES, 04-UX-FLOWS, 11-TEST-PLAN, 13-BACKLOG, 36-E2E-SCENARIOS, 37-DOFR-DOD, 38-SPRINT-PLAN, 20-RELEASE-CHECKLIST, 45-PROJECT-ASSUMPTIONS |
| `docs/architecture/` | 05-SYSTEM-ARCHITECTURE, 06-ERD, 08-STATE-MACHINES, 09-SECURITY, 10-NFR, 12-DEPLOYMENT, 15-ADR, 16-DATA-DICTIONARY, 18-OPERATIONS-RUNBOOK, 19-ENVIRONMENT, 28-AUTH-SESSION, 29-ERROR-CONTRACT, 30-MIGRATION-SPEC, 31-QUEUE-JOBS, 32-OBSERVABILITY, 34-GIT-CI-CD, 35-SECURITY-TEST-CASES, 39-PERFORMANCE-BUDGET, 40-LEGAL-COMPLIANCE, 41-SEED-DATA-PLAN, ADR-TEMPLATE + `diagrams/` (6 diagram Mermaid) |
| `docs/api/` | 07-API-SPEC, 17-WEBHOOKS, 42-API-CONVENTIONS |
| `docs/frontend/` | 14-DESIGN-SYSTEM, 21-SITEMAP, 22-SCREEN-INVENTORY, 23-WIREFRAME-SPEC, 24-RESPONSIVE-SPEC, 25-COMPONENT-SPEC, 26-DESIGN-TOKENS, 27-MOTION-SPEC, 33-SEO-ANALYTICS, 43-CONTENT-MODEL, 44-ACCESSIBILITY-QA |
| `docs/decisions/` | ADR-001 (adopsi DESIGN.md) |
| `docs/logs/` | LOG-1 s.d. LOG-4 |

### Status dokumentasi

- Product direction: Draft baseline, siap divalidasi.
- Architecture: Proposed baseline.
- Database/API: Proposed contract, **belum diimplementasikan**.
- Deployment: Target VPS + Docker + Cloudflare.
- v2.0: implementation-ready baseline (UX, responsive, component, auth/session, API errors, migrations, queues, observability, SEO/analytics, CI/CD, security cases, E2E, DoR/DoD, sprint plan, performance, compliance).

### Prinsip kerja (dari docs/README.md)

1. Dokumentasi v2.0 = source of truth sebelum implementasi.
2. Backend = source of truth untuk harga, stok, order, payment, shipment.
3. Guest checkout = first-class flow.
4. Order menyimpan snapshot transaksi (histori immutable).
5. Payment & shipment punya state machine terpisah dari order.
6. Webhook wajib idempotent dan diverifikasi.
7. Jangan menambah kompleksitas yang belum diperlukan untuk UMKM.

---

## 9. Change History (`docs/logs/`)

| Log | Ringkasan |
|---|---|
| **LOG-1** | Adopsi penuh DESIGN.md sebagai design system frontend; revisi `docs/frontend/14-DESIGN-SYSTEM.md` & `26-DESIGN-TOKENS.md`; ADR-001 dibuat. |
| **LOG-2** | Preview homepage statis single-file (`index.html`) dengan token DESIGN.md, band rhythm, motif SVG placeholder, a11y. |
| **LOG-3** | Upgrade v2 homepage: motion layer (scroll reveal + stagger, IntersectionObserver, `prefers-reduced-motion`), sticky nav, ritme band lengkap. |
| **LOG-4** | Refactor per-page: SPA hash-routing → satu file HTML mandiri per page; `scripts/validate-pages.mjs` dibuat; validation gate GREEN. |

---

## 10. Cara Menjalankan

### Infrastruktur (database & cache)

```bash
docker compose up -d     # PostgreSQL 16 (:5432) + Redis 7 (:6380)
docker compose ps
docker compose down
```

### Frontend

```bash
cd apps/web
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build
```

### Backend

```bash
cd apps/api
composer install
cp .env.example .env   # sesuaikan DB_PASSWORD dengan compose.yaml (batik_secret)
php artisan key:generate
php artisan migrate
php artisan serve      # http://localhost:8000
php artisan test
```

### Validasi prototype

```bash
node scripts/validate-pages.mjs
```

---

## 11. Konvensi Pengembangan (AGENTS.md)

- **TDD** untuk feature/bug fix: RED → GREEN → REFACTOR → VALIDATE; bug fix wajib regression test.
- **Quality gate sebelum commit**: relevant tests PASS, lint PASS, type-check PASS, build PASS, docs updated, LOG-N.md dibuat, Obsidian synced (saat ini **NOT CONFIGURED** — `OBSIDIAN_VAULT_PATH` tidak ditemukan), diff reviewed, no secrets.
- **Branch naming**: `feat/<name>`, `fix/<name>`, `refactor/<name>`, `test/<name>`, `docs/<name>`, `chore/<name>`, `ci/<name>`.
- **Conventional Commits**: `feat(scope): ...` dst.
- **Change log**: setiap task berarti membuat `docs/logs/LOG-N.md` (sequential).
- **Security**: secret hanya di environment; webhook Midtrans/Biteship diverifikasi & idempotent; admin authorization di backend; shipping tidak bergantung pada satu courier; gambar produk di object storage (bukan PostgreSQL).

---

## 12. Status & Peta Jalan Saat Ini

| Area | Status |
|---|---|
| Desain system (DESIGN.md + docs) | ✅ Lengkap (v2.0, ADR-001) |
| Prototype HTML statis | ✅ Lengkap (proto/, validation gate green) |
| Frontend Next.js | 🚧 Scaffold + struktur route, halaman masih placeholder |
| Backend Laravel | 🚧 Fresh scaffold + Sanctum, belum ada model/API domain |
| Database schema (migrasi domain) | ⏳ Belum (hanya migrasi default Laravel) |
| Integrasi Midtrans / Biteship / R2 / Google OAuth | ⏳ Belum (kontrak interface terdokumentasi) |
| CI/CD, infra/, deployment | ⏳ Belum (folder `.gitkeep`) |
| Logs / Obsidian | ✅ LOG-1..4; Obsidian NOT CONFIGURED |

**Langkah berikutnya yang wajar** (sesuai backlog & implementasi guide): menerapkan token DESIGN.md ke `apps/web` (globals.css / Tailwind theme), membangun homepage & katalog dengan data dari API, kemudian implementasi model domain + migrasi PostgreSQL di `apps/api` (Catalog → Commerce → Payment/Shipping), diikuti integrasi payment/shipping/webhook.

---

*Dokumen dibuat berdasarkan fakta repository per 2026-09-07. Untuk detail lebih dalam, baca file yang dirujuk di tiap bagian.*